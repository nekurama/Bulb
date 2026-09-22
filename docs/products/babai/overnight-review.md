---
status: overnight-handoff
owner: BABAI Architecture / Product
last-reviewed: 2026-09-22
branch: feat/overnight
---

# Overnight Architecture Review Handoff

This packet is the reviewable output of the overnight hardening pass. It
does not claim production readiness or external approval. It turns the
existing partial artifacts into explicit HLD, TRD, LLD, runtime, UX, event,
SDLC and contract surfaces.

## 1. Decision headline

Use a **hybrid evolution path**:

1. TypeScript/Node modular monolith for authoritative domain transactions.
2. Isolated API/BFF, worker, provider-adapter, AI-task and projection capacity
   from the first production-shaped pilot.
3. PostgreSQL + transactional outbox/inbox + managed queue + DLQ/recovery.
4. Extract domain services only after measured security, data ownership,
   independent scaling, provider-failure isolation, lifecycle or operational
   ownership pressure.
5. Keep AI behind typed task/command ports; no model or agent framework owns
   order, payment, fulfillment, permissions, consent or refunds.

Microservices remain a valid later option, not a default. EKS/Kubernetes,
Kafka, multi-region and workflow SaaS are not justified by architecture
fashion alone.

The approved commercial ladder is unchanged by this packet:
LITE **₹1,999 → ₹2,499**, BASE **₹5,999 → ₹7,499**, and PRO
**₹12,999 → ₹14,999**, before GST, with the approved onboarding targets.
Runtime/Meta/AI costs are modeled separately and do not create an automatic
price change. The ₹19,999 PRO amount remains only a documented
integration-heavy/multi-outlet exception.

## 2. Artifact map

| Layer | Artifact | Review purpose |
|---|---|---|
| BRD | [`brd.md`](brd.md) | Product truth, scope, buyer, pilot and open decisions |
| TRD | [`technical-requirements.md`](technical-requirements.md) | Functional/non-functional/capacity/security requirements |
| HLD/LLD | [`end-to-end-architecture.md`](end-to-end-architecture.md) | System context, modules, paths, state, persistence and evolution |
| LLD/events | [`events-catalog.md`](events-catalog.md) | Event names, envelopes, idempotency, replay and projections |
| Runtime/AI | [`runtime-and-ai-architecture.md`](runtime-and-ai-architecture.md) | Topology options, cost model, model routing and workflow choice |
| UX | [`pro-operations-ux.md`](pro-operations-ux.md) | WhatsApp cards and high-volume Pro operations surface |
| UX prototype | [`pro-operations-prototype.html`](pro-operations-prototype.html) | Standalone HTML cockpit design for queue/detail/recovery review |
| SDLC | [`sdlc-standard.md`](sdlc-standard.md) | Human/bot coding, review, validation and release rules |
| Legal controls | [`contract-controls.md`](contract-controls.md) | Contract packet, evidence ledger and professional gates |
| Code contracts | [`contracts.ts`](contracts.ts) | TypeScript command/event/port shapes for implementation |
| Validation | [`test-and-validation-plan.md`](test-and-validation-plan.md) | Domain, provider, AI, recovery, load, browser and pilot evidence |
| Operations | [`operations-runbook.md`](operations-runbook.md) | Incident, recovery, reconciliation, restore and cost/enrollment controls |
| Data/DB | [`schema-and-migration-plan.md`](schema-and-migration-plan.md) | PostgreSQL ownership, migrations, retention, outbox/inbox and scale triggers |
| API/edge | [`api-contracts.md`](api-contracts.md) | Webhook, BFF/query/command, error, freshness, auth and versioning contracts |

Existing [`architecture.md`](architecture.md), [`architecture-lld.md`](architecture-lld.md), [`domain-model.md`](domain-model.md),
[`flow-architecture.md`](flow-architecture.md), [`flow-inventory.md`](flow-inventory.md), [`experience-and-channels.md`](experience-and-channels.md),
[`business-model.md`](business-model.md), [`economics-model.md`](economics-model.md) and [`pilot-metrics.md`](pilot-metrics.md) remain source documents. The new
packet cross-references rather than silently rewriting their historical
evidence.

## 3. High-risk gaps still open

- Meta Cloud API/BSP coexistence, approval, template and number ownership.
- Payment provider, refund/reconciliation semantics and direct settlement.
- Delivery provider and pickup-code responsibility.
- DPDPA/privacy notices, DPA/subprocessors, retention and cross-border terms.
- Exact Pro UI freshness budgets, role matrix and browser implementation.
- Runtime provider quotes and AI model rate cards.
- Scale/load evidence at the 500 and 1,000 restaurant envelopes.
- Restore/replay/reconciliation drills and incident ownership.

These are explicit validation gates, not silent assumptions.

## 4. Review checklist for tomorrow

1. Confirm hybrid versus service-extraction boundaries.
2. Review the order/payment/fulfillment/support state machines.
3. Approve or challenge the event names and envelope.
4. Review the Pro UI command matrix for cashier/staff/owner roles.
5. Replace runtime planning inputs with current provider quotes.
6. Select the first model set only after the evaluation corpus is agreed.
7. Convert contract controls into counsel/CA-reviewed templates.
8. Decide which artifacts should be merged to `main`.

## 5. Branch and deployment boundary

All overnight work belongs on `feat/overnight`. It must not be deployed or
merged to `main` until the next review explicitly approves the packet and the
validation checklist passes.
