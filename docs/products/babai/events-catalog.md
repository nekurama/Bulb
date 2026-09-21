---
status: proposed-review-packet
owner: BABAI Architecture
last-reviewed: 2026-09-22
---

# BABAI Event Catalog and Reliability Rules

This is the canonical event grouping for the current restaurant workflow. An
event coordinates side effects and projections; it never replaces authoritative
aggregate state or a validated command transition.

## 1. Event envelope

Every durable event carries:

```ts
export interface DomainEvent<TPayload = unknown> {
  eventId: string;
  eventType: string;
  schemaVersion: number;
  occurredAt: string;
  recordedAt: string;
  flowId?: string;
  sessionId?: string;
  correlationId: string;
  causationId?: string;
  tenantId: string;
  branchId?: string;
  channelId?: string;
  actorId?: string;
  aggregateType: string;
  aggregateId: string;
  aggregateVersion: number;
  idempotencyKey: string;
  producer: string;
  deploymentVersion: string;
  classification: 'public' | 'internal' | 'confidential' | 'restricted';
  payload: TPayload;
}
```

Payloads must be typed, bounded and versioned. Never place provider secrets,
raw payment credentials or unrestricted message bodies in logs or event
metadata. A classified payload may contain a secure reference to encrypted
storage instead.

## 2. Bounded-context registry

| Context | Events |
|---|---|
| **conversation** | `ConversationStarted`, `MessageReceived`, `MessageClassified`, `HumanTakeoverRequested`, `HumanTakeoverAssigned`, `HumanTakeoverReleased`, `ConversationClosed` |
| **catalog** | `MenuReceived`, `MenuCandidateCreated`, `MenuReviewRequired`, `MenuPublished`, `MenuRejected`, `MenuScheduled`, `MenuRolledBack`, `AvailabilityChanged` |
| **commercial** | `PriceCalculated`, `PromotionCreated`, `PromotionPublished`, `PromotionExpired`, `PromotionCancelled`, `TaxCalculated`, `CommercialSnapshotCreated` |
| **cart** | `CartStarted`, `CartItemAdded`, `CartItemChanged`, `CartItemRemoved`, `CartValidated`, `CartExpired` |
| **order** | `OrderCreated`, `OrderSubmitted`, `OrderAccepted`, `OrderRejected`, `OrderStartedPreparation`, `OrderReady`, `OrderCompleted`, `OrderCancellationRequested`, `OrderCancelled`, `OrderCorrectionRequested`, `OrderCorrected` |
| **payment** | `PaymentRequested`, `PaymentPending`, `PaymentAuthorized`, `PaymentConfirmed`, `PaymentFailed`, `PaymentReconciled`, `PaymentCorrectionRequested`, `RefundRequested`, `RefundReconciled`, `PaymentMismatchDetected` |
| **fulfillment** | `FulfillmentRequested`, `PickupScheduled`, `ReadyForPickup`, `PickupCodeIssued`, `PickupVerified`, `DeliveryQuoted`, `DeliveryBooked`, `DeliveryAssigned`, `OutForDelivery`, `Delivered`, `Fulfilled` |
| **notification** | `NotificationRequested`, `NotificationQueued`, `NotificationRendered`, `NotificationSubmitted`, `NotificationAccepted`, `NotificationDelivered`, `NotificationFailed`, `NotificationQuarantined`, `NotificationRetryRequested` |
| **support** | `SupportCaseOpened`, `SupportCaseAssigned`, `SupportCaseEscalated`, `SupportCaseResolved`, `SupportCaseReopened`, `SupportPaymentRequested`, `SupportPaymentConfirmed`, `VoucherIssued`, `VoucherRedeemed` |
| **billing** | `EntitlementSelected`, `ActivationRequested`, `ActivationHeld`, `EntitlementActivated`, `InvoiceIssued`, `InvoiceRevised`, `SubscriptionPaymentRecorded`, `SubscriptionPaused`, `SubscriptionCancelled` |
| **contract** | `ContractDrafted`, `ContractApproved`, `ContractSent`, `ContractSigned`, `ContractAmended`, `ContractSuspended`, `ContractTerminated`, `DataExportRequested`, `DataDeletionCompleted` |
| **tenant** | `TenantCreated`, `BranchCreated`, `ChannelConnected`, `ChannelDisconnected`, `TenantSuspended`, `TenantReactivated`, `StaffInvited`, `RoleAssigned`, `RoleRevoked` |
| **analytics** | `ProjectionQueued`, `ProjectionBuilt`, `ProjectionStale`, `ProjectionRebuilt`, `MetricCaptured`, `ReportRequested`, `ReportGenerated` |
| **recovery** | `FailureDetected`, `RetryScheduled`, `RetryExhausted`, `DeadLetterQueued`, `ReconciliationRequested`, `Reconciled`, `ReplayAuthorized`, `ReplayCompleted`, `RollbackCompleted` |

The event registry is intentionally more explicit than the first pilot code.
Events should be added only when a durable consumer, audit requirement or
recovery boundary exists; high-volume UI telemetry can remain non-durable.

## 3. Command/event rules

```text
external input
  -> authenticate and resolve context
  -> issue typed command
  -> validate aggregate state, policy and expected version
  -> transactionally write aggregate + outbox + audit + idempotency result
  -> publish at least once
  -> consumers deduplicate and update projections/effects
```

- Commands are imperative and actor-scoped: `AcceptOrder`, `MarkReady`,
  `AssignSupportCase`, `RequestPayment`, `CreatePromotion`.
- Events are past tense and immutable: `OrderAccepted`, `OrderReady`,
  `SupportCaseAssigned`, `PaymentConfirmed`.
- Event type is derived from trusted server-side context, not client input.
- Consumers must be idempotent and safe under duplicate delivery.
- Ordering is guaranteed only within an aggregate stream where required;
  cross-context ordering uses correlation and authoritative state checks.
- A failed side effect produces a retry, quarantine or reconciliation event;
  it does not fabricate success.

## 4. Idempotency and replay

Idempotency keys are scoped to operation and authority:

```text
provider callback: provider + tenant + channel + providerEventId
command: tenant + actor + commandType + client/idempotencyKey
outbound message: provider + channel + notificationIntentId
payment: merchantAccount + provider + providerPaymentId
delivery: provider + merchant + bookingId/eventId
```

The inbox records processed message/event keys and the resulting decision.
Replay requires an operator authorization record, reason, source event range,
target projection/effect and expected impact. Replay a projection freely;
replay a payment/refund/order side effect only through a dedicated
reconciliation command.

## 5. Event-to-flow examples

### Customer order

```text
ConversationStarted
MessageReceived
CartStarted
CartItemAdded
CommercialSnapshotCreated
OrderCreated
PaymentRequested
PaymentConfirmed
OrderAccepted
OrderStartedPreparation
ReadyForPickup
DeliveryAssigned
OutForDelivery
Delivered
```

### Restaurant support correction

```text
SupportCaseOpened
SupportCaseAssigned
OrderCorrectionRequested
PaymentCorrectionRequested
PaymentConfirmed
OrderCorrected
SupportPaymentConfirmed
SupportCaseResolved
```

### Menu/promotion update

```text
MenuReceived
MenuReviewRequired
MenuPublished
PromotionCreated
PromotionPublished
PromotionExpired
```

## 6. Projection and analytics policy

Pro order boards, owner reports and support queues are derived projections.
Every projection exposes:

- source checkpoint/event position;
- `lastUpdatedAt`;
- freshness class (`fresh`, `stale`, `rebuilding`);
- rebuild/reconciliation status.

Pro writes always re-read authoritative aggregate state and use an expected
version. A stale projection may be displayed with a warning but cannot silently
authorize a state mutation.
