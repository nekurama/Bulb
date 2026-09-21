---
status: partial
owner: BABAI
last-reviewed: 2026-09-15
sources:
  - nekurama/Bulb#1
  - historical ManojVysyaraju/bulb#1
---

# Experience & Channels

## Current answer

WhatsApp is the primary interaction channel, not the only channel.

**WhatsApp:** immediate attention, conversational ordering, staff action, human takeover and customer communication.

**Web:** dense configuration, analytics, bulk actions, comparison, recovery and multi-branch administration.

Channel lifecycle:

`DISCOVERED → AUTHORIZING → CONNECTED → VERIFYING → CONFIGURING → READY`

with failure/suspension/disconnection states as required.

Human takeover:

`AUTOMATED → HUMAN_REQUESTED → HUMAN_ACTIVE → HUMAN_RELEASED → AUTOMATED`

It pauses conversational automation while order/payment/delivery processing continues.

## Questions

- [ ] End-to-end customer journey
- [ ] Owner dashboard information architecture
- [ ] Staff WhatsApp experience
- [ ] Human takeover UX details
- [ ] Notifications/templates
- [ ] Onboarding flow
- [ ] Web ↔ WhatsApp context handoff details

## Founder and research evidence

- `nekurama.babai.research.md`, **Customer pain observed**: businesses already receive WhatsApp orders or customer requests but struggle with staff management, supporting the familiar-channel and human-operations focus.
- `nekurama.babai.research.md`, **Proposed BABAI solution**: the proposed experience combines conversational customer questions, menu/catalog understanding, order capture and confirmation, direct payment, staff takeover/assignment, and customer support through the business’s own staff.
- `nekurama.babai.research.md`, **What this validates**: customers prefer familiar channels such as WhatsApp and phone calls; staff takeover is necessary; automation alone is not enough.
- `nekurama.raw.chat.json`, message index 143 (mapping order; no separate message-index field): founder/history records “Run your business without leaving WhatsApp” as the core promise while retaining the nuance that web remains important; this supports WhatsApp-first, not WhatsApp-only.

## Explicit partial / unknown decisions

The channel principles are decided, but implementation and experience details remain partial:

- End-to-end customer journey and edge cases.
- Owner dashboard information architecture.
- Staff WhatsApp experience and detailed human-takeover UX.
- Notification/template matrix and transactional-versus-marketing handling.
- Onboarding flow and exact Meta connection/verification experience.
- Web-to-WhatsApp context handoff details.
- Accessibility, multilingual staff workflows, and reliability requirements under live traffic.
