(() => {
  "use strict";

  const state = { step: 0, route: "Pilot conversation", demo: null };
  const elements = {
    kicker: document.querySelector("#mock-kicker"),
    title: document.querySelector("#mock-title"),
    copy: document.querySelector("#mock-copy"),
    detail: document.querySelector("#mock-detail"),
    next: document.querySelector("#demo-next"),
    back: document.querySelector("#demo-back"),
    steps: [...document.querySelectorAll(".demo-step")],
    form: document.querySelector("#interest-form"),
    status: document.querySelector("#form-status"),
    route: document.querySelector("#route"),
    routes: [...document.querySelectorAll(".route-button")]
  };

  const fallbackDemo = [
    {
      kicker: "CUSTOMER · MOCK CONVERSATION",
      title: "“Is the paneer bowl available for pickup tonight?”",
      copy: "A customer question arrives in the restaurant’s own WhatsApp context. The assistant can help interpret it; it does not invent inventory or promise an order.",
      detail: "No real customer or menu data is used."
    }
  ];

  function renderStep() {
    const scene = (state.demo || fallbackDemo)[state.step];
    if (!scene) return;
    elements.kicker.textContent = scene.kicker;
    elements.title.textContent = scene.title;
    elements.copy.textContent = scene.copy;
    elements.detail.textContent = scene.detail;
    elements.back.disabled = state.step === 0;
    elements.next.textContent = state.step === (state.demo || fallbackDemo).length - 1 ? "Restart scene ↺" : "Next scene →";
    elements.steps.forEach((button, index) => button.classList.toggle("is-active", index === state.step));
  }

  function chooseRoute(button) {
    state.route = button.dataset.route;
    elements.route.value = state.route;
    elements.routes.forEach((route) => route.classList.toggle("is-selected", route === button));
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.querySelector("#pilot-form").scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "center" });
  }

  elements.next.addEventListener("click", () => {
    const scenes = state.demo || fallbackDemo;
    state.step = state.step === scenes.length - 1 ? 0 : state.step + 1;
    renderStep();
  });

  elements.back.addEventListener("click", () => {
    state.step = Math.max(0, state.step - 1);
    renderStep();
  });

  elements.steps.forEach((button) => {
    button.addEventListener("click", () => {
      state.step = Number(button.dataset.step);
      renderStep();
    });
  });

  elements.routes.forEach((button) => button.addEventListener("click", () => chooseRoute(button)));

  elements.form.addEventListener("submit", (event) => {
    event.preventDefault();
    elements.status.hidden = false;
    elements.status.textContent = `Demo only: your ${state.route.toLowerCase()} route is prepared in this browser, but nothing was sent or stored. A real route requires an approved company-owned destination, privacy notice, retention rule and accountable owner.`;
    elements.status.focus();
  });

  fetch("mock-data.json")
    .then((response) => {
      if (!response.ok) throw new Error("Mock data unavailable");
      return response.json();
    })
    .then((data) => {
      if (Array.isArray(data.demo) && data.demo.length > 0) {
        state.demo = data.demo;
        renderStep();
      }
    })
    .catch(() => renderStep());
})();
