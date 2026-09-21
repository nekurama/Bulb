(() => {
  "use strict";

  window.__MOCK_TEMPLATE__ = true;

  const tiers = {
    lite: {
      kicker: "LITE / MOCK STATE",
      title: "A smaller starting shape.",
      copy: "Replace this summary with approved LITE capability language. It is a placeholder, not a product entitlement or public claim.",
      badge: "REVIEW ONLY",
      capabilities: ["[CORE WORKFLOW SLOT]", "[SINGLE CONTEXT SLOT]", "[MANUAL REVIEW SLOT]"],
      boundary: "[REPLACE WITH APPROVED LITE BOUNDARY]",
    },
    base: {
      kicker: "BASE / MOCK STATE",
      title: "A broader operating shape.",
      copy: "Replace this summary with approved BASE capability language. The differences shown here are invented review fixtures.",
      badge: "REVIEW ONLY",
      capabilities: ["[CORE WORKFLOW SLOT]", "[TEAM COORDINATION SLOT]", "[EXPANDED WORKSPACE SLOT]"],
      boundary: "[REPLACE WITH APPROVED BASE BOUNDARY]",
    },
    pro: {
      kicker: "PRO / MOCK STATE",
      title: "A more advanced shape.",
      copy: "Replace this summary with approved PRO capability language. No pricing, entitlement or availability is represented.",
      badge: "REVIEW ONLY",
      capabilities: ["[CORE WORKFLOW SLOT]", "[ADVANCED CONTROL SLOT]", "[MULTI-CONTEXT SLOT]", "[REPORTING / GOVERNANCE SLOT]"],
      boundary: "[REPLACE WITH APPROVED PRO BOUNDARY]",
    },
  };

  const flows = {
    f01: ["Admin → owner onboarding", "POC", "Screen: Admin invite / awaiting owner setup", "nekurama.chatgpt.md:L1233-L1309", "A synthetic restaurant can be created as an initiated invitation without collecting or submitting real data.", "POC state only. No owner record, WhatsApp number or invitation is created."],
    f02: ["Owner invitation and welcome", "POC", "Screen: Owner welcome / start setup", "nekurama.chatgpt.md:L1309-L1321", "The mock separates an invitation from an active restaurant and exposes a safe next step.", "POC state only. No account, message or setup session exists."],
    f03: ["Owner menu submission and verification", "POC", "Screen: Menu received / review fixture", "nekurama.chatgpt.md:L1321-L1375", "A synthetic menu moves from received to review without upload, extraction service or customer data.", "POC state only. The menu is an invented fixture, not a real restaurant menu."],
    f04: ["Ordering options, plan and activation", "LATER / NOT IMPLEMENTED", "Screen: Options / activation held", "nekurama.chatgpt.md:L1377-L1438", "The mock shows a gated placeholder only; no pricing, payment, entitlement or live claim is allowed.", "Later direction. Pricing and activation remain unresolved product/legal decisions."],
    f05: ["Onboarding state tracker", "POC", "Screen: Invited → menu → verification → held", "nekurama.chatgpt.md:L1444-L1478", "State labels are deterministic, resettable and visibly mock-only, including a failed/held state.", "POC state only. No operational queue or reminder action exists."],
    f06: ["Customer discovery and ordering", "PILOT REVIEW", "Screen: Customer menu → cart → pickup/delivery placeholder", "nekurama.chatgpt.md:L1478-L1520", "Synthetic steps are reviewable without a real customer, address, payment or delivery integration.", "Pilot-review candidate. No customer journey is connected to a real channel."],
    f07: ["Restaurant order lookup through WhatsApp", "PILOT REVIEW", "Screen: Orders / order detail / action placeholder", "nekurama.chatgpt.md:L1522-L1578", "A fictional order can be inspected and action buttons remain non-submitting placeholders.", "Pilot-review candidate. No order lookup, customer contact or state mutation is real."],
    f08: ["Restaurant dashboard operations", "PILOT REVIEW", "Screen: Orders dashboard / summary cards", "nekurama.chatgpt.md:L1588-L1620", "The mock shows a bounded operational view without live metrics, account access or persistence.", "Pilot-review candidate. Summary values are invented fixtures, not analytics."],
    f09: ["Proactive order notification", "PILOT REVIEW", "Screen: New-order notification / review", "nekurama.chatgpt.md:L1621-L1667", "A synthetic notification is announced accessibly and contains no real contact or order data.", "Pilot-review candidate. No push, WhatsApp or external notification is sent."],
    f10: ["Order state lifecycle", "PILOT REVIEW", "Screen: New → accepted → preparing → ready → completed", "nekurama.chatgpt.md:L1666-L1674", "Every state transition is local, reversible and announced; no fulfillment or payment side effect exists.", "Pilot-review candidate. State changes remain inside the browser mock."],
    f11: ["Staff accounts and permissions", "LATER / NOT IMPLEMENTED", "Screen: Owner/staff role boundary", "nekurama.chatgpt.md:L1678-L1737", "Roles are shown as placeholders only; no authentication, invite, authorization or account creation is implemented.", "Later direction. Role names do not grant access or define final RBAC."],
    f12: ["Restaurant / tenant identity model", "LATER / NOT IMPLEMENTED", "Screen: Restaurant identity / boundary note", "nekurama.chatgpt.md:L1740-L1775", "The mock keeps restaurant, owner, staff and customer concepts distinct without storing records.", "Later architecture direction. No tenant isolation or production data model is implemented."],
    f13: ["Admin restaurant oversight", "PILOT REVIEW", "Screen: Restaurant list / pending state", "nekurama.chatgpt.md:L1778-L1818", "Synthetic restaurants can be filtered by mock status without reminder, payment, cancellation or account actions.", "Pilot-review candidate. Every restaurant and status is fictional."],
    f14: ["Menu ingestion and V1 chain", "POC", "Screen: Menu → order → notify → accept → complete → confirmation", "nekurama.chatgpt.md:L1885-L1949", "The prototype explains the intended chain as labeled mock states while delivery, payment and production integrations stay out of scope.", "POC map only. The chain is not an operational readiness claim."],
  };

  const state = {
    screen: "launchpad",
    launchStep: 0,
    setupStep: 0,
    handoff: false,
    orderStep: 0,
    takeover: false,
    tier: "base",
    payment: "pending",
    fulfillment: "pickup",
    promotion: "active",
    careStep: 0,
    flow: "f01",
    lastAction: "",
  };

  const prototypeScreens = ["launchpad", "setup", "team", "orders", "commerce", "care"];
  const launchStages = ["Invite initiated", "Owner setup pending", "Menu review", "Ready to rehearse"];
  const setupStages = ["Invite received", "Menu source selected", "Extraction review", "Corrections queued", "Publish held"];
  const orderStages = ["NEW", "ACCEPTED", "PREPARING", "READY", "COMPLETED"];
  const careStages = ["Notification", "Reorder", "Cancel", "Refund", "Provider failure", "Channel disconnected", "Recovery"];

  const prototypeTabs = [...document.querySelectorAll("[data-prototype-screen]")];
  const prototypePanel = document.querySelector("#prototype-panel");
  const prototypeKicker = document.querySelector("#prototype-kicker");
  const prototypeTitle = document.querySelector("#prototype-title");
  const prototypeStage = document.querySelector("#prototype-stage");
  const prototypeCopy = document.querySelector("#prototype-copy");
  const prototypeContent = document.querySelector("#prototype-content");
  const prototypeAnnouncement = document.querySelector("#prototype-announcement");
  const prototypeReset = document.querySelector("#prototype-reset");

  const tierTabs = [...document.querySelectorAll("[data-tier]")];
  const tierPanel = document.querySelector("#tier-panel");
  const tierKicker = document.querySelector("#tier-kicker");
  const tierTitle = document.querySelector("#tier-title");
  const tierBadge = document.querySelector("#tier-badge");
  const tierCopy = document.querySelector("#tier-copy");
  const tierCapabilities = document.querySelector("#tier-capabilities");
  const tierBoundary = document.querySelector("#tier-boundary");
  const tierAnnouncement = document.querySelector("#tier-announcement");

  const flowTabs = [...document.querySelectorAll("[data-flow]")];
  const flowPanel = document.querySelector("#flow-panel");
  const flowKicker = document.querySelector("#flow-kicker");
  const flowTitle = document.querySelector("#flow-title");
  const flowMaturity = document.querySelector("#flow-maturity");
  const flowScreen = document.querySelector("#flow-screen");
  const flowSource = document.querySelector("#flow-source");
  const flowAcceptance = document.querySelector("#flow-acceptance");
  const flowNote = document.querySelector("#flow-note");
  const flowAnnouncement = document.querySelector("#flow-announcement");

  const text = (value) => String(value);
  const stageClass = (stage) => stage.startsWith("POC") ? "flow-maturity-poc" : stage.startsWith("PILOT") ? "flow-maturity-pilot" : "flow-maturity-later";

  const renderLaunchpad = () => `
    <div class="prototype-grid prototype-grid-wide">
      <div class="prototype-card prototype-card-dark">
        <p class="card-kicker">SYNTHETIC FUNNEL / F13</p>
        <h4>Restaurant pipeline</h4>
        <div class="funnel-list">
          ${launchStages.map((label, index) => `<div class="funnel-row"><span>${String(index + 1).padStart(2, "0")}</span><strong>${label}</strong><em>${[4, 2, 1, 0][index]} MOCK</em></div>`).join("")}
        </div>
        <p class="prototype-footnote">Invented counts only. No admin action, reminder or customer record exists.</p>
      </div>
      <div class="prototype-card">
        <p class="card-kicker">ADMIN ONBOARDING / F01 F02 F05</p>
        <h4>${launchStages[state.launchStep]}</h4>
        <p>Frozen Biryani House / synthetic fixture / Hyderabad placeholder</p>
        <div class="status-line"><span class="state-dot" aria-hidden="true"></span> ${launchStages[state.launchStep]}</div>
        <button class="button button-small" type="button" data-prototype-action="advance-launch">Advance mock onboarding <span aria-hidden="true">→</span></button>
      </div>
      <div class="prototype-card prototype-card-accent">
        <p class="card-kicker">SOURCE-MAPPED SCREEN</p>
        <strong>Admin can see what needs attention.</strong>
        <p>Replace this card with approved funnel/analytics language only after evidence and product review.</p>
      </div>
    </div>
  `;

  const renderSetup = () => `
    <div class="prototype-grid prototype-grid-wide">
      <div class="prototype-card">
        <p class="card-kicker">OWNER SETUP / F02 F03 F04 F05</p>
        <h4>${setupStages[state.setupStep]}</h4>
        <div class="setup-rail">${setupStages.map((label, index) => `<span class="${index <= state.setupStep ? "is-done" : ""}"><b>${index + 1}</b>${label}</span>`).join("")}</div>
        <button class="button button-small" type="button" data-prototype-action="advance-setup">Advance setup state <span aria-hidden="true">→</span></button>
      </div>
      <div class="prototype-card prototype-card-paper">
        <p class="card-kicker">SYNTHETIC MENU SOURCE</p>
        <h4>Menu image / PDF / text</h4>
        <div class="fixture-file"><span aria-hidden="true">▧</span><span><strong>example-menu.fixture</strong><small>invented / not uploaded</small></span></div>
        <div class="fixture-list"><span>Chicken Biryani <b>MOCK PRICE</b></span><span>Paneer 65 <b>MOCK PRICE</b></span><span>Family Combo <b>MOCK PRICE</b></span></div>
        <p class="prototype-footnote">Extraction, corrections and publish are illustrated states. No file picker or publish request exists.</p>
      </div>
      <div class="prototype-card prototype-card-lime">
        <p class="card-kicker">CORRECTION LOOP</p>
        <strong>${state.setupStep >= 2 ? "Review before any publish state." : "Waiting for a synthetic source."}</strong>
        <p>Human correction is visible as a boundary, not an automated claim.</p>
        <button class="button button-small" type="button" data-prototype-action="hold-publish">Hold publish preview</button>
      </div>
    </div>
  `;

  const renderTeam = () => `
    <div class="prototype-grid prototype-grid-wide">
      <div class="prototype-card prototype-card-dark">
        <p class="card-kicker">ROLE MAP / F11 F12</p>
        <h4>Owner → staff → handoff</h4>
        <div class="role-stack"><span>OWNER <b>management placeholder</b></span><span>STAFF <b>operations placeholder</b></span><span>CUSTOMER <b>participant placeholder</b></span></div>
        <p class="prototype-footnote">No login, invite, permission check or tenant record is implemented.</p>
      </div>
      <div class="prototype-card">
        <p class="card-kicker">HUMAN TAKEOVER / F09 F10</p>
        <h4>${state.handoff ? "Human active" : "Automation suggested"}</h4>
        <p>${state.handoff ? "A fictional staff member owns the next step. Release is still local." : "A fictional signal can request a human review without leaving the mock."}</p>
        <button class="button button-small" type="button" data-prototype-action="toggle-handoff">${state.handoff ? "Release mock handoff" : "Request mock handoff"}</button>
      </div>
      <div class="prototype-card prototype-card-accent">
        <p class="card-kicker">PERMISSION SLOT</p>
        <strong>[REPLACE WITH APPROVED STAFF BOUNDARY]</strong>
        <p>Role labels are source-mapped review placeholders, not authorization.</p>
      </div>
    </div>
  `;

  const renderOrders = () => `
    <div class="prototype-grid prototype-grid-wide">
      <div class="prototype-card prototype-card-dark">
        <p class="card-kicker">ORDER DESK / F07 F08 F10</p>
        <h4>Order #1042 / ${orderStages[state.orderStep]}</h4>
        <div class="order-meta"><span>Ravi / fictional customer</span><span>MOCK TOTAL</span><span>Pickup placeholder</span></div>
        <div class="order-state-rail">${orderStages.map((stage, index) => `<span class="${index <= state.orderStep ? "is-done" : ""}">${stage}</span>`).join("")}</div>
        <button class="button button-small" type="button" data-prototype-action="advance-order">Advance order state <span aria-hidden="true">→</span></button>
      </div>
      <div class="prototype-card">
        <p class="card-kicker">TAKEOVER STATE</p>
        <h4>${state.takeover ? "Human takeover active" : "Automation available"}</h4>
        <p>${state.takeover ? "Staff owns this fictional conversation while the order state remains visible." : "The fictional desk can request a human without creating an account or message."}</p>
        <button class="button button-small" type="button" data-prototype-action="toggle-takeover">${state.takeover ? "Release takeover" : "Request takeover"}</button>
      </div>
      <div class="prototype-card prototype-card-paper">
        <p class="card-kicker">ACTION SAFETY</p>
        <div class="action-chip-row"><span>ACCEPT / MOCK</span><span>READY / MOCK</span><span>REFUND / LATER</span></div>
        <p class="prototype-footnote">All controls are local state transitions. No order, payment or customer record is changed.</p>
      </div>
    </div>
  `;

  const renderCommerce = () => {
    const paymentLabel = { pending: "Payment pending", failed: "Provider failure", retried: "Retry illustrated", reconciled: "Reconciliation illustrated" }[state.payment];
    return `
      <div class="prototype-grid prototype-grid-wide">
        <div class="prototype-card">
          <p class="card-kicker">TIER / F04 F14</p>
          <h4>${state.tier.toUpperCase()} capability boundary</h4>
          <div class="tier-mini-row">${Object.keys(tiers).map((tier) => `<span class="${tier === state.tier ? "is-current" : ""}">${tier.toUpperCase()}</span>`).join("")}</div>
          <button class="button button-small" type="button" data-prototype-action="cycle-tier">Cycle tier mock <span aria-hidden="true">→</span></button>
        </div>
        <div class="prototype-card prototype-card-dark">
          <p class="card-kicker">PAYMENT / F04</p>
          <h4>${paymentLabel}</h4>
          <div class="status-line"><span class="state-dot" aria-hidden="true"></span> No money moves in this illustration.</div>
          <div class="button-row"><button class="button button-small" type="button" data-prototype-action="retry-payment">Retry mock</button><button class="button button-small button-dark-alt" type="button" data-prototype-action="reconcile-payment">Reconcile mock</button></div>
        </div>
        <div class="prototype-card prototype-card-lime">
          <p class="card-kicker">FULFILLMENT / F06 F14</p>
          <h4>${state.fulfillment === "pickup" ? "Pickup state" : "Delivery state"}</h4>
          <p>Delivery, quote and provider behavior remain placeholders.</p>
          <button class="button button-small" type="button" data-prototype-action="toggle-fulfillment">Toggle fulfillment</button>
        </div>
        <div class="prototype-card prototype-card-paper">
          <p class="card-kicker">PROMOTION / COMBO</p>
          <h4>${state.promotion === "active" ? "Mock combo active" : "Mock combo expired"}</h4>
          <p>[COMBO RULE SLOT] · [EXPIRY SLOT] · no stacking or price claim</p>
          <button class="button button-small" type="button" data-prototype-action="toggle-promotion">Toggle expiry</button>
        </div>
      </div>
    `;
  };

  const renderCare = () => {
    const label = careStages[state.careStep];
    const action = label === "Provider failure" ? "Retry provider illustration" : label === "Channel disconnected" ? "Recover channel illustration" : "Advance care state";
    return `
      <div class="prototype-grid prototype-grid-wide">
        <div class="prototype-card prototype-card-dark">
          <p class="card-kicker">CARE / F09 F10</p>
          <h4>${label}</h4>
          <div class="care-rail">${careStages.map((item, index) => `<span class="${index <= state.careStep ? "is-done" : ""}">${item}</span>`).join("")}</div>
          <button class="button button-small" type="button" data-prototype-action="advance-care">${action} <span aria-hidden="true">→</span></button>
        </div>
        <div class="prototype-card prototype-card-accent">
          <p class="card-kicker">NOTIFICATION / REORDER / CANCEL</p>
          <h4>Human-readable recovery</h4>
          <p>Reorder, cancel and refund are review illustrations. Provider and channel failures stop safely instead of silently succeeding.</p>
        </div>
        <div class="prototype-card prototype-card-paper">
          <p class="card-kicker">BOUNDARY</p>
          <div class="action-chip-row"><span>NO SEND</span><span>NO REFUND</span><span>NO PROVIDER</span></div>
          <p class="prototype-footnote">No notification, reorder, refund, provider request or channel reconnect leaves this browser.</p>
        </div>
      </div>
    `;
  };

  const renderPrototype = ({ announce = false } = {}) => {
    const screen = state.screen;
    const meta = {
      launchpad: ["S01 / POC / F01 F02 F05 F13", "Admin launchpad", "A synthetic platform view for onboarding and funnel review.", renderLaunchpad],
      setup: ["S02 / POC / F02 F03 F04 F05 F14", "Owner setup room", "Menu source, extraction review, corrections and publish-held states.", renderSetup],
      team: ["S03 / LATER / F11 F12", "Team and handoff", "Staff permissions and human takeover boundaries without auth.", renderTeam],
      orders: ["S04 / PILOT REVIEW / F07 F08 F09 F10", "Restaurant order desk", "New to completed with human takeover and action safety.", renderOrders],
      commerce: ["S05 / PILOT REVIEW / F04 F06 F14", "Commerce illustration", "Tier limits, payment states, fulfillment modes and promotion expiry.", renderCommerce],
      care: ["S06 / PILOT REVIEW / F09 F10", "Care and recovery", "Notifications, reorder, cancel, refund, provider and channel recovery states.", renderCare],
    }[screen];

    prototypeTabs.forEach((tab) => {
      const active = tab.dataset.prototypeScreen === screen;
      tab.classList.toggle("is-active", active);
      tab.setAttribute("aria-selected", String(active));
      tab.tabIndex = active ? 0 : -1;
    });

    prototypePanel.setAttribute("aria-labelledby", `prototype-tab-${screen}`);
    prototypeKicker.textContent = meta[0];
    prototypeTitle.textContent = meta[1];
    prototypeCopy.textContent = meta[2];
    prototypeStage.textContent = "MOCK STATE";
    prototypeContent.innerHTML = meta[3]();
    prototypeAnnouncement.textContent = announce ? `${meta[1]} selected. Static mock state only. Nothing submits.${state.lastAction ? ` ${state.lastAction}.` : ""}` : "";
  };

  const renderTiers = ({ announce = false } = {}) => {
    const tier = tiers[state.tier];
    tierTabs.forEach((tab) => {
      const active = tab.dataset.tier === state.tier;
      tab.classList.toggle("is-active", active);
      tab.setAttribute("aria-selected", String(active));
      tab.tabIndex = active ? 0 : -1;
    });
    tierPanel.setAttribute("aria-labelledby", `tier-tab-${state.tier}`);
    tierKicker.textContent = tier.kicker;
    tierTitle.textContent = tier.title;
    tierBadge.textContent = tier.badge;
    tierCopy.textContent = tier.copy;
    tierCapabilities.innerHTML = tier.capabilities.map((capability, index) => `<li><span aria-hidden="true">${String(index + 1).padStart(2, "0")}</span>${capability}</li>`).join("");
    tierBoundary.textContent = tier.boundary;
    tierAnnouncement.textContent = announce ? `${tier.kicker}. Invented capability comparison. No pricing or entitlement decision.` : "";
  };

  const renderFlows = ({ announce = false } = {}) => {
    const flow = flows[state.flow];
    flowTabs.forEach((tab) => {
      const active = tab.dataset.flow === state.flow;
      tab.classList.toggle("is-active", active);
      tab.setAttribute("aria-selected", String(active));
      tab.tabIndex = active ? 0 : -1;
    });
    flowPanel.setAttribute("aria-labelledby", `flow-tab-${state.flow}`);
    flowKicker.textContent = `${state.flow.toUpperCase()} / ${flow[1]}`;
    flowTitle.textContent = flow[0];
    flowMaturity.textContent = flow[1];
    flowMaturity.className = `flow-maturity ${stageClass(flow[1])}`;
    flowScreen.textContent = flow[2];
    flowSource.textContent = flow[3];
    flowAcceptance.textContent = flow[4];
    flowNote.textContent = flow[5];
    flowAnnouncement.textContent = announce ? `${state.flow.toUpperCase()} selected. ${flow[0]}. Internal mock only.` : "";
  };

  const renderAll = ({ announce = false } = {}) => {
    renderPrototype({ announce });
    renderTiers({ announce });
    renderFlows({ announce });
  };

  const resetState = () => {
    state.screen = "launchpad";
    state.launchStep = 0;
    state.setupStep = 0;
    state.handoff = false;
    state.orderStep = 0;
    state.takeover = false;
    state.tier = "base";
    state.payment = "pending";
    state.fulfillment = "pickup";
    state.promotion = "active";
    state.careStep = 0;
    state.flow = "f01";
    state.lastAction = "Room reset to the launchpad baseline";
    prototypeTabs[0]?.focus();
    renderAll({ announce: true });
  };

  const actionHandlers = {
    "advance-launch": () => { state.launchStep = (state.launchStep + 1) % launchStages.length; },
    "advance-setup": () => { state.setupStep = (state.setupStep + 1) % setupStages.length; },
    "hold-publish": () => { state.setupStep = 4; },
    "toggle-handoff": () => { state.handoff = !state.handoff; },
    "advance-order": () => { state.orderStep = (state.orderStep + 1) % orderStages.length; },
    "toggle-takeover": () => { state.takeover = !state.takeover; },
    "cycle-tier": () => { state.tier = { lite: "base", base: "pro", pro: "lite" }[state.tier]; },
    "retry-payment": () => { state.payment = state.payment === "failed" ? "retried" : "failed"; },
    "reconcile-payment": () => { state.payment = "reconciled"; },
    "toggle-fulfillment": () => { state.fulfillment = state.fulfillment === "pickup" ? "delivery" : "pickup"; },
    "toggle-promotion": () => { state.promotion = state.promotion === "active" ? "expired" : "active"; },
    "advance-care": () => { state.careStep = (state.careStep + 1) % careStages.length; },
  };

  const bindTabKeys = (tabs, keyPair, activate) => {
    tabs.forEach((tab, index) => {
      tab.addEventListener("click", () => activate(tab));
      tab.addEventListener("keydown", (event) => {
        if (![keyPair[0], keyPair[1], "Home", "End"].includes(event.key)) return;
        event.preventDefault();
        const nextIndex = event.key === "Home" ? 0 : event.key === "End" ? tabs.length - 1 : (index + (event.key === keyPair[0] ? 1 : -1) + tabs.length) % tabs.length;
        tabs[nextIndex].focus();
        activate(tabs[nextIndex]);
      });
    });
  };

  bindTabKeys(prototypeTabs, ["ArrowRight", "ArrowLeft"], (tab) => {
    if (prototypeScreens.includes(tab.dataset.prototypeScreen)) {
      state.screen = tab.dataset.prototypeScreen;
      state.lastAction = "";
      renderAll({ announce: true });
    }
  });
  bindTabKeys(tierTabs, ["ArrowRight", "ArrowLeft"], (tab) => {
    if (tiers[tab.dataset.tier]) {
      state.tier = tab.dataset.tier;
      state.lastAction = "";
      renderAll({ announce: true });
    }
  });
  bindTabKeys(flowTabs, ["ArrowDown", "ArrowUp"], (tab) => {
    if (flows[tab.dataset.flow]) {
      state.flow = tab.dataset.flow;
      state.lastAction = "";
      renderAll({ announce: true });
    }
  });

  document.addEventListener("click", (event) => {
    const action = event.target.closest("[data-prototype-action]")?.dataset.prototypeAction;
    if (action && actionHandlers[action]) {
      actionHandlers[action]();
      state.lastAction = {
        "advance-launch": "Onboarding state advanced",
        "advance-setup": "Setup state advanced",
        "hold-publish": "Publish preview held",
        "toggle-handoff": "Handoff state changed",
        "advance-order": "Order state advanced",
        "toggle-takeover": "Takeover state changed",
        "cycle-tier": "Tier mock cycled",
        "retry-payment": "Payment retry illustration changed",
        "reconcile-payment": "Reconciliation illustration shown",
        "toggle-fulfillment": "Fulfillment illustration changed",
        "toggle-promotion": "Promotion expiry illustration changed",
        "advance-care": "Care and recovery state advanced",
      }[action] || "Mock state changed";
      renderAll({ announce: true });
    }
  });

  prototypeReset?.addEventListener("click", resetState);

  renderAll();
})();
