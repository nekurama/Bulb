#!/usr/bin/env node

import { cp, mkdir, readFile, rm, stat } from "node:fs/promises";
import { execFileSync } from "node:child_process";
import path from "node:path";
import process from "node:process";

const root = process.cwd();
const outputDir = path.join(root, "dist");
const expectedSourceSha =
  process.env.PAGES_PREVIEW_SOURCE_SHA ||
  "52432d695e37b5a5b4a61c79acb10b71f7e6de3a";
const siteFiles = ["app.js", "favicon.svg", "index.html", "styles.css"];
const sourceFiles = siteFiles.map((file) => `site/${file}`);
const outputFiles = [...siteFiles, "mock-data.json"];
const deploymentFiles = [".github/workflows/pages-preview.yml", "scripts/build-pages-preview.mjs"];

const git = (...args) =>
  execFileSync("git", args, { cwd: root, encoding: "utf8" }).trim();

const assert = (condition, message) => {
  if (!condition) {
    throw new Error(message);
  }
};

const relativeFiles = (directory) =>
  execFileSync("git", ["ls-files", directory], {
    cwd: root,
    encoding: "utf8",
  })
    .split("\n")
    .filter(Boolean)
    .map((file) => file.slice(directory.length + 1))
    .sort();

const assertLocalReferences = async (html) => {
  const references = [...html.matchAll(/(?:href|src)="([^"]+)"/g)]
    .map(([, reference]) => reference)
    .filter(
      (reference) =>
        !reference.startsWith("#") &&
        !reference.startsWith("data:") &&
        !reference.startsWith("mailto:") &&
        !reference.startsWith("javascript:"),
    );

  for (const reference of references) {
    const target = path.resolve(outputDir, reference.split("#")[0]);
    assert(target.startsWith(`${outputDir}${path.sep}`), `Unsafe reference: ${reference}`);
    await stat(target);
  }
};

const main = async () => {
  const head = git("rev-parse", "HEAD");
  git("merge-base", "--is-ancestor", expectedSourceSha, "HEAD");
  assert(head !== expectedSourceSha, "Deployment changes must be committed before building");
  const changedSinceSource = git("diff", "--name-only", `${expectedSourceSha}..HEAD`)
    .split("\n")
    .filter(Boolean)
    .sort();
  assert(
    changedSinceSource.every((file) => deploymentFiles.includes(file)),
    "Files outside the deployment allowlist changed after the source commit",
  );

  assert(
    JSON.stringify(relativeFiles("site")) === JSON.stringify(siteFiles),
    "site/ contains files outside the Pages source allowlist",
  );
  for (const sourceFile of sourceFiles) {
    await stat(path.join(root, sourceFile));
  }

  const mockData = await readFile(path.join(root, "mock-data.json"), "utf8");
  const parsedMockData = JSON.parse(mockData);
  assert(parsedMockData.mode === "mock-only", "mock-data.json must remain mock-only");

  const sourceText = await Promise.all(
    sourceFiles
      .filter((file) => !file.endsWith(".svg"))
      .map((file) => readFile(path.join(root, file), "utf8")),
  );
  const boundaryPattern =
    /https?:\/\/|fetch\s*\(|XMLHttpRequest|WebSocket|sendBeacon|EventSource|localStorage|sessionStorage|document\.cookie/;
  assert(!sourceText.some((text) => boundaryPattern.test(text)), "External or persistent browser boundary found");
  assert(
    !sourceText.some((text) => /assets\/candidates|candidate-only|provenance\.json/i.test(text)),
    "Candidate content referenced by site",
  );

  await rm(outputDir, { recursive: true, force: true });
  await mkdir(outputDir, { recursive: true });
  for (const file of siteFiles) {
    await cp(path.join(root, "site", file), path.join(outputDir, file));
  }
  await cp(path.join(root, "mock-data.json"), path.join(outputDir, "mock-data.json"));

  const outputListing = execFileSync("find", [outputDir, "-type", "f", "-printf", "%P\n"], {
    cwd: root,
    encoding: "utf8",
  })
    .split("\n")
    .filter(Boolean)
    .sort();
  assert(
    JSON.stringify(outputListing) === JSON.stringify([...outputFiles].sort()),
    "Unexpected file in Pages artifact",
  );
  assert(!outputListing.some((file) => file.includes("candidates")), "Candidate asset entered Pages artifact");

  const html = await readFile(path.join(outputDir, "index.html"), "utf8");
  await assertLocalReferences(html);
  console.log(`Built ${outputFiles.length} allowlisted files from source ${expectedSourceSha}`);
};

main().catch((error) => {
  console.error(`Pages preview build failed: ${error.message}`);
  process.exitCode = 1;
});
