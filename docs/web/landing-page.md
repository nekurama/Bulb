---
status: partial
owner: NEKURAMA / BABAI
last-reviewed: 2026-09-21
scope: GitHub Pages landing-page and native mock-demo template; no external deployment
sources:
  - EXECUTION PLAN INPUT — WEB/QA (2026-09-21)
  - ADMIN SCOPE UPDATE — WEBSITE INTERNAL TEMPLATE/QA ONLY (2026-09-21)
  - NEW ADMIN DECISION PACKET (2026-09-20)
  - nekurama.raw.chat.json
  - nekurama.chatgpt.md
  - nekurama.babai.research.md
  - docs/products/babai/thesis-and-positioning.md
  - docs/products/babai/experience-and-channels.md
  - docs/products/babai/validation.md
  - docs/company/ip-brand-legal.md
  - docs/company/security-privacy-controls.md
---

# GitHub Pages landing page

This document defines the smallest credible GitHub Pages-compatible landing
page for BABAI under NEKURAMA, including an imaginative interactive mock/demo
that uses mock data only. It is a content, claim, publication, accessibility
and QA contract; it does not authorize external deployment or production
integration.

## Decision labels

- **Confirmed** — explicit current product/company truth or directly supported evidence.
- **Partial** — direction exists, but an important decision, proof point or approval is open.
- **Unknown** — the source set does not establish the fact.
- **Proposed** — a web-specific recommendation that requires product/company approval.
- **Gated** — do not publish until the named evidence or approval exists.

## 1. Publication decision

The following administrative packet is a direct decision input for this
revision: **NEW ADMIN DECISION PACKET (2026-09-20)**. Where it is more specific
than earlier web proposals, this packet governs.

| Decision | Status | Boundary |
| --- | --- | --- |
| A public landing page with an interactive mock/demo is the selected scope. | Confirmed by admin packet | The demo is illustrative only and must use mock data. |
| GitHub Pages is the hosting target. | Confirmed by admin packet | The site must remain static and GitHub Pages-compatible. |
| The initial domain target is `nekurama.com`. | Confirmed by admin packet | Domain/DNS control must move to company ownership; no live URL or DNS state is asserted here. |
| External deployment is authorized. | No — explicit boundary | Do not deploy, alter DNS, publish Pages, or connect production services in this work. |
| The page has no real auth, payments, customer data or production backend. | Confirmed by admin packet | Mock interactions must fail safely or explain that they are demonstrations. |
| The page represents BABAI as a NEKURAMA product. | Confirmed | BABAI is a product brand of NEKURAMA, not a separate company (`docs/company/identity-and-strategy.md`, `docs/company/ip-brand-legal.md`). |
| Publication readiness is complete. | Unknown / Gated | Trademark, legal identity, approved contact routes, proof permissions, repository ownership and DNS transfer remain open. |

### Domain transition

The public-facing starting point is **nekurama.com**, subject to company
ownership and deployment approval. The transition plan is:

1. Confirm the legal/company owner and registrar account.
2. Transfer DNS and domain control to company-owned accounts.
3. Configure GitHub Pages only after repository visibility, branch protection,
   deployment ownership and rollback are approved.
4. Validate the domain, TLS, redirects, canonical metadata and removal path
   before any public announcement.

Until those gates pass, the document must not publish a live URL or imply that
the domain is already controlled by NEKURAMA.

### Public/private boundary

The raw discussion distinguished public idea material from secrets and
sensitive information: making a repository public was acceptable only when it
contained no credentials, personal information, proprietary material or
restricted business data (raw Turn 18, message
`bbb217ea-888e-421a-a08d-c1099622b5c2`; Turn 19, message
`b15d1787-9525-4c2d-a1cb-d91ffa84ab76`). That caution applies to the source
repository and the generated Pages artifact:

- **Gated:** decide whether the repository and Pages source are public before
  enabling publication.
- Never ship tokens, `.env` files, credentials, private issue exports, customer
  data, internal research transcripts or unapproved personal information.
- Do not publish the raw founder export merely to support the landing page.
- Review the generated static bundle, repository history and deployment
  configuration, not only the visible page.

## 2. Audience and conversion intent

### Primary audience — confirmed

The initial audience is the owner/operator of a small-to-medium restaurant,
initially the 1–5 branch sweet spot, who:

- wants stronger direct customer relationships and direct-order economics;
- already uses or is willing to use WhatsApp with customers;
- struggles to manage WhatsApp manually during rush periods; and
- values repeat business and customer experience.

This is the confirmed ICP in
`docs/products/babai/thesis-and-positioning.md`, sections 11–12.

### Secondary audience — partial

Restaurant managers/admins and staff are operational users and possible
champions, but the owner/operator is the economic buyer. Stores and other local
businesses are research-supported expansion possibilities, not the first
landing-page audience. The page should not dilute the restaurant wedge with a
generic “every business” message.

### Conversion intent — confirmed by admin packet

The primary CTA is **Request a Pilot / Talk to Us**. The page should seek a
qualified pilot conversation or pilot-interest request, not a self-serve
signup, payment or automated WhatsApp connection.
The pilot plan is founder-led and explicitly expects a narrow workflow, real
operating access and eventual paid validation
(`nekurama.babai.research.md`; `docs/products/babai/validation.md`).

Secondary routes may be provided when real, owned destinations are approved:

- WhatsApp contact
- email contact
- waitlist or pilot-interest form

**Unknown / Gated:** approved email, WhatsApp number, form endpoint, waitlist
owner, response owner and qualification questions. Do not invent a URL, number,
address or publish a dead CTA.

### Public collection boundary

Public collection is limited to the minimum business onboarding information
needed to respond to a pilot request, such as business name, business type,
contact route and an optional short description of the need. The exact field
set, lawful basis, retention, access and deletion owner require approval.

Detailed restaurant setup remains private and controlled: menus, branch
configuration, staff identities, credentials, customer conversations, payment
details, operational data and integrations must never be collected or exposed
through the public landing page or mock/demo.

## 3. Content and messaging hierarchy

The page must preserve this order:

`Category → Definition → Promise → Explanation → Proof`

This hierarchy is confirmed in
`docs/products/babai/thesis-and-positioning.md`, section 15, and is supported by
the raw positioning discussion (Turn 648, message
`bbb21914-7687-4f6e-848a-30e1e7e850f8`; Turn 650, message
`bbb21f5a-efad-4d2f-bd5d-b846d6e8368f`; Turn 651, message
`5f6c6e3f-3577-4113-8ba0-7909383ecb91`).

### Canonical source-backed copy

These statements are the current copy candidates. Product/company owners must
approve final punctuation, capitalization and translation before publication.

**Category — confirmed**

> WhatsApp-native Business Operating Platform powered by AI and automation.

**Definition — confirmed**

> BABAI is a business operating platform built around WhatsApp. It helps
> businesses run their customer and operational workflows through AI and
> automation.

**Promise — confirmed**

> Run your business without leaving WhatsApp.

**Supporting thesis — confirmed**

> Turn customer conversations into business operations.

**Restaurant expression — confirmed direction**

> BABAI is the operating platform for restaurants built around WhatsApp.

**Explanation — confirmed direction, final copy partial**

> BABAI turns customer conversations into orders, coordinates staff and
> operations, and helps bring customers back — while the customer relationship
> stays with the business.

The promise describes the intended behavioral outcome; it does not mean that
every operation is performed only in WhatsApp. The current channel principle is
**WhatsApp-first, not WhatsApp-only**: web remains appropriate for dense
configuration, bulk actions, analytics, recovery/configuration and
multi-branch administration
(`docs/products/babai/thesis-and-positioning.md`, sections 7 and 15;
`docs/products/babai/experience-and-channels.md`).

### Proposed page sequence

1. **Hero:** canonical category, definition, promise and one approved CTA.
2. **Why this matters:** direct customer relationship, WhatsApp operational
   pressure and restaurant-first context; avoid unsupported market-size claims.
3. **Interactive mock/demo:** a clearly labeled, keyboard-accessible simulated
   restaurant workflow using invented names, menu items, orders, statuses and
   timestamps. It may show customer conversation, order capture, staff
   takeover and operational attention states, but it must not connect to
   WhatsApp, auth, payments or a backend.
4. **How it is intended to work:** customer conversation, order workflow,
   business/staff operations and human takeover, clearly marked as current
   product direction or pilot scope where not proven.
5. **Why BABAI:** business-owned relationship, WhatsApp-first operation and
   automation plus human intervention; call this a differentiation thesis, not
   a proven moat.
6. **Evidence:** only approved, attributable and accurately qualified proof.
7. **Pilot CTA:** approved primary route plus approved secondary routes.
8. **Footer:** approved NEKURAMA identity, contact, legal links and
   publication/version information.

## 4. Claim register and proof gates

### Publishable from current truth, subject to copy approval

- BABAI is a NEKURAMA product brand.
- BABAI is built around WhatsApp for business/customer and operational
  workflows.
- Restaurants are the initial wedge; the business/merchant is the customer and
  SaaS buyer.
- The business is intended to retain its customer relationship and WhatsApp
  identity.
- AI and automation are enabling mechanisms; BABAI is not positioned as merely
  an AI chatbot or WhatsApp API wrapper.
- Human intervention/takeover is part of the intended operating model.

### Evidence-supported but not automatically public claims

The field research records 19 conversations (15 restaurants and 4 stores),
strong interest signals and a need to convert interest into three pilots and at
least one paying customer. It explicitly says that positive conversations do
not yet prove payment, operating change, trust in automation, retention or
reliability (`nekurama.babai.research.md`, Summary, “What remains
unvalidated”, and “Immediate pilot plan”).

**Gated before public use:**

- Publish the interview count only with product/company approval of the
  methodology, date, wording and any participant-consent requirements.
- Do not call conversations “customers”, “pilots”, “users”, “revenue” or
  “validation” unless the corresponding event has occurred and is recorded.
- Do not publish restaurant names, logos, quotes, screenshots or economics
  without written permission and an approved attribution.
- If the ₹1.57 lakh/₹54,000 and ₹15 lakh/₹8 lakh examples are ever used, label
  them as reported interview context, preserve the qualifiers and obtain
  permission; they are not BABAI performance metrics.

### Claims intentionally withheld

The first version must not claim or imply:

- active customers, paid pilots, revenue, conversion, ROI, savings,
  reliability, uptime or order-volume metrics;
- a completed three-pilot/one-paying-customer proof threshold;
- “no commission”, direct payment, refunds, delivery, payment verification,
  multilingual operation or no-app onboarding as generally available product
  capabilities. These appear as proposed solution/research hypotheses, not
  verified production facts (`nekurama.babai.research.md`, “Proposed BABAI
  solution” and “What remains unvalidated”);
- Meta/WhatsApp partnership, endorsement, certification or API approval;
- security certification, compliance certification, legal incorporation,
  trademark clearance, regulated payment status or a guarantee of data
  residency;
- a consumer marketplace, POS/ERP replacement, universal local-business
  platform or permanent restaurant-only category;
- customer or partner logos, fabricated product screenshots, or testimonials
  lacking genuine source evidence, written approval, attribution and clear
  identification as pilot/design-partner feedback.

### Minimum proof package for a stronger page — proposed

Before adding a proof section beyond a qualified research note, obtain:

1. an approved evidence owner and dated source record;
2. permission for every named business, logo, quote or image;
3. a reproducible definition for every metric and its denominator;
4. a clear distinction between interview signal, pilot usage and paid
   continuation; and
5. product/company approval that the proof is still current.

Testimonials are permitted only when they are genuine, written-approved,
attributable and explicitly labeled as pilot or design-partner feedback. A
mock/demo persona, invented quote or synthetic logo is never a testimonial.

## 5. Explicit scope

### In scope for the static landing page

- One responsive, public informational page.
- BABAI/NEKURAMA identity and restaurant-first positioning.
- The confirmed messaging hierarchy and carefully qualified explanation.
- A short explanation of the intended WhatsApp-first operating model.
- An imaginative interactive mock/demo using mock data only, with a visible
  “demo only” boundary.
- Primary **Request a Pilot / Talk to Us** CTA, once its destination exists.
- Approved WhatsApp, email or waitlist secondary routes, once destinations
  exist.
- Public collection of minimum approved business onboarding data only.
- Approved evidence and legal/privacy links, when available.
- Accessible navigation, typography, contrast, images and forms.
- Static metadata, page title and social preview text that do not expose
  unapproved claims.

### Out of scope

- Product dashboard, authentication, restaurant onboarding or WhatsApp
  connection.
- Customer ordering, payment, delivery tracking or live operational data.
- Self-serve signup, pricing calculator, checkout or subscription billing.
- A real chatbot, AI inference, live WhatsApp integration, account-specific
  lookup or production backend.
- Real auth, payments, customer data, restaurant setup, menu uploads, staff
  identities or operational records.
- Analytics, advertising pixels, retargeting, cookies or third-party embeds
  by default.
- Publishing the raw conversation, internal roadmap, private research,
  customer material or secrets.
- Promising a launch date, service-level objective, support response time or
  geographic/legal availability.
- External deployment, DNS changes or production service connections in this
  documentation task.

## 5A. Implementation path and framework tradeoff

### Selected path — native HTML/CSS/JS

The first template is implemented in `site/`:

```text
site/
├── index.html   # semantic page shell, placeholders and mock-flow markup
├── styles.css   # responsive visual system, layout and reduced-motion rules
├── app.js       # fixture-only tabs, steps and mock-state transitions
└── favicon.svg  # local, content-neutral template mark
```

The directory is GitHub Pages-compatible as a static root or as the source
directory of a later, separately approved Pages workflow. It has no package
manifest, build step, runtime dependency, external font, image host, analytics
script, API endpoint or production integration. No deployment or DNS change was
performed.

### Feature-controlled Pages deployment contract

The workflow configuration is `.github/workflows/pages-preview.yml`. It is
manual-dispatch-only and is intentionally locked to the manager integration
target `nekurama/babai-feature`; it must not be triggered from
`nekurama/architecture`, `main` or another branch. The workflow checks out the
committed target ref, verifies this exact artifact allowlist, and uploads only
`site/`:

```text
site/app.js
site/favicon.svg
site/index.html
site/styles.css
```

After the workflow is integrated into `nekurama/babai-feature`, the exact
trigger is:

```sh
gh workflow run pages-preview.yml \
  --repo nekurama/bulb \
  --ref nekurama/babai-feature
```

The run summary records the resolved source revision. A rollback must stop
dispatches, restore the previous approved Pages source/revision or revert the
workflow integration, and verify that the Pages build points to the restored
revision. This role-branch correction does not push, enable or deploy Pages.

### React versus native — decision

| Option | Benefits | Costs / risks | Decision |
| --- | --- | --- | --- |
| Native HTML/CSS/JS | Zero dependency surface; direct GitHub Pages compatibility; no build or bundling gate; easy network/provenance inspection; resilient no-JavaScript content shell. | State and templating remain intentionally small; richer product-like flows would need a deliberate component boundary. | **Selected for this template.** |
| React | Reusable components, typed state and a clearer path if the mock becomes a multi-screen product prototype. | Adds package/build/dependency/license and deployment complexity before product copy, evidence and CTA decisions are settled. | **Deferred.** Reconsider only when reusable state/components justify the added surface. |

The current interaction has three workflow tabs, three fixture-only steps and
one LITE/BASE/PRO capability selector with resettable state, which does not
justify React. A future React migration
must preserve the same no-backend, mock-only, provenance and accessibility
gates rather than become a route to production functionality.

### Placeholder and fixture boundary

- Final copy, claims, testimonials, logos, legal text and exact CTA wording
  remain placeholders until Tracks 1–4 approve them.
- Every visible mock record is invented and marked as demo-only in the UI.
- `site/app.js` exposes `window.__MOCK_TEMPLATE__ = true` as a lightweight QA
  assertion; it does not store, transmit or retrieve user data.
- `site/index.html` provides explicit `[... PLACEHOLDER]` CTA/content slots;
  no endpoint, final CTA wording, pricing, testimonial, legal or contact copy
  is implied.
- The mock exposes a visible local-state safety bar, a reset control and an
  `aria-live` announcement region. Reset returns to the Conversation / Notice
  baseline without persistence.
- The tier mock exposes LITE, BASE and PRO labels with invented capability
  slots only. It contains no pricing, entitlement, availability or final
  feature claim; Reset returns the tier selector to LITE.
- The source-mapped flow inventory covers 14 founder-flow slices in
  `docs/web/flow-inventory.md`; each state is labelled POC, PILOT REVIEW or
  LATER / NOT IMPLEMENTED and carries a source anchor plus acceptance boundary.
- The CTA links intentionally loop to the local `#contact` placeholder until
  an approved destination exists. No live contact route is fabricated.

## 6. Accessibility requirements

**Target — proposed:** WCAG 2.2 AA for the published page, with no known
critical or serious accessibility defects at release.

The implementation and QA checklist must include:

- semantic landmarks (`header`, `nav`, `main`, `footer`) and one logical `h1`;
- heading order that follows the content hierarchy;
- keyboard access to every link, button and form control;
- visible, non-color-only focus indicators and a sensible focus order;
- text and UI contrast meeting the target; never communicate meaning by color
  alone;
- descriptive link names and accessible names/labels for controls;
- alt text for informative images; empty alt for decorative images;
- no autoplaying audio/video, flashing content, or essential information in
  motion;
- `prefers-reduced-motion` behavior for any non-essential animation;
- reflow at narrow widths and 200% text zoom without loss of content or
  function;
- touch targets and spacing usable on mobile;
- form errors, status messages and required fields exposed programmatically;
- no inaccessible canvas-only, image-only or hover-only explanation;
- language metadata and a review of text readability for the intended
  restaurant-owner audience.
- interactive demo controls have visible labels, keyboard operation, focus
  management, live-region updates where needed and a non-interactive text
  alternative;
- demo state is understandable without animation, timing or color alone;
- a visible “local mock state / nothing submits” boundary and reset control
  are present;
- tab arrows/Home/End, step buttons and reset can be operated by keyboard, with
  one active tab stop and `aria-current="step"` on the active flow step;
- LITE/BASE/PRO tier tabs support the same ArrowLeft/ArrowRight/Home/End
  behavior, one active tab stop and an announced selection;
- the 14-flow vertical inventory supports ArrowUp/ArrowDown/Home/End,
  `aria-selected` and an announced source-mapped detail state;
- state changes are announced without moving focus unexpectedly.

## 7. Privacy, security and legal publication constraints

### Privacy and data minimization

- The mock/demo is permanently no-data-collection: all displayed businesses,
  customers, messages, menus, orders, timestamps and statuses are invented
  fixtures.
- If a pilot form or secondary route is approved, collect only the minimum
  business onboarding fields needed to respond, state the purpose, define
  retention/access/deletion owners and provide an approved privacy notice.
- Detailed restaurant setup is private/controlled and must not be requested
  through the public page.
- Do not add analytics or third-party tracking until the company decides the
  lawful basis, consent behavior, vendor list, retention and cross-border
  implications.
- Do not expose restaurant, customer, staff or conversation data.
- Do not use testimonials, logos, uploaded menus or screenshots without
  documented permission and provenance.

These constraints align with the open privacy, retention/deletion and
cross-border questions in `docs/company/security-privacy-controls.md`.

### Provenance and mock-data controls

- Maintain a fixture inventory for every demo name, image, menu item, order,
  message, status, timestamp and metric.
- Mark fixtures as invented/mock in source data and, where practical, in the
  UI.
- Keep evidence claims separate from demo fixtures; a simulated order count or
  status is never a product metric.
- Record the source and written approval for every public testimonial, logo,
  quote, screenshot or research statistic.
- Do not use real restaurant menus, customer names, phone numbers, email
  addresses, conversations or payment references, even if anonymized, unless a
  separate approved publication decision permits it.

### Repository, network and deployment security

- Use company-controlled GitHub ownership, deployment settings and domains
  when those are established; the current control document makes this the
  intended company baseline, not a completed setup.
- Scan the repository and generated bundle for secrets and private data.
- Review Git history and pull-request artifacts before making the source public.
- Restrict deployment credentials and use least privilege.
- Define who can publish, roll back and remove the page.
- Add a security contact only when an approved address exists; do not invent
  one.
- The static build must not require network calls for the mock/demo.
- Review browser network requests and generated JavaScript for API endpoints,
  websocket connections, analytics, trackers, remote fonts, embeds and
  accidental production hosts.
- Any external request must be explicitly listed, approved and justified;
  default behavior is zero third-party runtime requests.
- Test the demo with network access blocked and confirm it remains usable.

### Legal and brand

`BABAI` is selected as the product name/finalist, but professional trademark
clearance remains required. NEKURAMA clearance, company identity,
domain ownership and customer contract/privacy documents are also open in
`docs/company/ip-brand-legal.md`. Therefore:

- **Gated:** do not state that BABAI or NEKURAMA is trademark-cleared,
  incorporated in a particular form, or legally available in a jurisdiction.
- **Gated:** do not publish a legal entity name, registered address, tax
  number, terms, DPA or privacy-policy URL until company/legal owners provide
  approved text.
- Use “BABAI, a NEKURAMA product” only as the current product/company
  relationship, not as a substitute for a legal footer.
- Use only approved logos/assets; the existence of repository SVG assets is not
  evidence of trademark or publication approval.

## 8. Static-site validation and QA plan

The native template exists under `site/`, but it is not a published product
site. Release QA must produce a pass/fail record for each item below before
any external deployment.

### Source and claims

- [ ] Every visible product claim maps to this document or a newer approved
      source.
- [ ] Every claim is labeled internally as confirmed, evidence-qualified or
      gated.
- [ ] No withheld claim, invented metric, logo, unapproved testimonial, URL or
      legal statement appears in HTML, metadata, JSON-LD, image text or social
      cards.
- [ ] Every testimonial is genuine, written-approved, attributable and labeled
      as pilot/design-partner feedback.
- [ ] Primary CTA destination and response owner are real and approved; every
      WhatsApp, email and waitlist route is separately verified.
- [ ] Copy review confirms the business is the buyer and restaurants are the
      first wedge.

### Functional and content QA

- [ ] Static build completes deterministically with no warnings that affect
      output.
- [ ] All internal links, legal links and asset paths resolve.
- [ ] No link points to an unapproved live URL or private source file.
- [ ] Page title, description, canonical URL and social metadata are approved
      and do not overclaim.
- [ ] Navigation, CTA, form behavior (if any), error states and approved
      external links work without JavaScript where practical.
- [ ] Mock/demo interactions work with mock fixtures only; reset, replay,
      empty/error and reduced-motion states are tested.
- [ ] LITE/BASE/PRO mock states show distinct placeholder capability sets
      without pricing, entitlement, availability or final feature claims.
- [ ] All 14 source-mapped flow states are reachable, labelled with maturity,
      show a screen/source anchor/acceptance boundary and remain mock-only.
- [ ] Visible local-state safety text, reset behavior and no-submission
      boundary remain present after every mock transition.
- [ ] Demo visibly identifies itself as illustrative and contains no real
      account, payment, customer or production data path.
- [ ] Mock/demo remains functional with network access blocked.
- [ ] 404 behavior and an unpublish/rollback procedure are documented.

### Accessibility QA

- [ ] Automated accessibility scan has no critical/serious findings.
- [ ] Manual keyboard-only pass completes the full page and CTA.
- [ ] Tablist arrow/Home/End behavior, flow-step buttons, Advance and Reset
      controls are keyboard-tested.
- [ ] Tier-tab keyboard behavior, active-state semantics and reset-to-LITE
      behavior are keyboard-tested.
- [ ] Flow-inventory ArrowUp/ArrowDown/Home/End behavior, active-state
      semantics, detail announcements and reset-to-F01 behavior are tested.
- [ ] Screen-reader pass covers landmarks, headings, links, images, form labels
      and mock-state announcement text.
- [ ] Contrast, focus, zoom/reflow, reduced motion and mobile checks pass.
- [ ] Accessibility review is repeated after any copy, asset or component
      change.

### Privacy and security QA

- [ ] Browser network inspection confirms the demo makes no runtime production
      API, websocket, analytics, cookie, tracker, font, embed or other
      unapproved outbound request.
- [ ] If a form exists, consent/notice, transport, validation, retention and
      deletion handling are approved and tested; only minimum business
      onboarding fields are collected.
- [ ] Demo fixtures and static assets contain no real customer, restaurant,
      staff, payment or credential data.
- [ ] Provenance inventory exists for every public proof item and fixture.
- [ ] Secret scanning and dependency/license checks pass.
- [ ] Generated files and repository history contain no restricted data.
- [ ] GitHub Pages repository visibility, branch protection, deployment
      permissions and rollback owner are recorded.
- [ ] No external deployment, DNS change or production service connection was
      performed as part of this documentation task.

### Compatibility and quality QA

- [ ] Test current Chromium, Firefox and WebKit/Safari-equivalent behavior, or
      document the supported browser policy.
- [ ] Test narrow mobile, tablet, desktop, high zoom and reduced-motion modes.
- [ ] Check layout with long text, failed image loads, blocked scripts and
      slow/offline conditions.
- [ ] Check page performance and image sizes against an agreed budget; do not
      claim a score or threshold until the product/architecture owner sets it.
- [ ] Review social preview rendering without exposing private content.

### Current internal QA evidence

The following evidence applies to the native template commit, not to a public
deployment:

- `node --check site/app.js` passes.
- Static Python checks cover duplicate IDs, local asset/link boundaries,
  required accessibility markers, mock-only state and forbidden storage/network
  APIs.
- Local browser QA covers initial load, tab activation with ArrowRight, Advance
  state changes, Reset returning to the baseline, console errors, the local
  request list and 390px/320px viewport checks with no horizontal overflow.
- Tier browser QA covers LITE → BASE → PRO selection, ArrowRight keyboard
  movement with focus retention, distinct placeholder capability counts, reset
  back to LITE plus Conversation / Notice, and no-pricing announcement text.
- Flow-inventory QA covers all 14 source-mapped states, POC/PILOT/LATER labels,
  source/acceptance detail rendering, keyboard selection and reset to F01.
- Operating-room prototype QA covers six local screens, order lifecycle
  advance, human takeover, tier/payment/fulfillment/promotion illustrations,
  care/recovery states, Reset room, ArrowRight navigation, zero console errors,
  390px/320px responsive checks and a three-asset local network list.
- A real browser/device matrix, automated WCAG scan, legal review, proof review,
  endpoint review and GitHub Pages deployment review remain outstanding.

## 9. October–December web/demo plan

This is an internal execution plan for the static template and mock/demo. It
does not authorize public claims, pricing publication, testimonials, legal
copy, contact endpoints, DNS changes or deployment.

| Window | Owner | Dependencies | Entry check | Scope and QA gate | Exit check |
| --- | --- | --- | --- | --- | --- |
| **October — content-neutral template and accessibility baseline** | Web/QA; product/brand review for placeholders | Existing native `site/` template; current landing-page scope; no external approval required | Native HTML/CSS/JS exists; all product copy, CTA, proof and legal text remain placeholders | Keep semantic landmarks, one `h1`, skip link, focus states, reduced motion, responsive shell, local mock safety and LITE/BASE/PRO placeholder states; verify no forms, customer data, backend, payment, pricing or runtime network | Static syntax/boundary checks pass; keyboard traversal works; 320px/390px layouts have no horizontal overflow; fixture/provenance inventory exists; no unapproved public claim is present |
| **November — demo-ready synthetic flow** | Web/QA; architecture review for static/runtime boundary | October exit; synthetic fixture schema and approved internal review scenarios | October checklist passes and mock reset/state semantics are stable | Exercise workflow tabs, tier selector, Advance, Reset, screen-reader announcements, responsive layouts and blocked-network behavior with invented fixtures only; run browser smoke and document unsupported browser/device gaps | Chromium smoke has no console errors; keyboard Arrow/Home/End behavior, focus retention, `aria-selected`, `aria-current` and live announcements pass; network contains only local assets; no real form/customer/auth/payment path exists |
| **December — demo/pilot hardening and claim gates** | Web/QA with product and company/legal review inputs | November demo evidence; current claim/provenance register; pilot/evidence owners for any future proof | Synthetic demo is reproducible and all November checks are recorded | Harden empty/error/reset/reduced-motion states; reconcile placeholders against approved claim register; require provenance and written approval before any proof, testimonial, logo, pricing or contact slot changes; keep legal/privacy/DNS/publication gates closed | Internal demo/pilot-review package is reproducible, rollback/unpublish notes are current, every visible claim is approved or visibly placeholder, and no public release occurs without separate authorization |

### Cross-month entry and exit gates

- **Entry:** work begins from the committed native template and current
  internal QA scope; no candidate JPEG, root-site file or deployment artifact
  is an input to this plan.
- **Synthetic fixture gate:** every mock name, message, capability slot,
  status, timestamp and tier difference is invented, locally defined and
  provenance-labelled; no customer, restaurant, staff, payment or credential
  data is permitted.
- **Accessibility gate:** semantic structure, keyboard operation, focus order,
  screen-reader announcements, contrast, reduced motion, zoom/reflow and
  mobile behavior are checked at each milestone.
- **Network/security gate:** no backend, auth, payment, analytics, cookie,
  third-party asset, external runtime request or secret enters the template.
- **Content gate:** final category, promise, pricing, testimonials, claims,
  legal/privacy wording, contact endpoints and DNS/publication settings remain
  gated behind the relevant product/company/legal decisions.
- **Exit:** a milestone is complete only when its checks are recorded and any
  failed or unknown item is carried forward as an explicit blocker; feature
  completion alone is not evidence of readiness.

### Source anchors

- **Execution input:** **EXECUTION PLAN INPUT — WEB/QA (2026-09-21)**.
- **Template and publication boundary:** `docs/web/landing-page.md`,
  `docs/web/design-qa-note.md` and the admin scope packet
  **ADMIN SCOPE UPDATE — WEBSITE INTERNAL TEMPLATE/QA ONLY (2026-09-21)**.
- **Tier labels and capability boundary:** current **TIER SCOPE DECISION —
  WEB/QA** input and `docs/products/babai/product-definition.md`.
- **Positioning and audience context:** `docs/products/babai/thesis-and-positioning.md`.
- **Pilot/evidence caution:** `nekurama.babai.research.md` and
  `docs/products/babai/validation.md`.
- **Privacy/security and legal gates:**
  `docs/company/security-privacy-controls.md` and
  `docs/company/ip-brand-legal.md`.

## 10. Remaining unknowns and role requests

### Product role

- Approve the initial CTA and pilot qualification flow.
- Approve the mock/demo narrative, fixture inventory and “demo only” wording.
- Confirm which capabilities are live, pilot-only, planned or hypothetical.
- Provide the approved pilot status and evidence package.
- Decide whether the page should mention pricing hypotheses; current research
  says proposed prices require testing, so the default is to omit them.

### Company/legal role

- Confirm legal entity/footer identity, contact route, domain ownership and
  publication jurisdiction.
- Move `nekurama.com` registrar/DNS control to company ownership before
  publication.
- Complete or explicitly defer NEKURAMA/BABAI trademark clearance.
- Provide approved privacy notice, terms, consent language and
  testimonial/logo/quote permissions.
- Decide whether any analytics or third-party services are permitted.

### Architecture/operations role

- Confirm GitHub Pages repository, visibility, custom domain, DNS, deployment
  owner, branch protections, rollback and unpublish procedure.
- Define the static-site build, supported browsers, performance budget and
  security scanning requirements.
- Confirm whether a no-JavaScript baseline is required, how the interactive
  mock/demo is progressively enhanced, and how any approved form is delivered.
- Confirm the zero-runtime-network-request default and review any exception.

## Source notes

The strongest current source-backed decisions are in
`docs/products/babai/thesis-and-positioning.md` and
`nekurama.babai.research.md`; they remain partial where they explicitly list
open validation or legal questions. Raw citations above use the ordered path
through `nekurama.raw.chat.json` as the stable turn number and the mapping node
ID as the message identifier. Raw web-specific evidence is absent for
GitHub Pages, analytics, consent and accessibility, so those decisions are
deliberately marked proposed or unknown rather than inferred. The exact
administrative overrides and additions in this revision come from
**NEW ADMIN DECISION PACKET (2026-09-20)**: static mock/demo scope, primary and
secondary routes, minimum public onboarding collection, testimonial conditions,
`nekurama.com` starting point, company-owned DNS transition, no external
deployment and explicit provenance/network/secret gates. The internal
behavior and QA refinements in this revision come from **ADMIN SCOPE UPDATE —
WEBSITE INTERNAL TEMPLATE/QA ONLY (2026-09-21)**, the tier mock boundary from
**TIER SCOPE DECISION — WEB/QA**, and the October–December sequencing from
**EXECUTION PLAN INPUT — WEB/QA (2026-09-21)**.
