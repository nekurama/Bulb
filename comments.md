# BABAI — Costing, Safe Pricing & Company Burn Review

> Working note for BABAI economics, pricing, infrastructure, and company-level cash burn.
> Last reviewed: 2026-09-21
> All ₹ figures are INR and are planning targets unless explicitly marked as sourced/current provider pricing.

## 1. The costing principle

The purpose of this model is **not** to make the pilot or the first 10 restaurants break even.

Doing that would distort the apparent cost of serving a restaurant and create pricing cliffs.

The standard we need is:

> **What should it normally cost BABAI to serve one restaurant once the platform is operating at a sensible scale?**

Pilot economics and company-level cash burn are separate questions.

Therefore:

1. Do not load the pilot with all fixed company costs.
2. Do not divide a fixed infrastructure bill by a tiny customer count and call that the restaurant's cost.
3. Do not use N=10 economics to decide the long-term price floor.
4. Track true marginal / semi-variable service cost per restaurant.
5. Track total monthly company spend separately.
6. Allow infrastructure cost per restaurant to fall as the platform scales.
7. Do not create pricing cliffs because the first few customers are expensive to support.

---

## 2. Separate service COGS from company burn

### Service COGS

Costs caused by serving restaurant/order volume:

- WhatsApp/provider fees
- AI usage
- payment processing
- delivery APIs/partners
- API/gateway requests
- application compute
- database usage
- cache usage
- storage
- bandwidth
- logs/observability
- normal pooled service operations

### Customer-specific operating cost

Keep these separate:

- exceptional onboarding
- bespoke integration
- unusual support
- restaurant-specific engineering

### Company fixed/operating cost

These belong in company P&L rather than standard restaurant COGS:

- engineering
- product
- founder/management
- sales
- legal/accounting
- general software
- company administration
- acquisition spend
- one-off engineering

---

## 3. Working safe-price framework

The target is to build toward a **60–85% gross-margin SaaS model**, while keeping the actual cost assumptions measurable.

Formula:

**Safe price = service COGS / (1 − target gross margin)**

For the current planning model, use the following conservative target service COGS:

| Tier | Target service COGS |
|---|---:|
| LITE | ₹1,200 |
| BASE | ₹1,800 |
| PRO | ₹2,800 |

### Price sensitivity

| Target gross margin | LITE | BASE | PRO |
|---|---:|---:|---:|
| 60% floor | ₹2,999 | ₹4,499 | ₹6,999 |
| **70% target** | **₹3,999** | **₹5,999** | **₹9,999** |
| 80% target | ₹5,999 | ₹8,999 | ₹13,999 |
| 85% target | ₹7,999 | ₹11,999 | ₹19,999 |

### Current financial planning price

> **LITE ₹3,999 / BASE ₹5,999 / PRO ₹9,999 per month, before GST**

At the working 30% LITE / 40% BASE / 30% PRO mix:

- weighted ARPU = **₹6,599/month**
- weighted service COGS = **₹1,920/month**
- weighted gross margin = **~70.9%**

These are **financial planning prices**, not a final public commercial decision.

### What about ₹999 / ₹2,499 / ₹4,999?

At the same 30/40/30 mix, weighted ARPU is only **₹2,799/month**.

Against the current conservative ₹1,920 weighted service COGS, that is only:

**~31.4% gross margin**

Therefore ₹999 / ₹2,499 / ₹4,999 should not be treated as the safe 60–85% margin price set unless production measurements demonstrate substantially lower COGS.

---

## 4. Traffic model

Working high-volume scenario:

- 1,000 restaurants
- 50 orders/restaurant/day
- 50,000 orders/day
- 6 conversational flows/order
- 3–15 gateway hits/flow
- average 9 gateway hits/flow
- average 54 requests/order
- heavy case ~90 requests/order

At 54 requests/order:

**50,000 × 54 = 2.7M requests/day**

Approximately:

**81M requests/month**

24-hour average:

**~31 RPS**

Peak traffic remains concentrated in operational hours, with a working burst envelope of roughly 500–750 RPS.

The architecture should keep most of these operations lightweight. 54 HTTP operations/order is not equivalent to 54 heavy database transactions or 54 LLM calls.

---

## 5. Support and hiring model

### Default assumption: no hiring

BABAI should **not assume engineering or support hiring in the 0–100 restaurant model**.

Current operating assumption:

- engineering remains founder/internal work
- no engineering payroll is added to the model
- support remains pooled
- no dedicated support hire is added initially
- restaurant/order mistakes remain restaurant-side responsibility
- hiring happens only when support/offline work becomes operationally unmanageable

### Support escalation threshold

The working trigger is:

> **If offline/support work exceeds roughly 20 unresolved cases/issues and cannot be managed by the existing team, then dedicated support hiring becomes justified.**

Until that threshold is reached, the model carries **₹0 incremental support payroll**.

This is a hiring trigger, not a forecast.

### What BABAI owns

BABAI owns:

- platform failures
- integration failures
- payment/platform technical failures
- WhatsApp/provider technical failures
- system reliability

Restaurants own:

- wrong menu configuration
- wrong prices entered by restaurant
- kitchen mistakes
- fulfillment mistakes
- restaurant-side operational decisions

### Reliability example

At:

- 5,000 orders/day
- 0.1% platform failure rate
- 3% of failures requiring human intervention

the expected human-intervention volume is:

5,000 × 0.001 × 0.03 = 0.15 cases/day

The 3% must explicitly mean percentage of failures requiring intervention.

---

## 6. Minimal hosting philosophy

The goal is:

> **Use the smallest reliable infrastructure that comfortably handles the workload.**

Recommended baseline:

- stateless API/gateway
- Postgres for durable transactional state
- Redis/KV for session/cache/menu state
- queue/event bus for asynchronous work
- object storage for backups/assets
- centralized monitoring
- automated backups

Avoid premature:

- service-per-function decomposition
- large always-on clusters
- synchronous fan-out
- heavy DB transactions for conversational events
- excessive logging
- premature multi-region infrastructure

Scale stateless capacity first and keep the stateful core small and measurable.

---

## 7. AI is not the primary cost risk

Measure:

- AI turns/order
- input tokens/turn
- output tokens/turn
- model used

Do not infer AI spend from gateway requests.

Most restaurant-ordering operations should remain deterministic:

- menu lookup
- availability lookup
- cart mutation
- address collection
- order creation
- payment status
- order status

AI should handle interpretation where it is actually needed.

---

## 8. Company-level cash-burn model

Do **not** assume a ₹5L/month fixed operating burn.

The earlier ₹5L figure was an invented planning assumption and is removed from the BABAI burn model.

There is currently no source-supported basis for adding:

- engineering payroll that does not exist
- dedicated support payroll that does not exist
- management payroll that does not exist
- arbitrary miscellaneous operating payroll

### Current hiring assumption

For the current planning period:

| Cost category | Incremental monthly assumption |
|---|---:|
| Engineering hiring | **₹0** |
| Dedicated support hiring | **₹0** |
| New management hiring | **₹0** |

These remain ₹0 until the business actually decides to hire.

The current model therefore focuses on the recurring costs created by serving restaurants.

---

## 9. Infrastructure capacity budget

| Restaurants | Monthly infrastructure planning envelope |
|---:|---:|
| 10–50 | ₹30k |
| 100 | ₹35k |
| 250 | ₹50k |
| 500 | ₹70k |
| 1,000 | ₹1.20L |
| 2,500 | ₹2.00L |
| 5,000 | ₹3.50L |
| 10,000 | ₹6.00L |

These are capacity-planning envelopes, not provider invoices.

They should be replaced by actual production bills once the stack is running.

---

## 10. Corrected 0–100 restaurant math

Assumptions:

- 30% LITE / 40% BASE / 30% PRO
- ₹3,999 / ₹5,999 / ₹9,999
- weighted ARPU = **₹6,599**
- ₹1,920 weighted service COGS/restaurant/month
- no engineering hiring
- no support hiring
- no management hiring
- no artificial ₹5L fixed operating burn
- infrastructure uses the planning envelope above

Formula:

**Monthly recurring spend = variable service COGS + infrastructure**

| Restaurants | Revenue | Service COGS | Infra | **Total modeled spend** | **Operating contribution** |
|---:|---:|---:|---:|---:|---:|
| 0 | ₹0 | ₹0 | ₹30k | **₹30k** | **−₹30k** |
| 10 | ₹65,990 | ₹19,200 | ₹30k | **₹49,200** | **₹16,790** |
| 20 | ₹1,31,980 | ₹38,400 | ₹30k | **₹68,400** | **₹63,580** |
| 30 | ₹1,97,970 | ₹57,600 | ₹30k | **₹87,600** | **₹1,10,370** |
| 40 | ₹2,63,960 | ₹76,800 | ₹30k | **₹1,06,800** | **₹1,57,160** |
| 50 | ₹3,29,950 | ₹96,000 | ₹30k | **₹1,26,000** | **₹2,03,950** |
| 60 | ₹3,95,940 | ₹1,15,200 | ₹30k | **₹1,45,200** | **₹2,50,740** |
| 70 | ₹4,61,930 | ₹1,34,400 | ₹30k | **₹1,64,400** | **₹2,97,530** |
| 80 | ₹5,27,920 | ₹1,53,600 | ₹30k | **₹1,83,600** | **₹3,44,320** |
| 90 | ₹5,93,910 | ₹1,72,800 | ₹30k | **₹2,02,800** | **₹3,91,110** |
| 100 | ₹6,59,900 | ₹1,92,000 | ₹35k | **₹2,27,000** | **₹4,32,900** |

### Important interpretation

This does **not** mean BABAI's actual bill at 100 restaurants will be exactly ₹2.27L.

It means:

> Under the current conservative COGS assumption and infrastructure planning envelope, BABAI would model approximately ₹2.27L/month of recurring service + infrastructure spend at 100 restaurants, before future hiring or other company overhead.

The previous ₹7.27L/month number at 100 restaurants is removed.

---

## 11. What happens if hiring becomes necessary?

Hiring should be modeled as a discrete step, not hidden inside restaurant COGS.

Before the support threshold:

**Company spend = service COGS + infrastructure + existing actual overhead**

After the threshold:

**Company spend = service COGS + infrastructure + actual support payroll + other actual overhead**

The support hire enters the model only when the operational condition is actually reached.

Likewise, engineering hiring enters only after a real capacity/product requirement exists.

This prevents the model from pretending BABAI needs a large organization before the workload requires one.

---

## 12. What this tells us about pricing

### ₹999 / ₹2,499 / ₹4,999

Potentially viable if actual production service COGS is low enough.

Under the current conservative ₹1,920 weighted service COGS assumption, the mix only produces approximately **31.4% weighted gross margin**.

So the low-price set should remain a cost-validation scenario, not the 60–85% margin scenario.

### ₹3,999 / ₹5,999 / ₹9,999

Produces approximately **70.9% weighted gross margin** under the current conservative COGS assumption.

It is therefore the current financial planning price set.

The company can still choose a lower commercial price if measured COGS proves materially lower.

---

## 13. What must be measured before locking pricing

Replace assumptions with production data:

1. requests/order
2. DB reads/order
3. DB writes/order
4. Redis/KV operations/order
5. AI calls/order
6. AI input tokens/order
7. AI output tokens/order
8. WhatsApp/provider cost/order
9. payment cost/order
10. delivery cost/order
11. CPU seconds/order
12. memory requirements
13. storage growth/month
14. log volume/month
15. support incidents/month
16. onboarding hours/restaurant
17. custom integration hours/restaurant

Once these are measured, the safe price can be recalculated from actual COGS.

---

## 14. Final working conclusion

BABAI should maintain three separate financial numbers:

### 1. Standard service COGS

What one normal restaurant adds to BABAI's recurring service cost.

### 2. Company monthly cash spend

What BABAI actually spends each month.

At the current stage, **do not invent engineering/support payroll that does not exist**.

### 3. Gross margin

**(Revenue − variable service COGS) / Revenue**

The working target remains approximately **70% gross margin**, with 60% as the lower planning floor and 80–85% as the high-margin target range.

The current financial planning price set is:

> **LITE ₹3,999 / BASE ₹5,999 / PRO ₹9,999**

The corrected 0–100 model indicates approximately:

- **0 restaurants:** ₹30k/month modeled recurring spend
- **10:** ₹49.2k
- **20:** ₹68.4k
- **50:** ₹1.26L
- **75:** ₹1.76L
- **100:** ₹2.27L

At 100 restaurants, under these assumptions:

- revenue ≈ **₹6.60L/month**
- modeled service + infrastructure spend ≈ **₹2.27L/month**
- operating contribution before unmodeled company overhead ≈ **₹4.33L/month**

There is **no artificial 114-restaurant break-even point** anymore.

The earlier ₹5.3L zero-customer burn and ₹114 break-even were artifacts of the invented ₹5L fixed-cost assumption and should not be used.

The operating principle is:

> **Keep hiring at zero until the workload proves it is necessary. Keep service COGS measurable. Keep infrastructure minimal. Do not make early restaurants pay for hypothetical future employees.**
