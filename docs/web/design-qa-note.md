---
status: qa-ready / founder review pending
owner: web-qa / Track 5
last-reviewed: 2026-09-21
---

# BABAI static template: design and QA note

## Implementation decision

Track 5 uses native HTML, CSS and JavaScript rather than React. The page is a
GitHub Pages-compatible static entry point with no build step, package manager,
runtime dependency, backend, analytics, third-party embed or external asset
request. `mock-data.json` is retained as a checked-in fixture for static QA,
but it is not fetched at runtime. The browser demo uses inline, invented state
so the page makes no network request.

| Option | Benefits | Costs |
| --- | --- | --- |
| Native HTML/CSS/JS (chosen) | Zero dependency surface, direct GitHub Pages hosting, fast review, semantic markup by default, and a small state machine that is easy to inspect. | State and rendering helpers are hand-maintained; the mock is not a reusable component library. |
| React | Reusable components, stronger conventions for a larger interactive product surface, and easier future state composition. | Adds a build tool, dependency/install surface and generated deployment output that are not justified by this single-page mock. |

React should be reconsidered only when the page becomes a shared application
surface with multiple independently evolving components, authenticated state or
client-side routing. This template does not make that commitment.

## Design direction

The visual direction is editorial and tactile: warm paper, deep green, burnt
orange annotation accents, serif display type and an asymmetric
conversation-to-order illustration made entirely from CSS. It intentionally
uses no content images or stock photography; the only added visual asset is the
local generated favicon at `/local/mnt/workspace/personal/bulb/.worktrees/web-qa/favicon.svg`.
It uses no remote fonts. The template
banner, slot labels and repeated boundary notes make provisional content,
demo-only behavior and unresolved CTA destinations visible in the interface.

## Interaction and accessibility

- `header`, `nav`, `main`, section headings and `footer` provide landmarks; the
  page has one `h1`. The canonical URL was intentionally omitted while domain
  ownership and publication remain unresolved.
- A skip link, visible `:focus-visible` treatment, native form controls and
  keyboard-operable buttons support keyboard traversal.
- The mobile navigation uses a native `details`/`summary` disclosure so its
  links remain keyboard-operable without JavaScript.
- Demo step buttons expose the active step with `aria-current` and
  `aria-controls`; route choices expose selection with `aria-pressed`.
- The demo has an explicit reset control. Invalid step indexes are ignored,
  the four-scene fixture is inline, and the internal 14-family coverage panel
  uses keyboard-operable tabs with a local state map.
- The form uses native required-field validation, local-only status text,
  `aria-invalid` recovery and no submission endpoint. Clear-fields resets the
  hidden route and status as well as visible values; no values enter storage.
  The preview submit control stays disabled until the local script initializes,
  so JavaScript-disabled browsing cannot fall through to a browser form
  submission.
- `prefers-reduced-motion` disables non-essential smooth scrolling and motion.
- Responsive rules reflow the process list at tablet and mobile widths instead
  of requiring page-level horizontal scrolling.
- The pilot boundary includes a collapsed internal-review panel for provisional
  LITE/BASE/PRO capability placeholders. It is explicitly marked as non-public
  packaging, keeps rates as placeholders, records the one-business/one-channel/
  one-branch pickup-first envelope and planning-only request sensitivities, and
  states that the static mock performs no live payment, delivery or API work.
- The flow coverage panel is an internal QA aid. It documents actor,
  precondition, happy/alternate/error path, state transition, permission/data
  boundary, acceptance check, implementation status and raw-chat citations in
  `docs/web/demo-flow-coverage.md`; it makes no public capability claim.
- The `noscript` message keeps the content boundary available when JavaScript is
  disabled; only the mock controls and local preview are unavailable.

## Content and data boundaries

This is a content-neutral template. Final headline, product claims, evidence,
testimonials and exact CTA wording remain placeholders pending Tracks 1–4.
`mock-data.json` contains invented demo scenes only. The form does not transmit,
persist or submit business details, menus, customer data, WhatsApp identifiers,
payment data or staff credentials.

The page structure follows the current BABAI landing-page and QA contracts:

- `docs/products/babai/web-landing-page.md`
- `docs/products/babai/web-qa-landing-page-scope.md`
- `docs/products/babai/product-definition.md`
- `docs/products/babai/experience-and-channels.md`
- `docs/products/babai/thesis-and-positioning.md`
- `docs/products/babai/validation.md`
- `docs/company/security-privacy-controls.md`
- `docs/company/ip-brand-legal.md`

Those documents are citations for structure and boundary decisions, not
permission to publish unresolved claims as final marketing proof.

## QA commands

The implementation is intended to be checked from the repository root:

```sh
git diff --check
python -m json.tool mock-data.json >/dev/null
node --check script.js
python -m http.server 4173
curl --fail --silent --show-error http://127.0.0.1:4173/ >/dev/null
```

The static-server smoke check should load `/` and confirm that no runtime
network request is made by the page beyond the document's relative stylesheet,
script and local image references. Basic structural checks
should confirm one `h1`, `header`, `nav`, `main`, `footer`, the skip link,
labels for each form control, the native mobile menu, reset controls,
`aria-controls`/`aria-current` step semantics, the reduced-motion rule and the
absence of a live form action or canonical domain.

## 2026-09-21 QA evidence

- **Scope:** `nekurama/web-qa` only; `data/executed_workflows/index.json` remains
  untracked and untouched.
- **Static checks:** `git diff --check`, JSON parsing, `node --check`, local
  HTTP smoke and landmark/accessibility assertions are run against the final
  worktree. Results are recorded in the handoff rather than treated as public
  launch evidence.
- **Browser smoke:** Chromium loaded the page without console errors; the
  local mock advanced from scene one to scene two and reset to scene one;
  local-only form preview exposed its status and clear-fields restored empty
  values plus the default route; the mobile disclosure opened from a focused
  `summary` with Enter.
- **Media/network:** At 320px, 768px and 1440px CSS widths,
  `body.scrollWidth` matched the viewport width. Reduced-motion emulation
  changed document scrolling to `auto`. The page source contains no fetch,
  XMLHttpRequest, WebSocket, external form action, remote font, tracker or
  embed; only relative stylesheet/script and local image references remain.
- **Responsive assertions:** the stylesheet includes a 320px-safe shell,
  mobile disclosure navigation, stacked grids, wrapped CTA/actions and
  reduced-motion behavior. A browser-level visual review remains a founder QA
  step before publication.
- **Privacy boundary:** no remote fonts, analytics, third-party embeds,
  external form action, canonical domain, secrets or invented customer data
  are present.
- **Capability gate:** the LITE/BASE/PRO panel is closed by default, labels
  itself internal-only, uses rate placeholders rather than public pricing, and
  keeps usage figures explicitly marked as planning sensitivities rather than
  service limits or capacity claims.

## October-December web/QA execution plan

This is an internal delivery plan for the static mock/template and later
founder-led demo review. It is not a launch plan, a public claim register, a
pricing plan or an authorization to collect data, connect services, change
DNS or deploy. The quality path is the default; the aggressive path may reduce
polish or parallelize work, but it may not relax the safety boundary or skip a
required exit check.

### Non-negotiable boundary for every month

- No real form submission, `action` endpoint, email/WhatsApp destination,
  analytics, tracker, embed, remote font, API call or production integration.
- No customer, restaurant, menu, payment, WhatsApp, staff or pilot data. Use
  invented fixtures only; if pilot evidence is later reviewed, use a
  redacted/anonymized evidence record outside the public/static artifact.
- No public claims, final testimonials, pricing, CTA endpoints, canonical
  domain, DNS mutation or deployment. Candidate logos and wording remain
  internal review material.
- Every asset must have source/provenance, hash or repository origin, draft
  alt treatment, crop/fit guidance and contrast notes before it enters a demo
  surface. Informative images get useful alt text; duplicate specimens are
  hidden from assistive technology; decorative artwork is not a text carrier.

### Milestones and gates

| Month / milestone | Owner and dependencies | Entry checks | Exit checks / evidence |
| --- | --- | --- | --- |
| **October — content-neutral mock/template quality, accessibility and CI checks** | **Driver:** web-QA. **Reviewers:** founder/product owner and CI maintainer. Depends on the current static root (`index.html`, `styles.css`, `script.js`, `mock-data.json`), the QA scope, and the asset provenance record. | Content remains slot-based or explicitly source-backed; mock data is synthetic; no live form action or external request exists; candidate assets have provenance and draft alt/contrast/crop notes. | `git diff --check`, JSON parse, `node --check`, SVG parse/shape checks and static HTTP smoke pass. One `h1`, landmarks, skip link, labels, focus treatment, reduced-motion rule and local-only asset loading are evidenced. Open founder/legal/content decisions remain listed rather than filled by assumption. |
| **November — demo-ready flow with synthetic/mock data** | **Driver:** web-QA. **Reviewers:** founder/product owner; screen-reader reviewer or accessibility partner. Depends on October exit, stable mock-data schema, approved test scenarios and candidate-asset QA. | October static/CI gate passes; four-scene mock flow and reset behavior are deterministic; no fixture contains real identities or operational data; demo script identifies the local-only boundary. | Demo advances and resets without console errors; responsive checks cover 320/375/768/1024/1440 CSS px and 200% zoom; keyboard-only traversal, screen-reader landmarks/names, focus order, contrast and reduced-motion checks are recorded. The demo remains useful with JavaScript disabled except for explicitly marked controls. |
| **December — pilot-hardening evidence and year-end demo gate** | **Driver:** web-QA. **Accountable reviewer:** founder/product owner. **Contributors:** pilot/validation owner for evidence shape only. Depends on November demo exit, synthetic scenario set, the staged validation contract and a decision log for unresolved CTA/legal/brand items. | Demo path is repeatable; evidence template distinguishes observed, synthetic and unknown; any pilot input is redacted/anonymized and stored outside the static page; asset approvals remain gated. | Hardening pack records scenario coverage, regressions, accessibility/browser results, network boundary, provenance/alt/contrast checks and known limitations. Founder/product owner records **year-end demo: pass, hold or fail** with blockers and next evidence; no public-release or deployment decision is implied. |

### Quality path versus aggressive path

| Path | Sequence and acceptable trade-off | Non-skippable guardrail |
| --- | --- | --- |
| **Quality (default)** | Keep October as a stabilization gate, run the full November manual accessibility pass, repeat the demo against every supported viewport, then package December evidence after a clean rerun and founder review. | All static, accessibility, provenance, synthetic-data and local-network checks above; unresolved decisions stay visible. |
| **Aggressive (planning alternative)** | Parallelize asset review, CI/static checks and synthetic scenario authoring; use the existing mock shell for an earlier November rehearsal; defer non-essential visual polish to December. | Do not trade away no-real-form/no-customer-data/no-network boundaries, keyboard and screen-reader coverage, reduced-motion behavior, asset provenance/alt/contrast, or the December founder gate. An incomplete manual check is a hold, not a pass. |

### Planning-only web QA inputs

The following are rough internal planning inputs, not approved spend, pricing,
quotes or public commercial terms. They assume existing repository/browser
tooling and no paid service is introduced. Apply a **15% contingency** to the
base estimate; replace these placeholders with founder-approved quotes before
any commitment.

| Input | Base planning estimate | 15% contingency view | Owner / dependency |
| --- | ---: | ---: | --- |
| QA onboarding, repository walkthrough and fixture/test-matrix setup | 12–16 person-hours | 14–19 person-hours | web-QA; depends on the current static artifact and QA scope |
| Accessibility/browser pass, evidence capture and CI/static maintenance | 20–32 person-hours | 23–37 person-hours | web-QA + accessibility reviewer; depends on October gate |
| Founder/operator demo rehearsal and December evidence packaging | 8–12 person-hours | 9–14 person-hours | founder/product owner + web-QA; depends on synthetic scenarios |
| Optional local travel for an in-person founder/demo review | 0 required; provisionally 1 trip at ₹8,000–₹20,000 | ₹0 required; ₹9,200–₹23,000 if approved | founder/product owner; only if remote review is insufficient |

Travel is optional and not a prerequisite for any gate. These inputs exclude
deployment, DNS, customer onboarding, real pilot operations, paid
infrastructure and public communications. They are planning estimates only and
must not be presented as product pricing or a customer cost.

### Source and founder-input map

- Current implementation/QA evidence: this note (`docs/web/design-qa-note.md`),
  especially **QA commands**, **2026-09-21 QA evidence**, **Candidate asset
  review** and **SVG QA record**.
- QA acceptance and data boundary: `docs/products/babai/web-qa-landing-page-scope.md`,
  **QA acceptance matrix** and **CTA and data-handling gate**.
- Landing-page scope and founder-source hierarchy:
  `docs/web/landing-page.md`, **Source-of-truth and evidence rules** and
  **Static page scope**.
- Founder execution input: the 2026-09-20 admin decision packet summarized in
  `docs/web/landing-page.md` and
  `docs/products/babai/web-qa-landing-page-scope.md`; it selects a static
  mock/demo, keeps external deployment out of scope and requires synthetic
  boundaries.
- Validation/onboarding input: `docs/products/babai/validation.md`, **Primary
  gate — staged**, and `nekurama.babai.research.md`, **Immediate pilot plan**
  and **Success criteria**. The founder north-star mapping is retained in
  `nekurama.raw.chat.json` (`4702681b-d611-4408-af5f-9001d04b6cfa`).

## Candidate asset review

Five user-supplied JPEGs are copied under `assets/candidates/` for internal
template review only. `assets/candidates/provenance.json` records the original
temporary paths, SHA-256 hashes, dimensions, draft alt text and review notes.
The source files are all opaque 800 × 800 JPEGs with a 1:1 aspect ratio; none
has an alpha channel. Four use an opaque black field and one has a checkerboard
pattern baked into the JPEG, so none is treated as transparent.

The template's **Asset review** section shows each candidate on light and dark
specimen surfaces with `object-fit: contain`, fixed intrinsic dimensions,
`loading="lazy"` and informative alt text on the first specimen. The duplicate
dark-surface specimen is hidden from assistive technology to avoid repeating the
same description. The board is explicitly candidate-only and does not replace
the approved repository SVGs or imply trademark clearance, licensing,
selection, final brand approval or public-asset approval.

Review findings:

- The BABAI character/wordmark candidate is most legible on light surfaces but
  its black JPEG field blends into dark surfaces; keep it contained and do not
  crop the character, bulb or wordmark.
- The NEKURAMA orange-wordmark candidates retain useful orange contrast, but
  their dark illustration detail weakens on dark surfaces and their black field
  is not transparent.
- The checkerboard NEKURAMA candidate has the checkerboard baked into the
  image; it is not a transparency treatment and should not be used as a logo
  source.
- The minimal NEKURAMA cat/keyhole candidate loses linework contrast on dark
  surfaces and at small responsive sizes.

No derived images were generated or re-encoded. The only optimization applied
to the template is delivery behavior (`width`/`height`, lazy loading,
asynchronous decoding and contained responsive rendering); a future approved
source should be optimized separately after founder selection and legal/assets
review.

## Founder decision packet: candidate lockup directions

The internal packet adds four locally authored transparent SVG studies under
`assets/candidates/logos/`:

1. **Mascot + spark** — friendly, capable companion cue with a restrained AI
   light/spark.
2. **Restaurant operator + spark** — contained badge cue for the owner/operator
   and restaurant service context.
3. **Wordmark + spark** — readable product-first lockup for headers and operator
   surfaces.
4. **Endorsed lockup** — BABAI product relationship with NEKURAMA as the
   parent/company direction.

The studies are grounded in `docs/products/babai/thesis-and-positioning.md`
(brand personality, restaurant-first buyer and messaging hierarchy),
`docs/products/babai/product-definition.md` (restaurant-first operating
boundary), and `docs/company/README.md` plus `docs/company/ip-brand-legal.md`
(NEKURAMA parent/company and BABAI product/brand relationship). The phrase
“BABAI — Business Automation by AI” appears only as founder-approved internal
wording in the endorsed study; final public copy remains gated.

Each concept is shown on light and dark specimen surfaces with draft alt text,
transparent-background usage notes, contrast guidance and aspect/crop rules.
These are visual QA notes, not legal clearance, trademark meaning, licensing
evidence, final selection or public-asset approval. Absolute local paths are
reported in the implementation handoff rather than embedded as deployment
references.

### Working naming and story treatment

For this internal QA packet, the naming hierarchy is treated as:

`NEKURAMA` (parent/company direction) → `BABAI` (product/brand) → future
products or verticals.

The working story is **friendly, capable business automation with a human
operator in control**. “BABAI — Business Automation by AI” is retained only
as founder-approved internal descriptor text inside the endorsed candidate; it
is not public copy, a legal name, a trademark conclusion or a product
availability claim. The page keeps the public headline, supporting copy and
CTA as slots until the founder/product/legal gates close.

The QA recommendation is to use **wordmark + spark** as the default responsive
lockup test because it keeps the product name legible in a horizontal header.
Use **mascot + spark** as the flexible supporting mark, **operator + spark** for
restaurant-operator contexts, and hold the **endorsed lockup** for internal
parent/product review because its descriptor and endorsement lose legibility
earlier at small sizes. This is a design QA recommendation, not founder
approval.

### SVG QA record

The four candidate SVGs are locally authored, transparent, dependency-free
studies. `assets/candidates/provenance.json` is the source of record for the
hashes, dimensions, alt text, source anchors and per-asset QA fields. The
tested specimen colors are cream `#FFFDF7`, deep green `#163D35`, dark
surface `#14201E`, and green-soft `#DCE9DF`. Relative-luminance checks record
11.78:1 for deep green/cream, 5.91:1 for orange/dark, 7.47:1 for
yellow/deep green and 9.56:1 for green-soft/deep green; accents are not
treated as small-text carriers.

All four concepts pass the crop rule only when their full supplied viewBox is
contained. The square studies must retain the ears, spark and base; the
horizontal studies must retain the full 3:1 frame, descriptor and endorsement.
Responsive QA keeps intrinsic dimensions in the markup, uses `object-fit:
contain`, and moves the board to one column below 860px so no candidate is
cropped or squeezed. Informative light-surface specimens have draft alt text;
duplicate dark specimens are hidden from assistive technology. None of these
studies is approved for favicon, public navigation, trademark, licensing or
production use.

## Unresolved decisions

Final copy and CTA wording, approved CTA destination and owner, privacy notice,
retention/deletion path, legal links, domain ownership, brand clearance,
testimonials/evidence provenance and any future React adoption remain open.
Deployment, DNS changes and pushes are outside this Track 5 change.
