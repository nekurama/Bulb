---
status: partial
owner: BABAI
last-reviewed: 2026-09-21
sources:
  - nekurama.raw.chat.json
  - nekurama.chatgpt.md
  - nekurama.babai.research.md
  - "2026-09-21 FOUNDER DECISION PACKET"
  - "2026-09-21 FOUNDER SCALE/COST BASELINE (current task input)"
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

## Capacity baseline reference — proposed

The internal capacity reference is maintained in
[`economics-model.md`](economics-model.md), section “Founder scale and cost
baseline”. Stage 0 records the six-flow/nine-gateway-hit workload primitives,
request classification, latency/error/retry, support minutes, incidents and
cost categories for one business. Stage 1 repeats those measures per
restaurant across the 10%/25%/50%/100% conversion sensitivities. Stage 2
reviews the 500-restaurant goal against the supplied 1,000-restaurant
reference envelope, support/incident load and the ₹25L monthly-versus-annual
income-unit sensitivity.

These are evidence references only. They do not set an infrastructure,
provider, Meta/BSP, AI model, queue, database, storage or logging choice.
Stage 2 remains a proposed readiness gate, not a scale guarantee.

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
- if the evidence sample is incomplete, close the pilot as inconclusive and
  specify the missing evidence for a separately approved continuation;
- do not automatically extend the term, increase prices or promise refunds.

The proposed gate requires, together, repeatable activation of at least three
restaurants, at least 80% live within seven days, at least 90% accepted-order
completion, no more than 5% missed/duplicate orders, at least 80% staff-led
active order sessions, recurring combined Manoj/Vinay support of no more than
12 hours per restaurant per month, complete income/expenditure evidence,
non-negative base contribution at the proposed 40% sensitivity, and zero
unresolved safety, privacy or payment-integrity exception. The minimum samples
and hold conditions are maintained in [`pilot-metrics.md`](pilot-metrics.md).

## Success / kill criteria — proposed, pending founder/team approval

These are proposed planning thresholds, not observed BABAI performance. The
baseline period, instrumentation implementation, ROI calculation and founder
approval remain open. A hold or kill result stops expansion while the evidence
is reviewed; it does not itself create a refund, price change or accounting
outcome.
[Evidence: `nekurama.raw.chat.json:L66495-L66540`; corroboration:
`nekurama.chatgpt.md:L27050-L27263`,
`nekurama.chatgpt.md:L51948-L51955`]

## Economics acceptance and external gates

The 90-day economics acceptance uses recognized pilot income against total
attributable expenditure, including hosting, tooling, Meta/provider, payment
collection, onboarding, Manoj/Vinay founder time, support, retry, failure and
refund/credit reserve. `economics-model.md` provides low/base/high estimates,
the per-restaurant break-even, the recommended ±15% fee bands and GST input
sensitivity. These are internal planning estimates and must be replaced by
actual invoices, exports, time logs and approved accounting treatment.

Before enrollment, the following remain external or professional gates:

- signed agreement language for the 90-day minimum-paying commitment,
  cancellation trigger/notice, refund or credit treatment and payment timing;
- provider/BSP terms, current Meta rate card, payment processor fees and any
  minimums or FX exposure;
- GST registration/applicability, rate, invoice presentation, recoverability
  and revenue recognition;
- privacy, payment authorization, customer-funds and entity/IP/brand review.

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
