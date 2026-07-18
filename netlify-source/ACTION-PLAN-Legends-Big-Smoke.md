# Legends Big Smoke — Karl Malone Event · Action Items & Deliverables
**Client:** Cuban Creations (Andrew Wilson) · French Quarter, New Orleans
**Event:** "Legends Big Smoke" — a cigar night hosted by NBA Hall of Famer **Karl Malone**
**Source of truth:** Andrew Wilson portfolio call, **June 13, 2026** (1h57m). Transcript + report in `meetings/2026-06-13_CubanCreations_Toulouse/`.
**This doc prepared:** June 2026 · Spectral Vision

---

## 1. What the meeting actually locked in (recall)

| Item | Confirmed in the June 13 call |
|---|---|
| **Host** | Karl Malone (NBA Hall of Famer), in person |
| **Concept** | "Legends Big Smoke" cigar festival — first event under a repeatable festival brand |
| **Timing** | Raiders @ Saints **opening home weekend** (exact date Andrew to confirm) |
| **Venue** | Cuban Creations terrace (Toulouse Terrace), 533 Toulouse St, French Quarter |
| **What's included** | **Over $100 in retail cigars per ticket** + **7 hours open premium bar** (top-shelf, not well) + the live event with Karl Malone |
| **Tickets** | Two-to-three tiers. Working numbers: **$250 standard / $350 VIP**, with an **early-bird** and a possible **GA**. Early-bird framed at **$200**. Andrew finalizes. |
| **Checkout** | Stripe (Apple Pay + card). Capture first name, last name, email only. Live paid-list + refund ability required. |
| **E-ticket** | "Admit One," built from the **Legends big-star emblem** Andrew sent. Emailed on payment. |
| **Door** | Auto-generated Google Sheet of buyers; Andrew prints and checks off. No scanner for v1. |
| **Domain** | **Standalone `legendsbigsmoke.com`** (GoDaddy) — deliberately **NOT** under Cuban Creations, so Stripe/Google don't tobacco-flag the card processing. Stripe industry = hospitality / celebrity meet-and-greet. |
| **Promotion** | Likely no paid ads (Instagram reach). List on Eventbrite as a hybrid but drive buyers to the site to dodge fees. |
| **Reusable** | Build the flow so it clones for Toulouse Terrace events (NYE, Mardi Gras) with a separate Stripe sub-account per business. |
| **Hard deadline** | Event page + ticketing **by June 23, 2026**. |

### ⚠️ The cigar-brand question — honest answer
You asked me to recall **which cigar brands are being given away**. I went back through the full transcript and the deliverables: **the June 13 call did NOT name a giveaway brand list.** It only commits to **"over $100 in retail cigars per ticket."** The only brand spoken aloud was **Opus X**, and that was an example for a *blog/SEO content* idea about the lounge — **not** a confirmed event giveaway. *Cigar Aficionado* came up only as the publication that featured Cuban Creations.

**Action:** get the confirmed featured-makers list from Andrew (he sources from his distributor). The landing page is built so named brands drop straight into the "Tonight's Humidor" section. Until then the page shows cigar **profiles** (Connecticut / Habano / Maduro / Limited Reserve), not invented brand claims.

---

## 2. Deliverables — what I built in this pass

✅ **Landing / offer page** — `index.html` + `assets/styles.css` + `assets/main.js`
- Styled to match the Cuban Creations brand (dark espresso + Cuban gold, French-Quarter warmth, gold serif wordmark matching their oval sign).
- Karl Malone featured in the hero + a "Meet the Legend" section (public-domain placeholder photos; see licensing flag).
- Full conversion structure: question hero → host credibility band → meet the legend → all-inclusive value stack ($400+ value / from $200) → humidor lineup → 3-tier tickets with early-bird anchor + scarcity → how-it-works → venue gallery (real Cuban Creations photos) → FAQ → final CTA → footer with NAP.
- Effects layer, mobile sticky CTA, reduced-motion gated, responsive. Screenshot-verified desktop + mobile.

✅ **This action plan** — recall + task list + owners.

> Already drafted in the meeting folder (reuse, don't redo): event page **copy + ticketing spec**, corporate/conventions page, Bloody Mary SEO article, camera-kit rec.

---

## 3. Action items to take this live (owners + status)

### A. Decisions needed from Andrew (blockers) — **Andrew**
- [ ] **Confirmed event date** (opening home weekend → a calendar date).
- [ ] **Final ticket prices + tiers** — lock early-bird / standard / VIP, decide if GA is added, and **what the VIP perks actually are**.
- [ ] **Featured cigar brands** for the giveaway (the named-makers list).
- [ ] **Refund / transfer policy** wording.
- [ ] **Legends big-star emblem** logo file (for site + e-ticket) and the **real Cuban Creations logo PNG**.
- [ ] **Official, licensed Karl Malone photos** + written OK on **name & likeness** usage from Malone's representation (see legal note below).
- [ ] Buy **`legendsbigsmoke.com`** on GoDaddy and point DNS at the build.

### B. Payments / ticketing — **Andrew + Spectral**
- [ ] Andrew: stand up **Stripe** with EIN + bank link, create a **Legends sub-account**, set **industry = hospitality** (not tobacco), pass credentials to Tom/Spectral.
- [ ] Spectral: wire **Stripe-hosted checkout** (Apple Pay + card) to the `#checkout` anchor; capture first/last/email only.
- [ ] Spectral: **paid-buyer list** that auto-writes to a **Google Sheet** for the door + refund capability.
- [ ] Spectral: **e-ticket** generator ("Admit One" + Legends emblem), emailed on payment confirmation. Optional print-ready ticket file (PrintRunner).

### C. Site / content — **Spectral**
- [ ] Swap the **real logo**, **official Karl Malone photos**, **named cigar brands**, **final price/date** into the flagged `<!-- TODO -->` slots.
- [ ] Add event **schema.org/Event** (name, date, location, offers) + correct meta/OG once date is set.
- [ ] **Deploy to Netlify** (staging), screenshot-verify, then point `legendsbigsmoke.com` once Andrew confirms.
- [ ] Decide host placement: page is **styled to Cuban Creations** per request, but per the meeting the **purchase flow should live on the standalone domain** to protect card processing. Recommend: Cuban-Creations-styled page **on** legendsbigsmoke.com.

### D. Promotion — **Andrew + Spectral**
- [ ] Eventbrite hybrid listing that points to the site.
- [ ] Instagram push from Cuban Creations + partner venues once live.

---

## 4. Legal / compliance flags (read before launch)
1. **Name & likeness.** Using Karl Malone's name and photo to *sell tickets* is commercial use of his publicity rights. Get explicit written authorization through his representation (Andrew, as host, should have this). The current photos are **public-domain placeholders** and must be replaced with **licensed event photography**.
2. **Tobacco/payment risk.** Keep checkout on the standalone domain with Stripe industry set to hospitality, per the meeting. Do not route ticket payments through any Cuban Creations tobacco-flagged processor.
3. **21+.** Cigars + open bar = strictly 21+. ID-at-door language is on the page.
4. **Cigar brand claims.** Don't publish specific giveaway brands until Andrew confirms them.

---

## 5. Build location
`/Users/markmichaels/.claude/jobs/4328b5d2/legends-big-smoke/`
`index.html` · `assets/styles.css` · `assets/main.js` · `assets/img/` · `README.md` · this file.
