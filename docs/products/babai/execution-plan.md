---
status: proposed — quality-first October–December execution plan
owner: BABAI Product / BRD
last-reviewed: 2026-09-21
sources:
  - Execution plan input (2026-09-21; current task input)
  - Tier scope decision (2026-09-21; current task input)
  - Founder traffic baseline (2026-09-21; current task input)
  - nekurama.babai.research.md
  - docs/products/babai/brd.md
  - docs/products/babai/economics-model.md
  - docs/products/babai/validation.md
---

# BABAI October–December Execution Plan

The integrated, canonical plan is
[`../../execution/oct-dec-plan.md`](../../execution/oct-dec-plan.md). This
product-role packet is supporting detail for the Product/BRD workstream; where
it differs from the canonical plan, the canonical plan and current evidence
control. Architecture, Web/QA and Company controls are linked from the
canonical plan rather than duplicated here.

## 1. Executive assumptions and decision boundaries

This is a **quality-first internal execution plan**, not a launch promise,
public roadmap, staffing plan or provider-approval claim. Numbers are
provisional internal planning estimates unless marked as existing evidence.
No hiring is assumed. Manoj + Vinay founder time is tracked as a separate
economic view from cash expenditure.

Current product boundaries:

- thin restaurant-first, pickup-first, WhatsApp-native MVP;
- deterministic menu/order/payment/fulfillment state with bounded AI and human
  takeover;
- fixed 90-day paid pilot, signed commercial terms and readiness-gated exit;
- gradual progression from 1 → 2 → 5 configured/live restaurants;
- no claim that Meta, payment, delivery or advanced API providers are
  approved, available, priced or operationally reliable.

The plan preserves two explicit routes:

- **Quality-first path:** 5 restaurants configured, 1–2 live by 31 December,
  then 5 active in January after evidence and support gates.
- **Aggressive path:** 5 live by year end with reduced scope and higher
  operational risk.

The quality-first route is the planning default. The aggressive route requires
an explicit founder decision and a recorded reduction in scope, evidence and
support expectations.

Existing field evidence covers 19 businesses: 15 restaurants and 4 stores.
The current pipeline planning evidence is 25+ interested, 10+ ready-now, 10
reserveable and a target of 5 signed/configured restaurants. These are
pipeline targets, not guaranteed conversions.

## 2. October week-by-week development plan

Owners are role owners, not new hires. All acceptance criteria are proposed
pending founder approval.

| Week | Work and owner | Dependencies | Acceptance criteria | Bot-health checks |
|---|---|---|---|---|
| Oct W1 | Product freezes LITE/BASE/PRO capability cut; Engineering maps deterministic entitlements and policy denials; Product/BRD records unknowns | Tier scope decision; economics v0.5; validation contract | Capability matrix has allow/deny behavior, LITE menu cap, BASE bounded domains and PRO no-unrestricted-AI rule; no unresolved tier contradiction | Source citations present; open blockers have owner/date; no secrets/deployment changes |
| Oct W2 | Engineering builds modular menu/order skeleton, state transitions, audit and human takeover; QA writes core fixtures | W1 entitlement map; existing domain/architecture artifacts | Menu publish, cart/order, accept/reject, human takeover and audit paths pass unit/integration tests; payment/delivery remain interfaces or mocks | CI green; deterministic state tests green; no critical authorization defect |
| Oct W3 | Engineering adds mock payment and mock delivery adapters; Observability adds request/flow/order/tier/support/cost events; Product defines cost-ledger joins | W2 skeleton; mock contracts; economics buckets | Mock adapters can be swapped without domain mutation; telemetry attributes tier, requests, provider/AI/support cost and failures | Telemetry ingestion visible; cost rows reconcile to test events; retry/error logs reviewed |
| Oct W4 | QA/Security/Accessibility completes test plan; Product runs scope-freeze review; Founder/Product records October go/no-go | W1–W3 evidence; test fixtures; rollback path | CI, entitlement, menu-limit, bounded-intent, recovery, access-control, accessibility and restore checks pass; no PRO advanced API in October cut | Weekly health report green or blockers explicitly escalated; no unowned critical issue |

October is complete only when the menu/order skeleton, mocks, CI, telemetry,
cost ledger and test plan are demonstrable. Mocks do not prove Meta, payment,
delivery or advanced-API feasibility.

## 3. November POC, dogfood and go/no-go

### Week plan

| Week | Work and owner | Acceptance evidence |
|---|---|---|
| Nov W1 | Internal dogfood with founder/operator workflows, LITE/BASE/PRO entitlement checks and human takeover | Repeated menu/order scenarios complete; tier leakage and audit tests remain green |
| Nov W2 | Synthetic traffic at 50 completed orders/day/restaurant; 54 normal and 90 heavy requests/order | Request, queue, DB, storage/logging, provider/AI and support ledgers populated |
| Nov W3 | Recovery, security/access-control and restore drills; accessibility pass | Proposed RPO/RTO checks, rollback evidence, access review and accessibility defects recorded |
| Nov W4 | Demo rehearsal, economics reconciliation and go/no-go review | No unresolved critical defect; evidence packet supports or blocks December restaurant entry |

### Proposed November gates

- Synthetic ceiling exercised at 50 completed orders/day/restaurant.
- 500- and 1,000-restaurant scenarios referenced from `economics-model.md`;
  these are analysis references, not production capacity claims.
- Proposed restore target: RPO ≤15 minutes and RTO ≤4 hours, pending
  engineering/operations approval.
- Proposed queue target: p95 queue age ≤60 seconds under the synthetic
  ceiling, with no unbounded backlog.
- Proposed error/retry target: <1% terminal failed workflow attempts and
  <5% retried/provider-error attempts, with dead-letter queue (DLQ) entries
  reviewed and replayable.
- Security, access-control and accessibility evidence recorded with no
  unresolved critical issue.
- Demo acceptance requires menu → order → staff action → completion/status
  and human takeover, using mock payment/delivery where external dependencies
  are not validated.

**Go:** all gates pass, cost/support telemetry is usable and 1–2 restaurant
entries have signed terms/readiness owners.
**No-go/hold:** any critical integrity/security/restore issue, unbounded queue,
unowned DLQ, missing cost attribution or unresolved external dependency being
represented as production-ready.

## 4. December controlled onboarding and pilot

### Onboarding sequence

1. **Restaurant 1:** controlled hardening candidate; menu, channel, staff
   owner, training, baseline and one successful workflow.
2. **Restaurant 2:** repeatability candidate; compare onboarding/support/error
   metrics before expanding.
3. **Restaurants 3–5:** expand only after the 1–2 gate passes; target 5
   signed/configured by year end, not necessarily 5 live on the quality-first
   path.

For each restaurant, record menu setup/correction time, staff training,
channel readiness, support owner, tier assignment, paid terms, incidents,
orders, fulfillment, repeat use, cost ledger and willingness-to-pay evidence.

### December week plan

| Week | Work and owner | Acceptance evidence |
|---|---|---|
| Dec W1 | Pilot hardening and Restaurant 1 readiness | Signed terms, channel/menu/staff readiness, baseline telemetry, support rota and rollback path |
| Dec W2 | Restaurant 1 live; Restaurant 2 configuration | Order/fulfillment/support/economics evidence; no active critical incident |
| Dec W3 | Restaurant 2 live if gates pass; configure Restaurants 3–5 | Repeatability evidence and explicit go/no-go for expansion |
| Dec W4 | Year-end demo, readiness review and late-December paid-pilot kickoff | 5 configured target, 1–2 live quality-first target, signed fixed 90-day pilot start if gates pass |

### Quality-first versus aggressive path

| Route | Year-end target | Trade-off |
|---|---|---|
| Quality-first | 5 configured, 1–2 live by Dec 31, 5 active January | Better evidence quality, lower support risk, slower visible live count |
| Aggressive | 5 live by Dec 31 with reduced scope | Higher support/incident risk, less tier/ economics evidence and greater external-dependency exposure |

The aggressive route must not silently redefine “configured,” remove required
quality gates or imply that provider/manual paths are production integrations.

## 5. Monthly expense model

All figures below are **provisional internal estimates in INR**, not quotes,
approved budgets, public pricing or external rates. Each product cash subtotal
receives a 15% contingency. No hiring is included.

### Product/POC/pilot cash

Values in each cell are low / base / high.

| Month | Infra | AI | Meta/provider | Payment/delivery pass-through | Tools/CI/observability | QA/load | Onboarding | Travel/direct | Subtotal | +15% contingency |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| October | ₹10k / ₹20k / ₹40k | ₹1k / ₹3k / ₹7k | ₹1k / ₹2k / ₹5k | ₹0 / ₹0 / ₹5k | ₹5k / ₹10k / ₹20k | ₹10k / ₹20k / ₹35k | ₹5k / ₹10k / ₹20k | ₹5k / ₹10k / ₹20k | ₹37k / ₹75k / ₹145k | ₹42.6k / ₹86.3k / ₹166.8k |
| November | ₹15k / ₹30k / ₹60k | ₹3k / ₹8k / ₹20k | ₹2k / ₹7k / ₹15k | ₹1k / ₹5k / ₹15k | ₹8k / ₹15k / ₹30k | ₹15k / ₹30k / ₹60k | ₹10k / ₹20k / ₹40k | ₹9k / ₹15k / ₹25k | ₹63k / ₹130k / ₹265k | ₹72.5k / ₹149.5k / ₹304.8k |
| December | ₹20k / ₹40k / ₹80k | ₹5k / ₹12k / ₹30k | ₹5k / ₹13k / ₹30k | ₹5k / ₹15k / ₹35k | ₹10k / ₹20k / ₹40k | ₹20k / ₹40k / ₹80k | ₹20k / ₹40k / ₹80k | ₹15k / ₹25k / ₹45k | ₹100k / ₹205k / ₹420k | ₹115k / ₹235.8k / ₹483k |

Payment and delivery are pass-through/unknown buckets, not assumed BABAI
margin. Actual provider terms remain external dependencies.

### Separate reserves and founder economic time

| View | Low | Base | High | Treatment |
|---|---:|---:|---:|---|
| Company/brand/external reserve | ₹25k | ₹75k | ₹1.5L | Accounting, legal/brand, CA/CS and provider diligence; separate from product cash |
| Product/POC/pilot cash, Oct–Dec before contingency | ₹2.0L | ₹4.1L | ₹8.3L | Product cash only |
| Product/POC/pilot cash with 15% contingency | ₹2.3L | ₹4.7L | ₹9.5L | Internal planning view |
| Founder economic time, 480/780/1,200 hours at provisional ₹1,000/hour | ₹4.8L | ₹7.8L | ₹12.0L | Economic cost, not cash salary or approved valuation |

### Onboarding and five-customer cohort

| View | Founder hours/customer | Cash/customer | Founder economic cost/customer | Total economic/customer |
|---|---:|---:|---:|---:|
| Low | 4 | ₹2k | ₹4k | ₹6k |
| Base | 8 | ₹5k | ₹8k | ₹13k |
| High | 16 | ₹10k | ₹16k | ₹26k |

For five configured customers: low/base/high cash is ₹10k/₹25k/₹50k,
founder time is 20/40/80 hours, and total economic view is approximately
₹30k/₹65k/₹1.3L. Avoid double-counting cohort onboarding in monthly totals.

## 6. Revenue and pricing model

The current tier experiment is provisional pre-GST pricing:

| Tier | Midpoint | ±15% internal planning band | 3/4/3 sensitivity count |
|---|---:|---:|---:|
| LITE | ₹4,999 | ₹4,250–₹5,750 | 3 |
| BASE | ₹9,999 | ₹8,500–₹11,500 | 4 |
| PRO | ₹19,999 | ₹17,000–₹23,000 | 3 |

At midpoint rates, the 3/4/3 sensitivity is approximately ₹1,14,990/month
pre-GST and ₹3,44,970 over 90 days. With the ±15% tier bands, the internal
cohort sensitivity is approximately ₹97,700–₹1,32,300/month and
₹2,93,100–₹3,96,900 over 90 days.

These are **internal planning estimates, not public pricing or quotes**.
Contribution remains:

```text
Margin = (IncomeBar - TotalExpenditure) / IncomeBar
EconomicSubsidy = RequiredIncomeBar - CollectedIncomeBar
```

Any below-floor pilot fee is recorded as subsidy, not hidden margin. GST is a
separate unknown/input requiring professional validation. Cancellation,
refund and minimum-paying terms remain agreement-dependent.

## 7. Capacity and quality gates

The following are proposed pending founder approval:

| Area | Proposed gate |
|---|---|
| Support minutes | Stage 0 ≤12 founder hours/restaurant/month and ≤15 support minutes/completed order; Stage 1 aggregate founder support ≤40 hours/month; founder-only support invalid above 24 hours for any restaurant or 40 aggregate hours |
| Onboarding | ≤16 combined founder hours/restaurant and live readiness within 7 calendar days; >32 hours is hold |
| Orders/requests | 50 completed orders/day/restaurant ceiling; model 54 normal and 90 heavy requests/order; order completion ≥80%; missed/duplicate ≤5% |
| Queue/DB/provider | p95 queue age ≤60 seconds, no unbounded backlog, DB pool/connection and provider error evidence captured; actual provider limits remain external |
| Restore | Proposed RPO ≤15 minutes and RTO ≤4 hours; restore evidence required before live expansion |
| Error/retry/DLQ | terminal failed workflows <1%, retries/provider-error attempts <5%, DLQ entries reviewed/replayable |
| ROI/continuation | Base contribution non-negative; 2 of first 3 completed pilots accept paid continuation; no public pricing conclusion before actual costs |
| Rollback | Critical defect or integrity issue triggers expansion hold and documented rollback/manual fallback before resuming |

The 500/1,000 restaurant scenarios remain references until load, storage,
queue, DB, provider, support and economics evidence exists. No capacity or
provider approval is implied.

## 8. Risks and mitigations

| Risk | Mitigation |
|---|---|
| October scope overrun | Freeze tier cut in Week 1; defer PRO advanced APIs and non-MVP delivery |
| Provider/payment/delivery uncertainty | Use mocks/manual fallback; record external gate; do not imply feasibility |
| Founder capacity | Track hours/support minutes weekly; stop expansion above proposed support gates; no hiring assumed |
| Cost uncertainty | Populate rate register, cost ledger and tier-labelled usage; retain 15% contingency |
| Test gaps | CI, synthetic load, restore/security/accessibility and demo gates before restaurants |
| Customer readiness | Require channel/menu/staff owner, signed terms and baseline instrumentation before entry |
| Pipeline shortfall | Keep 25+/10+ evidence funnel, reserve 10, target 5 signed/configured; do not force unready restaurants |
| External approvals | Keep legal/provider/CA/CS items separate and unresolved until documentary evidence exists |
| Aggressive-path risk | Require explicit founder approval and record reduced scope/support trade-off |

## 9. Final recommendation and next actions

### Recommendation

Use the **quality-first path** as the default:

1. **October 31:** scope freeze, deterministic LITE/BASE/PRO core, menu/order
   skeleton, mocks, CI, telemetry, cost ledger and test plan complete.
2. **November 30:** internal dogfood, 50-order synthetic ceiling, 500/1,000
   references, restore/security/accessibility/demo gates complete.
3. **December 14:** Restaurant 1 ready/live if all entry gates pass.
4. **December 21:** Restaurant 2 ready/live if repeatability and support gates
   pass; configure remaining candidates toward 5.
5. **December 31:** 5 configured, 1–2 live, year-end demo and readiness
   decision; late-December paid 90-day pilot kickoff only with signed terms.
6. **January target:** 5 active restaurants after evidence, support and
   economics review.

### Definition of five onboarded/configured

A restaurant counts as configured only when it has signed pilot/commercial
terms, an approved channel or agreed mock/manual path, reviewed and published
menu, named staff owner, tier assignment, training record, baseline telemetry,
cost-ledger row, support owner and at least one successful end-to-end test.
“Configured” does not mean live production scale.

### Next internal actions

- Product: approve the October scope-freeze checklist and quality-first route.
- Engineering: implement entitlement tests, menu/order skeleton, mocks and CI.
- QA/Security/Accessibility: publish the test, restore and demo checklists.
- Ops/Finance: open the cost ledger, budget tracker and company/external reserve.
- Founder Ops: convert 10+ ready-now pipeline into reserveable/signed candidates.
- Product + Founder: define day-90 readiness evidence and late-December pilot
  agreement inputs without inventing legal wording.

This plan does not authorize deployment, hiring, public pricing, provider
commitments or external approvals.
