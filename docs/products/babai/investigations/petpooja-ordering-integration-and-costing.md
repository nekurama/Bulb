# BABAI Investigation — Petpooja, POS Economics & Ordering Integrations

Research date: 2026-09-26
Scope: Conversation and analysis on Petpooja business model, pricing evidence, API/integration model, and Swiggy/Zomato relationship, with implications for BABAI.

## 1. Executive summary

Petpooja is primarily a restaurant operating system / POS SaaS platform. Its center of gravity is restaurant operations: POS/billing, KOT, inventory, CRM, reports, online ordering, QR ordering, loyalty, kitchen/staff workflows and third-party integrations.

BABAI should not initially position itself as another POS. The stronger architectural position is a WhatsApp-native customer/direct-order layer that integrates with the restaurant's existing POS (including Petpooja) rather than replacing it.

Core strategic distinction:
- Petpooja: restaurant operating system / operational backbone.
- BABAI: WhatsApp-native customer relationship, direct ordering and conversational operations layer.

Preferred integration architecture:
Customer -> WhatsApp -> BABAI -> Petpooja API -> restaurant POS/KOT/kitchen.

## 2. Petpooja business model

Petpooja follows a SaaS + add-on / ecosystem model:
- Core restaurant POS subscription.
- Expansion through modules/add-ons such as KDS, Captain App, inventory/CRM/online ordering/loyalty/analytics/website/QR ordering and related integrations.
- Integration ecosystem with many third-party services.

The public pricing page currently presents package tiers such as Core, Growth and Scale and notes that pricing can vary by location; exact localized pricing is not always exposed as a simple public list.

Petpooja also operates an integration-partner ecosystem and advertises 150+ integrations.

## 3. Petpooja pricing evidence

Historical official Petpooja material:
- Standard POS price was documented as about ₹10,000 including tax for year 1.
- Renewal was documented as about ₹7,500/year.
- Historical package included core restaurant POS capabilities.

Independent restaurant-community evidence:
- A Reddit restaurant-industry discussion independently referenced Petpooja at around ₹10,000/year. This is anecdotal, not an invoice.

Current secondary evidence (reported by EasyKOT after checking Petpooja pricing/merchant Marketplace material in September 2026):
- Core/Base roughly ₹12,000/year.
- Growth roughly ₹20,000/year.
- Scale roughly ₹30,000/year.
- Marketing tiers roughly ₹20,000–₹40,000/year.
- Reported existing-customer Marketplace prices:
  - POS renewal ~₹7,500/year.
  - POS 3-year package ~₹16,000.
  - KDS ~₹3,000/year.
  - Captain App ~₹4,500/year.
  - Reported POS + Growth bundle ~₹20,000/year.
These are secondary evidence and should not be treated as contractual Petpooja pricing.

A competitor source modeled a much higher all-in five-year cost for a medium Hyderabad outlet (~₹2.9 lakh over 5 years, about ₹58k/year equivalent). Treat this only as a high-end/all-in competitor scenario, not baseline Petpooja subscription pricing.

No credible public franchise-owner disclosure was found stating exact negotiated Petpooja rates per outlet.

## 4. Petpooja company-scale context

Previously researched public company figures:
- FY24 revenue reported at ~₹77.2 Cr.
- FY25 revenue reported at ~₹102.3 Cr.
- FY25 reported net loss ~₹21.4 Cr.
- 2025 funding round reported at ~₹137 Cr / ~$15.4M.
- Reported valuation around ~$96.5M.
- Company/public materials reported 100,000+ restaurants and 7M+ daily orders.
These figures are useful for directional benchmarking but definitions such as customer/restaurants served versus active paying accounts can vary.

A crude FY25 revenue divided by 100k restaurants gives ~₹10,230/year per restaurant (~₹853/month), but this is NOT actual subscription ARPU because the denominator is a current/installed-base metric and revenue includes more than pure POS subscriptions.

## 5. Petpooja API / BABAI integration model

Research indicates Petpooja has an online-ordering API and an integration-partner program.

Documented/independently catalogued capabilities include:
- Menu/catalog retrieval and sync.
- Order creation / save_order into Petpooja POS.
- Order status callbacks/webhooks such as accept/reject/food-ready.
- Menu update callbacks.
- Item stock / availability controls.
- Store/outlet availability controls.
- Authentication involving app_key, app_secret and access token in the documented ecosystem.

Important caveat:
Public API documentation proves technical capability, but does NOT prove that BABAI can self-sign up for unrestricted production access or that API usage is free. Commercial terms, rate limits, required Petpooja plan, credential issuance and allowed data retention need direct confirmation from Petpooja.

Preferred approach:
- Approach Petpooja as an official integration partner, not merely as a software customer.
- Ask for sandbox/test credentials and production onboarding path.
- Negotiate no per-order API fee if possible.
- Negotiate no extra restaurant API surcharge for pilot customers if possible.
- Ask for higher production rate limits and webhooks.
- Explore official marketplace/integration listing.

Possible commercial models:
A. BABAI pays Petpooja per API/order -> least attractive due to gross-margin pressure.
B. Restaurant pays existing Petpooja subscription; BABAI pays/receives no API fee -> preferred baseline.
C. Petpooja pays/revenue-shares with BABAI or distributes BABAI as an ecosystem app -> strategically valuable if BABAI becomes an official WhatsApp ordering layer.

The strategic target should be:
Restaurant pays BABAI subscription (e.g. conceptually ₹499–₹1,499/month depending on value), while Petpooja remains the operational backend and existing Petpooja subscription remains in place. Pricing numbers here are BABAI hypotheses, not validated market prices.

## 6. Swiggy / Zomato relationship with Petpooja

Important distinction:
- A restaurant still needs to be onboarded with Swiggy/Zomato as a merchant.
- Having Petpooja does NOT automatically create a Swiggy/Zomato merchant account.
- Petpooja then acts as the operational/POS integration layer.

Typical architecture:
Restaurant -> Swiggy merchant account
Restaurant -> Zomato merchant account
Restaurant -> Petpooja POS
Then:
Swiggy/Zomato <-> Petpooja POS <-> restaurant kitchen

Petpooja's material says multiple third-party ordering channels can be consolidated into the POS, and it has stated zero Petpooja commission for integrating third-party aggregators; restaurants still pay the aggregator's own commercial fees.

Zomato's POS integration API supports menu/order/outlet integration and communicates order states between Zomato and POS vendors. Zomato materials identify Petpooja as a key POS partner and describe the Petpooja/Zomato integration relationship.

Swiggy/Zomato therefore function as marketplace/order-acquisition channels; Petpooja functions as the restaurant's operational hub.

## 7. BABAI positioning implication

Avoid:
"Another restaurant POS with WhatsApp ordering."

Stronger:
"WhatsApp-native direct ordering and customer relationship layer that works with the restaurant's existing POS."

Conceptual flow:
Customer -> WhatsApp -> BABAI -> Petpooja -> KOT/kitchen.

Existing aggregator flow can remain:
Customer -> Swiggy/Zomato -> Petpooja -> kitchen.

Therefore BABAI can coexist with Swiggy, Zomato and Petpooja.

Long-term:
If ecosystem economics justify it, BABAI could later integrate more deeply with Zomato/Swiggy. But direct Zomato POS integration has meaningful prerequisites/scale requirements, so the initial path should be via Petpooja or other POS integration rather than direct aggregator integrations.

## 8. Open questions for Petpooja

Before implementation, confirm:
1. Eligibility and process for production API credentials.
2. Whether a formal integration-partner agreement is required.
3. API pricing: per restaurant, per order, subscription, or free for partners.
4. Whether a restaurant must be on a specific Petpooja plan.
5. Whether one BABAI integration can connect many restaurants.
6. Rate limits and webhook guarantees.
7. Sandbox/test environment availability.
8. Allowed storage/use of customer/order data.
9. Whether BABAI can create orders on behalf of restaurants.
10. Whether BABAI can be listed in Petpooja's integration marketplace.
11. SLA/support/escalation expectations.
12. Handling of refunds, cancellations, partial payments, discounts and delivery/packing charges.

## 9. Key conclusion

The strongest current model is:

Restaurant keeps Petpooja.
Restaurant keeps Swiggy/Zomato accounts where desired.
BABAI becomes the WhatsApp-native direct-order/customer layer.
BABAI sends orders into Petpooja.
Petpooja remains the restaurant operational backbone.

The commercial objective should be to obtain official integration-partner status and avoid a per-order toll from Petpooja. The most valuable long-term outcome may be distribution/revenue-share with Petpooja rather than paying Petpooja for API calls.

## 10. Source-quality notes

High confidence:
- Petpooja is a restaurant POS/operations platform.
- Petpooja has an integration-partner ecosystem.
- Swiggy/Zomato merchant onboarding remains separate from Petpooja.
- Petpooja can integrate external ordering channels.
- Zomato has POS integration APIs.

Good but secondary:
- Current exact Petpooja package/add-on prices listed above.
- Merchant Marketplace renewal/add-on figures.
- Current restaurant/order scale figures where based on company/media reporting.

Anecdotal:
- Restaurant-community reference around ₹10k/year.

Do not treat competitor-derived high-end TCO calculations as standard Petpooja subscription pricing.
