---
status: provisional-flow-coverage
owner: BABAI Architecture
last-reviewed: 2026-09-21
sources:
  - "FLOW INVENTORY — WEB/QA PROTOTYPE (2026-09-21)"
  - "nekurama.chatgpt.md (committed founder-flow source)"
  - docs/products/babai/architecture.md
  - docs/products/babai/architecture-lld.md
  - docs/products/babai/architecture-cost-options.md
  - docs/products/babai/domain-model.md
  - docs/products/babai/tier-feasibility-matrix.md
  - nekurama.raw.chat.json
---

# BABAI Flow Architecture

## Scope and status

This artifact covers the 14 committed founder-flow slices in
`docs/web/flow-inventory.md`. It intentionally excludes the existing
`01 / THE MOCK FLOW` label. The source line anchors are export locations; raw
mapping UUIDs are included in the evidence index where a stable match is
available.

`POC`, `Pilot` and `Later` describe implementation sequencing, not provider
approval or product validation:

- **POC** — deterministic local/mock or internal contract can be proven
  without real customer/provider data.
- **Pilot** — candidate for controlled synthetic or approved pilot rehearsal
  after POC gates pass.
- **Later** — architecture direction or control-plane capability that must not
  be represented as implemented MVP behavior.

## Flow coverage matrix

| ID / founder slice | State machine and authoritative owner | Commands / events | Idempotency, recovery and external dependencies | Boundaries and class |
|---|---|---|---|---|
| **F01 Admin → owner onboarding** | `INITIATED → OWNER_INVITED → ACCEPTED / EXPIRED / BLOCKED`; Onboarding session + Identity/Membership | `StartOwnerInvite`, `AcceptOwnerInvite`; `OwnerInviteStarted`, `OwnerInviteAccepted`, `OnboardingBlocked` | Invite/attempt key; outbox/inbox and resumable retry; no provider required for POC | Admin scope creates an invitation, not tenant ownership; POC |
| **F02 Owner invitation and welcome** | `INVITED → WELCOME_SEEN → SETUP_STARTED / EXPIRED`; Onboarding session | `OpenOwnerSetup`, `ResumeOwnerSetup`; `OwnerWelcomeShown`, `SetupResumed` | Message/session dedupe; expiry and resume recovery | Owner identity remains distinct from tenant membership; POC |
| **F03 Owner menu submission and verification** | `RECEIVED → CANDIDATE → REVIEW → PUBLISHED / REJECTED`; Catalog/Menu | `SubmitMenu`, `ReviewMenu`, `PublishMenu`, `RejectRevision`; `MenuReceived`, `MenuCandidateCreated`, `MenuPublished` | Artifact hash/idempotency key; failed extraction quarantined; publish retry/replay audited | Branch/tenant scope; immutable `MenuRevision`; AI extraction is advisory; POC |
| **F04 Ordering options, plan and activation** | `CONFIGURING → PLAN_SELECTED → PAYMENT_PENDING → ACTIVE / HELD`; Billing/Entitlement + Onboarding | `SelectEntitlement`, `RequestActivation`; `ActivationRequested`, `ActivationHeld`, `EntitlementActivated` | Activation idempotency; payment/plan errors reconcile before retry | No public price/provider claim; tier policy is server-side; Later |
| **F05 Onboarding state tracker** | Computed capability readiness: `PENDING → READY / BLOCKED / RETRYING`; capability owners, not one giant onboarding aggregate | `GetReadiness`, `RetryCapabilityStep`; `CapabilityReady`, `CapabilityBlocked`, `OnboardingResumed` | Step-attempt key, timeout, DLQ and human recovery; replay one capability only | Tenant/branch/channel readiness remains separate; POC |
| **F06 Customer discovery and ordering** | `DISCOVERED → BROWSING → CART → ORDER_PENDING`; Conversation/Cart/Order | `BrowseMenu`, `AddCartItem`, `SubmitOrder`; `MenuViewed` telemetry, `CartStarted`, `OrderCreated` | Cart/order command idempotency; menu-version lineage; outbox and order recovery | Channel resolves tenant/branch; BASE order/payment, PRO extensions; payment/delivery providers remain dependencies; Pilot |
| **F07 Restaurant order lookup through WhatsApp** | `QUERY → VIEWED → ACTION_REQUESTED / NO_ACTION`; Ordering read model + Conversation | `GetOrderStatus`, `RequestStaffAction`; `OrderViewed`, `StaffActionRequested` | Query is read-only; action command uses actor/aggregate idempotency and audit | Staff scope by tenant/branch; no personal WhatsApp; Pilot |
| **F08 Restaurant dashboard operations** | `VIEW → FILTER → ACTION_DRAFT → SUBMITTED / REJECTED`; Web/BFF + owning domain module | `ListOrders`, `GetOrderDetail`, typed operational commands; `OperationalViewRead`, domain event on accepted command | Projection can be stale for display; mutations validate current aggregate version; retry/DLQ for effects | Web is density/recovery surface; permissions and tenant scope enforced; Pilot |
| **F09 Proactive order notification** | `PENDING → QUEUED → SENT / FAILED / QUARANTINED`; Notification | `RequestNotification`, `RetryNotification`; `NotificationQueued`, `NotificationSent`, `NotificationFailed` | Provider-message idempotency; throttling, retry/DLQ, reconciliation and audit | Consent/template/provider policy; BASE transactional notifications, PRO advanced messaging; Pilot |
| **F10 Order state lifecycle** | `NEW → ACCEPTED → PREPARING → READY → COMPLETED`; Ordering owns Order; Payment/Fulfillment are separate | `AcceptOrder`, `RejectOrder`, `StartPreparation`, `MarkReady`, `CompleteOrder`; `OrderAccepted`, `OrderRejected`, `OrderReady`, `OrderCompleted` | Aggregate version/idempotency; event-fed reactions, replay/reconciliation; no cross-state mutation | Payment completion never accepts; delivery callback never changes payment; BASE/Pilot |
| **F11 Staff accounts and permissions** | `INVITED → ACTIVE → SUSPENDED / REMOVED`; Identity/Membership/Authorization | `InviteStaff`, `AssignRole`, `ChangeScope`, `SuspendStaff`; `StaffInvited`, `RoleChanged`, `StaffSuspended` | Invitation and role-change idempotency; audit and recovery; auth provider dependency | Tenant/branch/resource scope; no custom unrestricted role by default; Later |
| **F12 Restaurant/tenant identity model** | `TENANT_DRAFT → ACTIVE → SUSPENDED / CLOSED`; Tenant/Branch/Channel + Identity | `CreateTenant`, `CreateBranch`, `ConnectChannel`, `SuspendTenant`; `TenantCreated`, `BranchCreated`, `ChannelConnected` | Creation commands idempotent; resumable onboarding; provider callbacks reconciled | Customer global identity vs tenant relationship; no silent merge; Later control-plane depth |
| **F13 Admin restaurant oversight** | `PENDING → REVIEWED → ACTION_REQUESTED / RESOLVED`; Admin operations + owning capability | `ListRestaurants`, `ReviewOnboarding`, `RequestRecovery`; `RestaurantReviewed`, `RecoveryRequested` | Read projection; action commands require platform/admin scope and audit; retry/DLQ for notifications | Admin cannot take ownership of restaurant assets; pilot support surface; Pilot |
| **F14 Menu ingestion and V1 chain** | `MENU_RECEIVED → ORDER_CREATED → NOTIFIED → ACCEPTED → COMPLETED → CONFIRMED`; Catalog/Order/Notification/Workflow | `SubmitMenu`, `CreateOrder`, `AcceptOrder`, `CompleteOrder`, `ConfirmOutcome`; correlated domain events per transition | One flow/correlation ID; per-step idempotency, outbox/inbox, retry/DLQ, reconciliation and authorized replay | Payment/delivery remain adapters/dependencies; static/mock chain POC, controlled rehearsal Pilot |

### Founder source line anchors

| Flow | Committed source anchor |
|---|---|
| F01 | `nekurama.chatgpt.md:L1233-L1309` |
| F02 | `nekurama.chatgpt.md:L1309-L1321` |
| F03 | `nekurama.chatgpt.md:L1321-L1375` |
| F04 | `nekurama.chatgpt.md:L1377-L1438` |
| F05 | `nekurama.chatgpt.md:L1444-L1478` |
| F06 | `nekurama.chatgpt.md:L1478-L1520` |
| F07 | `nekurama.chatgpt.md:L1522-L1578` |
| F08 | `nekurama.chatgpt.md:L1588-L1620` |
| F09 | `nekurama.chatgpt.md:L1621-L1667` |
| F10 | `nekurama.chatgpt.md:L1666-L1674` |
| F11 | `nekurama.chatgpt.md:L1678-L1737` |
| F12 | `nekurama.chatgpt.md:L1740-L1775` |
| F13 | `nekurama.chatgpt.md:L1778-L1818` |
| F14 | `nekurama.chatgpt.md:L1885-L1949` |

## Shared LLD contracts

### Command and state gate

Every state-changing flow follows:

```text
verify actor/provider
  -> resolve tenant/branch/channel/session
  -> load tier entitlement and policy version
  -> enforce quota/provider admission
  -> validate aggregate transition and preconditions
  -> write authoritative state + outbox + required audit atomically
  -> enqueue idempotent work
  -> retry, quarantine, reconcile or replay with authorization
```

The client, AI and provider callback cannot choose the authoritative flow
type, tier, tenant scope or business outcome. Unavailable capabilities are
explicit non-success outcomes, not silent downgrades.

### Event envelope

All durable flow events should carry, subject to data classification:

```text
eventId
eventType / schemaVersion
occurredAt / recordedAt
flowId / sessionId
tenantId / branchId / channelId where applicable
actorId or subject reference
aggregateType / aggregateId
correlationId / causationId
idempotencyKey
producer / deploymentVersion
classification
typed payload or payload reference
```

Telemetry-only events such as views and high-volume cart mutations do not
become durable domain events unless a concrete consumer requires them.

### Reliability, replay and recovery

- At-least-once delivery is assumed; consumers are idempotent.
- PostgreSQL state and outbox write atomically.
- Inbox/dedupe records prevent duplicate provider or command effects.
- Retries use bounded exponential backoff and honor provider throttling.
- Poison/non-retryable work enters DLQ/quarantine with owner and reason.
- Reconciliation compares BABAI state to Meta/payment/delivery provider state.
- Replay is flow-, schema- and authorization-scoped, never a blind requeue.
- Recovery restores authoritative state, outbox/inbox/audit evidence and then
  revalidates external provider references.
- Audit records identity, entitlement, human takeover, override, retry,
  replay, provider callback and financial correction decisions.

## Payment/order and fulfillment separation

`OrderCreated` creates order truth before payment completion. Payment may be
`PAYMENT_PENDING`, `PAID`, failed or externally/manual-settled without
automatically accepting the order. Restaurant staff own order modification and
cancellation; invoice revisions, pending amounts and refunds are explicit
auditable corrections. Fulfillment/delivery reacts to order events and cannot
mutate payment state.

Customer order money settles directly to the merchant. No wallet/escrow or
merchant-of-record behavior is implied. Payment and delivery provider
feasibility, terms, webhooks, refunds, rates and support remain dependencies.

## Tier, permissions and human takeover

- **LITE:** information, menu/order capture and human escalation; no payment
  or delivery provider workflow.
- **BASE:** deterministic pickup/order/payment and transactional operations;
  delivery only when a provider path is validated.
- **PRO:** allowlisted delivery/API/integration capabilities with higher
  measured quotas and additional support/cost attribution.
- Human takeover is conversation ownership, not an order/payment bypass.
- Staff actions require identity, membership, role, permission, scope,
  resource and policy evaluation.
- PRO full access remains bounded; AI is advisory in every tier.

## Rollout and dependencies

### Stage 0 — POC/control

Cover F01–F05 and the F14 static chain with fixtures or mock adapters. Prove
state transitions, entitlement rejection, idempotency, outbox/inbox, retry/DLQ,
audit, accessibility and recovery without real provider accounts or customer
data.

### Stage 1 — controlled pilot

Rehearse F06–F10 and F13 with one to three restaurants, approved test access
where available, pickup-first operation and manual payment/delivery fallback.
Require provider callback verification, reconciliation, support ownership,
restore evidence and 15-minute load windows before expanding.

### Stage 2 — later/evidence band

Enable F11/F12 depth and PRO advanced APIs/delivery only after permissions,
provider terms, rate limits, support capacity, cost attribution and rollback
evidence are accepted. Test the 500/1,000 scenarios; do not claim external
provider feasibility or scale readiness from architecture alone.

## Evidence and unresolved choices

The committed founder-flow source supplies source anchors for all rows at
`nekurama.chatgpt.md:L1233-L1949`; the internal inventory is a companion
coverage map. Founder raw evidence includes T5
`bbb21d44-faca-4e4b-a6e2-9f65f591a4bd` (onboarding/menu/customer flow), T33
`ded20a72-7392-4785-8983-b6e7d75eae3b` (channel/tenant routing), T68
`bbb21613-1461-4278-a34f-d4c055c03c84` and T72
`bbb21c29-06e2-44d7-bd05-c2f9c28c3f4f` (payment boundary), T76
`bbb21803-3975-4faf-9eda-c51cade91dfe` (delivery boundary), T99
`bbb21fb5-8f72-4a7f-b42b-333101d4a900` (tenant-scoped customer data), T125
`bbb21b98-7460-45d5-a616-418ffbf47484` and T139
`bbb213b8-d58c-403e-b858-bdaa1ac750b8` (events/flow security), T209
`bbb21545-4598-4ecd-a1fa-af977810bd5b` and T216
`bbb216f2-0ccd-4871-a670-e02f94100750` (human corrections), and T410
`bbb21914-7687-4f6e-848a-30e1e7e850f8`/T414
`bbb21eb2-e878-4ef3-a499-f81e1cdc2d83` (AI/product boundary).

Unresolved choices include exact command/event names, flow-specific state
schemas, menu projection freshness, provider terms and approvals, payment and
delivery contracts, advanced API catalog, tier quotas, workflow product,
support replacement at 500+, and numeric SLO/cost thresholds.
