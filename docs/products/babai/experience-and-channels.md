---
status: partial — channel principle confirmed; detailed journeys and provider behavior remain open
owner: BABAI
last-reviewed: 2026-09-20
sources:
  - nekurama/Bulb#1
  - historical ManojVysyaraju/bulb#1
  - nekurama.babai.research.md
  - nekurama.raw.chat.json (ordered turns 71, 90, 290)
---

# Experience & Channels

## Channel philosophy — confirmed

BABAI is **WhatsApp-first, not WhatsApp-only**:

> If an operation can reasonably be performed through WhatsApp, the user should not be forced to open our website/app.

**WhatsApp** is the primary conversational and attention surface for customer questions, menu/order interactions, status messages, staff action and human takeover. The customer normally remains on the restaurant's own WhatsApp identity.

**Web** is a supporting productivity surface for dense configuration, menu review, high-density order operations, comparison, bulk actions, analytics, recovery/configuration and multi-branch administration. Web is not a mandatory second product for the first pilot.

Working rule:

> **Web = see everything. WhatsApp = know what needs attention and act immediately.**

This channel decision is recorded in the founder discussion (`nekurama.raw.chat.json`, ordered turns 90 and 290). The field research also reports existing WhatsApp behavior and staff-management pain (`nekurama.babai.research.md`, “Customer pain observed”).

## Pilot experience

`Connect business WhatsApp → review/publish menu → customer asks → pickup order → business accepts/rejects → payment recorded/confirmed → staff completes → customer receives status`

The first pilot should keep the experience narrow: one restaurant, one branch, one WhatsApp number, pickup-first, founder-led onboarding, and human fallback. Customers should not need a native app.

## Working state principles

Channel lifecycle:

`DISCOVERED → AUTHORIZING → CONNECTED → VERIFYING → CONFIGURING → READY`

Failure, suspension and disconnection states are required, but exact provider behavior is not yet fully validated.

Human takeover:

`AUTOMATED → HUMAN_REQUESTED → HUMAN_ACTIVE → HUMAN_RELEASED → AUTOMATED`

Human takeover changes conversation ownership; order, payment and fulfillment state continue independently. This is a product principle, while exact multi-device/coexistence behavior remains a Meta integration validation item.

## Partial / unknown

- [ ] End-to-end customer and owner journeys, including exceptions
- [ ] Minimum web information architecture for the pilot
- [ ] Staff device/coexistence model and multilingual support
- [ ] Notification/template matrix and messaging-cost boundaries
- [ ] Web ↔ WhatsApp context handoff details
- [ ] Whether customers prefer pickup ordering over calls/manual WhatsApp at meaningful volume
