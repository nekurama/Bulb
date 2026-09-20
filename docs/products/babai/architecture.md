---
status: partial
owner: BABAI
last-reviewed: 2026-09-20
sources:
  - nekurama.raw.chat.json
  - nekurama.chatgpt.md
  - nekurama.babai.research.md
  - docs/products/babai/product-definition.md
  - docs/products/babai/domain-model.md
---

# Architecture

## Scope and posture

This is the current high-level architecture (HLD) posture for BABAI. It records
capability boundaries, invariants and research/design requirements. It is not a
deployment diagram, technology selection, or implementation plan.

The founder discussion explicitly places BABAI in research/product-architecture
work. Exact state contracts, schemas, persistence, workflow technology and
technical architecture belong to design and POC work, not to this document
yet. [nekurama.raw.chat.json:24; nekurama.chatgpt.md:13011-13053]

## Current architecture answer

BABAI is a WhatsApp-first, web-supported business operating platform. The
initial product flow is:

```text
Business WhatsApp
  -> conversation
  -> catalog/menu
  -> cart/order
  -> payment
  -> restaurant operations
  -> fulfillment
  -> completion and customer communication
```

WhatsApp is the primary conversational/action surface. Web is the dense
configuration, operations, recovery and multi-branch administration surface.
The two surfaces share identity and context; web is not a second product
account. [docs/products/babai/product-definition.md:16-30]

The HLD therefore has these logical layers:

```text
External surfaces and providers
  Meta WhatsApp | Web | payment providers | delivery providers
                         |
Channel and integration adapters
  webhook ingestion | outbound messaging | provider translation
                         |
Identity, authorization and policy
  identity resolution | membership | scoped permissions | decisions
                         |
Business capabilities
  tenant/branch | catalog/menu | conversation | cart/order
  payment | fulfillment/delivery | notification | billing/entitlements
                         |
State, workflow and integration infrastructure
  validated transitions | durable execution | events | audit
  retries | reconciliation | telemetry
```

These are logical boundaries. They may be deployed together or separately as
evidence and operational needs justify it.

## Decision status

The labels below distinguish current commitments from design work that is not
yet decided.

| Area | Status | Current posture and evidence |
| --- | --- | --- |
| Product workflow | **confirmed** | Restaurant-first, pickup-first flow with WhatsApp conversation, menu, order, payment, operations and fulfillment. [docs/products/babai/product-definition.md:16-20,38-78; nekurama.babai.research.md:120-133] |
| Channel split | **confirmed** | WhatsApp for immediate action; web for dense configuration and operations. [docs/products/babai/product-definition.md:22-30] |
| Tenant/branch/channel/billing separation | **confirmed** | Tenant is not a branch; channel is a business endpoint; subscription belongs to the billing account, not a channel. [docs/products/babai/domain-model.md:35-43; nekurama.chatgpt.md:5078-5115] |
| Capability ownership | **confirmed** | Capabilities such as catalog, conversation, ordering, payment, fulfillment, identity, policy, workflow, audit and reconciliation are distinct ownership concerns. They are not automatically services. [docs/products/babai/domain-model.md:138-165] |
| Coarse-grained service direction | **partial** | Founder discussion records coarse-grained services and service-owned state, but the exact service cut and deployment timing remain open. [nekurama.chatgpt.md:16920-16925; nekurama.chatgpt.md:54945-54953] |
| Deployment topology | **unknown; challenge-required** | The history contains both a modular-monolith candidate and a coarse-grained-service direction. The architecture must not choose between them until MVP load, team capacity, security isolation and operational cost are tested. [nekurama.chatgpt.md:3435-3447; nekurama.raw.chat.json:50577] |
| State/workflow capability | **confirmed requirement; implementation unknown** | BABAI needs validated domain transitions plus durable workflow execution with idempotency, transactions, retries, timers, human intervention, audit history, recovery and compensation. Temporal, another engine, custom code or a combination are explicitly unselected. [nekurama.chatgpt.md:12843-12884,12888-12941,12945-12995,13011-13053] |
| Event semantics | **partial** | Event-first asynchronous processing, explicit contracts, observable lifecycles and categorized event origins/types are research-level decisions. Event sourcing and the broker/infrastructure remain open. [nekurama.chatgpt.md:13100-13134,13143-13150,13726-13734] |
| Persistence and data ownership | **partial** | Domain state is authoritative and cross-capability ownership is respected; exact stores, schemas, transactions and partitioning belong to design. [docs/products/babai/domain-model.md:196-202; nekurama.chatgpt.md:12888-12941] |
| Meta/WhatsApp topology | **partial; challenge-required** | Direct Meta Tech Provider/Cloud API is strategic, with BSP as an adapter/fallback. Existing-number coexistence and the exact onboarding restrictions still require provider validation. [docs/products/babai/product-definition.md:38-41; nekurama.chatgpt.md:6984-7003] |
| Payments | **confirmed boundary; integration unknown** | Customer funds go directly to the business; payment is a separate state machine and provider details remain open. [docs/products/babai/product-definition.md:60-63,138-140] |
| Fulfillment and delivery | **confirmed boundary; integration unknown** | Fulfillment is provider-agnostic and pickup-first; delivery is not an MVP dependency. [docs/products/babai/product-definition.md:71-74; nekurama.babai.research.md:120-133] |
| ONDC and broader discovery | **confirmed out of MVP; future unknown** | Keep the architecture network-neutral, but do not make ONDC or marketplace discovery an MVP workstream. [docs/products/babai/product-definition.md:105-122] |
| Runtime, protocol, broker, database and hosting | **unknown; challenge-required** | Node.js/TypeScript, ASP.NET Core, PostgreSQL, gRPC/REST and broker candidates appear in discussion as options, not selections. Compare them in design against requirements and cost. [nekurama.chatgpt.md:330-345,3435-3447,13143-13150,17111-17116] |
| SLOs, cost thresholds and disaster recovery | **unknown** | The pilot and real provider usage must establish these before production topology is fixed. Research explicitly calls out message reliability, Meta onboarding, payment verification and operational trust as unvalidated. [docs/products/babai/product-definition.md:146-160; nekurama.babai.research.md:104-116] |

## Boundary rules

1. **Domain state is authoritative.** Aggregates own validated transitions.
   Events, audit, workflow and telemetry support the domain; none replaces it.
   [docs/products/babai/domain-model.md:196-202]
2. **Capabilities own their state and policies.** Other capabilities use stable
   identifiers, commands and events rather than cross-capability database
   reads. The exact physical isolation is still a design decision.
3. **AI is advisory.** AI can understand, extract, answer, recommend and
   summarize, but cannot authoritatively change payment, permission, order,
   refund or consent state. [docs/products/babai/product-definition.md:130-136]
4. **Human takeover is first-class.** It pauses conversational automation,
   not order, payment or fulfillment processing. [docs/products/babai/product-definition.md:134-136; docs/products/babai/domain-model.md:63-66]
5. **External effects are retryable and duplicate-prone.** Webhooks,
   messages, payment operations, delivery booking and notifications require
   idempotency, verification, reconciliation and explicit failure handling.
   [nekurama.chatgpt.md:12945-12983]
6. **Asynchronous by default, synchronous where necessary.** A business
   transaction must durably record authoritative state and its event intent
   before asynchronous publication; this is a reliability pattern, not a
   broker selection. [nekurama.chatgpt.md:13108-13134]
7. **Do not over-expand the pilot.** The initial architecture must support one
   tenant, one branch and one channel per pilot business, while preserving
   future multi-branch and generic local-business boundaries. [docs/products/babai/product-definition.md:80-103; docs/products/babai/domain-model.md:35-49]

## HLD capability map

The following is a capability map, not a one-capability-per-service mandate:

| Capability group | Owns | Does not own |
| --- | --- | --- |
| Identity and access | identities, memberships, roles, permissions, scoped decisions | business aggregate state |
| Tenant and billing | tenant, branch, channel associations, billing account and subscription context | customer order payment funds |
| Catalog and availability | menu structure, immutable revisions, publication and availability | committed order truth |
| Conversation and channel | inbound/outbound messages, conversation lifecycle, automation and takeover | authoritative order/payment state |
| Cart and commercial calculation | mutable intent and deterministic price/promotion/tax contributions | committed order lifecycle |
| Ordering | order commitment, order state and immutable commercial snapshot | payment settlement or delivery execution |
| Payment | payment intent/state, provider interaction and reconciliation | order acceptance |
| Fulfillment and delivery | pickup/delivery lifecycle, provider interaction and tracking where used | catalog or payment truth |
| Notification | transactional/support/other outbound communication | authorization to perform business state changes |
| Workflow | durable process execution, timers, waits, retries and compensation | authoritative aggregate state |
| Events, audit and telemetry | integration coordination, immutable history and observation | ownership of domain state |

The domain model is the authority for aggregate roots and commercial
boundaries; the LLD companion records interaction contracts without implying
deployment boundaries. [docs/products/babai/domain-model.md:138-165,204-223]

## Research-to-design gates

Before implementation, design must answer:

- exact aggregate invariants and transition contracts;
- command, domain-event and integration-event taxonomy;
- event envelope, schema/versioning, retention, replay and ordering rules;
- atomic state/event persistence and inbox/outbox behavior;
- workflow boundary, durable execution choice and human-wait semantics;
- Meta onboarding/coexistence and webhook verification;
- payment confirmation, refunds and reconciliation;
- fulfillment/delivery provider contract;
- authorization context propagation and audit requirements;
- pilot SLOs, cost ceilings, recovery objectives and operational ownership.

These are intentionally not hidden inside this HLD. The focused design posture
is in `docs/products/babai/architecture-lld.md`.
