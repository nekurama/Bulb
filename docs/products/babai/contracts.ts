/**
 * Code-ready contracts for the BABAI architecture packet.
 *
 * This file is documentation-level TypeScript. It is intentionally provider
 * neutral and does not perform I/O.
 */

export type ActorRole = 'customer' | 'owner' | 'cashier' | 'staff' | 'platform-admin';
export type ProviderKind = 'meta-whatsapp' | 'bsp' | 'web';

export interface Money {
  currency: 'INR';
  minorUnits: number;
}

export interface ChannelContext {
  tenantId: string;
  branchId?: string;
  channelId: string;
  provider: ProviderKind;
  actorId: string;
  actorRole: ActorRole;
  correlationId: string;
}

export interface CommandMeta {
  commandId: string;
  idempotencyKey: string;
  expectedVersion?: number;
  actorId: string;
  tenantId: string;
  branchId?: string;
  correlationId: string;
  causationId?: string;
}

export type OrderCommand =
  | { type: 'SubmitOrder'; meta: CommandMeta; cartId: string }
  | { type: 'AcceptOrder'; meta: CommandMeta; orderId: string }
  | { type: 'RejectOrder'; meta: CommandMeta; orderId: string; reason: string }
  | { type: 'StartPreparation'; meta: CommandMeta; orderId: string }
  | { type: 'MarkReady'; meta: CommandMeta; orderId: string }
  | { type: 'CompleteOrder'; meta: CommandMeta; orderId: string }
  | {
      type: 'RequestOrderCorrection';
      meta: CommandMeta;
      orderId: string;
      reason: string;
    };

export type SupportCommand =
  | { type: 'OpenSupportCase'; meta: CommandMeta; orderId: string; reason: string }
  | { type: 'AssignSupportCase'; meta: CommandMeta; caseId: string; assigneeId: string }
  | { type: 'RequestPaymentCorrection'; meta: CommandMeta; caseId: string; amount: Money }
  | { type: 'ResolveSupportCase'; meta: CommandMeta; caseId: string; resolution: string };

export interface CommandResult {
  accepted: boolean;
  aggregateId: string;
  aggregateVersion: number;
  emittedEventIds: string[];
  failure?: {
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
}

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

