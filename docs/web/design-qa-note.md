---
status: internal static-mock QA note
owner: web-qa
last-reviewed: 2026-09-21
---

# BABAI static mock: design and QA note

## Implementation decision

The mock uses native HTML, CSS and JavaScript with no build step, package
manager, runtime dependency, backend, analytics, third-party embed, remote
asset or network request. `index.html` is the only document surface; `script.js`
contains the complete deterministic fixture set and finite in-memory state
machine.

## Interaction and accessibility

- Semantic `header`, `nav`, `main`, section headings and `footer` landmarks
  are present, with one `h1` and a skip link.
- The coverage list is a vertical tablist with `aria-selected`,
  `aria-controls`, roving `tabindex`, visible focus and Arrow/Home/End
  keyboard navigation.
- The selected panel exposes a live status announcement for family and state
  changes. Reset controls are native buttons and remain reachable by keyboard.
- No form, file picker, text field, login control or submit action exists.
- `prefers-reduced-motion: reduce` disables smooth scrolling and non-essential
  transitions.
- The layout reflows at 320, 375, 768, 1024 and 1440 CSS pixels without
  page-level horizontal scrolling.
- Fixture text repeatedly identifies invented data and keeps payment,
  fulfillment, notification, refund, analytics and human decisions separate.

## Data and network boundaries

The page contains no customer, restaurant, staff, menu, payment or provider
record. Names, states, counts and labels are invented constants. There is no
form element, upload input, auth state, payment method, backend route,
`fetch`/XHR call, storage API, external URL, analytics tracker or deployment
integration. The browser requests only the local document, stylesheet,
script and favicon when served by a local static HTTP server.

## QA commands

```sh
git diff --check
node --check script.js
python3 -c 'import json; json.loads("{}")'
python -m http.server 4173
curl --fail --silent --show-error http://127.0.0.1:4173/ >/dev/null
```

The JSON command above is a tool-availability sentinel; the site has no JSON
fixture or runtime JSON dependency. Browser QA should additionally assert:

1. fourteen visible family tabs, one selected tab and correct Arrow/Home/End
   movement;
2. every family advances and resets without console errors;
3. `body.scrollWidth === innerWidth` at 320, 375, 768, 1024 and 1440;
4. keyboard focus remains visible and the live region announces changes;
5. reduced-motion emulation uses automatic scrolling; and
6. browser network contains only local page assets, with no storage mutations.

## Preserved evidence boundaries

The site is a review surface only. Founder-source anchors and architecture
contracts remain in `docs/web/flow-inventory.md` and
`docs/products/babai/flow-architecture.md`; this note does not promote them to
public claims or production behavior. Deployment workflows, external
registers, secrets and release actions are outside this change.
