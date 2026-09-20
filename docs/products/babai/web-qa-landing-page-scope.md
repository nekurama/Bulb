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
| Interactive demo | The demo advances through an invented pickup conversation, menu context, order review and human takeover. All content is mock data and is labeled in the UI. It must never be described as a product connection or customer result. |
| Primary CTA | `Request a pilot` / `Talk to us` scrolls to the interest panel. The current page prepares a local-only request preview; it does not submit data. |
| Secondary routes | WhatsApp, email and waitlist are represented as selectable route intents. No phone number, mailbox, form endpoint or waitlist system is fabricated. A route may become live only after company ownership, destination, privacy notice, retention, abuse handling and accountable owner are recorded. |
| Public onboarding data | The mock asks only for business/restaurant name, role, branch count and preferred route; an optional contact detail field is visibly local-only. It must not ask for menus, customer lists, WhatsApp identifiers, payment details, conversation content or staff credentials. |
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
| CQA-03 | CTA validation | Primary and secondary routes are keyboard-operable and visibly local-only until destination, owner, notice and retention are approved. |
| CQA-04 | Data minimization | Public form contains only minimum business context; detailed setup is explicitly excluded and private. |
| CQA-05 | Evidence/testimonial integrity | September 2026 research is labeled an early signal; no testimonials appear without provenance and written approval. |
| FQA-01 | Static entry point | `index.html` loads without a build tool and uses relative local assets suitable for GitHub Pages. |
| FQA-02 | JSON | `mock-data.json` parses as valid JSON. |
| FQA-03 | Accessibility structure | One `h1`, logical headings, `header`, `nav`, `main`, `footer`, skip link, labels, focus styles and text status are present. |
| FQA-04 | Responsive/reflow | Layout is designed for 320px, 375px, 768px, 1024px and 1440px widths and 200% zoom without intentional horizontal overflow. |
| FQA-05 | Reduced motion | `prefers-reduced-motion` removes non-essential motion; the story and controls remain understandable without animation. |
| FQA-06 | Degraded mode | Without JavaScript, the core story, pilot boundary and CTA text remain available; only the mock controls and local preview are unavailable. |
| DQA-01 | Domain migration | Before any DNS change, confirm registrar ownership, recovery email, MFA, nameserver control, transfer lock, rollback plan and company access inventory. |
| DQA-02 | Privacy handling | Before enabling collection, approve purpose, minimum fields, notice, owner, retention/deletion, access, vendor and incident handling. |

## CTA and data-handling gate

The current artifact is intentionally a **non-submitting mock**. The form prevents a network
request and displays a status explaining that no data was sent or stored. This preserves the
public informational boundary while allowing QA of labels, route selection, validation and
keyboard behavior.

Before converting any route into a live WhatsApp, email or waitlist destination, record:

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
```

Additional QA should manually verify keyboard traversal, accessible names, reduced motion,
contrast, 200% zoom, narrow viewport reflow, direct asset loading and absence of unexpected
network requests before publication. No deployment is part of this change.
