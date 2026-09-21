---
status: partial
owner: NEKURAMA / BABAI
last-reviewed: 2026-09-20
sources:
  - nekurama.raw.chat.json
  - nekurama.chatgpt.md:40746-40750
  - nekurama.chatgpt.md:41055-41060
  - docs/products/babai/thesis-and-positioning.md
  - docs/products/babai/product-definition.md
  - docs/products/babai/validation.md
---

# GitHub Pages Landing Page

## Purpose

Define the evidence-qualified scope for a static public landing page. This is a content,
accessibility and validation contract, not a launch decision or a deployment instruction.
The page must explain the current BABAI product direction without turning hypotheses,
research signals or future plans into claims of shipped capability.

## Source-of-truth and evidence rules

The root-level `nekurama.raw.chat.json` founder discussion is the primary intent/history
source. The current `docs/` files are the current product and company truth. When they
conflict with older conversation wording, use the latest explicit, evidence-supported
decision and record the unresolved dimension rather than guessing.

Key raw-chat anchors:

- `3483740d-6ea4-4df1-9f58-8a6cc8b11b9a` — founder discussion records the locked
  BABAI identity, core promise and product thesis.
- `bbb21e74-334f-4945-a414-7f238783fc79` — founder lists the NEKURAMA website as an
  existing company asset.
- `bbb219ce-cbd2-4a97-981f-8930f7239183` — founder selects “Run your business without
  leaving WhatsApp.” as the stronger promise wording.

### Approved message hierarchy

These statements are current positioning and may appear on the page:

1. **BABAI is a business operating platform built around WhatsApp.**
2. **Run your business without leaving WhatsApp.**
3. **Turn customer conversations into business operations.**
4. BABAI helps businesses run customer and operational workflows through AI and
   automation.

The page may explain the distinction already recorded in product truth:

- WhatsApp is the primary conversational and action surface.
- Web is for dense configuration, analytics, recovery and multi-branch administration.
- The initial wedge is restaurants; the long-term category is intentionally broader.

The founder record explicitly says that “without leaving WhatsApp” does not mean
WhatsApp-only. Do not represent the promise as the absence of a web surface.

### Evidence-qualified copy

The page may describe the initial product boundary as a **restaurant-first,
pickup-first controlled beta** with one branch and one WhatsApp channel per
participating restaurant. It may say that the first validation gate is **10
restaurants**, but must call this a pilot/validation gate, not customer traction.

The page may describe the problem signal from the September 2026 field research:
existing WhatsApp ordering, aggregator-economics concerns and operational difficulty
handling conversations. Label this as research evidence, not proof of willingness to
pay or product-market fit.

Do not publish claims about:

- launch, availability, production readiness or customer count;
- paid conversion, revenue, savings, ROI, performance or reliability;
- final pricing, plans or commercial terms;
- customer logos, testimonials or case studies without explicit evidence and permission;
- Meta onboarding/coexistence, payments, delivery, AI accuracy or multilingual support
  being solved;
- trademark clearance, domain ownership beyond documented current facts, or legal status.

Every quantitative or comparative claim needs a source in the current docs or a
reviewable evidence record. If a claim cannot be sourced, remove it or label it as an
open hypothesis.

## Static page scope

The first page should be a fast, mobile-first, single-page explanation:

1. **Hero**
   - BABAI name and approved positioning hierarchy.
   - One primary action whose destination is still an open decision.
   - No implied signup, launch or availability.
2. **Problem and outcome**
   - Explain the operational pain of handling customer conversations manually.
   - Connect the outcome to direct customer relationships and business-owned WhatsApp.
3. **How it works**
   - Show the current flow: conversation → catalog/menu → order → payment →
     restaurant operations → fulfillment/completion.
   - State that controlled business state remains deterministic and that human takeover
     is part of the intended workflow.
4. **WhatsApp and web roles**
   - WhatsApp = act/operate.
   - Web = see/configure.
   - Make clear that both use the same business context and workflows.
5. **Initial focus and validation**
   - Restaurant-first, pickup-first, founder-led onboarding and the 10-restaurant
     validation gate.
   - Mark all of these as current pilot scope, not general availability.
6. **Evidence**
   - Include only the research signals currently recorded in
     `nekurama.babai.research.md`.
   - Keep the evidence block separate from positioning copy and show its date/context.
7. **Footer**
   - NEKURAMA/BABAI identity only where the ownership and brand treatment are settled.
   - Source, privacy and contact links are open decisions until their destinations and
     data-handling rules are approved.

### Explicitly out of scope

- Authenticated dashboard, ordering, payments or customer messaging.
- Backend APIs, server-side forms, secrets, or user-data collection.
- Pricing table, plan comparison or checkout.
- Unreviewed analytics, tracking pixels or third-party embeds.
- Customer logos, testimonials, fabricated metrics or stock “proof”.
- Domain purchase/transfer, trademark clearance or external deployment.
- A second product narrative that contradicts the current BABAI positioning.

GitHub Pages should be treated as a static hosting target. Any future contact or
waitlist path must name its owner, privacy notice, retention behavior and abuse
controls before implementation. Do not put credentials or private configuration in
the repository.

## Accessibility and interaction acceptance criteria

The implementation target is WCAG 2.2 AA for the page’s applicable content and
interaction:

- Use semantic landmarks (`header`, `nav`, `main`, sections and `footer`) with one
  meaningful `h1` and a logical heading hierarchy.
- Provide a visible skip link, keyboard-reachable navigation and a clearly visible
  focus indicator that is not removed by custom styling.
- Ensure every interactive control has an accessible name and a sensible keyboard
  order; do not require hover, drag, pointer precision or touch-only gestures.
- Meet text and UI contrast requirements; do not encode meaning by color alone.
- Provide useful alternative text for informative imagery and empty alt text for
  decorative imagery. Do not use a logo as the only label for a control.
- Support reflow at narrow widths and browser zoom to 200% without clipped content,
  horizontal scrolling caused by the page, or loss of essential actions.
- Respect `prefers-reduced-motion`; motion must not be required to understand the
  message and no autoplaying video is permitted in the first page.
- Keep copy readable, links descriptive, tap targets practical and form errors
  (if a form is later approved) programmatically associated with their fields.
- Test with keyboard-only navigation and at least one screen reader/browser pairing
  before calling the page ready.

## Validation plan

Before publication, validate the exact page—not a proxy or screenshot:

1. **Content review:** compare every claim and number against this file,
   `docs/products/babai/product-definition.md`, `validation.md`,
   `thesis-and-positioning.md` and the cited research. Remove unsupported claims.
2. **Static checks:** build the page with no secrets, run HTML/CSS validation and
   link checking, and confirm the GitHub Pages path works from a clean checkout.
3. **Responsive checks:** test representative mobile and desktop widths plus 200%
   browser zoom; verify no essential content or action is lost.
4. **Accessibility checks:** run an automated audit, then manually verify landmarks,
   heading order, focus visibility, keyboard traversal, accessible names, contrast,
   reduced-motion behavior and a screen-reader pass.
5. **Evidence/permissions check:** verify every image, logo, testimonial and external
   link has a documented source and permission basis; remove anything uncertain.
6. **Review gate:** obtain product/company approval for final copy, CTA, privacy/data
   handling and brand/legal treatment before any external deployment.

## Open decisions

- Is the first public page NEKURAMA company-level, BABAI product-level, or a clearly
  scoped combination?
- What is the approved CTA and destination: pilot conversation, repository, email or
  another path?
- Which logo/brand assets are cleared for public use?
- Is any analytics or contact collection desired, and who owns its privacy controls?
- What domain and canonical URL should be used after legal/domain review?

## Repository inventory disposition

The 2026-09-20 pre-assignment inventory found no zero-byte files. The small knowledge
files under `docs/` are intentionally focused and marked `partial` where decisions
remain open; they are not empty placeholders. The root `README.md` remains a lightweight
idea-vault overview rather than product truth. `CHATGPT_ACCESS_TEST.md` is an historical
write-access test, not a knowledge source. `data/executed_workflows/index.json` contains
`{}` because no workflow index entries exist yet; it is generated execution state, not a
knowledge file, and should not be used as product evidence.
