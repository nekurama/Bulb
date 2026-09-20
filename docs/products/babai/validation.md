---
status: partial
owner: BABAI
last-reviewed: 2026-09-21
sources:
  - nekurama.raw.chat.json
  - nekurama.chatgpt.md
  - nekurama.babai.research.md
  - "2026-09-21 FOUNDER DECISION PACKET"
---

# Validation / Pilot

## Validation gate — staged, with detail partial

The validation plan is explicitly staged:

| Stage | Current purpose | Status |
|---|---|---|
| **Stage 0** | One-business operational pilot proving the narrow pickup-first flow with one WhatsApp number, one branch, manual takeover and no delivery dependency. | **confirmed boundary** |
| **Stage 1** | Fixed 90-day paid pilot under signed minimum-paying terms, with the agreed payment or deposit received before start; not a free trial. | **confirmed term and start gate; agreement details open** |
| **Stage 2** | Team-defined readiness evidence gate for materially larger onboarding volumes. | **proposed gate** |

These are sequential learning gates, not competing cohort decisions. The paid
pilot has a fixed 90-day term, is not free, and does not start until the agreed
payment or deposit is received. At the day-90 decision point, the pilot closes
when the readiness evidence gate supports materially larger
onboarding volumes. If the gate is not met, record the outcome and hold
expansion; do not silently extend the pilot. Any extension or continuation
requires a separately approved decision and agreement. Numeric entry/exit,
success/kill and continuation thresholds remain proposed or open. [Evidence:
`nekurama.raw.chat.json:L66495-L66540`,
`nekurama.raw.chat.json:L79721-L79820`; corroboration:
`nekurama.babai.research.md:L118-L163`,
`nekurama.babai.research.md:L176-L186`; current decision source:
`2026-09-21 FOUNDER DECISION PACKET`]

Expansion beyond the initial cohort should happen in controlled increments
based on real-world evidence, not an immediate aggressive acquisition switch.
[Evidence: `nekurama.babai.research.md:L176-L186`]

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

Start with one business, one WhatsApp number, one branch, pickup-first
fulfillment, manual human takeover and no delivery dependency. [Evidence:
`nekurama.babai.research.md:L118-L143`]

## What to measure — partial

- Pilot commitment and access to real WhatsApp/menu data
- Signed agreement version, minimum-paying term, payment/deposit receipt and
  billing record
- Onboarding time and menu correction rate
- Activation and time to first usable order
- Customer question-to-order conversion and order completion
- Staff handling time, takeover frequency and operational errors
- Missed/duplicate messages and payment confirmation problems
- Repeat orders and owner-reported value
- Support effort and actual Meta, AI, infrastructure and payment costs
- Recognized pilot income, total attributable expenditure and contribution
  amount/margin
- Pilot-to-continuation signal and readiness for materially larger onboarding

Margin must be reported as recognized income against **total attributable
expenditure**, including cash costs, onboarding/support effort, tooling,
failure/refund/remediation cost and other attributable pilot expenditure. See
[`economics-model.md`](economics-model.md); do not report a
variable-cost-only margin as the decision metric.

The evidence sequence is behavior → successful fulfillment → staff adoption →
business value → retention → willingness to pay → operational readiness, not
feature completion. Apply it first in Stage 0, repeat it through the paid
pilot, and use Stage 2 to decide whether materially larger onboarding volumes
are justified. [Evidence: `nekurama.babai.research.md:L145-L163`;
corroboration: `nekurama.raw.chat.json:L79721-L79820`,
`nekurama.chatgpt.md:L39763-L39780`]

## Pilot completion and evidence gate — proposed

The fixed 90-day term is a founder decision. The readiness evidence structure
in [`pilot-metrics.md`](pilot-metrics.md) is proposed and team-owned: the team
must record the evidence categories, owners, observation window and thresholds
before relying on it. Readiness is not a public scale claim.

At day 90:

- if the gate is met, close the pilot and make a separately approved
  continuation/onboarding decision;
- if the gate is not met, close the pilot as not ready for materially larger
  onboarding volumes and hold expansion;
- do not automatically extend the term, increase prices or promise refunds.

## Success / kill criteria — proposed, pending founder/team approval

Numeric thresholds, baseline period, instrumentation design, ROI calculation
and kill criteria are not yet confirmed. The source discussion explicitly
leaves these as the next product battle; no threshold is promoted here.
[Evidence: `nekurama.raw.chat.json:L66495-L66540`; corroboration:
`nekurama.chatgpt.md:L27050-L27263`,
`nekurama.chatgpt.md:L51948-L51955`]

## Agreement and external validation boundary

The product artifacts may specify that the pilot is paid, fixed at 90 days,
requires the agreed payment or deposit before start, and is subject to
minimum-paying terms. They do not draft legal cancellation/refund language or
classify the payment/deposit. Before enrollment, founders must approve the
commercial fields and a qualified professional must validate the signed agreement, applicable
consumer/commercial rules, GST/invoicing and accounting treatment. The open
requirements template is maintained in
[`business-model.md`](business-model.md).

## Validation risks still open

Field interest is not proof of willingness to pay, continued use, trust in
automation, Meta onboarding reliability, delivery, payment verification,
refunds, message reliability or multilingual staff workflows. [Evidence:
`nekurama.babai.research.md:L104-L116`]

The next evidence should come from the fixed paid pilot, not further
architecture expansion based only on positive interviews. [Evidence:
`nekurama.babai.research.md:L176-L180`]
