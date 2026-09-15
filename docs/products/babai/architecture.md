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
