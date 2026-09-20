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

  const tabs = Array.from(document.querySelectorAll("[data-view]"));
  const stepButtons = Array.from(document.querySelectorAll("[data-step]"));
  const panel = document.querySelector("#mock-panel");
  const kicker = document.querySelector("#mock-kicker");
  const title = document.querySelector("#mock-title");
  const time = document.querySelector("#mock-time");
  const copy = document.querySelector("#mock-copy");
  const visual = document.querySelector("#mock-visual");
  const state = document.querySelector("#mock-state");
  const action = document.querySelector("#mock-action");
  const flowSteps = Array.from(document.querySelectorAll(".flow-step"));

  if (!panel || !kicker || !title || !time || !copy || !visual || !state || !action) {
    return;
  }

  let activeView = "conversation";
  let activeStep = 0;

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

  const render = () => {
    const view = views[activeView];
    const step = activeStep + 1;

    tabs.forEach((tab) => {
      const isActive = tab.dataset.view === activeView;
      tab.classList.toggle("is-active", isActive);
      tab.setAttribute("aria-selected", String(isActive));
      tab.tabIndex = isActive ? 0 : -1;
    });

    stepButtons.forEach((button) => {
      const isCurrent = Number(button.dataset.step) === activeStep;
      button.closest(".flow-step")?.classList.toggle("is-current", isCurrent);
    });

    panel.setAttribute("aria-labelledby", `tab-${activeView}`);
    kicker.textContent = view.kicker;
    title.textContent = view.title;
    time.textContent = view.time;
    copy.textContent = view.copy;
    visual.innerHTML = renderBubbles(view.bubbles);
    state.innerHTML = `<span class="state-dot" aria-hidden="true"></span> ${view.state}`;
    action.innerHTML = `Advance mock state <span aria-hidden="true">→</span>`;
    action.dataset.step = String(step % 3);
  };

  const activateView = (viewName) => {
    if (!views[viewName]) return;
    activeView = viewName;
    activeStep = 0;
    render();
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

  stepButtons.forEach((button) => {
    button.addEventListener("click", () => {
      activeStep = Number(button.dataset.step) || 0;
      render();
    });
  });

  action.addEventListener("click", () => {
    activeStep = (activeStep + 1) % flowSteps.length;
    render();
  });

  render();
})();
