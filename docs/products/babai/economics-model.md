---
status: partial — internal fee and scale baseline added; all numbers remain provisional and pending founder approval
owner: BABAI Product / BRD
last-reviewed: 2026-09-21
sources:
  - Founder decision packet (2026-09-21; current task input)
  - Founder traffic baseline (2026-09-21; current task input)
  - Tier scope decision (2026-09-21; current task input)
  - nekurama.babai.research.md (Pricing hypothesis, What remains unvalidated, Success criteria)
  - nekurama.chatgpt.md (historical planning model; explicitly not a forecast)
  - nekurama.raw.chat.json (mappings `4bbdb489-0a0d-45d5-af27-70535c5d4acc`, `04cc446b-3a6d-4c19-adc7-4d94ab17d21b`, `4702681b-d611-4408-af5f-9001d04b6cfa`, `f58ce128-39ed-4015-9be9-5b6135a39f20`, `9fbcd0e1-28ba-4ae7-8b44-39d493d2bb0e`, `cedbd365-e584-4306-a499-86a51184cb83`)
  - docs/products/babai/brd.md
  - docs/products/babai/business-model.md
  - docs/company/finance-tax-compliance.md
---

# BABAI Economics Model

## Purpose and decision posture

This is the **Track 2 planning model v0.5** for the thin restaurant-first,
pickup-first, WhatsApp-native MVP. The low/base/high planning bands below are
finalized for internal planning and instrumentation only; every proposed
number remains provisional and pending founder approval. The model is designed
to collect comparable evidence during a fixed 90-day paid pilot and readiness-
gated gradual onboarding toward up to 10 restaurants.

It is **not a forecast, approved price list, margin commitment or accounting
position**. The model deliberately keeps price, order GMV, GST treatment,
founder valuation rates and contribution targets as inputs. The admin packet
does not supply those values.

The founder traffic baseline supplied for this update is:

```text
6 conversational flows/order
× 9 gateway hits/flow
= 54 requests/completed order
```

Use **90 requests/order** as the heavy-case sensitivity. A restaurant has a
hard ceiling of **50 completed orders/day** for this internal model. The
500-restaurant and 1,000-restaurant views below are scale sensitivities, not
capacity commitments.

## Evidence versus estimates

### Known evidence

- Field research covered 19 businesses: 15 restaurants and 4 stores. It
  explicitly calls the ₹999 / ₹2,499 / ₹4,999 + GST plans hypotheses to test
  through paid pilots, not validated pricing
  (`nekurama.babai.research.md`, “Pricing hypothesis”).
- The field research requires measuring onboarding time, support effort,
  actual Meta/AI/infrastructure/payment costs and pilot-to-paid conversion
  (`nekurama.babai.research.md`, “Success criteria”).
- Customer funds should settle directly to the restaurant; BABAI should not
  hold or settle customer funds. BABAI billing is separate
  (`nekurama.babai.research.md`, “Proposed BABAI solution”; raw mapping
  `4bbdb489-0a0d-45d5-af27-70535c5d4acc`).
- The founder discussion records ₹999 / ₹2,499 / ₹4,999 + GST as an initial
  pricing hypothesis, not permanent pricing (raw mapping
  `04cc446b-3a6d-4c19-adc7-4d94ab17d21b`).
- An older founder-side model used a temporary ₹1,299 blended ARPU and roughly
  ±30% uncertainty. It explicitly said it was a planning model, not a
  forecast, and used historical Tadka/Thali/Dawat prices
  (`nekurama.chatgpt.md:L3650-L3760`). Those numbers are retained only as
  historical context.
- Historical raw discussion also covered 1,000-restaurant scale and Meta
  message-cost categories, but those are corroboration only; the 6-flow/9-hit,
  50-order ceiling and 500/1,000 traffic baseline in this update come from
  the current founder baseline packet.

### Planning estimates in this artifact

The ranges below are deliberately provisional operating assumptions for
instrumentation. They are not observed BABAI costs, vendor quotes or approved
targets. Replace them with invoices, logs, time records and pilot outcomes.

## Actual-rate input register

Populate the blank **actual rate/value** field from the named source before
using a rate in a contribution or break-even decision. Blank fields are
intentional unknowns, not zeroes.

| Input | Actual rate/value | Unit | Source/evidence to collect | Owner | Status |
|---|---|---|---|---|---|
| Hosting, storage, observability and infrastructure |  | per restaurant/month | Vendor invoices, usage export and allocation method | Engineering + Product | Pending pilot measurement |
| Meta/WhatsApp/BSP/provider usage |  | per message/restaurant/month | Current provider terms, invoice and message ledger | Integrations owner + Product | Pending provider validation |
| AI usage |  | per message/token/restaurant | Model billing export and usage ledger | Engineering + Product | Pending provider validation |
| Payment gateway fee |  | % of `G` + fixed fee | Gateway schedule, merchant agreement and settlement report | Finance + Product | Pending provider/CA review |
| Delivery/provider fee, if enabled |  | per order or pass-through | Provider terms and restaurant/customer invoice | Product + Finance | Not in MVP; open |
| Tooling allocation |  | per restaurant/month | Tool invoices and shared-cost allocation | Engineering + Product | Pending allocation |
| Founder opportunity cost: Manoj |  | per hour | Founder approval and time records | Manoj | Blank pending approval |
| Founder opportunity cost: Vinay |  | per hour | Founder approval and time records | Vinay | Blank pending approval |
| Failure/refund remediation |  | % of `G` or actual incident cost | Incident, refund, credit and support ledger | Product + Support | Pending pilot evidence |
| Applicable GST treatment |  | rate/treatment | Written CA/CS advice and invoice decision | Finance + CA/CS | Blank pending professional validation |
| Pilot fee/deposit |  | per pilot | Signed pilot terms and receipt | Founder + Product | Blank pending founder approval |
| Pilot end date |  | calendar date | Signed pilot terms | Founder + Product | Blank pending founder approval |
| Target contribution margin |  | % of recognized revenue | Founder-approved commercial target | Founder + Product | Blank pending founder approval |
| Request infrastructure cost |  | per request | Load test, hosting allocation and request ledger | Engineering + Product | Blank pending scale measurement |
| Provider pass-through cost |  | per request/message | Meta/BSP/provider terms and message ledger | Integrations + Finance | Blank pending provider validation |
| AI cost |  | per request/token | Model usage export and token ledger | Engineering + Product | Blank pending provider validation |
| Durable event/log bytes |  | bytes per request | Event schema, retention policy and storage export | Engineering | Blank pending scale measurement |
| Database bytes |  | bytes per completed order | DB growth report and retention policy | Engineering | Blank pending scale measurement |

## Model scope and variables

Model one restaurant for one pilot month unless stated otherwise.

| Symbol | Meaning | Current state |
|---|---|---|
| `P` | Recognized BABAI revenue per restaurant for the period, excluding applicable GST | Unknown; no public price approved |
| `D` | Pilot fee or deposit collected | Unknown; refundable deposits are not automatically revenue |
| `T` | Pilot duration in months | Unknown; an explicit end date is required before enrollment |
| `G` | Customer order GMV processed through the workflow | Unknown; money settles to the restaurant |
| `q` | Payment/provider fee rate applied if BABAI absorbs the fee | Unknown; validate per provider |
| `x` | Fixed payment/provider fee per transaction or period | Unknown |
| `r_M`, `r_V` | Internal opportunity-cost rate for Manoj and Vinay time | Unknown; no compensation/rate decision |
| `h_M`, `h_V` | Manoj/Vinay hours for onboarding or support | Measure separately; combined hours are shown in the scenarios |
| `g` | Applicable GST rate/treatment | Unknown; CA/CS validation required |
| `τ` | Target contribution margin sensitivity | Unknown; no target approved |

## Finalized low/base/high planning assumptions

“High” means a high-cost/high-support case, not a high-revenue outcome.

| Cost driver | Low | Base | High | Measurement rule |
|---|---:|---:|---:|---|
| Hosting, storage, observability and infrastructure per restaurant/month | ₹150–₹400 | ₹400–₹1,000 | ₹1,000–₹2,500 | Allocate shared infrastructure consistently; retain actual invoices |
| Meta/provider/AI usage per restaurant/month | ₹100–₹500 | ₹500–₹1,500 | ₹1,500–₹4,000 | Separate WhatsApp/Meta, AI and any BSP/provider charges |
| Payment cost if BABAI absorbs it | 1.5–2.0% of `G` + ₹0–₹100 | 2.0–2.5% of `G` + ₹100–₹300 | 2.5–3.5% of `G` + ₹300–₹750 | If passed through, record pass-through and actual exceptions instead |
| One-time onboarding effort, Manoj + Vinay combined | 4–8 hours | 8–16 hours | 16–32 hours | Record `h_M` and `h_V` separately; include menu work, setup and training |
| Recurring founder support, Manoj + Vinay combined/month | 2–6 hours | 6–12 hours | 12–24 hours | Record incident, support and follow-up time separately |
| Shared tooling allocation per restaurant/month | ₹100–₹500 | ₹500–₹1,500 | ₹1,500–₹4,000 | Allocate only the attributable share of monitoring, support and development tools |
| Failure/refund reserve if BABAI absorbs customer remediation | 0.5–1.5% of `G` | 1.5–4.0% of `G` | 4.0–10.0% of `G` | Otherwise record actual credits, refunds and remediation hours; do not double count |
| Shared fixed monthly overhead across the pilot | ₹5,000–₹15,000 | ₹15,000–₹35,000 | ₹35,000–₹75,000 | Keep separate from per-restaurant allocation |

The payment and failure/refund percentages are planning sensitivities, not
provider facts. They must be replaced with actual terms and incident data.

Founder time is a real economic input even when Manoj and Vinay take no salary.
The model should report both hours and an optional opportunity-cost view:

```text
FounderCost = (h_M × r_M) + (h_V × r_V)
```

Until `r_M` and `r_V` are approved, report founder cost as hours and show
monetary sensitivity only, not as booked company expense.

## Internal fee calculation inputs — provisional

The following midpoint inputs are used only to calculate an internal planning
recommendation. They are not public prices, quotes, legal/tax conclusions or
external provider rates.

| Input | Low | Base | High | Status |
|---|---:|---:|---:|---|
| Combined founder opportunity-cost rate `r_f` | ₹1,000/hour | ₹1,000/hour | ₹1,000/hour | Provisional internal estimate; founder approval pending |
| Monthly customer-order GMV `G` | ₹25,000 | ₹60,000 | ₹1,20,000 | Provisional internal estimate; actual volume unknown |
| Payment rate `q` midpoint | 1.75% | 2.25% | 3.00% | Planning sensitivity; provider terms unknown |
| Fixed payment cost `x` midpoint | ₹50 | ₹200 | ₹525 | Planning sensitivity; provider terms unknown |
| Failure/refund reserve midpoint | 1.00% of `G` | 2.75% of `G` | 7.00% of `G` | Planning sensitivity; incident data unknown |
| Shared fixed overhead midpoint `F` | ₹10,000/month | ₹25,000/month | ₹55,000/month | Planning allocation; actual shared pool unknown |
| Target contribution sensitivity `τ` | 40% | 40% | 40% | Proposed internal sensitivity; not an approved target |
| Planning variance around fee midpoint | ±15% | ±15% | ±15% | Maximum planning variance; not a quote range |

The founder-hour rate is a blended internal opportunity-cost assumption for
calculation only. Record Manoj and Vinay hours separately and replace `r_f`
with approved `r_M` and `r_V` when available.

## LITE / BASE / PRO internal rate experiment — provisional

These are **internal pre-GST planning estimates**, not public prices, quotes,
approved tiers or external rates. Each band has a maximum ±15% planning
tolerance around the stated midpoint.

| Tier | Pre-GST midpoint | ±15% planning band | Capability/cost posture |
|---|---:|---:|---|
| LITE | ₹4,999 | ₹4,250–₹5,750 | Menu display/order only; limited AI; no payment, delivery, availability automation, promotions or combos; max 3 menu updates/month |
| BASE | ₹9,999 | ₹8,500–₹11,500 | Menu/order/payment/delivery where enabled; bounded AI in those domains; availability controls; basic promotions/combos capped at 3 requests/day |
| PRO | ₹19,999 | ₹17,000–₹23,000 | Full bounded menu/order/payment/delivery and allowed conversational tasks; advanced API integrations; never unrestricted AI authority |

The rounded bands are planning presentation only. The underlying calculation
is `midpoint × [0.85, 1.15]`; no tier is approved for public publication.

### Tier-specific cost implications

| Cost bucket | LITE | BASE | PRO |
|---|---|---|---|
| Infrastructure | Lowest request, storage and state footprint; menu-update cap limits churn | Higher order/payment/availability state and notification footprint | Highest integration, observability, state and support footprint |
| Provider pass-through | No payment/delivery provider dependency in the tier | Meta/provider plus payment/delivery costs where enabled | Meta/provider plus advanced API/integration provider costs |
| AI | Limited menu/order assistance; lowest AI-call budget | AI restricted to menu/order/payment/delivery; medium budget | Highest bounded-task/API budget; entitlement and policy caps required |
| Support/onboarding | Menu setup and constrained update support | Payment/delivery and promotion support | Custom integration, API, exception and higher-touch support |
| Failure/refund exposure | No customer payment/delivery flow in tier | Payment, delivery and promotion exception exposure | BASE exposure plus integration and higher-complexity remediation |

Track each tier separately for request volume, AI calls, provider charges,
payment/delivery pass-through, support hours, onboarding hours, failures,
refunds and contribution. Do not pool PRO usage into an apparently cheap
LITE/BASE average.

The role-owned feasibility and rollout matrix is maintained in
[`tier-feasibility.md`](tier-feasibility.md). It separates deterministic
entitlements from external Meta, payment, delivery and advanced-API
dependencies; it does not claim provider feasibility or approval.

The October–December quality-first execution budget, founder-time view,
onboarding/cohort cost and milestone gates are maintained in
[`execution-plan.md`](execution-plan.md). Those figures are internal planning
estimates with 15% contingency, not approved cash budgets.

### Pilot 3/4/3 sensitivity — provisional

For a 10-restaurant sensitivity cohort, model **3 LITE / 4 BASE / 3 PRO**.
At the stated midpoints this is an internal planning income bar of
approximately **₹1,14,990/month pre-GST** and **₹3,44,970 over 90 days**.
Applying the per-tier ±15% bands gives an approximate cohort range of
**₹97,700–₹1,32,300/month pre-GST** and **₹2,93,100–₹3,96,900 over 90 days**.

This is a mix sensitivity, not a required enrollment mix or public revenue
forecast. The pilot must compare the mix against actual support, provider,
AI, payment, delivery, onboarding, failure/refund and contribution data.

## Direct and indirect cost classification

Direct costs are attributable to a specific restaurant or pilot period:

- hosting/usage allocation;
- Meta, BSP/provider and AI usage;
- payment fees if BABAI absorbs them;
- restaurant-specific tooling allocation;
- restaurant-specific onboarding and founder support time;
- failure, refund, credit and remediation cost.

Indirect/shared costs are not naturally attributable to one restaurant:

- shared platform overhead and common tooling;
- non-restaurant-specific product, engineering, finance and administration
  time;
- shared monitoring, security and operational reserves.

Allocate indirect costs only with a documented rule. Keep the unallocated
shared pool visible so a per-restaurant contribution does not look like
company-level profitability.

## Cost formulas

For restaurant `i` in a period:

```text
DirectCost_i =
    Infrastructure_i
  + ProviderAndAI_i
  + Tooling_i
  + (q_i × G_i) + x_i
  + FailureRefundReserve_i
  + (h_support_M_i × r_M) + (h_support_V_i × r_V)
```

One-time onboarding cost:

```text
OnboardingCost_i =
    OnboardingNonFounderCost_i
  + (h_onboard_M_i × r_M) + (h_onboard_V_i × r_V)
```

Contribution before shared fixed overhead:

```text
Contribution_i = P_i - DirectCost_i
```

Contribution after onboarding amortization over `T_i` months:

```text
ContributionAfterOnboarding_i =
    P_i - DirectCost_i - (OnboardingCost_i / T_i)
```

If the pilot fee is collected:

```text
RecognizedPilotRevenue_i = revenue-recognized portion of D_i
PilotContribution_i =
    RecognizedPilotRevenue_i
  - OnboardingCost_i
  - (T_i × DirectCost_i)
```

Cash collected as a refundable deposit must remain distinct from recognized
revenue until the commercial and accounting treatment is approved.

## Pilot fee, deposit, refund and end-date options

These are candidate commercial structures, not selected terms:

| Option | Cash at entry | Revenue treatment | Refund/credit question | End-date shape |
|---|---|---|---|---|
| Paid pilot fee | Fixed fee paid before activation | Recognize only according to agreed delivery/accounting terms | None, partial or service-credit treatment must be written | Fixed calendar date in signed terms |
| Refundable deposit | Deposit paid before activation | Keep distinct from revenue until earned/recognized | Return conditions, deductions and timing required | Fixed calendar date in signed terms |
| Deposit applied to continuation | Deposit paid before activation | Apply to later paid continuation only if terms permit | Refund if continuation is not accepted or not delivered | Fixed calendar date plus explicit conversion decision |
| Fee plus deposit | Separate onboarding/service fee and security deposit | Track each component separately | Each component needs its own rule | Fixed calendar date in signed terms |

The current decision requires a **fixed 90-day paid pilot**, not a free trial.
Cancellation, refund and minimum-paying terms must be tied to a signed
agreement template. The exact option, amount, refund rule and agreement
wording remain open; do not infer any of them from historical subscription
prices. The pilot closes at the 90-day readiness review when team-defined
evidence supports materially larger onboarding volumes.

## 90-day plan and readiness-gated exit

| Period | Operating focus | Required evidence |
|---|---|---|
| Days 0–14 | Paid enrollment, signed agreement, channel/menu/staff readiness and baseline capture | Commercial terms, cancellation/refund placeholders, minimum-paying field, end date and instrumentation recorded |
| Days 15–45 | Live pickup workflow and staff operation | Activation, order success, fulfillment, support incidents, provider/payment costs and founder hours |
| Days 46–75 | Repeat use and economics | Repeat behavior, staff adoption, actual-rate register, total expenditure and income bar |
| Days 76–90 | Readiness review and next-stage decision | Team-defined evidence shows whether materially larger onboarding volumes are operationally safe and economically supportable |

The 90-day term is fixed. The readiness review determines whether BABAI is
ready for materially larger onboarding volumes; it does not authorize an
automatic extension, price increase or legal agreement change.

## GST treatment

If `g` is applicable:

```text
CustomerInvoiceGross = P × (1 + g)
```

GST collected must not be counted as BABAI contribution. Registration,
applicable rate, input-tax credit, invoice treatment, deposit treatment and
revenue recognition require CA/CS validation. This artifact intentionally
does not assume a GST rate or claim that GST is complete.

## Per-restaurant break-even view

Let `F` be shared fixed monthly overhead and let `C` be the expected
per-restaurant monthly cost after any onboarding amortization.

```text
MonthlyContributionPerRestaurant = P - C

BreakEvenRestaurants =
    ceil(F / MonthlyContributionPerRestaurant)
```

The break-even count is valid only when `P > C`. If `P ≤ C`, no number of
restaurants covers fixed overhead without changing price, usage, scope or
costs.

Onboarding payback:

```text
OnboardingPaybackMonths =
    OnboardingCost / MonthlyContributionPerRestaurant
```

Target-price sensitivity, without selecting a price:

```text
PriceFloorForTargetContribution =
    C / (1 - τ)
```

Use `τ` only as a sensitivity input. For planning views, show 20%, 40% and
60% contribution-margin sensitivities; none is an approved target.

### Break-even sensitivity view

Let `C_L`, `C_B` and `C_H` be the low/base/high monthly per-restaurant costs
after the chosen onboarding amortization. The required recognized revenue
under contribution sensitivities is:

| Cost posture | 20% contribution sensitivity | 40% contribution sensitivity | 60% contribution sensitivity |
|---|---:|---:|---:|
| Low | `C_L / 0.80` | `C_L / 0.60` | `C_L / 0.40` |
| Base | `C_B / 0.80` | `C_B / 0.60` | `C_B / 0.40` |
| High | `C_H / 0.80` | `C_H / 0.60` | `C_H / 0.40` |

For each populated row, also calculate:

```text
BreakEvenRestaurants_L/B/H =
    ceil(F_L/B/H / (P - C_L/B/H))
```

If the denominator is zero or negative, report **not break-even** rather than
inventing a restaurant count. These views are sensitivity outputs only; they
do not select `P` or approve `τ`.

## Internal planning fee recommendation — provisional

The following recommendation is an internal planning output, not public
pricing, a quote, a legal/tax conclusion or an external rate.

For each cost posture, use the midpoint inputs above and calculate:

```text
FounderSupportCost =
    FounderSupportHours × r_f

PaymentCost =
    (q × G) + x

FailureRefundCost =
    FailureRefundReserveRate × G

OnboardingAmortization =
    (OnboardingHours × r_f) / 3

SharedOverheadAllocation =
    F / N

TotalMonthlyExpenditure =
    Infrastructure
  + MetaProviderAI
  + Tooling
  + FounderSupportCost
  + PaymentCost
  + FailureRefundCost
  + OnboardingAmortization
  + SharedOverheadAllocation

RequiredMonthlyIncomeBar =
    TotalMonthlyExpenditure / (1 - τ)

90DayPilotFee =
    3 × RequiredMonthlyIncomeBar

PlanningFeeBand =
    RequiredFeeMidpoint × [0.85, 1.15]
```

`N=1` is used for the full-cost view of a single-restaurant pilot. `N=10` is
used for the post-pilot operating view at the current onboarding ceiling.
These allocations are planning assumptions; do not treat them as approved
commercial terms.

### Recommended internal fee bands at proposed 40% contribution sensitivity

Rounded to the nearest ₹100 for readability. Every amount is an internal
planning estimate pending founder approval; it is not public pricing.

| Cost posture | 90-day paid pilot, `N=1` full-cost view | Post-pilot monthly plan, `N=10` shared-cost view |
|---|---:|---:|
| Low | Midpoint **₹88,100**; band **₹74,900–₹101,300** | Midpoint **₹14,400**; band **₹12,200–₹16,500** |
| Base | Midpoint **₹2,19,500**; band **₹1,86,600–₹2,52,400** | Midpoint **₹35,700**; band **₹30,300–₹41,000** |
| High | Midpoint **₹5,03,900**; band **₹4,28,300–₹5,79,500** | Midpoint **₹85,500**; band **₹72,600–₹98,300** |

The high-cost row is a stress case, not a recommended public tier. If the
founder chooses to charge below an internal planning floor, record the
difference explicitly:

```text
EconomicSubsidy =
    RequiredMonthlyIncomeBar - CollectedMonthlyIncomeBar
```

The subsidy must not be presented as margin or hidden by excluding founder
time, shared overhead, failure/refund cost or onboarding.

### Contribution sensitivity at the base cost posture

Using the base `N=10` monthly expenditure midpoint of approximately ₹21,400:

| Proposed sensitivity `τ` | Required monthly income bar | 90-day equivalent |
|---:|---:|---:|
| 20% | approximately ₹26,800 | approximately ₹80,300 |
| 40% | approximately ₹35,700 | approximately ₹1,07,000 |
| 60% | approximately ₹53,500 | approximately ₹1,60,500 |

These are sensitivity calculations only. They do not select a tier or
authorize a public quote.

### GST treatment for the internal fee view

If applicable, calculate customer-facing gross separately:

```text
CustomerInvoiceGross =
    CollectedFeeExGST × (1 + g)
```

`g` remains blank until professional validation. GST is not included in the
income bar or contribution calculation unless the approved accounting
treatment explicitly requires otherwise.

## Scale and traffic baseline — internal sensitivity

Let:

```text
Restaurants = 500 or 1,000
CeilingOrdersPerRestaurantDay = 50
Utilization = 10%, 25%, 50% or 100%
RequestsPerOrder = 54 normal or 90 heavy

CompletedOrdersPerDay =
    Restaurants × CeilingOrdersPerRestaurantDay × Utilization

RequestsPerDay =
    CompletedOrdersPerDay × RequestsPerOrder

RequestsPer30DayMonth =
    RequestsPerDay × 30
```

The resulting traffic sensitivities are:

| Restaurants | Ceiling utilization | Completed orders/day | Normal requests/day | Normal requests/30d | Heavy requests/day | Heavy requests/30d |
|---:|---:|---:|---:|---:|---:|---:|
| 500 | 10% | 2,500 | 135,000 | 4,050,000 | 225,000 | 6,750,000 |
| 500 | 25% | 6,250 | 337,500 | 10,125,000 | 562,500 | 16,875,000 |
| 500 | 50% | 12,500 | 675,000 | 20,250,000 | 1,125,000 | 33,750,000 |
| 500 | 100% | 25,000 | 1,350,000 | 40,500,000 | 2,250,000 | 67,500,000 |
| 1,000 | 10% | 5,000 | 270,000 | 8,100,000 | 450,000 | 13,500,000 |
| 1,000 | 25% | 12,500 | 675,000 | 20,250,000 | 1,125,000 | 33,750,000 |
| 1,000 | 50% | 25,000 | 1,350,000 | 40,500,000 | 2,250,000 | 67,500,000 |
| 1,000 | 100% | 50,000 | 2,700,000 | 81,000,000 | 4,500,000 | 135,000,000 |

The 50-order ceiling is a hard planning ceiling for this model, not a claim
that each restaurant will achieve it.

## Request-cost and storage-growth sensitivity

The following per-request rates are internal estimates used only to expose
scale risk. They are not Meta, BSP, AI or cloud-provider rates:

| Cost component | Low | Base | High | Classification |
|---|---:|---:|---:|---|
| BABAI compute/network infrastructure | ₹0.003/request | ₹0.010/request | ₹0.030/request | BABAI infrastructure |
| Storage/logging/queue/DB operations | ₹0.002/request | ₹0.010/request | ₹0.020/request | BABAI infrastructure |
| Meta/provider pass-through | ₹0.010/request | ₹0.030/request | ₹0.100/request | Provider cost; pass-through decision open |
| AI inference | ₹0.020/request | ₹0.100/request | ₹0.500/request | AI provider cost |
| Total request-cost sensitivity | ₹0.035/request | ₹0.150/request | ₹0.650/request | Sum for internal planning only |

Per completed order, the request-cost sensitivity is:

| Case | Low | Base | High |
|---|---:|---:|---:|
| Normal 54-request order | ₹1.89 | ₹8.10 | ₹35.10 |
| Heavy 90-request order | ₹3.15 | ₹13.50 | ₹58.50 |

Component view per completed order:

| Request case / component | Low | Base | High |
|---|---:|---:|---:|
| Normal infra compute/network | ₹0.16 | ₹0.54 | ₹1.62 |
| Normal storage/logging/queue/DB | ₹0.11 | ₹0.54 | ₹1.08 |
| Normal Meta/provider pass-through | ₹0.54 | ₹1.62 | ₹5.40 |
| Normal AI | ₹1.08 | ₹5.40 | ₹27.00 |
| Heavy infra compute/network | ₹0.27 | ₹0.90 | ₹2.70 |
| Heavy storage/logging/queue/DB | ₹0.18 | ₹0.90 | ₹1.80 |
| Heavy Meta/provider pass-through | ₹0.90 | ₹2.70 | ₹9.00 |
| Heavy AI | ₹1.80 | ₹9.00 | ₹45.00 |

Payment fees, delivery fees, CAC, onboarding and support are **not** included
in these request costs. They remain separate model buckets.

At 100% ceiling utilization, the estimated monthly request-cost totals are:

| Scale | Request case | Low | Base | High |
|---|---|---:|---:|---:|
| 500 restaurants | Normal | ₹14,17,500 | ₹60,75,000 | ₹2,63,25,000 |
| 500 restaurants | Heavy | ₹23,62,500 | ₹1,01,25,000 | ₹4,38,75,000 |
| 1,000 restaurants | Normal | ₹28,35,000 | ₹1,21,50,000 | ₹5,26,50,000 |
| 1,000 restaurants | Heavy | ₹47,25,000 | ₹2,02,50,000 | ₹8,77,50,000 |

For 10%, 25% and 50% utilization, multiply the 100% totals by 0.10, 0.25
and 0.50 respectively.

Storage and operational-growth formulas:

```text
DurableEventLogStorage =
    RequestsPer30DayMonth × EventLogBytesPerRequest

DatabaseGrowth =
    CompletedOrdersPer30DayMonth × DatabaseBytesPerCompletedOrder

QueueCapacity =
    PeakRequestsPerMinute × QueuePeakMultiplier
```

Provisional storage sensitivities are **2 KB / 8 KB / 20 KB durable event/log
bytes per request** and **50 KB / 150 KB / 500 KB database bytes per completed
order** for low/base/high views. Retention, compression, queue peak
multiplier, indexing and archival policy remain unknowns. At 500 restaurants
and 100% normal traffic, for example, the durable event/log estimate is
approximately 81 GB / 648 GB / 1.62 TB per 30 days before retention and
compression; at 1,000 restaurants it doubles. These are internal scale
sensitivities, not capacity guarantees.

## Cost-bucket separation at scale

Keep these ledgers separate:

| Bucket | Included | Excluded from |
|---|---|---|
| BABAI infrastructure | Compute, network, queue, DB, storage, logs, observability | Meta/provider, AI, payment, delivery, CAC |
| Provider pass-through | Meta/BSP/message-provider fees | BABAI infrastructure margin unless absorbed |
| AI | Model inference and token usage | Provider pass-through unless contractually bundled |
| Payment | Gateway fee, fixed fee, refund/chargeback handling | Request-cost table |
| Delivery | Provider fee and delivery exceptions | MVP baseline; pass-through/open |
| Support | Manoj/Vinay and later support/incident hours | Infrastructure request cost |
| CAC/onboarding | Acquisition spend, setup, menu ingestion and training | Runtime request cost |

## ₹25L+ income trigger sensitivity

The founder packet supplies **₹25,00,000+** as an income trigger but does not
specify whether the unit is monthly or annual. Record both sensitivities and
do not select one:

| Interpretation | Income bar | Equivalent comparison |
|---|---:|---:|
| Monthly sensitivity | ₹25,00,000+/month | ₹3,00,00,000+/year annualized |
| Annual sensitivity | ₹25,00,000+/year | approximately ₹2,08,333/month equivalent |

This is an internal sensitivity, not a tax threshold, legal trigger, revenue
claim or founder-approved operating target. The actual unit remains an
unresolved founder choice.

## Low/base/high interpretation

The first populated model should produce three rows per restaurant:

| View | Cost posture | Required output |
|---|---|---|
| Low-cost | Lower usage, lower support and fewer incidents | `P`, `G`, direct cost, contribution, onboarding payback and break-even count |
| Base | Expected pilot operating range | Same outputs, with measured founder hours and provider invoices |
| High-cost | Higher usage, support, failure/refund and provider burden | Same outputs plus the minimum viable `P` under selected `τ` sensitivities |

No single revenue, margin or break-even conclusion should be published until
the pilot supplies `P`, `G`, actual provider/payment costs, founder hours,
failure/refund outcomes, `T`, and the chosen accounting treatment for `D`.

## Unknowns and professional validation

- Pilot fee/deposit amount, refund rules, billing instrument and end date.
- Whether provider, payment and remediation costs are passed through or
  absorbed by BABAI.
- Actual Meta/BSP, AI, hosting and payment pricing at pilot volume.
- Manoj/Vinay time split and internal opportunity-cost rates.
- Shared tooling and fixed-overhead allocation.
- Customer order GMV, order volume, payment mix and refund/failure rate.
- Contribution-margin target, public pricing and packaging.
- GST registration, rate, input-tax credit, invoice, deposit and revenue
  recognition treatment with CA/CS.
- CAC, sales effort and post-pilot support capacity; this artifact does not
  yet model acquisition economics.

## Track 3 dependency

Track 3 consumes this v0.5 artifact through the proposed metric contract in
[`validation.md`](validation.md), not as a price decision. The candidate
thresholds use the base/high founder-time bands, failure/refund sensitivities
and contribution-margin sensitivities here; they remain pending founder
approval. Track 3 depends on the actual-rate register being populated before
any threshold is treated as a decision:

1. instrumenting the required validation metrics;
2. collecting actual pilot invoices, provider terms and time records;
3. fixing the pilot end date and commercial/deposit treatment;
4. deciding whether payment/provider/refund costs are passed through; and
5. approving the contribution target and GST/accounting treatment.
6. completing the team-defined readiness evidence for materially larger
   onboarding volumes.

Until those inputs exist, this model remains a planning range and unresolved
decision register.
