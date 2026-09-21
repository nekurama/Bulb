---
status: partial — proposed scorecard and readiness gate; founder/team approval pending
owner: BABAI
last-reviewed: 2026-09-21
sources:
  - nekurama.raw.chat.json
  - nekurama.babai.research.md
  - "2026-09-21 FOUNDER DECISION PACKET"
  - "2026-09-21 FOUNDER SCALE/COST BASELINE (current task input)"
  - "2026-09-21 FOUNDER ECONOMIC TARGET CLARIFICATION (current task input)"
  - "2026-09-21 ECONOMICS MODEL REVIEW PACKET"
  - "2026-09-21 FOUNDER NAMING CORRECTION (current task input)"
  - "2026-09-21 TIER/COST MODEL UPDATE (current task input)"
  - economics-model.md
  - validation.md
---

# BABAI Pilot Metrics

## Purpose and status

This is an internal candidate scorecard for the fixed 90-day paid pilot. It
preserves proposed statuses and does not create public claims, a free trial,
approved success thresholds, legal terms or a scale guarantee.

The pilot is paid and fixed at 90 days, with the agreed payment or deposit
received before the pilot starts. Cancellation/refund handling is controlled
by the signed agreement and its minimum-paying terms; this file does not draft
those terms.

## Neutral pilot labels

BABAI remains the current product under NEKURAMA, and **“BABAI — Business
Automation by AI”** remains founder-approved wording. Do not use Tadka, Thali,
Dawat, Feast or similar historical names as current pilot labels. For any
10-restaurant record, use neutral labels or functional scope descriptions:

| Label | Functional scope | Taxonomy status |
|---|---|---|
| **Pilot Variant A** | Pickup-first workflow with one WhatsApp number, one branch and manual takeover | Evidence label only; not a tier |
| **Pilot Variant B** | Same MVP boundary with advisory AI measured separately | Evidence label only; not a tier |
| **Pilot Variant C** | Same MVP boundary with AI-heavy routing measured as a stress case | Evidence label only; not a tier |

These labels do not define packages, entitlements, public pricing or a
continuation decision. [Current founder correction:
`2026-09-21 FOUNDER NAMING CORRECTION (current task input)`; historical raw
source: `nekurama.raw.chat.json:L215-L216`; corroboration:
`nekurama.chatgpt.md:L2432-L2685`]

## Required pilot record

| Field | Required treatment | Status |
|---|---|---|
| Pilot term | 90 calendar days | **confirmed founder decision** |
| Paid status | Paid; not free | **confirmed founder decision** |
| Payment/deposit gate | Agreed payment or deposit received before day 1 | **required before start; exact treatment open** |
| Signed agreement | Agreement version, signatories and effective dates | **required before enrollment** |
| Minimum-paying term | Exact commercial obligation recorded in the signed agreement | **open founder decision** |
| Cancellation/refund | Agreement reference and actual outcome; no invented entitlement | **open / legal validation required** |
| Pilot income | Amount invoiced/collected, GST component and recognized income treatment | **measure; finance validation required** |
| Total expenditure | Cash, provider, tooling, onboarding/support, failure/refund/remediation and other attributable expenditure | **measure** |
| Contribution | Recognized income less total expenditure; margin as a ratio only after accounting treatment | **proposed decision view** |
| End decision | Readiness gate met, not met or inconclusive, with evidence | **proposed gate** |

## Candidate scorecard

All rows below are **proposed** until the team records an owner, evidence
source, observation window and threshold. A blank is unknown, not zero.

| Dimension | Record | Evidence owner | Status |
|---|---|---|---|
| Activation | Business/channel/menu readiness; time to first usable workflow | Pilot operator | Proposed |
| Order behavior | Attempts, conversion, acceptance/rejection, completion and exceptions | Product/operations | Proposed |
| Fulfillment | Pickup readiness, completion and status accuracy | Restaurant operator | Proposed |
| Repeat use | Repeat customers/orders and observation window | Product/operations | Proposed |
| Staff adoption | Active use, handling time, takeover frequency and missed/duplicate messages | Restaurant operator | Proposed |
| Support load | Onboarding hours, interventions, incidents and recovery time | Pilot operator | Proposed |
| Reliability | Message delivery, duplicate/missed work, downtime and recovery evidence | Engineering/operations | Proposed |
| Payment boundary | Confirmation/reconciliation issues and any customer-funds custody exception | Finance/operations | Proposed |
| Income | Pilot billing and recognized income record | Finance owner | Proposed |
| Total expenditure | Attributable cash and economic expenditure ledger | Finance/product | Proposed |
| Contribution economics | Contribution amount and contribution margin from income bars versus total expenditure | Finance/product | Proposed |
| Willingness to pay | Continuation response after the stated end date and objections | Founder/commercial owner | Proposed |
| Readiness | Evidence that materially larger onboarding volumes can be supported | Team decision owner | Proposed |

## Top telemetry metric — support minutes

The primary operating metric is **recurring support minutes per restaurant per
month**. Record it for every restaurant and split it into the categories below;
do not report a single blended support number.

| Field | Definition | Proposed base target | Hold / ceiling |
|---|---|---:|---:|
| Onboarding minutes | One-time menu/configuration/training effort | ≤240 minutes/restaurant | >480 minutes/restaurant |
| Planned minutes | Scheduled check-ins, configuration and proactive review | 30 minutes/month | >60 minutes/month |
| Unplanned minutes | Ad hoc questions and non-incident fixes | 30 minutes/month | >90 minutes/month |
| Recovery minutes | Failed messages, data correction, retry and incident recovery | 30 minutes/month | >60 minutes/month |
| Takeover minutes | Founder intervention in a live workflow | 30 minutes/month | >90 minutes/month |
| **Recurring support total** | `planned + unplanned + recovery + takeover` | **≤120 minutes/month** | **240-minute hard ceiling** |
| Ceiling breaches | Count of restaurant-months above the recurring ceiling | 0 | Any repeated breach holds expansion |

Report median, p90, category mix and ceiling-breach count. Onboarding is
one-time and excluded from the recurring total but included in the 90-day
economic true-up. The exact formulas and low/base/high sensitivity are in
[`economics-model.md`](economics-model.md).

## Scale/capacity telemetry reference — proposed

For each stage, record the capacity measures defined in
[`economics-model.md`](economics-model.md), section “Founder scale and cost
baseline”:

| Stage | Required reference fields | Status |
|---|---|---|
| Stage 0 | 6 flows/order, 9 gateway hits/flow, 54 average requests/order, 90 heavy-case requests/order, order ceiling, request classification, latency/error/retry, support and incident load | Proposed instrumentation |
| Stage 1 | Per-restaurant orders/day, WhatsApp conversion case, average/heavy requests, P90/P99, provider/Meta and AI cost, storage/logging/queue/DB cost, payment/delivery treatment, support, incidents and CAC/onboarding | Proposed pilot evidence |
| Stage 2 | 500-restaurant goal, half-total 500 case, supplied 1,000-restaurant reference, prior unresolved ₹25L income-unit sensitivity, separate ₹25L monthly operating-profit planning trigger, support/incident capacity and total expenditure versus recognized income | Proposed readiness evidence |

This scorecard does not finalize infrastructure, cloud, provider/Meta/BSP, AI
model, database, queue, storage or logging choices. Missing rates, unit
classification, incident frequency or staffing capacity remain **unknown**,
not zero.

## AI, acquisition and value telemetry

Record these fields per restaurant-month so AI economics, CAC and restaurant
ROI cannot be hidden inside a generic support or provider number:

| Dimension | Required fields | Status |
|---|---|---|
| AI usage | Advisory/AI-heavy mode, model identifier/version, conversations, turns, input/output tokens, embeddings, speech minutes, vision items, jobs, retries and unit rates | Proposed; unknown rates are not zero |
| BABAI SaaS economics | Subscription income, GST input/treatment, cash cost, founder/support economic cost, economic contribution and total cohort contribution | Proposed |
| Acquisition | Source, paid cash, travel/enablement cash, founder acquisition hours and economic CAC | Proposed; actual CAC unknown |
| Retention economics | Monthly churn, observed lifetime, LTV, contribution payback and cohort size | Proposed; actual LTV/payback unknown |
| Restaurant value | Baseline GMV, avoided channel cost, staff time saved, errors avoided, incremental gross profit and restaurant-side provider cost | Proposed; value must be measured separately |
| Pricing experiment | Price hypothesis, mode, scope, conversion, objection, continuation and contribution result | Proposed |

The pilot must distinguish BABAI's contribution from the restaurant's
monthly value. A restaurant value estimate is not revenue, and a positive
restaurant ROI does not prove BABAI has positive economic contribution. The
separate ₹25L monthly operating-profit trigger is not a percentage margin, a
pilot gate or a forecast; it is an internal scale-planning input that must not
replace the contribution calculation.

## Internal provisional tier experiment telemetry

Use **LITE, BASE and PRO** only as internal experiment labels in pilot records.
They are not approved public tiers or a public taxonomy. Rates are before GST
with a ±15% planning tolerance; Tadka, Thali, Dawat, Feast and similar names
remain historical/source context only.

For each restaurant-month, record:

| Field | Required record |
|---|---|
| Experiment label and rate | LITE ₹4,999, BASE ₹9,999 or PRO ₹19,999 before GST; tolerance and any approved deviation |
| Scope | Information/menu/basic WhatsApp, pickup/order/human takeover, or advanced API/richer automation scope actually tested |
| Cost stack | Variable/provider/API, support minutes, AI/model/provider units, onboarding effort, PRO integration-maintenance reserve and shared-infrastructure allocation |
| Restaurant value | Baseline and observed ROI, avoided channel cost, staff time, errors and incremental gross profit |
| Commercial outcome | Conversion, objections, continuation/renewal response and reason for non-continuation |
| Economic outcome | Cash contribution, economic contribution, recognized income treatment and assumptions version |

The shared-infrastructure sensitivity is `₹42,500 / N`, with reference
allocations of approximately ₹4,250 at `N=10`, ₹850 at `N=50`, ₹425 at
`N=100`, ₹85 at `N=500` and ₹43 at `N=1,000`. The detailed cost stack and
3/4/3 cohort arithmetic are in [`economics-model.md`](economics-model.md).
Unknown provider, AI, infrastructure, tax or accounting values must remain
explicitly unknown.

## Proposed onboarding-readiness exit gate

This is the proposed internal gate for the day-90 decision. It is not an
approved public metric contract or scale guarantee. The team should adopt a
version number, owners and evidence links before using it to approve larger
onboarding volumes. A blank, unsupported or unallocated cost is **unknown**, not
zero.

| Evidence category | Proposed exit threshold | Hold / fail condition | Owner | Evidence location | Status |
|---|---|---|---|---|---|
| Repeatable onboarding | At least 3 restaurants activated; at least 80% live within 7 calendar days; median combined Manoj + Vinay onboarding effort ≤16 hours/restaurant | Any restaurant >32 combined hours without a documented recovery plan, or <70% live by day 14 | Pilot operator | Onboarding log and activation events | Proposed |
| Operational reliability | ≥90% of accepted pickup orders reach completed/collected status; missed/duplicate orders ≤5% after at least 10 completed orders/restaurant | <80% completion, >10% missed/duplicate, or unresolved customer-impacting incident | Product/operations | Order, message and incident records | Proposed |
| Staff/customer workflow adoption | ≥80% of active order sessions handled by restaurant staff without founder intervention; ≥20% repeat ordering among eligible customers after ≥10 unique customers and a 30-day window | <60% staff-handled sessions, 0% repeat after minimum sample, or sample remains insufficient at decision | Restaurant operator | Usage events and interview records | Proposed |
| Support capacity | Recurring combined founder support ≤12 hours/restaurant/month; no restaurant >24 hours/month; next onboarding can start without displacing committed support | High-band support persists after remediation or the next onboarding increment cannot be staffed | Pilot operator | Manoj/Vinay time logs and support queue | Proposed |
| Economics completeness | 100% of material income/expenditure lines have actual value, source, owner and allocation; GST input and treatment recorded separately | Any material line is blank, unsupported, unallocated or treated as zero | Finance/product | Pilot ledger and rate register | Proposed |
| Contribution outcome | Base-case recognized income less total expenditure is non-negative and reaches the proposed 40% contribution sensitivity; low/base/high views are populated | Base contribution is negative, price is below break-even, or result depends on missing rate or unapproved GST treatment | Finance/product | `economics-model.md` output and true-up | Proposed |
| AI economics | 100% of AI-heavy or advisory usage has model, token/unit, retry and cost records; mode is known for each restaurant-month | AI-heavy usage is unpriced, unknown or silently treated as advisory | Product/engineering | AI usage ledger | Proposed |
| CAC/LTV/payback | Acquisition source and economic CAC recorded for every enrolled restaurant; observed payback is reported without imputing missing retention | CAC is missing, payback is >12 months after minimum sample, or LTV depends on an assumed lifetime only | Founder/commercial owner | Acquisition and cohort ledger | Proposed |
| Safety/payment/privacy | Zero unresolved customer-funds custody, authorization, privacy or payment-integrity exception | Any unresolved material safety, privacy or payment exception | Operations/finance | Incident review and payment reconciliation | Proposed |

The gate should be judged against measured evidence, not feature completion.
All rows are intended to be met together for an advance decision. If a row is
inconclusive because the minimum sample or observation window was not reached,
the day-90 result is **inconclusive**, not a pass.

## Day-90 decision

At the fixed 90-day end:

1. **Gate met:** close the pilot, record the evidence and separately approve
   continuation and any larger onboarding volume.
2. **Gate not met:** close the pilot, record the gap and hold expansion.
3. **Inconclusive:** close the pilot as inconclusive and specify the evidence
   required for a separately approved continuation.

The day-90 decision does not automatically extend the pilot, increase pricing,
or create a refund entitlement. Those outcomes require the signed agreement
and separate founder/legal/finance decisions.

## Proposed 90-day acceptance thresholds

For the fixed paid pilot, use the following minimum evidence rules alongside
the readiness gate:

| Metric | Proposed acceptance bar | Minimum evidence |
|---|---|---|
| Activation | ≥80% of enrolled restaurants live within 7 days | Enrollment, channel and menu readiness events |
| Order completion | ≥80% of initiated orders completed, with ≥90% of accepted pickup orders completed | At least 10 completed orders per restaurant |
| Error rate | Missed/duplicate orders ≤5% for advance; >10% is a hold | Message/order reconciliation |
| Repeat use | ≥20% eligible-customer repeat order rate | ≥10 unique customers and 30-day observation |
| Staff adoption | ≥80% staff-handled active order sessions | Session ownership events |
| Support | ≤12 combined founder support hours/restaurant/month; 24 hours is a hard hold | Manoj/Vinay time logs |
| Economics | Base contribution ≥40% sensitivity and no negative base contribution; report the separate ₹25L operating-profit planning trigger without using it as a pilot pass/fail threshold | End-date true-up with actual rates |
| Support telemetry | ≤120 recurring support minutes/restaurant/month at base; category mix and p90 reported | >240 minutes or repeated ceiling breach |
| AI cost completeness | 100% model/token/unit/retry fields present for AI usage | Any AI-heavy month has unknown cost |
| Acquisition economics | CAC recorded by source; payback reported and proposed ceiling ≤12 months | CAC missing or payback >12 months after sample |
| Continuation signal | At least 2 of the first 3 completed pilots accept continuation terms | Complete end-date decision records |

These thresholds are planning assumptions for internal acceptance, pending
founder/team approval. They do not authorize refunds, pricing changes,
accounting treatment or a claim that expansion will succeed.

## Post-pilot pricing review

If BABAI continues after the pilot, review pricing every **six months** using
observed contribution economics, customer value and operating readiness. This
is a review cadence, not an automatic increase.

## Open decisions

- Exact minimum-paying term and billing schedule
- Agreed pre-start payment/deposit amount, receipt and treatment
- Signed agreement cancellation/refund fields and professional wording
- Owners, observation windows and thresholds for the readiness evidence gate
- Founder-approved contribution target or continuation rule
- Support-minute category ownership, ceiling response and scale staffing plan
- AI routing mode, model/rate register and AI-heavy price treatment
- Acquisition-channel CAC, observed churn/lifetime, LTV and payback method
- Restaurant ROI baseline and value-capture factor
- Post-pilot packaging and entitlements
- Accounting, GST and invoice treatment
