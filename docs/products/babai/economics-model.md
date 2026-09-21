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
  - "2026-09-20 ADMIN DECISION PACKET"
  - "2026-09-21 FOUNDER DECISION PACKET"
  - "2026-09-21 ECONOMICS MODEL REVIEW PACKET"
---

# BABAI Economics Model

## Purpose and status

This is the economics baseline required before Track 3. It is a reproducible
per-restaurant monthly model, not an approved price list, tax position, vendor
quote, forecast or pilot success threshold. Low/base/high values marked
**planning input** are placeholders for the pilot ledger and must be replaced
with invoices, provider exports, time logs and refund records.

The current commercial decision is a **fixed 90-day paid pilot**. It is not a
free trial, and the agreed payment or deposit must be received before the
pilot starts. The pilot amount, collection schedule, deposit/refund treatment,
minimum-paying terms and cancellation/refund treatment remain open until they
are recorded in a signed agreement. Customer-order money settles directly to
the restaurant and is separate from BABAI subscription billing. [Research:
`nekurama.babai.research.md:L65-L81`, `nekurama.raw.chat.json:L192-L205`;
internal product decision packet: `2026-09-21 FOUNDER DECISION PACKET`]

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
restaurant funds. Accounting and tax treatment remain input-dependent and are
not concluded by this model. [Research:
`nekurama.raw.chat.json:L192-L205`]

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

## 90-day paid-pilot acceptance economics (planning v0.3)

This section is the internal acceptance calculation for one restaurant over a
fixed 90-calendar-day paid pilot. It is a planning model, not a quote,
approved margin, tax conclusion or signed commercial term. The central
planning cohort is `N = 3` restaurants so shared costs are not silently
allocated to one founder-supported customer. The `N = 1` and `N = 10`
sensitivity cases show the allocation effect.

### Scenario inputs

| Input | Low | Base | High | Treatment |
|---|---:|---:|---:|---|
| Pilot duration | 90 days | 90 days | 90 days | **Founder decision; fixed term** |
| Shared-cost cohort `N` | 3 | 3 | 3 | Planning input; sensitivity shown below |
| Annual hosting/storage/DB/monitoring | ₹20,000 | ₹40,000 | ₹52,000 | Planning estimate; no vendor quote |
| Annual tooling/dev/admin | ₹15,000 | ₹30,000 | ₹39,000 | Planning estimate; no vendor quote |
| Meta/provider messages per month | 250 | 750 | 2,000 | Planning input |
| Utility/authentication share | 95% | 85% | 60% | Planning input |
| Marketing share | 5% | 15% | 40% | Planning input |
| Meta utility/auth rate | ₹0.115 | ₹0.115 | ₹0.115 | Research snapshot; re-verify |
| Meta marketing rate | ₹0.8631 | ₹0.8631 | ₹0.8631 | Research snapshot; re-verify |
| Provider/BSP add-on over 90 days | ₹0 | ₹956 | ₹4,704 | Estimate: direct / `0.005 × ₹85 × 2,250` / `€49 × ₹96` |
| Subscription collection fee `p_sub` | 0% | 2% | 3% | Planning input; processor contract required |
| BABAI refund/credit reserve `q_refund` | 0.5% | 2% | 5% | Planning input applied to pilot income |
| Provider retry factor | 1% | 3% | 8% | Planning input applied to Meta + provider |
| Direct cash onboarding cost | ₹0 | ₹500 | ₹1,500 | Planning estimate; record receipts |
| Manoj onboarding hours / rate | 1.2h / ₹500 | 2h / ₹1,000 | 4.4h / ₹2,000 | Opportunity-value sensitivity, not compensation |
| Vinay onboarding hours / rate | 0.8h / ₹500 | 2h / ₹1,000 | 3.6h / ₹2,000 | Opportunity-value sensitivity, not compensation |
| Manoj support hours / month / rate | 0.6h / ₹500 | 1h / ₹1,000 | 2.2h / ₹2,000 | Time-log replacement required |
| Vinay support hours / month / rate | 0.4h / ₹500 | 1h / ₹1,000 | 1.8h / ₹2,000 | Time-log replacement required |
| Manoj failure/recovery hours / month | 0.06h | 0.25h | 0.55h | Planning input |
| Vinay failure/recovery hours / month | 0.04h | 0.25h | 0.45h | Planning input |
| GST input `g` | 0% | 18% | 18% | **Unknown tax input; not a conclusion** |
| Target contribution rate `t` | 20% | 40% | 60% | Planning case, pending founder approval |

GST is shown as an input only. If the signed quote is exclusive of GST, the
customer cash bar is `P × (1 + g)` and recognized income may remain `P` subject
to confirmed accounting treatment. If the quote is inclusive, recognized
income is `P_cash / (1 + g)`. Until a qualified adviser confirms the
treatment, show both values and do not count GST as BABAI income.

### 90-day formulas

```text
C_hosting_90       = annual_hosting × 3 / 12 / N
C_tooling_90       = annual_tooling × 3 / 12 / N
C_meta_90          = 3 × M × (u × r_u + m × r_m)
C_provider_90      = verified provider add-on for the 90-day term
C_retry_cash       = (C_meta_90 + C_provider_90) × q_retry
C_founder_90       = (h_M_onb × V_M) + (h_V_onb × V_V)
                     + 3 × ((h_M_support + h_V_support
                     + h_M_fail + h_V_fail) × V)
F_90               = C_hosting_90 + C_tooling_90 + C_meta_90
                     + C_provider_90 + C_retry_cash + C_onb_cash
                     + C_founder_90
total_expenditure  = F_90 + P × p_sub + P × q_refund
recognized_income  = P                         # before GST, if confirmed
contribution       = recognized_income - total_expenditure
contribution_rate  = contribution / recognized_income
break_even_P       = F_90 / (1 - p_sub - q_refund)
target_P           = F_90 / (1 - p_sub - q_refund - t)
customer_cash_bar  = P × (1 + g)                # exclusive-GST quote input
```

`F_90` is the total 90-day expenditure before price-linked collection and
refund/credit costs. The formula includes Manoj and Vinay onboarding, support
and failure/recovery time as economic cost even when no cash salary is paid.
Merchant-order payment fees remain a separately recorded pass-through unless a
signed agreement makes BABAI absorb them.

### Cost bars at each scenario center

Amounts below are per restaurant for 90 days. Founder rows are economic cost,
not cash payroll. The payment/refund row is price-linked and uses the scenario
center shown in the next table.

| Cost bar | Low | Base | High stress |
|---|---:|---:|---:|
| Hosting/storage/DB/monitoring | ₹1,667 | ₹3,333 | ₹4,333 |
| Tooling/dev/admin | ₹1,250 | ₹2,500 | ₹3,250 |
| Meta usage | ₹114 | ₹511 | ₹2,485 |
| Provider/BSP add-on | ₹0 | ₹956 | ₹4,704 |
| Provider retry cash | ₹1 | ₹44 | ₹575 |
| Direct cash onboarding | ₹0 | ₹500 | ₹1,500 |
| Manoj onboarding time | ₹600 | ₹2,000 | ₹8,800 |
| Vinay onboarding time | ₹400 | ₹2,000 | ₹7,200 |
| Manoj support time, 90 days | ₹900 | ₹3,000 | ₹13,200 |
| Vinay support time, 90 days | ₹600 | ₹3,000 | ₹10,800 |
| Manoj failure/recovery time | ₹90 | ₹750 | ₹3,300 |
| Vinay failure/recovery time | ₹60 | ₹750 | ₹2,700 |
| **Fixed expenditure `F_90`** | **₹5,682** | **₹19,345** | **₹62,848** |
| Subscription collection + refund reserve at center | ₹36 | ₹1,382 | ₹15,712 |

The component rows are displayed as rounded rupees; `F_90`, break-even and
target-fee outputs use the unrounded inputs. Small one-rupee differences
between a displayed component sum and a displayed aggregate are therefore
rounding artifacts, not additional cost assumptions.

### Scenario output and recommended fee bands

The center is the `target_P` calculated from each scenario's target
contribution case. The displayed recommendation is rounded for planning only.
Each band is exactly `center × (1 ± 15%)`; the ±15% is the maximum planning
variance around that center, not a promise to discount or an approved price.

| Scenario | 90-day fixed expenditure `F_90` | Break-even `P` | Target center `P` | ±15% planning fee band, before GST | Total expenditure at center | Contribution at center |
|---|---:|---:|---:|---:|---:|---:|
| Low | ₹5,682 | ₹5,711 | ₹7,147 (`t=20%`) | **₹6,075–₹8,219** | ₹5,718 | ₹1,429 (20%) |
| Base | ₹19,345 | ₹20,151 | ₹34,544 (`t=40%`) | **₹29,362–₹39,727** | ₹20,727 | ₹13,818 (40%) |
| High stress | ₹62,848 | ₹68,313 | ₹196,400 (`t=60%`) | **₹166,940–₹225,860** | ₹78,560 | ₹117,840 (60%) |

The base band is the recommended planning band for founder discussion; the low
band is a floor only when actual support and provider costs validate the low
case. The high band is a stress-test income bar, not a customer quote. If the
high case is approached, reduce support intensity, narrow scope or separately
approve a materially different commercial design instead of silently
subsidizing the gap.

At the base center, the GST cash input changes the customer-facing bar to
₹34,544 at `g=0%`, ₹36,271 at `g=5%`, or ₹40,762 at `g=18%`; it does not change
the pre-GST contribution calculation unless accounting treatment says it does.

### Per-restaurant break-even sensitivity

The base scenario below keeps all variable inputs constant and changes only
the number of restaurants sharing annual hosting and tooling. This is a
planning allocation sensitivity, not a scale forecast.

| Shared-cost cohort `N` | Base hosting + tooling allocation | Base `F_90` | Break-even 90-day fee | 40% target fee |
|---:|---:|---:|---:|---:|
| 1 | ₹17,500 | ₹31,012 | ₹32,304 | ₹55,378 |
| 3 | ₹5,833 | ₹19,345 | ₹20,151 | ₹34,544 |
| 10 | ₹1,750 | ₹15,262 | ₹15,897 | ₹27,253 |

The cells must be recalculated from the ledger before use; they are
intentionally not treated as approved prices. The exact formulas are
`F_90(N) = F_90(3) + (₹70,000 × 3 / 12) × (1/N - 1/3)` and the two price
formulas above.

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
- Support-minute category definitions, ceiling ownership, scale staffing,
  support tooling and service-level overhead remain to be validated at each
  scale row.
- Advisory versus AI-heavy routing, model mix, token/unit rates, retry
  behavior and background-job cost remain planning inputs until instrumented.
- CAC, churn, lifetime, LTV, payback and acquisition-channel economics remain
  unknown until measured; the scale curve does not forecast them.
- Restaurant value, avoided channel cost, staff savings and incremental profit
  must be measured independently from BABAI SaaS revenue and contribution.
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
