---
status: committed-specification
owner: BABAI
last-reviewed: 2026-09-20
sources:
  - nekurama.raw.chat.json
  - docs/products/babai/thesis-and-positioning.md
  - docs/products/babai/product-definition.md
  - docs/products/babai/experience-and-channels.md
  - docs/products/babai/validation.md
  - docs/company/ip-brand-legal.md
---

# GitHub Pages Landing Page

## Scope

This specification defines a static, public-facing GitHub Pages landing page for **BABAI**, the first product/brand of **NEKURAMA**. It covers content, evidence, accessibility, and validation requirements; it does not define a product application, dashboard, backend, or deployment configuration.

The page may communicate BABAI's current positioning, restaurant-first entry point, operating workflow, channel philosophy, product boundaries, and controlled-beta validation context. It must distinguish confirmed positioning from hypotheses, future direction, and unresolved decisions.

The page must use only repository-owned, approved assets. The current relevant brand assets are `assets/branding/logo/nekurama-cat.svg` and `assets/branding/logo/nekurama-kurama.svg`. The mock implementation is the root [`index.html`](../../../index.html), [`styles.css`](../../../styles.css), [`script.js`](../../../script.js) and [`mock-data.json`](../../../mock-data.json), with QA notes in [`docs/web/design-qa-note.md`](../../web/design-qa-note.md). No product screenshots, customer logos or testimonials are included.

## Evidence-backed content requirements

### Brand and positioning

Use the following current durable truth:

- **BABAI is a business operating platform built around WhatsApp.**
- **Run your business without leaving WhatsApp.**
- **Turn customer conversations into business operations.**
- BABAI helps businesses run customer and operational workflows through AI and automation.

These statements are supported by `docs/products/babai/thesis-and-positioning.md`, headings **“1. Definition — confirmed”**, **“10. Core promise — confirmed”**, **“14. Market-facing positioning — confirmed direction”**, and **“15. Messaging hierarchy — committed structure, copy deferred”**. Founder intent message **index 428** contains the accepted positioning pair:

> “BABAI” — “A business operating platform built around WhatsApp.”
>
> “Core promise” — “Run your business without leaving WhatsApp.”
>
> “Product thesis” — “Turn customer conversations into business operations.”

The parent/product relationship must remain consistent with `docs/products/babai/thesis-and-positioning.md`, heading **“19. Product/company relationship — confirmed”**: `NEKURAMA → BABAI → future products/verticals`.

### Initial audience and workflow

The page may describe restaurants as BABAI's initial wedge, not its permanent category boundary. The initial ICP is documented as small-to-medium restaurants with 1–5 branches that want direct customer relationships, stronger direct-order economics, less manual WhatsApp handling during rush periods, and repeat-customer relationships. Cite `docs/products/babai/thesis-and-positioning.md`, headings **“3. Initial wedge — confirmed”** and **“11. Initial ICP — confirmed”** when maintaining copy or content review records.

The primary workflow may be represented as:

`Business WhatsApp → Customer Conversation → Catalog/Menu → Order → Payment → Restaurant Operations → Fulfillment → Completion → Feedback / Repeat`

This is the current product definition in `docs/products/babai/product-definition.md`, **“Current answer”**. The initial pilot workflow is pickup-first, supports human takeover, and does not depend on a delivery integration; see **“Initial pilot workflow”** and **“Explicit pilot out of scope”** in that file.

### Channels and operating model

The page must explain **WhatsApp-first, not WhatsApp-only**:

- WhatsApp is the primary conversational/action surface for customers and staff.
- Web is used for dense configuration, operations, comparison, bulk actions, analytics, recovery, and multi-branch administration.
- The governing explanation is: **“Web = see everything. WhatsApp = know what needs attention and act immediately.”**

Source: `docs/products/babai/experience-and-channels.md`, **“Current answer”**, and `docs/products/babai/thesis-and-positioning.md`, **“7. Channel philosophy — confirmed”**.

The page may state that the business normally retains its own customer relationship and WhatsApp identity. It may also explain that AI assists with understanding, answering, extraction, recommendations, summarization, and suggested actions, while authoritative order, payment, permission, consent, and other controlled business state remains deterministic and policy-controlled. Sources: `docs/products/babai/thesis-and-positioning.md`, **“6. Business-owned relationship — confirmed”** and **“9. Strategic boundaries — confirmed”**; `docs/products/babai/product-definition.md`, **“Product boundaries / non-negotiables”**.

### Validation context

If the page mentions the beta, it must call it a **planned/current controlled validation gate**, not completed traction:

- The first **10 restaurants** are the eventual validation hypothesis, not a
  simultaneous enrollment promise; operate a controlled one-to-three-
  restaurant cohort at a time and expand only after the readiness gate.
- The initial boundary is one restaurant/tenant, one branch, and one WhatsApp channel per participating restaurant.
- The pilot is founder-led and pickup-first.

Source: `docs/products/babai/validation.md`, **“Primary gate”**, and `docs/products/babai/product-definition.md`, **“Initial pilot workflow”**.

The page must not imply that the beta has proven adoption, willingness to pay, sustained usage, operational trust, payment verification, Meta onboarding reliability, refunds, delivery, or multilingual staff workflows. These are explicitly identified as requiring further validation in `docs/products/babai/product-definition.md`, **“What the field research changes”**.

## Explicit exclusions and unknowns

The landing page must not present any of the following as current product commitments, completed capabilities, or evidence-backed outcomes:

- Consumer marketplace/discovery network, customer native app, POS replacement, full ERP, inventory-management suite, delivery fleet, advanced loyalty, sophisticated marketing automation, advanced BI/data warehouse, ONDC integration, or a general-purpose AI assistant.
- Public pricing, packaging, discounts, free-trial terms, revenue, savings, ROI, order volume, conversion, retention, or willingness-to-pay outcomes.
- Customer names, customer logos, testimonials, case studies, pilot results, or quantified research claims unless separately sourced and approved.
- Production availability, general availability, uptime, security certification, regulatory compliance, data residency, payment guarantees, or Meta/WhatsApp approval/reliability claims.
- A proven moat. The differentiation is a documented thesis, not an established moat; see `docs/products/babai/thesis-and-positioning.md`, **“13. Differentiation — confirmed thesis; moat not yet claimed”**.
- Final trademark clearance, legal entity details, privacy policy, terms, DPA, or other legal assurances. `docs/company/ip-brand-legal.md`, **“Current answer”** and **“Questions”**, records these as incomplete.
- Final marketing copy, final brand voice/tone rules, post-pilot feature cut, quantitative expansion gates, pilot success/kill thresholds, or ROI methodology. These remain deferred or open in `docs/products/babai/thesis-and-positioning.md`, **“21. Remaining Step 1 refinements — deferred, not blocking”**, and `docs/products/babai/validation.md`, **“Questions”**.

Where a CTA is required but no destination has been approved, use no fabricated signup/demo endpoint. A visible contact or waitlist destination may be added only after its ownership, destination, and handling are explicitly decided.

## Accessibility acceptance criteria

The implementation must satisfy these acceptance criteria before release:

- Use one meaningful `h1`, logical heading order, and semantic landmarks including `header`, `nav`, `main`, and `footer`.
- Make the hero and every CTA understandable without visual context. Link and button names must describe their destination or action.
- Give informative images useful alternative text. Treat decorative SVGs as decorative. Give a logo used as a link an accessible name.
- Make all navigation and controls keyboard accessible with a visible, high-contrast focus indicator. Do not require hover, drag, animation, or pointer-only gestures.
- Meet WCAG 2.2 AA contrast expectations. Do not use the orange brand color as the only way to communicate meaning.
- Support narrow mobile widths and 200% zoom without clipping or horizontal scrolling. Preserve readable text size, spacing, and line length.
- Avoid auto-rotating content. If motion is used, respect `prefers-reduced-motion`; static content is preferred.
- Provide a descriptive document title, declared page language, meaningful metadata, and correctly labelled form fields if a form is later approved.
- Manually test keyboard-only navigation, focus order, screen-reader landmark and heading traversal, zoom, high contrast, reduced motion, and a mobile viewport. Automated accessibility results are supplemental, not sufficient.

## Validation plan

1. **Content and evidence review**
   - Compare every visible claim with this specification and the cited current-document heading.
   - Verify that confirmed positioning, pilot design, research evidence, future direction, and unknowns use distinct language.
   - Reject unsupported pricing, traction, customer, legal, security, performance, and availability claims.

2. **Static GitHub Pages check**
   - Build or serve the page as static files only.
   - Verify the intended GitHub Pages entry point, relative asset paths, SVG rendering, metadata, favicon behavior, direct navigation, refresh, and missing-page behavior.
   - Confirm there are no secrets, tokens, private URLs, or environment-specific credentials.
   - No external deployment is required for this validation.

3. **Responsive and visual check**
   - Test mobile, tablet, desktop, 200% zoom, and narrow viewport widths.
   - Check heading hierarchy, wrapping, CTA visibility, logo treatment, contrast, section order, and horizontal overflow.

4. **Accessibility check**
   - Run an automated WCAG scan if available.
   - Complete the manual checks in **Accessibility acceptance criteria**, including keyboard, focus, screen-reader structure, SVG alternative treatment, reduced motion, zoom, and contrast.

5. **Link and asset check**
   - Verify every internal anchor, approved external link, stylesheet, font, image, SVG, and metadata URL.
   - Do not expose a link as a working signup, demo, documentation, or product destination unless that destination exists and is approved.

6. **Release gate**
   - Accept the landing page only when it loads as static content, uses repository-approved assets, remains usable across responsive and accessibility checks, and contains no unsupported claims or invented decisions.
