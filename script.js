(() => {
  "use strict";

  const families = [
    {
      name: "ADMIN ONBOARDING",
      title: "Invite an invented owner without creating a tenant.",
      actor: "Invented platform admin",
      boundary: "Restaurant, branch and owner labels are display-only; no identity, phone number, invite or tenant record exists.",
      states: [
        ["INVITED", "An invented restaurant invite is staged for review.", "Confirm the owner start path.", "AWAITING OWNER SETUP"],
        ["AWAITING OWNER SETUP", "The owner has not entered setup in this fixture.", "Keep the invitation visibly separate from readiness.", "OWNER SETUP"],
        ["OWNER SETUP", "Owner setup is ready to be inspected.", "Review scope before any operational state.", "BLOCKED / EXPIRED"],
        ["BLOCKED / EXPIRED", "The invitation is held so recovery is explicit.", "Show the reason and a bounded re-invite decision.", "INVITED"],
      ],
    },
    {
      name: "OWNER MENU SETUP",
      title: "Move a menu artifact from invite to publish review.",
      actor: "Invented restaurant owner",
      boundary: "Image, PDF and text are labels for fixture types only; no picker, upload, extraction service or catalog record exists.",
      states: [
        ["OWNER INVITED", "An owner welcome is visible before any setup work.", "Start setup only after the invitation boundary is understood.", "IMAGE / PDF / TEXT READY"],
        ["IMAGE / PDF / TEXT READY", "A synthetic menu source is queued as an example artifact.", "Inspect the source type; nothing was uploaded.", "EXTRACTING"],
        ["EXTRACTING", "Extraction is represented as an advisory local state.", "Wait for a candidate, never treat extraction as truth.", "REVIEW CANDIDATE"],
        ["REVIEW CANDIDATE", "Items and variants are ready for owner review.", "Check names, prices and availability before correction.", "CORRECTION REQUIRED"],
        ["CORRECTION REQUIRED", "One invented item needs a human correction.", "Edit the candidate conceptually; AI is not authoritative.", "PUBLISH HELD"],
        ["PUBLISH HELD", "The corrected menu remains held until explicit approval.", "Confirm version and owner decision before publish.", "PUBLISHED REVISION"],
        ["PUBLISHED REVISION", "A reviewed revision is shown as published in the fixture.", "Keep the revision lineage visible for later order review.", "OWNER INVITED"],
      ],
    },
    {
      name: "STAFF PERMISSIONS",
      title: "Show role, branch scope and handoff without an account.",
      actor: "Invented owner or manager",
      boundary: "Role, permission, branch and handoff labels are synthetic; no staff identity, credential, invite or authorization decision exists.",
      states: [
        ["INVITE PENDING", "A fictional operator is waiting for owner review.", "Confirm the intended role and branch.", "ROLE REVIEW"],
        ["ROLE REVIEW", "The fixture proposes a narrow operator role.", "Separate identity, membership, role and permission.", "BRANCH SCOPE"],
        ["BRANCH SCOPE", "One invented branch is selected for the operator.", "Reject actions outside the displayed scope.", "HANDOFF READY"],
        ["HANDOFF READY", "The operator can be handed a review queue in the mock.", "Keep takeover and permission boundaries distinct.", "REVOKED"],
        ["REVOKED", "Access is shown as revoked, not silently retained.", "Record a human review decision before any re-invite.", "INVITE PENDING"],
      ],
    },
    {
      name: "CUSTOMER DISCOVERY",
      title: "Browse a fictional restaurant before any order intent.",
      actor: "Invented customer fixture",
      boundary: "No location, profile, address, customer record, tracking event or discovery service is used.",
      states: [
        ["DISCOVERED", "A fictional restaurant card is visible.", "Keep discovery separate from a committed order.", "MENU VIEW"],
        ["MENU VIEW", "A reviewed menu context is available for inspection.", "Check menu version before selecting an item.", "ITEM DETAIL"],
        ["ITEM DETAIL", "One invented item is shown with an available variant.", "Review modifiers without claiming inventory.", "CART STARTED"],
        ["CART STARTED", "A local cart intent contains the selected variant.", "Revalidate menu context before order review.", "ORDER REVIEW"],
        ["ORDER REVIEW", "The customer can inspect a draft, not a submitted order.", "Human or staff review remains the next decision.", "DISCOVERED"],
      ],
    },
    {
      name: "MENU AND VARIANTS",
      title: "Keep menu version, item and variant context visible.",
      actor: "Invented owner and customer fixtures",
      boundary: "No menu image, PDF, text upload, item inventory, allergen record or publication endpoint exists.",
      states: [
        ["SOURCE RECEIVED", "A synthetic source is identified as image, PDF or text.", "Confirm source type without opening a file control.", "EXTRACT CANDIDATE"],
        ["EXTRACT CANDIDATE", "The advisory candidate contains one invented item.", "Compare candidate text with the source concept.", "ITEM REVIEW"],
        ["ITEM REVIEW", "Item name, description and availability are under review.", "Do not infer a customer-facing promise.", "VARIANT REVIEW"],
        ["VARIANT REVIEW", "A size and spice variant are shown as invented options.", "Keep variant selection tied to a menu version.", "CORRECTION"],
        ["CORRECTION", "A correction is required before publish.", "Return to owner review rather than silently fixing.", "PUBLISHED"],
        ["PUBLISHED", "The reviewed revision is the context for a draft cart.", "Carry menu version into order review.", "SOURCE RECEIVED"],
      ],
    },
    {
      name: "CART AND ORDER REVIEW",
      title: "Turn a fictional selection into a reviewable draft.",
      actor: "Invented customer, then restaurant staff",
      boundary: "No order ID, address, invoice, customer profile, endpoint or durable event is created.",
      states: [
        ["CART OPEN", "A selected variant is held in local cart intent.", "Check current menu version and availability.", "CART REVIEW"],
        ["CART REVIEW", "Quantity and variant are reviewable before commitment.", "Show changes instead of silently substituting.", "ORDER DRAFT"],
        ["ORDER DRAFT", "The order candidate is explicitly not submitted.", "Send the draft to staff review in the imagined flow.", "PAYMENT PENDING"],
        ["PAYMENT PENDING", "Payment is a separate pending fact, not acceptance.", "Keep order truth and payment truth separate.", "ORDER DRAFT"],
      ],
    },
    {
      name: "PAYMENT RECOVERY",
      title: "Keep tiered payment states separate from order acceptance.",
      actor: "Invented customer and staff reviewer",
      boundary: "LITE, BASE and PRO are internal labels; no card, UPI, bank, amount, receipt, provider or refund exists.",
      states: [
        ["LITE / NOT ENABLED", "Information and handoff remain available; payment is out of scope.", "Escalate to a human rather than implying checkout.", "BASE / PAYMENT PENDING"],
        ["BASE / PAYMENT PENDING", "A fictional payment attempt waits for review.", "Do not accept the order from a pending fact.", "PROVIDER FAILURE"],
        ["PROVIDER FAILURE", "The imagined provider did not confirm the fixture attempt.", "Expose failure and a safe retry path.", "RETRYING"],
        ["RETRYING", "A bounded retry is shown without a charge.", "Wait for reconciliation rather than duplicate action.", "RECONCILING"],
        ["RECONCILING", "Order and payment facts are compared manually.", "Keep a mismatch visible until a human resolves it.", "BASE / PAYMENT PENDING"],
      ],
    },
    {
      name: "PICKUP AND DELIVERY",
      title: "Separate fulfillment choice from payment and order truth.",
      actor: "Invented customer, staff and imagined provider",
      boundary: "No address, driver, quote, tracking URL, location, delivery request or provider callback exists.",
      states: [
        ["PICKUP PENDING", "A fictional pickup choice awaits staff confirmation.", "Keep pickup verification visible.", "READY FOR PICKUP"],
        ["READY FOR PICKUP", "The order is ready in the local fixture.", "Show collection review without claiming fulfillment.", "DELIVERY PENDING"],
        ["DELIVERY PENDING", "Delivery is shown as a gated provider-dependent path.", "No address or booking is available here.", "PROVIDER FAILURE"],
        ["PROVIDER FAILURE", "The imagined delivery provider failed or timed out.", "Hold the order and identify the recovery owner.", "RETRY / MANUAL PICKUP"],
        ["RETRY / MANUAL PICKUP", "A retry or pickup fallback is available for review.", "Reconcile provider state before any completion.", "PICKUP PENDING"],
      ],
    },
    {
      name: "PROMOTIONS AND COMBOS",
      title: "Evaluate an invented offer with tier limits and expiry.",
      actor: "Invented owner and customer fixtures",
      boundary: "No coupon, price, tax, eligibility, redemption counter or commercial promise is calculated.",
      states: [
        ["LITE / EXCLUDED", "Promotions and combos are visibly outside this internal tier concept.", "Do not imply an offer can be applied.", "BASE / 3 PER DAY"],
        ["BASE / 3 PER DAY", "A bounded combo allowance is shown as a policy fixture.", "Keep the limit and one-day window visible.", "PRO / GATED"],
        ["PRO / GATED", "Advanced offer behavior remains gated for review.", "Do not turn a tier label into availability.", "OFFER ACTIVE"],
        ["OFFER ACTIVE", "An invented combo matches the current fixture cart.", "Show the snapshot used for evaluation.", "EXPIRED"],
        ["EXPIRED", "The offer window has ended and is not applied.", "Never silently substitute an expired discount.", "NOT APPLIED"],
        ["NOT APPLIED", "The cart remains unchanged after an ineligible offer.", "Explain the reason and return to review.", "LITE / EXCLUDED"],
      ],
    },
    {
      name: "ORDER DESK CUES",
      title: "Make order states and attention cues readable.",
      actor: "Invented restaurant operator",
      boundary: "The desk is a visual fixture; no order queue, kitchen printer, notification or staff account exists.",
      states: [
        ["NEW / ATTENTION", "A new invented order needs a human review cue.", "Confirm menu version, fulfillment and payment facts.", "ACCEPTED"],
        ["ACCEPTED", "Staff acceptance is shown as a local state only.", "Keep payment and fulfillment facts separate.", "PREPARING"],
        ["PREPARING", "The kitchen work state is visible for the fixture.", "Surface exceptions rather than hiding them.", "READY"],
        ["READY / ATTENTION", "A ready cue asks staff to verify pickup or delivery path.", "Do not claim a customer notification was sent.", "COMPLETED"],
        ["COMPLETED", "Completion is shown only as an invented terminal state.", "Offer reconciliation and feedback review.", "NEW / ATTENTION"],
      ],
    },
    {
      name: "HUMAN TAKEOVER",
      title: "Pause automation while a person decides.",
      actor: "Invented customer and restaurant staff",
      boundary: "No personal channel, staff identity, conversation, outbound message or takeover service exists.",
      states: [
        ["AUTOMATED", "The invented conversation starts in an assisted mode.", "Escalate ambiguity instead of guessing.", "HUMAN REQUESTED"],
        ["HUMAN REQUESTED", "A visible cue asks for a person to review.", "Keep the request pending until claimed.", "HUMAN ACTIVE"],
        ["HUMAN ACTIVE", "A fictional operator owns the review moment.", "Order and payment authority remain separately controlled.", "RESOLVED"],
        ["RESOLVED", "The human correction is complete in the fixture.", "Record the decision before release.", "HUMAN RELEASED"],
        ["HUMAN RELEASED", "The conversation can return to the imagined assistant.", "Keep the handoff auditable and reversible.", "AUTOMATED"],
      ],
    },
    {
      name: "NOTIFICATIONS AND REORDER",
      title: "Preview recovery-aware customer care without sending.",
      actor: "Invented notification reviewer and customer fixture",
      boundary: "No phone, template, opt-in, message delivery, review publication or reorder record exists.",
      states: [
        ["NOTIFICATION QUEUED", "An invented OrderReady event is waiting for policy review.", "Confirm consent and channel eligibility conceptually.", "DISCONNECTED CHANNEL"],
        ["DISCONNECTED CHANNEL", "The imagined channel is unavailable.", "Hold the notification and offer recovery review.", "PROVIDER FAILURE"],
        ["PROVIDER FAILURE", "A notification provider failure is explicit.", "Retry only once the channel boundary is understood.", "RETRY PREVIEW"],
        ["RETRY PREVIEW", "A local retry preview is available; nothing is sent.", "Reconcile delivery state before showing success.", "REORDER REVIEW"],
        ["REORDER REVIEW", "A completed fixture can rebuild a new cart from the current menu.", "Recheck variant, availability and current context.", "CANCEL / REFUND REVIEW"],
        ["CANCEL / REFUND REVIEW", "Cancellation and refund are held for human correction.", "Never imply a refund or cancellation was executed.", "NOTIFICATION QUEUED"],
      ],
    },
    {
      name: "EXCEPTIONS AND RECOVERY",
      title: "Stop, explain and recover instead of guessing.",
      actor: "Invented staff or internal reviewer",
      boundary: "No refund, invoice, provider callback, secret, log payload or customer contact is present.",
      states: [
        ["EXTRACTION CORRECTION", "An extracted menu candidate needs a human correction.", "Return to review and preserve the source boundary.", "ORDER MISMATCH"],
        ["ORDER MISMATCH", "A stale item or variant prevents safe progression.", "Hold the draft and ask for revalidation.", "PROVIDER FAILURE"],
        ["PROVIDER FAILURE", "An imagined provider failed or disconnected.", "Name the retry and reconciliation owner.", "RETRY"],
        ["RETRY", "A bounded retry is available without duplicate side effects.", "Do not show success until facts reconcile.", "RECONCILIATION"],
        ["RECONCILIATION", "Conflicting fixture facts are compared explicitly.", "Close only after a human correction decision.", "HELD / MANUAL REVIEW"],
        ["HELD / MANUAL REVIEW", "The safe outcome is a visible hold, not a fallback success.", "Return to the relevant family for review.", "EXTRACTION CORRECTION"],
      ],
    },
    {
      name: "ADMIN FUNNEL AND ANALYTICS",
      title: "Review funnel and analytics fixtures without tracking.",
      actor: "Invented admin or owner reviewer",
      boundary: "Counts, funnel stages and analytics labels are static examples; no tracker, export, cohort or admin credential exists.",
      states: [
        ["FUNNEL / INVITED", "Invented onboarding count: 12 invited, 4 awaiting setup.", "Treat counts as fixtures, not observed metrics.", "FUNNEL / MENU REVIEW"],
        ["FUNNEL / MENU REVIEW", "Invented funnel count: 4 in menu review, 1 held for correction.", "Inspect the hold reason before any readiness claim.", "ATTENTION QUEUE"],
        ["ATTENTION QUEUE", "A synthetic queue highlights payment, channel and order cues.", "Review owner and next action for each cue.", "ANALYTICS FIXTURE"],
        ["ANALYTICS FIXTURE", "A static comparison shows states by invented branch.", "Do not infer growth, conversion or customer behavior.", "STALE / GATED"],
        ["STALE / GATED", "The projection is visibly unknown until refreshed by a real controlled system.", "Keep unknown separate from zero and success.", "FUNNEL / INVITED"],
      ],
    },
  ];

  const state = { family: 0, step: 0 };
  const tabs = [...document.querySelectorAll(".coverage-tab")];
  const panel = document.querySelector("#coverage-panel");
  const stateTrack = document.querySelector("#state-track");
  const advance = document.querySelector("#advance-state");
  const resetFamily = document.querySelector("#reset-family");
  const resetMock = document.querySelector("#reset-mock");
  const announcement = document.querySelector("#coverage-announcement");

  const text = (id, value) => {
    const element = document.querySelector(id);
    if (element) element.textContent = value;
  };

  const selectedFamily = () => families[state.family];
  const selectedState = () => selectedFamily().states[state.step];

  const render = (announce = false) => {
    const family = selectedFamily();
    const current = selectedState();
    tabs.forEach((tab, index) => {
      const active = index === state.family;
      tab.classList.toggle("is-active", active);
      tab.setAttribute("aria-selected", String(active));
      tab.tabIndex = active ? 0 : -1;
    });
    panel?.setAttribute("aria-labelledby", `coverage-tab-${state.family}`);
    text("#coverage-kicker", `FAMILY ${String(state.family + 1).padStart(2, "0")} · ${family.name}`);
    text("#coverage-heading", family.title);
    text("#coverage-summary", current[1]);
    text("#coverage-status", current[0]);
    text("#coverage-actor", family.actor);
    text("#coverage-attention", current[2]);
    text("#coverage-boundary", family.boundary);
    text("#coverage-next", current[3]);
    if (stateTrack) {
      stateTrack.innerHTML = family.states
        .map((item, index) => `<span class="${index === state.step ? "is-current" : ""}">${item[0]}</span>`)
        .join("");
    }
    if (announcement) {
      announcement.textContent = announce
        ? `${family.name}: ${current[0]}. ${current[1]} Nothing submits or leaves this page.`
        : "";
    }
  };

  const chooseFamily = (index, shouldFocus = false) => {
    if (!Number.isInteger(index) || index < 0 || index >= families.length) return;
    state.family = index;
    state.step = 0;
    render(true);
    if (shouldFocus) tabs[index]?.focus();
  };

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => chooseFamily(index));
    tab.addEventListener("keydown", (event) => {
      if (!["ArrowDown", "ArrowUp", "Home", "End"].includes(event.key)) return;
      event.preventDefault();
      const next =
        event.key === "Home"
          ? 0
          : event.key === "End"
            ? tabs.length - 1
            : (index + (event.key === "ArrowDown" ? 1 : -1) + tabs.length) % tabs.length;
      chooseFamily(next, true);
    });
  });

  advance?.addEventListener("click", () => {
    state.step = (state.step + 1) % selectedFamily().states.length;
    render(true);
  });

  resetFamily?.addEventListener("click", () => {
    state.step = 0;
    render(true);
  });

  resetMock?.addEventListener("click", () => {
    state.family = 0;
    state.step = 0;
    render(true);
    tabs[0]?.focus();
  });

  render();
})();
