# BABAI — Costing & Infrastructure Review

> Working note for the BABAI economics discussion.
> Last reviewed: 2026-09-21
> All ₹ figures are INR and should be treated as planning estimates unless explicitly marked as sourced/current provider pricing.

## 1. What we are actually trying to cost

The earlier economics model mixes together several different kinds of cost:

1. **Marginal COGS** — cost that rises with orders/messages/AI/API usage.
2. **Customer-specific operating cost** — onboarding, custom setup, exceptional support, integrations.
3. **Shared/fixed company cost** — engineering, product, management, base observability, common infrastructure capacity, etc.
4. **One-time implementation cost** — work needed to get a restaurant live.

These should not be collapsed into a single "cost per restaurant" number.

A key implication is that a shared-infrastructure allocation such as **₹42,500 / N** is an accounting allocation, not proof that each restaurant intrinsically costs that amount to operate.

## 2. Current BABAI commercial model from `docs/products/babai/economics-model.md`

Current working tier names/prices in the model:

| Tier | Monthly price (pre-GST) | Model description |
|---|---:|---|
| LITE | ₹4,999 | Limited AI/conversational assistance; menu display/order only; menu updates up to 3/month |
| BASE | ₹9,999 | Users select/order/pay/use delivery; availability controls/basic time-bounded promos/combos |
| PRO | ₹19,999 | Full bounded user/restaurant access across allowed workflows + advanced API integrations |

The economics model currently gives illustrative loaded costs (before shared infra) of approximately:

- LITE: **₹1,700**
- BASE: **₹3,000**
- PRO: **₹8,000**

It also allocates shared infrastructure at **₹42,500 / N**:

- N=10 → ₹4,250/restaurant
- N=50 → ₹850/restaurant
- N=100 → ₹425/restaurant

At N=10, that produces illustrative loaded economics of:

| Tier | Price | Loaded cost incl. shared allocation | Contribution |
|---|---:|---:|---:|
| LITE | ₹4,999 | ₹5,950 | -₹951 |
| BASE | ₹9,999 | ₹7,250 | ₹2,749 |
| PRO | ₹19,999 | ₹12,250 | ₹7,749 |

Those numbers are useful as a conservative company-level accounting view, but they should **not** be treated as true marginal COGS.

## 3. Traffic model used for the sizing discussion

Working high-volume scenario:

- 1,000 restaurants
- 50 orders/restaurant/day
- **50,000 orders/day**
- 6 conversational flows/order
- 3–15 gateway hits/flow
- Average: **9 gateway hits/flow**
- Average: **54 requests/order**
- Heavy case: **~90 requests/order**

At 54 requests/order:

**50,000 × 54 = 2.7M requests/day**

Approximate monthly volume:

**~81M requests/month**

24-hour average:

**~31 RPS**

The operational peak is much higher because order traffic is concentrated into a smaller number of hours. A working burst envelope of roughly **500–750 RPS** is still modest for modern managed HTTP gateways / serverless ingress and does not by itself justify a large gateway fleet.

Important distinction:

> 54 cheap cache/state requests per order is very different from 54 full database transactions per order.

The architecture should be designed so that not every conversational turn causes heavy synchronous DB work.

## 4. Support cost should be centralized, not modeled per restaurant

For the assumed operating model, customer support should be treated primarily as a **shared operating function**, not a restaurant-specific variable cost.

Example discussed:

- 5,000 orders/day
- 40 operating days in a planning window
- 99.9% service success → 0.1% failure rate
- 3% of failures require human intervention

Then:

**5,000 × 40 × 0.001 × 0.03 = 6 human-intervention cases**

The arithmetic matters: the earlier version of this calculation used `0.01 × 0.03 × 5000 × 40 = 20`, but the stated 0.1% failure assumption corresponds to **0.001**, producing **6**.

This is only meaningful if "3%" means 3% of *failures*. If it means 3% of *all order events*, the support workload is obviously much larger.

Operational principle:

- BABAI owns platform failures and integration failures.
- Restaurants should own normal merchant-side mistakes such as accepting the wrong item, pricing mistakes they configured, kitchen mistakes, or fulfillment mistakes.
- Support should be pooled across restaurants.
- Reliability and tooling should reduce human intervention.

So a support budget should be modeled at the company/service level and allocated later for management accounting, rather than assumed as a hard cost per restaurant.

## 5. Hosting can be minimal at this traffic level

### Gateway / ingress

For this workload, a large always-on gateway cluster is probably unnecessary.

The basic options are:

**Managed HTTP gateway / serverless edge**
- Handles bursty request traffic naturally.
- Cost scales with requests.
- No idle fleet to manage.

**Small container gateway**
- 2 modest instances can easily be enough for a first production deployment if the service is stateless and downstream systems are healthy.
- Autoscaling can be added later.

The bottleneck is more likely to be the stateful layer (database, cache, external integrations) than raw HTTP ingress.

### Recommended low-complexity shape

Use:

- stateless API/gateway
- Postgres for durable transactional state
- Redis (or equivalent KV/cache) for ephemeral conversation/session state
- queue/event bus for non-critical asynchronous work
- object storage for logs/assets/backups where applicable
- centralized monitoring/alerting
- no unnecessary service-per-function decomposition

Avoid:

- 10+ microservices solely to "prepare for scale"
- synchronous fan-out to every downstream service
- putting every conversational event into a DB transaction
- overprovisioning compute before real usage proves it necessary

### Rough architecture principle

**Scale out the stateless layer first. Keep the stateful core small and well indexed. Push non-critical work async.**

## 6. Current provider-cost observations

These are external benchmark references used during the discussion and should be rechecked before committing to production purchasing decisions.

### OpenAI

GPT-5 mini pricing was cited at approximately:

- **$0.25 / 1M input tokens**
- **$2.00 / 1M output tokens**

For BABAI's bounded restaurant-ordering conversations, AI token spend should be modeled per *AI turn*, not per HTTP request.

The important point is:

> 54 gateway requests/order does not imply 54 LLM calls/order.

Most requests should be deterministic state/menu/order operations.

### Cloudflare Workers

The current Workers paid-plan benchmark discussed was:

- $5/month base
- 10M requests included
- additional requests priced per million
- CPU time billed separately after included CPU allocation

At ~81M requests/month, the raw request component is still relatively small compared with a typical database + operational stack, assuming the requests are lightweight.

### AWS API Gateway

HTTP APIs are materially cheaper than REST APIs at high request volume.

The working order-of-magnitude discussed was around **$1/M requests** in the first large usage tier, which makes ~81M requests/month roughly an **~$81/month** request-layer benchmark before other charges and region-specific details.

Do not use REST API pricing as the baseline if BABAI only needs HTTP API capabilities.

### AWS Fargate

Fargate is resource-based (vCPU + memory + storage). The cited public examples were used only as an order-of-magnitude reference and were **not** assumed to be exact Mumbai-region prices.

For BABAI, the important decision is architectural:

- keep API compute small
- scale horizontally only when CPU/concurrency requires it
- avoid a permanently large fleet

## 7. Suggested BABAI cost envelope by tier

The following is a **proposed planning model**, intentionally more bottom-up than the current loaded-cost numbers.

These are not claims that the repository's current production architecture already achieves them; they are target economics for a well-optimized implementation.

### LITE — target marginal cost: ~₹600–₹1,000 / month

Assumptions:

- Mostly menu browsing + order capture
- Limited AI usage
- Few merchant-side configuration changes
- Little or no complex integration
- Low support burden per restaurant because support is pooled

Suggested monthly cost envelope:

| Component | LITE target |
|---|---:|
| Compute + gateway | ₹100–₹200 |
| Postgres + cache allocation | ₹150–₹250 |
| AI | ₹50–₹150 |
| Messaging/API variable cost | ₹100–₹250 |
| Monitoring/backups/storage allocation | ₹50–₹100 |
| Shared ops allocation | ₹100–₹200 |
| **Target total** | **₹550–₹1,150** |

Planning midpoint: **~₹800/month**

At ₹4,999 price, this leaves substantial gross room before company-wide engineering payroll and acquisition costs.

### BASE — target marginal cost: ~₹1,000–₹1,800 / month

Assumptions:

- More conversation and workflow complexity
- Ordering + payment
- availability controls/promos/combos
- more backend state and integration activity
- still relatively bounded AI usage

Suggested monthly cost envelope:

| Component | BASE target |
|---|---:|
| Compute + gateway | ₹150–₹300 |
| Postgres + cache allocation | ₹250–₹350 |
| AI | ₹100–₹250 |
| Messaging/API variable cost | ₹200–₹400 |
| Payment-related variable cost | ₹100–₹250 |
| Monitoring/backups/storage allocation | ₹50–₹100 |
| Shared ops allocation | ₹150–₹250 |
| **Target total** | **₹1,000–₹1,900** |

Planning midpoint: **~₹1,400/month**

At ₹9,999 price, the raw service economics are strong unless third-party transaction fees are materially higher than expected.

### PRO — target marginal cost: ~₹2,500–₹4,500 / month

Assumptions:

- broader workflows
- advanced integrations
- higher support complexity
- more third-party API usage
- more restaurant-specific configuration
- potentially more AI interactions

Suggested monthly cost envelope:

| Component | PRO target |
|---|---:|
| Compute + gateway | ₹300–₹600 |
| Postgres + cache allocation | ₹400–₹700 |
| AI | ₹250–₹600 |
| Messaging/API variable cost | ₹400–₹800 |
| Payment/integration variable cost | ₹300–₹700 |
| Monitoring/backups/storage allocation | ₹150–₹300 |
| Shared ops allocation | ₹300–₹800 |
| **Target total** | **₹2,100–₹4,500** |

Planning midpoint: **~₹3,250/month**

At ₹19,999 price, there is still a large buffer for exceptional integration/support costs.

## 8. Suggested planning model at scale

The following is a better first-pass planning assumption than allocating all shared infrastructure equally at very low customer counts.

| Tier | Suggested planning midpoint | Price | Gross room before company fixed costs |
|---|---:|---:|---:|
| LITE | **₹800** | ₹4,999 | **₹4,199** |
| BASE | **₹1,400** | ₹9,999 | **₹8,599** |
| PRO | **₹3,250** | ₹19,999 | **₹16,749** |

These are **service-economics targets**, not fully-loaded company economics.

The company still has to pay:

- engineers
- product/management
- sales
- legal/accounting
- customer acquisition
- office/software
- founder time
- one-time onboarding work

Those belong in the fixed/operating-cost layer.

## 9. Why the current ₹1,700 / ₹3,000 / ₹8,000 loaded-cost model may look high

The current model is conservative because it effectively tries to make a small customer count absorb a meaningful share of common cost.

At N=10, a restaurant can appear expensive even when its *incremental* usage is cheap.

Example:

If an infrastructure stack costs ₹42,500/month to keep available for the business, then:

- 10 customers → ₹4,250/customer
- 100 customers → ₹425/customer
- 1,000 customers → ₹42.50/customer

The underlying infrastructure did not necessarily become 100× cheaper; the **allocation** changed.

This is why unit economics should show both:

1. **marginal COGS/customer**
2. **fully loaded company economics/customer at the current customer count**

Both are useful, but they answer different questions.

## 10. What could actually blow up BABAI cost

The risks are not primarily "500 RPS is too much".

The real risks are:

### 1. WhatsApp/provider fees

Message/conversation pricing can become a major variable cost at volume.

### 2. Payment processing

If BABAI absorbs payment costs, these scale directly with GMV/order volume.

### 3. Delivery APIs

Per-order or per-trip charges can dominate if BABAI pays for logistics.

### 4. Database architecture

A badly designed "every conversational step = heavy DB transaction" architecture can produce unnecessary compute, IOPS and connection pressure.

### 5. Observability

At millions of requests/day, verbose application logs can become a surprisingly large bill.

### 6. AI misuse

AI is cheap enough for bounded workflows, but a design that sends giant prompts/history on every turn can waste money.

### 7. Merchant-specific customization

This is the biggest likely operational cost.

If every restaurant becomes a bespoke software deployment, PRO economics can collapse regardless of cheap cloud compute.

## 11. Recommended cost-accounting structure

For future economics updates, keep these columns separate:

| Cost class | Example | Variable? |
|---|---|---|
| Message COGS | WhatsApp/provider fees | Yes |
| AI COGS | LLM input/output tokens | Yes |
| Transaction COGS | Payments | Yes |
| Delivery COGS | logistics APIs/partner fees | Yes |
| Compute COGS | gateway/app workers | Mostly variable |
| Data COGS | DB/cache/storage | Semi-variable |
| Support | pooled support team | Mostly fixed/semi-fixed |
| Onboarding | merchant setup | One-time / semi-variable |
| Custom integration | POS/API work | Customer-specific |
| Engineering | product/platform development | Fixed |
| Sales | acquisition | Fixed/variable by strategy |
| G&A | legal/accounting/admin | Fixed |

## 12. Recommended target architecture for low-cost scaling

A practical baseline:

```
WhatsApp / Web
      |
      v
Stateless API / Gateway
      |
      +----> Redis/KV (session/cache/menu)
      |
      +----> Postgres (orders, merchants, payments, durable state)
      |
      +----> Queue/Event Bus
                  |
                  +--> notifications
                  +--> kitchen/POS events
                  +--> delivery events
                  +--> analytics
```

Guidelines:

- keep the request path short
- cache menus/config
- make order creation transactional
- use idempotency keys for payment/order actions
- make downstream integrations asynchronous where possible
- avoid keeping large conversational histories in every request
- cap AI context aggressively
- batch analytics/events
- retain only the logs required for debugging/compliance

## 13. Final working conclusion

The current BABAI economics model is useful as a conservative **company-cost absorption** model, but it is too blunt to answer the question "what does one restaurant actually cost us to serve?"

The more useful operating target is:

- **LITE:** ~₹800/month service-cost midpoint
- **BASE:** ~₹1,400/month service-cost midpoint
- **PRO:** ~₹3,250/month service-cost midpoint

with the understanding that actual provider, payment, delivery, and integration charges must be plugged into the model as they become known.

The infrastructure itself should be kept deliberately small.

At the stated **50,000 orders/day / 2.7M requests/day** planning case, raw gateway throughput is not the scary part. The architecture should focus on:

- database efficiency
- cache/session design
- asynchronous processing
- third-party transaction fees
- merchant-specific support/customization
- observability volume

The key economic principle is:

> **Do not let low customer count make cheap marginal infrastructure look expensive. Track marginal COGS separately from fixed-cost absorption.**

## 14. Next validation steps

Before locking pricing or margins, replace assumptions in this document with measured values for:

1. actual requests/order
2. actual DB reads/writes/order
3. actual Redis/KV operations/order
4. actual AI calls/order and token counts
5. actual WhatsApp/provider fees/order
6. actual payment fees/order
7. actual delivery/integration fees/order
8. actual CPU + memory under representative peak load
9. actual log volume/month
10. actual support incidents/month

Once these are measured, the tier costs can be turned from planning estimates into a proper live unit-economics model.
