---
status: partial — proposed scorecard and readiness gate; founder/team approval pending
owner: BABAI
last-reviewed: 2026-09-21
sources:
  - nekurama.raw.chat.json
  - nekurama.babai.research.md
  - "2026-09-21 FOUNDER DECISION PACKET"
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
| Economics | Base contribution ≥40% sensitivity and no negative base contribution | End-date true-up with actual rates |
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
- Post-pilot packaging and entitlements
- Accounting, GST and invoice treatment
