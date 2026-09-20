---
status: draft
owner: web-qa / Track 5
last-reviewed: 2026-09-20
---

# BABAI static template: design and QA note

## Implementation decision

Track 5 uses native HTML, CSS and JavaScript rather than React. The page is a
GitHub Pages-compatible static entry point with no build step, package manager,
runtime dependency, backend, analytics, third-party embed or external asset
request. The only runtime data request is the repository-local
`mock-data.json`; an inline fallback keeps the mock understandable if that file
is unavailable.

| Option | Benefits | Costs |
| --- | --- | --- |
| Native HTML/CSS/JS (chosen) | Zero dependency surface, direct GitHub Pages hosting, fast review, semantic markup by default, and a small state machine that is easy to inspect. | State and rendering helpers are hand-maintained; the mock is not a reusable component library. |
| React | Reusable components, stronger conventions for a larger interactive product surface, and easier future state composition. | Adds a build tool, dependency/install surface and generated deployment output that are not justified by this single-page mock. |

React should be reconsidered only when the page becomes a shared application
surface with multiple independently evolving components, authenticated state or
client-side routing. This template does not make that commitment.

## Design direction

The visual direction is editorial and tactile: warm paper, deep green, orange
annotation accents, serif display type and an asymmetric conversation-to-order
illustration made entirely from CSS. It intentionally uses no generated images,
stock photography or remote fonts. The template banner and repeated boundary
labels make provisional content, demo-only behavior and unresolved CTA
destinations visible in the interface.

## Interaction and accessibility

- `header`, `nav`, `main`, section headings and `footer` provide landmarks; the
  page has one `h1`.
- A skip link, visible `:focus-visible` treatment, native form controls and
  keyboard-operable buttons support keyboard traversal.
- Demo step buttons expose the active step with `aria-current`; route choices
  expose selection with `aria-pressed`.
- The form uses native required-field validation, local-only status text and no
  submission endpoint. The optional contact field is not autocomplete-enabled.
- `prefers-reduced-motion` disables non-essential smooth scrolling and motion.
- Responsive rules reflow the process list at tablet and mobile widths instead
  of requiring page-level horizontal scrolling.
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
```

The static-server smoke check should load `/` and confirm local requests only
for `styles.css`, `script.js` and `mock-data.json`. Basic structural checks
should confirm one `h1`, `header`, `nav`, `main`, `footer`, the skip link,
labels for each form control and the reduced-motion rule.

## Unresolved decisions

Final copy and CTA wording, approved CTA destination and owner, privacy notice,
retention/deletion path, legal links, domain ownership, brand clearance,
testimonials/evidence provenance and any future React adoption remain open.
Deployment, DNS changes and pushes are outside this Track 5 change.
