---
status: partial — gate and measures defined; numeric thresholds and paid proof pending
owner: BABAI
last-reviewed: 2026-09-20
sources:
  - nekurama/Bulb#1
  - historical ManojVysyaraju/bulb#1
  - nekurama.babai.research.md
  - nekurama.raw.chat.json (ordered turns 70, 290; mappings `4bbdb489-0a0d-45d5-af27-70535c5d4acc`, `4702681b-d611-4408-af5f-9001d04b6cfa`, `f58ce128-39ed-4015-9be9-5b6135a39f20`)
  - Admin decision packet (2026-09-20; current task input)
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

## Kill / success signals

The product should be judged on sustained usage, customer and restaurant adoption, and business value, not merely feature completion. The founder north star is:

`Restaurant activates → customers actually order → staff actually use it → restaurant sees operational value → restaurant keeps using it → restaurant pays`

This is recorded in `nekurama.raw.chat.json` (ordered turn 290; mapping `4702681b-d611-4408-af5f-9001d04b6cfa`). The ROI/measurement battle is also anchored at mapping `f58ce128-39ed-4015-9be9-5b6135a39f20`.

For the paid/deposit-backed pilot and later gradual expansion toward up to 10 restaurants, validation should establish whether BABAI can reliably support real restaurant operations, whether managers and staff can use it with reasonable effort, whether customers are comfortable ordering through it, whether it solves a meaningful problem, and whether restaurants see enough value to continue as paying customers.

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
- [ ] Per-metric numeric thresholds and baseline collection method
