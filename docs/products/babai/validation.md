---
status: partial
owner: BABAI
last-reviewed: 2026-09-20
sources:
  - nekurama.raw.chat.json
  - nekurama.chatgpt.md
  - nekurama.babai.research.md
---

# Validation / Pilot

## Validation gate — staged, with detail partial

The validation plan is explicitly staged:

| Stage | Current purpose | Status |
|---|---|---|
| **Stage 0** | One-business operational pilot proving the narrow pickup-first flow with one WhatsApp number, one branch, manual takeover and no delivery dependency. | **confirmed boundary** |
| **Stage 1** | Up to three pilots and at least one payer, testing repeatability and willingness to pay. | **partial target** |
| **Stage 2** | Controlled 10-restaurant beta testing repeatability with bounded support and instrumentation. | **partial target** |

These are sequential learning gates, not competing cohort decisions. The 10-restaurant beta does not require waiting to learn in Stage 0 or Stage 1. The source does not establish numeric entry/exit, success/kill or continuation thresholds; those remain open. [Evidence: `nekurama.raw.chat.json:L66495-L66540`, `nekurama.raw.chat.json:L79721-L79820`; corroboration: `nekurama.babai.research.md:L118-L163`, `nekurama.babai.research.md:L176-L186`]

Expansion beyond the initial cohort should happen in controlled increments based on real-world evidence, not an immediate aggressive acquisition switch. [Evidence: `nekurama.babai.research.md:L176-L186`]

## Pilot workflow — confirmed

```text
Connect business WhatsApp
→ upload/review/publish menu or catalog
→ customer asks questions
→ customer places pickup order
→ business accepts or rejects
→ payment is recorded or confirmed
→ staff completes the order
→ customer receives status
```

Start with one business, one WhatsApp number, one branch, pickup-first fulfillment, manual human takeover and no delivery dependency. [Evidence: `nekurama.babai.research.md:L118-L143`]

## What to measure — partial

- Pilot commitment and access to real WhatsApp/menu data
- Onboarding time and menu correction rate
- Activation and time to first usable order
- Customer question-to-order conversion and order completion
- Staff handling time, takeover frequency and operational errors
- Missed/duplicate messages and payment confirmation problems
- Repeat orders and owner-reported value
- Support effort and actual Meta, AI, infrastructure and payment costs
- Pilot-to-paid conversion and gross contribution

The evidence sequence is behavior → successful fulfillment → staff adoption → business value → retention → willingness to pay, not feature completion. Apply it first in Stage 0, repeat it through Stage 1, and use Stage 2 to test controlled repeatability. [Evidence: `nekurama.babai.research.md:L145-L163`; corroboration: `nekurama.raw.chat.json:L79721-L79820`, `nekurama.chatgpt.md:L39763-L39780`]

## Success / kill criteria — unknown

Numeric thresholds, baseline period, instrumentation design, ROI calculation and kill criteria are not yet established. The source discussion explicitly leaves these as the next product battle; no threshold is invented here. [Evidence: `nekurama.raw.chat.json:L66495-L66540`; corroboration: `nekurama.chatgpt.md:L27050-L27263`, `nekurama.chatgpt.md:L51948-L51955`]

## Validation risks still open

Field interest is not proof of willingness to pay, continued use, trust in automation, Meta onboarding reliability, delivery, payment verification, refunds, message reliability or multilingual staff workflows. [Evidence: `nekurama.babai.research.md:L104-L116`]

The next evidence should come from real pilots, not further architecture expansion based only on positive interviews. [Evidence: `nekurama.babai.research.md:L176-L180`]
