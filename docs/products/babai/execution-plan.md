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

## Decision posture

This is a **quality-first internal execution plan**, not a launch promise,
public roadmap, staffing plan or provider-approval claim. All numbers are
internal planning estimates unless explicitly labelled as existing evidence.
No hiring is assumed. Manoj + Vinay founder time is tracked separately from
cash expenditure.

The plan preserves two routes:

- **Quality-first path:** 5 restaurants configured, 1–2 live by 31 December,
  then 5 active in January after evidence and support gates.
- **Aggressive path:** 5 live by year end with reduced scope and higher
  operational risk.

Neither path is selected silently. The quality-first path is the default
planning posture; the aggressive path requires an explicit founder decision.

## Evidence and pipeline baseline

Existing field research covers 19 businesses: 15 restaurants and 4 stores. The
execution pipeline treats the following as evidence targets, not guaranteed
conversion:

| Pipeline stage | Planning count | Meaning |
|---|---:|---|
| Interested | 25+ | Discovery and demand pipeline, including the existing 19-business evidence |
| Ready-now | 10+ | Business has a plausible owner/contact, menu and near-term operating interest |
| Reserveable | 10 | Business can reserve a pilot slot subject to terms and readiness |
| Signed/configured target | 5 | Target number for configured pilot candidates by year end |

The late-December paid pilot is a fixed 90-day term under the existing
agreement/readiness rules. The plan does not invent cancellation, refund or
minimum-paying legal wording.

## Milestones, owners and gates

| Period | Product milestone | Primary owner | Dependencies | Entry check | Exit check |
|---|---|---|---|---|---|
| October | Scope freeze: LITE/BASE/PRO cut; modular core; menu/order skeleton; mock payment adapter and mock delivery adapter; CI; telemetry; cost ledger; test plan | Product + Engineering | Tier matrix, economics v0.5, validation contract | Provisional tier boundaries recorded; no unresolved scope contradiction | Deterministic entitlement tests, menu/order skeleton, mocks, CI, telemetry and cost-ledger checks green |
| November | POC/internal dogfood; synthetic 50-order/day/restaurant ceiling; 500/1,000 scenario references; restore, security, accessibility and demo gates | Engineering + QA/Security + Product | October exit; synthetic data; mock adapters; test fixtures | CI/telemetry and rollback path available | No critical defects; restore/security/accessibility/demo evidence recorded; cost/request/support metrics captured |
| December | Pilot hardening; start with 1–2 controlled restaurants; expand to 5 only after gates; year-end demo; late-December paid-pilot kickoff | Product + Founder Ops + QA | November exit; signed terms; restaurant readiness; external provider gates where needed | 1–2 candidates pass readiness and agreement checks | Quality-first: 1–2 live, 5 configured by 31 December; expansion decision documented |

## October scope freeze

The October cut is intentionally narrow:

- LITE/BASE/PRO entitlement and policy matrix, with no unrestricted AI path.
- Modular core with menu, order, deterministic state and human takeover.
- Menu/order skeleton with audit and usage counters.
- Mock payment and delivery adapters only; mocks do not prove provider
  feasibility.
- CI for unit, integration, policy/entitlement and contract tests.
- Telemetry for requests, flow/order, errors, latency, support interventions,
  tier usage and cost-ledger joins.
- Cost ledger fields for infrastructure, provider pass-through, AI, payment,
  delivery, support, CAC, onboarding, QA and founder time.
- Test plan covering tier leakage, menu limits, bounded intents, failure
  recovery, access control, accessibility and restore.

## November POC and internal dogfood

November validates the product mechanics before live restaurant expansion:

- Synthetic traffic at the 50 completed-orders/day/restaurant ceiling.
- Normal 54-request/order and heavy 90-request/order sensitivities.
- 500- and 1,000-restaurant request, storage, queue and DB references from
  `economics-model.md`; these are not launch capacity claims.
- Restore drill, security/access-control review, accessibility pass and
  year-end demo rehearsal.
- Internal dogfood with founder/operator workflows and human takeover.
- Cost ledger reconciliation by tier and cost bucket.

## December controlled rollout

December is a hardening and evidence month:

1. Run hardening and readiness review.
2. Start with 1–2 controlled restaurants.
3. Expand toward 5 only after entry/exit, support, reliability and economics
   gates pass.
4. Hold the year-end demo with recorded evidence and unresolved risks.
5. Start the late-December paid 90-day pilot only with signed terms and the
   fixed end-date/readiness model.

External Meta, payment, delivery and advanced-API dependencies are gates, not
assumptions. If they are not validated, use mock/manual paths and record the
capability as blocked or partial rather than implying production readiness.

## Bot-health contract

Bot-health is part of every milestone:

- CI and required checks are green before milestone exit.
- No unresolved critical security, authorization, data-integrity or restore
  defect.
- Daily/weekly telemetry and cost-ledger ingestion is visible and attributable.
- Open blockers have an owner, evidence link and next decision date.
- Product changes remain role-scoped; no secrets, deployment or external
  approval state is changed by this plan.
- Source citations and proposed/unknown labels remain present in the artifacts.

## Proposed quality gates

These are proposed pending founder approval:

| Gate | Proposed threshold |
|---|---|
| October scope | 100% of tier capabilities have deterministic allow/deny tests; no PRO advanced API in the October production cut |
| Internal dogfood | At least 50 synthetic completed orders/day/restaurant exercised; no unresolved critical defect; restore/security/accessibility/demo evidence recorded |
| Restaurant entry | 1–2 restaurants only after signed terms, channel/menu/staff readiness, baseline instrumentation and support owner |
| Expansion to 5 | At least 1–2 live restaurants with order/fulfillment/support/economics evidence and no active critical incident |
| Quality-first year end | 5 configured, 1–2 live by 31 December; 5 active January target remains contingent on evidence |
| Aggressive path | 5 live only with an explicit founder decision accepting reduced scope and increased support/operational risk |

## Budget — internal planning estimates

All figures below are **provisional internal estimates in INR**, not quotes,
approved budgets, public pricing or external rates. Each subtotal receives a
15% contingency. No hiring is included.

### Product/POC/pilot cash by month

| Month | Infra | Tools/CI/telemetry | Provider/AI | QA/security/accessibility | Onboarding/POC | Travel | Subtotal | +15% contingency |
|---|---:|---:|---:|---:|---:|---:|---:|---:|
| October | ₹10k / ₹20k / ₹40k | ₹5k / ₹10k / ₹20k | ₹2k / ₹5k / ₹10k | ₹10k / ₹20k / ₹35k | ₹5k / ₹10k / ₹20k | ₹5k / ₹10k / ₹20k | ₹37k / ₹75k / ₹145k | ₹42.6k / ₹86.3k / ₹166.8k |
| November | ₹15k / ₹30k / ₹60k | ₹8k / ₹15k / ₹30k | ₹5k / ₹15k / ₹35k | ₹15k / ₹30k / ₹60k | ₹10k / ₹20k / ₹40k | ₹10k / ₹20k / ₹40k | ₹63k / ₹130k / ₹265k | ₹72.5k / ₹149.5k / ₹304.8k |
| December | ₹20k / ₹40k / ₹80k | ₹10k / ₹20k / ₹40k | ₹10k / ₹25k / ₹60k | ₹20k / ₹40k / ₹80k | ₹20k / ₹40k / ₹80k | ₹20k / ₹40k / ₹80k | ₹100k / ₹205k / ₹420k | ₹115k / ₹235.8k / ₹483k |

Values in each cell are low / base / high. Three-month product/POC/pilot
cash subtotal is approximately ₹2.0L / ₹4.1L / ₹8.3L before contingency, or
₹2.3L / ₹4.7L / ₹9.5L with the 15% contingency.

### Separate reserve views

| Reserve | Low | Base | High | Treatment |
|---|---:|---:|---:|---|
| Company/brand/external reserve for accounting, legal, brand, CA/CS and provider diligence | ₹25k | ₹75k | ₹1.5L | Separate from product cash; external approval and actual invoices required |
| Product/POC/pilot cash, October–December | ₹2.0L | ₹4.1L | ₹8.3L | Add 15% contingency as above |
| Product/POC/pilot cash with contingency | ₹2.3L | ₹4.7L | ₹9.5L | Internal planning view only |

### Founder economic-time view

No founder salary or hiring is assumed. Using the existing provisional
₹1,000/hour internal opportunity-cost sensitivity:

| Period | Combined Manoj + Vinay hours, low/base/high | Opportunity-cost view |
|---|---:|---:|
| October | 120 / 200 / 320 hours | ₹1.2L / ₹2.0L / ₹3.2L |
| November | 160 / 260 / 400 hours | ₹1.6L / ₹2.6L / ₹4.0L |
| December | 200 / 320 / 480 hours | ₹2.0L / ₹3.2L / ₹4.8L |
| October–December total | 480 / 780 / 1,200 hours | ₹4.8L / ₹7.8L / ₹12.0L |

This is an economic-time view, not cash expenditure, booked compensation or
an approved founder valuation.

### Onboarding cost view

| View | Founder hours/customer | Cash onboarding cost/customer | Founder opportunity cost/customer | Total economic view/customer |
|---|---:|---:|---:|---:|
| Low | 4 hours | ₹2k | ₹4k | ₹6k |
| Base | 8 hours | ₹5k | ₹8k | ₹13k |
| High | 16 hours | ₹10k | ₹16k | ₹26k |

For a five-customer configured cohort, the corresponding cash / founder-time
economic views are approximately:

| View | Cash | Founder hours | Founder opportunity cost | Total economic view |
|---|---:|---:|---:|---:|
| Low | ₹10k | 20 hours | ₹20k | ₹30k |
| Base | ₹25k | 40 hours | ₹40k | ₹65k |
| High | ₹50k | 80 hours | ₹80k | ₹1.3L |

These onboarding estimates are included in the monthly table where applicable
and must not be double-counted.

## Dependencies and unresolved choices

- Founder approval of the quality-first versus aggressive path.
- Scope-freeze approval and exact LITE/BASE/PRO implementation cut.
- Team-defined readiness evidence and 1–2-to-5 expansion gate.
- Actual provider/AI/payment/delivery terms and any required external approvals.
- Final pilot agreement, cancellation/refund/minimum-paying terms and late-Dec
  start confirmation.
- Budget envelope, contingency use and founder-time valuation.
- Pipeline conversion assumptions: 25+ interested, 10+ ready-now, 10
  reserveable and 5 signed/configured.

This plan does not authorize deployment, hiring, public pricing, provider
commitments or external approvals.
