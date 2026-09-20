---
status: partial
owner: BABAI / web-qa
last-reviewed: 2026-09-20
sources:
  - nekurama.raw.chat.json
  - nekurama.chatgpt.md
  - nekurama.babai.research.md
  - docs/products/babai/thesis-and-positioning.md
  - docs/products/babai/product-definition.md
  - docs/products/babai/validation.md
  - docs/products/babai/business-model.md
  - docs/company/security-privacy-controls.md
  - docs/company/ip-brand-legal.md
---

# GitHub Pages Landing-Page Scope

## Status and boundary

This is the content, evidence, privacy, accessibility and QA scope for a future GitHub Pages landing page. It does not authorize deployment, domain purchase, analytics installation, lead collection or production claims.

The approved static mock implementation is the root [`index.html`](../../../index.html), [`styles.css`](../../../styles.css), [`script.js`](../../../script.js) and [`mock-data.json`](../../../mock-data.json). The implementation and QA boundary are recorded in [`docs/web/design-qa-note.md`](../../web/design-qa-note.md); no deployment is implied.

The source hierarchy for this document follows the repository's mining rules: the raw founder export is primary for intent/history, the final Markdown export and field research corroborate it, and existing knowledge files hold current durable truth (`docs/README.md#L15-L24`, `docs/README.md#L28-L43`).

## Audience and job

### Primary audience

The page is for the restaurant owner/operator who is evaluating whether BABAI can improve direct customer ordering and day-to-day operations. The initial ICP is a customer-centric small-to-medium restaurant with 1–5 branches, direct-order ambition, aggregator dependence or economics concerns, and WhatsApp operational pain (`docs/products/babai/thesis-and-positioning.md#L85-L99`).

### Secondary audiences

- **Manager/admin:** operational champion and high-frequency user (`docs/products/babai/thesis-and-positioning.md#L101-L108`).
- **Staff:** daily operator; the page should explain human takeover rather than imply staff elimination (`docs/products/babai/thesis-and-positioning.md#L101-L108`, `docs/products/babai/product-definition.md#L130-L136`).
- **End customer:** a participant and beneficiary, not the SaaS buyer; do not write the page as a consumer marketplace pitch (`docs/products/babai/thesis-and-positioning.md#L41-L47`, `docs/products/babai/thesis-and-positioning.md#L65-L73`).

### Page job

The page should let a qualified restaurant operator answer: what BABAI is, how it relates to the restaurant's own WhatsApp, what the pilot can do, what remains unproven, and how to express pilot interest. The buyer's underlying question is how to serve customers better, get more direct business and stay connected without adding a complicated system or overwhelming staff (`docs/products/babai/thesis-and-positioning.md#L101-L112`).

## Claims and content contract

Visible copy must be mapped to this table before release. “Confirmed” means the claim is an explicit current decision. “Evidence, caveat required” means it may appear only with the stated qualification. “Pending” means it must not be presented as established marketing proof.

| ID | Allowed content | Status and required treatment | Source |
|---|---|---|---|
| C1 | “BABAI is a business operating platform built around WhatsApp.” | **Confirmed.** This is the canonical definition. | `nekurama.raw.chat.json#L64995-L65025`; corroborated by `docs/products/babai/thesis-and-positioning.md#L16-L25` |
| C2 | “It helps businesses run customer and operational workflows through AI and automation.” | **Confirmed definition; avoid implying autonomous or error-free behavior.** | `nekurama.raw.chat.json#L64995-L65025`; `docs/products/babai/thesis-and-positioning.md#L16-L25` |
| C3 | “Run your business without leaving WhatsApp.” | **Confirmed core promise.** Keep the page's explanation honest: web still supports dense configuration, analytics, recovery and administration. | `nekurama.raw.chat.json#L49709-L49735`; `docs/products/babai/thesis-and-positioning.md#L75-L83`, `docs/products/babai/product-definition.md#L22-L30` |
| C4 | “Turn customer conversations into business operations.” | **Confirmed supporting thesis.** Do not claim that every message becomes an operation. | `nekurama.raw.chat.json#L49709-L49735`; `docs/products/babai/thesis-and-positioning.md#L75-L83` |
| C5 | Restaurants are the first wedge; BABAI is not permanently restaurant-only. | **Confirmed.** The landing page should lead with restaurants and avoid promising broad vertical coverage. | `docs/products/babai/thesis-and-positioning.md#L27-L39`; `nekurama.babai.research.md#L178-L186` |
| C6 | The restaurant's own WhatsApp relationship remains central; BABAI is the operating layer. | **Confirmed.** Do not imply that BABAI is a consumer marketplace or replaces the business relationship. | `docs/products/babai/thesis-and-positioning.md#L41-L57`, `docs/products/babai/thesis-and-positioning.md#L114-L124`; `docs/products/babai/product-definition.md#L124-L144` |
| C7 | Pilot flow: connect business WhatsApp → publish menu → customer asks questions → pickup order → business accepts/rejects → payment recorded/confirmed → staff completes order → customer receives status. | **Confirmed pilot scope.** Label it as pilot/MVP scope, not a universal production promise. | `docs/products/babai/product-definition.md#L80-L103`; `nekurama.babai.research.md#L118-L133` |
| C8 | Conversational questions, menu/catalog context, structured order capture, human takeover, staff operations and pickup-first fulfillment. | **Confirmed MVP capabilities.** Describe deterministic order/payment state and human takeover; do not present AI as the authority for controlled state. | `docs/products/babai/product-definition.md#L43-L78`, `docs/products/babai/product-definition.md#L124-L140` |
| C9 | “19 businesses interviewed; 15 restaurants and 4 stores.” | **Evidence with date and caveat.** Attribute to September 2026 field research; do not call this customer count or traction. | `nekurama.babai.research.md#L1-L14` |
| C10 | Businesses showed interest in direct customer relationships and WhatsApp ordering. | **Evidence with caveat.** State that this is an early validation signal, not willingness-to-pay proof. | `nekurama.babai.research.md#L7-L14`, `nekurama.babai.research.md#L83-L89` |
| C11 | “No customer app installation”, “no per-order commission”, direct payment to the business, and no marketplace middleman. | **Pending for public proof.** These are proposed solution/positioning elements and product boundaries, not yet validated commercial or operational outcomes. Use only if labeled as intended pilot behavior and linked to a later validation result. | `nekurama.babai.research.md#L42-L63`, `nekurama.babai.research.md#L104-L116`; `docs/products/babai/product-definition.md#L60-L63` |
| C12 | Pricing such as ₹999 / ₹2,499 / ₹4,999 + GST. | **Pending; omit from the first page unless explicitly labeled a pilot hypothesis.** Exact pricing, packaging and trial terms remain open. | `docs/products/babai/business-model.md#L14-L20`, `docs/products/babai/business-model.md#L28-L37`; `nekurama.babai.research.md#L65-L81` |
| C13 | Savings, ROI, order-conversion rates, reliability, paid customers, automation accuracy, delivery coverage, refunds, payment verification, Meta onboarding success, multilingual support or production availability. | **Pending/forbidden until evidence exists.** The research explicitly lists these as unvalidated or requiring real-world testing. | `nekurama.babai.research.md#L104-L116`, `nekurama.babai.research.md#L145-L163`; `docs/products/babai/validation.md#L18-L50` |

### Required page structure

1. **Hero:** BABAI name, C1, C3 and a clear restaurant-first qualifier. Do not add an unapproved superlative.
2. **Problem:** Use the observed pain around aggregator economics, direct relationships and difficult WhatsApp operations, with “field research signal” attribution rather than universal market sizing (`nekurama.babai.research.md#L20-L40`, `nekurama.babai.research.md#L91-L102`).
3. **How it works:** Show C7 as a short, accessible sequence; distinguish WhatsApp action from web configuration (`docs/products/babai/product-definition.md#L22-L30`, `docs/products/babai/experience-and-channels.md#L14-L30`).
4. **Human and business boundaries:** Explain human takeover, business-owned relationship and deterministic controlled state (`docs/products/babai/product-definition.md#L124-L144`).
5. **Evidence:** Show C9/C10 with date and caveat; do not use anonymous logos, testimonials, customer names, screenshots or metrics without permission and a source record.
6. **Pilot CTA:** “Discuss a restaurant pilot” is **pending** until an approved contact destination, owner, response expectation and privacy notice exist. Do not ship a dead, fake or secret-bearing form.
7. **Footer:** Product/company relationship, legal links and contact details remain **pending** until verified. BABAI is a NEKURAMA product/brand, not a separate legal entity (`docs/company/ip-brand-legal.md#L13-L19`).

Final marketing copy and tagline testing remain deferred; the page must treat the confirmed hierarchy as a content contract, not as permission to invent additional copy (`docs/products/babai/thesis-and-positioning.md#L150-L162`).

## Explicit unknowns and release blockers

The following are not to be silently filled with assumptions:

- Final public copy, voice/tone rules and tagline test results (`docs/products/babai/thesis-and-positioning.md#L150-L162`).
- Exact production feature cut, end-to-end customer journey, owner dashboard information architecture, notifications/templates and onboarding flow (`docs/products/babai/product-definition.md#L152-L160`, `docs/products/babai/experience-and-channels.md#L32-L40`).
- Final pricing, packaging, cancellation, trial/pilot terms and billing destination (`docs/products/babai/business-model.md#L28-L37`).
- Whether the public CTA is a form, email, WhatsApp link or private founder-led route; no approved destination is currently documented.
- Privacy policy, DPA baseline, retention/deletion schedule, cross-border assessment and vendor review process (`docs/company/security-privacy-controls.md#L18-L29`).
- Trademark clearance for BABAI and domain ownership policy (`docs/company/ip-brand-legal.md#L19-L30`).
- Public launch date, service availability, SLA/support promise and production status.

If any blocker remains open, the page should be an informational pilot-interest page with no personal-data collection, not a signup funnel.

## Accessibility requirements

These are acceptance requirements for the eventual implementation:

- Use semantic landmarks (`header`, `nav`, `main`, `footer`), one clear `h1`, and a logical heading hierarchy.
- Provide a skip link, visible keyboard focus, keyboard-operable navigation and no keyboard trap.
- Meet WCAG 2.2 AA contrast and target-size expectations; never communicate status by color alone.
- Provide meaningful alternative text for informative images and empty alt text for decorative artwork; do not place claims only inside images.
- Respect `prefers-reduced-motion`; do not autoplay video or animation essential to understanding the product.
- Keep the layout usable at 320 CSS px and at browser zoom up to 200% without loss of content or function.
- Label every form control, expose validation errors in text, preserve entered values where safe, and provide an accessible success/failure status.
- Ensure the core story and CTA work with JavaScript disabled or with a clearly communicated degraded state.
- Test with keyboard-only navigation and at least one screen reader in Chromium/Firefox before release.

The content must also preserve the product's channel boundary: the page may explain WhatsApp-first behavior, but must not imply that web does not exist or that every workflow belongs in WhatsApp (`docs/products/babai/product-definition.md#L22-L30`, `docs/products/babai/experience-and-channels.md#L14-L30`).

## Privacy, security and legal constraints

- Use only company-owned repository, domain, hosting, provider accounts and secrets; never put tokens, phone numbers, webhook credentials or private pilot data in the static site or repository (`docs/company/security-privacy-controls.md#L12-L16`).
- Do not collect names, phone numbers, restaurant menus, WhatsApp identifiers, conversation content or analytics identifiers until an approved privacy notice, purpose, retention/deletion path and responsible owner exist (`docs/company/security-privacy-controls.md#L16-L29`).
- Keep any future lead data tenant- and purpose-scoped; do not expose one restaurant's information to another. Tenant isolation, scoped authorization and auditability are product control requirements (`docs/company/security-privacy-controls.md#L14-L16`).
- Do not use real pilot screenshots, customer logos, testimonials, menu data or conversation excerpts without written permission and provenance. Customer-owned material/data remains distinct from NEKURAMA IP (`docs/company/ip-brand-legal.md#L13-L19`).
- Do not add third-party trackers, advertising pixels, remote fonts or unreviewed embeds by default. Any vendor must pass the pending vendor-security/privacy review (`docs/company/security-privacy-controls.md#L18-L29`).
- Do not claim trademark clearance, legal incorporation details, compliance certifications, security certifications or a privacy policy that does not exist (`docs/company/ip-brand-legal.md#L19-L30`, `docs/company/security-privacy-controls.md#L18-L29`).
- GitHub Pages is a hosting target only; it is not evidence that BABAI is available, secure, compliant or production-ready.

## Concrete validation and test plan

### Content and evidence tests

| Test ID | Check | Pass condition |
|---|---|---|
| CQA-01 | Claim inventory | Every visible factual/product claim maps to C1–C13 or is removed. |
| CQA-02 | Pending-copy gate | No C11–C13 item appears as an unqualified confirmed outcome. |
| CQA-03 | Audience fit | A restaurant owner can identify buyer, pilot scope, business-owned WhatsApp relationship and next action within one page. |
| CQA-04 | Evidence integrity | Research numbers show “September 2026” and “early signal, not paid validation”; no invented logos, testimonials or traction. |
| CQA-05 | Boundary accuracy | Copy does not call BABAI a marketplace, POS/ERP replacement, API wrapper or generic chatbot. |
| CQA-06 | CTA safety | CTA destination, data collected, notice, owner and response behavior are documented before enabling it. |

### Functional and visual tests

| Test ID | Check | Pass condition |
|---|---|---|
| FQA-01 | Static build | GitHub Pages-compatible build succeeds with no broken asset or internal links. |
| FQA-02 | Responsive layout | 320, 375, 768, 1024 and 1440 CSS-pixel viewports retain readable content, navigation and CTA. |
| FQA-03 | Keyboard | Skip link, navigation, accordions/forms and CTA are reachable and operable without a pointer. |
| FQA-04 | Accessibility | Automated scan has no critical/serious findings; manual screen-reader and zoom checks pass the requirements above. |
| FQA-05 | Browser coverage | Chromium, Firefox and WebKit/ Safari-equivalent checks pass for layout, links, console errors and form states. |
| FQA-06 | Reduced motion | Reduced-motion mode removes non-essential animation and does not hide content. |
| FQA-07 | Failure states | Offline/blocked third-party resources do not remove the core story; form errors are explicit and recoverable. |

### Privacy and security tests

| Test ID | Check | Pass condition |
|---|---|---|
| SQA-01 | Repository scan | No secrets, access tokens, private pilot data or personal WhatsApp data are committed. |
| SQA-02 | Network review | Only approved first-party and reviewed third-party requests occur; no default trackers or unexpected form destinations. |
| SQA-03 | Data minimization | Anonymous page viewing requires no personal data; any enabled form collects only documented minimum fields. |
| SQA-04 | Legal links | Privacy, terms, contact and brand/legal links resolve to approved content or remain visibly marked pending. |
| SQA-05 | Content provenance | Every image, logo, quote, screenshot and testimonial has permission/provenance recorded before release. |

### Validation sequence

1. Freeze the approved claim inventory and resolve release blockers.
2. Implement the smallest static page with no analytics or lead form by default.
3. Run content, build, link, responsive, keyboard, screen-reader, zoom, reduced-motion and browser checks.
4. Run repository secret scan and network/request review.
5. Conduct a founder/product-owner review against the source citations and a restaurant-operator comprehension review.
6. Record defects and evidence in the product validation tracker before any deployment decision (`docs/products/babai/validation.md#L42-L60`).

No deployment is included in this scope.

## Merge risks

- **High:** A polished page could turn unvalidated hypotheses into public promises, especially pricing, savings, “no commission,” reliability, paid traction and availability (`nekurama.babai.research.md#L104-L116`, `docs/products/babai/business-model.md#L14-L20`).
- **High:** A lead form without privacy/DPA/retention ownership would create avoidable personal-data risk (`docs/company/security-privacy-controls.md#L16-L29`).
- **Medium:** “Without leaving WhatsApp” can be misread as “no web”; the page must explain WhatsApp-first, not WhatsApp-only (`docs/products/babai/thesis-and-positioning.md#L49-L57`).
- **Medium:** BABAI trademark/domain/legal status remains open, so legal footer and brand claims need clearance before public use (`docs/company/ip-brand-legal.md#L15-L30`).
- **Medium:** The static mock has no build configuration or deployment workflow; this document and [`docs/web/design-qa-note.md`](../../web/design-qa-note.md) intentionally define scope and QA only.
