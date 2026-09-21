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

  const tabs = Array.from(document.querySelectorAll("[data-view]"));
  const tierTabs = Array.from(document.querySelectorAll("[data-tier]"));
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
    !tierAnnouncement
  ) {
    return;
  }

  const defaultView = "conversation";
  const defaultStep = 0;
  const defaultTier = "lite";
  let activeView = defaultView;
  let activeStep = defaultStep;
  let activeTier = defaultTier;

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
    tabs[0]?.focus();
    render({ announce: true });
  });

  render();
})();
