#!/usr/bin/env node

import { cp, mkdir, readFile, rm, stat, writeFile } from "node:fs/promises";
import { execFileSync } from "node:child_process";
import path from "node:path";
import process from "node:process";

const root = process.cwd();
const outputDir = path.join(root, "dist");
const skipSourceCheck = process.env.PAGES_PREVIEW_SOURCE_SHA === "skip";
const expectedSourceSha = skipSourceCheck
  ? ""
  : process.env.PAGES_PREVIEW_SOURCE_SHA ||
    "a438b9203c016e492a2cd9628037bf88584a8bf1";
const sourceFiles = ["index.html", "styles.css", "script.js", "mock-data.json"];
const outputFiles = ["favicon.svg", ...sourceFiles];
const deploymentFiles = [".github/workflows/pages-preview.yml", "scripts/build-pages-preview.mjs"];

const git = (...args) =>
  execFileSync("git", args, { cwd: root, encoding: "utf8" }).trim();

const assert = (condition, message) => {
  if (!condition) {
    throw new Error(message);
  }
};

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
    const target = path.resolve(outputDir, reference.split(/[?#]/, 1)[0]);
    assert(target.startsWith(`${outputDir}${path.sep}`), `Unsafe reference: ${reference}`);
    await stat(target);
  }
};

const sanitizeHtml = (html) =>
  html
    .replace(/\s*<link rel="canonical" href="https:\/\/nekurama\.com\/">\s*/, "\n")
    .replace(
      /(\s*<meta name="theme-color" content="[^"]+">\s*)/,
      '$1    <link rel="icon" href="favicon.svg" type="image/svg+xml">\n',
    )
    .replace(/\s*<a href="#(?:asset-review|decision-packet)">(?:Asset review|Decision packet)<\/a>\s*/g, "\n")
    .replace(
      /\s*<section class="section candidate-assets-section" id="asset-review"[\s\S]*?<\/section>\s*/,
      "\n",
    )
    .replace(
      /\s*<section class="section decision-packet-section" id="decision-packet"[\s\S]*?<\/section>\s*/,
      "\n",
    );

const sanitizeStyles = (styles) =>
  styles
    .split("\n")
    .filter((line) => !line.includes("candidate-"))
    .join("\n");

const main = async () => {
  const head = git("rev-parse", "HEAD");
  if (!skipSourceCheck) {
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
  }

  for (const sourceFile of sourceFiles) {
    await stat(path.join(root, sourceFile));
  }

  const mockData = await readFile(path.join(root, "mock-data.json"), "utf8");
  const parsedMockData = JSON.parse(mockData);
  assert(parsedMockData.mode === "mock-only", "mock-data.json must remain mock-only");

  const html = sanitizeHtml(await readFile(path.join(root, "index.html"), "utf8"));
  const styles = sanitizeStyles(await readFile(path.join(root, "styles.css"), "utf8"));
  const script = await readFile(path.join(root, "script.js"), "utf8");
  const favicon = await readFile(path.join(root, "assets/branding/logo/nekurama-cat.svg"), "utf8");
  assert(!/assets\/candidates|candidate-only|provenance\.json/i.test(html), "Candidate content entered Pages HTML");
  assert(!/candidate-/i.test(styles), "Candidate styles entered Pages artifact");
  assert(
    !/https?:\/\/|XMLHttpRequest|WebSocket|sendBeacon|EventSource|localStorage|sessionStorage|document\.cookie/.test(
      `${html}\n${styles}\n${script}`,
    ),
    "External or persistent browser boundary found",
  );
  assert(/<svg\b/.test(favicon) && !/<script|<iframe|foreignObject|(?:href|xlink:href)="https?:\/\//.test(favicon), "Unsafe favicon asset");
  assert(
    !/fetch\s*\((?!\s*["']mock-data\.json["'])/.test(script),
    "Site code contains a non-local data request",
  );

  await rm(outputDir, { recursive: true, force: true });
  await mkdir(outputDir, { recursive: true });
  await writeFile(path.join(outputDir, "index.html"), html);
  await writeFile(path.join(outputDir, "styles.css"), styles);
  await cp(path.join(root, "script.js"), path.join(outputDir, "script.js"));
  await cp(path.join(root, "mock-data.json"), path.join(outputDir, "mock-data.json"));
  await writeFile(path.join(outputDir, "favicon.svg"), favicon);

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

  await assertLocalReferences(html);
  console.log(
    `Built ${outputFiles.length} allowlisted files${
      skipSourceCheck ? " from the preview artifact ref" : ` from source ${expectedSourceSha}`
    }`,
  );
};

main().catch((error) => {
  console.error(`Pages preview build failed: ${error.message}`);
  process.exitCode = 1;
});
