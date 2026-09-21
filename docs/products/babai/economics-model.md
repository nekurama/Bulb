---
status: partial — internal fee and scale baseline added; all numbers remain provisional and pending founder approval
owner: BABAI Product / BRD
last-reviewed: 2026-09-21
sources:
  - Founder decision packet (2026-09-21; current task input)
  - Founder traffic baseline (2026-09-21; current task input)
  - 2026-09-21 economics model review packet
  - e3e4e855ca0214a5c664c07ec5b6513c560a7261 (product scale economics source)
  - nekurama.babai.research.md (Pricing hypothesis, What remains unvalidated, Success criteria)
  - nekurama.chatgpt.md (historical planning model; explicitly not a forecast)
  - nekurama.raw.chat.json (mappings `4bbdb489-0a0d-45d5-af27-70535c5d4acc`, `04cc446b-3a6d-4c19-adc7-4d94ab17d21b`, `4702681b-d611-4408-af5f-9001d04b6cfa`, `f58ce128-39ed-4015-9be9-5b6135a39f20`, `9fbcd0e1-28ba-4ae7-8b44-39d493d2bb0e`, `cedbd365-e584-4306-a499-86a51184cb83`)
  - docs/products/babai/brd.md
  - docs/products/babai/business-model.md
  - docs/company/finance-tax-compliance.md
  - nekurama.raw.chat.json:L192-L205
  - nekurama.raw.chat.json:L79721-L79820
  - nekurama.babai.research.md:L65-L81
  - nekurama.babai.research.md:L104-L116
  - nekurama.babai.research.md:L145-L163
  - nekurama.chatgpt.md:L3593-L3605
  - nekurama.chatgpt.md:L4546-L4552
  - nekurama.chatgpt.md:L6703-L6749
  - nekurama.chatgpt.md:L8122-L8123
  - nekurama.chatgpt.md:L27589-L27598
  - nekurama.chatgpt.md:L48218-L48228
  - "2026-09-20 ADMIN DECISION PACKET"
  - "2026-09-21 FOUNDER DECISION PACKET"
  - "2026-09-21 FOUNDER ECONOMIC TARGET CLARIFICATION (current task input)"
  - "2026-09-21 ECONOMICS MODEL REVIEW PACKET"
  - "2026-09-21 FOUNDER SCALE/COST BASELINE (current task input)"
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

## Founder scale and cost baseline — internal sensitivity

Let:

```text
Restaurants = 500 or 1,000
CeilingOrdersPerRestaurantDay = 50
ConversionSensitivity = 10%, 25%, 50% or 100%
RequestsPerOrder = 54 normal or 90 heavy

CompletedOrdersPerDay =
    Restaurants × CeilingOrdersPerRestaurantDay × ConversionSensitivity

RequestsPerDay =
    CompletedOrdersPerDay × RequestsPerOrder

RequestsPer30DayMonth =
    RequestsPerDay × 30
```

The resulting traffic sensitivities are:

| Restaurants | WhatsApp conversion of 50-order ceiling | Completed orders/day | Normal requests/day | Normal requests/30d | Heavy requests/day | Heavy requests/30d |
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

The request table is a workload view. For capacity testing, derive mean
RPS from the same inputs and keep the supplied six-hour peak reference
separate from the uniform 24-hour calculation:

```text
mean_rps = requests_per_day / 86,400
busy_rps = 5 × mean_rps
stress_rps = 10 × mean_rps
```

At the 100% ceiling, the derived mean request rates are 15.625 RPS (500
restaurants, normal), 26.042 RPS (500, heavy), 31.250 RPS (1,000, normal),
and 52.083 RPS (1,000, heavy). These are **derived planning estimates**, not
capacity claims. Six-hour peak, P90 and P99 values must remain labelled as
founder-supplied or linearized sensitivities until their distribution is
reconciled and a 15-minute load test is passed.

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

At 100% conversion sensitivity, the estimated monthly request-cost totals are:

| Scale | Request case | Low | Base | High |
|---|---|---:|---:|---:|
| 500 restaurants | Normal | ₹14,17,500 | ₹60,75,000 | ₹2,63,25,000 |
| 500 restaurants | Heavy | ₹23,62,500 | ₹1,01,25,000 | ₹4,38,75,000 |
| 1,000 restaurants | Normal | ₹28,35,000 | ₹1,21,50,000 | ₹5,26,50,000 |
| 1,000 restaurants | Heavy | ₹47,25,000 | ₹2,02,50,000 | ₹8,77,50,000 |

For 10%, 25% and 50% conversion sensitivity, multiply the 100% totals by 0.10, 0.25
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

Contribution views:

```text
cash_cost
  = C_hosting + C_tooling + C_provider + C_retry_cash
  + C_payment_sub + C_refund_credit + C_onb_cash

cash_contribution
  = S_net_revenue - cash_cost

economic_cost
  = cash_cost + (h_support × V) + (h_fail × V) + ((h_onb × V) / L)
    # the last term is the steady-state amortized onboarding effort

economic_contribution
  = S_net_revenue - economic_cost

economic_contribution_rate
  = economic_contribution / S_net_revenue
```

## Income-bar and total-expenditure margin

The margin view is an income bar against **total expenditure**, not a
variable-cost-only view:

```text
total_expenditure
  = cash_cost
  + founder/support/onboarding economic cost
  + absorbed failure, refund, credit and remediation cost
  + any other attributable pilot expenditure

contribution_amount
  = recognized_income - total_expenditure

contribution_margin
  = contribution_amount / recognized_income
```

`recognized_income` is the pilot or subscription income treated as revenue
under the confirmed accounting treatment. A separately collected GST
component is not income until qualified finance advice says otherwise. A
blank, unsupported or unallocated expenditure line is an unknown, not zero.
No contribution percentage is approved by this artifact.

The price decision should therefore be derived by testing the signed pilot or
continuation amount against the measured total-expenditure ledger and a
founder-approved contribution case. The model does not select plans or
automatic increases.

Merchant-order payment cost is shown separately:

```text
BABAI pass-through order cost = B × p_order
BABAI contribution impact     = 0 unless BABAI contractually absorbs it
```

This prevents customer funds and merchant payment fees from being mistaken
for BABAI revenue or an unpriced BABAI subsidy.

## Economics review packet v0.4 — telemetry, scale and price experiments

This review packet extends the 90-day model with monthly operating telemetry
and scale sensitivities. Every value in this section is a **planning input or
derived estimate**, not an external quote, observed BABAI result, approved
price, forecast or legal/tax conclusion. Replace the inputs with pilot
telemetry, invoices, provider exports, payment records and time logs.
The field research explicitly calls for actual Meta, AI, infrastructure,
payment, onboarding, support and failure/retry records
(`nekurama.babai.research.md:L145-L163`); the staged onboarding boundary and
restaurant-owned money flow remain anchored at
(`nekurama.raw.chat.json:L192-L205`, `L79721-L79820`).

### Founder scale and cost baseline

This section records the **NEW SCALE/COST BASELINE** supplied by the founder.
It is an internal planning envelope, not an observed production result, vendor
quote, capacity guarantee, price list or finalized infrastructure design.
Where a value is calculated from a founder input, it is labelled **derived
planning estimate**. Where a rate, allocation or failure frequency is absent,
it remains **unknown** rather than being treated as zero.

#### Traffic primitives

| Input | Value | Label / treatment |
|---|---:|---|
| Conversational flows per completed order | 6 | **Founder input** |
| Gateway hits per flow | 9 | **Founder input** |
| Average requests per completed order | `6 × 9 = 54` | **Founder input**; arithmetic check |
| Heavy-case requests per order | 90 | **Founder input** |
| Completed-order ceiling per restaurant per day | 50 | **Founder input; hard ceiling** |
| Average requests per restaurant per day at ceiling | `50 × 54 = 2,700` | **Derived planning estimate** |
| Heavy-case requests per restaurant per day at ceiling | `50 × 90 = 4,500` | **Derived planning estimate** |

The request counts above are workload units. They are not automatically
billable Meta messages, AI calls, database operations or payment-gateway
charges. The ledger must classify each request before assigning a provider or
AI rate.

#### 500/1,000-restaurant envelope

The 1,000-restaurant row is the supplied reference envelope. The 500-restaurant
row is exactly one half of the supplied 1,000-restaurant traffic totals, as
directed by the founder. RPS values shown for the 500-restaurant row are
derived by halving the supplied 1,000-restaurant planning figures.

| Restaurant cohort | Completed orders/day | Average requests/day | Heavy-case requests/day | 24h average | Six peak hours | P90 | P99 | Label |
|---:|---:|---:|---:|---:|---:|---:|---:|---|
| 500 | 25,000 | 1.35M | 2.25M | ~16 RPS | ~47 RPS | 100–125 RPS | 250–375 RPS | **Derived planning estimate; half of supplied 1,000 row** |
| 1,000 | 50,000 | 2.7M | 4.5M | ~31 RPS | ~94 RPS | 200–250 RPS | 500–750 RPS | **Founder input** for supplied reference envelope, except request totals derived from primitives |

The supplied “six peak hours ~94 RPS” figure is retained as a founder input;
it is not recomputed from uniform distribution of the 24-hour average. The
relationship between the six-hour peak definition and the 24-hour average is
an **unknown reconciliation decision**, not a reason to replace the founder
figure with a different estimate.

#### WhatsApp conversion sensitivity

The conversion cases below are sensitivities of the 50 completed-order
ceiling, not a claim that any conversion rate has been observed. Requests and
RPS are scaled linearly only for planning. P90/P99 values are likewise
linearized planning sensitivities from the supplied full-envelope figures;
they are not capacity targets.

| Cohort | WhatsApp conversion of 50-order ceiling | Completed orders/day | Average requests/day | Heavy-case requests/day | 24h average | Six peak hours | P90 sensitivity | P99 sensitivity |
|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| 500 | 10% | 2,500 | 135,000 | 225,000 | ~3.9 RPS | ~4.7 RPS | 10–12.5 RPS | 25–37.5 RPS |
| 500 | 25% | 6,250 | 337,500 | 562,500 | ~7.8 RPS | ~11.8 RPS | 25–31.25 RPS | 62.5–93.75 RPS |
| 500 | 50% | 12,500 | 675,000 | 1.125M | ~15.6 RPS | ~23.5 RPS | 50–62.5 RPS | 125–187.5 RPS |
| 500 | 100% | 25,000 | 1.35M | 2.25M | ~15.6 RPS | ~47 RPS | 100–125 RPS | 250–375 RPS |
| 1,000 | 10% | 5,000 | 270,000 | 450,000 | ~7.8 RPS | ~9.4 RPS | 20–25 RPS | 50–75 RPS |
| 1,000 | 25% | 12,500 | 675,000 | 1.125M | ~15.6 RPS | ~23.5 RPS | 50–62.5 RPS | 125–187.5 RPS |
| 1,000 | 50% | 25,000 | 1.35M | 2.25M | ~15.6 RPS | ~47 RPS | 100–125 RPS | 250–375 RPS |
| 1,000 | 100% | 50,000 | 2.7M | 4.5M | ~31 RPS | ~94 RPS | 200–250 RPS | 500–750 RPS |

The lower-conversion rows are **derived planning estimates**. The supplied
six-peak figure is retained at 100% and scaled linearly for sensitivity; its
distribution convention must be reconciled before infrastructure sizing.

#### Cost stack and unit formulas

The cost stack is deliberately separated so infrastructure, provider/Meta,
AI, storage/logging/queue/DB, payment, delivery, support, CAC and onboarding
cannot be hidden in one blended number.

| Cost bucket | Per-request / per-order / per-restaurant treatment | Low/base/high view | Status |
|---|---|---|---|
| Infrastructure: compute, network and observability | Fixed monthly allocation plus any usage tier; divide by active restaurants and completed orders | Existing aggregate annual planning range ₹20,000 / ₹40,000 / ₹52,000; sub-allocation at scale unknown | **Planning estimate; not a vendor quote** |
| Provider / Meta / BSP | `billable_provider_units × verified category rate + BSP add-on`; do not equate all 54/90 workload requests to billable units | Existing message/rate table remains low/base/high; actual billable classification and current rate card unknown | **Research pointer + unknown** |
| AI/model usage | `request or token units × model rate + media/jobs + retry reserve`; record advisory and AI-heavy modes separately | Advisory ₹185.92 and AI-heavy ₹1,992.60 per restaurant/month are existing planning estimates | **Planning estimate; model/rates unknown** |
| Storage, logging, queue and database | Bytes/events/jobs/records retained × verified unit price, plus fixed allocation; report separately from compute | Low/base/high values unknown | **Unknown** |
| Subscription payment | `recognized_income × p_sub`; customer-order payment is separate | 0% / ~2% / 3% planning cases; contract and GST treatment unknown | **Research pointer / planning input** |
| Delivery | `completed_orders × provider fee` only if BABAI absorbs it; otherwise restaurant pass-through | Low/base/high unknown; delivery is not an MVP dependency | **Unknown / pass-through by default** |
| Support and incident recovery | `minutes / 60 × founder_value_per_hour`; add cash support or staffing when known | ₹500 / ₹2,000 / ₹10,000 per restaurant/month from 60 / 120 / 300 planning minutes | **Planning estimate; time logs required** |
| CAC | `paid acquisition + travel/enablement + acquisition hours × founder value` | ₹4,000 cash / ₹7,000 economic reference / ₹10,000 stress case | **Planning estimate; actual CAC unknown** |
| Onboarding | `direct cash + onboarding minutes / 60 × founder_value_per_hour`; amortization is a separate modelling choice | Low/base/high economic effort is ₹1,000 / ₹4,000 / ₹16,000 before direct cash | **Planning estimate; receipts/time logs required** |

The existing ₹20,000/₹40,000/₹52,000 infrastructure range is an aggregate
planning estimate, not a decision to combine compute, storage, logging, queue
or DB. No cloud, database, queue, logging, provider, BSP, model or topology
choice is finalized by this document.

Use these unit formulas for the ledger:

```text
orders_month         = completed_orders_per_day × calendar_days
avg_requests_order   = 54
heavy_requests_order = 90

variable_cost_order_avg
  = 54 × provider_cost_per_request
  + 54 × AI_cost_per_request
  + payment_cost_absorbed_per_order
  + delivery_cost_absorbed_per_order
  + storage_logging_queue_DB_cost_per_order

variable_cost_order_heavy
  = 90 × provider_cost_per_request
  + 90 × AI_cost_per_request
  + payment_cost_absorbed_per_order
  + delivery_cost_absorbed_per_order
  + storage_logging_queue_DB_cost_per_order

cost_per_restaurant_month
  = fixed_monthly_cost / active_restaurants
  + orders_month × variable_cost_order
  + support_and_incident_cost
  + onboarding_amortization
  + CAC_amortization
```

`provider_cost_per_request`, `AI_cost_per_request`,
`storage_logging_queue_DB_cost_per_order`, absorbed payment/delivery cost,
calendar-day divisor, incident rate and CAC amortization period are
**unknown** until measured or contracted. Customer-order payment and delivery
remain pass-through unless an approved agreement says BABAI absorbs them.

#### Prior ₹25L income-trigger wording — remains unresolved

The earlier founder wording described progress through **500 restaurants or a
₹25L+ income trigger**. The unit of that income trigger was not supplied;
monthly and annual interpretations below remain explicit sensitivities, not an
invented decision. This is **not** the clarified ₹25L monthly operating-profit
target added below. `c` is the WhatsApp conversion sensitivity and `S` is the
recognized income per active restaurant in the selected unit. Conversion is a
traffic sensitivity, not an assumption that the number of active restaurants
changes.

```text
cohort_income_month = active_restaurants × S_month
cohort_income_year  = active_restaurants × S_year
order_linked_income = orders_per_day × calendar_days × S_order
restaurants_trigger = ₹25L / S_(selected_unit)
```

| WhatsApp conversion | Completed orders/day at 500 restaurants | Required `S` if ₹25L is monthly income | Required `S` if ₹25L is annual income | If income is order-linked |
|---:|---:|---:|---:|---|
| 10% | 2,500 | ₹5,000 / active restaurant / month | ₹5,000 / active restaurant / year | `₹25L / (2,500 × calendar_days)` |
| 25% | 6,250 | ₹5,000 / active restaurant / month | ₹5,000 / active restaurant / year | `₹25L / (6,250 × calendar_days)` |
| 50% | 12,500 | ₹5,000 / active restaurant / month | ₹5,000 / active restaurant / year | `₹25L / (12,500 × calendar_days)` |
| 100% | 25,000 | ₹5,000 / active restaurant / month | ₹5,000 / active restaurant / year | `₹25L / (25,000 × calendar_days)` |

If the prior trigger is monthly, ₹25L/month is ₹3Cr/year only under a
sustained 12-month run-rate assumption. If it is annual, the equivalent
monthly run-rate is approximately ₹2.083L/month. Both are **derived planning
sensitivities**; the prior trigger still needs a decision on accounting
income unit and recognition treatment, active-restaurant count and any
order-linked pricing rule. `calendar_days` and `S_order` are **unknown**.

#### Founder economic target clarification — internal planning trigger

The current founder clarification defines a separate internal planning
trigger: **₹25,00,000 monthly operating profit after non-founder operating
costs**. It is a business target for scenario work, **not a forecast,
guarantee, approved price, approved margin, or pilot success threshold**. The
full-time transition is a separate founder compensation/transition cost:
This clarification is recorded from the current founder packet and scale
baseline; the product boundary and direct merchant-money flow remain anchored
in `nekurama.raw.chat.json:L192-L205` and `L79721-L79820`, and the required
cost evidence remains the field-research list at
`nekurama.babai.research.md:L145-L163`.

| Case | Founder transition cost per month | Treatment |
|---|---:|---|
| **A — one founder full-time** | **₹5,00,000** | All-in salary plus operational cost; internal planning assumption |
| **B — both founders full-time** | **₹10,00,000** | All-in salary plus operational cost; internal planning assumption unless later changed |

The required formula is:

```text
monthly_revenue_target
  = non_founder_operating_expenditure
  + founder_transition_cost
  + ₹25,00,000 target operating profit
```

When subscription collection and BABAI refund/credit reserves are modelled as
revenue-linked costs, the equivalent solved form is:

```text
R = O_non_founder_fixed + F_transition + ₹25,00,000
    + R × (p_sub + q_refund)

R = (O_non_founder_fixed + F_transition + ₹25,00,000)
    / (1 - p_sub - q_refund)

business_operating_profit
  = recognized BABAI revenue
  - non-founder operating expenditure
  - founder transition cost
```

The target case sets `business_operating_profit = ₹25,00,000/month`. This is
separate from:

```text
cash_contribution
economic_contribution
economic_contribution_rate
founder compensation / transition cost
```

The target is **not** a percentage contribution margin. Customer-order GMV,
merchant payment fees, restaurant value/ROI and pass-through delivery costs
remain outside BABAI revenue unless an approved contract says otherwise.

##### Quantified planning basis for the scenario tables

The tables use the existing **base advisory** planning reference only to make
the arithmetic reproducible. It is not approved pricing or a forecast. The
quantified non-founder cost floor includes the existing scale-curve shared
hosting/tooling allocation, Meta/provider/retry cost, advisory AI usage and
the existing **cash CAC** reference amortized over the existing 12-month
planning lifetime. Revenue-linked collection and refund reserves use the
existing 2% + 2% planning inputs.

```text
O_non_founder_fixed(N)
  = ₹70,000 / 12
  + N × (
      ₹170.41 Meta
      + ₹318.75 provider/BSP
      + ₹14.67 retry reserve
      + ₹185.92 advisory AI
      + ₹4,000 / 12 cash CAC amortization
    )
```

| Cohort | `O_non_founder_fixed(N)` before revenue-linked costs | Revenue-linked planning costs | Scenario treatment |
|---:|---:|---:|---|
| 500 restaurants | **₹5,17,375/month** | `p_sub + q_refund = 2% + 2% = 4% of R` | Quantified planning floor; rounded display |
| 1,000 restaurants | **₹10,28,917/month** | `p_sub + q_refund = 2% + 2% = 4% of R` | Quantified planning floor; rounded display |

The floor does **not** silently price unknown storage/logging/queue/DB,
delivery absorbed by BABAI, direct onboarding cash, staffed non-founder
support, provider minimums/FX, or model/rate changes. Those remain separate
cost buckets and must be added to `O_non_founder_fixed` when actual invoices,
exports or approved planning rates exist. Founder onboarding and support time
remain economic-cost ledger fields; they are not silently relabelled as
founder salary or folded into the transition cost.

For auditability, the existing base economic-cost references remain visible:
120 recurring support minutes are ₹2,000 of founder opportunity cost per
restaurant/month, 240 onboarding minutes amortized over 12 months are ₹333.33
per restaurant/month, and economic CAC is ₹7,000 per acquired restaurant
against the ₹4,000 cash-CAC reference used in the floor. These are not
additional founder-transition costs and are not silently treated as
non-founder cash expenditure.

##### Case A — one founder full-time

| Restaurants | WhatsApp conversion of 50-order ceiling | Completed orders/day | `O_non_founder_fixed` | Founder transition | Target operating profit | Required monthly revenue `R` | Implied price / active restaurant / month | Support-capacity implication |
|---:|---:|---:|---:|---:|---:|---:|---:|---|
| 500 | 10% | 2,500 | ₹5,17,375 | ₹5,00,000 | ₹25,00,000 | **₹36,63,932** | **₹7,328** | 1,000 base support h/mo; 500–2,500 h/mo at low–high planning bands |
| 500 | 25% | 6,250 | ₹5,17,375 | ₹5,00,000 | ₹25,00,000 | **₹36,63,932** | **₹7,328** | Same support load; conversion changes traffic, not subscription target |
| 500 | 50% | 12,500 | ₹5,17,375 | ₹5,00,000 | ₹25,00,000 | **₹36,63,932** | **₹7,328** | Same support load; conversion changes traffic, not subscription target |
| 500 | 100% | 25,000 | ₹5,17,375 | ₹5,00,000 | ₹25,00,000 | **₹36,63,932** | **₹7,328** | Same support load; 25,000 orders/day is the full planning envelope |
| 1,000 | 10% | 5,000 | ₹10,28,917 | ₹5,00,000 | ₹25,00,000 | **₹41,96,789** | **₹4,197** | 2,000 base support h/mo; 1,000–5,000 h/mo at low–high planning bands |
| 1,000 | 25% | 12,500 | ₹10,28,917 | ₹5,00,000 | ₹25,00,000 | **₹41,96,789** | **₹4,197** | Same support load; conversion changes traffic, not subscription target |
| 1,000 | 50% | 25,000 | ₹10,28,917 | ₹5,00,000 | ₹25,00,000 | **₹41,96,789** | **₹4,197** | Same support load; conversion changes traffic, not subscription target |
| 1,000 | 100% | 50,000 | ₹10,28,917 | ₹5,00,000 | ₹25,00,000 | **₹41,96,789** | **₹4,197** | Same support load; 50,000 orders/day is the full planning envelope |

##### Case B — both founders full-time

| Restaurants | WhatsApp conversion of 50-order ceiling | Completed orders/day | `O_non_founder_fixed` | Founder transition | Target operating profit | Required monthly revenue `R` | Implied price / active restaurant / month | Support-capacity implication |
|---:|---:|---:|---:|---:|---:|---:|---:|---|
| 500 | 10% | 2,500 | ₹5,17,375 | ₹10,00,000 | ₹25,00,000 | **₹41,84,766** | **₹8,370** | 1,000 base support h/mo; 500–2,500 h/mo at low–high planning bands |
| 500 | 25% | 6,250 | ₹5,17,375 | ₹10,00,000 | ₹25,00,000 | **₹41,84,766** | **₹8,370** | Same support load; conversion changes traffic, not subscription target |
| 500 | 50% | 12,500 | ₹5,17,375 | ₹10,00,000 | ₹25,00,000 | **₹41,84,766** | **₹8,370** | Same support load; conversion changes traffic, not subscription target |
| 500 | 100% | 25,000 | ₹5,17,375 | ₹10,00,000 | ₹25,00,000 | **₹41,84,766** | **₹8,370** | Same support load; 25,000 orders/day is the full planning envelope |
| 1,000 | 10% | 5,000 | ₹10,28,917 | ₹10,00,000 | ₹25,00,000 | **₹47,17,622** | **₹4,718** | 2,000 base support h/mo; 1,000–5,000 h/mo at low–high planning bands |
| 1,000 | 25% | 12,500 | ₹10,28,917 | ₹10,00,000 | ₹25,00,000 | **₹47,17,622** | **₹4,718** | Same support load; conversion changes traffic, not subscription target |
| 1,000 | 50% | 25,000 | ₹10,28,917 | ₹10,00,000 | ₹25,00,000 | **₹47,17,622** | **₹4,718** | Same support load; conversion changes traffic, not subscription target |
| 1,000 | 100% | 50,000 | ₹10,28,917 | ₹10,00,000 | ₹25,00,000 | **₹47,17,622** | **₹4,718** | Same support load; 50,000 orders/day is the full planning envelope |

The revenue and price cells are repeated across conversion sensitivities
because this table assumes subscription revenue per active restaurant. If an
approved order-linked charge is introduced, use the separate
`order_linked_income` formula above and do not mix it into the subscription
price column.

##### Support-capacity implication

At the existing base planning input of **120 recurring support minutes per
restaurant/month**, 500 restaurants require 60,000 minutes / **1,000
support-hours per month** and 1,000 restaurants require 120,000 minutes /
**2,000 support-hours per month**. The low/high 60/300-minute bands produce
500–2,500 hours and 1,000–5,000 hours respectively. These are workload
implications, not staffing commitments or a claim that the founders can
provide the service. Any 500+ restaurant scenario is therefore an explicit
**automation/non-founder-staffing trigger**: expansion must hold until
automation, provider escalation and staffed support capacity are designed,
costed and evidenced.

The existing founder-only operating guardrail is 10 planned founder-hours per
week and a 14-hour combined hard cap. Using `52 / 12` weeks per month, that
is approximately 43.3 planned hours and 60.7 hard-cap hours per month. Base
support at 500 restaurants is therefore about 23× the planned monthly
founder envelope; at 1,000 it is about 46×. Non-founder support staffing,
automation, provider escalation and a revised service design are required
before treating either cohort as operationally admissible. Their rates and
headcount are **unknown**, so they are not hidden inside the revenue output.
[Capacity source: `docs/products/babai/architecture-cost-options.md`,
“Founder-only support operations”.]

#### Support and incident load at scale

The support minutes below reuse the existing low/base/high planning inputs.
They show capacity exposure, not staffing commitments. For an incident rate
`i` that is still unknown:

```text
incidents_per_day = completed_orders_per_day × i
```

| Cohort at 100% ceiling | Low recurring support | Base recurring support | High recurring support | Incident formula |
|---:|---:|---:|---:|---|
| 500 restaurants | 30,000 min / 500 h per month | 60,000 min / 1,000 h per month | 150,000 min / 2,500 h per month | `25,000 × i` incidents/day |
| 1,000 restaurants | 60,000 min / 1,000 h per month | 120,000 min / 2,000 h per month | 300,000 min / 5,000 h per month | `50,000 × i` incidents/day |

`i`, support queue arrival rate, severity mix, recovery time, takeover rate
and staffing capacity are **unknown**. A repeated support-ceiling breach or
unresolved customer-impacting incident remains an expansion hold regardless
of request throughput.

#### Stage capacity references

These references connect the scale baseline to the staged validation plan. They
do not authorize scale or select infrastructure:

| Stage | Capacity metrics to record | Decision status |
|---|---|---|
| Stage 0 | Flow count/order, gateway hits/order, average/heavy request units, order completion, request latency/error/retry, support minutes, incidents, and cost-category attribution for one business | **Reference metrics; no scale threshold** |
| Stage 1 | Per-restaurant daily orders, 10/25/50/100% conversion case, actual request classification, P90/P99 observations, provider/AI/storage/DB/logging/queue spend, support and incident load, and income versus total expenditure | **Pilot evidence; thresholds proposed/open** |
| Stage 2 | Readiness evidence against the 500-restaurant goal, the supplied 1,000-restaurant reference envelope, conversion sensitivities, support/incident capacity and ₹25L unit sensitivity | **Proposed gate; infrastructure choices remain open** |

### Top telemetry metric: support minutes per restaurant per month

The lead operating metric is recurring **support minutes per restaurant per
month**. It must be reported as a total and as separate categories so a falling
total cannot hide a takeover or recovery problem:

| Category | What counts | Low planning input | Base planning input | High planning input |
|---|---|---:|---:|---:|
| Onboarding (one-time) | Menu/configuration, training and launch assistance; not part of recurring support | 120 min | 240 min | 480 min |
| Planned | Scheduled check-ins, configuration and proactive review | 15 min/mo | 30 min/mo | 60 min/mo |
| Unplanned | Questions, ad hoc fixes and non-incident help | 15 min/mo | 30 min/mo | 90 min/mo |
| Recovery | Failed messages, data correction, retries and incident recovery | 10 min/mo | 30 min/mo | 60 min/mo |
| Takeover | Founder intervention in a live customer/staff workflow | 20 min/mo | 30 min/mo | 90 min/mo |
| **Recurring support total** | `planned + unplanned + recovery + takeover` | **60 min/mo** | **120 min/mo** | **300 min/mo** |
| **Ceiling** | Hard operating limit before an expansion hold | **120 min/mo** | **240 min/mo** | **360 min/mo** |

The telemetry contract is:

```text
support_minutes_per_restaurant_month
  = planned + unplanned + recovery + takeover
support_minutes_90_day_total
  = onboarding + sum(monthly recurring support)
support_ceiling_breach
  = support_minutes_per_restaurant_month > ceiling
founder_support_economic_cost
  = support_minutes_per_restaurant_month / 60 × founder_value_per_hour
```

Onboarding is retained as a separate one-time field. Report median, p90 and
ceiling-breach count by restaurant and month. A support total without all four
recurring categories is incomplete and remains **unknown**, not zero.

### Explicit AI economics

AI cost must be recorded by restaurant and month, not buried in a generic
provider line. The following are internal rate placeholders with no external
quote:

| AI input | Planning rate |
|---|---:|
| Input tokens | ₹0.10 / 1,000 tokens |
| Output tokens | ₹0.30 / 1,000 tokens |
| Embeddings | ₹0.05 / 1,000 tokens |
| Speech | ₹1.00 / minute |
| Vision | ₹0.50 / image or equivalent item |
| Background job | ₹0.20 / job |

| Mode | Model/routing assumption | Conversations/mo | Turns/conversation | Input tokens/turn | Output tokens/turn | Embedding tokens/mo | Speech min/mo | Vision items/mo | Jobs/mo | Retry |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| Advisory | Small/general model; larger fallback only for exceptions | 300 | 4 | 600 | 250 | 50,000 | 5 | 10 | 30 | 3% |
| AI-heavy | Larger reasoning model on most turns plus richer jobs/media | 1,000 | 8 | 900 | 400 | 300,000 | 60 | 100 | 200 | 8% |

```text
AI_cost
  = ((conversations × turns × input_tokens_per_turn / 1,000)
      × input_rate)
  + ((conversations × turns × output_tokens_per_turn / 1,000)
      × output_rate)
  + (embedding_tokens / 1,000 × embedding_rate)
  + (speech_minutes × speech_rate)
  + (vision_items × vision_rate)
  + (background_jobs × job_rate)
AI_cost_with_retries
  = AI_cost × (1 + retry_rate)
```

| Mode | Token cost | Embeddings | Speech | Vision | Jobs | Retry reserve | AI cost / restaurant / month |
|---|---:|---:|---:|---:|---:|---:|---:|
| Advisory | ₹162.00 | ₹2.50 | ₹5.00 | ₹5.00 | ₹6.00 | ₹5.42 | **₹185.92** |
| AI-heavy | ₹1,680.00 | ₹15.00 | ₹60.00 | ₹50.00 | ₹40.00 | ₹147.60 | **₹1,992.60** |

The AI-heavy planning delta is **₹1,806.69 per restaurant per month**. The
ledger must additionally record model identifier/version, prompt or workflow
type, input/output token counts, embedding volume, speech/vision units,
background jobs, retry count and failed-job cost. Unknown model or unit rates
must not be treated as zero.

### BABAI SaaS economics versus restaurant value/ROI

BABAI contribution and restaurant value are separate decisions:

```text
BABAI_economic_contribution
  = BABAI recognized subscription income
  - BABAI cash cost
  - founder/support/onboarding economic cost

restaurant_monthly_value
  = avoided commission or channel cost
  + staff time saved × restaurant labour value
  + error/recovery cost avoided
  + incremental gross profit
  - restaurant-side provider/payment cost

max_rational_BABAI_price
  = validated restaurant_monthly_value × value_capture_factor
```

The following is an internal value-sensitivity illustration only. It does not
claim that restaurants currently pay the stated rates or receive the stated
benefit.

| Restaurant value case | Monthly direct-order GMV | Avoided channel rate | Staff hours saved × value | Error cost avoided | Incremental gross profit | Restaurant-side provider cost | Net monthly restaurant value | Max rational price at 50% capture |
|---|---:|---:|---:|---:|---:|---:|---:|---:|
| Low | ₹75,000 | 10% | ₹600 | ₹500 | ₹0 | ₹500 | **₹8,100** | **₹4,050** |
| Base | ₹1,50,000 | 15% | ₹1,200 | ₹1,500 | ₹1,500 | ₹1,000 | **₹25,700** | **₹12,850** |
| High | ₹3,00,000 | 20% | ₹2,400 | ₹4,000 | ₹5,000 | ₹3,000 | **₹68,400** | **₹34,200** |

The value-capture factor, GMV, avoided rate, staff value and incremental
profit are all planning inputs. The maximum rational price is a customer-value
ceiling, not willingness-to-pay evidence and not an authorization to charge
that amount. The paid pilot must measure the restaurant baseline separately
from BABAI's own cost and contribution. The separation follows the repository's
direct-order and commission-value hypothesis
(`nekurama.babai.research.md:L24-L36`, `L56-L63`).

### Scale curve: advisory reference case

This curve uses `P = ₹4,999/month` only as the middle pricing experiment
reference, not as an approved package. It assumes the base provider/Meta
inputs, advisory AI mode, 120 recurring support minutes per restaurant/month,
₹1,000 founder-value per hour, 240 onboarding minutes amortized over 12 months,
₹70,000 annual shared hosting/tooling, 2% subscription collection, 2% refund
reserve, 8.33% monthly churn (12-month planning lifetime), and `₹7,000`
economic CAC. The scale curve is arithmetic sensitivity, not a forecast.

```text
base_cash_variable_per_restaurant
  = Meta ₹170.41 + provider ₹318.75 + retry ₹14.67
  + advisory_AI ₹185.92 + collection/refund (4% × ₹4,999)
  = ₹889.80
shared_cost_per_restaurant = ₹70,000 / 12 / N
founder_support_per_restaurant = 120 / 60 × ₹1,000 = ₹2,000
onboarding_amortization = 240 / 60 × ₹1,000 / 12 = ₹333.33
economic_contribution_per_restaurant
  = ₹4,999 - cash_cost_per_restaurant
  - founder_support_per_restaurant - onboarding_amortization
LTV = positive_monthly_economic_contribution × 12
payback_months = economic_CAC / positive_monthly_economic_contribution
```

| N restaurants | Revenue/mo | Cash cost/mo | Founder support cost/mo | Economic contribution / restaurant / mo | Total contribution / cohort / mo | Support min / restaurant / mo | Economic CAC / restaurant | LTV / restaurant | Payback |
|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| 1 | ₹4,999 | ₹6,723 | ₹2,000 | -₹4,057 | -₹4,057 | 120 | ₹7,000 | N/M | N/M |
| 5 | ₹24,995 | ₹10,282 | ₹10,000 | ₹609 | ₹3,046 | 120 | ₹7,000 | ₹7,311 | 11.5 mo |
| 10 | ₹49,990 | ₹14,730 | ₹20,000 | ₹1,193 | ₹11,926 | 120 | ₹7,000 | ₹14,311 | 5.9 mo |
| 25 | ₹1,24,975 | ₹28,076 | ₹50,000 | ₹1,543 | ₹38,566 | 120 | ₹7,000 | ₹18,511 | 4.5 mo |
| 50 | ₹2,49,950 | ₹50,319 | ₹1,00,000 | ₹1,659 | ₹82,964 | 120 | ₹7,000 | ₹19,911 | 4.2 mo |
| 100 | ₹4,99,900 | ₹94,804 | ₹2,00,000 | ₹1,718 | ₹1,71,762 | 120 | ₹7,000 | ₹20,611 | 4.1 mo |
| 250 | ₹12,49,750 | ₹2,28,261 | ₹5,00,000 | ₹1,753 | ₹4,38,156 | 120 | ₹7,000 | ₹21,031 | 4.0 mo |
| 500 | ₹24,99,500 | ₹4,50,689 | ₹10,00,000 | ₹1,764 | ₹8,82,144 | 120 | ₹7,000 | ₹21,171 | 4.0 mo |

At `N ≥ 100`, the table's founder-support column represents 200,000 or more
economic rupees per month and cannot be treated as free founder capacity.
Staffing, management overhead, support tooling and service-level costs become
new unknowns and must be added before relying on those rows.

### Pricing experiments, CAC and stress cases

The three historical price hypotheses are retained as experiments only. At
`N=10`, with base provider inputs and 120 support minutes per month:

| Monthly price hypothesis | Advisory cash contribution | Advisory economic contribution | AI-heavy economic contribution | Planning interpretation |
|---:|---:|---:|---:|---|
| ₹999 | -₹314 | -₹2,647 | -₹4,454 | Kill candidate after founder time |
| ₹2,499 | ₹1,126 | -₹1,207 | -₹3,014 | Cash-positive illusion; fails economic contribution |
| ₹4,999 | ₹3,526 | ₹1,193 | -₹614 | Clears advisory case only; AI-heavy mode remains negative |

CAC is a separate acquisition-effort ledger:

```text
CAC_cash = paid acquisition, sales, travel and enablement cash
CAC_economic = CAC_cash + acquisition founder hours × founder value/hour
LTV = positive monthly economic contribution / monthly churn
payback_months = CAC_economic / positive monthly economic contribution
```

The reference case uses `CAC_cash = ₹4,000`, three founder acquisition hours at
₹1,000/hour, and 8.33% monthly churn. Actual CAC, churn, retention and
payback are **unknown** until measured.

| Case | Inputs | Outcome / proposed decision |
|---|---|---|
| Kill stress | `N=10`, `P=₹2,499`, AI-heavy, 240 support minutes/month, `CAC_economic=₹10,000` | Economic contribution is below zero; hold acquisition and reduce AI/support scope |
| Base reference | `N=10`, `P=₹4,999`, advisory, 120 support minutes/month, `CAC_economic=₹7,000` | ₹1,193 monthly economic contribution; payback about 5.9 months |
| Favorable | `N=50`, `P=₹4,999`, advisory, 60 support minutes/month, `CAC_economic=₹7,000` | Approximately ₹2,659 monthly economic contribution; payback about 2.6 months |

Proposed internal kill controls are negative base economic contribution for two
consecutive measured months, support above the hard ceiling, AI-heavy routing
becoming the default without a pricing decision, or CAC payback above 12
months after the minimum retention sample. These are proposed review controls,
not approved refunds, price changes or accounting treatment.

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

## Legacy ₹25L+ income trigger sensitivity — unresolved cross-check

The founder packet supplies **₹25,00,000+** as an earlier income trigger but
does not specify whether the unit is monthly or annual. Record both
sensitivities and do not select one. This is the unresolved legacy trigger,
not the clarified monthly operating-profit target above. For active restaurant
count `N` and traffic sensitivity `c`, keep traffic conversion separate from
paid subscription conversion:

```text
required_unit_income = income_trigger / (N × c)
```

| Restaurants | Sensitivity | Converting units | If ₹25L is monthly | If ₹25L is annual (monthly equivalent) |
|---:|---:|---:|---:|---:|
| 500 | 10% | 50 | ₹50,000/unit/month | ₹4,167/unit/month |
| 500 | 25% | 125 | ₹20,000/unit/month | ₹1,667/unit/month |
| 500 | 50% | 250 | ₹10,000/unit/month | ₹833/unit/month |
| 500 | 100% | 500 | ₹5,000/unit/month | ₹417/unit/month |
| 1,000 | 10% | 100 | ₹25,000/unit/month | ₹2,083/unit/month |
| 1,000 | 25% | 250 | ₹10,000/unit/month | ₹1,000/unit/month |
| 1,000 | 50% | 500 | ₹5,000/unit/month | ₹417/unit/month |
| 1,000 | 100% | 1,000 | ₹2,500/unit/month | ₹208/unit/month |

If the trigger is monthly, ₹25L/month is ₹3Cr/year only under a sustained
12-month run-rate assumption. If it is annual, the equivalent monthly
run-rate is approximately ₹2.083L/month. This is an internal sensitivity, not
a tax threshold, legal trigger, revenue claim or founder-approved operating
target. The actual unit remains an unresolved founder choice.

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
