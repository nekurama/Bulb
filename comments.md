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

## 5. Support model

Support should be pooled, not budgeted per restaurant.

Example:

- 5,000 orders/day
- 0.1% platform failure rate
- 3% of failures require human intervention

Then:

**5,000 × 0.001 × 0.03 = 0.15 human-intervention cases/day**

The 3% must explicitly mean percentage of failures requiring intervention.

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

This is separate from standard restaurant COGS.

The company burn formula is:

**Total monthly cash burn = fixed operating burn + infrastructure + variable service COGS**

For the working planning model:

### Fixed operating burn

| Expense | Monthly planning budget |
|---|---:|
| Engineering | ₹3.00L |
| Support/operations | ₹0.85L |
| Founder/management | ₹0.65L |
| Software/legal/accounting/misc. | ₹0.50L |
| **Fixed operating burn** | **₹5.00L** |

This ₹5L is a **planning assumption**, not a measured current BABAI expense.

### Infrastructure capacity budget

| Restaurants | Monthly infrastructure budget |
|---:|---:|
| 10–50 | ₹30k |
| 100 | ₹35k |
| 250 | ₹50k |
| 500 | ₹70k |
| 1,000 | ₹1.20L |
| 2,500 | ₹2.00L |
| 5,000 | ₹3.50L |
| 10,000 | ₹6.00L |

This is a conservative planning envelope. It is not a provider invoice.

### Variable service COGS

Use:

**₹1,920 × active restaurants/month**

until measured production data replaces the assumption.

---

## 9. Full company burn curve

Assumptions:

- 50 orders/restaurant/day
- 30 days/month
- 30% LITE / 40% BASE / 30% PRO
- ₹3,999 / ₹5,999 / ₹9,999
- ₹1,920 weighted service COGS/restaurant
- ₹5L fixed operating burn

| Restaurants | Orders/day | Revenue/month | Service COGS | Infra | Fixed ops | **Total cash burn** | **Operating surplus** |
|---:|---:|---:|---:|---:|---:|---:|---:|
| 10 | 500 | ₹0.66L | ₹0.19L | ₹0.30L | ₹5.00L | **₹5.49L** | **−₹4.83L** |
| 25 | 1,250 | ₹1.65L | ₹0.48L | ₹0.30L | ₹5.00L | **₹5.78L** | **−₹4.13L** |
| 50 | 2,500 | ₹3.30L | ₹0.96L | ₹0.30L | ₹5.00L | **₹6.26L** | **−₹2.96L** |
| 100 | 5,000 | ₹6.60L | ₹1.92L | ₹0.35L | ₹5.00L | **₹7.27L** | **−₹0.67L** |
| 250 | 12,500 | ₹16.50L | ₹4.80L | ₹0.50L | ₹5.00L | **₹10.30L** | **+₹6.20L** |
| 500 | 25,000 | ₹33.00L | ₹9.60L | ₹0.70L | ₹5.00L | **₹15.30L** | **+₹17.70L** |
| 1,000 | 50,000 | ₹65.99L | ₹19.20L | ₹1.20L | ₹5.00L | **₹25.40L** | **+₹40.59L** |
| 2,500 | 125,000 | ₹164.98L | ₹48.00L | ₹2.00L | ₹5.00L | **₹55.00L** | **+₹109.98L** |
| 5,000 | 250,000 | ₹329.95L | ₹96.00L | ₹3.50L | ₹5.00L | **₹104.50L** | **+₹225.45L** |
| 10,000 | 500,000 | ₹659.90L | ₹192.00L | ₹6.00L | ₹5.00L | **₹203.00L** | **+₹456.90L** |

The table is intentionally a **company cash-burn model**, not a per-restaurant fixed-cost allocation.

---

## 10. The 0–100 restaurant runway

The early-stage problem is fixed company burn.

Using the same assumptions:

| Restaurants | Revenue | Variable service COGS | Infrastructure | Fixed ops | **Net monthly burn** |
|---:|---:|---:|---:|---:|---:|
| 0 | ₹0 | ₹0 | ₹30k | ₹5.00L | **−₹5.30L** |
| 10 | ₹0.66L | ₹0.19L | ₹30k | ₹5.00L | **−₹4.83L** |
| 20 | ₹1.32L | ₹0.38L | ₹30k | ₹5.00L | **−₹4.36L** |
| 30 | ₹1.98L | ₹0.58L | ₹30k | ₹5.00L | **−₹3.90L** |
| 40 | ₹2.64L | ₹0.77L | ₹30k | ₹5.00L | **−₹3.43L** |
| 50 | ₹3.30L | ₹0.96L | ₹30k | ₹5.00L | **−₹2.96L** |
| 60 | ₹3.96L | ₹1.15L | ₹30k | ₹5.00L | **−₹2.49L** |
| 70 | ₹4.62L | ₹1.34L | ₹30k | ₹5.00L | **−₹2.02L** |
| 80 | ₹5.28L | ₹1.54L | ₹30k | ₹5.00L | **−₹1.56L** |
| 90 | ₹5.94L | ₹1.73L | ₹30k | ₹5.00L | **−₹1.09L** |
| 100 | ₹6.60L | ₹1.92L | ₹35k | ₹5.00L | **−₹0.67L** |

### Break-even

At this fixed-cost assumption, break-even occurs at approximately:

**114 restaurants**

That's the important early-stage number.

The business doesn't need infrastructure to become cheap enough to break even. It needs enough restaurants to absorb the **₹5L fixed company operation**.

---

## 11. Runway requirement

If BABAI starts at zero and grows gradually, the relevant question is cumulative burn rather than the burn at 100 restaurants.

For example, if the company averages roughly:

- 10 restaurants during one phase
- 25 during the next
- 50 during the next
- 75 during the next
- 100 thereafter

then the capital required to reach operating break-even can easily be several months of the ₹3–5L/month early-stage burn.

Therefore:

> **Pilot funding should be sized around runway, not forced into per-restaurant break-even economics.**

This is consistent with the pricing principle: do not make early customers carry the company's fixed startup costs.

---

## 12. What this tells us about pricing

The important conclusions are:

### ₹999 / ₹2,499 / ₹4,999

Potentially commercially attractive, but **not compatible with the current 60–85% margin target at 50 orders/restaurant/day** unless actual service COGS is dramatically below the current planning assumption.

### ₹3,999 / ₹5,999 / ₹9,999

Provides approximately 70% weighted gross margin under the current COGS assumptions and gives the company room to absorb usage variation.

### Higher pricing

₹5,999 / ₹8,999 / ₹13,999 and above creates more margin headroom, but should only be adopted if product value and market validation support it.

The financial model should not decide public pricing by itself.

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

The business should maintain three separate financial numbers:

### 1. Standard service COGS

What one normal restaurant adds to BABAI's recurring cost.

### 2. Company monthly burn

What BABAI actually spends each month, including fixed employees/operations and infrastructure.

### 3. Gross margin

**(Revenue − variable service COGS) / Revenue**

The working target is approximately **70% gross margin**, with 60% as the lower planning floor and 80–85% as the high-margin target range.

The current planning price set is:

> **LITE ₹3,999 / BASE ₹5,999 / PRO ₹9,999**

The current 0–100 model indicates approximately **₹5.3L/month burn at zero restaurants**, declining to approximately **₹0.67L/month burn at 100 restaurants**, under the stated assumptions.

Approximate operating break-even is **~114 restaurants**.

The key strategic principle remains:

> **Do not make the first 100 restaurants pay for the company's fixed startup structure through artificial per-restaurant costs. Keep the service COGS low, keep company burn explicit, and let scale absorb fixed costs.**
