---
status: partial — proposed Track 3 thresholds grounded in economics v0.2; founder approval pending
owner: BABAI
last-reviewed: 2026-09-20
sources:
  - nekurama/Bulb#1
  - historical ManojVysyaraju/bulb#1
  - nekurama.babai.research.md
  - nekurama.raw.chat.json (ordered turns 70, 290; mappings `4bbdb489-0a0d-45d5-af27-70535c5d4acc`, `4702681b-d611-4408-af5f-9001d04b6cfa`, `f58ce128-39ed-4015-9be9-5b6135a39f20`)
  - Admin decision packet (2026-09-20; current task input)
  - economics-model.md (Track 2 v0.2)
---

# Validation

## Primary gate — staged

### Gate 1: paid/deposit-backed operational pilot

Begin with one selected business from the 19 September 2026 interviews. Require, where possible, a real menu/catalog, approved WhatsApp channel or test access, an operating contact and a staff member responsible for orders. The pilot must be paid or deposit-backed and have an explicit end date before enrollment. The fee/deposit amount, refund treatment and date are not supplied.

Expand gradually to additional businesses only after the measured workflow supports the next increment, up to a maximum validation cohort of 10 restaurants. No numeric activation, conversion or kill threshold has been supplied.

This refines the field research's three-business target (`nekurama.babai.research.md`, “Immediate pilot plan” and “Success criteria”) with the current admin commercial gate.

### Gate 2: gradual validation up to 10 restaurants

If Gate 1 is operationally stable, expand in controlled increments toward **up to 10 restaurants**. Ten is a bounded validation ceiling, not a claim of scale or a requirement to onboard ten before learning.

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

## Required metric set

Record baseline, observed value and evidence for each pilot. Numeric thresholds are intentionally not supplied and must remain open:

| Metric | What to record |
|---|---|
| Activation | Business/channel/menu readiness and time from enrollment to first usable workflow |
| Orders | Customer order attempts, conversion, acceptance/rejection and completion |
| Fulfillment | Pickup readiness/completion, status accuracy and exceptions |
| Repeat use | Repeat customer/order behavior during and after the pilot |
| Staff adoption | Active staff use, handling time, takeover frequency and missed/duplicate messages |
| Support | Onboarding effort, training, interventions, incidents and time to resolution |
| Economics | Infrastructure, provider/payment fees, onboarding/support, tooling, failure/refund cost, pilot revenue/deposit treatment, contribution and GST treatment |
| Willingness to pay | Paid/deposit commitment, objections, continuation intent and conversion after the pilot end date |

## Required pilot evidence

For each pilot, record baseline and observed values for:

- onboarding time and menu correction rate;
- weekly direct/WhatsApp order volume before and during the pilot;
- customer order conversion and completion;
- staff handling time, missed/duplicate messages and takeover frequency;
- payment confirmation issues and refunds/exceptions;
- repeat orders and owner-reported value;
- support effort and actual Meta, AI, infrastructure and payment costs;
- pilot-to-paid conversion and early retention.
- the agreed pilot end date, completion state and any refund/deposit outcome.

No numeric success or kill thresholds are yet confirmed. Do not invent them from feature completion; record the baseline, instrument the workflow and use the pilot evidence to set the next gate.

## Track 3 candidate metric contract — proposed, pending founder approval

The following are **candidate** entry, exit, success and kill thresholds. They
are not approved decisions. They are derived from the finalized-for-planning
Track 2 v0.2 bands and actual-rate register in
[`economics-model.md`](economics-model.md), not from observed BABAI data.

### Proposed assumptions

- The pilot is paid or deposit-backed and has a stated end date before
  enrollment.
- Rate-based order metrics require at least **10 completed orders per
  restaurant**; below that sample, report the metric as directional/unknown.
- Repeat-use evaluation requires at least **10 unique customers** and a
  proposed **30-day observation window** after first order; the observation
  window is not yet approved.
- Founder-support thresholds use combined Manoj + Vinay time. The Track 2 v0.2
  base bands are onboarding **8–16 hours** and recurring support **6–12
  hours/restaurant/month**; the high bands are 16–32 and 12–24 hours.
- Economics thresholds use actual costs where available and the Track 2
  contribution sensitivity; the 40% contribution sensitivity is proposed, not
  an approved target.
- Cost rates must come from the v0.2 actual-rate register; a blank rate is an
  unknown and must not be treated as zero.

### Proposed entry gate

| Entry condition | Proposed threshold | Hold/kill condition |
|---|---:|---|
| Commercial commitment | 100% of enrolled businesses have paid or deposited the agreed amount, signed pilot terms and an explicit end date | Do not start without all three; amount, refund treatment and date remain unresolved decisions |
| Operational readiness | 100% have an approved WhatsApp channel, reviewed/published menu and named operating staff contact | Hold until channel, menu or staff ownership is ready |
| Instrumentation | Baseline captured before first customer order for activation, orders, fulfillment, staff time, support and economics | Hold until baseline and event capture are available |

### Proposed stage exit and success thresholds

| Metric | Proposed success / advance threshold | Proposed fail / hold threshold |
|---|---|---|
| Activation | At least **80%** of enrolled restaurants live within **7 calendar days**; onboarding effort ≤ **16 combined founder hours/restaurant** | <70% live by day 14, or any restaurant exceeds **32 onboarding hours** without a documented recovery plan |
| Order success | At least **80%** of initiated orders reach completed status after the 10-order minimum; missed/duplicate orders ≤ **5%** | <70% completed, or missed/duplicate orders > **10%** |
| Fulfillment | At least **90%** of accepted pickup orders reach completed/collected status with correct customer status | <80% completion, repeated status divergence, or any unresolved customer/payment safety incident |
| Repeat use | At least **20%** of eligible customers place a repeat order within the proposed 30-day window, after the 10-customer minimum | 0% repeat after the minimum sample and observation window; otherwise remain unknown |
| Staff adoption | Staff handle at least **80%** of active order sessions without founder intervention; recurring founder support ≤ **12 hours/restaurant/month** | <60% staff-handled sessions or recurring support > **24 hours/restaurant/month** |
| Support load | Onboarding and support remain within the Track 2 base bands, with a declining trend after the first restaurant | Support remains in the high band after remediation, or founder effort prevents the next onboarding increment |
| Economics data completeness | 100% of cost lines used in the end-date true-up have an actual rate/value, source and owner in the v0.2 register; no blanks are treated as zero | Any material cost line remains blank, unsupported or unallocated at true-up |
| Contribution | Base-case `ContributionAfterOnboarding` is non-negative and reaches the proposed **40% contribution-margin sensitivity**; low/base/high views are populated using recognized revenue, actual costs and approved accounting treatment | Base-case contribution is negative, `P ≤ C`, or the conclusion depends on an unapproved price, missing rate or unapproved GST treatment |
| Failure/refund economics | Actual failure/refund/remediation cost remains within the v0.2 base sensitivity of **1.5–4% of `G`** when BABAI absorbs it, or is separately evidenced when passed through | Cost exceeds **10% of `G`**, or credits/refunds/remediation are not recorded |
| Willingness to pay | At least **2 of the first 3 completed pilots** accept paid continuation or renewal terms after the end date | 0 of 3 accept continuation after complete observation; below 3 completed pilots remains inconclusive |

### Proposed kill or immediate-hold conditions

These are proposed safety/economics controls, pending founder approval:

- Any unresolved customer-funds custody, authorization, privacy or payment
  integrity issue.
- More than **10%** missed/duplicate orders or less than **80%** accepted-order
  fulfillment after the minimum sample.
- Base-case contribution remains negative after actual costs and recognized
  revenue are reconciled at the pilot end date.
- A material economics input is blank, unsupported or treated as zero in the
  end-date true-up.
- Failure/refund/remediation cost exceeds **10% of `G`** without an approved
  pass-through or corrective plan.
- Support remains above **24 combined founder hours per restaurant/month** or
  onboarding exceeds **32 combined hours** without a specific corrective plan.
- No completed pilot produces a credible paid-continuation signal after the
  stated end date and observation window.

These conditions should stop expansion while the evidence is reviewed; they do
not authorize refunds, pricing changes, or accounting treatment by themselves.

## Kill / success signals

The product should be judged on sustained usage, customer and restaurant adoption, and business value, not merely feature completion. The founder north star is:

`Restaurant activates → customers actually order → staff actually use it → restaurant sees operational value → restaurant keeps using it → restaurant pays`

This is recorded in `nekurama.raw.chat.json` (ordered turn 290; mapping `4702681b-d611-4408-af5f-9001d04b6cfa`). The ROI/measurement battle is also anchored at mapping `f58ce128-39ed-4015-9be9-5b6135a39f20`.

For the paid/deposit-backed pilot and later gradual expansion toward up to 10 restaurants, validation should establish whether BABAI can reliably support real restaurant operations, whether managers and staff can use it with reasonable effort, whether customers are comfortable ordering through it, whether it solves a meaningful problem, and whether restaurants see enough value to continue as paying customers. The economics decision must use the v0.2 low/base/high views and actual-rate register rather than historical price hypotheses.

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
- [ ] Minimum active-pilot and paid-conversion thresholds for advancing from Gate 1 to Gate 2
- [ ] Kill criteria for unsafe, unreliable or uneconomic operation
- [ ] Pilot fee/deposit amount, refund treatment and end date
- [ ] Founder approval of proposed entry/exit/success/kill thresholds
- [ ] Per-metric numeric thresholds and baseline collection method
- [ ] Approved repeat-use observation window and sample rules
- [ ] Actual-rate register completion and cost-allocation sign-off
