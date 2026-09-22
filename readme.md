# Hargrove Design System

Brand & design system for **Hargrove Firm** — a national, attorney-led estate planning law firm serving financial advisors (B2B) and their clients. The feel is a premier law firm with the clarity of a modern tech platform: precise, calm, credible, trustworthy. Confident, never flashy. Every piece should look investment-grade and earn trust before a word is read.

Hargrove delivers its services through a proprietary technology platform, **NetLaw**. Lead with Hargrove as the *law firm*; reference NetLaw as the *platform* only where the source does. Hargrove is "not a vendor, not a bot" — a licensed attorney stands behind every plan.

## Products & surfaces represented
- **Marketing website** (hargrovefirm.com) — navy hero, advisor/client/enterprise segmented value props, testimonials, US-map stat callout, footer wordmark. See `ui_kits/website/`.
- **Advisor Portal** — the "My clients" dashboard. Built and owned by the Hargrove dev team; our recreation in `ui_kits/portal/` is a preview for product screenshots only.
- **Sales & client documents** — pitch decks (Mariner Forum, Calamos partnership), four-page client brochure, case study, pre-referral checklist, next-steps one-pagers. See `slides/`.

## Source materials (provided by client — reader may not have access)
All under `uploads/` in the originating project:
- `Hargrove - brand guidelines 2026.pdf` — official color sheet (navy/greys/panel/black) + Inter.
- `Hargrove Mariner Forum deck 1920x1080.pdf` — canonical deck (cover, testimonials, team, process journey, pricing, get-started, closing).
- `Hargrove-Calamos-Partnership v2.pdf` — partnership proposal deck (Four Commitments, stat callouts, next-steps).
- `MWA-Case-Study-2026.pdf` — Mariner case study (stat band, challenge/solution/results).
- `HF Client Brochure 2026 pricing four pager v7.pdf` — client brochure (about, how-it-works, pricing, notary).
- `Pre-Referral Client Checklist - 2026 redesign.pdf` — checklist doc (checkmark boxes, three-meeting process).
- `Hargrove-Next-Steps-2026.pdf` — numbered next-steps one-pager.
- `webpage-look-design.pdf` — full-length website comp (single tall image) — primary visual reference for the site + portal.
- `hargrove-logo-clean_hargrove-logo-{black,blue,white}.svg` — the HARGROVE wordmark (only real logo asset).
- Inter TTFs (rsms.me original family). Inter Display is not part of the brand and is not shipped.

### Second delivery (Aug 2026) — reference library
Additional production pieces provided for design inspiration. Copy layout ideas and motifs from these, never their copy unless the piece is the source:
- `Advanced Estate Planning Webinar v2.pdf` · `Estate Planning Essentials 2026 redesign.pdf` · `Family Governance Around a Liquidity Event.pdf` — webinar / educational decks.
- `HF-Examples-of-HEMS-v2.pdf` — legal explainer one-pager.
- `At-Home Notary Services 2026.pdf` — service one-pager.
- `CE-Webinar-LinkedIn-Card.pdf` — social/promo card format.
- `Hargrove Deck PRINT Mo.pdf` — print-format deck variant.
- `Attorney-led, online Estate Planning… _ Hargrove Firm.html` — the **live marketing site markup** (truer source than the PDF comp; read this when refining `ui_kits/website/`).
- `hargrove_app_walkthrough_ELEMENTOR_v20.html` — **app walkthrough markup** (source for refining `ui_kits/portal/`).
- `Hargrove-Social-Design-Guidelines.pdf` — **LinkedIn Social Design Guidelines (v1.0)**, an authoritative brand-delivery brief that supersedes prior visual direction for social. Transcribed into `guidelines/social-linkedin.md`.

**Headshots** — real team photos, studio grey background, shipped in `assets/people/`: `Alex-Hargrove.jpg`, `Tucker-Hargrove.jpg`, `Mo-Zoubi.jpg`, `Samantha-Chevalier.jpg`, `Tim-Fisk.jpg`, `David-Haughton.jpg`, `Jessi-Konrad.jpg`, `Brittany-Marks.png`; cut-outs (transparent) in `assets/people/cutout/`. Full variant table: `guidelines/team-directory.md`. Always round-cropped, with name + role beneath (see `guidelines/brand-people.card.html`). These replace the initials-circle stand-ins wherever a real face is wanted.

## Logo
Real vector wordmark only — **HARGROVE** (see `assets/logo*.svg`). Navy `#16335D` on light, white on navy, black where required. Functions as a footer signature. Never typed as live text, never recolored outside the three provided variants. The provided SVG is the wordmark only (no "FIRM" lockup); the site pairs it with a small "FIRM" beneath in some placements.

---

## CONTENT FUNDAMENTALS

**Voice — four pillars:** Confident (say what we mean and stand behind it, never arrogant), Clear (no jargon, no hedging, plain language), Credible (grounded in legal authority), Human (warm where it counts). Reads like a trusted senior attorney who doesn't need to perform authority.

**Casing:** Two registers by surface.
- *Covers / section dividers / hero titles:* ALL-CAPS, ExtraBold/Black. Big confident statements — "ATTORNEY-LED ESTATE PLANNING WITH HARGROVE", "PRE-REFERRAL CLIENT CHECKLIST".
- *Content:* sentence case throughout. Headlines, subheads, body, lists.
- *Eyebrow labels:* UPPERCASE, letter-spaced, muted grey, above a sentence-case headline — "WHY HARGROVE?", "A PREDICTABLE PROCESS", "IN THEIR WORDS", "THE HARGROVE PLATFORM". This eyebrow + headline pair is a core recurring pattern.

**Person:** Addresses the advisor as "you" ("Your clients need estate plans", "Track your client's progress"). Speaks of Hargrove as "we"/"our". Client-facing docs also use "you".

**Sentences:** Short. Statements, not questions (headlines may end in a question only as an eyebrow like "WHY HARGROVE?"). Declarative and plain.

**Signature lines (reuse verbatim):** "One price. No surprises." · "Fixed fee. No surprises." · "Not a vendor, not a bot." · "A licensed attorney stands behind every plan."

**Emoji:** Never. No emoji anywhere. Checkmarks (✓) appear as a UI motif, not as emoji.

**Copy rule (non-negotiable):** All body copy is used VERBATIM from provided source. Never paraphrase, restructure, invent marketing language, or recompose source text into new units. Pre-approved exceptions only: extracting large-number stat callouts, and explicit client-signed rewordings.

**Avoid these phrases:** "peace of mind" (NetLaw-era legacy — do not carry forward), "competitive pricing", "legal professionals". (Note: the older brochure text still contains "peace of mind"; newer decks correctly dropped it.)

**Firm framing:** "Hargrove Firm is a law firm" · "attorney-led" · "not a vendor, not a bot" · "a licensed attorney stands behind every plan". NetLaw = the underlying technology platform only.

### Canonical facts (keep consistent)
- **Pricing:** Essential **$3,000** · Advanced **$4,000** (highlighted tier) · Private Wealth Counsel **$6,000** initial fee. All packages include: spouse's plan at no additional cost · at-home notarization · virtual meetings · secure document fulfillment · execution support & funding guidance.
- **Process:** 4 stages — Initial Consultation → Plan Design Meeting → Wrap-Up Meeting → Execution & Shipment. (Client-facing sometimes framed as a "three-meeting process" + execution.)
- **Proof points:** $400B+ client assets across RIA partners · Mariner: 800+ advisors, 44 states + PR, $98.6B AUM, Top 5 Barron's (9 consecutive years), 42%+ registered / 40%+ referred.
- **Four Commitments (canonical, reuse verbatim):** Accountability · Visibility · Fixed Price · Nationwide Scale.
- **Contact:** hargrovefirm.com · support@hargrovefirm.com · (833) HARGROVE · 12910 Shelbyville Rd Ste 124, Louisville, KY 40243.

---

## VISUAL FOUNDATIONS

**Color.** Navy `#16335D` is dominant and the ONLY accent — it carries 60–70% of visual weight. Neutrals: grey `#696969` (body), grey `#999999` (muted labels), panel `#F8F8F8`, black, white. Working tokens: card border `#E3E7EE`; on-navy subheads `#CCCCCC`–`#C9D6EA`; on-navy hairline `#40587A`; tone-on-tone navy panels `#1B3A68`/`#22406E`/`#2C4A7C`; on-navy link `#9FC2F0`. **Never** gold/warm tones. **Never** cyan/teal (retired NetLaw legacy). One accent only — no second accent.

**Type.** Inter only (rsms.me original — NOT Google's "Inter 18pt/24pt" naming). Single "Inter" family for everything — the client does NOT use Inter Display; large headlines are Inter at heavy weights. Weights used: Regular 400, Medium 500, SemiBold 600, Bold 700, ExtraBold 800, Black 900. Content headlines SemiBold 600, line-height 1.10, **letter-spacing 0 — never negative** (client correction, Aug 2026; the only tracking in the system is the positive eyebrow spacing). Body Regular 400, line-height 1.5, grey `#696969`. Size contrast lives between **headings and body ONLY** — never inside body copy. **Text of equal importance gets an identical setting**: two paragraphs from the same source flow are the same size, weight and colour, always. Never promote a first paragraph to an enlarged "lede"/intro — that invents hierarchy the source doesn't have (a repeated, corrected mistake). A larger subtitle exists only when the source itself marks one. Text anchors to a clear edge (top or bottom) — never vertically floating.

**Layout.** Deck rhythm = the "navy sandwich": dark navy for cover, section dividers, and closing (Thank you / Questions) slides; light (white / `#F8F8F8`) for content slides. Commit fully per slide — never half-and-half. One focal point per view. Generous whitespace. 0.5in min margins, 0.3–0.5in between blocks. Content titles centered; body & lists left-aligned. Pinned footer on content slides: "Hargrove Firm · [Doc Name] · [Confidential]" + page number, muted, small.

**Backgrounds.** Flat navy or flat white/panel — no gradients as decoration. The only imagery motifs seen: a faint line-art **US map** behind the "$400B+" stat callout, and a subtle darkened photo behind the site hero (silhouette-by-window, low-contrast, navy-overlaid). No repeating patterns or textures. No cream/beige.

**Cards.** `#F8F8F8` fill, 1px `#E3E7EE` border, 12–14px radius, soft shadow. Used for testimonials, commitments, pricing, process steps.

**Shadows.** Soft and restrained — `0 8px 24px rgba(22,51,93,.06)` range. Navy-tinted, never harsh black. No inner shadows. No glow.

**Corner radii.** Cards 12–14px. Navy icon chips 12px (rounded square). Buttons are full pills (`border-radius:999px`). Stat/photo circles fully round.

**Borders.** 1px hairlines. On light: `#E3E7EE`. On navy: `#40587A`. No accent stripes, no color bars (header/footer/side/edge), no underline bars beneath titles.

**Motion.** Restrained and calm. Gentle fades and short (120–200ms) ease transitions; standard easing `cubic-bezier(.22,.61,.36,1)`. No bounce, no spring, no dramatic motion.

**Hover / press.** Hover: subtle — pill buttons darken navy / lift slightly; cards raise shadow a step. Press: slight darken, no shrink. Links on light go navy; links on navy go `#9FC2F0`.

**Relationships — nothing floats.** Every element has a partner: a heading belongs to the block beneath it (moves with it, tight to its first item), a card to the column beside it, a rule to the two texts it separates, a CTA to the margin it starts on. Boxes align by edge, text by baseline; padding is never sacrificed. Separators get equal space both sides. Two left edges per page (margin, column start); right edges share one line. Slack goes between sections, largest at the biggest break — never above the footer. One text block = one story (title+description, name+role). Frames are as wide as their column, never their text — an orphan is a width bug. Print is not web: no pill buttons (bleeding band), no rule under a footnote, one-line disclaimer, headshot ≥ 96 px. A client-corrected reference is the spec. Full rules and method: `guidelines/layout-alignment.md` → "Relationships", `guidelines/one-pager-lessons-private-wealth.md`.

**Transparency / blur.** Rare. Used only for the hero photo's navy overlay. No frosted-glass panels.

**Imagery vibe.** Cool, professional, low-contrast. Headshots are real, round-cropped, shot on a neutral studio grey background, with name + role beneath — use the files in `assets/people/`. Photography is navy-overlaid and understated — never bright stock "businessman by window" clichés (the one hero photo is deliberately dim and abstract).

### AVOID (off-brand / AI-filler hallmarks)
Accent stripes or color bars. Underline bars beneath titles. Gradients as decoration. Stock-photo "businessman by window" energy. More than one focal point per view. Cream/beige backgrounds. Centered body text (center titles only). Gold/warm tones. Cyan/teal. A second accent color.

---

## ICONOGRAPHY

Icons are **outline/line style** (Feather-family weight) — thin, single-weight strokes, no fill, rounded joins. On the site and in decks they sit inside **navy icon chips** (rounded-square navy tiles with white line icons) at the top-left of a card, often overlapping the card's top edge. The Four Commitments and the site's Advisor value-prop cards both use this pattern.

Other recurring icon-like motifs:
- **Numbered elements** — circles `01`–`04` for step lists; OR large numerals in a navy tab overlapping a card's corner (process journey).
- **Checkmark boxes** — navy squares with a white check, inline before section titles on checklist docs and in list items.
- **Stat callouts** — huge bold navy numeral (60–96pt) + small grey label (e.g. `$400+ billion`, `800+`, `$98.6B`, `Top 5`, `42%+`, `$3,000`). Not an icon, but the primary attention motif.

No brand icon font was provided. The system uses **Lucide** (CDN) as the outline set — it matches the Feather-family stroke weight and rounded-join style seen in the comps. This is a substitution — see CAVEATS. Emoji are never used. Social icons (LinkedIn, YouTube) appear in the site footer as simple monochrome marks.

---

## INDEX

**⭐ 2026 Brand Guideline Deck** — `guidelines/brand-guideline-deck.md`: **the most authoritative brand reference** (from the client's official 17-page deck). Mission, UVP, the four Brand Pillars with canonical wording, target audience, brand voice, both taglines, the full preferred/avoid writing table, official primary/secondary palette split with CMYK, and the logo-vs-tagline usage rule. Where anything else conflicts with it, the deck wins.

**Foundations / tokens**
- `styles.css` — root entry (import list only; consumers link this one file).
- `tokens/colors.css` · `tokens/typography.css` · `tokens/spacing.css` · `tokens/fonts.css`.
- `guidelines/*.card.html` — foundation specimen cards (Colors, Type, Spacing, Brand) shown on the Design System tab.

**Assets** — `assets/logo.svg` (blue), `assets/logo-black.svg`, `assets/logo-white.svg` (all with explicit `fill` attributes and a glyph-tight viewBox — a copied logo never renders black), `assets/weg-logo.svg` / `assets/weg-logo-white.svg` (Wealth Enhancement Group wordmark, vector, partner logo for case studies), `assets/cover-photo.png` (brochure cover photograph — place full-bleed at Multiply 40 % over navy), `assets/fonts/*.ttf`, `assets/people/*.jpg` (real team headshots — round crop, name + role below).

**Components** (`components/`) — see the "Components" list below; each has `.jsx` + `.d.ts` + `.prompt.md` + a card HTML.

**UI kits** — `ui_kits/website/` is a recreation of the **live** homepage and the source of the reusable hero; it exposes `WebsiteApp` plus each section on `window`. `ui_kits/portal/` is a **preview only** — the real advisor portal is built and owned by the Hargrove dev team, so the recreation exists just to pull an on-brand product screenshot, and is not a template.

**Slides** — `slides/` (deck sample slide types).

**Slides** — `slides/` deck sample slide types, all 1280×720: `cover.html`, `stat-divider.html` (navy dividers), `process.html`, `commitments.html`, `pricing.html`, `testimonials.html`, `closing.html`. Static HTML using the tokens + real wordmark — copy and adapt for new decks.

**Units — pixels, always** — `guidelines/units-pixels.md`: **read before any IDML delivery.** Client rule (Aug 2026, updated): design and build in **pixels** and never convert px → pt — in every deliverable, print included. 99% of Hargrove output is consumed on the web and the client re-opens documents in Canva, which a point-authored document does not survive (the YouTube thumbnail set landed at 75% in the corner). Print is not an exception: a paper piece is authored in px at the correct proportion and rescaled in InDesign in seconds. The deeper reason is drift — every px → pt conversion is where HTML that looks right falls apart in IDML (positions shift, spacing rounds, elements detach); 1:1 geometry removes that class of failure. Covers the IDML settings (`PT = 1`, `Intent="WebIntent"`, Pixels measurement units, 72 ppi export) and the delivery-note wording.

**IDML export** — `guidelines/idml-export-workflow.md`: **read before any IDML delivery.** The goal (a working file for a designer, not a frozen replica — editability wins), the full pipeline (measure → frames → typography XML → vectors → package), every trap that cost thirteen versions (double px→pt conversion, attribute-form fonts falling back to Minion Pro, nested-element duplicate frames, Oval paths that don't clip), and how to diagnose from the user's PDF export. Reference implementation shipped in-system: `guidelines/idml/gen-idml.js`.

**One-pager lessons (Private Wealth, Sep 2026)** — `guidelines/one-pager-lessons-private-wealth.md`: **read before any print one-pager, brochure page or IDML delivery.** Design logic learned from the client's corrected InDesign file: every element has a partner (nothing floats); boxes align by edge, text by baseline, padding is never sacrificed; separators centred; page slack goes between sections; one story per text block; frames = column width (orphans are a width bug); print is not web (no pill buttons, no rule under a footnote, one-line disclaimer, portrait ≥ 96 px); a client-corrected reference is the spec. Working method: build relationships in HTML → alignment probe → measure → wrap pre-flight → diff against the client's PDF. Reference files in `guidelines/reference/`.

**Case-study lessons (WEG, Sep 2026)** — `guidelines/case-study-lessons-weg.md`: **read before any print brochure, case study or IDML delivery.** Corrections from the client's review and their own InDesign pass: nothing on the page that isn't in the source; one topic = one text frame; a source list is reproduced in full and uniformly (N bullets = N cards, never 3 + a demoted sentence); a stat keeps its unit in the numeral; bold maps 1:1. Cover = full-bleed photo multiplied at 40 % over navy, both partner logos, 60 px title filling the measure; content page opens with the partner logo in a white card; page-opening headings take a "THE X:" caps + bold prefix; three-part footer; slack goes to the biggest break. Margins are now 80 px on Letter print pages. Plus how to read a client-returned PDF with pdf-parse (operator list, blend modes, vector extraction).

**PPTX export** — `guidelines/pptx-export.md`: **read ONLY when the prompt asks for a PPT/PPTX.** Pre-cropped photos with `data-om-raster`, overlay baked into the hero image, numbered badges as one shape+digit element. Never applied to HTML, PDF or IDML deliveries — those keep the standing rules.

**Working from a Word source** — `guidelines/working-from-a-word-source.md`: **read before setting any supplied document.** Written after the Ideal Client Profile brochure took eight correction rounds; every rule is a mistake actually made. Match the source's hierarchy (one body setting per document), never dismantle a paragraph to build a graphic, footnotes stay on their word, no italics ever, cover-title latitude, and the `doc-page` pagination trap with its fix.

**Using templates** — `guidelines/using-templates.md`: **read before building anything from a template.** A template is a palette, not a mould — the source dictates structure, the system dictates styling, empty slots are never content requirements, and every piece is a fresh composition. Contains the full diagnosis of the Ideal Client Profile failure that produced these rules.

**Presentation workflow (standing instructions)** — `guidelines/presentation-workflow.md`: MANDATORY rules for every new Hargrove deck — verbatim source text, deck-stage 1920×1080, no "Confidential" in footers, SVG-vector numbers/checkmarks, IDML delivery pipeline, no hyphenation. Read it before building any presentation. Paired with `guidelines/pagination.md` (page numbers are zero-padded — `01`, `02`, `03` … `10`, `11`) and `guidelines/layout-alignment.md` (numerals in boxes are SVG; boxed text left-aligned in equal-height boxes; identical margins; cover image placeholders).

**Deck text hierarchy** — `guidelines/deck-text-hierarchy.md`: learned on the TMG Business Entities deck — source bullet levels survive (never flatten sub-bullets or promote one into a callout); one treatment per level (L1 SemiBold 30 navy only for rows with children, L2 Regular 28 grey indented; single-level lists all Regular grey); same structure = same treatment; lead-in sentences SemiBold navy, subtitles Regular grey; contact block name Bold + title lighter on one line.

**Social (LinkedIn)** — `guidelines/social-linkedin.md`: **every LinkedIn graphic is 1200 × 1200 px unless otherwise stated** (standing rule, Sep 2026); the client's LinkedIn Social Design Guidelines (July 2026, v1.0), which **replace all previous visual direction** for social. Ten unbreakable rules, the 1200×1200 card grid (96px margins, 210px wordmark), a full social type scale, iconography limits, carousel navy-sandwich rhythm, 7 standard layouts, and a 12-point pre-flight checklist. Read it before any social visual.

**Live site reference** — `guidelines/site-reference.md`: **the model for all future design** — where it conflicts with an older PDF comp or a preview we built, the live site wins. Carries the **hero's production spec** (navy tonal gradient, dotted US map, two-tone all-caps headline, line reveal, black-hover pills, partner marquee), the verified homepage order (note: **the footer is light, not navy**), verbatim copy for all three audience segments, the testimonials, the attorneys roster and its **black-and-white portrait** convention, and the phone-number discrepancy to resolve.

**Site section inventory** — `guidelines/site-sections.md`: every section of all 11 live pages with its page path and Elementor `data-id`, so any one can be pulled and recreated 1:1. The full static export sits in `uploads/hargrove package/` — read sections straight out of that HTML.

**Team directory** — `guidelines/team-directory.md`: confirmed titles, phones and emails for Alex Hargrove (CEO), Mo Zoubi (Director of Relationship Management), Tim Fisk (SVP Partnerships) and Samantha Chevalier (Estate Planning Attorney), taken from the official business cards. Note the two live email domains (`@hargrovemso.com` for staff, `@hargrovefirm.com` for support).

**Reference library** — `guidelines/reference-library.md`: **read before any new deck, guide or social card.** Five client-produced Sep 2026 pieces ship in `guidelines/reference/` (Ideal Client Profile print guide, CAPTRUST partner deck, Advisor's Guide to LLCs CE deck, Estate Planning Playbook webinar deck, Mariner speakers card) — the current standard for how new content is generated, each broken down by structure and reusable patterns; plus the 21-slide webinar deck as the earlier worked example.

**Social** — `social/` LinkedIn card library, seven 1200×1200 layouts: `01-navy-statement`, `02-light-checklist`, `03-carousel-cover`, `04-event`, `05-stat`, `06-quote`, `07-carousel-closing`. See `social/README.md`.

**Templates** (what consuming projects copy) — `templates/brochure/` (four-page print brochure on `doc-page`), `templates/deck/` (1920×1080 slides on `deck-stage`), `templates/linkedin-post/` (1200×1200 social card), `templates/website/` (marketing page, mounts `WebsiteApp`). Each loads the system through its own `ds-base.js`.

**SKILL.md** — Agent-Skills-compatible entry so this system can be used in Claude Code.

### Component inventory
Brand-guidelines-only run (no attached component library), so a focused set is authored from the recurring motifs seen across the comps:
- `Button`, `Eyebrow`, `Card`, `IconChip`, `StatCallout`, `CommitmentCard`, `StepBadge`, `CheckItem`, `PricingCard`, `Testimonial`, `Logo`.

**Intentional additions:** `Eyebrow`, `IconChip`, `StatCallout`, `CommitmentCard`, `StepBadge`, `CheckItem`, `Testimonial`, `Logo` are not "generic" primitives — each is lifted directly from a repeated Hargrove motif (eyebrow+headline pair, navy icon chip, stat numeral, Four Commitments block, numbered steps, checkmark boxes, testimonial card, wordmark). `Logo` wraps the real SVG so consumers never retype the wordmark.
