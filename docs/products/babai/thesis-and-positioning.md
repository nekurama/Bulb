---
status: partial
owner: BABAI
last-reviewed: 2026-09-15
sources:
  - nekurama/Bulb#1
  - nekurama/Bulb#2
  - nekurama/Bulb#3
  - historical ManojVysyaraju/bulb#1
---

# Thesis & Positioning

## 1. Current definition — confirmed

> **BABAI is a business operating platform built around WhatsApp.**  
> **It helps businesses run their customer and operational workflows through AI and automation.**

This is the canonical two-sentence definition. The supporting capability set includes orders, customer engagement, catalogs, payments, fulfillment, staff operations and related workflows.

Sources: `nekurama/Bulb#1`; historical `ManojVysyaraju/bulb#1`.

## 2. Category — confirmed

BABAI belongs to the **Business Operating Platform** category.

Qualified form:

> **WhatsApp-native Business Operating Platform powered by AI and automation.**

The category is deliberately broader than WhatsApp ordering and broader than AI/chatbots. WhatsApp is the differentiating interface/relationship layer; AI and automation are enabling mechanisms rather than the category itself.

Core deterministic business controls such as state, authorization, payments, workflows and audit must not depend on AI.

## 3. Initial wedge — confirmed

**Restaurants are the MVP wedge.**

Restaurant is the first market in which BABAI should prove customer value, operational value and willingness to pay. Restaurant is **not** the permanent category boundary.

The initial restaurant proposition is a WhatsApp-native operating platform for restaurants.

## 4. Long-term product direction — confirmed direction

The broader platform is a **WhatsApp-native B2B2C local-business operating/commerce layer** for businesses with repeat purchases and conversational operations.

Potential future verticals include:

- Restaurants
- Marts / supermarkets
- General stores
- Medical shops
- Similar local businesses where WhatsApp is already a meaningful customer communication/order channel

Expansion should specialize the common operating model rather than require a core rewrite.

Canonical conceptual model:

`Business/Merchant → Catalog/Inventory → Customer → Conversation → Order → Payment → Fulfillment → Staff Operations`

Restaurants specialize this with menus, items, kitchen/restaurant operations and delivery; future verticals can introduce SKU/inventory and vertical-specific rules.

**Constraint:** broader-vertical expansion remains a strategic direction, not a reason to dilute the restaurant MVP. Evidence from restaurants comes first.

## 5. Customer / buyer model — confirmed

BABAI is **B2B**.

- The business/merchant is the customer and buyer.
- The business's customers are participants in BABAI workflows, not the primary SaaS buyer.
- BABAI should strengthen the business's direct relationship with its own customers rather than insert BABAI as a consumer marketplace intermediary.

## 6. Business-owned relationship — confirmed

The end customer normally interacts with the **business's own WhatsApp identity**.

The business owns the customer relationship and WhatsApp identity; BABAI provides the operating/software layer.

This is a strategic foundation, not merely an integration choice:

`Business-owned customer relationship → BABAI operating layer`

BABAI should avoid creating unnecessary platform lock-in around customer identity, WhatsApp numbers or business assets.

## 7. Channel philosophy — confirmed

**WhatsApp-first, not WhatsApp-only.**

Core principle:

> **If an operation can reasonably be performed through WhatsApp, the user should not be forced to open our website/app.**

WhatsApp is the conversational/action surface for customers and staff.

Web exists where it provides materially better interaction for:

- Dense configuration
- High-density operations
- Comparison
- Bulk actions
- Analytics
- Recovery/configuration work
- Multi-branch administration

Operational framing:

> **Web = see everything. WhatsApp = know what needs attention and act immediately.**

The same authenticated identity/context should move between WhatsApp and web without requiring a second account or losing context.

## 8. Core workflow proposition — confirmed direction

BABAI is intended to operate around the business lifecycle rather than only one transaction surface:

`Discovery → Catalog/Menu → Cart → Order → Payment → Business Operations → Fulfillment → Completion → Feedback → Reorder`

For restaurants, this includes the relevant preparation, support, delivery and customer-engagement stages.

The earlier Tadka → Thali → Dawat three-tier model was useful exploration, but it is **not current product positioning**. Those names and the Dawat product identity are historical, not active direction.

## 9. What BABAI is NOT — confirmed

BABAI is not:

- A consumer marketplace.
- A Swiggy/Zomato-style intermediary.
- A POS/ERP replacement.
- Merely a WhatsApp API wrapper.
- Merely an AI chatbot.

These boundaries matter because each alternative would lead the product toward a materially different business model and architecture.

## 10. Differentiation direction — confirmed at principle level

The intended differentiation is not simply **"we have WhatsApp ordering."**

The stronger proposition is:

> **The operating layer around the business-owned customer relationship.**

The current differentiation stack is:

`Business WhatsApp + Staff Operations + Operations Surface + Workflow Automation + Human Intervention + Business-owned Customer Relationship`

The exact competitive positioning and proof points remain a separate validation topic.

## 11. AI's role — confirmed

AI is an enabling mechanism, not the product category.

AI can be used where it creates leverage, such as conversational assistance and menu/catalog extraction, but authoritative business state and safety-critical decisions remain deterministic and policy-controlled.

This protects BABAI from becoming an AI-demo product whose core business correctness depends on model behavior.

## 12. Product/company relationship — confirmed

Current brand architecture:

`NEKURAMA → BABAI → future products/verticals`

BABAI is the product brand of NEKURAMA, not a separate company in the current company architecture.

## 13. Historical naming evolution — context only

The product passed through several names/concepts during exploration. They are not active positioning:

- **DAWAT:** temporary project/product identity; killed because it was too food/feast-specific for the broader platform.
- **PINGU:** killed due to trademark/brand collision concerns.
- **BUJJI:** killed due to a direct technology trademark conflict.
- **BOLO:** initially attractive, later rejected because deeper technology/market collision evidence made it strategically weak.
- **BABAI:** selected as the product brand.

The current product name decision is **BABAI**. The brand decision is distinct from final legal/trademark clearance.

## 14. Brand selection — confirmed

BABAI was selected after human feedback:

| Name | Votes | Share |
|---|---:|---:|
| **BABAI** | **26/41** | **63.4%** |
| BAYYA | 11/41 | 26.8% |
| BOLO | 4/41 | 9.8% |

The strongest segment signal was restaurant preference for BABAI, while marts/general retail showed stronger BAYYA preference. The broader platform direction therefore remains compatible with BABAI while preserving the evidence that BAYYA may resonate differently in future retail expansion.

This does **not** mean trademark clearance is complete. Professional clearance remains required before filing/launch, particularly given international BABAI technology/business usage identified during research.

## 15. Decisions intentionally NOT carried forward

The following historical material should not be treated as current product truth:

- Tadka / Thali / Dawat as the active product packaging/identity.
- Dawat as the product name.
- Restaurant-only permanent platform scope.
- WhatsApp-only product definition.
- AI-chatbot positioning.
- Consumer-marketplace positioning.
- Any temporary pricing attached to the old Tadka/Thali/Dawat model.

## 16. Pending / to discuss in Step 1

The following areas have not yet been accepted as fully resolved merely because earlier comments discussed them:

1. **Core promise:** What durable business outcome should BABAI promise above the functional definition?
2. **Target customer / ICP:** Which restaurant profiles are the best initial customers, and which should we explicitly avoid?
3. **Buyer/economic decision-maker:** Who feels the pain, who decides, and who pays?
4. **Personas:** Owner, operator/admin, staff and end customer responsibilities/needs.
5. **Differentiation:** What specific competitive advantage can we defend and prove?
6. **Formal positioning statement:** The market-facing positioning beyond the canonical definition.
7. **Messaging hierarchy:** Tagline → promise → explanation → proof.
8. **Brand personality:** How BABAI should sound/behave consistently.
9. **Expansion criteria:** What evidence must exist before moving from restaurants to another vertical.

These are deliberately left pending. We will discuss them **after the known/agreed decisions above have been captured**.

## Sources / decision history

- Current strategy and architecture: `nekurama/Bulb#1`
- Product execution context: `nekurama/Bulb#3`
- Company context where product/company boundary matters: `nekurama/Bulb#2`
- Historical chronological evidence: `ManojVysyaraju/bulb#1`

The historical issues are evidence/history. This file is the current durable knowledge candidate and should be updated only when a decision is confirmed, superseded or deliberately reopened.