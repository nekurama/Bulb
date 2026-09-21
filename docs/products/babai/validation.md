---
status: partial
owner: BABAI
last-reviewed: 2026-09-18
sources:
  - nekurama/Bulb#1
  - historical ManojVysyaraju/bulb#1
---

# Validation

## Primary gate

The first **10 restaurants** are the primary product validation gate. This is the initial controlled beta cohort and early selling/onboarding is founder-led.

The 10-restaurant cohort is not a fixed endpoint for validation. After practical complexities are identified and the product becomes sufficiently stable, additional restaurants should be onboarded continuously in controlled increments based on evidence from real-world usage.

## What to validate

- **Restaurant adoption:** Determine whether restaurant managers and staff can use BABAI properly in day-to-day operations.
- **Customer ordering adoption:** Determine whether customers are comfortable using BABAI/WhatsApp to place orders and whether they actually complete orders through it.
- **Real-world operational complexity:** Use the pilot to discover practical restaurant workflow complexities that are difficult to predict before live usage.
- **Traffic and usage behavior:** Observe what happens as customer and order traffic increases and identify any new operational requirements or bottlenecks.
- **Ordering experience:** Determine whether WhatsApp ordering is genuinely easier and faster than manual replies from restaurant owners or staff.
- **Customer experience and interface:** Use real customer behavior and feedback to determine whether the current experience is sufficient or whether interface, workflow, or other product initiatives are required.
- **Meaningful business problem:** Validate that BABAI addresses a meaningful restaurant problem. Initial research indicates that commission costs on existing platforms are a recurring concern for restaurant businesses.
- **Business value:** Determine whether BABAI provides enough practical value for restaurants to justify continuing with a subscription after the beta.
- **Willingness to pay / paid continuation:** Treat post-beta paid continuation as a key validation hypothesis rather than an assumption.
- **Onboarding and support burden:** Determine whether restaurants can adopt and operate BABAI with minimal training and ongoing support, supported by the familiar WhatsApp interaction model.
- **Scalability of restaurant onboarding:** Determine whether the effort required per restaurant remains low enough to progressively add restaurants without onboarding or support becoming a bottleneck.
- Activation and time-to-value
- WhatsApp readiness
- Menu/catalog setup
- Human takeover usefulness
- Payment workflow
- Fulfillment/delivery where enabled
- Repeat use
- Owner-reported value / ROI
- Gross contribution after variable costs
- Whether real-time business data is captured, organized and reflected correctly across the workflow

## Kill / success signals

The product should be judged on sustained usage, customer and restaurant adoption, and business value, not merely feature completion.

For the initial 10-restaurant beta, validation should establish whether BABAI can reliably support real restaurant operations, whether managers and staff can use it with reasonable effort, whether customers are comfortable ordering through it, whether it solves a meaningful problem, and whether restaurants see enough value to continue as paying customers after the beta.

The pilot is also intended to expose practical workflow, traffic, customer-experience, and data complexities. Findings may lead to changes in the interface, workflows, onboarding, or other product initiatives before broader expansion.

Expansion beyond the initial 10 should be based on evidence from the pilot, with restaurant onboarding increasing progressively rather than switching immediately to aggressive market acquisition.

## Questions

- [ ] Pilot instrumentation
- [ ] Baseline metrics before BABAI
- [ ] Success thresholds
- [ ] Kill thresholds
- [ ] Interview/research script
- [ ] ROI calculation method
- [ ] Pilot-to-paid conversion criteria

## Founder and research evidence

- `nekurama.babai.research.md`, **Summary**: interviews with 19 businesses (15 restaurants and 4 stores) provide the first meaningful demand signal, but explicitly do not prove willingness to pay.
- `nekurama.babai.research.md`, **Immediate pilot plan**: the research proposed a narrow workflow of business WhatsApp connection, menu/catalog setup, customer questions, pickup order, business accept/reject, payment recording/confirmation, staff completion, and customer status.
- `nekurama.babai.research.md`, **Success criteria**: the strongest next proof was three active pilot businesses and at least one paying customer. This is a research target, not a general product threshold or permanent success rule.
- `nekurama.babai.research.md`, **What remains unvalidated**: paid subscription and onboarding-fee conversion, continued use, automation trust, delivery, payment verification, refunds, message reliability, Meta onboarding, and multilingual staff workflows.
- `nekurama.raw.chat.json`, message index 125 (mapping order; no separate message-index field): founder/history discussion identifies “First 10 restaurants + ROI/success criteria + competitor benchmark” as a pilot workstream.

## Explicit partial / unknown decisions

No numeric success or kill thresholds have been settled. The following remain to be defined through pilot instrumentation and baseline measurement:

- Activation and time-to-value thresholds.
- Customer and restaurant adoption thresholds.
- Acceptable onboarding, support, staff-handling, message-error, and payment-confirmation rates.
- Repeat-use and owner-reported ROI methodology.
- Pilot-to-paid conversion criteria.
- Kill criteria and the evidence required before increasing the restaurant cohort.
