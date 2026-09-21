---
status: partial
owner: BABAI
last-reviewed: 2026-09-15
sources:
  - nekurama/Bulb#1
  - historical ManojVysyaraju/bulb#1
---

# Architecture

## Current answer

Use coarse-grained service boundaries by capability, security, data ownership and lifecycle. Candidate boundaries include Identity/Auth, Policy, Tenant/Branch, Catalog/Menu, Conversation/Messaging, Ordering, Payment, Fulfillment/Delivery, Billing/Entitlements, Notification and Audit/Observability.

Runtime preference: TypeScript/Node; Go remains a challenger where justified; Java is excluded from the current direction. Use gRPC + Protobuf where justified.

Reliability: at-least-once events, outbox, inbox/dedupe/idempotency, retry/DLQ/replay/reconciliation. Services own their state; avoid cross-service DB reads.

## WhatsApp / Meta

Target direct Meta Tech Provider / Cloud API topology with business-owned WABA/phone. Keep a BSP adapter/fallback boundary. Existing eligible numbers should be connected where Meta coexistence supports it; product UX should say “Connect your existing WhatsApp”.

## ONDC posture

Architecture should remain network-neutral and ONDC-aware, but ONDC is not an MVP workstream or current integration commitment.

## Questions

- [ ] Final deployment topology
- [ ] Exact service decomposition for MVP
- [ ] Data storage choices
- [ ] AI architecture and model/provider policy
- [ ] Production SLOs
- [ ] Cost model and scaling thresholds
- [ ] Disaster recovery targets

## Proposed HLD guidance (not founder-confirmed decisions)

The following is an implementation-oriented architecture derived from the current product and domain constraints. It is guidance for the design phase, not a commitment to deployment topology or to one service per capability.

### Logical capability architecture

```text
WhatsApp / Web
     |
Channel & Integration
     |
Conversation + Identity + Authorization
     |
Catalog/Menu --- Availability
     |
Cart --- Price --- Promotion --- Tax/GST
     |
Order
   |----------------|
Payment        Fulfillment --- Delivery / Tracking
     |
Notification / Workflow / Reconciliation / Audit
```

For the MVP, these boundaries may live in a modular monolith or a small number of deployables. A capability should become a separately deployed service only when independent scaling, security isolation, provider-failure containment, lifecycle or operational ownership justifies it. This preserves the documented distinction between conceptual engines and deployment boundaries.

The initial integration boundary should isolate Meta-specific behavior behind a channel adapter, with direct Meta Cloud API / Tech Provider support as the target and a BSP adapter/fallback where required. The business-owned WABA and phone remain external-provider concerns; provider webhooks and outbound sends must be deduplicated and idempotent. ONDC remains network-neutral and is not an MVP integration.

### Data ownership and consistency

The current aggregate roots are `Tenant`, `Branch`, `Channel`, `TenantCustomer`, `Menu`, `Conversation`, `Cart`, `Order`, `Payment` and `Fulfillment`. `Catalog` is a branch-level organizational concept rather than the primary transactional aggregate. Each owning boundary should persist its authoritative state and expose references by stable IDs rather than sharing authoritative database reads.

The commercial path should remain composable:

```text
Catalog/Menu -> Cart -> Price -> Promotion -> Tax/GST -> Order commitment
```

Engines evaluate typed facts in a Calculation Capsule and contribute attributable results without mutating another engine's authoritative state. Order commitment freezes line items, selections, prices, discounts, taxes, totals, applied benefits and relevant provenance, including `menuRevisionId`. Historical orders must not be recalculated from current rules or menu configuration.

Events should be at-least-once and implemented with an outbox, inbox/deduplication, idempotency keys, bounded retries, DLQ/replay and reconciliation. Events, workflow records, audit records and telemetry coordinate or describe the system; they do not replace authoritative domain state.

## Proposed LLD guidance (not founder-confirmed decisions)

The design phase should define typed commands, queries and events for the following contracts:

- **Channel adapter:** receive verified inbound provider events, send outbound messages with an idempotency key, process provider webhooks, and expose connection lifecycle states (`DISCOVERED`, `AUTHORIZING`, `CONNECTED`, `VERIFYING`, `CONFIGURING`, `READY`, plus failure/suspension states).
- **Conversation:** append messages, request/assign/release human takeover, and change automation mode. Human takeover pauses conversational automation only; order, payment and fulfillment processing continue independently.
- **Commercial evaluation:** evaluate a Calculation Capsule deterministically, with explicit bounded re-evaluation when a contribution changes the commercial context.
- **Order/payment/fulfillment:** commit an order snapshot and execute validated state-transition commands. Payment completion must not imply order acceptance; Payment and Fulfillment remain separate state machines.
- **Workflow:** support idempotency, transactions, retries, timers, human waits/intervention, audit history, recovery and compensation. The workflow implementation is intentionally not selected here.

Every command should carry authorization context, tenant/branch scope, correlation and causation identifiers, and an idempotency key where repetition is possible. State changes should occur through validated transitions rather than direct status mutation. Exact schemas, invariants, event versioning, monetary precision/rounding and persistence choices remain design-phase work.

## Trust, safety and reliability constraints

- AI may assist with understanding, extraction, answers, recommendations, summaries and suggested actions; it must not be authoritative for payment state, permissions, order state, refunds, consent or other controlled business state. AI-originated actions should become typed, domain-validated proposals or commands.
- Human takeover is a first-class path for ambiguity, paid-but-unavailable items, changes, cancellations, refunds and customer disputes. Restaurant staff own order modification and cancellation decisions.
- Customer funds should flow directly from customer to business. BABAI subscription billing remains separate; BABAI is not the initial merchant of record or customer-funds custodian.
- Tenant isolation, branch-scoped authorization, least privilege, zero-trust access, auditable sensitive operations, retention/deletion controls, backup/recovery and provider-account isolation are mandatory control areas.
- External integrations require signature/authentication verification, deduplication, retry safety, reconciliation and explicit failure handling. No silent success-shaped fallback is acceptable for payment, order, permission or provider state.

## Evidence and source references

Founder intent in `nekurama.raw.chat.json`:

- **USER 16:** “Yes we need state engine for the flows not only for payments.”
- **USER 19:** “We need efficient one for internal communication imo, not the easy one for us.” This supports evaluating RPC/API choices on operational efficiency rather than convenience.
- **USER 21:** calls menu structure a “founding stone” and raises specials, offers, GST, packaging/delivery, availability and paid-but-unavailable handling.
- **USER 26:** “Order modification or Cancellation is human intervention from restaurant and let them own it.”
- **USER 29:** “Remove java from the competition. I want to favoured ts but may the right stack win.”
- **USER 31:** requires “idempotency, transactions, auto retries, timers, human waits or interventions, audit history, recovery.”

Repository evidence:

- `docs/products/babai/domain-model.md` — **Core hierarchy**, **Core domain**, **Commercial engines and calculation boundaries**, **Calculation Capsule Principle**, **Aggregate references and infrastructure**, **Current aggregate map**, and **Remaining domain battles**.
- `docs/products/babai/product-definition.md` — **MVP boundary**, **Product boundaries / non-negotiables**, **Initial pilot workflow**, and **Explicit pilot out of scope**.
- `docs/products/babai/experience-and-channels.md` — **Channel lifecycle** and **Human takeover**.
- `docs/company/security-privacy-controls.md` — **Current answer**.
- `nekurama.babai.research.md` — **Proposed BABAI solution**, **Immediate pilot plan**, **What remains unvalidated**, and **Strategic conclusion**.

The raw conversation also records the explicit research-stage position: “don't lock Temporal or any implementation yet.” Accordingly, workflow technology, final deployment topology, storage choices, AI/provider policy, production SLOs, cost/scaling thresholds and disaster-recovery targets remain unresolved.
