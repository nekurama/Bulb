(() => {
  "use strict";

  const initialRoute = "Primary route slot";
  const fallbackDemo = [
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

  const state = { step: 0, route: initialRoute, demo: fallbackDemo };
  const elements = {
    source: document.querySelector("#mock-source-note"),
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
    fields: [...document.querySelectorAll("#interest-form input, #interest-form select")]
  };

  if (!elements.form || !elements.next || !elements.back || !elements.status) return;
  if (elements.submit) elements.submit.disabled = false;

  function getScenes() {
    return state.demo.length > 0 ? state.demo : fallbackDemo;
  }

  function normalizeDemo(data) {
    if (!data || data.mode !== "mock-only" || !Array.isArray(data.demo)) {
      throw new Error("Mock data is not marked mock-only");
    }

    const scenes = data.demo.filter((scene) => (
      scene
      && typeof scene.kicker === "string"
      && typeof scene.title === "string"
      && typeof scene.copy === "string"
      && typeof scene.detail === "string"
      && scene.kicker.trim()
      && scene.title.trim()
      && scene.copy.trim()
      && scene.detail.trim()
    ));

    if (scenes.length !== elements.steps.length) {
      throw new Error("Mock data scene count does not match the controls");
    }
    return scenes;
  }

  function renderStep() {
    const scenes = getScenes();
    state.step = Math.min(Math.max(state.step, 0), scenes.length - 1);
    const scene = scenes[state.step];
    elements.kicker.textContent = scene.kicker;
    elements.title.textContent = scene.title;
    elements.copy.textContent = scene.copy;
    elements.detail.textContent = scene.detail;
    elements.back.disabled = state.step === 0;
    elements.next.textContent = state.step === scenes.length - 1 ? "Restart scene ↺" : "Next scene →";
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

  function setRouteSelection(button) {
    state.route = button.dataset.route || initialRoute;
    elements.route.value = state.route;
    elements.routes.forEach((route) => {
      const isSelected = route === button;
      route.classList.toggle("is-selected", isSelected);
      route.setAttribute("aria-pressed", String(isSelected));
    });
  }

  function chooseRoute(button) {
    setRouteSelection(button);
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.querySelector("#pilot-form").scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",
      block: "center"
    });
  }

  function setStatus(message, focus = false) {
    elements.status.hidden = false;
    elements.status.textContent = message;
    if (focus) elements.status.focus();
  }

  function clearValidationState() {
    elements.fields.forEach((field) => field.removeAttribute("aria-invalid"));
  }

  function resetFormState() {
    state.route = initialRoute;
    elements.route.value = initialRoute;
    const defaultButton = elements.routes.find((button) => button.dataset.route === initialRoute) || elements.routes[0];
    if (defaultButton) setRouteSelection(defaultButton);
    clearValidationState();
    elements.status.hidden = true;
    elements.status.textContent = "";
  }

  elements.next.addEventListener("click", () => {
    const scenes = getScenes();
    state.step = state.step === scenes.length - 1 ? 0 : state.step + 1;
    renderStep();
  });

  elements.back.addEventListener("click", () => {
    state.step = Math.max(0, state.step - 1);
    renderStep();
  });

  elements.resetDemo?.addEventListener("click", () => {
    state.step = 0;
    renderStep();
  });

  elements.steps.forEach((button) => {
    button.addEventListener("click", () => {
      const requestedStep = Number(button.dataset.step);
      if (Number.isInteger(requestedStep) && requestedStep >= 0 && requestedStep < getScenes().length) {
        state.step = requestedStep;
        renderStep();
      }
    });
  });

  elements.routes.forEach((button) => button.addEventListener("click", () => chooseRoute(button)));

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

  renderStep();

  fetch("mock-data.json")
    .then((response) => {
      if (!response.ok) throw new Error("Mock data unavailable");
      return response.json();
    })
    .then((data) => {
      state.demo = normalizeDemo(data);
      elements.source.textContent = "BABAI / local mock data";
      renderStep();
    })
    .catch((error) => {
      state.demo = fallbackDemo;
      elements.source.textContent = "BABAI / inline mock fallback";
      console.warn("Using inline mock fallback:", error.message);
      renderStep();
    });
})();
