---
status: proposed-review-packet
owner: BABAI Architecture / Economics
last-reviewed: 2026-09-22
---

# BABAI Runtime Cost and AI Architecture Options

This document excludes management cost, founder salaries and general company
burn. It models only the runtime required to deliver the product experience.
Provider rate cards, taxes and production quotes remain external inputs.

## 1. Workload baseline

Current planning inputs:

```text
6 conversational flows/order
9 gateway hits/flow
54 average requests/completed order
90 heavy-case requests/completed order
50 completed orders/day/restaurant ceiling
```

Derived reference:

| Scale | Orders/day | Average requests/day | Heavy-case requests/day |
|---:|---:|---:|---:|
| 10 restaurants | 500 | 27,000 | 45,000 |
| 500 restaurants | 25,000 | 1,350,000 | 2,250,000 |
| 1,000 restaurants | 50,000 | 2,700,000 | 4,500,000 |

These are capacity scenarios, not demand forecasts. Provider throttles,
database writes, queue work, AI calls, outbound messaging and delivery
callbacks may dominate raw HTTP gateway cost.

## 2. Topology options

| Option | Shape | Cost/operations | Strength | Weakness | Recommendation |
|---|---|---|---|---|---|
| A | Modular monolith: API + worker in one deployable, Postgres, queue | Lowest moving parts | Fastest pilot, simple transactions and debugging | Less failure isolation; worker/API scaling coupled | Valid pilot baseline |
| B | Hybrid: modular monolith API/domain + isolated worker/provider/notification/analytics runtimes | Low-to-medium | Isolates provider retries, AI and reporting; preserves domain transactions | More deployment and tracing work | **Preferred evolution path** |
| C | Domain microservices: tenant/catalog/order/payment/fulfillment separate | High | Independent scaling/ownership and failure isolation | Distributed transactions, duplicated auth/context, higher ops cost | Defer until evidence |
| D | Event-first microservices + workflow platform | Highest | Strong long-running orchestration and independent teams | Expensive before volume/team maturity; complex debugging | Only after explicit trigger |

### Recommendation

Use **Option B as the architecture target** while implementing the first
slice as a modular monolith plus separate worker processes. This preserves
transactional correctness and low cost while isolating:

1. provider/webhook and notification work;
2. AI task execution;
3. delivery/payment callbacks and reconciliation;
4. Pro UI projections/report generation.

These can begin as separate worker deployables using the same repository and
contracts. A domain service extraction is justified only by measured
throughput, security, failure-isolation or ownership pressure.

These are separate responsibility classes even when they share one worker
runtime at first:

- **provider adapters** translate external APIs and own external IDs/callbacks;
- **workflow workers** run retries, timers, reconciliation and human waits;
- **AI workers** run bounded model tasks and return validated proposals;
- **projection workers** build read models and reports;
- **notification workers** render/send templates and track delivery.

Combining them in one process is a deployment optimization, not a change in
authority or ownership. Their queues, metrics, failure classes and cost
attribution remain distinct.

## 3. Least-cost runtime stack

### Pilot candidate

| Component | Starting shape | Scale trigger |
|---|---|---|
| API/BFF | One right-sized container/task | CPU/latency/connection pressure or independent deploy need |
| Domain worker | One worker capacity model | Queue age, provider retries or AI latency |
| PostgreSQL | Managed standard single primary + backup | Connection/write/IO saturation or recovery requirement |
| Queue | Managed at-least-once queue + DLQ | Ordering/throughput/partition need |
| Object storage | Encrypted private bucket | Menu uploads, exports, backups |
| Cache | Optional small cache; never authoritative | Measured hot-read pressure |
| Secrets | Managed secret store | Production credential lifecycle |
| Observability | Redacted logs, metrics, traces, alerts | Volume/retention/SLO evidence |
| CDN | Static assets only, optional | Public asset traffic |

Do not add EKS/Kubernetes, Kafka, Aurora, multi-region, service mesh or a
workflow SaaS product merely because they are available. Test portable
containers and keep provider ports.

## 4. Cost model

```text
runtime_cost =
  compute
  + database
  + queue
  + object_storage
  + cache
  + observability
  + secrets/network
  + AI_model_usage
  + messaging/provider_usage
  + payment/delivery_provider_usage
```

Separate:

- fixed shared platform cost;
- usage cost by restaurant/order;
- provider pass-through cost;
- one-time onboarding/integration cost;
- recovery/failure cost.

Use three scenarios:

| Scenario | Existing planning envelope | Use |
|---|---:|---|
| Low | ₹0–₹10,000/month before provider pass-through | Pilot minimum |
| Base | ₹10,000–₹30,000/month before provider pass-through | Planning case |
| High | ₹30,000–₹100,000+/month before provider pass-through | Stress/scale warning |

The current economics model's ₹0/₹10k/₹30k/₹100k envelopes remain planning
inputs. Replace them with invoices, rate cards, request counts, AI units,
queue jobs, storage, log volume and support/recovery allocation.

## 5. AI architecture

### Decision

Use a **bounded task router plus deterministic domain commands**:

```text
message
  -> language/noise/intent classifier
  -> structured extraction or response-draft task
  -> schema validation
  -> policy + authorization + aggregate transition
  -> command
```

AI may:

- extract menu candidates from approved uploads;
- classify customer/restaurant intent;
- propose cart item/variant/modifier matches;
- draft a response or summarize a support case;
- suggest a next action;
- translate or normalize language.

AI may not directly:

- mark an order paid/accepted/ready/delivered;
- issue/refund money without a typed authorized command;
- change permissions, consent or tenant scope;
- publish a menu/promotion without the required review;
- select a provider, tier or business outcome from untrusted text.

### Model routing

| Task | Default model class | Escalate when |
|---|---|---|
| Intent/noise classification | Small, low-latency model or deterministic rules | Confidence below threshold |
| Menu/item extraction | Structured-output capable small/medium model | Ambiguous image, modifier or price |
| Cart normalization | Small/medium structured-output model | Multiple candidate matches |
| Response draft/translation | Small/medium model with templates | Sensitive exception or low confidence |
| Support summary | Small/medium model with redaction | Financial/legal/security issue |
| Complex multi-step planning | Avoid in pilot; bounded workflow only | Human/Pro review |

Model choice must be benchmarked on the BABAI evaluation set for:
accuracy, latency, structured-output validity, multilingual behavior,
prompt-injection resistance, cost per successful task and fallback rate. Do
not choose a model from marketing claims or raw token price alone.

### LangGraph and alternatives

| Approach | Use | Decision |
|---|---|---|
| Typed state machines + queue/outbox | Order/payment/fulfillment/support authority | **Use now** |
| Small task-router library/custom module | Classification, extraction and response drafts | **Use now** |
| LangGraph | Bounded AI subgraph with explicit typed tools and checkpoints | Optional later; never source of domain truth |
| Temporal/managed workflow | Long timers, durable human waits, compensation and fan-out | Reassess after measured workflow complexity |
| n8n/low-code | Internal non-authoritative experiments | Do not place payment/order authority here |

LangGraph can be useful for a bounded AI task graph, but it must not own
payment/order state. The initial cost/control choice is deterministic domain
state plus queue/outbox; add a workflow product only when timer/retry/recovery
evidence justifies its operational cost.

## 6. AI safety and cost controls

- hard token/context budgets per task and tenant;
- model routing by task and confidence;
- cached menu/catalog retrieval with revision IDs;
- no unrestricted conversation memory;
- redact payment, secrets and unnecessary personal data;
- schema validation and policy checks after every model result;
- retries only for transport/temporary errors, not semantic failures;
- dead-letter low-confidence or repeated failures;
- record model, version, tokens, latency, retries, result and cost;
- sample human review for extraction and response quality;
- kill switch per task/model/provider;
- prompt-injection and tool-abuse test corpus.

## 7. Capacity and extraction triggers

Measure jointly:

- API latency/error rate and DB connection/lock pressure;
- queue age, worker throughput and retry/DLQ volume;
- provider rate limits and callback delay;
- AI latency, cost/order and fallback rate;
- notification delivery and reconciliation lag;
- Pro projection freshness;
- support minutes and human takeover rate.

Move from hybrid workers to domain services only when a measured trigger is
met and the added distributed-systems cost is accepted in a decision record.

## 8. Current public pricing facts used for planning

Accessed **2026-09-22**. These are public facts, not quotes for the BABAI
deployment:

- AWS Fargate bills by requested vCPU, memory, operating system, architecture
  and storage, per second with a one-minute minimum; Fargate Spot is for
  interrupt-tolerant ECS tasks and advertises up to 70% discount. Additional
  charges include logs, public IPv4 and data transfer.
  Source: https://aws.amazon.com/fargate/pricing/
- Amazon RDS for PostgreSQL cost is composed of instance hours, storage,
  backup storage, I/O/IOPS where applicable and data transfer. The page also
  warns that stopped instances still incur storage/backup charges.
  Source: https://aws.amazon.com/rds/postgresql/pricing/
- Amazon SQS has no minimum fee and documents a 1-million-request monthly
  free tier; actual queue cost still depends on request volume and related
  services.
  Source: https://aws.amazon.com/sqs/pricing/
- Meta WhatsApp Business Platform pricing is per delivered template message
  from July 1, 2025. Non-template messages are free inside an open
  customer-service window; utility templates inside that window are free.
  Template category, recipient country, volume tier and billing currency
  matter.
  Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing
- OpenAI's current public pricing page lists, among others, standard
  `gpt-5.4-mini` at $0.75/1M input tokens and $4.50/1M output tokens,
  `gpt-5-mini` at $0.25/$2.00, `gpt-5-nano` at $0.05/$0.40, and
  `gpt-4o-mini` at $0.15/$0.60. Batch pricing is lower where the task is
  asynchronous. Regional processing may add a 10% uplift for eligible models.
  Source: https://developers.openai.com/api/docs/pricing/

These facts reinforce the architecture choices:

1. keep routine WhatsApp replies inside the service window where product and
   consent rules permit;
2. avoid an always-on model call for deterministic menu/status/confirmation
   messages;
3. use a small/cheap model for classification and structured extraction;
4. reserve stronger models for ambiguity, summarization or escalation;
5. use Spot only for replayable, interruption-tolerant workers—not webhook
   acknowledgment, PostgreSQL or payment reconciliation;
6. treat logs, public IPv4, backup storage and data transfer as first-class
   runtime costs rather than assuming compute is the whole bill.

## 9. Research addendum: cheapest viable baseline

An independent public-pricing research pass on **2026-09-22** found a lower
cash-cost option than an AWS-only managed stack:

| Component | Candidate | Approximate public planning cost |
|---|---|---:|
| Always-on application host | AWS Lightsail Linux | **$5/month** |
| Managed Postgres | Neon Launch, 0.25–0.5 CU | **~$22–$41/month** with small storage/restore |
| Queue | SQS Standard | **$0–$2/month** at low volume |
| Cache/rate limits | Upstash Redis PAYG | **$0–$10/month** initially |
| Object storage | Cloudflare R2 | **~$0.015/GB-month** plus operations |
| Observability | Better Stack/Grafana free tier | **$0 initially** |
| Small-production baseline | Excluding Meta, AI, taxes, domain and unusual egress | **~$27–$45/month** |

This is a candidate for a cost-minimal environment, not an automatic
production choice. A single Lightsail host is a single-host failure risk;
automated rebuild, external backups, restore drills and a migration path to
two hosts/Fargate are mandatory. Use ECS/Fargate or equivalent when zero
downtime, independent worker scaling, private networking or failure isolation
justifies the higher cost.

The same research found current India WhatsApp planning examples of
approximately **₹0.115 utility**, **₹0.115 authentication** and **₹0.8631
marketing** per delivered template message, with non-template service-window
messages currently free. Meta pricing and free-window policy can change; the
official rate card must be rechecked after **2026-10-01** and before any
commercial quote. Direct Meta remains the lowest recurring provider-cost
candidate; Twilio's public comparison adds approximately **$0.005 per
inbound/outbound message** plus Meta fees, while 360dialog Regular lists
approximately **$59/number/month** plus Meta fees.

For AI routing, the same research estimates a 1,200-input/150-output-token
call at approximately:

| Model class/example | Approximate USD/call | Use |
|---|---:|---|
| Gemini 2.5 Flash-Lite | $0.00018 | High-frequency classification/extraction candidate |
| `gpt-5-mini` | $0.00060 | Structured fallback/drafting candidate |
| `gpt-4o-mini` | $0.00027 | Publicly priced structured fallback/drafting candidate |
| Gemini 2.5 Flash | $0.000735 | More complex grounded response candidate |

These are token-only estimates excluding retries, tool calls, image/audio
inputs, caching differences, taxes and provider changes. Deterministic
responses should remain the default; model use must be measured per successful
task, not per message alone.

Research sources and access date:

- https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing
- https://whatsappbusiness.com/products/platform-pricing/#rates
- https://www.twilio.com/en-us/whatsapp/pricing
- https://www.360dialog.com/pricing/
- https://aws.amazon.com/lightsail/pricing/
- https://neon.com/pricing
- https://upstash.com/pricing/redis
- https://developers.openai.com/api/docs/pricing/
- https://ai.google.dev/gemini-api/docs/pricing

All amounts are planning inputs. Reconcile public pages, region, currency,
taxes, provider account terms and measured usage before procurement.
