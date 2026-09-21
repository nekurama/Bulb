# BABAI — Costing & Infrastructure Review

> Working note for BABAI economics and pricing.
> Last reviewed: 2026-09-21
> All ₹ figures are INR and are planning targets unless explicitly marked as sourced/current provider pricing.

## 1. The costing principle

The purpose of this model is **not** to make the pilot or the first 10 restaurants break even.

Doing that would distort the apparent cost of serving a restaurant and create pricing cliffs:

- early customers look artificially expensive
- pricing gets set around temporary low-scale infrastructure absorption
- prices then become difficult to lower as volume grows
- customers can be rejected simply because the business has not yet reached efficient scale

The standard we need is:

> **What should it normally cost BABAI to serve one restaurant once the platform is operating at a sensible scale?**

That is the number that should guide pricing discipline.

Pilot economics and company-level cash burn are separate questions.

### Therefore:

1. **Do not load the pilot with all fixed company costs.**
2. **Do not divide a fixed infrastructure bill by a tiny customer count and call that the restaurant's cost.**
3. **Do not use N=10 economics to decide the long-term price floor.**
4. **Track true marginal / semi-variable service cost per restaurant.**
5. **Track total monthly company infrastructure spend separately.**
6. **Allow infrastructure cost per restaurant to fall as the platform scales.**
7. **Do not create pricing cliffs just because the first few customers are expensive to support.**

This is a unit-cost model, not a break-even model.

---

## 2. What we are actually trying to cost

The earlier economics model mixes several different kinds of cost.

They should remain separate.

### A. Service COGS

Costs that are caused by serving restaurant/order volume:

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

These are the main inputs to the **standard restaurant service cost**.

### B. Customer-specific operating cost

Costs that happen because a particular restaurant requires additional work:

- exceptional onboarding
- custom configuration
- bespoke integration
- unusual support
- restaurant-specific engineering

These should not silently become part of the standard cost of every restaurant.

### C. Shared operating cost

Costs that support the BABAI service as a whole:

- pooled support
- common monitoring
- platform operations
- engineering
- product
- management
- legal/accounting
- sales
- general software

These are company costs.

They are important for company profitability, but they should not be blindly converted into a per-restaurant COGS number.

### D. One-time implementation cost

Work required to get a restaurant live.

This should be measured separately from recurring service cost.

---

## 3. Current BABAI commercial model

The current working model contains these tier names/prices:

| Tier | Monthly price (pre-GST) | Model description |
|---|---:|---|
| LITE | ₹4,999 | Limited AI/conversational assistance; menu display/order only; menu updates up to 3/month |
| BASE | ₹9,999 | Users select/order/pay/use delivery; availability controls/basic time-bounded promos/combos |
| PRO | ₹19,999 | Full bounded user/restaurant access across allowed workflows + advanced API integrations |

The economics model currently gives illustrative loaded costs before shared infrastructure of:

- LITE: ~₹1,700
- BASE: ~₹3,000
- PRO: ~₹8,000

Those numbers should now be treated as **historical planning assumptions**, not as the standard cost floor.

The older **₹42,500 / N shared-infrastructure allocation should not be used to determine customer pricing**.

---

## 4. The key distinction: monthly company spend vs standard restaurant cost

We need two different views.

### View 1 — Total monthly infrastructure spend

This answers:

> "How much money will BABAI actually pay AWS/Cloudflare/etc. this month?"

This is a company cash-burn question.

It will increase in steps as capacity is added.

### View 2 — Standard service cost per restaurant

This answers:

> "At normal scale, what does one restaurant add to BABAI's monthly operating cost?"

This is the number that matters for pricing discipline.

These are related, but they are not the same number.

For example, if BABAI keeps a ₹20,000/month base infrastructure stack:

- 10 restaurants may make the platform look expensive
- 100 restaurants absorb the same base stack much better
- 1,000 restaurants may require additional capacity

The first case should **not** permanently define the standard cost of serving one restaurant.

---

## 5. Standard-cost formula

The working formula should be:

**Standard restaurant service cost = marginal usage COGS + normal semi-variable infrastructure + normal pooled operations allocation**

Where:

### Marginal usage COGS

Costs directly driven by restaurant activity:

- orders
- WhatsApp conversations/messages
- AI turns/tokens
- payments
- delivery
- API calls

### Semi-variable infrastructure

Infrastructure that grows with platform volume:

- compute
- DB capacity
- cache capacity
- storage
- logs
- queues
- bandwidth

### Pooled operations

Only the normal service-level portion should be included here:

- support tooling
- monitoring
- routine operations

Do **not** include:

- founder salary
- product development
- sales
- company management
- acquisition spend
- one-off engineering
- temporary pilot inefficiency

in the standard service-cost number.

Those belong in the company P&L.

---

## 6. Traffic model

Working high-volume scenario:

- 1,000 restaurants
- 50 orders/restaurant/day
- **50,000 orders/day**
- 6 conversational flows/order
- 3–15 gateway hits/flow
- average: **9 gateway hits/flow**
- average: **54 requests/order**
- heavy case: **~90 requests/order**

At 54 requests/order:

**50,000 × 54 = 2.7M requests/day**

Approximate monthly volume:

**~81M requests/month**

24-hour average:

**~31 RPS**

Peak traffic is concentrated into operational hours. A working burst envelope of roughly **500–750 RPS** is still modest for modern managed HTTP gateways/serverless ingress.

The important architectural distinction remains:

> **54 lightweight state/cache/API operations per order is not the same as 54 heavy database transactions per order.**

The system should be designed so that most conversational operations remain cheap.

---

## 7. Support should be pooled

Support should not be modeled as:

> "Every restaurant requires its own support budget."

The operating model should assume centralized support.

Example planning case:

- 5,000 orders/day
- 0.1% platform failure rate
- 3% of failures require human intervention

Then:

**5,000 × 0.001 × 0.03 = 0.15 human-intervention cases/day**

If a planning window uses 40 operating days:

**0.15 × 40 = 6 cases**

The arithmetic is only useful if the 3% is explicitly the percentage of failures requiring human intervention.

Operational responsibility should remain clear:

### BABAI owns

- platform failures
- integration failures
- payment/platform technical failures
- WhatsApp/provider technical failures
- system reliability

### Restaurant owns

- wrong menu configuration
- wrong prices configured by the restaurant
- accepting an incorrect item
- kitchen mistakes
- fulfillment mistakes
- restaurant-side operational decisions

This keeps the support model centralized and prevents normal restaurant operations from becoming BABAI's recurring per-customer COGS.

---

## 8. Hosting philosophy

BABAI should start with the smallest architecture that comfortably handles the expected load.

The goal is not:

> "How much infrastructure can we afford?"

The goal is:

> **"What is the smallest reliable infrastructure that handles the workload without creating operational fragility?"**

Recommended baseline:

- stateless API/gateway
- Postgres for durable transactional state
- Redis/KV for session/cache/menu state
- queue/event bus for asynchronous work
- object storage for backups/assets where appropriate
- centralized monitoring
- automated backups

Avoid unnecessary complexity:

- service-per-function decomposition
- large always-on clusters
- synchronous fan-out
- heavy DB transactions for every conversational event
- excessive logging
- premature multi-region infrastructure

Scale the stateless layer first.

Keep the stateful core small, indexed, and measurable.

---

## 9. AI is not the primary cost risk

AI calls should be measured by:

- AI turns/order
- input tokens/turn
- output tokens/turn
- model used

They should **not** be inferred from total gateway requests.

For example:

> 54 HTTP requests/order does not mean 54 LLM calls/order.

Most restaurant-ordering operations should be deterministic:

- menu lookup
- availability lookup
- cart mutation
- address collection
- order creation
- payment status
- order status

AI should be used where conversational interpretation is actually needed.

This makes AI cost controllable.

---

## 10. Standard cost targets

The following should be treated as **target recurring service costs**, not fully loaded company costs.

They are intended to answer:

> "What should it normally cost us to serve this restaurant?"

### LITE

Target standard cost:

**~₹600–₹1,000/month**

Planning midpoint:

**~₹800/month**

Typical drivers:

| Component | Target |
|---|---:|
| Compute + gateway | ₹100–₹200 |
| Postgres + cache | ₹150–₹250 |
| AI | ₹50–₹150 |
| Messaging/API | ₹100–₹250 |
| Monitoring/backups/storage | ₹50–₹100 |
| Normal pooled operations | ₹100–₹200 |
| **Target range** | **₹550–₹1,150** |

The exact number should ultimately come from measured production usage.

### BASE

Target standard cost:

**~₹1,000–₹1,800/month**

Planning midpoint:

**~₹1,400/month**

Typical drivers:

| Component | Target |
|---|---:|
| Compute + gateway | ₹150–₹300 |
| Postgres + cache | ₹250–₹350 |
| AI | ₹100–₹250 |
| Messaging/API | ₹200–₹400 |
| Payment-related variable cost | ₹100–₹250 |
| Monitoring/backups/storage | ₹50–₹100 |
| Normal pooled operations | ₹150–₹250 |
| **Target range** | **₹1,000–₹1,900** |

### PRO

Target standard cost:

**~₹2,500–₹4,500/month**

Planning midpoint:

**~₹3,250/month**

Typical drivers:

| Component | Target |
|---|---:|
| Compute + gateway | ₹300–₹600 |
| Postgres + cache | ₹400–₹700 |
| AI | ₹250–₹600 |
| Messaging/API | ₹400–₹800 |
| Payment/integration variable cost | ₹300–₹700 |
| Monitoring/backups/storage | ₹150–₹300 |
| Normal pooled operations | ₹300–₹800 |
| **Target range** | **₹2,100–₹4,500** |

These targets should be revisited after real traffic measurements.

---

## 11. Pricing-cliff rule

A core rule for BABAI:

> **Do not increase the standard price simply because the current customer count is too small to absorb fixed infrastructure.**

If the platform costs ₹X/month to keep alive, that does not mean each of the first 10 restaurants has an incremental cost of ₹X/10.

Instead:

- keep the platform lean
- absorb early fixed cost at the company level
- measure actual service COGS
- improve utilization as the customer base grows
- revisit pricing only when the underlying service cost changes

This avoids a common SaaS failure mode:

**low scale → high allocated cost → high price → slower adoption → low scale**

The business should not create that loop artificially.

---

## 12. Cost should fall with scale — until capacity steps up

Infrastructure is not perfectly linear.

A better model is:

**Monthly infrastructure spend = base platform cost + usage cost + capacity steps**

And:

**Standard restaurant cost = total recurring service COGS / normal active restaurant volume**

The second number should be calculated at representative scale, not at the first few customers.

### Example

Suppose a platform stack costs:

**₹20,000/month**

At 10 restaurants:

**₹2,000 apparent infrastructure allocation/restaurant**

At 100 restaurants:

**₹200 apparent allocation/restaurant**

At 1,000 restaurants:

**₹20 apparent allocation/restaurant**

But eventually capacity may need to increase.

For example:

**₹20k → ₹30k → ₹50k → ₹80k**

The cost curve is therefore stepwise, not linear.

The important point is that **customer count and infrastructure bill should be modeled separately**.

---

## 13. What could actually increase standard cost

The major risks are not raw HTTP throughput.

### 1. WhatsApp/provider fees

Message/conversation pricing can become significant at volume.

### 2. Payment processing

If BABAI absorbs payment costs, they scale with transaction volume/GMV.

### 3. Delivery

Per-order delivery/API charges can dominate infrastructure costs.

### 4. Database architecture

If every conversational step becomes a heavy transactional DB operation, DB capacity can grow unnecessarily.

### 5. Observability

Millions of requests/day with verbose logs can create a large storage and ingestion bill.

### 6. AI context size

Large conversation histories sent repeatedly to the model can turn an otherwise cheap AI workflow into a material variable cost.

### 7. Custom integrations

Restaurant-specific engineering is a much bigger risk to economics than basic compute.

A bespoke integration should be treated as a customer-specific cost, not hidden inside the standard restaurant COGS.

---

## 14. Cost-accounting structure

Future economics updates should keep these columns separate:

| Cost class | Example | Standard restaurant cost? |
|---|---|---|
| Message COGS | WhatsApp/provider | Yes |
| AI COGS | LLM tokens | Yes |
| Payment COGS | payment fees | Yes where BABAI absorbs them |
| Delivery COGS | logistics/API | Yes where BABAI absorbs them |
| Compute | API/workers/containers | Yes |
| Database | Postgres | Yes, on a usage/capacity basis |
| Cache | Redis/KV | Yes |
| Storage | object storage | Yes |
| Logging | observability | Yes, normal usage only |
| Pooled support | shared support | Partially / as normal service overhead |
| One-time onboarding | merchant setup | No — separate |
| Custom integration | bespoke engineering | No — customer-specific |
| Product engineering | platform development | No — company fixed cost |
| Sales | acquisition | No |
| G&A | legal/accounting/admin | No |
| Founder time | management/company building | No |

---

## 15. Company cash-burn model

A separate sheet/model should answer:

> "How much will BABAI actually spend each month?"

This should be modeled independently from standard restaurant cost.

At each scale, calculate:

### Fixed platform spend

- minimum compute
- database base instance
- cache base instance
- monitoring
- backups
- storage
- gateway minimums

### Usage spend

- requests
- compute time
- database storage/IO
- cache operations
- AI
- WhatsApp/provider
- payment
- delivery
- logs

### Capacity steps

When a component crosses a practical limit:

- larger DB
- additional compute
- larger cache
- additional queue workers
- higher monitoring/logging volume

The resulting monthly bill is the **actual company infrastructure cash burn**.

It should not be divided by N and then used as the standard restaurant price.

---

## 16. Recommended architecture

```
WhatsApp / Web
      |
      v
Stateless API / Gateway
      |
      +----> Redis/KV
      |       - session
      |       - menu cache
      |       - temporary state
      |
      +----> Postgres
      |       - restaurants
      |       - menus
      |       - orders
      |       - payments
      |       - durable state
      |
      +----> Queue/Event Bus
                  |
                  +--> notifications
                  +--> kitchen/POS events
                  +--> delivery events
                  +--> analytics
```

Guidelines:

- cache menus/configuration
- make order creation transactional
- use idempotency for order/payment actions
- make downstream integrations asynchronous where possible
- keep conversational state lightweight
- cap AI context
- batch analytics
- keep logs useful rather than exhaustive

---

## 17. What we should measure before changing the targets

The next version should replace estimates with actual production measurements:

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

Once these are measured, the standard cost becomes empirical.

---

## 18. Final working conclusion

The economics model should **not** be optimized around pilot break-even.

The pilot is a learning and validation phase.

The recurring pricing discipline should instead be based on the **normal standard cost of serving a restaurant**.

Current working targets:

- **LITE:** ~₹800/month
- **BASE:** ~₹1,400/month
- **PRO:** ~₹3,250/month

These are service-cost targets, not fully loaded company costs.

The old ₹42,500/N allocation is useful for understanding company-level cost absorption, but it should **not** define the standard restaurant cost or force pricing upward during the pilot.

The operating principle is:

> **Keep the standard cost low, let shared infrastructure amortize naturally with scale, and keep temporary low-scale inefficiency at the company level rather than passing it through as a pricing cliff.**

That gives BABAI a stable cost standard for pricing while preserving the ability to improve margins as volume grows.

The separate company-level question remains:

> **How much will BABAI spend per month at 10, 50, 100, 500, 1,000, 5,000 and 10,000 restaurants?**

That should be modeled as a separate infrastructure cash-burn curve, using actual provider prices and capacity thresholds.
