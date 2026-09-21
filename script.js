(() => {
  "use strict";

  window.__ROOT_MOCK_TEMPLATE__ = true;

  const tiers = {
    lite: {
      name: "LITE",
      price: "₹4,999",
      description: "A smaller pilot shape for review.",
      allow: ["Menu review", "Order capture", "Human escalation"],
      deny: ["Payment flow disabled", "Delivery flow disabled"],
      gated: ["Pricing/entitlement approval"],
    },
    base: {
      name: "BASE",
      price: "₹9,999",
      description: "A broader pilot shape for review.",
      allow: ["Menu + order review", "Pickup workflow illustration", "Team coordination"],
      deny: ["Unrestricted AI action"],
      gated: ["Payment/provider path", "Delivery provider path"],
    },
    pro: {
      name: "PRO",
      price: "₹19,999",
      description: "An advanced experiment shape for review.",
      allow: ["Advanced control review", "Governance placeholder", "Provider recovery illustration"],
      deny: ["Unrestricted AI action", "Unbounded automation"],
      gated: ["Payment/reconciliation provider", "Delivery/API provider"],
    },
  };

  const stages = [
    {
      kicker: "S01 / ADMIN ONBOARDING · MOCK",
      title: "An invitation finds its owner.",
      state: "LOCAL READY",
      timestamp: "09:12",
      source: "F01 · F02 · F05 · F13",
      bubbles: [
        ["AD", "ADMIN", "Invite created for Frozen Biryani House.", "09:12"],
        ["OW", "OWNER FIXTURE", "I can see the setup path.", "09:13"],
      ],
      cards: [["OWNER STATUS", "Awaiting setup"], ["BRANCH", "Hyderabad / mock"], ["FUNNEL", "4 / 2 / 1 / 0"] ],
      note: "No invitation, identity, phone number or tenant record exists.",
    },
    {
      kicker: "S02 / OWNER SETUP · MOCK",
      title: "A menu arrives in three possible shapes.",
      state: "REVIEW",
      timestamp: "09:18",
      source: "F02 · F03 · F04 · F05 · F14",
      bubbles: [
        ["OW", "OWNER FIXTURE", "Sending menu image / PDF / text.", "09:18"],
        ["MO", "MOCK REVIEW", "Candidate items need a human check.", "09:19"],
      ],
      cards: [["SOURCE", "Image · PDF · text"], ["ITEMS", "3 synthetic items"], ["PUBLISH", "Held / gated"] ],
      note: "No file picker, extraction service or publish action exists.",
    },
    {
      kicker: "S03 / CUSTOMER DISCOVERY · MOCK",
      title: "A customer finds a menu, then an item.",
      state: "LOCAL READY",
      timestamp: "12:05",
      source: "F06",
      bubbles: [
        ["CU", "CUSTOMER FIXTURE", "Hi — show me today's menu.", "12:05"],
        ["BA", "MOCK ASSISTANT", "Here is a fictional menu. Choose an item to review.", "12:05"],
      ],
      cards: [["MENU", "Published fixture"], ["ITEM", "Paneer bowl / variant"], ["CONTEXT", "menuVersion: mock-02"] ],
      note: "No location, customer profile, menu request or WhatsApp message leaves the page.",
    },
    {
      kicker: "S04 / CART + ORDER REVIEW · MOCK",
      title: "A variant becomes a cart, not a charge.",
      state: "GATED",
      timestamp: "12:08",
      source: "F06 · F14",
      bubbles: [
        ["CU", "CUSTOMER FIXTURE", "Paneer bowl ×2 · mild · add raita.", "12:08"],
        ["RE", "REVIEW", "Check quantity, variant and fulfillment before the next step.", "12:08"],
      ],
      cards: [["CART", "2 fictional items"], ["TOTAL", "MOCK TOTAL"], ["NEXT", "Order review"] ],
      note: "No cart ID, address, order, invoice, payment or customer record exists.",
    },
    {
      kicker: "S05 / PAYMENT + FULFILLMENT · MOCK",
      title: "Every tier has a visible boundary.",
      state: "PENDING",
      timestamp: "12:10",
      source: "F04 · F06 · F14",
      bubbles: [
        ["MO", "MOCK PAYMENT", "BASE · payment pending → retry → reconcile.", "12:10"],
        ["MO", "FULFILLMENT", "Pickup ready · delivery pending · provider failure.", "12:10"],
      ],
      cards: [["TIER", "BASE / ₹9,999 mock"], ["PAYMENT", "Pending / failure / retry"], ["FULFILLMENT", "Pickup / delivery"] ],
      note: "Proposed pilot pricing is internal experiment data only; no money moves.",
    },
    {
      kicker: "S06 / RESTAURANT ORDER DESK · MOCK",
      title: "New becomes ready under human attention.",
      state: "ATTENTION",
      timestamp: "12:16",
      source: "F07 · F08 · F09 · F10",
      bubbles: [
        ["OD", "ORDER DESK", "Order #1042 · NEW → ACCEPTED → PREPARING.", "12:16"],
        ["ST", "STAFF FIXTURE", "Human review requested before READY.", "12:17"],
      ],
      cards: [["ORDER", "New / preparing / ready"], ["STAFF", "Scope placeholder"], ["ACTION", "Accept / handoff mock"] ],
      note: "No order desk, notification, customer identity or fulfillment callback exists.",
    },
    {
      kicker: "S07 / HUMAN TAKEOVER · MOCK",
      title: "A person takes over without losing the thread.",
      state: "HUMAN ACTIVE",
      timestamp: "12:18",
      source: "F09 · F10 · human takeover",
      bubbles: [
        ["CU", "CUSTOMER FIXTURE", "Can I swap one bowl for a less spicy version?", "12:18"],
        ["ST", "HUMAN OPERATOR", "I’m taking over this question for local review.", "12:19"],
      ],
      cards: [["HANDOFF", "Human active"], ["AUTOMATION", "Paused"], ["NEXT", "Release locally"] ],
      note: "No escalation, staff notification or outbound message exists.",
    },
    {
      kicker: "S08 / RECOVERY · MOCK",
      title: "The failure stays visible until recovery.",
      state: "RECOVERABLE",
      timestamp: "12:22",
      source: "F09 · F10 · recovery",
      bubbles: [
        ["BA", "NOTIFICATION", "Order-ready preview · no send.", "12:22"],
        ["RE", "RECOVERY", "Provider failure → disconnected channel → review.", "12:23"],
      ],
      cards: [["CARE", "Reorder / cancel / refund"], ["PROVIDER", "Failure / retry"], ["CHANNEL", "Disconnected / recover"] ],
      note: "No notification, reorder, refund, provider request or channel reconnect leaves this page.",
    },
  ];

  const state = { stage: 0, tier: "base", item: "Paneer bowl", variant: "Mild", quantity: 1 };
  const stageButtons = [...document.querySelectorAll(".story-step")];
  const tierButtons = [...document.querySelectorAll(".tier-choice")];
  const body = document.querySelector("#journey-body");
  const kicker = document.querySelector("#journey-kicker");
  const title = document.querySelector("#journey-title-screen");
  const status = document.querySelector("#journey-state");
  const announcement = document.querySelector("#journey-announcement");
  const tierDetail = document.querySelector("#tier-detail");
  const progress = document.querySelector("#journey-progress");
  const previous = document.querySelector("#previous-stage");
  const next = document.querySelector("#next-stage");
  const reset = document.querySelector("#reset-all");

  if (!body || !kicker || !title || !status || !announcement || !tierDetail || !progress || !previous || !next || !reset) return;
  const stageMarkupMatchesData = stageButtons.length === stages.length && stageButtons.every((button, index) => Number(button.dataset.stage) === index);
  if (!stageMarkupMatchesData) {
    console.error("Prototype stage rail/data mismatch");
    return;
  }

  const handleLocalAction = (event) => {
    if (!(event.target instanceof Element)) return;
    const control = event.target.closest("[data-local-action]");
    if (!control || !body.contains(control)) return;
    const action = control.dataset.localAction;
    if (action === "item") state.item = control.dataset.value;
    if (action === "variant") state.variant = control.dataset.value;
    if (action === "quantity") state.quantity = Math.max(1, Math.min(9, state.quantity + Number(control.dataset.value)));
    render({ announce: true });
  };

  body.addEventListener("click", handleLocalAction);

  const render = ({ announce = false } = {}) => {
    const stage = stages[state.stage];
    const tier = tiers[state.tier];
    const stageBubbles = state.stage === 4
      ? state.tier === "lite"
        ? [
          ["MO", "LITE · PAYMENT", "Payment disabled in LITE; keep the order in review.", "12:10"],
          ["MO", "LITE · FULFILLMENT", "Pickup review only; delivery is not available.", "12:10"],
        ]
        : state.tier === "base"
          ? [
            ["MO", "BASE · PAYMENT", "Payment is provider-gated: pending → failure → retry.", "12:10"],
            ["MO", "BASE · FULFILLMENT", "Pickup is bounded; delivery remains provider-gated.", "12:10"],
          ]
          : [
            ["MO", "PRO · PAYMENT", "Payment and reconciliation are provider-gated.", "12:10"],
            ["MO", "PRO · AUTHORITY", "Bounded controls only; no unrestricted AI authority.", "12:10"],
          ]
      : stage.bubbles;
    const stageCards = state.stage === 4
      ? state.tier === "lite"
        ? [["TIER", "LITE / ₹4,999 mock"], ["PAYMENT", "DISABLED"], ["FULFILLMENT", "PICKUP ONLY"]]
        : state.tier === "base"
          ? [["TIER", "BASE / ₹9,999 mock"], ["PAYMENT", "PROVIDER-GATED"], ["FULFILLMENT", "DELIVERY-GATED"]]
          : [["TIER", "PRO / ₹19,999 mock"], ["PAYMENT", "RECONCILIATION-GATED"], ["AUTHORITY", "NO UNRESTRICTED AI"]]
      : stage.cards;
    stageButtons.forEach((button, index) => {
      const active = index === state.stage;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-selected", String(active));
      button.tabIndex = active ? 0 : -1;
      button.id = `stage-${index}`;
    });

    tierButtons.forEach((button) => {
      const active = button.dataset.tier === state.tier;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-checked", String(active));
    });
    kicker.textContent = stage.kicker;
    title.textContent = stage.title;
    status.textContent = state.stage === 4 ? state.tier === "lite" ? "DISABLED" : "PROVIDER-GATED" : stage.state;
    progress.textContent = `${String(state.stage + 1).padStart(2, "0")} / ${String(stages.length).padStart(2, "0")}`;
    previous.disabled = state.stage === 0;
    next.disabled = state.stage === stages.length - 1;
    const localControls = state.stage === 2 ? `
      <div class="local-controls" aria-label="Local menu selection controls">
        <div><span class="control-label">MOCK MENU ITEMS</span><div class="choice-row">
          <button class="choice-button ${state.item === "Paneer bowl" ? "is-selected" : ""}" type="button" data-local-action="item" data-value="Paneer bowl">Paneer bowl</button>
          <button class="choice-button ${state.item === "Family combo" ? "is-selected" : ""}" type="button" data-local-action="item" data-value="Family combo">Family combo</button>
        </div></div>
        <p class="control-note">Selection changes local fixture context only.</p>
      </div>
    ` : state.stage === 3 ? `
      <div class="local-controls" aria-label="Local cart controls">
        <div><span class="control-label">VARIANT</span><div class="choice-row">
          <button class="choice-button ${state.variant === "Mild" ? "is-selected" : ""}" type="button" data-local-action="variant" data-value="Mild">Mild</button>
          <button class="choice-button ${state.variant === "Spicy" ? "is-selected" : ""}" type="button" data-local-action="variant" data-value="Spicy">Spicy</button>
        </div></div>
        <div><span class="control-label">QUANTITY</span><div class="quantity-control">
          <button class="choice-button" type="button" data-local-action="quantity" data-value="-1" aria-label="Decrease quantity">−</button>
          <strong>${state.quantity}</strong>
          <button class="choice-button" type="button" data-local-action="quantity" data-value="1" aria-label="Increase quantity">+</button>
        </div></div>
        <div class="cart-review"><span class="control-label">ORDER REVIEW</span><strong>${state.quantity} × ${state.item} · ${state.variant}</strong><small>MOCK TOTAL · NOTHING SUBMITS</small></div>
      </div>
    ` : "";
    body.innerHTML = `
      <div class="chat-stack">
        ${stageBubbles.map(([avatar, label, message, time], index) => `
          <div class="chat-bubble ${index % 2 ? "outgoing" : ""}">
            <span class="chat-meta">${avatar} · ${label} · ${time}</span>
            <p>${message}</p>
          </div>
        `).join("")}
      </div>
      <div class="journey-card-grid">
        ${stageCards.map(([label, value]) => {
          const replaced = label === "ITEM" ? state.item : label === "CART" ? `${state.quantity} item${state.quantity === 1 ? "" : "s"}` : label === "TOTAL" ? "MOCK TOTAL" : value;
          return `<div class="journey-card"><span>${label}</span><strong>${replaced}</strong><p>invented fixture</p></div>`;
        }).join("")}
      </div>
      ${localControls}
    `;
    document.querySelector("#journey-tier-callout").textContent = `${tier.name} · ${tier.price} pre-GST mock / ±15% tolerance · ${tier.description} Allow: ${tier.allow.join(" · ")}. Deny: ${tier.deny.join(" · ")}. Gated: ${tier.gated.join(" · ")}.`;
    tierDetail.innerHTML = `
      <div><p class="eyebrow">SELECTED MOCK TIER</p><h3>${tier.name} · ${tier.price}</h3><p>${tier.description} Proposed pilot pricing / internal experiment only.</p></div>
      <div class="tier-groups">
        <strong>ALLOW</strong><ul>${tier.allow.map((capability) => `<li>${capability}</li>`).join("")}</ul>
        <strong>DENY</strong><ul>${tier.deny.map((capability) => `<li>${capability}</li>`).join("")}</ul>
        <strong>GATED</strong><ul>${tier.gated.map((capability) => `<li>${capability}</li>`).join("")}</ul>
      </div>
    `;
    const cartAnnouncement = state.stage === 3 ? ` Cart is ${state.quantity} × ${state.item} · ${state.variant}.` : "";
    announcement.textContent = announce ? `${stage.title} selected. ${stage.state}. Static mock only; nothing submits.${cartAnnouncement}` : "";
  };

  const moveStage = (index) => {
    if (index < 0 || index >= stages.length) return;
    state.stage = index;
    stageButtons[index]?.focus();
    render({ announce: true });
  };

  stageButtons.forEach((button, index) => {
    button.addEventListener("click", () => moveStage(index));
    button.addEventListener("keydown", (event) => {
      if (!["ArrowRight", "ArrowLeft", "Home", "End"].includes(event.key)) return;
      event.preventDefault();
      const nextIndex = event.key === "Home" ? 0 : event.key === "End" ? stages.length - 1 : (index + (event.key === "ArrowRight" ? 1 : -1) + stages.length) % stages.length;
      moveStage(nextIndex);
    });
  });

  tierButtons.forEach((button) => {
    button.addEventListener("click", () => {
      state.tier = button.dataset.tier;
      render({ announce: true });
    });
  });

  previous.addEventListener("click", () => moveStage(state.stage - 1));
  next.addEventListener("click", () => moveStage(state.stage + 1));
  reset.addEventListener("click", () => {
    state.stage = 0;
    state.tier = "base";
    state.item = "Paneer bowl";
    state.variant = "Mild";
    state.quantity = 1;
    stageButtons[0]?.focus();
    render({ announce: true });
  });

  render();
})();
