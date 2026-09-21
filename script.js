(() => {
  "use strict";

  const initialRoute = "Primary route slot";
  const demoScenes = [
    {
      kicker: "CUSTOMER · MOCK CONVERSATION",
      title: "“Is the paneer bowl available for pickup tonight?”",
      copy: "A customer question arrives in the restaurant’s own WhatsApp context. The assistant can help interpret it; it does not invent inventory or promise an order.",
      detail: "Invented scene; no real customer or menu data is used."
    },
    {
      kicker: "CONTEXT · MOCK MENU",
      title: "A reviewed menu gives the conversation useful context.",
      copy: "A future controlled setup could provide a validated catalog or menu. This preview uses an invented item and no restaurant data.",
      detail: "Invented scene; suggestion ≠ published menu state."
    },
    {
      kicker: "ORDER · MOCK STATE",
      title: "Pickup order drafted for business review.",
      copy: "The proposed order is structured so staff can accept, reject or correct it. Payment and order state are not inferred from a chat message.",
      detail: "Invented scene; status: needs human review."
    },
    {
      kicker: "TAKEOVER · MOCK HANDOFF",
      title: "A person can take over when context needs care.",
      copy: "Human takeover is part of the intended pilot boundary. Staff remain responsible for controlled business decisions and customer communication.",
      detail: "Invented scene; no message is sent from this page."
    }
  ];

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

  const state = { step: 0, route: initialRoute };
  const elements = {
    kicker: document.querySelector("#mock-kicker"),
    title: document.querySelector("#mock-title"),
    copy: document.querySelector("#mock-copy"),
    detail: document.querySelector("#mock-detail"),
    next: document.querySelector("#demo-next"),
    back: document.querySelector("#demo-back"),
    resetDemo: document.querySelector("#demo-reset"),
    steps: [...document.querySelectorAll(".demo-step")],
    form: document.querySelector("#interest-form"),
    submit: document.querySelector("#form-preview"),
    status: document.querySelector("#form-status"),
    route: document.querySelector("#route"),
    routes: [...document.querySelectorAll(".route-button")],
    fields: [...document.querySelectorAll("#interest-form input, #interest-form select")],
    coverageTabs: [...document.querySelectorAll(".coverage-tab")],
    coveragePanel: document.querySelector("#coverage-panel")
  };

  const setText = (selector, value) => {
    const element = document.querySelector(selector);
    if (element) element.textContent = value;
  };

  function renderStep() {
    const scene = demoScenes[state.step];
    setText("#mock-kicker", scene.kicker);
    setText("#mock-title", scene.title);
    setText("#mock-copy", scene.copy);
    setText("#mock-detail", scene.detail);
    if (elements.back) elements.back.disabled = state.step === 0;
    if (elements.next) elements.next.textContent = state.step === demoScenes.length - 1 ? "Restart scene ↺" : "Next scene →";
    elements.steps.forEach((button, index) => {
      const isActive = index === state.step;
      button.classList.toggle("is-active", isActive);
      if (isActive) {
        button.setAttribute("aria-current", "step");
      } else {
        button.removeAttribute("aria-current");
      }
    });
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

  function setRouteSelection(button) {
    state.route = button.dataset.route || initialRoute;
    if (elements.route) elements.route.value = state.route;
    elements.routes.forEach((route) => {
      const isSelected = route === button;
      route.classList.toggle("is-selected", isSelected);
      route.setAttribute("aria-pressed", String(isSelected));
    });
  }

  function chooseRoute(button) {
    setRouteSelection(button);
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.querySelector("#pilot-form")?.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",
      block: "center"
    });
  }

  function setStatus(message, focus = false) {
    if (!elements.status) return;
    elements.status.hidden = false;
    elements.status.textContent = message;
    if (focus) elements.status.focus();
  }

  function clearValidationState() {
    elements.fields.forEach((field) => field.removeAttribute("aria-invalid"));
  }

  function resetFormState() {
    state.route = initialRoute;
    if (elements.route) elements.route.value = initialRoute;
    const defaultButton = elements.routes.find((button) => button.dataset.route === initialRoute) || elements.routes[0];
    if (defaultButton) setRouteSelection(defaultButton);
    clearValidationState();
    if (elements.status) {
      elements.status.hidden = true;
      elements.status.textContent = "";
    }
  }

  if (elements.next && elements.back) {
    elements.next.addEventListener("click", () => {
      state.step = state.step === demoScenes.length - 1 ? 0 : state.step + 1;
      renderStep();
    });
    elements.back.addEventListener("click", () => {
      state.step = Math.max(0, state.step - 1);
      renderStep();
    });
  }

  elements.resetDemo?.addEventListener("click", () => {
    state.step = 0;
    renderStep();
  });

  elements.steps.forEach((button) => {
    button.addEventListener("click", () => {
      const requestedStep = Number(button.dataset.step);
      if (Number.isInteger(requestedStep) && requestedStep >= 0 && requestedStep < demoScenes.length) {
        state.step = requestedStep;
        renderStep();
      }
    });
  });

  elements.routes.forEach((button) => button.addEventListener("click", () => chooseRoute(button)));

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

  if (elements.form) {
    if (elements.submit) elements.submit.disabled = false;
    elements.form.addEventListener("submit", (event) => {
      event.preventDefault();
      setStatus(`Demo only: the ${state.route.toLowerCase()} is prepared in this browser, but nothing was sent or stored. A real route requires an approved company-owned destination, privacy notice, retention rule and accountable owner.`, true);
    });
    elements.form.addEventListener("invalid", (event) => {
      event.target.setAttribute("aria-invalid", "true");
      setStatus("Complete each required field to preview this local-only request. Nothing will be sent or stored.");
    }, true);
    elements.fields.forEach((field) => {
      field.addEventListener("input", () => field.removeAttribute("aria-invalid"));
      field.addEventListener("change", () => field.removeAttribute("aria-invalid"));
    });
    elements.form.addEventListener("reset", () => {
      window.setTimeout(resetFormState, 0);
    });
  }

  renderStep();
  renderCoverage("onboarding", false);
})();
