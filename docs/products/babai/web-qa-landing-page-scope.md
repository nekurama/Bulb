---
status: partial
owner: BABAI / web-qa
last-reviewed: 2026-09-20
sources:
  - 2026-09-20 ADMIN DECISION PACKET supplied for this implementation
  - docs/web/landing-page.md
  - docs/products/babai/web-landing-page.md
  - docs/products/babai/thesis-and-positioning.md
  - docs/products/babai/product-definition.md
  - docs/products/babai/validation.md
  - docs/company/security-privacy-controls.md
  - docs/company/ip-brand-legal.md
---

# BABAI GitHub Pages implementation and QA scope

## Decision record

This record implements the 2026-09-20 ADMIN DECISION PACKET for the static landing-page
scope. It is a reviewable GitHub Pages-compatible concept, not a deployment or product
availability decision.

| Decision | Implementation boundary |
|---|---|
| Static site | Root `index.html`, `styles.css`, `script.js` and `mock-data.json`; no build step, server, auth, payment, analytics, tracker, embed or production backend. |
| Interactive demo | The demo runs ten deterministic invented journey families covering onboarding, menu extraction/publish, staff scope, customer order, payment/fulfillment recovery, order desk, takeover, promo tiers, notifications/recovery and analytics. It is a local state prototype, not a product connection or customer result. |
| Internal capability review | A collapsed, clearly labeled review panel may show provisional LITE/BASE/PRO experiment labels, capability placeholders, the bounded pilot envelope and planning-only usage sensitivities. It is not public packaging, pricing, entitlement, service-level or availability copy; rates remain placeholders. |
| Primary CTA | No CTA form or destination is wired. The page exposes a boundary-only review card until a company-owned route, notice, retention rule and accountable owner are approved. |
| Secondary routes | No WhatsApp, email or waitlist route is represented as an action. Any future route may become live only after company ownership, destination, privacy notice, retention, abuse handling and accountable owner are recorded. |
| Public onboarding data | The mock asks for no business, contact, menu, customer, WhatsApp, payment, conversation or staff data. Controlled setup remains documentation-only. |
| Private setup | Detailed restaurant setup belongs in a controlled, tenant-scoped onboarding path after privacy, access, retention/deletion, vendor and incident controls are approved. |
| Evidence | Visible claims are limited to current product/company docs and the field-research signal recorded for September 2026. No pricing, ROI, savings, traction, reliability, launch, availability, customer count or production promise is made. |
| Testimonials | None are published. Future pilot/design-partner feedback requires genuine source provenance, written approval, attributable identity and an explicit “pilot” or “design partner” label. |
| Domain | The page uses `https://nekurama.com/` as the intended canonical starting point while DNS/registrar and recovery control move to company ownership. The transfer is an open operational task, not evidence of completed ownership or launch. |
| Release boundary | No image generation, image upload, deployment, domain mutation, DNS change or push is included. |

## Evidence and citation map

- Product definition and canonical positioning: `docs/products/babai/product-definition.md`,
  “Current answer”, “MVP boundary” and “Product boundaries”.
- Messaging hierarchy, restaurant wedge, business-owned relationship and channel split:
  `docs/products/babai/thesis-and-positioning.md`, headings 1, 3, 6, 7, 9, 10, 14 and 19.
- Pilot boundary and staged validation: `docs/products/babai/validation.md`, “Primary gate”,
  “Pilot workflow” and “Success / kill criteria — unknown”; corroborated by
  `nekurama.babai.research.md`, lines 1–14 and 118–163.
- Accessibility and static-hosting requirements: `docs/web/landing-page.md` and
  `docs/products/babai/web-landing-page.md`, “Accessibility” and “Validation plan”.
- Company control, privacy roles, tenant isolation, retention/deletion and vendor review:
  `docs/company/security-privacy-controls.md`, “Current durable answer” and “Explicit privacy
  boundaries”.
- Product/brand ownership and domain/trademark unknowns: `docs/company/ip-brand-legal.md`,
  “Current durable answer”, “Action checklist” and “Brand/legal caution”.
- Administrative decisions and implementation constraints: **2026-09-20 ADMIN DECISION PACKET**.

## QA acceptance matrix

| ID | Check | Pass condition / evidence |
|---|---|---|
| CQA-01 | Claim inventory | Every visible factual claim maps to the citation map; unsupported outcomes are absent. |
| CQA-02 | Mock-data boundary | Demo copy says mock data; no API keys, production URLs, real phone numbers, customer data or payment details exist. |
| CQA-03 | CTA validation | No form or route exists; the boundary card visibly says nothing submits until destination, owner, notice and retention are approved. |
| CQA-04 | Data minimization | No public fields are collected; detailed setup is explicitly excluded and private. |
| CQA-05 | Evidence/testimonial integrity | September 2026 research is labeled an early signal; no testimonials appear without provenance and written approval. |
| CQA-06 | Naming boundary | Current-facing HTML, CSS, JS, mock data, candidate labels and template copy use neutral variants or functional scope placeholders; the only LITE/BASE/PRO labels are inside the clearly gated internal capability-review panel and are not public package claims. |
| FQA-01 | Static entry point | `index.html` loads without a build tool and uses relative local assets suitable for GitHub Pages. |
| FQA-02 | JSON | `mock-data.json` parses as valid JSON; it is a checked-in fixture and is not fetched at runtime. |
| FQA-03 | Accessibility structure | One `h1`, logical headings, `header`, `nav`, `main`, `footer`, skip link, scenario selector, journey tabs, focus styles and text status are present. |
| FQA-04 | Responsive/reflow | Layout is designed for 320px, 375px, 768px, 1024px and 1440px widths and 200% zoom without intentional horizontal overflow. |
| FQA-05 | Reduced motion | `prefers-reduced-motion` removes non-essential motion; the story and controls remain understandable without animation. |
| FQA-06 | Degraded mode | Without JavaScript, the core story, boundary copy and coverage documentation remain available; only the journey and coverage controls are unavailable. |
| DQA-01 | Domain migration | Before any DNS change, confirm registrar ownership, recovery email, MFA, nameserver control, transfer lock, rollback plan and company access inventory. |
| DQA-02 | Privacy handling | Before enabling collection, approve purpose, minimum fields, notice, owner, retention/deletion, access, vendor and incident handling. |

## CTA and data-handling gate

The current artifact is intentionally a **no-form, non-submitting mock**. The boundary card
states that nothing submits, stores or connects. This preserves the public informational
boundary while allowing QA of deterministic state labels, recovery cues and keyboard behavior.

Before adding any live WhatsApp, email or waitlist destination, record:

1. The company-owned destination and recovery owner.
2. The exact minimum fields and purpose.
3. The privacy notice, lawful basis/notice language and user-facing deletion/contact path.
4. Retention, deletion, export, access and incident procedures.
5. Abuse controls, rate limits and vendor/subprocessor review.
6. The expected response behavior and responsible operator.

Do not collect detailed restaurant setup publicly. A private setup path must be authenticated
or founder-controlled, tenant-scoped and reviewed for menu, conversation, staff, payment and
WhatsApp identifier handling.

## Domain migration and ownership checklist

`nekurama.com` is the intended starting domain for the page. Current source documents require
company-owned domains, repositories, provider accounts and secrets, while the legal record still
lists domain ownership/registration as open. Before a public launch or DNS cutover:

- identify the current registrar and registrant;
- transfer registrar, DNS, billing and recovery control to the company;
- enable MFA and named access, with no shared credentials;
- inventory nameservers, DNS records, certificates, redirects and rollback state;
- verify the canonical URL, `www` behavior, HTTPS, email continuity and GitHub Pages custom-domain configuration;
- record the transfer date, responsible owner and recovery path;
- do not describe the transfer as complete until evidence is attached to the company control record.

## Preserved unknowns

Final CTA destinations and owner, privacy policy/DPA, retention schedule, legal entity and
trademark clearance, pricing and pilot terms, production feature cut, Meta onboarding
reliability, payment verification, launch status, testimonials and domain transfer completion
remain unresolved. This artifact deliberately does not infer decisions from the mock.

## Required checks

Run from the repository root:

```sh
git diff --check
python -m json.tool mock-data.json >/dev/null
node --check script.js
```

Additional QA should manually verify keyboard traversal across the mock and 14-family
coverage map, accessible names, reduced motion, contrast, 200% zoom, narrow viewport
reflow, direct asset loading and absence of unexpected network requests before publication.
Scenario details and raw-chat citations are recorded in `docs/web/demo-flow-coverage.md`.
No deployment is part of this change.
