---
status: partial
owner: BABAI Product / Finance
last-reviewed: 2026-09-21
sources:
  - "docs/products/babai/economics-model.md@60b36b4f9047bb62fed286ac5904c18617608275"
  - "docs/products/babai/validation.md"
  - "docs/products/babai/product-definition.md"
  - "docs/products/babai/business-model.md"
  - nekurama.babai.research.md:L104-L116
  - nekurama.babai.research.md:L145-L163
  - "2026-09-20 ADMIN DECISION PACKET"
---

# BABAI Candidate Pilot Metrics

## Status and use

This is a **proposed** measurement and gating contract for the restaurant,
pickup-first pilot. It translates the current product and economics documents
into numbers that could make Stage 0, Stage 1 and gradual expansion decisions
repeatable. **No threshold in this document is an approved product, pricing,
finance, legal or launch decision.** Founder approval is required before a
pilot starts, and the approved version, fee/deposit treatment, dates and
assumptions must be recorded in the pilot record.

The thresholds are intentionally conservative planning assumptions because the
current documents define the metric families but leave numeric gates open.
They must be recalculated after the first complete ledger and instrumented
pilot. Interview interest is recruitment evidence, not a pass against any
metric. [Evidence: `docs/products/babai/validation.md:L14-L33`,
`docs/products/babai/validation.md:L39-L59`,
`docs/products/babai/product-definition.md:L64-L87`]

## Measurement rules

- A restaurant is **active** only after a business-owned WhatsApp identity is
  connected, a menu is reviewed and explicitly published, a responsible staff
  member is trained, the pilot fee or agreed deposit is recorded, and start
  and end dates are recorded.
- Stage 0 uses one restaurant, one WhatsApp number, one branch, pickup-only,
  manual takeover and no delivery dependency. Stage 1 uses no more than three
  paid or deposit-backed restaurants. Stage 2 adds restaurants one at a time
  toward the current cap of ten; reaching ten is not an automatic continuation
  decision.
- Use a 30-day equivalent for time and cost rates when a pilot is shorter than
  30 days. Do not extrapolate a rate when the required minimum sample is not
  met; report **not evaluable** instead.
- Count customer order money as restaurant pass-through, not BABAI revenue.
  Record quoted amount, GST component, amount collected and accounting
  treatment separately until qualified advice confirms treatment.
- A kill trigger means stop activation or expansion, contain the issue, and
  obtain a founder decision. It does not mean silently changing the
  denominator or relaxing the threshold.

## Candidate metric contract

All numbers below are **proposed**. “Success” is the candidate continuation
target; “kill” is the candidate stop/remediation trigger. Entry and exit
thresholds describe the minimum evidence and data quality needed to make a
decision, not proof of product-market fit.

| Metric and definition | Proposed entry threshold | Proposed exit threshold | Proposed success threshold | Proposed kill threshold | Evidence, assumption and dependencies |
|---|---|---|---|---|---|
| **Activation**: elapsed calendar time from recorded commercial commitment to connected WhatsApp, published menu, trained staff and readiness for a real pickup order | 100% of the activation checklist is recorded before the clock starts; one responsible operator and one backup are named | Stage 0: activated within **14 days**; Stage 1: at least **2 of 3** pilots activated within **7 days** and all by **14 days** | Median activation **≤3 days** and **≥90%** of pilots activated by day **7** | Not activated by day **14**, or a provider/onboarding blocker remains unresolved for **>2 business days** | Product scope and validation define the checklist and resumable setup; **7/14 days are proposed onboarding assumptions**. Depends on Meta/provider event timestamps, menu-publish events, staff-training record and founder approval of the readiness checklist. |
| **Order success**: valid pickup-intent conversations that reach a correct structured cart and explicit accepted/rejected state ÷ valid pickup-intent conversations | Event coverage for attempts, carts, required fields and order-state transitions is **100% in test cases**; baseline observed for **3 business days** | Stage 0: at least **20** valid attempts; Stage 1: at least **30** valid attempts per restaurant | **≥85%** of valid attempts reach a correct disposition; no more than **10%** require manual correction | **<60%** after the minimum sample, or duplicate/incorrect order-state events affect **>10%** of attempts; any customer-money or privacy incident is an immediate stop | Validation separates inquiries, structured carts, acceptance and payment; **20/30 samples and 85/60% are proposed learning assumptions**. Depends on immutable order IDs, state-transition audit, message delivery logs and founder-approved error taxonomy. |
| **Fulfillment**: accepted orders reaching ready and completed pickup without an unresolved exception ÷ accepted orders | Payment status, acceptance, ready, completion, cancellation and exception states are distinct and captured for **100% of test orders** | Stage 0: at least **10** accepted orders; Stage 1: at least **15** accepted orders per restaurant | **≥90%** completed without an unresolved exception and **≥85%** ready within the promised pickup window | **<75%** completed, or **>20%** unresolved exceptions after the minimum sample; any severe safety, privacy or customer-funds incident is an immediate stop | Pickup-first and direct restaurant payment are confirmed boundaries; **10/15 samples and 90/85/75/20% are proposed assumptions**. Depends on staff timestamps, exception reason codes, direct-payment confirmation and founder-approved promise-window definition. |
| **Repeat use**: customers with a second completed pickup ÷ customers with a first completed pickup and at least **14 days** of follow-up | Pseudonymous customer key, first/second completed-order events and consent/retention handling pass an instrumentation test; no raw phone number in the scorecard | Stage 0: at least **10** eligible first-time customers; Stage 1: at least **20** eligible customers per restaurant | **≥20%** repeat-customer rate per restaurant; for Stage 2, cohort median **≥25%** | **<10%** after at least **20** eligible customers, or **0 repeat customers after 30** eligible customers; below-minimum samples are not evaluable, not a failure | Current docs require a repeat window but leave it open; **14 days, 10/20/30 customers and 20/25/10% are proposed assumptions**. Depends on privacy-safe identity linkage, completed-order events, observation dates and founder approval of retention/consent handling. |
| **Staff adoption**: accepted orders completed through the trained restaurant workflow with restaurant staff as primary operator ÷ accepted orders; also report founder takeover share | One primary and one backup operator complete **2** dry-run orders and receive access/training | Stage 0: at least **20** production orders or **7** operating days; Stage 1: same evidence per restaurant | Staff is primary operator for **≥80%** of accepted orders and founder takeover is **≤20%**; operational correction rate **≤10%** | Staff is primary operator for **<50%** after one coaching intervention, or correction/workaround rate is **>25%** over the exit sample | Validation calls for active operators, handling time, takeover and operational errors; **2 dry runs, 20 orders, 80/20/10/50/25% are proposed assumptions**. Depends on actor attribution, takeover events, correction reasons, staff roster and founder approval of training/support capacity. |
| **Support load**: unplanned founder/support and recovery minutes, excluding planned onboarding, per restaurant per 30-day equivalent | Reason-coded support timer and incident ID exist for **100%** of support contacts; onboarding time is separated | At least **14 days** of support logs and one complete support ledger per restaurant; normalize to 30 days | **≤120 minutes** per restaurant per 30-day equivalent after the first 7 days; no unresolved P1 incident beyond **24 hours** | **>240 minutes** per restaurant per 30-day equivalent for two consecutive periods, or any unresolved P1 beyond **48 hours** | The economics baseline uses **2h/month base** and **4h/month high** support planning inputs; **120/240 minutes and 24/48 hours are proposed assumptions**. Depends on support minutes, incident severity, recovery hours, provider failures, staffing capacity and founder approval of the support ceiling. |
| **Contribution**: economic contribution rate = economic contribution ÷ net BABAI revenue, with cash contribution reported separately | At least **90%** of required cost/time fields have actual or explicitly marked estimated inputs; quoted amount, GST, collection, provider, AI, hosting, tooling, onboarding, support, retry and refund/credit fields are present | At least **30 days equivalent** or the full agreed pilot term, whichever is later; assumptions version is frozen for the decision | Per restaurant: cash contribution **≥₹0** and economic contribution rate **≥20%**; for Stage 2: cohort median **≥20%** and no more than **1 of 10** below zero | Economic contribution rate **<0%** after the exit window, or a missing/unattributed cost bucket exceeds **10%** of net revenue; pause expansion until reconciled | The baseline defines cash/economic contribution and shows **20%** as a planning case, not a gate; **90%, 30 days, ₹0, 20%, 1/10 and 10% are proposed assumptions**. Depends on `S`, GST treatment, `N`, provider/AI usage, hosting/tooling allocation, `h_onb`, `h_support`, `h_fail`, `V`, `q_retry`, `q_refund`, `L` and founder/finance approval. |
| **Willingness to pay**: paid/deposit-backed start plus payment timeliness and end-date continuation response | **100%** of activated pilots pay the agreed fee or place the approved deposit before activation; payment date and any concession are recorded | Payment is on time or within a proposed **3-business-day** grace period, and the restaurant gives a continuation response within **14 days** of the end date | Stage 0: **1 of 1** pays/deposits; Stage 1: at least **2 of 3** pay/deposit on time and at least **1 of 3** accepts a continuation offer; Stage 2: **≥60%** of eligible restaurants accept continuation | No pilot starts unpaid; payment remains missing after the proposed grace period, or **0 of 3** Stage 1 restaurants accepts continuation after a documented value review | Business-model evidence treats payment, deposit, continuation and refusal reason as evidence and verbal interest as insufficient; **3 days, 14 days, 1/1, 2/3, 1/3 and 60% are proposed commercial assumptions**. Depends on exact fee, deposit refund treatment, billing cadence, GST/invoice treatment, continuation offer and founder approval. |

The contribution threshold is deliberately shown beside behavior metrics. The
economics baseline shows that positive cash contribution can coexist with
negative economic contribution when founder time is included; therefore no
restaurant should pass on contribution alone. [Evidence:
`docs/products/babai/economics-model.md@60b36b4f9047bb62fed286ac5904c18617608275`,
L157-L176, L218-L248; `docs/products/babai/business-model.md:L83-L86`]

## Compact proposed pilot scorecard

Use one row per restaurant and a cohort roll-up. A metric is **green** only
when its minimum sample and data-completeness rule are met. **Amber** means
the proposed success target is missed but the kill threshold is not crossed;
amber requires a dated remediation plan and does not automatically authorize
adding a restaurant. **Red** means a proposed kill trigger fired.

| Metric | Green / proposed continuation target | Amber / proposed watch band | Red / proposed stop trigger |
|---|---|---|---|
| Activation | Median **≤3 days**, **≥90%** by day 7 | Day 8–14 or **70–89%** by day 7 | Not ready by day 14 |
| Order success | **≥85%** correct disposition, **≤10%** correction | **60–84%** or **11–25%** correction | **<60%** or **>25%** correction |
| Fulfillment | **≥90%** completed, **≥85%** within window | **75–89%** completed or **70–84%** within window | **<75%** completed or **>20%** unresolved exceptions |
| Repeat use | **≥20%** per restaurant; Stage 2 median **≥25%** | **10–19%** with sufficient follow-up | **<10%** after 20 eligible customers |
| Staff adoption | **≥80%** staff-primary; takeover **≤20%** | **50–79%** staff-primary | **<50%** after coaching |
| Support load | **≤120 min** / 30-day equivalent | **121–240 min** | **>240 min** for two periods or P1 >48h |
| Contribution | Cash **≥₹0** and economic rate **≥20%** | Cash positive but economic rate **0–19%** | Economic rate **<0%** or missing cost bucket >10% |
| Willingness to pay | Paid/deposit before start; continuation meets stage target | Paid start but continuation undecided or concession requested | Unpaid start, overdue beyond grace, or Stage 1 continuation **0/3** |

The scorecard is a proposed decision aid, not an approval rubric. Any red
result requires incident review and founder disposition; it is not evidence
that the entire product or market is invalid.

## Proposed stage gates

### Stage 0 — one-business operational proof

**Proposed entry**

- Founder approves the restaurant, scope, fee/deposit, payment path, start/end
  dates, support hours and the proposed thresholds in this document.
- One business-owned WhatsApp number, one branch, pickup-only, manual takeover,
  no delivery dependency, and a named responsible operator are ready.
- Paid/deposit-backed commitment is recorded before activation.
- Instrumentation smoke tests pass for activation, order, fulfillment, staff,
  support, repeat and economics events; required event coverage is 100% in
  test cases and the cost ledger is ready.
- A minimum **3-business-day** baseline is recorded where the restaurant has
  comparable direct-order activity; if no baseline exists, record that gap
  rather than fabricate one.

**Proposed exit and success**

- Pilot runs at least **14 calendar days** and reaches the metric minimum
  samples, or is explicitly marked not evaluable where customer volume is
  insufficient.
- Activation, order success, fulfillment, staff adoption, support and payment
  meet their proposed green targets; no red trigger fires.
- Repeat use is measured with at least **10 eligible customers**, even if the
  repeat target cannot yet be promoted because follow-up is incomplete.
- Cost ledger is at least **90%** complete and cash contribution is calculated;
  any economic-contribution result is labelled provisional if the term is
  shorter than the proposed 30-day equivalent.

**Proposed kill / hold**

- Any metric red trigger, an unresolved severe safety/privacy/customer-funds
  incident, or failure to collect the approved commercial commitment.
- Hold rather than expand when a metric is amber, a required sample is not
  met, or a cost input is unknown and could change the contribution result.

### Stage 1 — repeatability with up to three paid pilots

**Proposed entry**

- Stage 0 has no unresolved red trigger; the founder approves the remediation
  record and any changed assumptions.
- No more than **3** restaurants are active; each has a paid/deposit-backed
  commitment, explicit end date, one branch, and a named operator.
- Provider invoices/exports, AI usage, support time, onboarding time and
  failure/retry records are available for the revised cost model.
- Founder support capacity is approved for the proposed **120-minute** target
  and **240-minute** expansion ceiling per restaurant per 30-day equivalent.

**Proposed exit and success**

- Each pilot runs at least **21 calendar days** and meets the order and
  fulfillment minimum samples; at least **2 of 3** restaurants meet every
  hard green metric, including on-time payment.
- At least **2 of 3** pay/deposit on time and at least **1 of 3** accepts a
  continuation offer; repeat use is reported for every restaurant with at
  least **20** eligible customers.
- Median economic contribution rate is at least **20%** or the founder
  explicitly approves a documented exception based on evidence.

**Proposed kill / hold**

- Two restaurants fail the same hard metric, any severe incident recurs, or
  the cohort median support load exceeds **240 minutes** for two periods.
- Pause at the current cohort size when contribution cannot be computed from
  actual or explicitly bounded inputs, even if usage metrics look green.

### Stage 2 — gradual expansion toward ten restaurants

**Proposed entry and cadence**

- Add **one restaurant at a time**, with a founder go/no-go review after each
  pilot reaches its exit sample. Do not add the next restaurant while a red
  trigger is unresolved.
- Review the cohort after restaurants **5** and **10** as well as after every
  addition. The current decision-cycle cap remains **10**, not a launch target.

**Proposed expansion success**

- At least **8 of 10** restaurants meet all hard green metrics, cohort median
  economic contribution rate is **≥20%**, cohort median support is **≤120
  minutes** per 30-day equivalent, repeat-use median is **≥25%** where
  evaluable, and continuation acceptance is **≥60%** of eligible restaurants.
- No more than **1 of 10** restaurants has negative economic contribution, and
  all customer-money, privacy and safety controls remain incident-free.

**Proposed expansion kill / hold**

- Stop adding restaurants after **2 consecutive** entrants miss a hard green
  metric, after any severe incident, or when the cohort exceeds the proposed
  support or contribution ceiling.
- Reaching ten restaurants without the proposed evidence is a hold, not a
  launch or continuation decision.

## Dependencies and required approvals

| Dependency | Required before using a threshold | Current state / owner |
|---|---|---|
| Economics inputs | Replace planning values with invoices/provider exports and time logs for `M`, message mix, provider add-ons, AI/API usage, `H`, `T`, `N`, `h_onb`, `h_support`, `h_fail`, `V`, `q_retry`, `q_refund`, `p_sub`, `C_onb_cash` and `L`; keep GST separate | Partial in the committed baseline; founder plus finance/accounting review |
| Instrumentation | Stable IDs and timestamps for activation, messages, carts, order states, payment status, ready/completed pickup, exceptions, staff actor/takeover, support incidents, repeat identity and ledger linkage; exportable raw events | Required before Stage 0; product/engineering owner not yet assigned |
| Data quality | Daily completeness report; proposed minimum **90%** for cost fields and **100%** test coverage for operational events; missing data is reported, not imputed silently | Proposed control; product owner approval required |
| Commercial terms | Exact fee or deposit, refundable treatment, billing cadence, grace period, GST/invoice treatment, start/end dates and continuation offer | Unresolved; founder and qualified finance/tax advice required |
| Operational capacity | Named support owner, severity definitions, takeover policy, backup operator and maximum support minutes per restaurant | Unresolved; founder approval required |
| Privacy and retention | Pseudonymous repeat linkage, consent/purpose, retention/deletion and access controls for customer and staff data | Partial/challenge-required; privacy/legal review required |
| Decision governance | A signed pilot record naming the decision owner and recording the approved threshold version, exceptions and stop/continue decision | Unresolved; founder approval required |

## Unresolved decisions

1. Which fee or deposit is tested, whether a deposit is refundable or credited,
   and whether the historical ₹999/₹2,499/₹4,999 anchors are used at all.
2. Whether the proposed **20%** economic contribution target is appropriate
   after actual founder-time valuation, provider costs, GST treatment and
   onboarding amortization are known.
3. Whether the proposed **120/240-minute** support limits match founder
   capacity and the service level the pilot promises.
4. The exact customer repeat-identity, consent, retention and deletion design.
5. Which event completeness, incident severity and manual-correction
   definitions are accepted for the final pilot record.
6. What exception evidence can justify a hold, remediation or continuation
   despite an amber or red result.

These unresolved items are deliberately preserved. Approving this candidate
contract would be a founder decision; this document does not claim that
approval has happened.
