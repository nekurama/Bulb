(() => {
  "use strict";

  // This flag makes the fixture-only boundary easy to assert in static QA.
  window.__MOCK_TEMPLATE__ = true;

  const views = {
    conversation: {
      kicker: "INCOMING / MOCK SIGNAL",
      title: "A clear signal arrives.",
      time: "09:41",
      copy: "A fictional customer message is grouped into a readable, actionable moment. No message leaves this page.",
      state: "Ready for review",
      bubbles: [
        ["FICTIONAL MESSAGE", "“Can I see today’s options for four?”"],
        ["ILLUSTRATIVE RESPONSE", "“Here is a short list. A team member can take over anytime.”"],
      ],
    },
    order: {
      kicker: "ORDER DESK / MOCK STATE",
      title: "A request takes shape.",
      time: "09:44",
      copy: "A fictional request becomes a simple work item with a visible next step. Nothing is submitted or charged.",
      state: "Draft, not submitted",
      bubbles: [
        ["FICTIONAL REQUEST", "Table for four · Example set · Pickup"],
        ["NEXT STEP", "Review details with the team before confirming."],
      ],
    },
    attention: {
      kicker: "TEAM ATTENTION / MOCK STATE",
      title: "A human can step in.",
      time: "09:46",
      copy: "The handoff is explicit, reversible and easy to understand. This interaction is a visual concept, not an operational control.",
      state: "Human review suggested",
      bubbles: [
        ["ATTENTION FLAG", "One detail needs a person’s judgment."],
        ["HANDOFF NOTE", "Assign → review → return to the imagined flow."],
      ],
    },
  };

  const tiers = {
    lite: {
      kicker: "LITE / MOCK STATE",
      title: "A smaller starting shape.",
      copy: "Replace this summary with approved LITE capability language. It is a placeholder, not a product entitlement or public claim.",
      badge: "REVIEW ONLY",
      capabilities: [
        "[CORE WORKFLOW SLOT]",
        "[SINGLE CONTEXT SLOT]",
        "[MANUAL REVIEW SLOT]",
      ],
      boundary: "[REPLACE WITH APPROVED LITE BOUNDARY]",
    },
    base: {
      kicker: "BASE / MOCK STATE",
      title: "A broader operating shape.",
      copy: "Replace this summary with approved BASE capability language. The differences shown here are invented review fixtures.",
      badge: "REVIEW ONLY",
      capabilities: [
        "[CORE WORKFLOW SLOT]",
        "[TEAM COORDINATION SLOT]",
        "[EXPANDED WORKSPACE SLOT]",
      ],
      boundary: "[REPLACE WITH APPROVED BASE BOUNDARY]",
    },
    pro: {
      kicker: "PRO / MOCK STATE",
      title: "A more advanced shape.",
      copy: "Replace this summary with approved PRO capability language. No pricing, entitlement or availability is represented.",
      badge: "REVIEW ONLY",
      capabilities: [
        "[CORE WORKFLOW SLOT]",
        "[ADVANCED CONTROL SLOT]",
        "[MULTI-CONTEXT SLOT]",
        "[REPORTING / GOVERNANCE SLOT]",
      ],
      boundary: "[REPLACE WITH APPROVED PRO BOUNDARY]",
    },
  };

  const flows = {
    f01: {
      title: "Admin → owner onboarding",
      stage: "POC",
      screen: "Screen: Admin invite / awaiting owner setup",
      source: "nekurama.chatgpt.md:L1233-L1309",
      acceptance: "A synthetic restaurant can be created as an initiated invitation without collecting or submitting real data.",
      note: "POC state only. No owner record, WhatsApp number or invitation is created.",
    },
    f02: {
      title: "Owner invitation and welcome",
      stage: "POC",
      screen: "Screen: Owner welcome / start setup",
      source: "nekurama.chatgpt.md:L1309-L1321",
      acceptance: "The mock separates an invitation from an active restaurant and exposes a safe next step.",
      note: "POC state only. No account, message or setup session exists.",
    },
    f03: {
      title: "Owner menu submission and verification",
      stage: "POC",
      screen: "Screen: Menu received / review fixture",
      source: "nekurama.chatgpt.md:L1321-L1375",
      acceptance: "A synthetic menu moves from received to review without upload, extraction service or customer data.",
      note: "POC state only. The menu is an invented fixture, not a real restaurant menu.",
    },
    f04: {
      title: "Ordering options, plan and activation",
      stage: "LATER / NOT IMPLEMENTED",
      screen: "Screen: Options / activation held",
      source: "nekurama.chatgpt.md:L1377-L1438",
      acceptance: "The mock shows a gated placeholder only; no pricing, payment, entitlement or live claim is allowed.",
      note: "Later direction. Pricing and activation remain unresolved product/legal decisions.",
    },
    f05: {
      title: "Onboarding state tracker",
      stage: "POC",
      screen: "Screen: Invited → menu → verification → held",
      source: "nekurama.chatgpt.md:L1444-L1478",
      acceptance: "State labels are deterministic, resettable and visibly mock-only, including a failed/held state.",
      note: "POC state only. No operational queue or reminder action exists.",
    },
    f06: {
      title: "Customer discovery and ordering",
      stage: "PILOT REVIEW",
      screen: "Screen: Customer menu → cart → pickup/delivery placeholder",
      source: "nekurama.chatgpt.md:L1478-L1520",
      acceptance: "Synthetic steps are reviewable without a real customer, address, payment or delivery integration.",
      note: "Pilot-review candidate. No customer journey is connected to a real channel.",
    },
    f07: {
      title: "Restaurant order lookup through WhatsApp",
      stage: "PILOT REVIEW",
      screen: "Screen: Orders / order detail / action placeholder",
      source: "nekurama.chatgpt.md:L1522-L1578",
      acceptance: "A fictional order can be inspected and action buttons remain non-submitting placeholders.",
      note: "Pilot-review candidate. No order lookup, customer contact or state mutation is real.",
    },
    f08: {
      title: "Restaurant dashboard operations",
      stage: "PILOT REVIEW",
      screen: "Screen: Orders dashboard / summary cards",
      source: "nekurama.chatgpt.md:L1588-L1620",
      acceptance: "The mock shows a bounded operational view without live metrics, account access or persistence.",
      note: "Pilot-review candidate. Summary values are invented fixtures, not analytics.",
    },
    f09: {
      title: "Proactive order notification",
      stage: "PILOT REVIEW",
      screen: "Screen: New-order notification / review",
      source: "nekurama.chatgpt.md:L1621-L1667",
      acceptance: "A synthetic notification is announced accessibly and contains no real contact or order data.",
      note: "Pilot-review candidate. No push, WhatsApp or external notification is sent.",
    },
    f10: {
      title: "Order state lifecycle",
      stage: "PILOT REVIEW",
      screen: "Screen: New → accepted → preparing → ready → completed",
      source: "nekurama.chatgpt.md:L1666-L1674",
      acceptance: "Every state transition is local, reversible and announced; no fulfillment or payment side effect exists.",
      note: "Pilot-review candidate. State changes remain inside the browser mock.",
    },
    f11: {
      title: "Staff accounts and permissions",
      stage: "LATER / NOT IMPLEMENTED",
      screen: "Screen: Owner/staff role boundary",
      source: "nekurama.chatgpt.md:L1678-L1737",
      acceptance: "Roles are shown as placeholders only; no authentication, invite, authorization or account creation is implemented.",
      note: "Later direction. Role names do not grant access or define final RBAC.",
    },
    f12: {
      title: "Restaurant / tenant identity model",
      stage: "LATER / NOT IMPLEMENTED",
      screen: "Screen: Restaurant identity / boundary note",
      source: "nekurama.chatgpt.md:L1740-L1775",
      acceptance: "The mock keeps restaurant, owner, staff and customer concepts distinct without storing records.",
      note: "Later architecture direction. No tenant isolation or production data model is implemented.",
    },
    f13: {
      title: "Admin restaurant oversight",
      stage: "PILOT REVIEW",
      screen: "Screen: Restaurant list / pending state",
      source: "nekurama.chatgpt.md:L1778-L1818",
      acceptance: "Synthetic restaurants can be filtered by mock status without reminder, payment, cancellation or account actions.",
      note: "Pilot-review candidate. Every restaurant and status is fictional.",
    },
    f14: {
      title: "Menu ingestion and V1 chain",
      stage: "POC",
      screen: "Screen: Menu → order → notify → accept → complete → confirmation",
      source: "nekurama.chatgpt.md:L1885-L1949",
      acceptance: "The prototype explains the intended chain as labeled mock states while delivery, payment and production integrations stay out of scope.",
      note: "POC map only. The chain is not an operational readiness claim.",
    },
  };

  const tabs = Array.from(document.querySelectorAll("[data-view]"));
  const tierTabs = Array.from(document.querySelectorAll("[data-tier]"));
  const flowTabs = Array.from(document.querySelectorAll("[data-flow]"));
  const stepButtons = Array.from(document.querySelectorAll("[data-step]"));
  const panel = document.querySelector("#mock-panel");
  const kicker = document.querySelector("#mock-kicker");
  const title = document.querySelector("#mock-title");
  const time = document.querySelector("#mock-time");
  const copy = document.querySelector("#mock-copy");
  const visual = document.querySelector("#mock-visual");
  const state = document.querySelector("#mock-state");
  const action = document.querySelector("#mock-action");
  const reset = document.querySelector("#mock-reset");
  const announcement = document.querySelector("#mock-announcement");
  const tierPanel = document.querySelector("#tier-panel");
  const tierKicker = document.querySelector("#tier-kicker");
  const tierTitle = document.querySelector("#tier-title");
  const tierBadge = document.querySelector("#tier-badge");
  const tierCopy = document.querySelector("#tier-copy");
  const tierCapabilities = document.querySelector("#tier-capabilities");
  const tierBoundary = document.querySelector("#tier-boundary");
  const tierAnnouncement = document.querySelector("#tier-announcement");
  const flowPanel = document.querySelector("#flow-panel");
  const flowKicker = document.querySelector("#flow-kicker");
  const flowTitle = document.querySelector("#flow-title");
  const flowMaturity = document.querySelector("#flow-maturity");
  const flowScreen = document.querySelector("#flow-screen");
  const flowSource = document.querySelector("#flow-source");
  const flowAcceptance = document.querySelector("#flow-acceptance");
  const flowNote = document.querySelector("#flow-note");
  const flowAnnouncement = document.querySelector("#flow-announcement");
  const flowSteps = Array.from(document.querySelectorAll(".flow-step"));

  if (
    !panel ||
    !kicker ||
    !title ||
    !time ||
    !copy ||
    !visual ||
    !state ||
    !action ||
    !reset ||
    !announcement ||
    !tierPanel ||
    !tierKicker ||
    !tierTitle ||
    !tierBadge ||
    !tierCopy ||
    !tierCapabilities ||
    !tierBoundary ||
    !tierAnnouncement ||
    !flowPanel ||
    !flowKicker ||
    !flowTitle ||
    !flowMaturity ||
    !flowScreen ||
    !flowSource ||
    !flowAcceptance ||
    !flowNote ||
    !flowAnnouncement
  ) {
    return;
  }

  const defaultView = "conversation";
  const defaultStep = 0;
  const defaultTier = "lite";
  const defaultFlow = "f01";
  let activeView = defaultView;
  let activeStep = defaultStep;
  let activeTier = defaultTier;
  let activeFlow = defaultFlow;

  const renderBubbles = (bubbles) =>
    bubbles
      .map(
        ([label, message], index) => `
          <div class="message-bubble ${index === 0 ? "message-bubble-in" : "message-bubble-out"}">
            <span class="bubble-label">${label}</span>
            ${message}
          </div>
        `,
      )
      .join("");

  const renderTier = ({ announce = false } = {}) => {
    const tier = tiers[activeTier];

    tierTabs.forEach((tab) => {
      const isActive = tab.dataset.tier === activeTier;
      tab.classList.toggle("is-active", isActive);
      tab.setAttribute("aria-selected", String(isActive));
      tab.tabIndex = isActive ? 0 : -1;
    });

    tierPanel.setAttribute("aria-labelledby", `tier-tab-${activeTier}`);
    tierKicker.textContent = tier.kicker;
    tierTitle.textContent = tier.title;
    tierBadge.textContent = tier.badge;
    tierCopy.textContent = tier.copy;
    tierCapabilities.innerHTML = tier.capabilities
      .map((capability, index) => `<li><span aria-hidden="true">${String(index + 1).padStart(2, "0")}</span>${capability}</li>`)
      .join("");
    tierBoundary.textContent = tier.boundary;
    tierAnnouncement.textContent = announce
      ? `${tier.kicker}. ${tier.title} This is an invented capability comparison with no pricing or entitlement decision.`
      : "";
  };

  const renderFlow = ({ announce = false } = {}) => {
    const flow = flows[activeFlow];
    const maturityClass = flow.stage.startsWith("POC")
      ? "flow-maturity-poc"
      : flow.stage.startsWith("PILOT")
        ? "flow-maturity-pilot"
        : "flow-maturity-later";

    flowTabs.forEach((tab) => {
      const isActive = tab.dataset.flow === activeFlow;
      tab.classList.toggle("is-active", isActive);
      tab.setAttribute("aria-selected", String(isActive));
      tab.tabIndex = isActive ? 0 : -1;
    });

    flowPanel.setAttribute("aria-labelledby", `flow-tab-${activeFlow}`);
    flowKicker.textContent = `${activeFlow.toUpperCase()} / ${flow.stage}`;
    flowTitle.textContent = flow.title;
    flowMaturity.textContent = flow.stage;
    flowMaturity.className = `flow-maturity ${maturityClass}`;
    flowScreen.textContent = flow.screen;
    flowSource.textContent = flow.source;
    flowAcceptance.textContent = flow.acceptance;
    flowNote.textContent = flow.note;
    flowAnnouncement.textContent = announce
      ? `${activeFlow.toUpperCase()} selected. ${flow.title}. ${flow.stage}. Internal mock only.`
      : "";
  };

  const render = ({ announce = false } = {}) => {
    const view = views[activeView];

    tabs.forEach((tab) => {
      const isActive = tab.dataset.view === activeView;
      tab.classList.toggle("is-active", isActive);
      tab.setAttribute("aria-selected", String(isActive));
      tab.tabIndex = isActive ? 0 : -1;
    });

    stepButtons.forEach((button) => {
      const isCurrent = Number(button.dataset.step) === activeStep;
      button.closest(".flow-step")?.classList.toggle("is-current", isCurrent);
      if (isCurrent) {
        button.setAttribute("aria-current", "step");
      } else {
        button.removeAttribute("aria-current");
      }
    });

    panel.setAttribute("aria-labelledby", `tab-${activeView}`);
    kicker.textContent = view.kicker;
    title.textContent = view.title;
    time.textContent = view.time;
    copy.textContent = view.copy;
    visual.innerHTML = renderBubbles(view.bubbles);
    state.innerHTML = `<span class="state-dot" aria-hidden="true"></span> ${view.state}`;
    action.innerHTML = `Advance mock state <span aria-hidden="true">→</span>`;
    announcement.textContent = announce
      ? `${view.title} ${view.state}. ${tiers[activeTier].kicker} mock tier. This is an invented local mock state.`
      : "";
    renderTier({ announce });
    renderFlow({ announce });
  };

  const activateView = (viewName) => {
    if (!views[viewName]) return;
    activeView = viewName;
    activeStep = defaultStep;
    render({ announce: true });
  };

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => activateView(tab.dataset.view));
    tab.addEventListener("keydown", (event) => {
      if (!["ArrowRight", "ArrowLeft", "Home", "End"].includes(event.key)) return;
      event.preventDefault();
      const nextIndex =
        event.key === "Home"
          ? 0
          : event.key === "End"
            ? tabs.length - 1
            : (index + (event.key === "ArrowRight" ? 1 : -1) + tabs.length) % tabs.length;
      tabs[nextIndex].focus();
      activateView(tabs[nextIndex].dataset.view);
    });
  });

  tierTabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      if (!tiers[tab.dataset.tier]) return;
      activeTier = tab.dataset.tier;
      render({ announce: true });
    });
    tab.addEventListener("keydown", (event) => {
      if (!["ArrowRight", "ArrowLeft", "Home", "End"].includes(event.key)) return;
      event.preventDefault();
      const nextIndex =
        event.key === "Home"
          ? 0
          : event.key === "End"
            ? tierTabs.length - 1
            : (index + (event.key === "ArrowRight" ? 1 : -1) + tierTabs.length) % tierTabs.length;
      const nextTier = tierTabs[nextIndex].dataset.tier;
      tierTabs[nextIndex].focus();
      if (tiers[nextTier]) {
        activeTier = nextTier;
        render({ announce: true });
      }
    });
  });

  flowTabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      if (!flows[tab.dataset.flow]) return;
      activeFlow = tab.dataset.flow;
      render({ announce: true });
    });
    tab.addEventListener("keydown", (event) => {
      if (!["ArrowDown", "ArrowUp", "Home", "End"].includes(event.key)) return;
      event.preventDefault();
      const nextIndex =
        event.key === "Home"
          ? 0
          : event.key === "End"
            ? flowTabs.length - 1
            : (index + (event.key === "ArrowDown" ? 1 : -1) + flowTabs.length) % flowTabs.length;
      const nextFlow = flowTabs[nextIndex].dataset.flow;
      flowTabs[nextIndex].focus();
      if (flows[nextFlow]) {
        activeFlow = nextFlow;
        render({ announce: true });
      }
    });
  });

  stepButtons.forEach((button) => {
    button.addEventListener("click", () => {
      activeStep = Number(button.dataset.step) || 0;
      render({ announce: true });
    });
  });

  action.addEventListener("click", () => {
    activeStep = (activeStep + 1) % flowSteps.length;
    render({ announce: true });
  });

  reset.addEventListener("click", () => {
    activeView = defaultView;
    activeStep = defaultStep;
    activeTier = defaultTier;
    activeFlow = defaultFlow;
    tabs[0]?.focus();
    render({ announce: true });
  });

  render();
})();
