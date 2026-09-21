---
status: partial
owner: BABAI Product / BRD
last-reviewed: 2026-09-21
sources:
  - nekurama.chatgpt.md
  - nekurama.raw.chat.json
  - nekurama.babai.research.md
  - docs/products/babai/brd.md
  - docs/products/babai/product-definition.md
  - docs/products/babai/domain-model.md
  - docs/products/babai/architecture.md
  - docs/products/babai/experience-and-channels.md
  - docs/products/babai/validation.md
---

# BABAI Flow Inventory

This is the durable inventory of the requested product-flow families. It
reconciles the founder's mapped flow discussions with the current BABAI
product boundary. The source section titled **`01 / THE MOCK FLOW`** in
`nekurama.chatgpt.md` is intentionally excluded. All other mapped flow
discussion, including the later 50-flow map and its decision batches, remains
eligible evidence.

This document is an inventory and implementation handoff, not a claim that
the flows are already implemented. **POC** means the narrow first proof;
**pilot** means validate with a real restaurant before broadening; **later**
means intentionally outside the first proof. Historical Tadka/Thali/Dawat
tier names and prices are retained only as discussion history. They are not
current commercial tiers.

## Citation method

Each record cites:

1. a readable `nekurama.chatgpt.md` line range;
2. a chronological raw-chat turn (`T<number>`) and stable mapping UUID; and
3. the current product/research document that constrains the interpretation.

`T<number>` is the chronological substantive-message index used by the
product architecture documents. A raw UUID is the `mapping` node ID in
`nekurama.raw.chat.json`; line locations in that JSON are export locations,
not identity. Founder-authored turns are the primary intent evidence.
Assistant turns are cited for mapped detail only and do not independently
promote a proposal to a decision.

## Cross-family invariants

These apply to every record below:

- **Tenant isolation:** `Tenant → Branch → Channel`; customer relationships,
  conversations, orders and operations are tenant-scoped through
  `TenantCustomer`.
- **Channel boundary:** WhatsApp is the primary action/attention surface;
  web is allowed for dense setup, comparison, recovery, analytics and
  administration. WhatsApp is not the only channel.
- **Human authority:** AI may extract, classify, summarize or suggest; staff
  own controlled order, refund, cancellation, consent and operational
  decisions.
- **Money boundary:** customer money settles directly to the restaurant;
  BABAI subscription billing is separate; BABAI does not hold customer funds
  in the initial product.
- **Order/payment separation:** an order can exist before payment completion;
  payment completion does not automatically accept an order.
- **State discipline:** only validated, authorized transitions change
  authoritative state. Events, workflow records, audit and telemetry do not
  replace domain state.
- **Provider isolation:** Meta/WhatsApp, payment and delivery provider
  semantics terminate at adapters; internal domain contracts remain
  provider-neutral.
- **Recovery discipline:** retries, replay, DLQ actions and reconciliation
  re-enter the same policy and transition machinery; they do not set state
  directly.

## Expanded prototype journey matrix

The following crosswalk is the updated prototype scope. **LITE, BASE and PRO
are internal experiment labels only**; they do not replace the narrower
Stage 0 pickup-first pilot, create public packages or grant unrestricted AI
authority. A capability is available only when the entitlement, policy,
actor permission, provider configuration and authoritative state transition
all allow it.

| Prototype journey | Inventory record(s) | LITE experiment | BASE experiment | PRO experiment | Priority boundary |
|---|---|---|---|---|---|
| Admin/owner onboarding | 1–2 | Supported onboarding path | Supported onboarding path | Supported onboarding path | POC; complex setup may move to web |
| Menu extraction/review/publish | 2, 5 | Menu display/order assistance; menu update guardrail | Same plus bounded availability controls | Same plus bounded advanced integrations | POC; human review and explicit publish |
| Staff permissions | 3 | Role/scope enforced | Role/scope enforced | Role/scope plus approved integrations | POC |
| Customer discovery/menu/cart/review | 4–6 | Discovery, menu, cart and customer review | Same | Same | POC |
| Payment | 7 | Not entitled | Enabled only through approved payment path | Enabled with bounded integrations | POC proof; verification/refunds remain validation |
| Pickup | 8 | Pickup-first operating path | Pickup | Pickup | POC |
| Delivery | 8 | Not entitled | Approved provider/configuration only | Approved providers plus bounded integrations | Later dependency; never required for Stage 0 |
| Order desk | 6, 14 | Scoped order visibility/actions | Order, payment and fulfillment desk | Full bounded desk and approved APIs | POC operations; web for density |
| Human takeover | 10 | Required human-control path | Required human-control path | Required human-control path | POC |
| Promotions/combos | 9, 11 | Not entitled | Basic, time-bounded, policy-controlled requests | Bounded promotion/integration capability | Later; BASE/PRO experiment only |
| Notifications | 11 | Transactional status only | Transactional status plus approved configured channels | Bounded multi-channel capability | POC transactional; marketing later |
| Reorder | 12 | Measure behavior; no campaign assumption | New-cart reorder after review | Bounded retention/reorder capability | Pilot |
| Cancel/refund | 6–7, 13 | Human order cancellation; refund not entitled | Staff-controlled correction/refund path | Same with approved integrations | POC control path; legal/provider validation |
| Recovery | 13 | Same validated recovery mechanics | Same | Same plus bounded integration recovery | POC baseline |
| Admin funnel/analytics | 14 | Operational funnel visibility | Pilot metrics and cost/usage evidence | Bounded advanced analytics | Pilot; derived and non-blocking |

The tier-state interpretation is corroborated by the current product and
validation documents: `product-definition.md`, “Internal tier scope decision”;
`validation.md:L119-L141`; `pilot-metrics.md:L145-L165`. These documents
explicitly keep the labels provisional and require deterministic state,
permission, audit and human control.

## 1. ADMIN → OWNER onboarding

**Priority:** POC. **Actors:** platform admin; invited owner; support/admin
operator; WhatsApp and web surfaces.

**Preconditions:** An authorized admin has a valid platform identity; the
restaurant name, owner contact and intended tenant/channel scope are known;
the invitation channel is available. The owner need not yet have a BABAI
account or a connected WhatsApp channel.

**Happy path:** Admin starts restaurant onboarding → enters restaurant and
owner details → platform creates an invitation and pending onboarding record →
owner receives a welcome message/link → owner continues in WhatsApp for the
simple path or web for complex setup → admin can see progress and intervene →
the record reaches owner-connected/onboarding-ready.

**Alternate/error paths:** Duplicate restaurant/name or conflicting contact
requires correction; invitation expires or is resent; owner declines or is
unresponsive; Meta/channel authorization fails; a partially completed flow
resumes without restarting; admin may cancel the pending onboarding. No admin
action may silently create a second tenant or take ownership of the
restaurant's WhatsApp assets.

**State transitions:** `DRAFT → INVITED → OWNER_CONNECTED →
CONFIGURING → READY` with `INVITATION_EXPIRED`, `CANCELLED` and
`BLOCKED_REVIEW` recovery states.

**Data/permission boundary:** Platform admin may create and inspect
onboarding records across tenants, subject to explicit admin permissions.
Owner sees only the invited tenant and authorized onboarding context. Pending
contact data is scoped and auditable; it is not a customer relationship.

**Acceptance criteria:**

- Admin can create exactly one resumable onboarding record for a tenant.
- Owner can continue from WhatsApp or a signed web handoff without a second
  identity.
- Duplicate, expired, cancelled and failed invitations are explicit states.
- Admin progress views do not expose another tenant's customer/order data.
- No path claims the owner is live before channel, menu, operator and
  commercial readiness gates pass.

**Implementation/demo status:** Flow mapped; no implementation or demo
evidence in this repository. POC demo should use one admin, one invited
restaurant and a resumable failure/retry case.

**Dependencies:** Identity/authentication; tenant and branch creation;
invitation workflow; channel onboarding; menu onboarding; staff setup;
pilot commercial terms; audit and tenant isolation.

**Citations:** `nekurama.chatgpt.md:L1140-L1151`,
`nekurama.chatgpt.md:L1233-L1474`; Raw `T5`
(`bbb21d44-faca-4e4b-a6e2-9f65f591a4bd`) and mapped-flow anchor
`T202` (`293ad099-4f4c-4e6c-a554-42d55cc8677b`); `brd.md`,
`product-definition.md`, `experience-and-channels.md`.

## 2. OWNER onboarding

**Priority:** POC. **Actors:** owner; platform onboarding workflow; Meta or
channel provider; menu extraction/review; billing/entitlement boundary.

**Preconditions:** A valid invitation or owner-started onboarding session
exists; the owner is authenticated or can establish identity; the tenant and
initial branch scope are known. Complex setup may use web; simple steps may
remain in WhatsApp.

**Happy path:** Owner opens the invitation → establishes/continues identity →
connects the restaurant-owned WhatsApp channel → submits menu files or
structured input → receives candidate extraction and semantic diff → corrects
and approves a menu revision → configures pickup and required branch facts →
selects an approved commercial commitment when pilot terms are available →
staff/operator readiness is recorded → channel and menu become ready for a
real test order.

**Alternate/error paths:** PDF/image/text extraction is incomplete; owner
corrects individual fields or resumes later; Meta authorization/coexistence
fails; menu validation blocks publication; payment or pilot-term recording is
pending; owner changes channel mid-flow; web handoff expires and is renewed.
Technical onboarding must not be made irreversibly dependent on payment.

**State transitions:** `INVITED → AUTHENTICATED → CHANNEL_CONNECTING →
MENU_RECEIVED → MENU_REVIEW → MENU_PUBLISHED → OPERATOR_READY → LIVE`,
with explicit `AUTH_FAILED`, `MENU_REVIEW_REQUIRED`, `PAYMENT_PENDING` and
`RECOVERY_REQUIRED`.

**Data/permission boundary:** Owner can configure only authorized tenant and
branch resources. AI extraction creates candidate data, never published
truth. Meta/WABA/phone identifiers are integration references; the
restaurant owns its identity/assets. Subscription/billing data is separate
from customer order payment.

**Acceptance criteria:**

- The same identity and onboarding context survive WhatsApp ↔ web handoff.
- A menu cannot become published without authorized review/validation.
- Existing and new channel paths have explicit failure and recovery states.
- “Live” requires a connected channel, published menu, named operator and
  approved pilot/commercial record.
- No public price, tier, refund rule or end date is invented when the packet
  leaves it unknown.

**Implementation/demo status:** Flow mapped and product boundary defined;
no production implementation/demo evidence. POC demo should cover a menu
upload, correction, channel failure and resume.

**Dependencies:** Identity; onboarding session; Meta/provider adapter;
branch/menu model; extraction and diff; policy/authorization; billing
boundary; notification and audit.

**Citations:** `nekurama.chatgpt.md:L1301-L1474`,
`nekurama.chatgpt.md:L23708-L23740`; Raw `T232`
(`bbb2115f-c170-412d-a6a8-ddb0aa51307f`) and mapped-flow anchor
`T202` (`293ad099-4f4c-4e6c-a554-42d55cc8677b`); `product-definition.md`,
`architecture-lld.md`, `architecture.md`.

## 3. OWNER / STAFF setup

**Priority:** POC. **Actors:** owner; manager/staff; platform identity and
membership services; branch-scoped authorization.

**Preconditions:** Tenant and at least one branch exist; owner has authority
to invite or configure staff; branch scope and operational capabilities are
known.

**Happy path:** Owner invites staff → invitee authenticates or establishes
identity → tenant/branch membership is created → role and scope are assigned
→ staff sees only permitted operational actions → staff can receive, accept,
prepare, ready and complete orders and can claim/release human takeover when
authorized.

**Alternate/error paths:** Invite expires, is revoked or is already used;
staff belongs to another tenant but must not inherit access; role/scope
change invalidates or narrows future capabilities; branch reassignment is
audited; duplicate claim is rejected; absent staff can be reassigned.

**State transitions:** `INVITED → ACCEPTED → ACTIVE`; membership may become
`SUSPENDED` or `REVOKED`. Takeover uses
`AUTOMATED → HUMAN_REQUESTED → HUMAN_ACTIVE → HUMAN_RELEASED → AUTOMATED`.

**Data/permission boundary:** Identity is separate from tenant membership.
`Role → Permissions → Scope` is evaluated at the resource boundary.
`PLATFORM_ADMIN` is not unrestricted god mode. Staff cannot inspect other
tenants or use personal WhatsApp as the restaurant channel.

**Acceptance criteria:**

- Owner can invite one staff member with an explicit tenant/branch scope.
- An authenticated invitee has no authority until membership is activated.
- The same role can produce different capabilities at different scopes.
- Order and takeover actions reject out-of-scope staff requests.
- Membership, role, scope, claim and release changes are auditable.

**Implementation/demo status:** Flow mapped; no implementation/demo evidence.
POC demo should show owner, manager and branch-limited staff with one denied
cross-branch action.

**Dependencies:** Identity; membership; role/permission model; branch scope;
capability token validation; order state machine; human takeover; audit.

**Citations:** `nekurama.chatgpt.md:L1678-L1768`,
`nekurama.chatgpt.md:L24444-L24550`; Raw mapped-flow anchors `T231`
(`b9268887-30dc-4aae-8605-fbd2dfe383ab`) and `T249`
(`b98b7d38-b56e-4d06-987a-2fb0f00993ee`); `product-definition.md:L81-L104`,
`domain-model.md`, `architecture.md`.

## 4. CUSTOMER discovery

**Priority:** POC. **Actors:** end customer; restaurant/branch channel;
conversation/read model; telemetry.

**Preconditions:** A restaurant channel and published customer-facing
information/menu are ready; customer reaches the restaurant-owned WhatsApp
link, QR or other approved entry point; branch context is resolvable or can
be selected.

**Happy path:** Customer opens the restaurant channel → receives welcome and
restaurant information → chooses menu/order/location/help → discovery data is
served from a read model or cache → a session is established and a new
correlation is created when the customer starts a concrete flow.

**Alternate/error paths:** Unknown branch on a shared channel prompts for
branch selection; restaurant is closed or temporarily paused; information is
missing or stale; customer asks for a human; an unsupported request is
classified and handed over rather than hallucinated.

**State transitions:** `DISCOVERED → SESSION_ACTIVE → FLOW_STARTED`, or
`SESSION_ENDED`; each new flow gets a new correlation ID while the session
may continue.

**Data/permission boundary:** Customer sees only the selected
tenant/branch's public or relationship-scoped information. `RestaurantViewed`
is analytics/telemetry by default, not durable business state. Customer
identity and relationship resolution must not leak another tenant's history.

**Acceptance criteria:**

- A customer can reach a restaurant without a BABAI consumer app.
- Shared-number branch ambiguity is explicit and resolved before ordering.
- Menu/information queries do not require a deep synchronous service fan-out.
- Session and correlation context are propagated to downstream work.
- Unsupported or sensitive requests route to a safe response or human
  takeover.

**Implementation/demo status:** Flow mapped; no implementation/demo evidence.
POC demo should include restaurant link → welcome → menu/help and a new
correlation for the first order action.

**Dependencies:** Channel adapter; conversation; session/correlation context;
branch resolution; menu/read model; notification; human takeover; analytics.

**Citations:** `nekurama.chatgpt.md:L201-L288`,
`nekurama.chatgpt.md:L1478-L1518`; Raw `T5`
(`bbb21d44-faca-4e4b-a6e2-9f65f591a4bd`) and mapping anchor `T202`
(`293ad099-4f4c-4e6c-a554-42d55cc8677b`); `experience-and-channels.md`,
`product-definition.md`.

## 5. MENU

**Priority:** POC. **Actors:** owner/authorized staff; menu ingestion and
validation; customer; ordering projection.

**Preconditions:** Tenant and branch exist; a staff member can submit/review
menu material; branch menu topology is available.

**Happy path:** Owner uploads PDF/image/spreadsheet/text or supplies structured
input → extraction produces a candidate revision → validator normalizes
sections, items, variants, modifier groups, prices and availability → semantic
diff is shown against the published revision → staff corrects/approves →
revision is explicitly published or scheduled → ordering/conversation
projections update.

**Alternate/error paths:** Extraction uncertainty or malformed input blocks
publication; item/price/variant changes require review; daily special expires;
temporary availability changes without content revision; menu copy to another
branch creates an independent menu identity; scheduled activation fails and
the previous revision remains authoritative.

**State transitions:** `SOURCE_RECEIVED → CANDIDATE_REVISION →
REVIEW_REQUIRED → APPROVED → PUBLISHED`; availability is a separate
`AVAILABLE ↔ UNAVAILABLE`/scheduled override state.

**Data/permission boundary:** Menu is branch-owned. Multiple conceptual menus
may exist per branch; a schedule resolves the effective menu. Copy is
copy-by-value, not a shared reference. AI is advisory. Published revisions
are immutable; orders snapshot the effective menu revision and commercial
facts.

**Acceptance criteria:**

- No ingestion path mutates the published menu in place.
- Staff sees a semantic diff and can correct uncertain extraction.
- Branches can have multiple menus and dynamic activation schedules.
- Availability can change without rewriting menu content.
- Ordering can validate against an event-fed projection and has an explicit
  stale/freshness recovery path.

**Implementation/demo status:** Domain shape and flow decisions are mapped;
no implementation/demo evidence. POC demo should upload a menu, correct a
price, publish, toggle availability and show an independent branch copy.

**Dependencies:** Branch/tenant; extraction adapters; canonical menu schema;
revision/diff; availability/schedule; ordering projection; audit; policy.

**Citations:** `nekurama.chatgpt.md:L1321-L1389`,
`nekurama.chatgpt.md:L23880-L24370`; Raw `T240`
(`bbb21f43-d5b6-4754-97be-157fca0b91b2`) and mapped-flow anchor `T249`
(`b98b7d38-b56e-4d06-987a-2fb0f00993ee`); `domain-model.md`,
`product-definition.md`.

## 6. ORDER

**Priority:** POC. **Actors:** customer; conversation/BFF; ordering;
restaurant staff; menu projection; notification and fulfillment consumers.

**Preconditions:** Customer session and branch context exist; a valid,
published, sufficiently fresh menu projection is available; cart contents
can be validated; customer and restaurant relationship scope is known.

**Happy path:** Customer browses and selects items/variants/modifiers →
cart is created and changed → customer reviews the cart, fulfillment choice,
amount and applicable benefits → checkout validates current
menu/availability and commercial inputs → `OrderCreated` commits an immutable
order snapshot →
payment and restaurant acceptance proceed as separate lifecycles → staff
accepts, prepares, marks ready and completes pickup/fulfillment → the order
desk shows the actionable queue in WhatsApp/web → customer receives status.

**Alternate/error paths:** Stale menu projection triggers revalidation or
cart correction; item becomes unavailable; customer requests modification or
cancellation; staff rejects or corrects the order; invoice revision and
pending/refund amount are generated; manual/off-platform settlement is
recorded and acknowledged rather than misrepresented as BABAI-processed.

**State transitions:** `NEW → PAYMENT_PENDING → PAID → ACCEPTED →
PREPARING → READY → COMPLETED`; explicit `PAYMENT_FAILED`, `REJECTED`,
`CANCELLED`, `CORRECTION_PENDING` and `HUMAN_REVIEW` paths are required.
The prototype entitlement gate is `ORDER_DESK_VISIBLE` for every enabled
workflow, with payment/delivery actions added only when the restaurant's
current experiment capability allows them.

**Data/permission boundary:** Ordering owns order state and the customer-facing
order read model. Cart is mutable; order is a separate committed aggregate.
Staff own modification/cancellation decisions. Payment and delivery react to
order facts but do not directly mutate order state.

**Acceptance criteria:**

- Order exists before payment completion and is not accepted merely because
  payment succeeded.
- Order snapshot preserves item, variant, modifier, price, discount, tax and
  menu provenance.
- Customer modification/cancellation is a request; staff decision is required
  for controlled changes.
- Every commercial change creates a new invoice ID with a patch revision.
- Customer acknowledgement is captured for financial/order corrections where
  agreement matters.
- Order desk views show tenant/branch-scoped queues, state, amount, payment
  status, fulfillment mode and required next action without granting a staff
  permission the actor does not hold.

**Implementation/demo status:** Golden flow mapped through flows 1–10 and
11–15; no implementation/demo evidence. POC demo must prove one correct
pickup order plus one staff correction path.

**Dependencies:** Customer discovery; menu projection; cart; payment;
staff authorization; invoice/calculation; notification; pickup; audit and
reconciliation.

**Citations:** `nekurama.chatgpt.md:L1478-L1672`,
`nekurama.chatgpt.md:L22696-L23080`; Raw mapped-flow anchors `T208`
(`5ec0497b-76d4-4977-bc62-179f63f51edc`) and `T223`
(`3d343ca8-c4e9-4a06-9735-27a084e41064`); `domain-model.md`,
`product-definition.md`.

## 7. PAYMENT

**Priority:** POC. **Actors:** customer; payment capability; payment
provider/manual settlement; restaurant staff; ordering.

**Preconditions:** An order and invoice snapshot exist; payment method and
amount are authorized; direct merchant settlement path is configured or the
manual confirmation policy is available.

**Happy path:** Customer initiates payment while order is
`PAYMENT_PENDING` → payment capability creates an attempt/reference →
provider callback or approved manual confirmation is verified → payment state
becomes `PAID`/confirmed → Ordering evaluates acceptance independently →
customer and staff receive appropriate notifications.

**Alternate/error paths:** Pending, failed, expired, duplicate or out-of-order
provider callback; partial payment; full/partial refund; restaurant rejects
after payment; manual payment/refund by call or another channel; staff records
the correction and customer acknowledges the resulting amount. Reconciliation
fetches external truth when local and provider state diverge.

**State transitions:** `PAYMENT_PENDING → INITIATED → PROVIDER_PENDING →
PAID | FAILED | EXPIRED | REFUND_PENDING → REFUNDED`; external/manual
settlement is a distinct recorded fact. The prototype entitlement gate is
`LITE → PAYMENT_NOT_ENTITLED`, `BASE/PRO → PAYMENT_ELIGIBLE`, followed by
the normal payment state machine; an entitlement gate never bypasses payment
verification or order acceptance.

**Data/permission boundary:** Payment owns payment state and provider
integration. Ordering owns order acceptance. BABAI never becomes customer
funds custodian in the initial product. Restaurant subscription billing is a
separate billing account and payment domain.

**Acceptance criteria:**

- Payment can be initiated before restaurant acceptance.
- Verified payment completion never auto-accepts an order.
- Provider callbacks are authenticated, idempotent and reconciled.
- Manual/external payment or refund is never represented as a provider
  success.
- Financial corrections produce immutable invoice/payment history and
  required acknowledgement.
- LITE cannot enter a customer-payment state; BASE/PRO cannot enter one
  without an approved provider/manual policy and an authorized actor.

**Implementation/demo status:** Flow mapped; payment verification/refunds
remain pilot validation items; no implementation/demo evidence. POC demo may
use a test provider or explicit manual confirmation, not a production money
claim.

**Dependencies:** Order/invoice; direct merchant settlement; provider adapter;
webhook trust; staff intervention; reconciliation; audit; notification.

**Citations:** `nekurama.chatgpt.md:L255-L272`,
`nekurama.chatgpt.md:L22696-L23080`; Raw mapped-flow anchors `T208`
(`5ec0497b-76d4-4977-bc62-179f63f51edc`) and `T223`
(`3d343ca8-c4e9-4a06-9735-27a084e41064`); `product-definition.md:L81-L104`,
`validation.md:L119-L141`, `pilot-metrics.md:L145-L165`, `brd.md`,
`domain-model.md`, `business-model.md`.

## 8. DELIVERY / PICKUP

**Priority:** POC for pickup; **later** for delivery dependency. **Actors:**
customer; restaurant staff; ordering; delivery capability/provider adapter;
notification.

**Preconditions:** Order is accepted and the branch's fulfillment policy
supports pickup; delivery is only selectable when entitlement, configuration,
coverage and provider readiness are present.

**Happy path:** Customer selects pickup → staff prepares → order is marked
ready → customer receives pickup notification → staff verifies handoff →
order completes. Later delivery path: customer requests a time-bound quote →
selects delivery → provider booking is asynchronous → delivery owns
canonical status → customer receives a scoped tracking link and status
updates.

**Alternate/error paths:** Branch is closed; pickup window is missed; delivery
quote expires; provider has no coverage or fails booking; delivery status is
unknown/out of order; partner tracking URL expires/revokes; staff handles a
delivery exception; order falls back to pickup only if customer and staff
policy permits.

**State transitions:** Pickup: `ACCEPTED → PREPARING → READY_FOR_PICKUP →
HANDED_OVER → COMPLETED`. Delivery: `QUOTE_PENDING → QUOTED →
BOOKING_PENDING → ASSIGNED → IN_TRANSIT → DELIVERED`, with
`FAILED`, `CANCELLED` and `RECONCILIATION_REQUIRED`.
The prototype entitlement gate is `LITE → DELIVERY_NOT_ENTITLED`,
`BASE → APPROVED_PROVIDER_REQUIRED`, and
`PRO → APPROVED_PROVIDER_OR_INTEGRATION_REQUIRED`; pickup remains available
for the Stage 0 proof regardless of delivery entitlement.

**Data/permission boundary:** Pickup is inside the initial ordering
fulfillment path. Delivery provider state is owned by the delivery capability,
not exposed raw to customers. Customer-facing tracking is BABAI-controlled
with an opaque, expiring token; partner-hosted UI is an implementation option.

**Acceptance criteria:**

- Stage 0 proves pickup without a delivery integration.
- Delivery quote is separate from booking and revalidated before use.
- Delivery booking/status processing is asynchronous and idempotent.
- Provider-specific status is normalized before customer display.
- Tracking links are non-guessable, scoped, revocable/expiring and do not
  expose unnecessary PII.
- A delivery state cannot be reached from entitlement alone: branch policy,
  actor permission, quote/coverage and validated provider transitions are
  required.

**Implementation/demo status:** Pickup is the current pilot boundary;
delivery is not a pilot dependency and remains unvalidated. No
implementation/demo evidence. POC demo should complete pickup and show
delivery as an unavailable/later capability.

**Dependencies:** Order acceptance; branch hours/policies; delivery
entitlements/configuration; provider adapter; notification; reconciliation;
human takeover.

**Citations:** `nekurama.chatgpt.md:L1022-L1045`,
`nekurama.chatgpt.md:L23088-L23374`; Raw `T19`
(`bbb216eb-b95f-4255-b182-0b9e8dc39288`) and mapped-flow anchor `T231`
(`b9268887-30dc-4aae-8605-fbd2dfe383ab`); `product-definition.md`,
`product-definition.md:L81-L104`, `experience-and-channels.md`,
`validation.md:L119-L141`, `pilot-metrics.md:L145-L165`.

## 9. PROMO / COMBO

**Priority:** Later. **Actors:** owner/authorized staff; pricing/promotion
capability; customer; notification/consent.

**Preconditions:** A branch menu and price model exist; the offer has an
explicit scope, eligibility, validity and policy; the customer is eligible
for any promotional communication.

**Happy path:** Owner defines a time-bound offer or combo over valid menu
items → system validates applicability, price and schedule → customer sees
the offer in the relevant menu/read model → checkout evaluates the offer →
order snapshots the applied benefit and provenance.

**Alternate/error paths:** Offer expires, overlaps or is not eligible; item
availability changes; combo contents change; promotion is branch-specific;
marketing consent is absent; a customer asks for an old offer during reorder.
The system must not silently reuse expired discounts or turn a special into a
new item identity.

**State transitions:** `DRAFT → VALIDATING → SCHEDULED → ACTIVE →
EXPIRED | CANCELLED`; order evaluation produces `APPLIED`, `NOT_APPLICABLE`
or `REJECTED` without rewriting base price.
The prototype entitlement gate is `LITE → PROMOTION_NOT_ENTITLED`,
`BASE → BASIC_TIME_BOUNDED_PROMOTION`, and
`PRO → BOUNDED_PROMOTION_AND_APPROVED_INTEGRATION`; every path still requires
staff authorization and deterministic policy evaluation.

**Data/permission boundary:** Offers are branch-scoped commercial rules.
Price, offer, tax, availability and order snapshot remain separate.
Marketing consent is tenant/purpose/channel scoped and checked at send time.
Historical orders retain the evaluated benefit, not a live reference.

**Acceptance criteria:**

- A combo/offer does not overwrite the base item price or identity.
- Validity windows and branch scope are enforced deterministically.
- Expired offers cannot be applied during reorder.
- Customer-facing promotional messaging requires the appropriate consent and
  template policy.
- Historical order/invoice snapshots remain reproducible after offer edits.
- A combo is evaluated as a commercial construct and cannot bypass menu
  availability, payment, order or permission state.

**Implementation/demo status:** Historical discussion and domain shape exist;
no approved public tier, promotion engine implementation or demo. Defer
automated campaigns and sophisticated promotion breadth beyond the initial
pickup proof.

**Dependencies:** Menu identity/revisions; price/tax calculation; order
snapshot; consent; notification templates; branch policy; analytics.

**Citations:** `nekurama.chatgpt.md:L221-L245`,
`nekurama.chatgpt.md:L8970-L9180`; Raw `T21`
(`bbb21b01-c1d5-42f9-9e1f-702bb346453c`) and mapped-flow anchor `T202`
(`293ad099-4f4c-4e6c-a554-42d55cc8677b`); `domain-model.md`,
`product-definition.md:L81-L104`, `validation.md:L119-L141`,
`pilot-metrics.md:L145-L165`, `domain-model.md`, `business-model.md`.

## 10. HUMAN TAKEOVER

**Priority:** POC. **Actors:** customer; conversation automation; authorized
staff/owner; notification and assignment workflow.

**Preconditions:** A tenant-scoped conversation exists; an automation reply
is unsafe, insufficient or explicitly declined; at least one authorized
staff member can receive/claim work.

**Happy path:** Customer asks for help or automation detects an exception →
conversation enters `HUMAN_REQUESTED` → staff is notified → authorized staff
claims or is assigned atomically → automation pauses → staff responds through
the restaurant channel → staff releases → automation resumes.

**Alternate/error paths:** No staff available; two staff claim concurrently;
staff session expires; issue is order/payment/delivery-specific; staff needs
to correct commercial state; customer opts out of automation; release is
delayed. Order, payment and fulfillment processing continue independently
while conversational automation is paused.

**State transitions:** `AUTOMATED → HUMAN_REQUESTED → HUMAN_ACTIVE →
HUMAN_RELEASED → AUTOMATED`, plus `UNASSIGNED`, `ESCALATED` and
`REASSIGNMENT_REQUIRED`.

**Data/permission boundary:** Takeover is conversation-wide for MVP, with
future finer operational scope possible. Staff acts through the restaurant's
channel, not a personal WhatsApp identity. Tenant/branch role and scope are
checked before claim or response.

**Acceptance criteria:**

- Customer can request a human and receives an immediate acknowledgement.
- Automation sends no conflicting conversational reply while human-active.
- Only one authorized staff member can atomically claim a takeover.
- Staff can be reassigned after timeout/absence.
- Takeover, response ownership and release are auditable.

**Implementation/demo status:** Explicitly mapped and treated as a first-class
MVP path; no implementation/demo evidence. POC demo should show automation
pause, staff claim, order continuation and release.

**Dependencies:** Conversation; staff membership/scope; notification;
order/payment/fulfillment independence; audit; recovery.

**Citations:** `nekurama.chatgpt.md:L522-L557`,
`nekurama.chatgpt.md:L23688-L23704`,
`nekurama.chatgpt.md:L24612-L24710`; Raw mapped-flow anchors `T231`
(`b9268887-30dc-4aae-8605-fbd2dfe383ab`) and `T251`
(`1ea8f19f-6750-4943-b202-0fe845b9dd7a`); `domain-model.md`,
`experience-and-channels.md`.

## 11. NOTIFICATIONS

**Priority:** POC for transactional status; later for broad marketing.
**Actors:** domain event producer; notification workflow; template/version
store; channel renderer; WhatsApp/provider adapter; recipient.

**Preconditions:** A qualifying domain/application event exists; recipient and
tenant/branch context are known; message purpose, consent and channel policy
can be evaluated; provider credentials/templates are configured where
required.

**Happy path:** `OrderReady` or another fact occurs →
`NotificationRequested` is created → notification policy checks purpose,
consent, messaging window and entitlement → semantic template version is
selected → WhatsApp renderer transforms it into provider payload → adapter
submits → provider acceptance/delivery facts are recorded → read models and
audit/telemetry update.

**Alternate/error paths:** Template is unapproved or missing; message window
requires an approved template; customer opted out of marketing; provider
timeout/4xx/5xx; duplicate event; locale/variable rendering failure; human
notification is required. Domain services must not embed WhatsApp payload
formats.

**State transitions:** `TRIGGERED → REQUESTED → RENDERED → SUBMITTED →
PROVIDER_ACCEPTED → DELIVERED`, with `FAILED`, `RETRYABLE`,
`SUPPRESSED` and `DLQ_ACTION_REQUIRED`.

**Data/permission boundary:** Transactional and marketing purposes are
separate. Templates are notification-owned and versioned independently of
domain event schemas. Provider IDs and payloads remain in the adapter
boundary. Consent is customer + tenant + purpose + channel scoped.

**Acceptance criteria:**

- A domain event can produce a notification event without calling WhatsApp
  directly from the domain service.
- Template semantics are provider-neutral; WhatsApp rendering is isolated.
- Transactional messages do not imply marketing opt-in.
- Provider failures are classified, idempotent and observable.
- Notification records carry session/correlation/tenant context without
  leaking unrelated tenant data.

**Implementation/demo status:** Architecture mapped; no implementation/demo
evidence. POC demo should send one transactional pickup status through a
stubbed provider adapter and show a failed-template path.

**Dependencies:** Domain events; consent; template configuration; channel
adapter; provider webhook/reconciliation; retry/DLQ; audit/analytics.

**Citations:** `nekurama.chatgpt.md:L1615-L1672`,
`nekurama.chatgpt.md:L25004-L25571`; Raw `T256`
(`bbb2153a-cef9-4c8b-bd34-b42af53dde75`) and mapped-flow anchors `T231`
(`b9268887-30dc-4aae-8605-fbd2dfe383ab`) and `T251`
(`1ea8f19f-6750-4943-b202-0fe845b9dd7a`); `experience-and-channels.md`,
`product-definition.md:L79-L104`, `experience-and-channels.md`,
`domain-model.md`.

## 12. RETENTION / REORDER

**Priority:** Pilot. **Actors:** returning customer; ordering; current menu,
price, offer and availability projections; consent/notification.

**Preconditions:** A prior completed order exists; customer relationship
linkage is privacy-safe and consent/retention policy permits the operation;
current branch/menu context is available.

**Happy path:** Customer requests reorder or receives an eligible
transactional/marketing prompt → system loads historical intent → resolves
current item/variant/modifier identities and prices → creates a new cart →
customer reviews current availability/total → a new order is placed.

**Alternate/error paths:** Item deleted or unavailable; price/offer changed;
modifier no longer exists; delivery fee/address needs recalculation; prior
discount expired; customer identity is ambiguous; marketing opt-out suppresses
campaign messaging; staff takeover handles a substitution.

**State transitions:** `COMPLETED_ORDER → REORDER_REQUESTED →
CURRENT_CART_REBUILT → CUSTOMER_REVIEW → NEW_ORDER | ABANDONED`.
`CANCEL_REQUESTED` and `REFUND_REQUESTED` do not transition directly from
reorder; they enter the staff-owned order/payment correction path in records
6–7 and 13.

**Data/permission boundary:** Reorder never clones an old order or carries
forward stale commercial truth. Customer relationship and repeat metrics are
tenant-scoped; pseudonymous linkage and retention/deletion rules apply.
Marketing outreach is separate from an in-session customer-requested reorder.

**Acceptance criteria:**

- Reorder creates a new cart and requires customer review before placement.
- Current price, availability, modifiers, tax and delivery/pickup policy are
  recalculated.
- Expired offers are not silently reused.
- Repeat metrics do not expose raw phone data in the scorecard.
- Opt-out suppresses marketing prompts while preserving required transactional
  communication.
- A reorder never auto-cancels or auto-refunds an earlier order; those are
  explicit staff-controlled workflows.

**Implementation/demo status:** Reorder is a mapped capability and a pilot
measure, not a committed first-pilot automation. No implementation/demo
evidence. Pilot should measure repeat use before investing in campaigns.

**Dependencies:** Completed order snapshot; customer relationship; current
menu/price/offer; consent and retention policy; ordering/cart; notification.

**Citations:** `nekurama.chatgpt.md:L587-L611`,
`nekurama.chatgpt.md:L23376-L23487`; Raw mapped-flow anchor `T231`
(`b9268887-30dc-4aae-8605-fbd2dfe383ab`) and founder anchor `T5`
(`bbb21d44-faca-4e4b-a6e2-9f65f591a4bd`); `domain-model.md`,
`pilot-metrics.md`, `validation.md`.

## 13. EXCEPTIONS / RECOVERY

**Priority:** POC baseline. **Actors:** workflow/state engine; domain owner;
provider/integration adapter; platform admin; restaurant staff; customer as
needed.

**Preconditions:** A flow has an authoritative state, correlation/session
context, idempotency key and recovery policy; event/outbox/audit capability is
available.

**Happy path:** Request/event enters a validated transition → business state
and outbox event commit atomically → consumers process at least once →
transient failures retry with bounded backoff → permanent/unknown/human-action
cases enter an actionable DLQ → an operator or workflow performs the correct
replay, suppression, customer/staff action or reconciliation → normal
transition machinery records the result.

**Alternate/error paths:** Duplicate or out-of-order event; invalid
authorization/context; provider webhook lost; provider and local state
diverge; message template rejected; payment/delivery outcome unknown; DLQ
event should be ignored, replayed, escalated to admin/restaurant/customer or
held for evidence. Unexpected 5xx is an engineering defect; controlled 4xx
business outcomes remain explicit.

**State transitions:** `RECEIVED → VALIDATING → APPLIED`, or
`RETRY_SCHEDULED → RETRYING`; `DLQ_ACTION_REQUIRED → SUPPRESS | REPLAY |
ESCALATE | RECONCILE`; customer `CANCEL_REQUESTED` and staff
`REFUND_REQUESTED` are classified recovery/correction intents, and
reconciliation returns through a valid domain transition.

**Data/permission boundary:** Workflow mechanics do not own domain meaning.
Signed flow context may bind subject, tenant, branch, flow, correlation,
resource, audience, capability and expiry, but it does not replace
authorization or state validation. Recovery actions are privileged and
audited.

**Acceptance criteria:**

- At-least-once delivery does not create duplicate business effects.
- Every async failure is classified as transient, permanent, unknown or
  human-action-required.
- DLQ supports suppress/ignore, replay, escalation and targeted action; it is
  not a retry bucket only.
- Reconciliation can repair lost/out-of-order provider facts without direct
  state mutation.
- No unhandled 5xx is an accepted normal outcome; 4xx/5xx handling is
  observable and actionable.
- Context mismatches raise integrity/security signals and cannot silently
  cross tenant, actor, flow or correlation boundaries.
- Cancellation, refund, provider failure and lost-message cases each expose
  an actionable owner (customer, restaurant/staff, platform admin or provider
  reconciliation) rather than a success-shaped fallback.

**Implementation/demo status:** Reliability principles are mapped and
partially reflected in architecture documents; no implementation/demo
evidence. POC must include duplicate event, provider timeout, DLQ action and
reconciliation cases.

**Dependencies:** State engine; transactional outbox/inbox; event broker;
idempotency; provider adapters; signed context candidate; audit; support
operations; tenant isolation.

**Citations:** `nekurama.chatgpt.md:L25601-L26121`,
`nekurama.chatgpt.md:L26174-L27130`; Raw `T264`
(`bbb21a7f-4d44-4cc1-8f60-1172bdcc303c`) and mapped-flow anchors `T261`
(`ea5a2b92-1c8e-44bb-9c32-a1ee80e16c5a`) and `T267`
(`6b051ce4-9033-4501-afff-e4bfd2d54679`); `architecture.md`,
`architecture-lld.md`, `domain-model.md`.

## 14. ADMIN / ANALYTICS

**Priority:** Pilot. **Actors:** platform admin; restaurant owner/manager;
staff; analytics/read-model consumers; support/operations.

**Preconditions:** Tenant/branch and actor scopes are established; domain
events and operational/audit records have stable IDs; metric definitions and
privacy/retention rules are approved.

**Happy path:** Admin monitors onboarding, channel/menu/order/payment and
support states → owner/staff see scoped operational dashboards or WhatsApp
alerts → the admin funnel tracks invited, connected, menu-reviewed,
published, operator-ready, first-order, paid/confirmed, completed and
continuing restaurants → event-derived projections update asynchronously →
analytics pipeline aggregates business events for activation, order success,
fulfillment, staff adoption, support, repeat use, economics and
willingness-to-pay decisions → pilot review uses the recorded evidence.

**Alternate/error paths:** Projection lag or rebuild; incomplete telemetry;
cross-tenant query denied; metric not evaluable because the minimum sample is
missing; provider cost or support ledger is incomplete; an admin must inspect
an incident without exposing unrelated customer PII. Analytics must never
block ordering, payment, fulfillment or messaging.

**State transitions:** `EVENT_RECEIVED → PROJECTED → QUERYABLE`; analytics
records may be `PROVISIONAL`, `EVALUABLE`, `NOT_EVALUABLE` or `RETIRED` as
metric definitions change. Onboarding dashboard states mirror the explicit
tenant onboarding lifecycle.

**Data/permission boundary:** Platform admins may have cross-tenant
operational views only under explicit policy and audit. Restaurant users see
their tenant/branch data. Read models and analytics are derived, not
authoritative. PII minimization, tenant isolation and retention/deletion
policy apply to every projection and metric.

**Acceptance criteria:**

- Admin can see onboarding blockers and actionable operational states without
  editing authoritative state outside allowed commands.
- Owner/staff dashboards cannot cross tenant or branch scope.
- Read models are rebuildable from durable event history and tolerate
  eventual consistency.
- Pilot metrics distinguish observed, estimated, provisional and not
  evaluable data; no threshold is silently treated as approved.
- Analytics is asynchronous and cannot become a runtime dependency.
- Funnel stages reconcile to authoritative onboarding/order/payment states and
  expose drop-off without revealing another tenant's customer data.

**Implementation/demo status:** Product docs define proposed pilot metrics and
web/WhatsApp boundaries; no implementation/demo evidence. Pilot demo should
show onboarding/order/support views and one privacy-safe metric roll-up.

**Dependencies:** Event history; projections; analytics pipeline; admin
authorization; support/incident tooling; economics ledger; retention/privacy;
pilot decision governance.

**Citations:** `nekurama.chatgpt.md:L1576-L1615`,
`nekurama.chatgpt.md:L1774-L1825`,
`nekurama.chatgpt.md:L26174-L27130`; Raw `T201`
(`bbb21dde-e359-4e19-b211-634eb6b5d917`) and mapped-flow anchor `T267`
(`6b051ce4-9033-4501-afff-e4bfd2d54679`); `pilot-metrics.md`,
`pilot-metrics.md:L145-L165`, `validation.md:L119-L141`,
`experience-and-channels.md`.

## Open decisions carried forward

The inventory deliberately does not close questions that the current sources
leave open:

- exact Meta onboarding/coexistence reliability and provider/commercial path;
- payment webhook/manual confirmation/refund/reconciliation behavior;
- pilot fee/deposit, refund treatment, dates, GST and continuation terms;
- final menu schema details, tax/invoice legal treatment and provider
  contracts;
- delivery provider selection and whether/when delivery earns pilot scope;
- notification template approval, message pricing and policy details;
- retention/deletion implementation under applicable law and contracts;
- exact workflow/event transport, state schema, SLOs and deployment choices;
- approved numeric pilot thresholds and production/demo readiness.

These are dependencies or validation gates, not permission to invent claims.

## Related durable documents

- [`brd.md`](brd.md) — current product truth and status vocabulary
- [`product-definition.md`](product-definition.md) — MVP/pilot boundary
- [`domain-model.md`](domain-model.md) — aggregates, snapshots and state
- [`architecture.md`](architecture.md) — starting architecture, ownership and
  trust boundaries
- [`experience-and-channels.md`](experience-and-channels.md) — WhatsApp/web
  channel principle
- [`pilot-metrics.md`](pilot-metrics.md) — proposed pilot scorecard
- [`validation.md`](validation.md) — validation contract
- [`nekurama.babai.research.md`](../../../nekurama.babai.research.md) — field
  research
