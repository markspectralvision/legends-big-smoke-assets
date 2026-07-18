# Legends Big Smoke — Landing/Offer Page (Cuban Creations × Karl Malone)

Self-contained static landing page. Open `index.html` directly or deploy the folder.

## Stack & design
- Plain HTML/CSS/JS, no build step. Fonts via Google Fonts (DM Serif Display + Manrope).
- Palette: warm near-black `#14110B` + Cuban gold `#C8A24A`/`#E8C870`, French-Quarter olive + ember accents — matched to the Cuban Creations oval sign and storefront.
- Effects: scroll progress bar, reveal-on-scroll, button shine, hover lifts, mobile sticky CTA. All gated by `prefers-reduced-motion`.

## Page sections
nav → hero (question headline, Karl Malone) → host stat band → meet the legend → all-inclusive value stack → tonight's humidor → 3-tier tickets → how it works → venue gallery → FAQ → final CTA → footer (NAP + likeness disclaimer).

## QC capture
Add `?cap=1` to the URL to collapse the `100vh` hero so a tall headless window screenshots the full page. Screenshots in folder: `shot-hero/full/fullcap/tail/mobile`.

## Image `data-slot` map (what to swap)
| slot / file | current | replace with |
|---|---|---|
| `karl-hero` (hero) | `karl-malone-barksdale-portrait-pd.jpg` (public domain) | **official licensed Karl Malone photo** |
| `karl-portrait` (legend) | `karl-malone-barksdale-pd.jpg` (public domain) | **official licensed Karl Malone photo** |
| nav/footer brand wordmark | CSS-recreated "Cuban Creations" | **real Cuban Creations logo PNG (white variant)** |
| venue gallery (8 imgs) | real Cuban Creations photos ✓ | keep / refresh as desired |
| cigar cards | profiles (Connecticut/Habano/Maduro/Reserve) | **named brands once Andrew confirms** |

Karl Malone images sourced from Wikimedia Commons (public-domain copyright). PD covers **copyright**, NOT publicity/likeness — see pre-launch.

## Pre-launch TODO (also tracked in ACTION-PLAN)
- [ ] Real Cuban Creations logo + Legends big-star emblem
- [ ] Official, **licensed** Karl Malone photos + **name/likeness authorization**
- [ ] Confirmed **event date** → update hero/FAQ + add `Event` schema + OG meta
- [ ] Final **prices/tiers/VIP perks**; confirm if GA added
- [ ] **Named cigar brands** (meeting only confirmed "$100+ retail cigars")
- [ ] Refund policy wording
- [ ] Wire **Stripe** checkout (Apple Pay + card) to `#checkout`; buyer list → Google Sheet; e-ticket email
- [ ] Buy **legendsbigsmoke.com**, deploy to Netlify, point DNS
- [ ] Keep payments on the **standalone domain** w/ Stripe industry = hospitality (tobacco-flag protection)

## Deploy (house standard)
```
netlify api createSite --data '{"body":{"name":"legends-big-smoke"}}'
netlify deploy --prod --dir . --site <id>
```
Then screenshot-verify live before sharing.
