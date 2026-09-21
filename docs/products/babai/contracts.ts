/**
 * Code-ready contracts for the BABAI architecture packet.
 *
 * This file is documentation-level TypeScript. It is intentionally provider
 * neutral and does not perform I/O.
 */

export type ActorRole = 'customer' | 'owner' | 'cashier' | 'staff' | 'platform-admin';
export type ChannelSurface = 'whatsapp' | 'web';
export type ProviderKind = 'meta-whatsapp' | 'bsp';

export interface Money {
  currency: 'INR';
  minorUnits: number;
}

export interface ChannelContext {
  tenantId: string;
  branchId?: string;
  channelId: string;
  surface: ChannelSurface;
  provider?: ProviderKind;
  actorId: string;
  actorRole: ActorRole;
  correlationId: string;
}

export interface CommandMeta {
  commandId: string;
  idempotencyKey: string;
  actorId: string;
  tenantId: string;
  branchId?: string;
  correlationId: string;
  causationId?: string;
}

export interface MutationMeta extends CommandMeta {
  expectedVersion: number;
}

export type OrderCommand =
  | { type: 'SubmitOrder'; meta: MutationMeta; cartId: string }
  | { type: 'AcceptOrder'; meta: MutationMeta; orderId: string }
  | { type: 'RejectOrder'; meta: MutationMeta; orderId: string; reason: string }
  | { type: 'StartPreparation'; meta: MutationMeta; orderId: string }
  | { type: 'MarkReady'; meta: MutationMeta; orderId: string }
  | { type: 'CompleteOrder'; meta: MutationMeta; orderId: string }
  | { type: 'RequestCancellation'; meta: MutationMeta; orderId: string; reason: string }
  | { type: 'CancelOrder'; meta: MutationMeta; orderId: string; reason: string }
  | {
      type: 'RequestOrderCorrection';
      meta: MutationMeta;
      orderId: string;
      reason: string;
    };

export type CatalogCommand =
  | { type: 'ChangeAvailability'; meta: MutationMeta; itemId: string; available: boolean; reason?: string }
  | { type: 'CreateCombo'; meta: MutationMeta; comboId: string }
  | { type: 'CreatePromotion'; meta: MutationMeta; promotionId: string }
  | { type: 'ActivatePromotion'; meta: MutationMeta; promotionId: string }
  | { type: 'ExpirePromotion'; meta: MutationMeta; promotionId: string };

export type PaymentCommand =
  | { type: 'CreatePaymentIntent'; meta: MutationMeta; orderId: string; amount: Money }
  | { type: 'RecordProviderCallback'; meta: MutationMeta; paymentId: string; providerEventId: string; payload: unknown }
  | { type: 'RecordManualConfirmation'; meta: MutationMeta; paymentId: string; evidenceId: string }
  | { type: 'RequestRefund'; meta: MutationMeta; paymentId: string; amount: Money; reason: string }
  | { type: 'ConfirmRefund'; meta: MutationMeta; refundId: string }
  | { type: 'ReconcilePayment'; meta: MutationMeta; paymentId: string };

export type FulfillmentCommand =
  | { type: 'RequestFulfillment'; meta: MutationMeta; orderId: string; mode: 'pickup' | 'delivery' }
  | { type: 'AssignDelivery'; meta: MutationMeta; fulfillmentId: string }
  | { type: 'VerifyPickup'; meta: MutationMeta; fulfillmentId: string; code: string }
  | { type: 'MarkDelivered'; meta: MutationMeta; fulfillmentId: string };

export type NotificationCommand =
  | { type: 'RetryNotification'; meta: MutationMeta; notificationId: string }
  | { type: 'CreateNotification'; meta: MutationMeta; templateId: string; recipientId: string }
  | { type: 'ResolveConsent'; meta: MutationMeta; customerId: string; decision: 'opt-in' | 'opt-out' }
  | { type: 'SendTemplate'; meta: MutationMeta; notificationId: string }
  | { type: 'QuarantineNotification'; meta: MutationMeta; notificationId: string; reason: string };

export type SupportCommand =
  | { type: 'OpenSupportCase'; meta: MutationMeta; orderId: string; reason: string }
  | { type: 'AssignSupportCase'; meta: MutationMeta; caseId: string; assigneeId: string }
  | { type: 'RequestPaymentCorrection'; meta: MutationMeta; caseId: string; amount: Money }
  | { type: 'IssueVoucher'; meta: MutationMeta; caseId: string; amount: Money; expiry: string }
  | { type: 'ResolveSupportCase'; meta: MutationMeta; caseId: string; resolution: string };

export type RecoveryCommand =
  | { type: 'OpenReconciliationCase'; meta: MutationMeta; aggregateId: string; reason: string }
  | { type: 'CreateRecoveryTask'; meta: MutationMeta; aggregateId: string; reason: string }
  | { type: 'AcknowledgeException'; meta: MutationMeta; caseId: string }
  | { type: 'ResolveDLQ'; meta: MutationMeta; caseId: string; resolution: string }
  | { type: 'AuthorizeReplay'; meta: MutationMeta; eventId: string; reason: string };

export type DomainCommand =
  | OrderCommand
  | CatalogCommand
  | PaymentCommand
  | FulfillmentCommand
  | NotificationCommand
  | SupportCommand
  | RecoveryCommand;

export type EventType =
  | 'ConversationStarted'
  | 'MessageReceived'
  | 'MessageClassified'
  | 'HumanTakeoverRequested'
  | 'HumanTakeoverAssigned'
  | 'HumanTakeoverReleased'
  | 'ConversationClosed'
  | 'MenuReceived'
  | 'MenuCandidateCreated'
  | 'MenuReviewRequired'
  | 'MenuPublished'
  | 'MenuRejected'
  | 'MenuScheduled'
  | 'MenuRolledBack'
  | 'AvailabilityChanged'
  | 'PriceCalculated'
  | 'PromotionCreated'
  | 'PromotionPublished'
  | 'PromotionExpired'
  | 'PromotionCancelled'
  | 'TaxCalculated'
  | 'CommercialSnapshotCreated'
  | 'CartStarted'
  | 'CartItemAdded'
  | 'CartItemChanged'
  | 'CartItemRemoved'
  | 'CartValidated'
  | 'CartExpired'
  | 'OrderCreated'
  | 'OrderSubmitted'
  | 'OrderAccepted'
  | 'OrderRejected'
  | 'OrderStartedPreparation'
  | 'OrderReady'
  | 'OrderCompleted'
  | 'OrderCancellationRequested'
  | 'OrderCancelled'
  | 'OrderCorrectionRequested'
  | 'OrderCorrected'
  | 'PaymentRequested'
  | 'PaymentPending'
  | 'PaymentAuthorized'
  | 'PaymentConfirmed'
  | 'PaymentFailed'
  | 'PaymentReconciled'
  | 'PaymentCorrectionRequested'
  | 'RefundRequested'
  | 'RefundReconciled'
  | 'PaymentMismatchDetected'
  | 'FulfillmentRequested'
  | 'PickupScheduled'
  | 'ReadyForPickup'
  | 'PickupCodeIssued'
  | 'PickupVerified'
  | 'DeliveryQuoted'
  | 'DeliveryBooked'
  | 'DeliveryAssigned'
  | 'OutForDelivery'
  | 'Delivered'
  | 'Fulfilled'
  | 'NotificationRequested'
  | 'NotificationQueued'
  | 'NotificationRendered'
  | 'NotificationSubmitted'
  | 'NotificationAccepted'
  | 'NotificationDelivered'
  | 'NotificationFailed'
  | 'NotificationQuarantined'
  | 'NotificationRetryRequested'
  | 'SupportCaseOpened'
  | 'SupportCaseAssigned'
  | 'SupportCaseEscalated'
  | 'SupportCaseResolved'
  | 'SupportCaseReopened'
  | 'SupportPaymentRequested'
  | 'SupportPaymentConfirmed'
  | 'VoucherIssued'
  | 'VoucherRedeemed'
  | 'EntitlementSelected'
  | 'ActivationRequested'
  | 'ActivationHeld'
  | 'EntitlementActivated'
  | 'InvoiceIssued'
  | 'InvoiceRevised'
  | 'SubscriptionPaymentRecorded'
  | 'SubscriptionPaused'
  | 'SubscriptionCancelled'
  | 'ContractDrafted'
  | 'ContractApproved'
  | 'ContractSent'
  | 'ContractSigned'
  | 'ContractAmended'
  | 'ContractSuspended'
  | 'ContractTerminated'
  | 'DataExportRequested'
  | 'DataDeletionCompleted'
  | 'TenantCreated'
  | 'BranchCreated'
  | 'ChannelConnected'
  | 'ChannelDisconnected'
  | 'TenantSuspended'
  | 'TenantReactivated'
  | 'StaffInvited'
  | 'RoleAssigned'
  | 'RoleRevoked'
  | 'ProjectionQueued'
  | 'ProjectionBuilt'
  | 'ProjectionStale'
  | 'ProjectionRebuilt'
  | 'MetricCaptured'
  | 'ReportRequested'
  | 'ReportGenerated'
  | 'FailureDetected'
  | 'RetryScheduled'
  | 'RetryExhausted'
  | 'DeadLetterQueued'
  | 'ReconciliationRequested'
  | 'Reconciled'
  | 'ReplayAuthorized'
  | 'ReplayCompleted'
  | 'RollbackCompleted';

export type CommandResult =
  | {
      accepted: true;
      aggregateId: string;
      aggregateVersion: number;
      emittedEventIds: string[];
    }
  | {
      accepted: false;
      aggregateId: string;
      aggregateVersion: number;
      emittedEventIds: string[];
      failure: {
    code:
      | 'FORBIDDEN'
      | 'CONFLICT'
      | 'INVALID_TRANSITION'
      | 'UNAVAILABLE'
      | 'QUOTA'
      | 'RECONCILIATION_REQUIRED';
    message: string;
    retryable: boolean;
      };
    };

export interface DomainEvent<TPayload = unknown> {
  eventId: string;
  eventType: EventType;
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

export interface ProviderAdapter<TRequest, TResult> {
  execute(request: TRequest, idempotencyKey: string): Promise<TResult>;
  reconcile(externalId: string): Promise<TResult>;
}

export interface WorkflowPort {
  schedule(input: {
    workflowType: string;
    aggregateId: string;
    dueAt?: string;
    idempotencyKey: string;
    payload: unknown;
  }): Promise<{ workflowId: string }>;
  signal(workflowId: string, signal: string, payload: unknown): Promise<void>;
  cancel(workflowId: string, reason: string): Promise<void>;
}

export interface ProjectionPolicy {
  viewName: string;
  maxStalenessMs: number;
  requireRefreshBeforeWrite: boolean;
}
