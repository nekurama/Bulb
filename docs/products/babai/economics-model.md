---
status: partial — finalized Track 2 planning bands; actual rates and founder approval pending
owner: BABAI Product / BRD
last-reviewed: 2026-09-20
sources:
  - Admin decision packet (2026-09-20; current task input)
  - nekurama.babai.research.md (Pricing hypothesis, What remains unvalidated, Success criteria)
  - nekurama.chatgpt.md (historical planning model; explicitly not a forecast)
  - nekurama.raw.chat.json (mappings `4bbdb489-0a0d-45d5-af27-70535c5d4acc`, `04cc446b-3a6d-4c19-adc7-4d94ab17d21b`, `4702681b-d611-4408-af5f-9001d04b6cfa`, `f58ce128-39ed-4015-9be9-5b6135a39f20`)
  - docs/products/babai/brd.md
  - docs/products/babai/business-model.md
  - docs/company/finance-tax-compliance.md
---

# BABAI Economics Model

## Purpose and decision posture

This is the **Track 2 planning model v0.2** for the thin restaurant-first,
pickup-first, WhatsApp-native MVP. The low/base/high planning bands below are
finalized for internal planning and instrumentation only; every proposed
number remains provisional and pending founder approval. The model is designed
to collect comparable evidence during a paid or deposit-backed pilot and
gradual onboarding toward up to 10 restaurants.

It is **not a forecast, approved price list, margin commitment or accounting
position**. The model deliberately keeps price, order GMV, GST treatment,
founder valuation rates and contribution targets as inputs. The admin packet
does not supply those values.

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

The current decision requires a paid or deposit-backed pilot with an explicit
end date, but does not select an option, amount, refund rule or date. Do not
infer any of those from the historical subscription prices.

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

Track 3 consumes this v0.2 artifact through the proposed metric contract in
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

Until those inputs exist, this model remains a planning range and unresolved
decision register.
