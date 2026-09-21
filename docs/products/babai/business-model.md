---
status: partial
owner: BABAI
last-reviewed: 2026-09-18
sources:
  - nekurama/Bulb#1
  - historical ManojVysyaraju/bulb#1
---

# Business Model

## Current answer

BABAI is a SaaS business. Restaurant order payments and BABAI subscription billing are separate flows; BABAI should not depend on transaction/delivery margin as its initial economic foundation.

The initial business-value hypothesis is that restaurants have a meaningful pain around commission costs on existing platforms. Initial research found this concern recurring among restaurant businesses. BABAI's intended model is to make the order commission component negligible and instead charge restaurants a subscription fee.

The initial 10-restaurant beta should validate whether BABAI delivers enough practical value to restaurants that they choose to continue as paying customers after the beta. Paid continuation is a validation hypothesis, not an assumption of success.

Current public pricing direction discussed: ₹999 / ₹2,499 / ₹4,999 + GST. Exact pricing remains a pilot-validation question; earlier price points are historical experiments, not current truth.

## Unit economics

Major variable-cost drivers expected: acquisition, onboarding/support, WhatsApp messaging, AI, payment/delivery integrations and infrastructure.

The pilot should also help establish whether onboarding and ongoing support effort per restaurant is low enough to support progressive expansion without support becoming a business bottleneck.

## Questions

- [ ] Final packaging/entitlements
- [ ] Final pricing after pilot
- [ ] Gross contribution model
- [ ] CAC and acquisition assumptions
- [ ] Onboarding/support cost
- [ ] Expansion/upsell model
- [ ] Billing and cancellation policy
- [ ] Trial/pilot commercial terms

## Founder and research evidence

- `nekurama.babai.research.md`, **Proposed BABAI solution**: proposed money flow is `Customer → Restaurant or store` and `Business → BABAI subscription`; BABAI should not hold or settle customer funds initially.
- `nekurama.babai.research.md`, **Pricing hypothesis**: Basic ₹999/month before GST, Premium ₹2,499/month before GST, and Advanced ₹4,999/month before GST were discussed, with a possible one-time setup/training fee. The source explicitly says these are hypotheses to test through paid pilots.
- `nekurama.babai.research.md`, **Customer reaction** and **What this validates**: businesses reacted positively to direct WhatsApp ordering, direct payment, no marketplace middleman, no customer app installation, and subscription rather than another transaction commission.
- `nekurama.raw.chat.json`, message index 7 (mapping order; no separate message-index field): founder/history discussion calls ₹999 / ₹2,499 / ₹4,999 + GST an “initial pricing” hypothesis, not permanent pricing.
- `nekurama.raw.chat.json`, message index 332 (mapping order; no separate message-index field): founder/history discussion states the structural proposition that BABAI does not take a commission on food orders and instead charges for software through a predictable subscription.

## Explicit partial / unknown decisions

The following are hypotheses or open commercial decisions, not settled business-model truth:

- Final pricing, packaging, entitlements, and whether any onboarding/training fee is charged.
- Gross contribution model, CAC, acquisition assumptions, onboarding/support cost, and support scalability.
- Expansion/upsell model, trial/pilot commercial terms, billing, and cancellation policy.
- Whether the subscription model produces sufficient paid continuation after the beta.
- Actual Meta, messaging, AI, payment, delivery, infrastructure, and support costs in live operation.
