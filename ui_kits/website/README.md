# Website UI kit — hargrovefirm.com

Recreation of the **live** Hargrove Firm homepage. Full spec, verbatim copy and the hero's exact values live in `../../guidelines/site-reference.md` — read that first; the live site is the model for all future design.

- `index.html` — the page, plus the keyframes/hover CSS the hero needs (line reveal, marquee, black-hover pills).
- `site.jsx` — sections on `window`: `WebsiteApp` (whole page), `SiteHeader`, `SiteHero`, `SiteLogoStrip`, `SiteDifference`, `SitePlatform`, `SiteAdvisorSegment`, `SiteStatBand`, `SiteTestimonials`, `SiteClosingCTA`, `SiteFooter`.

Composes `Button`, `Card`, `Logo` from `_ds_bundle.js`; icons via Lucide (CDN).

## The hero is the client's own code — do not rewrite it
The hero is **not** reconstructed in JSX. It is injected verbatim from the production source (`uploads/hero-6c-4line-staticna-karta.html`), split into two files:
- `hero.css` — the whole `<style>` block, verbatim (`.hgx6*` classes).
- `hero-markup.js` — `window.HargroveHeroHTML` (the `<section class="hgx6">`, including the 1,248-dot US map and all eight partner vectors) plus `window.HargroveHeroInit`, the page's own init script.

`Hero()` in `site.jsx` injects the markup and calls `HargroveHeroInit()` once on mount. **That init script clones the ticker row itself** for the seamless marquee — never duplicate the row in React, or every logo appears twice.

To update the hero: replace `hero.css` + `hero-markup.js` from a new client export. Do not hand-edit the values.

What it contains: navy tonal gradient `#16335D → #0A1C38`, radial light, dotted US map at right, ALL-CAPS Inter 900 headline that is **two-tone** (lines 1–2 white, lines 3–4 `#C9D6EA`) revealed line by line, white + ghost pills that both go **black** on hover, and the partner marquee with feathered edges.

## Interactions
Advisor / Client / Enterprise tabs swap the whole segment block (all three copy sets are verbatim). Platform steps `01`–`04` are clickable. The `$400+` stat counts up on load. Partner strip marquees and dims on hover.

## Partner logos
The strip renders the **real partner vectors**, inline, from `partner-logos.js` (`window.HargrovePartnerLogos`) — all eight in live-site order: CARSON · MARINER · Wealth Enhancement · SEIA · MERIT · RWA · compound · TMG. Extracted verbatim from the production hero source (`uploads/hero section hargrove firm`). Each keeps its own `viewBox` and width, with `fill:currentColor` so the white / opacity / hover-dim treatment applies. **Never retype a partner name as text, and never redraw one** — these are third-party trademarks. To add or swap a logo, add an entry to `partner-logos.js`; nothing else needs touching.

## Dotted US map
The brand's signature background graphic, in `us-map.js` (`window.HargroveUSMap`) — extracted verbatim from the production hero source: `viewBox="0 0 570 370"`, `fill="#9FC2F0"`, 1,248 dots across **12 `<g>` groups**, each with its own negative `animation-delay` so the map shimmers rather than blinking as one. Used twice: hero (right side, `opacity:.17`, `.14` under 1150px, hidden under 760px) and behind the stat band. The pulse keyframes (`opacity .2 → .85`, `3.6s ease-in-out infinite`) and the `prefers-reduced-motion` settle at `.55` live in `index.html` under `.hg-map-svg`. Never substitute a texture, photo, or hand-drawn SVG.

## Placeholders — real assets still needed
Two rasters are not in the HTML source and remain labelled placeholders:
1. **Advisor portal screenshot** in the Platform section — grab one from `../portal/`.
2. **Testimonial portraits** — round, and **black-and-white** on the live site.

Upload these and drop them in; do not substitute stock imagery.
