---
status: partial
owner: BABAI Product / Finance
last-reviewed: 2026-09-21
sources:
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
  - docs/company/finance-tax-compliance.md
  - "2026-09-20 ADMIN DECISION PACKET"
  - "2026-09-21 FOUNDER DECISION PACKET"
---

# BABAI Economics Model

## Purpose and status

This is the economics baseline required before Track 3. It is a reproducible
per-restaurant monthly model, not an approved price list, tax position, vendor
quote, forecast or pilot success threshold. Low/base/high values marked
**planning input** are placeholders for the pilot ledger and must be replaced
with invoices, provider exports, time logs and refund records.

The current commercial decision is a **fixed 90-day paid pilot**. It is not a
free trial. The pilot amount, collection schedule, minimum-paying terms and
cancellation/refund treatment remain open until they are recorded in a signed
agreement. Customer-order money settles directly to the restaurant and is
separate from BABAI subscription billing. [Research:
`nekurama.babai.research.md:L65-L81`, `nekurama.raw.chat.json:L192-L205`;
decision sources: `2026-09-20 ADMIN DECISION PACKET`, `2026-09-21 FOUNDER
DECISION PACKET`]

Pricing must be derived from contribution economics, not assumed tiers. The
historical ₹999, ₹2,499 and ₹4,999 figures remain research history only; they
must not be presented as current packages or used as an implied price ladder.

## Accounting boundaries

The model reports four different things:

1. **Revenue:** BABAI subscription or pilot amount earned, excluding any GST
   component that qualified accounting treatment classifies as tax collected
   rather than revenue.
2. **Cash cost:** money paid by BABAI, such as hosting, provider usage,
   subscription collection fees, refunds/credits and tools.
3. **Founder time:** hours spent on onboarding, support and recovery. This is
   not cash cost unless paid or accrued, but it is an economic cost and must
   not be hidden.
4. **Pass-through cost:** a customer-order payment or delivery fee paid by or
   settled for the restaurant. It is excluded from BABAI contribution unless a
   contract makes BABAI absorb it.

Customer-order GMV is therefore not BABAI revenue:

```text
restaurant customer → restaurant payment account
restaurant → BABAI subscription / pilot billing
```

This preserves the MVP boundary that BABAI does not custody, pool or settle
restaurant funds. It does not make a legal or tax conclusion. [Research:
`nekurama.raw.chat.json:L192-L205`; `docs/company/finance-tax-compliance.md`,
“Current durable answer”]

## Inputs and confidence

The table distinguishes repository evidence from internal planning inputs.
Planning inputs are intentionally explicit so they can be challenged and
replaced.

| Input | Low | Base | High | Status / treatment |
|---|---:|---:|---:|---|
| Pilot/subscription amount `S` | Unknown | Unknown | Unknown | Must be set from the signed 90-day agreement and later contribution analysis; no assumed tiers |
| Shared hosting, storage, DB, monitoring per year | ₹20,000 | ₹40,000 | ₹52,000 | Repository planning range, not a vendor quote; allocate across `N` restaurants |
| Shared tooling/dev/admin per year | ₹15,000 | ₹30,000 | ₹39,000 | Repository planning range, not a vendor quote; allocate across `N` restaurants |
| Billable Meta/provider messages per month | 250 | 750 | 2,000 | **Planning input**; replace with message-category export |
| Utility/authentication share | 95% | 85% | 60% | **Planning input** |
| Marketing share | 5% | 15% | 40% | **Planning input**; marketing must not be treated as unlimited |
| Meta utility/auth rate | ₹0.115 | ₹0.115 | ₹0.115 | Repository-reported research snapshot; verify against the current Meta rate card |
| Meta marketing rate | ₹0.8631 | ₹0.8631 | ₹0.8631 | Repository-reported research snapshot; verify before quoting customers |
| Direct Meta platform-access fee | ₹0 | ₹0 | ₹0 | Repository-reported research says no additional direct-access fee; not a contract |
| BSP/provider add-on | `0` direct | `0.005 × FX_USD × messages` | `49 × FX_EUR` per channel | Research pointers only: Twilio per-message add-on and 360dialog channel fee; FX and plan terms unknown |
| Founder onboarding hours per restaurant | 2h | 4h | 8h | Research supports approximately 2h training; total setup/menu/configuration is **planning input** |
| Founder support hours per month | 1h | 2h | 4h | **Planning input**; replace with time logs |
| Founder opportunity value per hour `V` | ₹500 | ₹1,000 | ₹2,000 | Internal sensitivity only; not salary, consultant quote or accounting treatment |
| Failure/retry hours per month | 0.1h | 0.5h | 1h | **Planning input** |
| Provider retry factor | 1% | 3% | 8% | **Planning input** applied to Meta/provider spend |
| BABAI refund/credit rate | 0.5% | 2% | 5% of `S` | **Planning input**; customer-order refunds remain outside BABAI unless BABAI absorbs them |
| Subscription collection fee | Unknown | ~2% research pointer | Unknown | Repository reports Razorpay “~2% + GST” standard processing; verify contract and whether BABAI pays it |
| Merchant-order payment fee | ~2% pointer | ~2% pointer | ~2% pointer | Pass-through by default; exact provider, GST and payer remain unknown |
| GST rate, registration, recoverability and invoice treatment | Unknown | Unknown | Unknown | CA/CS decision required; no tax conclusion is inferred |
| Target contribution rate | 20% | 40% | 60% | Internal planning cases only; not final pilot thresholds |

The hosting, tooling and company-budget ranges come from the repository's
planning table, not an invoice. The Meta, BSP and payment figures are
research snapshots recorded in the founder export and must be re-verified
before commercial use. [Research:
`nekurama.chatgpt.md:L6703-L6749`, `nekurama.chatgpt.md:L8122-L8123`,
`nekurama.chatgpt.md:L27594-L27598`, `nekurama.chatgpt.md:L48218-L48228`]

## Formulas

Let:

```text
N                  = active restaurants sharing fixed monthly costs
S                  = BABAI subscription/pilot amount before GST
g                  = applicable GST treatment (unknown; do not assume a rate)
M                  = total billable Meta/provider messages
u, m               = utility/authentication and marketing message shares
r_u, r_m           = verified Meta rates for those categories
P_provider         = verified BSP/provider add-on, if any
H, T               = annual hosting and annual tooling allocations
B                  = customer-order GMV processed by a merchant provider
p_sub              = BABAI subscription collection fee rate, if any
p_order            = merchant payment fee rate
h_onb, h_support   = onboarding and monthly support founder hours
h_fail             = monthly recovery/failure founder hours
V                  = founder opportunity value per hour
q_retry            = provider retry factor
q_refund           = BABAI refund/credit rate
C_onb_cash         = direct cash onboarding cost, currently unknown
L                  = onboarding amortization months, a modelling choice
```

Revenue and tax separation:

```text
S_net_revenue = S                         # when S is quoted before GST
S_net_revenue = S_cash_collected / (1+g) # only if a confirmed inclusive-GST quote applies
GST_component = S_cash_collected - S_net_revenue
```

Until a qualified adviser confirms `g`, record quoted amount, GST component,
amount collected and invoice/accounting treatment as separate fields. Do not
count a separately collected GST component as contribution until that
treatment is confirmed.

Provider and shared-cost formulas:

```text
C_meta = (M × u × r_u) + (M × m × r_m)
C_provider = C_meta + P_provider
C_hosting = H / 12 / N
C_tooling = T / 12 / N
C_payment_sub = S_net_revenue × p_sub
C_payment_order_pass_through = B × p_order
C_retry_cash = C_provider × q_retry
C_refund_credit = S_net_revenue × q_refund
C_onboarding_economic = C_onb_cash + (h_onb × V)
C_support_economic = h_support × V
C_failure_economic = C_retry_cash + (h_fail × V)
```

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

## Per-restaurant monthly break-even view

### Base illustration at `N = 10`

`N = 10` is only an allocation illustration because the current decision
packet caps this decision cycle at ten restaurants; it is not a final pilot
threshold. The following uses the base planning inputs, direct Meta only,
`L = 12`, and excludes unknown direct onboarding cash and any BSP add-on:

| Base component | Formula | Monthly amount |
|---|---|---:|
| Hosting allocation | `₹40,000 / 12 / 10` | ₹333 |
| Tooling allocation | `₹30,000 / 12 / 10` | ₹250 |
| Meta usage | `750 × 85% × ₹0.115 + 750 × 15% × ₹0.8631` | ₹170 |
| Retry cash | `₹170 × 3%` | ₹5 |
| Subscription collection fee | `S × 2%` | `2% × S` |
| BABAI refund/credit reserve | `S × 2%` | `2% × S` |
| Cash fixed cost before `S` percentages | sum above excluding the last two rows | ₹758 |
| Founder support time | `2h × ₹1,000` | ₹2,000 economic cost |
| Failure/recovery founder time | `0.5h × ₹1,000` | ₹500 economic cost |
| Onboarding effort amortized | `4h × ₹1,000 / 12` | ₹333 economic cost |
| Economic fixed cost before `S` percentages | ₹758 + ₹2,000 + ₹500 + ₹333 | ₹3,592 |

Under this historical illustration:

```text
cash_contribution(S)     = S - ₹758 - (2% × S) - (2% × S)
economic_contribution(S) = S - ₹3,592 - (2% × S) - (2% × S)
```

| Historical research amount | Cash contribution | Economic contribution | Interpretation |
|---:|---:|---:|---|
| ₹999 | ~₹201 | ~-₹2,633 | Founder time makes this case negative in the base illustration |
| ₹2,499 | ~₹1,641 | ~-₹1,193 | Positive cash contribution, negative after founder time |
| ₹4,999 | ~₹4,041 | ~₹1,207 | Positive after the illustrative founder-time allocation |

These are not price recommendations and must not be treated as tiers. They
expose the central decision: a
low subscription can look healthy on cash cost while consuming too much
founder capacity. Unknown provider add-ons, AI usage, direct onboarding cash,
actual refunds and tax/accounting treatment would reduce the displayed
contribution.

### Break-even amount for a target contribution

For a target economic contribution rate `t`, assuming the base 2% collection
fee and 2% refund reserve:

```text
required_income = economic_fixed_cost / (1 - 2% - 2% - t)
                 = ₹3,592 / (96% - t)
```

| Target contribution case | Formula | Illustrative required monthly income |
|---:|---|---:|
| 20% | `₹3,592 / (0.96 - 0.20)` | ~₹4,726 |
| 40% | `₹3,592 / (0.96 - 0.40)` | ~₹6,414 |
| 60% | `₹3,592 / (0.96 - 0.60)` | ~₹9,978 |

The target rates are scenario controls, not final pilot gates. A later model
should calculate both contribution before founder time and contribution after
founder time, then compare both with actual continuation behavior.

## Low/base/high sensitivity summary

At `N = 10`, direct Meta only and excluding unknown direct onboarding cash,
the scenario structure is:

| Scenario | Cash fixed cost before subscription percentages | Economic fixed cost after founder time | Main driver |
|---|---:|---:|---|
| Low | ~₹330/month | ~₹963/month | Low usage and 1h support at ₹500/h |
| Base | ~₹758/month | ~₹3,592/month | 2h support at ₹1,000/h |
| High | ~₹1,653/month | ~₹12,986/month | 4h support at ₹2,000/h and higher recovery effort |

The high case is deliberately a stress test, not a forecast. It shows why
founder support time, onboarding effort, message mix, provider topology and
shared-cost allocation need telemetry before final packaging. Add the
provider/BSP formula, direct onboarding cash and any AI cost to each case when
quotes and usage records exist.

## Ledger fields required before Track 3

For every restaurant and month, capture:

- quoted amount, GST component, amount collected, invoice status and accounting
  treatment;
- 90-day pilot term, signed-agreement version, minimum-paying term, cancellation
  notice/trigger, refund or credit outcome and reason;
- Meta category, message count, provider/channel identifier and invoice amount;
- AI/API usage and retries, hosting/storage/logging allocation and tooling
  allocation;
- customer-order GMV and merchant payment fee as a separately marked
  pass-through field;
- onboarding hours, menu corrections, travel/direct cash and staff training;
- founder/support hours by reason, incident, takeover and recovery action;
- failed messages, duplicate work, provider retries, downtime impact and
  refunds/credits;
- cash contribution, economic contribution and the assumptions version used.

The field research specifically calls for actual Meta, AI, infrastructure and
payment costs, onboarding time, support effort, failure/retry behavior and
pilot-to-paid conversion to be measured. [Research:
`nekurama.babai.research.md:L145-L163`; corroboration:
`nekurama.chatgpt.md:L3593-L3605`]

## Unresolved decisions

- Exact 90-day pilot fee, billing schedule, minimum-paying term, cancellation
  and refund treatment remain open pending the signed agreement template and
  professional review. A free pilot is not an approved option.
- The team-defined evidence gate for operational readiness for materially
  larger onboarding volumes remains proposed; the exact thresholds, owner and
  observation window must be recorded before relying on it.
- Post-pilot pricing is reviewed every six months after the pilot/continuation
  decision. Review is not an automatic increase and does not pre-approve a
  price change.
- Direct Meta versus BSP/provider topology, provider contract, markup,
  minimums, FX treatment and who pays each fee remain open.
- AI/model costs, storage/retention, observability and shared-cost allocation
  need actual usage records.
- Subscription payment processor and whether BABAI absorbs the fee remain
  open. Merchant-order payment remains pass-through by default.
- Refund authority, commercial credits, failed settlement exposure and
  accounting entries require operational and finance decisions.
- GST registration/applicability, rate, place-of-supply, invoice treatment,
  recoverability and revenue recognition require qualified CA/CS review.
- Founder hourly opportunity value, support capacity and onboarding staffing
  are planning controls, not approved compensation or hiring assumptions.
- No final pilot success, kill, contribution or continuation threshold is set
  by this document.
