(() => {
  "use strict";

  window.__ROOT_MOCK_TEMPLATE__ = true;

  const tiers = {
    lite: {
      name: "LITE",
      pilotPrice: "₹1,999",
      postPilotPrice: "₹2,499",
      onboarding: "₹2,500",
      description: "Low-friction entry for a single-location pickup workflow.",
      allow: ["WhatsApp menu", "Basic pickup ordering", "Confirmations", "Limited human inbox"],
      deny: ["Payment/POS integration", "Delivery workflow"],
      gated: ["Volume limits", "Pricing/entitlement approval"],
    },
    base: {
      name: "BASE",
      pilotPrice: "₹5,999",
      postPilotPrice: "₹7,499",
      onboarding: "₹5,000",
      description: "The core restaurant workflow for meaningful WhatsApp order volume.",
      allow: ["Payments", "Modifiers", "Pickup slots", "Status updates", "Human takeover", "Analytics"],
      deny: ["No unreviewed workflow changes"],
      gated: ["Provider fees", "One standard integration"],
    },
    pro: {
      name: "PRO",
      pilotPrice: "₹12,999",
      postPilotPrice: "₹14,999",
      onboarding: "₹10,000",
      description: "Integration-ready scope for multi-outlet or operationally complex restaurants.",
      allow: ["Multi-outlet routing", "Bounded POS/KDS/API integrations", "Advanced automation", "Defined support/SLA"],
      deny: ["No unreviewed workflow changes", "No unbounded workflow changes"],
      gated: ["Integration scope", "Provider fees", "₹19,999 premium quote"],
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
      cards: [["TIER", "BASE / ₹5,999 pilot"], ["PAYMENT", "Pending / failure / retry"], ["FULFILLMENT", "Pickup slots / provider-gated"] ],
      note: "Pilot and post-pilot pricing are internal direction only; no money moves.",
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

  const consolidatedScripts = [
    {
      participant: "CUSTOMER + BABAI",
      messages: [
        ["CU", "CUSTOMER", "Hi Babai, I want to order from Green Bowl.", "12:05"],
        ["BA", "BABAI", "Sure. I can show the menu and help you order for delivery.", "12:05"],
        ["CU", "CUSTOMER", "Show me rice bowls and starters.", "12:06"],
        ["BA", "BABAI", "Here are today's rice bowls, starters and delivery options.", "12:06"],
        ["CU", "CUSTOMER", "Open the chicken biryani.", "12:07"],
        ["BA", "BABAI", "Chicken Biryani is available. Want to customize it?", "12:07"],
      ],
    },
    {
      participant: "CUSTOMER + BABAI",
      messages: [
        ["CU", "CUSTOMER", "Babai, order 2 chicken biryani. I want medium spicy and extra raita.", "12:08"],
        ["BA", "BABAI", "Added: 2 × Chicken Biryani, medium spicy, extra raita.", "12:08"],
        ["CU", "CUSTOMER", "Also add one samosa as the starter.", "12:09"],
        ["BA", "BABAI", "Added one samosa. Delivery is available to your saved address.", "12:09"],
        ["CU", "CUSTOMER", "Make it delivery, please.", "12:10"],
        ["BA", "BABAI", "Delivery selected. Estimated arrival is 35–45 minutes.", "12:10"],
      ],
    },
    {
      participant: "CUSTOMER + BABAI",
      messages: [
        ["BA", "BABAI", "Your cart is ready: 2 biryani, medium spicy, extra raita and 1 samosa.", "12:11"],
        ["CU", "CUSTOMER", "Keep the order as shown.", "12:11"],
        ["BA", "BABAI", "Delivery address and order items are ready for confirmation.", "12:12"],
        ["CU", "CUSTOMER", "Confirm the cart.", "12:12"],
        ["BA", "BABAI", "Confirmed. Mock total is ₹680. I’ll send the payment link next.", "12:12"],
        ["CU", "CUSTOMER", "Send it.", "12:13"],
      ],
    },
    {
      participant: "CUSTOMER + BABAI",
      messages: [
        ["BA", "BABAI", "Here is the secure payment link for the delivery order.", "12:13"],
        ["CU", "CUSTOMER", "Paid.", "12:14"],
        ["BA", "BABAI", "Payment received. I’m sending the paid order to the restaurant.", "12:14"],
        ["CU", "CUSTOMER", "Please let me know when the food starts processing.", "12:15"],
        ["BA", "BABAI", "The restaurant has the order and payment confirmation.", "12:15"],
        ["CU", "CUSTOMER", "Okay, I’ll wait for the status.", "12:16"],
      ],
    },
    {
      participant: "RESTAURANT + BABAI",
      messages: [
        ["RE", "RESTAURANT", "Payment confirmed. We’re processing the order now.", "12:17"],
        ["BA", "BABAI", "Your order is accepted and food preparation has started.", "12:17"],
        ["CU", "CUSTOMER", "How long until it leaves the restaurant?", "12:20"],
        ["RE", "RESTAURANT", "Food is being packed for delivery.", "12:22"],
        ["BA", "BABAI", "Status changed: preparing → packed.", "12:22"],
        ["CU", "CUSTOMER", "Thanks for the update.", "12:23"],
      ],
    },
    {
      participant: "CUSTOMER + DELIVERY",
      messages: [
        ["BA", "BABAI", "A delivery partner has been assigned to your order.", "12:25"],
        ["DP", "DELIVERY PARTNER", "I’m on the way to collect your order.", "12:26"],
        ["CU", "CUSTOMER", "Can I see the delivery status?", "12:27"],
        ["BA", "BABAI", "Your order is out for delivery. Estimated arrival: 12 minutes.", "12:27"],
        ["DP", "DELIVERY PARTNER", "Collected the order and heading to your address.", "12:29"],
        ["CU", "CUSTOMER", "I’ll be ready.", "12:30"],
      ],
    },
    {
      participant: "CUSTOMER + DELIVERY",
      messages: [
        ["DP", "DELIVERY PARTNER", "I’m at your door with the order.", "12:42"],
        ["CU", "CUSTOMER", "Received. Everything arrived.", "12:43"],
        ["BA", "BABAI", "Order delivered. How was your meal?", "12:44"],
        ["CU", "CUSTOMER", "Great. The biryani was exactly right.", "12:46"],
        ["BA", "BABAI", "Thanks. Your feedback has been shared with the restaurant.", "12:46"],
        ["CU", "CUSTOMER", "I’ll order again next week.", "12:47"],
      ],
    },
    {
      participant: "CUSTOMER + BABAI",
      messages: [
        ["CU", "CUSTOMER", "Babai, repeat my last order but change the starter.", "D+3"],
        ["BA", "BABAI", "I found your last order: 2 biryani, extra raita and 1 samosa.", "D+3"],
        ["CU", "CUSTOMER", "Replace the samosa with a paneer tikka.", "D+3"],
        ["BA", "BABAI", "Updated: paneer tikka instead of samosa. Keep the biryani medium spicy?", "D+3"],
        ["CU", "CUSTOMER", "Yes. Show me the updated total.", "D+3"],
        ["BA", "BABAI", "Updated cart ready. The next order starts from here.", "D+3"],
      ],
    },
  ];

  const stagePresentations = [
    ["S01 / DISCOVERY · MOCK", "A customer starts a direct order.", "BROWSING"],
    ["S02 / CUSTOMIZE · MOCK", "The order becomes specific.", "CUSTOMIZING"],
    ["S03 / CART REVIEW · MOCK", "The cart is confirmed before payment.", "CART READY"],
    ["S04 / PAYMENT · MOCK", "Payment stays in the same thread.", "PAYMENT"],
    ["S05 / RESTAURANT PROCESSING · MOCK", "The restaurant starts the order.", "PROCESSING"],
    ["S06 / DELIVERY · MOCK", "The order moves through delivery.", "OUT FOR DELIVERY"],
    ["S07 / DELIVERED + FEEDBACK · MOCK", "Delivery ends with a useful follow-up.", "DELIVERED"],
    ["S08 / REORDER LOOP · MOCK", "A reorder starts with one change.", "REORDER"],
  ];

  consolidatedScripts.forEach((conversation, index) => {
    stages[index].participant = conversation.participant;
    stages[index].messages = conversation.messages;
    stages[index].kicker = stagePresentations[index][0];
    stages[index].title = stagePresentations[index][1];
    stages[index].state = stagePresentations[index][2];
  });

  const state = { stage: 0, messageStep: 0, tier: "base", item: "Chicken biryani", variant: "Medium spicy", quantity: 2 };
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

  const getConversation = (stageIndex) => stages[stageIndex].messages || stages[stageIndex].bubbles;

  const render = ({ announce = false } = {}) => {
    const stage = stages[state.stage];
    const tier = tiers[state.tier];
    const conversation = getConversation(state.stage);
    const visibleMessages = conversation.slice(0, state.messageStep + 1);
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
    kicker.textContent = `${stage.kicker} · ${stage.participant}`;
    title.textContent = stage.title;
    status.textContent = stage.state;
    progress.textContent = `SCENARIO ${String(state.stage + 1).padStart(2, "0")} / ${String(stages.length).padStart(2, "0")} · MESSAGE ${String(state.messageStep + 1).padStart(2, "0")} / ${String(conversation.length).padStart(2, "0")}`;
    previous.disabled = state.stage === 0 && state.messageStep === 0;
    next.disabled = state.stage === stages.length - 1 && state.messageStep === conversation.length - 1;
    previous.textContent = state.messageStep === 0 && state.stage > 0 ? "← Previous scenario" : "← Previous message";
    next.textContent = state.messageStep === conversation.length - 1 && state.stage < stages.length - 1 ? "Next scenario →" : "Next message →";
    const embeddedControls = state.stage === 0 && state.messageStep >= 3 ? `
      <div class="chat-bubble outgoing">
        <span class="chat-meta">BA · MENU REPLY</span>
        <div class="local-controls" aria-label="Menu reply controls">
          <div><span class="control-label">CHOOSE A REPLY</span><div class="choice-row">
          <button class="choice-button ${state.item === "Chicken biryani" ? "is-selected" : ""}" type="button" data-local-action="item" data-value="Chicken biryani">Chicken biryani</button>
          <button class="choice-button ${state.item === "Paneer bowl" ? "is-selected" : ""}" type="button" data-local-action="item" data-value="Paneer bowl">Paneer bowl</button>
          <button class="choice-button ${state.item === "Family combo" ? "is-selected" : ""}" type="button" data-local-action="item" data-value="Family combo">Family combo</button>
          </div></div>
          <p class="control-note">Reply stays inside this mock conversation.</p>
        </div>
      </div>
    ` : state.stage === 1 && state.messageStep >= 1 ? `
      <div class="chat-bubble outgoing">
        <span class="chat-meta">CU · EDIT ORDER</span>
        <div class="local-controls" aria-label="Order edit controls">
          <div><span class="control-label">SPICE</span><div class="choice-row">
          <button class="choice-button ${state.variant === "Medium spicy" ? "is-selected" : ""}" type="button" data-local-action="variant" data-value="Medium spicy">Medium spicy</button>
          <button class="choice-button ${state.variant === "Mild" ? "is-selected" : ""}" type="button" data-local-action="variant" data-value="Mild">Mild</button>
          </div></div>
          <div><span class="control-label">QUANTITY</span><div class="quantity-control">
            <button class="choice-button" type="button" data-local-action="quantity" data-value="-1" aria-label="Decrease quantity">−</button>
            <strong>${state.quantity}</strong>
            <button class="choice-button" type="button" data-local-action="quantity" data-value="1" aria-label="Increase quantity">+</button>
          </div></div>
          <div class="cart-review"><span class="control-label">CART REPLY</span><strong>${state.quantity} × ${state.item} · ${state.variant} · extra raita</strong><small>₹${state.quantity * 320 + 40} mock total</small></div>
        </div>
      </div>
    ` : "";
    body.innerHTML = `
      <div class="chat-stack">
        ${visibleMessages.map(([avatar, label, message, time], index) => `
          <div class="chat-bubble ${index % 2 ? "outgoing" : ""}">
            <span class="chat-meta">${avatar} · ${label} · ${time}</span>
            <p>${message}</p>
          </div>
        `).join("")}
        ${embeddedControls}
      </div>
    `;
    requestAnimationFrame(() => {
      body.scrollTo({
        top: body.scrollHeight,
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
      });
    });
    tierDetail.innerHTML = `
      <div><p class="eyebrow">SELECTED INTERNAL DIRECTION</p><h3>${tier.name} · ${tier.pilotPrice} pilot</h3><p>${tier.description} Post-pilot target: ${tier.postPilotPrice}/month. One-time onboarding target: ${tier.onboarding}. Pre-GST mock; no payment action.</p></div>
      <div class="tier-groups">
        <strong>ALLOW</strong><ul>${tier.allow.map((capability) => `<li>${capability}</li>`).join("")}</ul>
        <strong>DENY</strong><ul>${tier.deny.map((capability) => `<li>${capability}</li>`).join("")}</ul>
        <strong>GATED</strong><ul>${tier.gated.map((capability) => `<li>${capability}</li>`).join("")}</ul>
      </div>
    `;
    const cartAnnouncement = state.stage === 3 ? ` Cart is ${state.quantity} × ${state.item} · ${state.variant} with extra raita.` : "";
    announcement.textContent = announce ? `${stage.participant} conversation message ${state.messageStep + 1} of ${conversation.length}. Static mock only; nothing submits.${cartAnnouncement}` : "";
  };

  const moveStage = (index) => {
    if (index < 0 || index >= stages.length) return;
    state.stage = index;
    state.messageStep = 0;
    stageButtons[index]?.focus();
    render({ announce: true });
  };

  const moveConversation = (direction) => {
    const conversation = getConversation(state.stage);
    const atStart = state.messageStep === 0;
    const atEnd = state.messageStep === conversation.length - 1;
    if (direction > 0 && atEnd && state.stage < stages.length - 1) {
      state.stage += 1;
      state.messageStep = 0;
      stageButtons[state.stage]?.focus();
    } else if (direction < 0 && atStart && state.stage > 0) {
      state.stage -= 1;
      state.messageStep = getConversation(state.stage).length - 1;
      stageButtons[state.stage]?.focus();
    } else {
      state.messageStep = Math.max(0, Math.min(conversation.length - 1, state.messageStep + direction));
    }
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
      state.messageStep = 0;
      render({ announce: true });
    });
  });

  previous.addEventListener("click", () => moveConversation(-1));
  next.addEventListener("click", () => moveConversation(1));
  reset.addEventListener("click", () => {
    state.stage = 0;
    state.messageStep = 0;
    state.tier = "base";
    state.item = "Chicken biryani";
    state.variant = "Medium spicy";
    state.quantity = 2;
    stageButtons[0]?.focus();
    render({ announce: true });
  });

  render();

  (() => {
    const restaurantStages = [
      {
        kicker: "R01 / ONBOARDING · MOCK",
        title: "A restaurant starts with a conversation.",
        state: "ONBOARDING",
        participant: "OWNER + BABAI",
        messages: [
          ["OW", "OWNER", "Babai, I want to onboard Green Bowl.", "09:00"],
          ["BA", "BABAI", "Happy to help. I’ll ask for the owner, location, menu and operating hours.", "09:00"],
          ["OW", "OWNER", "I’m sending the restaurant location now.", "09:01"],
          ["BA", "BABAI", "Location received. Please send the current menu and your preferred plan.", "09:01"],
          ["OW", "OWNER", "Menu attached. Start me on BASE for one branch.", "09:03"],
          ["BA", "BABAI", "Onboarding checklist complete. I’ll prepare the branch for review.", "09:03"],
        ],
      },
      {
        kicker: "R02 / MENU UPDATE · MOCK",
        title: "Menu changes happen by chatting.",
        state: "MENU UPDATE",
        participant: "OWNER + BABAI",
        messages: [
          ["OW", "OWNER", "Babai, update the menu: chicken biryani is ₹320 today.", "10:05"],
          ["BA", "BABAI", "I found Chicken Biryani. Should I update the price for this branch only?", "10:05"],
          ["OW", "OWNER", "Yes, this branch only. Also hide the old family combo.", "10:06"],
          ["BA", "BABAI", "Price update drafted and family combo marked unavailable.", "10:06"],
          ["OW", "OWNER", "Publish both changes.", "10:07"],
          ["BA", "BABAI", "Published. Customers now see the new price and availability.", "10:07"],
        ],
      },
      {
        kicker: "R03 / COMBO + PROMOTION · MOCK",
        title: "A promotion can expire by itself.",
        state: "TODAY ONLY",
        participant: "OWNER + BABAI",
        messages: [
          ["OW", "OWNER", "Create a combo: biryani, raita and a drink.", "11:10"],
          ["BA", "BABAI", "What price and expiry should I use for the combo?", "11:10"],
          ["OW", "OWNER", "₹399, only for today, ending at 11:59 PM.", "11:11"],
          ["BA", "BABAI", "Combo drafted with today-only expiry at 11:59 PM.", "11:11"],
          ["OW", "OWNER", "Publish the offer.", "11:12"],
          ["BA", "BABAI", "Published. I’ll remove it automatically after the expiry time.", "11:12"],
        ],
      },
      {
        kicker: "R04 / ORDER CHANNEL · MOCK",
        title: "New orders arrive with actions attached.",
        state: "ORDER DESK",
        participant: "RESTAURANT + BABAI",
        messages: [
          ["BA", "BABAI", "New order #1048: 2 biryani, medium spicy, extra raita, delivery.", "12:15"],
          ["OW", "OWNER", "Accept order #1048.", "12:16"],
          ["BA", "BABAI", "Accepted. Customer has been notified.", "12:16"],
          ["OW", "OWNER", "Mark it preparing.", "12:18"],
          ["BA", "BABAI", "Status changed: accepted → preparing.", "12:18"],
          ["OW", "OWNER", "Mark ready when the kitchen finishes.", "12:28"],
        ],
      },
      {
        kicker: "R05 / HUMAN SUPPORT ASSIGNMENT · MOCK",
        title: "The owner routes a difficult order to a person.",
        state: "ASSIGNMENT",
        participant: "OWNER + STAFF CHANNEL",
        messages: [
          ["BA", "BABAI", "Support needed for order #1048: customer requested a replacement and payment is pending.", "12:29"],
          ["OW", "OWNER", "Assign this to Staff 1.", "12:29"],
          ["BA", "BABAI", "Staff 1 selected. I’m sending the order details and pending amount.", "12:30"],
          ["OW", "OWNER", "Keep the main order channel updated.", "12:30"],
          ["BA", "BABAI", "Main channel linked to the staff resolution.", "12:30"],
          ["ST", "STAFF 1", "I received the support request and I’m contacting the customer.", "12:31"],
        ],
      },
      {
        kicker: "R06 / STAFF RESOLUTION · MOCK",
        title: "Staff resolves the customer issue in a separate chat.",
        state: "PAYMENT PENDING",
        participant: "STAFF 1 + CUSTOMER",
        messages: [
          ["ST", "STAFF 1", "We can replace the starter with paneer tikka. The difference is ₹100.", "12:32"],
          ["CU", "CUSTOMER", "That works. Send me the pending payment link.", "12:32"],
          ["ST", "STAFF 1", "Payment link sent for ₹100. I’ll keep the order on hold.", "12:33"],
          ["CU", "CUSTOMER", "Paid the pending amount.", "12:34"],
          ["ST", "STAFF 1", "Payment received. Replacement confirmed.", "12:34"],
          ["BA", "BABAI", "Main channel update: order fully paid and support resolved.", "12:35"],
        ],
      },
      {
        kicker: "R07 / READY + DELIVERY HANDOFF · MOCK",
        title: "A ready order leaves with a verified handoff.",
        state: "OUT FOR DELIVERY",
        participant: "RESTAURANT + DELIVERY",
        messages: [
          ["OW", "OWNER", "Order #1048 is ready for pickup.", "12:45"],
          ["BA", "BABAI", "Pickup code generated: 4821. Share it only with the assigned delivery partner.", "12:45"],
          ["DP", "DELIVERY PARTNER", "I’m at the restaurant. Pickup code is 4821.", "12:50"],
          ["OW", "OWNER", "Code verified. Food handed over.", "12:50"],
          ["BA", "BABAI", "Status changed: ready → picked up → out for delivery.", "12:51"],
          ["BA", "BABAI", "Order #1048 delivered. Customer and restaurant have been notified.", "13:18"],
        ],
      },
      {
        kicker: "R08 / VOUCHER + STATISTICS · MOCK",
        title: "Support recovery becomes the next order.",
        state: "INSIGHTS",
        participant: "STAFF 2 + OWNER",
        messages: [
          ["CU", "CUSTOMER", "I need help with my next order.", "D+2"],
          ["ST", "STAFF 2", "I’ve created a ₹100 voucher for your next order.", "D+2"],
          ["CU", "CUSTOMER", "I used the voucher and got ₹100 off.", "D+4"],
          ["OW", "OWNER", "Babai, show me last week’s statistics.", "D+7"],
          ["BA", "BABAI", "Last week: 184 orders, 91% accepted, 168 delivered, 12 support cases.", "D+7"],
          ["OW", "OWNER", "Show the details by day and channel.", "D+7"],
          ["BA", "BABAI", "Summary ready: orders, delivery time, voucher usage and unresolved cases by day.", "D+7"],
        ],
      },
    ];

    const rail = document.querySelector("#restaurant-story-rail");
    const body = document.querySelector("#restaurant-body");
    const kicker = document.querySelector("#restaurant-kicker");
    const title = document.querySelector("#restaurant-title");
    const status = document.querySelector("#restaurant-state");
    const announcement = document.querySelector("#restaurant-announcement");
    const progress = document.querySelector("#restaurant-progress");
    const previous = document.querySelector("#restaurant-previous");
    const next = document.querySelector("#restaurant-next");
    if (!rail || !body || !kicker || !title || !status || !announcement || !progress || !previous || !next) return;

    const state = { stage: 0, messageStep: 0, notice: "" };
    rail.innerHTML = restaurantStages.map((stage, index) => `
      <button class="story-step${index === 0 ? " is-active" : ""}" type="button" role="tab" aria-selected="${index === 0}" aria-controls="restaurant-panel" tabindex="${index === 0 ? "0" : "-1"}" data-restaurant-stage="${index}">
        <span class="step-number">${String(index + 1).padStart(2, "0")}</span><span><strong>${stage.kicker.split(" / ")[1].split(" · ")[0]}</strong><small>${stage.state.toLowerCase()}</small></span>
      </button>
    `).join("");
    const stageButtons = [...rail.querySelectorAll(".story-step")];

    const renderControl = () => {
      const controls = [
        [["Attach location", "Send menu", "Choose BASE"], ["Location attached.", "Menu received.", "BASE selected."]],
        [["Update price", "Hide item", "Publish changes"], ["Price update drafted.", "Item hidden.", "Menu changes published."]],
        [["Today only", "Set 7-day expiry", "Publish combo"], ["Today-only expiry selected.", "Seven-day expiry selected.", "Combo published."]],
        [["Accept order", "Mark preparing", "Mark ready"], ["Order accepted.", "Order is preparing.", "Order marked ready."]],
        [["Assign Staff 1", "Assign Staff 2", "Assign Staff 3"], ["Assigned to Staff 1.", "Assigned to Staff 2.", "Assigned to Staff 3."]],
        [["Send ₹100 link", "Mark paid", "Resolve support"], ["Pending link sent.", "Pending amount marked paid.", "Support resolved."]],
        [["Generate code", "Verify pickup code", "Mark delivered"], ["Pickup code generated.", "Pickup code verified.", "Order marked delivered."]],
        [["Create ₹100 voucher", "Apply voucher", "Show last week"], ["Voucher created.", "Voucher applied.", "Weekly statistics opened."]],
      ];
      const options = controls[state.stage];
      if (!options) return "";
      return `
        <div class="chat-bubble outgoing">
          <span class="chat-meta">RESTAURANT · CHAT ACTION</span>
          <div class="local-controls" aria-label="Restaurant chat actions">
            <div><span class="control-label">REPLY WITH AN ACTION</span><div class="choice-row">
              ${options[0].map((label, index) => `<button class="choice-button" type="button" data-restaurant-action="${state.stage}:${index}">${label}</button>`).join("")}
            </div></div>
            <p class="control-note">${state.notice || "Actions update this local conversation only."}</p>
          </div>
        </div>
      `;
    };

    const render = ({ announce = false } = {}) => {
      const stage = restaurantStages[state.stage];
      const conversation = stage.messages;
      const visibleMessages = conversation.slice(0, state.messageStep + 1);
      stageButtons.forEach((button, index) => {
        const active = index === state.stage;
        button.classList.toggle("is-active", active);
        button.setAttribute("aria-selected", String(active));
        button.tabIndex = active ? 0 : -1;
      });
      kicker.textContent = `${stage.kicker} · ${stage.participant}`;
      title.textContent = stage.title;
      status.textContent = stage.state;
      progress.textContent = `SCENARIO ${String(state.stage + 1).padStart(2, "0")} / ${String(restaurantStages.length).padStart(2, "0")} · MESSAGE ${String(state.messageStep + 1).padStart(2, "0")} / ${String(conversation.length).padStart(2, "0")}`;
      previous.disabled = state.stage === 0 && state.messageStep === 0;
      next.disabled = state.stage === restaurantStages.length - 1 && state.messageStep === conversation.length - 1;
      previous.textContent = state.messageStep === 0 && state.stage > 0 ? "← Previous scenario" : "← Previous message";
      next.textContent = state.messageStep === conversation.length - 1 && state.stage < restaurantStages.length - 1 ? "Next scenario →" : "Next message →";
      body.innerHTML = `
        <div class="chat-stack">
          ${visibleMessages.map(([avatar, label, message, time], index) => `
            <div class="chat-bubble ${index % 2 ? "outgoing" : ""}">
              <span class="chat-meta">${avatar} · ${label} · ${time}</span>
              <p>${message}</p>
            </div>
          `).join("")}
          ${renderControl()}
        </div>
      `;
      requestAnimationFrame(() => {
        body.scrollTo({
          top: body.scrollHeight,
          behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
        });
      });
      announcement.textContent = announce ? `${stage.participant} conversation message ${state.messageStep + 1} of ${conversation.length}. Static mock only; nothing submits.` : "";
    };

    const moveConversation = (direction) => {
      const conversation = restaurantStages[state.stage].messages;
      if (direction > 0 && state.messageStep === conversation.length - 1 && state.stage < restaurantStages.length - 1) {
        state.stage += 1;
        state.messageStep = 0;
        state.notice = "";
        stageButtons[state.stage]?.focus();
      } else if (direction < 0 && state.messageStep === 0 && state.stage > 0) {
        state.stage -= 1;
        state.messageStep = restaurantStages[state.stage].messages.length - 1;
        state.notice = "";
        stageButtons[state.stage]?.focus();
      } else {
        state.messageStep = Math.max(0, Math.min(conversation.length - 1, state.messageStep + direction));
      }
      render({ announce: true });
    };

    stageButtons.forEach((button, index) => {
      button.addEventListener("click", () => {
        state.stage = index;
        state.messageStep = 0;
        state.notice = "";
        render({ announce: true });
      });
      button.addEventListener("keydown", (event) => {
        if (!["ArrowRight", "ArrowLeft", "Home", "End"].includes(event.key)) return;
        event.preventDefault();
        const nextIndex = event.key === "Home" ? 0 : event.key === "End" ? restaurantStages.length - 1 : (index + (event.key === "ArrowRight" ? 1 : -1) + restaurantStages.length) % restaurantStages.length;
        state.stage = nextIndex;
        state.messageStep = 0;
        state.notice = "";
        stageButtons[nextIndex]?.focus();
        render({ announce: true });
      });
    });

    body.addEventListener("click", (event) => {
      if (!(event.target instanceof Element)) return;
      const control = event.target.closest("[data-restaurant-action]");
      if (!control || !body.contains(control)) return;
      const [stageIndex, actionIndex] = control.dataset.restaurantAction.split(":").map(Number);
      const actionText = [
        ["Location attached.", "Menu received.", "BASE selected."],
        ["Price update drafted.", "Item hidden.", "Menu changes published."],
        ["Today-only expiry selected.", "Seven-day expiry selected.", "Combo published."],
        ["Order accepted.", "Order is preparing.", "Order marked ready."],
        ["Assigned to Staff 1.", "Assigned to Staff 2.", "Assigned to Staff 3."],
        ["Pending link sent.", "Pending amount marked paid.", "Support resolved."],
        ["Pickup code generated.", "Pickup code verified.", "Order marked delivered."],
        ["Voucher created.", "Voucher applied.", "Weekly statistics opened."],
      ][stageIndex][actionIndex];
      state.notice = actionText;
      render({ announce: true });
    });

    previous.addEventListener("click", () => moveConversation(-1));
    next.addEventListener("click", () => moveConversation(1));
    render();
  })();
})();
