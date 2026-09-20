---
status: partial
owner: BABAI
last-reviewed: 2026-09-20
sources:
  - nekurama.raw.chat.json
  - nekurama.chatgpt.md
  - docs/products/babai/architecture.md
  - docs/products/babai/domain-model.md
---

# Architecture Boundaries

## Status

**Partial.** The source establishes several ownership, trust and lifecycle boundaries, but it does not establish the final deployment topology or implementation choices. This handoff records confirmed constraints, candidate deployment boundaries and unresolved questions without selecting microservices, Temporal, storage, an AI provider or a cloud/deployment topology.

Raw-founder citations use `Raw T<number> (message-id)`. `T<number>` is the stable chronological substantive-message index derived from `nekurama.raw.chat.json`, ordered by `create_time` and then mapping-node ID. Founder-authored messages are primary product-intent evidence; assistant messages are retained as recorded decision history and recommendations, not as independent founder approval.

## Boundary vocabulary

| Term | Meaning | Status rule |
|---|---|---|
| **Aggregate boundary** | Transactional ownership, invariants and validated state transitions | Confirmed domain-model concept |
| **Capability/engine boundary** | Cohesive responsibility for a domain function, calculation or policy | Confirmed as a logical model; not a deployment promise |
| **State/workflow boundary** | Authoritative domain state and transitions versus durable orchestration around them | Confirmed requirement; implementation unresolved |
| **Integration boundary** | External provider identity, transport, callbacks and adapter behavior | Confirmed architectural constraint |
| **Trust/policy boundary** | Identity, authorization, scope and policy checks before state changes | Confirmed architectural constraint |
| **Deployment boundary** | Independently operated runtime with an explicit operational reason | Candidate only until design evidence justifies it |

## Confirmed boundaries

| Boundary | Confirmed rule | Evidence |
|---|---|---|
| Business context | `Tenant` is the business/business group; `Branch` is operational and authorization scope; `Channel` is a business communication endpoint | Raw T33 `ded20a72-7392-4785-8983-b6e7d75eae3b`; Raw T34 `bbb21cdc-296c-4806-af69-c1b7f40c4cf8`; `domain-model.md` |
| Customer relationship | Canonical customer identity may be global, but relationship, consent, conversations, orders and operations are tenant-scoped through `TenantCustomer` | Raw T99 `bbb21fb5-8f72-4a7f-b42b-333101d4a900`; Raw T102 `fa5fecac-d416-4c7e-aa77-f3d9d77978bd`; Raw T149 `bbb2129e-e9fa-43bf-adca-b0bc7a956664` |
| Aggregate ownership | Aggregate state and validated transitions are authoritative; cross-aggregate references use stable IDs | `domain-model.md`, especially **Aggregate references and infrastructure** |
| Commercial commitment | Cart intent is mutable; Order is a separate committed aggregate that freezes evaluated commercial inputs, benefits, totals and provenance | `domain-model.md`, **Cart and order** and **Calculation Capsule Principle** |
| Payment and fulfillment | Payment and Fulfillment are independent state machines; payment completion does not imply order acceptance | Raw T72 `bbb21c29-06e2-44d7-bd05-c2f9c28c3f4f`; `domain-model.md` |
| Human authority | Restaurant staff own order modification/cancellation decisions; AI suggestions must become typed, authorized, domain-validated commands | Raw T209 `bbb21545-4598-4ecd-a1fa-af977810bd5b`; Raw T216 `bbb216f2-0ccd-4871-a670-e02f94100750`; Raw T218 `bbb21ee2-2265-4c8a-ba89-82249c36e181` |
| Event and workflow authority | Events, audit, workflow and telemetry coordinate or describe the system; none replaces authoritative domain state | Raw T125 `bbb21b98-7460-45d5-a616-418ffbf47484`; Raw T137 `bbb21f78-6e9b-4ef8-9a07-60fe2273e772`; Raw T139 `bbb213b8-d58c-403e-b858-bdaa1ac750b8`; `domain-model.md` |
| AI authority | AI may assist with interpretation, extraction, summaries and suggestions; it is not authoritative for identity, authorization, commercial commitment, payment, fulfillment or external side effects | Raw T410 `bbb21914-7687-4f6e-848a-30e1e7e850f8`; Raw T414 `bbb21eb2-e878-4ef3-a499-f81e1cdc2d83`; `architecture.md` |
| Channel/provider | Restaurant-owned WhatsApp and Meta/provider accounts remain behind a provider-neutral `Channel` and adapter boundary | Raw T37 `eadec8d3-a035-43e3-814a-6d3312001bbf`; Raw T47 `1df966d4-0c16-4a9a-b8cb-4375e5c2fda7`; Raw T65 `31e96409-07af-4d5c-a00c-fbe2a55c0433` |

## Candidate deployment boundaries

These are **proposed starting shapes**, not a selected topology:

1. **Channel edge / BFF** — webhook verification, channel ingress/egress and web operations entry points.
2. **Core domain runtime** — tenant, catalog, conversation, cart/order and payment/fulfillment capabilities, initially allowed to be colocated.
3. **Durable worker/workflow runtime** — asynchronous work, timers, retries, human waits, reconciliation and recovery.
4. **External integration adapters** — Meta/WhatsApp, payment and optional delivery-provider integration concerns.
5. **Audit/observability facilities** — controlled access to immutable history, operational telemetry and sensitive-operation evidence.

These candidates may be combined or split after design evidence. A capability becomes a deployment boundary only when independent security, data ownership, scaling, provider-failure containment, lifecycle or operational ownership justifies it. The founder expressed a microservices preference, but that preference does not select one-microservice-per-capability or any deployment topology. [Raw T153 `bbb21941-90d7-47d8-b4e0-671c6caecb09`; Raw T154 `1764f643-59fd-4cf5-be14-6aee32fc973a`; `architecture.md`]

## HLD requirements

- Keep conceptual capability/aggregate boundaries explicit even if code is colocated.
- Keep tenant, branch, channel, identity, authorization and provider context separate.
- Ensure each authoritative state owner exposes contracts rather than permitting cross-boundary database reads.
- Isolate external-provider behavior behind adapters and make callbacks idempotent and verifiable.
- Keep business state distinct from event transport, workflow execution, audit history and telemetry.
- Treat data, security, lifecycle, scaling and operational ownership as the evidence required for future extraction.

## LLD requirements

- Define typed commands, queries, state-transition contracts and event envelopes.
- Carry schema version, correlation/causation, flow scope, tenant/branch scope and idempotency where applicable.
- Specify outbox/inbox, deduplication, retries, quarantine/DLQ, replay authorization and reconciliation.
- Specify provider connection lifecycle, callback verification and failure semantics.
- Specify aggregate invariants, order snapshots, monetary precision/rounding, audit access and retention/deletion behavior.

## State-engine unknowns

The source confirms the requirement for a state engine across flows, not only payments, plus idempotency, transactions, retries, timers, human waits/interventions, audit history and recovery. [Raw T115 `bbb210cc-a1ef-4ea9-b1a7-7c52f0011721`; Raw T117 `bbb216ed-0269-4c6c-8e28-f17031c1fa93`; Raw T119 `bbb211c0-c142-4837-aca7-b67a21454ec8`]

The following remain unresolved:

- state-machine schema and transition contract;
- generic versus flow-specific state handling;
- custom versus open-source versus managed workflow execution;
- Temporal or any alternative workflow product;
- timer, human-wait, retry, compensation, recovery and replay semantics;
- workflow/event-history persistence, retention and query model;
- ownership split between domain transitions, workflow orchestration and provider retries.

The founder's research-stage instruction was to define the contract and compare options before choosing an implementation; it explicitly did not lock Temporal or another implementation. [Raw T122 `0011555d-10c7-4dbc-aca8-2bf7c55d324b`; Raw T136 `09c90c51-c4ae-40a6-9bd8-aea16eaf3339`]

## Unresolved questions

- What is the smallest MVP deployable split, and what evidence triggers extraction?
- Which storage model supports authoritative state, projections, workflow metadata, event history and retention?
- Which flow-specific sync/async contracts and internal protocols are required?
- Which broker/transport, if any, is justified by pilot volume and failure semantics?
- Which AI architecture, model policy and provider strategy satisfy privacy, cost and quality requirements?
- How are Meta Tech Provider approval, coexistence limitations, disconnect, portability and provider billing handled?
- What are the exact tenant/branch invariants, deletion/retention rules, production SLOs, recovery targets and cost thresholds?

## Evidence index

| Evidence | Mapping citation | What it supports |
|---|---|---|
| State engine needed beyond payments | Raw T115 `bbb210cc-a1ef-4ea9-b1a7-7c52f0011721` | General business-flow state capability |
| State-engine options are to be evaluated | Raw T117 `bbb216ed-0269-4c6c-8e28-f17031c1fa93` | Generic/custom/open-source comparison remains open |
| Required durable workflow behaviors | Raw T119 `bbb211c0-c142-4837-aca7-b67a21454ec8` | Idempotency, transactions, retries, timers, human waits, audit and recovery |
| No implementation lock during research | Raw T122 `0011555d-10c7-4dbc-aca8-2bf7c55d324b` | Temporal and alternatives remain unresolved |
| Event integrity and failure semantics | Raw T125 `bbb21b98-7460-45d5-a616-418ffbf47484`; Raw T126 `e472fe3d-22d5-4595-aafd-986683b13a3c` | At-least-once, outbox/inbox, retries, DLQ and replay requirements |
| Service-boundary preference and recorded proposal | Raw T153 `bbb21941-90d7-47d8-b4e0-671c6caecb09`; Raw T154 `1764f643-59fd-4cf5-be14-6aee32fc973a` | Coarse capability boundaries are candidate architecture, not final topology |
| Efficient internal communication | Raw T163 `bbb2111f-375d-4b57-b543-441369f304ec` | Protocol selection must be evidence- and flow-specific |
| Channel and branch context | Raw T33 `ded20a72-7392-4785-8983-b6e7d75eae3b`; Raw T34 `bbb21cdc-296c-4806-af69-c1b7f40c4cf8`; Raw T65 `31e96409-07af-4d5c-a00c-fbe2a55c0433` | Provider-neutral channel and tenant/branch boundary |
| Staff-owned corrections | Raw T209 `bbb21545-4598-4ecd-a1fa-af977810bd5b`; Raw T216 `bbb216f2-0ccd-4871-a670-e02f94100750`; Raw T218 `bbb21ee2-2265-4c8a-ba89-82249c36e181` | Human authority for order changes and cancellations |
