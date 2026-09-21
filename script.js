(() => {
  "use strict";

  const journeyDefinitions = {
    "admin-onboarding": {
      title: "Admin onboarding → owner invite/status",
      states: [
        ["Admin intake", "ADMIN · ONBOARDING", "Start the invented workspace.", "A synthetic restaurant workspace is queued for controlled setup.", "Internal admin reviewer", "No identity, tenant or invitation exists; fixture only.", "Owner invite draft", "LOCAL READY", "No account or channel is created."],
        ["Owner invite sent", "ADMIN · OWNER INVITE", "Invite prepared for an invented owner.", "The invitation state is visible without an address, token or send action.", "Internal admin reviewer", "Owner fixture only; no email, phone or auth token.", "Invite pending", "REVIEW", "Confirm destination and scope before any real invite."],
        ["Invite pending", "OWNER · STATUS", "Waiting for owner acknowledgement.", "A pending state remains explicit instead of implying that access exists.", "Invented owner fixture", "No session, credential or membership is active.", "Owner acknowledgement", "ATTENTION", "No automated escalation or reminder is sent."],
        ["Owner acknowledged", "OWNER · STATUS", "Owner acknowledgement is represented locally.", "The next setup step can be reviewed without authenticating the owner.", "Invented owner fixture", "Membership is a label; no capability is granted.", "Workspace setup", "LOCAL READY", "Review scope before owner access."],
        ["Onboarding ready", "ADMIN · READY", "Workspace is ready for the next internal review.", "The setup state is complete only inside this deterministic fixture.", "Admin and owner reviewers", "Tenant and branch data remain invented and local.", "Reset or choose another journey", "DONE", "Ready means demo-ready, not production-ready."]
      ]
    },
    "menu-ingestion": {
      title: "Menu source → extraction review → publish",
      states: [
        ["Source selected · image", "OWNER · MENU SOURCE", "Review an invented menu image.", "The source type is visible without upload or file access.", "Invented owner", "No image, PDF, text or restaurant catalog is read.", "Extraction review", "LOCAL READY", "Fixture source only."],
        ["Source selected · PDF", "OWNER · MENU SOURCE", "Review an invented PDF menu path.", "PDF is represented as a source option, not uploaded or parsed.", "Invented owner", "No file picker, document bytes or OCR request.", "Extraction review", "LOCAL READY", "Fixture source only."],
        ["Source selected · text", "OWNER · MENU SOURCE", "Review an invented text menu path.", "Plain text is represented as a source option for comparison.", "Invented owner", "No pasted content or external parser.", "Extraction review", "LOCAL READY", "Fixture source only."],
        ["Extraction review", "MENU · EXTRACTION REVIEW", "Candidate items need human verification.", "An invented parser result shows confidence and unresolved fields.", "Owner or menu reviewer", "No canonical menu is changed; uncertain items stay gated.", "Correction needed", "ATTENTION", "Do not publish unverified extraction."],
        ["Correction needed", "MENU · CORRECTION", "Correct a fictional item, price or availability.", "The correction state is shown without an editable form or persistence.", "Owner or menu reviewer", "No menu data is stored; corrections are display-only.", "Publish review", "REVIEW", "Every correction remains attributable in the imagined flow."],
        ["Publish review", "MENU · PUBLISH REVIEW", "Review the candidate revision before publish.", "Version, availability and unresolved warnings remain visible.", "Owner with menu permission", "No publish permission is evaluated; no catalog is live.", "Published revision", "GATED", "Publish requires explicit owner review."],
        ["Published revision", "MENU · PUBLISHED", "A fictional revision is marked published.", "The state demonstrates a stable menuVersion lineage for later cart review.", "Owner and customer read model", "Only invented menu facts exist; no customer menu is served.", "Reset or choose another journey", "DONE", "Published means fixture state only."]
      ]
    },
    "staff-access": {
      title: "Staff roles → permissions → handoff",
      states: [
        ["Role review", "STAFF · ROLE", "Review an invented staff role.", "Owner, manager and operator labels are shown as personas.", "Invented owner or manager", "No staff identity, invite or credential exists.", "Permission scope", "REVIEW", "Role is not access."],
        ["Permission scope", "STAFF · PERMISSION", "Assign a narrow branch/action scope.", "The fixture separates role from branch and action permission.", "Invented owner or manager", "No RBAC decision or token is issued.", "Handoff ready", "GATED", "Scope must be explicit before handoff."],
        ["Handoff ready", "STAFF · HANDOFF", "Prepare a fictional attention handoff.", "A staff member can be named as the imagined next operator.", "Invented manager", "No staff contact, queue or notification is created.", "Staff attention", "LOCAL READY", "Handoff is a state preview."],
        ["Staff attention", "STAFF · ATTENTION", "Show a bounded task for review.", "The operator sees the action and branch boundary, not hidden customer data.", "Invented staff operator", "No customer conversation, payment or credential is exposed.", "Complete or return", "ATTENTION", "A human decision is required."]
      ]
    },
    "customer-order": {
      title: "Discovery → menu → item/variant → cart → review",
      states: [
        ["Discovery", "CUSTOMER · DISCOVERY", "Browse an invented restaurant.", "A fictional branch card leads to a menu without location or identity lookup.", "Invented customer", "No customer profile, location or analytics event leaves the page.", "Menu", "LOCAL READY", "Discovery is not an order."],
        ["Menu", "CUSTOMER · MENU", "Review the current fictional menu.", "Menu version and availability context are visible.", "Invented customer", "No catalog is fetched; no menu is published.", "Item and variant", "LOCAL READY", "Menu context is not commercial commitment."],
        ["Item and variant", "CUSTOMER · ITEM", "Choose a fictional item variant.", "A paneer bowl variant is selected with an invented menuVersion.", "Invented customer", "No inventory, allergen, price or customer preference is real.", "Cart", "LOCAL READY", "Selection carries context only."],
        ["Cart", "CUSTOMER · CART", "Review a mutable local cart.", "Quantity and modifier intent are shown as draft state.", "Invented customer", "No cart ID, address or customer record exists.", "Order review", "REVIEW", "Cart is not submitted."],
        ["Order review", "CUSTOMER · REVIEW", "Show the last check before an order.", "Freshness, availability and human review cues remain explicit.", "Customer and restaurant reviewer", "No order, invoice or payment action is created.", "Reset or choose another journey", "GATED", "Review does not imply checkout."]
      ]
    },
    "fulfillment": {
      title: "Payment/pickup/delivery tiers and recovery",
      states: [
        ["LITE · payment pending", "LITE · PAYMENT", "Payment intent is pending.", "The basic tier shows a pending boundary without opening checkout.", "Invented customer", "No method, provider, amount or payment intent exists.", "Failure or confirmation review", "PENDING", "Payment does not accept the order."],
        ["BASE · payment failure", "BASE · PAYMENT", "A fictional payment failure needs review.", "Failure is explicit and does not look like a completed charge.", "Invented customer and staff", "No provider response, card data or retry request.", "Retry", "ATTENTION", "Staff review owns the next action."],
        ["BASE · payment retry", "BASE · PAYMENT", "Retry is available as a bounded local state.", "The retry path demonstrates idempotent intent without performing it.", "Staff reviewer", "No retry token or provider call is generated.", "Reconciliation", "RECOVERABLE", "Retry is not a charge."],
        ["PRO · reconciliation", "PRO · PAYMENT", "Reconcile a fictional payment fact.", "A provider mismatch is held for staff reconciliation.", "Payment reviewer", "No webhook, receipt, refund or ledger exists.", "Pickup or delivery choice", "GATED", "PRO API capability remains internal/gated."],
        ["LITE · pickup ready", "LITE · PICKUP", "Pickup is the local fulfillment path.", "A ready-for-pickup state avoids delivery dependencies.", "Restaurant staff", "No address, pickup code or customer notification.", "Completion", "READY", "Ready means fixture state."],
        ["BASE · delivery pending", "BASE · DELIVERY", "Delivery is pending provider review.", "A quote/booking boundary is visible without a partner request.", "Restaurant staff and imagined provider", "No address, quote, driver or tracking URL.", "Provider failure", "PENDING", "Booking is not implied."],
        ["PRO · provider failure", "PRO · DELIVERY", "Provider failure needs recovery.", "The failure is held for retry or alternate fulfillment review.", "Delivery reviewer", "No provider account, callback or real retry.", "Reconciliation", "ATTENTION", "PRO integration remains gated."],
        ["Reconciled", "FULFILLMENT · RECOVERY", "Pickup/delivery facts are reconciled locally.", "The journey ends with an explicit reviewed state.", "Staff reviewer", "No delivery completion or payment settlement is real.", "Reset or choose another journey", "DONE", "Completion is only a local fixture."]
      ]
    },
    "order-desk": {
      title: "Order desk lifecycle and attention cues",
      states: [
        ["New", "ORDER DESK · NEW", "A new fictional order is visible.", "The desk shows a review queue item without an order record.", "Restaurant staff", "No customer identity, order ID or payment fact exists.", "Accepted", "ATTENTION", "Staff must review."],
        ["Accepted", "ORDER DESK · ACCEPTED", "Staff accepted the fictional order.", "Acceptance remains separate from payment and fulfillment.", "Restaurant staff", "No kitchen ticket or customer message is sent.", "Preparing", "LOCAL READY", "Acceptance is illustrative."],
        ["Preparing", "ORDER DESK · PREPARING", "The kitchen state is in progress.", "The desk keeps operational state visible.", "Restaurant staff", "No kitchen system, timing or inventory is connected.", "Ready", "LOCAL READY", "No SLA is implied."],
        ["Ready", "ORDER DESK · READY", "The order is ready for pickup or handoff.", "An attention cue identifies the next staff action.", "Restaurant staff", "No notification or delivery booking occurs.", "Completed", "ATTENTION", "Human confirmation remains required."],
        ["Completed", "ORDER DESK · COMPLETED", "The fictional order is completed.", "Completion can lead to reorder or feedback review in another journey.", "Restaurant staff", "No receipt, review or customer history is stored.", "Reset or choose another journey", "DONE", "Completed is local-only."]
      ]
    },
    "takeover": {
      title: "Automated → human takeover → automated",
      states: [
        ["Automated", "CONVERSATION · AUTOMATED", "Automation is the default fixture mode.", "A fictional conversation is shown as awaiting routine handling.", "Invented customer and assistant", "No message, channel, customer or assistant request exists.", "Requested", "LOCAL READY", "Automation is only a label."],
        ["Requested", "CONVERSATION · REQUESTED", "A human-help request is raised.", "The attention cue pauses conversational automation in the model.", "Invented customer", "No staff alert, message send or customer data exists.", "Active", "ATTENTION", "Claim is required."],
        ["Active", "CONVERSATION · HUMAN ACTIVE", "A fictional staff member has taken over.", "The handoff is explicit and reversible.", "Invented staff operator", "No staff identity, conversation or personal channel is used.", "Released", "HUMAN ACTIVE", "Human control is local."],
        ["Released", "CONVERSATION · HUMAN RELEASED", "Staff released the conversation.", "The state records a return path without sending anything.", "Invented staff operator", "No release event or message is emitted.", "Automated", "LOCAL READY", "Return is reviewable."],
        ["Automated again", "CONVERSATION · AUTOMATED", "Automation is available again in the fixture.", "The takeover loop is complete.", "Invented customer and assistant", "No live automation or channel resumes.", "Reset or choose another journey", "DONE", "Loop complete locally."]
      ]
    },
    "promo": {
      title: "Promo/combo LITE → BASE → PRO gates",
      states: [
        ["LITE · simple offer", "LITE · PROMO", "A simple invented offer is active.", "The fixture shows one basic condition and a visible validity window.", "Invented owner and customer", "No coupon, price, tax or eligibility is real.", "BASE combo review", "LOCAL READY", "LITE limit: one simple offer."],
        ["BASE · combo review", "BASE · COMBO", "A combo needs deterministic review.", "The combo composition and eligibility are visible before evaluation.", "Invented owner", "No redemption counter, cart mutation or commercial result.", "Expiry check", "REVIEW", "BASE limit: reviewable combo."],
        ["BASE · expired", "BASE · PROMO EXPIRY", "The fictional offer has expired.", "Expiry blocks application rather than silently changing the cart.", "Invented owner and customer", "No clock, coupon or historical order is consulted.", "PRO capability gate", "ATTENTION", "Expired is explicit."],
        ["PRO · gated capability", "PRO · PROMO", "Advanced promotion behavior is gated.", "The screen names the capability without exposing an API or entitlement.", "Internal product reviewer", "No API, pricing, entitlement or provider integration.", "Reset or choose another journey", "GATED", "PRO remains internal/gated."]
      ]
    },
    "notifications-recovery": {
      title: "Notifications, reorder, cancel/refund and recovery",
      states: [
        ["Order-ready notification", "NOTIFICATION · READY", "A local notification preview is eligible.", "The message is rendered as a fixture, not sent.", "Notification reviewer", "No phone, template, provider or consent record.", "Reorder preview", "LOCAL READY", "Preview only."],
        ["Reorder preview", "CUSTOMER · REORDER", "A past fictional order becomes a new-cart preview.", "Current menu context is used instead of cloning old price truth.", "Invented customer", "No order history, loyalty or customer identity exists.", "Cancel request", "REVIEW", "Reorder needs review."],
        ["Cancel request", "ORDER · CANCEL", "A cancellation request is waiting for staff.", "Staff ownership is visible before any financial change.", "Invented customer and staff", "No cancellation, order or refund is created.", "Refund review", "ATTENTION", "Customer request is not completion."],
        ["Refund review", "PAYMENT · REFUND", "A fictional refund amount needs agreement.", "The screen distinguishes pending, rejected and reconciled outcomes.", "Staff reviewer", "No payment, invoice, amount or refund provider exists.", "Provider failure", "GATED", "Refund remains manual/reviewable."],
        ["Provider failure", "RECOVERY · PROVIDER", "A notification or payment provider failed.", "The flow holds the failure for safe retry or manual correction.", "Internal reviewer", "No provider callback, retry or outbound message.", "Disconnected channel", "ATTENTION", "No success-shaped fallback."],
        ["Disconnected channel", "RECOVERY · CHANNEL", "The channel is disconnected.", "Customer-facing actions are visibly paused.", "Admin reviewer", "No WhatsApp connection, credential or reconnect action.", "Recovery review", "BLOCKED", "Channel recovery is gated."],
        ["Recovery review", "RECOVERY · REVIEW", "Admin/staff review the next safe action.", "The recovery state closes the loop without hiding the failure.", "Admin and staff reviewer", "No incident record, customer contact or provider mutation.", "Reset or choose another journey", "DONE", "Recovery is local-only."]
      ]
    },
    analytics: {
      title: "Admin funnel and analytics states",
      states: [
        ["Funnel empty", "ADMIN · FUNNEL", "No synthetic activity is present.", "An empty funnel is displayed without invented performance claims.", "Invented admin reviewer", "No tracker, customer cohort or metric source exists.", "Funnel activity", "LOCAL READY", "Empty is a valid state."],
        ["Funnel activity", "ADMIN · FUNNEL", "Synthetic discovery-to-review steps are visible.", "The funnel uses fixture counts only to demonstrate shape.", "Invented admin reviewer", "No analytics event is sent or retained.", "Attention queue", "REVIEW", "Counts are not evidence."],
        ["Attention queue", "ADMIN · OPERATIONS", "Open exceptions are grouped for review.", "Payment, channel and order cues are visible by scope.", "Invented owner/admin", "No staff queue, customer data or action is performed.", "Scoped analytics", "ATTENTION", "Review is permission-gated."],
        ["Scoped analytics", "ADMIN · ANALYTICS", "Branch-scoped summaries are available.", "The state demonstrates comparison and recovery context.", "Invented owner/admin", "No exports, sales, retention or customer metric is real.", "Reconciliation", "GATED", "No public claim."],
        ["Reconciliation", "ADMIN · RECOVERY", "Analytics and operational state are reconciled locally.", "The journey ends with an explicit unknown/open gate where evidence is absent.", "Invented admin reviewer", "No source system, dashboard or audit record exists.", "Reset or choose another journey", "DONE", "Reconciled means reviewed fixture."]
      ]
    }
  };

  const coverageFlows = [
    {
      id: "onboarding",
      kicker: "FLOW 01 · RESTAURANT ONBOARDING",
      title: "Connect an invented restaurant workspace.",
      summary: "A controlled setup path establishes a fictional tenant and branch without creating an account or connecting a channel.",
      actor: "Founder/operator in a controlled setup review.",
      precondition: "A fictional restaurant name and branch fixture exist; no identity or channel is connected.",
      happy: "Review tenant → branch → channel placeholders, then mark the setup as ready for internal demo.",
      alternate: "A second branch can remain a draft; an incomplete channel check keeps the workspace in review.",
      transition: "DISCOVERED → AUTHORIZING → CONFIGURING → READY (illustrative).",
      boundary: "Tenant/branch fixtures only; no credentials, WhatsApp identifiers, customer records or secrets.",
      acceptance: "The reviewer can explain which state is shown and confirm that no external connection occurred.",
      implementation: "Mapped in the internal panel; no production onboarding implementation.",
      citation: "nekurama.chatgpt.md:L23347, turn 362, UUID b9268887-30dc-4aae-8605-fbd2dfe383ab; tenant and onboarding discussion."
    },
    {
      id: "owner-setup",
      kicker: "FLOW 02 · OWNER SETUP",
      title: "Represent an owner as scoped membership.",
      summary: "The demo separates a person’s identity from their relationship to an invented restaurant group.",
      actor: "Invented owner/operator.",
      precondition: "A fictional identity and restaurant-group fixture are present in the review map.",
      happy: "Show owner membership, branch scope and a provisional capability without authenticating.",
      alternate: "A multi-branch owner sees a narrower branch scope before an explicit scope change.",
      transition: "IDENTITY_ESTABLISHED → MEMBERSHIP_REVIEW → SCOPED_ACCESS (illustrative).",
      boundary: "No login, token, personal data or real access decision; membership is display-only.",
      acceptance: "Owner, tenant and branch are visibly distinct concepts in the selected state.",
      implementation: "Mapped in the internal panel; no authentication or authorization runtime.",
      citation: "nekurama.chatgpt.md:L23347, turn 362, UUID b9268887-30dc-4aae-8605-fbd2dfe383ab; owner identity and tenant flow."
    },
    {
      id: "staff-setup",
      kicker: "FLOW 03 · STAFF SETUP",
      title: "Add a fictional operator with a narrow scope.",
      summary: "A staff setup state demonstrates role, permission and branch boundaries without creating staff accounts.",
      actor: "Invented owner or manager.",
      precondition: "An invented restaurant group and branch scope are already shown.",
      happy: "Choose an operator role, assign one branch and preview the resulting review boundary.",
      alternate: "A missing branch or unclear permission leaves the invitation in a review state.",
      transition: "INVITED → SCOPE_REVIEW → READY_FOR_APPROVAL (illustrative).",
      boundary: "Role labels and scopes are synthetic; no email, phone, credential or invitation is sent.",
      acceptance: "A reviewer can identify the staff scope and the actions deliberately excluded.",
      implementation: "Mapped in the internal panel; no staff directory, RBAC service or invite endpoint.",
      citation: "nekurama.chatgpt.md:L42484, turn 682, UUID 81bd047d-e419-4355-b34a-764975ab7c79; owner/manager/staff personas."
    },
    {
      id: "discovery",
      kicker: "FLOW 04 · CUSTOMER DISCOVERY",
      title: "Browse an invented restaurant before ordering.",
      summary: "Discovery is a readable information state; a view is analytics context, not a committed business transaction.",
      actor: "Invented customer.",
      precondition: "A fictional restaurant card and branch context are available locally.",
      happy: "Open the restaurant summary, inspect hours and choose to view the menu.",
      alternate: "Unavailable hours or a missing branch returns a neutral review state instead of a promise.",
      transition: "DISCOVERED → RESTAURANT_VIEWED → MENU_REQUESTED (illustrative).",
      boundary: "No location, identity, customer profile or tracking event leaves the page.",
      acceptance: "The demo distinguishes discovery telemetry from durable order state.",
      implementation: "Existing four-scene mock plus coverage state; no search or analytics service.",
      citation: "nekurama.chatgpt.md:L22368, turn 341, UUID 128e9fdc-9032-4a5d-b627-4f0118fc3ba3; RestaurantViewed as analytics."
    },
    {
      id: "menu",
      kicker: "FLOW 05 · MENU",
      title: "Review a versioned, fictional menu.",
      summary: "The menu state shows reviewed context, availability and version lineage without publishing a real catalog.",
      actor: "Invented customer; restaurant reviewer for the source state.",
      precondition: "A synthetic menu revision contains one item, one variant and a visible availability flag.",
      happy: "Inspect the current revision, select an available item and carry its menu context forward.",
      alternate: "A stale revision or unavailable item requires review rather than silent substitution.",
      transition: "CANDIDATE → REVIEW → PUBLISHED (illustrative); selection carries menuVersion.",
      boundary: "No uploaded menu, item inventory, allergen claim, image, restaurant record or customer preference.",
      acceptance: "The reviewer can see the difference between menu context and committed order truth.",
      implementation: "Existing menu scene and coverage record; no catalog ingestion or publish path.",
      citation: "nekurama.chatgpt.md:L8786, turn 138, UUID 9f8c36ea-dfaf-4b9b-b02e-793ea4b4d6ba; menu ingestion pipeline."
    },
    {
      id: "order",
      kicker: "FLOW 06 · CART AND ORDER",
      title: "Turn a fictional selection into a reviewable order.",
      summary: "Cart intent becomes an order candidate only after local validation; staff review remains authoritative.",
      actor: "Invented customer, then restaurant staff.",
      precondition: "A synthetic menu selection and menu version are available.",
      happy: "Create cart → validate current context → draft order → show the next review action.",
      alternate: "A changed price, unavailable item or stale projection pauses commitment for revalidation.",
      transition: "CART_OPEN → CART_REVIEW → ORDER_DRAFT → PAYMENT_PENDING (illustrative).",
      boundary: "No order ID, address, customer profile, invoice, endpoint or durable event is created.",
      acceptance: "The state clearly says draft/review and never implies that an order was submitted.",
      implementation: "Existing mock order scene plus coverage state; no ordering service.",
      citation: "nekurama.chatgpt.md:L22368, turn 341, UUID 128e9fdc-9032-4a5d-b627-4f0118fc3ba3; menuVersion, cart and order snapshot."
    },
    {
      id: "payment",
      kicker: "FLOW 07 · PAYMENT",
      title: "Keep payment facts separate from order acceptance.",
      summary: "The demo shows a pending payment boundary without opening a checkout, charging a method or recording a result.",
      actor: "Invented customer; restaurant staff for manual review.",
      precondition: "A fictional order candidate exists in a payment-pending state.",
      happy: "Show payment initiation as pending, then return control to order review.",
      alternate: "Provider confirmation, manual confirmation or failure remains a separate fact requiring review.",
      transition: "PAYMENT_PENDING → PAID / FAILED / REFUND_REVIEW (illustrative).",
      boundary: "No payment provider, card, UPI, bank, amount, receipt, refund or webhook data.",
      acceptance: "The panel never equates payment success with restaurant acceptance.",
      implementation: "Mapped only; no payment UI, provider integration or payment state engine.",
      citation: "nekurama.chatgpt.md:L22692, turn 344, UUID 5ec0497b-76d4-4977-bc62-179f63f51edc; payment initiation/completion."
    },
    {
      id: "fulfillment",
      kicker: "FLOW 08 · PICKUP AND DELIVERY",
      title: "Separate fulfillment choice from order truth.",
      summary: "Pickup and delivery are shown as fulfillment alternatives with staff/provider review points, not as a live delivery flow.",
      actor: "Invented customer, restaurant staff and an imagined provider.",
      precondition: "A fictional accepted-order state and a fulfillment choice are available.",
      happy: "Choose pickup or delivery, show the next operational state and expose a reviewable tracking placeholder.",
      alternate: "An expired quote, provider failure or missing pickup verification holds the state for recovery.",
      transition: "ACCEPTED → PREPARING → READY → PICKUP_COMPLETE or DELIVERY_PENDING (illustrative).",
      boundary: "No address, driver, quote, tracking URL, partner domain, location or delivery request exists.",
      acceptance: "The reviewer can name the owner of each state and see that booking is not implied.",
      implementation: "Coverage prototype only; no fulfillment or delivery service.",
      citation: "nekurama.chatgpt.md:L23084, turn 356, UUID 3e8555a9-1abd-4aed-9f41-1f9e877531fc; pickup, quote, booking and tracking."
    },
    {
      id: "promo",
      kicker: "FLOW 09 · PROMO AND COMBO",
      title: "Evaluate a fictional offer without changing history.",
      summary: "A promo/combo state demonstrates composable commercial context and a snapshot boundary.",
      actor: "Restaurant owner configuring an invented offer; customer reviewing it.",
      precondition: "A synthetic item, date window and offer rule are present.",
      happy: "Apply the eligible combo to the current cart and show the resulting draft calculation.",
      alternate: "An expired, ineligible or conflicting offer remains visible as not applied.",
      transition: "OFFER_DRAFT → OFFER_ACTIVE → EVALUATED or NOT_APPLIED (illustrative).",
      boundary: "No real price, tax, coupon, customer eligibility, redemption counter or commercial promise.",
      acceptance: "The selected state says whether the offer was applied and preserves the invented source context.",
      implementation: "Mapped in the internal panel; no pricing, promotion or tax engine.",
      citation: "nekurama.chatgpt.md:L9374, turn 145, UUID 4c5f1fee-fb57-4468-a341-08a6f86bad0c; offers, combos and progressive menu schema."
    },
    {
      id: "takeover",
      kicker: "FLOW 10 · HUMAN TAKEOVER",
      title: "Pause automation when a person must decide.",
      summary: "Human takeover is a first-class conversation mode; it does not imply that staff or support has actually received a message.",
      actor: "Invented customer and restaurant staff.",
      precondition: "A fictional conversation contains an ambiguity or explicit help request.",
      happy: "Request → claim → human active → resolve → release back to automation.",
      alternate: "No staff claim, conflicting claim or unresolved exception keeps the conversation human-requested.",
      transition: "AUTOMATED → HUMAN_REQUESTED → HUMAN_ACTIVE → HUMAN_RELEASED → AUTOMATED.",
      boundary: "No personal WhatsApp, staff identity, message, customer conversation or outbound send.",
      acceptance: "The reviewer sees automation paused for the conversation while other state work remains separate.",
      implementation: "Existing takeover scene plus coverage state; no chat service or staff console.",
      citation: "nekurama.chatgpt.md:L23347, turn 362, UUID b9268887-30dc-4aae-8605-fbd2dfe383ab; conversation-wide takeover."
    },
    {
      id: "notifications",
      kicker: "FLOW 11 · NOTIFICATIONS",
      title: "Route an invented event through a generic channel boundary.",
      summary: "Notification states show eligibility and channel choice without sending a WhatsApp, email or browser message.",
      actor: "Notification policy reviewer and an invented customer.",
      precondition: "A synthetic domain event such as OrderReady exists in the map.",
      happy: "Event → notification policy → approved fixture message → local preview.",
      alternate: "Outside a messaging window or missing consent selects a held/template-review state.",
      transition: "EVENTED → ELIGIBILITY_REVIEW → QUEUED → PREVIEWED (illustrative).",
      boundary: "No phone number, template, provider token, opt-in record, message delivery or notification log.",
      acceptance: "The preview identifies the message as local and names the reason a send would be gated.",
      implementation: "Mapped only; no notification service or channel adapter.",
      citation: "nekurama.chatgpt.md:L23084, turn 356, UUID 3e8555a9-1abd-4aed-9f41-1f9e877531fc; generic Notification service."
    },
    {
      id: "reorder",
      kicker: "FLOW 12 · FEEDBACK AND REORDER",
      title: "Recreate intent from an invented historical order.",
      summary: "Feedback and repeat purchase are linked to a synthetic completed order, but the old order is never cloned.",
      actor: "Invented customer; restaurant staff for moderation.",
      precondition: "A fictional completed order and current menu revision are available.",
      happy: "Invite feedback → mark it local-only → rebuild a new cart from current menu context for review.",
      alternate: "Deleted item, changed price or unavailable modifier requires a choice rather than substitution.",
      transition: "COMPLETED → FEEDBACK_REVIEW → REORDER_CART → ORDER_REVIEW (illustrative).",
      boundary: "No review publication, customer photo, identity, loyalty record, historical price or repeat order.",
      acceptance: "The UI makes current price/availability and explicit review visible before any new order state.",
      implementation: "Coverage prototype only; no feedback, review or reorder service.",
      citation: "nekurama.chatgpt.md:L23347, turn 362, UUID b9268887-30dc-4aae-8605-fbd2dfe383ab; verified feedback and reorder."
    },
    {
      id: "exceptions",
      kicker: "FLOW 13 · EXCEPTIONS AND RECOVERY",
      title: "Stop, explain and recover instead of guessing.",
      summary: "Exception states expose human review, retry and compensation boundaries for invented failures.",
      actor: "Restaurant staff or an internal reviewer.",
      precondition: "A synthetic flow has a stale menu, sold-out item, payment mismatch or provider timeout.",
      happy: "Record the reason → choose a bounded action → retry safely or create a correction state.",
      alternate: "Repeated failure moves to held/manual review; no silent substitution or invented success is shown.",
      transition: "ACTIVE → BLOCKED → HUMAN_REVIEW → RETRY or COMPENSATE or CLOSED (illustrative).",
      boundary: "No real refund, invoice, provider callback, secret, log payload or customer contact.",
      acceptance: "Every error state names the next owner and does not present a success-shaped fallback.",
      implementation: "Mapped in the internal panel; no workflow engine, retry worker or reconciliation runtime.",
      citation: "nekurama.chatgpt.md:L12325, turn 190, UUID 15581a74-d6e9-49d7-86ff-4aafb31f1922; generalized state/workflow engine and recovery."
    },
    {
      id: "admin",
      kicker: "FLOW 14 · ADMIN AND ANALYTICS",
      title: "Use web for review, comparison and recovery context.",
      summary: "The internal map keeps dense administration and analytics separate from the conversational action surface.",
      actor: "Invented owner/admin reviewer.",
      precondition: "Synthetic state summaries and event counts are available as local fixtures.",
      happy: "Inspect branch scope, state health, exception queue and funnel placeholders without changing data.",
      alternate: "A missing permission or stale projection shows a gated/unknown state instead of fabricated metrics.",
      transition: "EVENTS → PROJECTION → REVIEW → ACTION_REQUIRES_SCOPE (illustrative).",
      boundary: "No analytics tracker, customer cohort, sales number, staff record, export or admin credential.",
      acceptance: "The reviewer can distinguish a planning fixture from an observed metric or live dashboard.",
      implementation: "Coverage panel only; no admin app, analytics store or tracking request.",
      citation: "nekurama.chatgpt.md:L27846, turn 451, UUID f71fa2df-8093-4a5f-a692-9ad4ba465008; web as configuration, analytics and recovery surface."
    }
  ];

  const state = { journeyId: "admin-onboarding", journeyIndex: 0 };
  const elements = {
    journeyScenario: document.querySelector("#journey-scenario"),
    journeyStateTabs: document.querySelector("#journey-state-tabs"),
    journeyScreen: document.querySelector("#journey-screen"),
    journeyNext: document.querySelector("#journey-next"),
    journeyBack: document.querySelector("#journey-back"),
    journeyReset: document.querySelector("#journey-reset"),
    coverageTabs: [...document.querySelectorAll(".coverage-tab")],
    coveragePanel: document.querySelector("#coverage-panel")
  };

  const setText = (selector, value) => {
    const element = document.querySelector(selector);
    if (element) element.textContent = value;
  };

  function currentJourney() {
    return journeyDefinitions[state.journeyId] || journeyDefinitions["admin-onboarding"];
  }

  function selectJourneyState(index) {
    const journey = currentJourney();
    state.journeyIndex = Math.min(Math.max(index, 0), journey.states.length - 1);
    renderJourney();
  }

  function renderJourney() {
    const journey = currentJourney();
    const current = journey.states[state.journeyIndex];
    const [label, kicker, title, summary, actor, boundary, next, status, attention] = current;
    elements.journeyStateTabs.replaceChildren();
    journey.states.forEach((journeyState, index) => {
      const tab = document.createElement("button");
      tab.type = "button";
      tab.className = "journey-state-tab";
      tab.textContent = `${String(index + 1).padStart(2, "0")} · ${journeyState[0]}`;
      tab.setAttribute("role", "tab");
      tab.setAttribute("aria-controls", "journey-screen");
      tab.setAttribute("aria-selected", String(index === state.journeyIndex));
      tab.tabIndex = index === state.journeyIndex ? 0 : -1;
      tab.addEventListener("click", () => selectJourneyState(index));
      tab.addEventListener("keydown", (event) => {
        if (!["ArrowDown", "ArrowUp", "Home", "End"].includes(event.key)) return;
        event.preventDefault();
        const nextIndex = event.key === "Home"
          ? 0
          : event.key === "End"
            ? journey.states.length - 1
            : (index + (event.key === "ArrowDown" ? 1 : -1) + journey.states.length) % journey.states.length;
        selectJourneyState(nextIndex);
        elements.journeyStateTabs.children[nextIndex].focus();
      });
      elements.journeyStateTabs.append(tab);
    });
    setText("#journey-kicker", kicker);
    setText("#journey-title", title);
    setText("#journey-summary", summary);
    setText("#journey-actor", actor);
    setText("#journey-boundary", boundary);
    setText("#journey-next-state", next);
    setText("#journey-attention-text", attention);
    setText("#journey-status", status);
    elements.journeyScreen.setAttribute("aria-label", `${label}: ${title}`);
    elements.journeyScreen.classList.toggle("is-attention", status === "ATTENTION" || status === "BLOCKED" || status === "FAILED");
    elements.journeyScreen.classList.toggle("is-gated", status === "GATED");
    elements.journeyBack.disabled = state.journeyIndex === 0;
    elements.journeyNext.disabled = state.journeyIndex === journey.states.length - 1;
    elements.journeyNext.textContent = state.journeyIndex === journey.states.length - 1 ? "Journey complete" : "Advance local state →";
  }

  function renderCoverage(flowId, announce = true) {
    const flowIndex = coverageFlows.findIndex((flow) => flow.id === flowId);
    const flow = coverageFlows[flowIndex >= 0 ? flowIndex : 0];
    elements.coverageTabs.forEach((button) => {
      const isActive = button.dataset.flow === flow.id;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-selected", String(isActive));
      button.tabIndex = isActive ? 0 : -1;
    });
    setText("#coverage-kicker", flow.kicker);
    setText("#coverage-title", flow.title);
    setText("#coverage-summary", flow.summary);
    setText("#coverage-actor", flow.actor);
    setText("#coverage-precondition", flow.precondition);
    setText("#coverage-happy", flow.happy);
    setText("#coverage-alternate", flow.alternate);
    setText("#coverage-transition", flow.transition);
    setText("#coverage-boundary", flow.boundary);
    setText("#coverage-acceptance", flow.acceptance);
    setText("#coverage-implementation", flow.implementation);
    setText("#coverage-citation", flow.citation);
    setText("#coverage-status", flow.implementation.startsWith("Mapped") ? "Prototype mapped" : "Internal review");
    if (announce && elements.coveragePanel) {
      elements.coveragePanel.setAttribute("aria-label", `${flow.kicker}: ${flow.title}`);
    }
  }

  elements.journeyScenario.addEventListener("change", () => {
    state.journeyId = elements.journeyScenario.value;
    state.journeyIndex = 0;
    renderJourney();
  });

  elements.journeyNext.addEventListener("click", () => selectJourneyState(state.journeyIndex + 1));
  elements.journeyBack.addEventListener("click", () => selectJourneyState(state.journeyIndex - 1));
  elements.journeyReset.addEventListener("click", () => {
    state.journeyIndex = 0;
    renderJourney();
  });

  elements.coverageTabs.forEach((button, index) => {
    button.addEventListener("click", () => renderCoverage(button.dataset.flow));
    button.addEventListener("keydown", (event) => {
      if (!["ArrowDown", "ArrowUp", "Home", "End"].includes(event.key)) return;
      event.preventDefault();
      const nextIndex = event.key === "Home"
        ? 0
        : event.key === "End"
          ? elements.coverageTabs.length - 1
          : (index + (event.key === "ArrowDown" ? 1 : -1) + elements.coverageTabs.length) % elements.coverageTabs.length;
      const nextTab = elements.coverageTabs[nextIndex];
      nextTab.focus();
      renderCoverage(nextTab.dataset.flow);
    });
  });

  renderJourney();
  renderCoverage("onboarding", false);
})();
