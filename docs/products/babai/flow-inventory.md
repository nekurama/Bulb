---
status: partial — founder-flow inventory with implementation/demo gaps
owner: BABAI Product / BRD
last-reviewed: 2026-09-21
sources:
  - nekurama.chatgpt.md (committed founder companion; mapped flow batches)
  - nekurama.babai.research.md
  - Tier scope decision (2026-09-21; current task input)
  - docs/products/babai/product-definition.md
  - docs/products/babai/tier-feasibility.md
  - docs/products/babai/validation.md
---

# BABAI Product Flow Inventory

## Source and status convention

This inventory uses the committed `nekurama.chatgpt.md` founder companion and
ignores only the existing `01 / THE MOCK FLOW` section. Citations use stable
Markdown line ranges and the mapped flow-batch headings. Raw mapping anchors
for the mapped discussions include:

- Batch 1–5 record: `5ec0497b-76d4-4977-bc62-179f63f51edc`
- Batch 11–15 record: `8b7cbb46-22d7-473e-bdd8-99805b36d04f`
- Batch 26–30 record: `b98b7d38-b56e-4d06-987a-2fb0f00993ee`
- Batch 31–35 record: `b34f216d-8e98-4285-83f8-fad2046415a8`
- Batch 36–40 record: `8063fb78-1b4a-4762-a196-aafc52fb721f`

`P0` means required for the narrow POC/pilot path; `P1` means required for
pilot hardening or controlled expansion; `P2` means later or evidence-gated.
“Not evidenced” means the source describes intent or a proposal but does not
prove repository implementation or a demo.

## 1. ADMIN → OWNER onboarding

**Priority:** P0 POC/pilot
**Actors:** Platform Admin, Owner, restaurant/branch, WhatsApp channel
**Source:** `nekurama.chatgpt.md:L1233-L1318`, `L28016-L28345`

- **Preconditions:** Authorized platform admin; restaurant name, WhatsApp
  number, contact and location are available.
- **Happy path:** Admin selects onboard restaurant → enters identity/contact
  details → invitation is sent → restaurant is `AWAITING_OWNER_SETUP` → owner
  starts setup.
- **Alternate/error paths:** Invalid/duplicate number, invitation not accepted,
  owner unreachable, or setup abandoned. Exact retry/expiry behavior is open.
- **State transitions:** `INVITED → AWAITING_OWNER_SETUP → OWNER_SETUP`
  with failure/suspension paths to be defined.
- **Data/permission boundary:** Platform Admin may create/invite; Owner gains
  restaurant setup authority only after accepted identity/membership.
- **Acceptance criteria:** Admin can create an invitation without creating
  operational readiness; status is visible; owner receives a clear start path.
- **Implementation/demo status:** Founder flow described; implementation/demo
  status not evidenced in the companion.

## 2. Owner onboarding

**Priority:** P0 POC/pilot
**Actors:** Owner, onboarding workflow, Menu, Billing/entitlement, channel
**Source:** `nekurama.chatgpt.md:L1321-L1415`, `L6263-L6355`,
`L23635-L24328`

- **Preconditions:** Accepted invitation; owner identity and restaurant
  context established.
- **Happy path:** Owner starts setup → uploads menu → system extracts candidate
  items → owner confirms/corrects → selects ordering options → selects a
  plan/terms → channel/menu becomes ready.
- **Alternate/error paths:** Unsupported/uncertain menu extraction, correction
  required, payment/term failure, channel onboarding failure, abandoned setup.
  Meta/provider behavior remains external.
- **State transitions:** `INVITED → SETUP → MENU_REVIEW → CONFIGURING →
  TERMS_PENDING → READY`, with recoverable failure states.
- **Data/permission boundary:** Owner may configure their tenant/branch;
  extracted menu remains candidate until owner approval; payment/order state is
  not AI-authoritative.
- **Acceptance criteria:** Resumable setup, explicit review before publish,
  no second customer identity, visible failure/recovery state.
- **Implementation/demo status:** P0 flow definition; external channel/payment
  steps remain partial and not provider-approved.

## 3. Owner/staff setup

**Priority:** P0 POC; P1 expansion
**Actors:** Owner/Admin, Staff, Identity, Membership, Role/Scope
**Source:** `nekurama.chatgpt.md:L1678-L1715`,
`L24423-L24500`, `L11464-L11925`

- **Preconditions:** Owner has an active restaurant/branch context.
- **Happy path:** Owner invites staff → identity is established or accepted →
  membership activates → role and branch scope are assigned → staff can use
  authorized workflows.
- **Alternate/error paths:** Expired/revoked invitation, duplicate identity,
  wrong branch scope, role/permission denial, staff departure.
- **State transitions:** `INVITE_PENDING → ACCEPTED → ACTIVE → SUSPENDED/REVOKED`.
- **Data/permission boundary:** Identity ≠ membership ≠ role ≠ permission ≠
  scope; staff must not gain authority merely by authenticating.
- **Acceptance criteria:** Every membership/role/scope change is auditable;
  staff actions are denied outside assigned scope; owner can revoke.
- **Implementation/demo status:** P0 requirements are described; full staff
  UI/device behavior remains partial.

## 4. Customer discovery

**Priority:** P0 POC/pilot
**Actors:** Customer, business-owned WhatsApp/channel, Conversation/BFF,
  restaurant read model
**Source:** `nekurama.chatgpt.md:L1478-L1515`,
`L22330-L22420`

- **Preconditions:** Restaurant/branch is discoverable through an approved
  business channel or link; read model is available.
- **Happy path:** Customer opens/addresses restaurant channel → sees welcome,
  menu/location/help options → restaurant view is recorded as telemetry.
- **Alternate/error paths:** Restaurant unavailable, channel disconnected,
  stale read model, unsupported request, human escalation.
- **State transitions:** `DISCOVERED → SESSION_STARTED → INFORMATION_REQUESTED`
  or `HUMAN_REQUESTED`.
- **Data/permission boundary:** Discovery is customer-facing and
  tenant-scoped; `RestaurantViewed` is telemetry/analytics, not business
  state.
- **Acceptance criteria:** Customer reaches the correct restaurant identity;
  no marketplace ownership is implied; analytics does not block ordering.
- **Implementation/demo status:** P0 conversational entry is described;
  production discovery/analytics implementation is not evidenced.

## 5. Menu

**Priority:** P0 POC/pilot
**Actors:** Owner/Staff, Menu service/workflow, AI extraction, Validator,
  Published Menu, Customer
**Source:** `nekurama.chatgpt.md:L23968-L24328`,
`L9025-L9595`, `L24101-L24328`

- **Preconditions:** Menu source exists or staff is creating a revision;
  branch context and authorization are known.
- **Happy path:** Ingest source → extract candidate revision → validate and
  diff against published revision → staff corrects/approves → publish or
  schedule → customer reads current applicable menu.
- **Alternate/error paths:** Uncertain extraction, invalid structure, stale
  revision, availability change, scheduled activation conflict, rollback.
- **State transitions:** `SOURCE → CANDIDATE_REVISION → REVIEW_REQUIRED →
  APPROVED → PUBLISHED/SCHEDULED → ACTIVE/ROLLED_BACK`.
- **Data/permission boundary:** Menu is branch-owned; published revision is
  immutable; AI extraction is never authoritative; staff approval is required.
- **Acceptance criteria:** No in-place mutation of published menu; order/cart
  retains menu context; availability and schedule are distinct from content.
- **Implementation/demo status:** P0 menu skeleton and review are in scope;
  advanced schedule/import behavior remains partial.

## 6. Order

**Priority:** P0 POC/pilot
**Actors:** Customer, Conversation/BFF, Ordering, Menu projection, Staff
**Source:** `nekurama.chatgpt.md:L22330-L22695`,
`L17205-L17609`

- **Preconditions:** Current menu context, branch, customer/session context and
  cart intent are available.
- **Happy path:** Discover/browse/select → carry `menuVersion` → create/modify
  cart → validate availability/price → create order → return immediate result.
- **Alternate/error paths:** Stale menu, unavailable item, invalid modifier,
  duplicate request, order rejection, customer correction or cancellation
  request.
- **State transitions:** `CART/DRAFT → ORDER_CREATED → PAYMENT_PENDING →
  PAID → ACCEPTED → PREPARING → READY → COMPLETED`; payment and acceptance
  remain separate.
- **Data/permission boundary:** Ordering owns order lifecycle; order snapshot
  is immutable commercial truth; customer may request, staff owns controlled
  modification/cancellation.
- **Acceptance criteria:** Order exists before payment completion; idempotency,
  menu lineage, deterministic validation and human intervention are visible.
- **Implementation/demo status:** P0 core workflow; complete operational edge
  cases remain P1.

## 7. Payment

**Priority:** P0 boundary/P1 externally validated pilot
**Actors:** Customer, Payment, Ordering, direct-settlement provider, Staff,
  customer acknowledgement
**Source:** `nekurama.chatgpt.md:L22708-L22839`,
`L8318-L8501`, `L17499-L17547`

- **Preconditions:** Order exists in payment-eligible state; direct
  restaurant settlement path or manual settlement path is configured.
- **Happy path:** Initiate payment → provider/manual result → verify/reconcile
  → `PAID` or failure → Ordering evaluates acceptance separately.
- **Alternate/error paths:** Pending/failed webhook, duplicate callback,
  manual/off-platform payment, partial correction, refund, provider mismatch.
- **State transitions:** `PAYMENT_PENDING → PAID/PAYMENT_FAILED/MANUAL_REVIEW`;
  payment confirmation does not automatically accept the order.
- **Data/permission boundary:** Payment state is separate from order state;
  BABAI does not custody customer funds; staff/customer acknowledgement may
  close external corrections.
- **Acceptance criteria:** Idempotency, provider verification, manual
  settlement audit, invoice revision and refund/correction paths.
- **Implementation/demo status:** Product boundary defined; provider/payment
  feasibility, rates, webhooks and refunds are external dependencies.

## 8. Delivery / pickup

**Priority:** P0 pickup; P1 delivery/provider validation
**Actors:** Staff, Customer, Ordering, Delivery, provider, Notification
**Source:** `nekurama.chatgpt.md:L23090-L23361`,
`L8638-L9025`

- **Preconditions:** Accepted/ready order; pickup or delivery mode selected.
- **Happy path pickup:** `ACCEPTED → PREPARING → READY → CUSTOMER_VERIFIED →
  COMPLETED`.
- **Happy path delivery:** Quote → customer selects → asynchronous booking →
  assigned → tracking/status → delivered.
- **Alternate/error paths:** Expired quote, provider rejection, unavailable
  coverage, assignment failure, tracking mismatch, pickup exception.
- **State transitions:** Pickup remains within Ordering initially; Delivery
  owns provider/assignment/tracking state and emits facts.
- **Data/permission boundary:** Provider IDs/credentials remain integration
  data; customer-safe tracking URL is scoped/opaque; no BABAI custody implied.
- **Acceptance criteria:** Quote ≠ booking; quote expiry/revalidation; provider
  failure/retry; pickup works without delivery dependency.
- **Implementation/demo status:** Pickup P0; delivery adapter/provider
  feasibility is external and not claimed.

## 9. Promo/combo

**Priority:** P1 BASE; P2 PRO
**Actors:** Owner/authorized staff, Promotion/Combo policy, Customer,
  Conversation, Ordering
**Source:** Tier scope decision (2026-09-21); `product-definition.md`
  LITE/BASE/PRO matrix; no complete founder-companion flow is evidenced.

- **Preconditions:** Tier entitlement, branch/menu context and authorized
  staff scope.
- **Happy path:** Authorized staff requests bounded promotion/combo → policy
  validates → active window/limit recorded → customer sees eligible offer →
  order evaluates deterministic benefit.
- **Alternate/error paths:** LITE request denied, BASE daily cap exceeded,
  expired window, invalid item/availability, unauthorized staff, conflicting
  promotion.
- **State transitions:** `REQUESTED → VALIDATED → ACTIVE → EXPIRED/ROLLED_BACK`.
- **Data/permission boundary:** Promotion definition and evaluated order result
  are distinct; AI may suggest but cannot publish or alter commercial truth.
- **Acceptance criteria:** LITE has no promo/combo capability; BASE maximum
  three requests/day with one-day/limited duration; PRO remains bounded.
- **Implementation/demo status:** P1/P2 policy requirement; no founder-flow
  implementation/demo evidence beyond the tier packet.

## 10. Human takeover

**Priority:** P0 POC/pilot
**Actors:** Customer, Conversation, Staff, Notification, Ordering/Payment/
  Delivery workflows
**Source:** `nekurama.chatgpt.md:L9895-L10514`,
`L23361-L23850`, `L24618-L24780`

- **Preconditions:** Conversation exists; customer/staff request or exception
  detection; staff has branch scope.
- **Happy path:** Request/detect → `HUMAN_REQUESTED` → claim/assign →
  `HUMAN_ACTIVE` → staff resolves → explicit release → automation resumes.
- **Alternate/error paths:** Two staff claim, staff disappears, expired session,
  reassignment, unresolved exception, customer consent/acknowledgement needed.
- **State transitions:** `AUTOMATED → HUMAN_REQUESTED → HUMAN_ACTIVE →
  HUMAN_RELEASED → AUTOMATED`.
- **Data/permission boundary:** Conversation-wide ownership for MVP; takeover
  pauses conversational automation only, not order/payment/delivery state.
- **Acceptance criteria:** Atomic claim, assignment/release audit, safe
  reassignment and no staff personal-WhatsApp model.
- **Implementation/demo status:** P0 requirement; detailed UI/coexistence
  behavior remains partial.

## 11. Notifications

**Priority:** P0 POC/pilot
**Actors:** Domain event producer, Notification service, policy/consent,
  template renderer, WhatsApp/provider, Customer/Staff
**Source:** `nekurama.chatgpt.md:L1615-L1665`,
`L23090-L23361`, `L25071-L25190`,
`L17673-L17781`

- **Preconditions:** Event/fact exists; notification purpose/channel and
  consent/window policy can be evaluated.
- **Happy path:** Domain fact → `NotificationRequested` → policy/consent →
  template/render → provider adapter → accepted/delivered/failed status.
- **Alternate/error paths:** Template unavailable/rejected, outside messaging
  window, provider failure, retry/DLQ, opt-out, duplicate notification.
- **State transitions:** `REQUESTED → RENDERED → SUBMITTED → ACCEPTED →
  DELIVERED/FAILED`.
- **Data/permission boundary:** Notification is generic; domain services do
  not know WhatsApp payloads; marketing consent is tenant/purpose/channel
  scoped and distinct from transactional communication.
- **Acceptance criteria:** Idempotency, provider isolation, template version,
  consent-at-send-time and no notification in the critical order path.
- **Implementation/demo status:** P0 architecture/POC; provider template
  approval and message policy remain external.

## 12. Retention / reorder

**Priority:** P1 pilot hardening
**Actors:** Customer, Ordering, current Menu projection, Customer/Order read
  model, Notification/Consent
**Source:** `nekurama.chatgpt.md:L23443-L23850`,
`L611-L635`

- **Preconditions:** Completed historical order and customer relationship;
  current menu resolution available.
- **Happy path:** Customer requests reorder → load historical intent →
  resolve current item/menu/price/availability → build new cart → customer
  reviews → normal order flow.
- **Alternate/error paths:** Item removed/renamed, price changed, unavailable
  item, changed modifiers, customer opt-out, stale order context.
- **State transitions:** `HISTORICAL_ORDER → REORDER_REQUESTED →
  CURRENT_CART → REVIEW_REQUIRED → NEW_ORDER`.
- **Data/permission boundary:** Historical order/invoice remains immutable;
  reorder recreates intent and never resurrects historical price/state.
- **Acceptance criteria:** Current menu/price review, explicit customer
  confirmation and no marketing message without consent.
- **Implementation/demo status:** P1; no complete reorder demo evidence in the
  current product artifacts.

## 13. Exceptions / recovery

**Priority:** P0 reliability baseline; P1 hardening
**Actors:** Workflow/state engine, event bus, provider adapters, DLQ/replay
  operator, Platform Admin, Staff, Customer
**Source:** `nekurama.chatgpt.md:L18088-L18110`,
`L25810-L25980`, `L22330-L22420`

- **Preconditions:** Failed, delayed, duplicate, out-of-order or inconsistent
  operation has a correlation/event identity.
- **Happy path:** Classify failure → retry bounded transient work → replay only
  corrected/retryable work → reconcile external truth → valid state transition
  → audit.
- **Alternate/error paths:** Non-retryable 4xx, unexpected 5xx, DLQ manual
  ignore/action, provider mismatch, lost webhook, restore/rebuild, human
  takeover.
- **State transitions:** `FAILED/RETRYING → RETRY_EXHAUSTED/DLQ →
  REPLAYED/IGNORED/RECONCILIATION → VALIDATED_STATE`.
- **Data/permission boundary:** Retry/replay/reconciliation never bypass
  policy, authorization or deterministic state transitions; DLQ action is
  role/routing scoped.
- **Acceptance criteria:** Idempotency, bounded backoff, DLQ classification,
  alert routing, replay audit, reconciliation and rollback/manual fallback.
- **Implementation/demo status:** P0 skeleton, P1 hardening; provider-specific
  recovery remains external.

## 14. Admin / analytics

**Priority:** P0 admin visibility; P1 analytics/reporting
**Actors:** Platform Admin, Owner/Admin, Staff, Analytics pipeline, read models
**Source:** `nekurama.chatgpt.md:L1233-L1318`,
`L1774-L1885`, `L17996-L18064`, `L26370-L26420`

- **Preconditions:** Authorized tenant/branch scope; domain events/read models
  and telemetry are available.
- **Happy path:** Admin sees onboarding/subscription/status queues; owner sees
  orders and operational dashboards; analytics consumes business events and
  produces reports without blocking runtime flows.
- **Alternate/error paths:** Missing projection, stale analytics, unauthorized
  tenant query, rebuild/replay, PII minimization or retention conflict.
- **State transitions:** `EVENT → PROJECTION_PENDING → PROJECTED/REBUILDING →
  AVAILABLE/STALE`.
- **Data/permission boundary:** Analytics/read models are derived, tenant
  isolated and non-authoritative; operational truth remains with owning
  services; audit/logs/analytics remain separate.
- **Acceptance criteria:** Admin can identify onboarding blockers; owner can
  see operational order status; analytics never becomes a dependency for
  order/payment/delivery/messaging.
- **Implementation/demo status:** P0 admin visibility/P1 analytics; complete
  reporting pipeline and retention policy remain partial.

## Cross-flow unresolved decisions

- Exact owner/staff onboarding UI and membership edge cases.
- Payment provider, delivery provider, Meta template/webhook and advanced API
  feasibility; none is claimed by this inventory.
- Promo/combo data model beyond the tier limits.
- Reorder identity mapping and retention/consent rules.
- DLQ routing policy and operator/admin action taxonomy.
- Projection rebuild, analytics retention and PII/anonymization policy.
- Which flows are demonstrated in the October–December plan versus deferred
  to pilot hardening.

Product owns these requirements and acceptance criteria. Architecture,
provider, legal/tax and external approval decisions remain dependencies rather
than invented product conclusions.
