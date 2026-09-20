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

# Business Model

## Current answer — confirmed direction

NEKURAMA is the company identity and BABAI is its product identity. BABAI is
intended to be a subscription SaaS business. Restaurant customer-order
payments and BABAI subscription billing are separate. BABAI should not depend
on transaction or delivery margin as its initial economic foundation, and it
should not hold or settle customer funds in the initial product. [Evidence:
`nekurama.raw.chat.json:L192-L205`; corroboration:
`nekurama.babai.research.md:L56-L63`; company/product identity:
`raw chat node 23a95bbe-abfb-44c6-bcf0-3111efa6a14a`,
`raw chat node 1d2ed7d6-7699-4263-a9fc-d79c2acde692`]

The value hypothesis is direct-order economics, customer ownership, staff-effort/error reduction and better service recovery, less BABAI subscription and variable provider costs. The exact value is restaurant-specific and must use the restaurant's own baseline rather than a blanket “save 30%” claim. [Evidence: `nekurama.raw.chat.json:L64404-L64420`; corroboration: `nekurama.babai.research.md:L24-L36`]

## Fixed paid pilot — founder decision

The first commercial validation is a **fixed 90-day paid pilot**. It is not a
free trial. The agreed payment or deposit must be received **before the pilot
starts**. The exact amount, billing schedule, deposit/refund treatment,
minimum-paying terms and agreement mechanics remain open until recorded and
signed. The pilot should end as a pilot at the 90-day decision point, with
continuation or a separately approved extension treated as a new decision.

The intended exit condition is that BABAI has evidence of operational
readiness for materially larger onboarding volumes. The readiness evidence
gate is team-defined and remains **proposed** in
[`pilot-metrics.md`](pilot-metrics.md); it is not a public scale claim.

## Cancellation/refund agreement template — open

This is a requirements template, not legal wording. No cancellation or refund
promise should be made until the founders approve the business terms and a
qualified professional turns them into a signed agreement.

| Agreement field | Current state |
|---|---|
| Pilot term | **90 calendar days; confirmed founder decision** |
| Paid status | **Paid; not free; confirmed founder decision** |
| Start/payment gate | Agreed payment or deposit received before day 1; exact treatment remains agreement-dependent |
| Pilot amount and billing schedule | Open founder/commercial decision |
| Minimum-paying term | Open founder/commercial decision; must be explicit before enrollment |
| Cancellation trigger and notice | Open; counsel to draft operative language |
| Refund/credit eligibility, calculation and timing | Open; counsel/finance to validate operative language and accounting |
| Service/readiness obligations and evidence | Team-defined proposed gate in `pilot-metrics.md` |
| End-of-term treatment | Pilot closes at the decision point; continuation/extension requires a new approved decision |

The signed agreement must bind the pre-start payment/deposit, cancellation and
refund treatment to the minimum-paying terms actually approved for the pilot.
This page intentionally does not invent legal wording, statutory rights, a
deposit classification or a refund entitlement.

## Pricing — challenge-required, contribution-derived

There are no approved public tiers. Historical ₹999 / ₹2,499 / ₹4,999
amounts, and earlier Tadka/Thali/Dawat packaging, remain research history and
must not be presented as current commercial truth.

Pricing is derived from the contribution model:

```text
recognized income
- total attributable expenditure
= contribution amount

contribution amount / recognized income
= contribution margin
```

`total attributable expenditure` includes cash costs, provider/payment costs,
onboarding and support effort, tooling, failure/refund/remediation cost and
other attributable expenditure. The durable calculation and unknowns are
maintained in [`economics-model.md`](economics-model.md). The model does not
select a tier or guarantee a margin.

After the pilot, review pricing every **six months** against observed
contribution economics, customer value and operating readiness. The cadence is
a review point, not an automatic increase.

## 90-day paid pilot acceptance packet — planning assumptions

The following is the recommended internal commercial shape for a signed
agreement. It is deliberately written as business assumptions, not legal
wording. Founders must approve the fields and a qualified professional must
turn them into operative agreement language.

| Field | Planning assumption for founder review |
|---|---|
| Pilot term | Fixed 90 calendar days from the agreed start date; not a free trial |
| Minimum-paying term | The restaurant commits to the full 90-day pilot fee once the pilot is activated |
| Billing schedule | Planning default: 50% at signing/activation and 50% before day 31; use a different schedule only if approved and recorded |
| Cancellation | A restaurant may request cancellation, but cancellation does not automatically erase the approved minimum-paying commitment; operational stop date and any remaining balance must follow the signed agreement |
| Refund/credit | Assume no discretionary pro-rata refund after activation; any exception is limited to a documented service/readiness failure or inability to start, with amount, approver and timing recorded |
| Customer-order refunds | Remain the restaurant's responsibility and outside BABAI subscription economics unless an approved agreement explicitly says otherwise |
| End of term | Close at day 90 with a readiness decision; continuation or extension is a new approved commercial decision, not a silent renewal |
| Price review | If continuing, review pricing every six months; review is not an automatic increase |

These assumptions do not decide statutory rights, enforceability, tax treatment,
accounting treatment or dispute handling. Do not promise cancellation or refund
outcomes to a restaurant until the signed agreement and professional review are
complete.

### Planning fee bands

The economics model produces the following **90-day, before-GST planning
bands** per restaurant. They are income bars derived from total expenditure,
price-linked payment/refund costs and the stated contribution case; they are
not approved public tiers.

| Scenario | Planning fee band before GST | Use |
|---|---:|---|
| Low-cost floor | ₹6,075–₹8,219 | Only when actual onboarding/support and provider usage validate the low case |
| **Base recommendation** | **₹29,362–₹39,727** | Default founder discussion band for a three-restaurant planning cohort |
| High-cost stress bar | ₹166,940–₹225,860 | Stress-test only; do not quote without a separately approved scope/capacity decision |

Each band is limited to ±15% around its calculated center. GST is an input to
the customer cash amount, not a hidden margin: at the base center, the cash bar
is ₹34,544 at `g=0%`, ₹36,271 at `g=5%` or ₹40,762 at `g=18%`. The exact
assumptions, formulas, cohort sensitivity and per-restaurant break-even are in
[`economics-model.md`](economics-model.md).

### Onboarding-readiness exit gate

At day 90, close the pilot and hold expansion unless the proposed internal gate
in [`pilot-metrics.md`](pilot-metrics.md) is met. In plain business terms, the
team should have evidence that onboarding is repeatable, order and payment
operations are reliable, staff can run the workflow without founder takeover,
support remains within capacity, all expenditure lines are evidenced, the base
contribution case is positive, and no unresolved safety/privacy/payment
exception remains. The gate is proposed and requires founder/team approval; it
is not a public scale claim.

## Unit economics — partial

Expected variable-cost drivers are onboarding/support, WhatsApp messaging, AI, payment/delivery integrations and infrastructure. The pilot must measure actual costs and support effort per restaurant before expansion. [Evidence: `nekurama.babai.research.md:L145-L161`; corroboration: `nekurama.chatgpt.md:L4163-L4163`]

The durable calculation artifact is [`economics-model.md`](economics-model.md).
It separates revenue, cash cost, founder time, pass-through merchant costs,
GST fields and contribution, and provides low/base/high planning sensitivities
without promoting them to final pilot thresholds. Provider and tax inputs that
are not supported by repository evidence remain unknown or explicitly marked
as research pointers. [Decision source: `2026-09-20 ADMIN DECISION PACKET`]

The initial economic decision is not “maximize plan revenue”; it is whether
restaurants receive enough practical value to continue as paying customers.
Stage 0 proves the workflow can operate, Stage 1 is the fixed 90-day paid
pilot, and Stage 2 tests the team-defined readiness evidence for materially
larger onboarding volumes. Paid continuation remains a validation hypothesis,
not a forecast. [Evidence: `nekurama.raw.chat.json:L79721-L79820`;
`nekurama.babai.research.md:L161-L180`]

## Commercial gaps

- Final packaging and entitlements
- Pilot amount and billing schedule
- Signed agreement template, pre-start payment/deposit receipt and
  minimum-paying terms
- Pilot-to-continuation decision
- Baseline order economics and ROI calculation
- CAC, onboarding and support cost
- WhatsApp/AI/payment/delivery variable cost model
- Billing, cancellation and refund policy for BABAI subscription, subject to
  professional legal/finance validation
- Team-defined readiness evidence gate for materially larger onboarding volumes

No numerical unit-economics or public-pricing decision is promoted until pilot
data exists. [Evidence: `nekurama.babai.research.md:L104-L116`,
`nekurama.babai.research.md:L145-L180`]

## Founder decisions vs external validation

| Founder/product decision | External or professional validation still required |
|---|---|
| 90-day paid pilot; not free | Signed agreement drafting; enforceability and applicable consumer/commercial rules |
| Payment/deposit before pilot start | Agreement drafting, payment/deposit classification, accounting and refund treatment |
| Pricing derived from contribution economics | Accounting treatment, GST, invoicing and revenue recognition |
| Six-month pricing review cadence; no automatic increase | Contract changes and customer communications |
| NEKURAMA company identity / BABAI product identity | Entity records, IP ownership and brand/trademark clearance |
