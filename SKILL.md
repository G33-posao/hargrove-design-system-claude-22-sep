---
name: hargrove-design
description: Use this skill to generate well-branded interfaces and assets for Hargrove Firm (national attorney-led estate planning law firm for financial advisors), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `readme.md` file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Fast orientation
- **Brand in one line:** a premier law firm with the clarity of a modern tech platform — precise, calm, credible. Navy is the only accent (60–70% of visual weight). Inter only (never Inter Display).
- **Non-negotiables:** navy `#16335D` as the single accent (never gold, never cyan/teal, never a second accent); Inter (rsms.me original) — the single "Inter" family for everything (NO Inter Display, and **never italic**); body copy VERBATIM from source; no emoji; no accent stripes/bars, no gradients-as-decoration, no cream backgrounds.
- **Signature lines:** "One price. No surprises." / "Fixed fee. No surprises." / "Not a vendor, not a bot." / "A licensed attorney stands behind every plan."
- **Deck rhythm:** the "navy sandwich" — navy cover/dividers/closing, light content slides. One focal point per view.

## What's here
- `guidelines/brand-guideline-deck.md` — **THE primary brand reference** (official 2026 Brand Guideline Deck): mission, UVP, brand pillars, voice, taglines, the full preferred/avoid word table, official palette + CMYK, logo-vs-tagline rule. Read first for any new piece.
- `styles.css` + `tokens/` — link `styles.css`; use the CSS custom properties.
- `assets/logo*.svg` (HARGROVE wordmark: navy/white/black) + `assets/fonts/*.ttf` + `assets/people/*.jpg` (real team headshots — round crop, name + role beneath).
- `components/` — React primitives (Button, Card, Eyebrow, IconChip, Logo, StatCallout, CommitmentCard, StepBadge, CheckItem, PricingCard, Testimonial).
- `ui_kits/website/`, `ui_kits/portal/` — full-screen recreations.
- `slides/` — deck sample slide types (cover, section/stat divider, process, commitments, pricing, testimonials, closing).
- `social/` — seven 1200×1200 LinkedIn card layouts.
- `guidelines/idml-export-workflow.md` — **read before any IDML delivery.** Editable working file, not a frozen replica; measure→frames→typography→vectors→package pipeline; all thirteen-version traps; PDF-based diagnosis.
- `guidelines/one-pager-lessons-private-wealth.md` — **read before any print one-pager, brochure page or IDML delivery.**
- `guidelines/case-study-lessons-weg.md` — **read before any print brochure, case study or IDML delivery.** Nothing on the page that isn't in the source; one topic = one text frame; lists in full and uniform (N bullets = N cards); stat keeps its unit; bold 1:1. Cover = photo at Multiply 40 % over navy + both logos + 60 px title filling the measure; partner logo card on page 02; `THE X:` heading prefix; three-part footer; 80 px margins on Letter pages. Plus reading a client PDF with pdf-parse's operator list.
- Everything written into the design system is in English. Every element has a partner (nothing floats); boxes align by edge, text by baseline; slack goes between sections; one story per text block; frames = column width; print is not web; a client-corrected reference is the spec. Method: HTML relationships → alignment probe → measure → wrap pre-flight → diff against the client's PDF. References in `guidelines/reference/`.
- `guidelines/working-from-a-word-source.md` — **read before setting any supplied Word/PPTX source.** One body setting per document, never dismantle a paragraph for a graphic, footnotes stay put, no italics, print-geometry checklist.
- `guidelines/using-templates.md` — **read before using any template.** Palette, not mould: source dictates structure, system dictates styling, never fill an empty slot, every piece is a fresh composition.
- `templates/` — **parts palettes, not documents to overwrite**: `brochure/` (four-page print), `deck/` (1920×1080 slides), `linkedin-post/` (1200×1200 social card), `website/` (marketing page).
- `guidelines/presentation-workflow.md` — **standing instructions for building any Hargrove presentation** (verbatim text, deck-stage 1920×1080, no "Confidential", SVG-vector numbers/checkmarks, IDML delivery). Read before any deck work.
- `guidelines/pagination.md` — page numbers are **zero-padded**: `01`, `02`, `03` … `10`, `11`, `12`. One fixed treatment, never designed.
- `guidelines/layout-alignment.md` — **craft rules**: every element has a partner (nothing floats; boxes align by edge, text by baseline; slack between sections; frames = column width; print is not web); copy is verbatim with zero additions; the logo is inline vector SVG; numerals in boxes are always SVG; boxed text is left-aligned with equal-height boxes; **print type is never a decimal size, body is 10pt minimum, everything else larger** (only disclaimers/footers smaller); identical margins; eyebrows/titles hold position; stretch the design rather than leaving a page empty; covers get an image placeholder.
- `guidelines/team-directory.md` — **confirmed titles and contacts** for Alex Hargrove, Mo Zoubi, Tim Fisk, Samantha Chevalier. Never invent a title.
- `guidelines/reference-library.md` — produced Hargrove pieces kept for structural inspiration; **the Sep 2026 client-produced set in `guidelines/reference/`** (Ideal Client Profile guide, CAPTRUST partner deck, LLC CE deck, Estate Planning Playbook deck, Mariner speakers card) is the current standard for new content — open the matching PDF before designing a piece of the same kind.
- `guidelines/social-linkedin.md` — LinkedIn rules; **every graphic 1200 × 1200 px unless the user states another size**; **LinkedIn social guidelines** (1200×1200 grid, 96px margins, social type scale, carousel navy sandwich, 12-point pre-flight checklist). Read before any social visual.
- `guidelines/site-sections.md` — **inventory of every live-site section** (page + Elementor `data-id`); the static export is in `uploads/hargrove package/`. Pull sections verbatim from there.
- `guidelines/site-reference.md` — **hargrovefirm.com, the model for all future design**: the hero's exact production spec (gradient, dotted US map, two-tone headline, black-hover pills, partner marquee), verified page order (footer is **light**), verbatim Advisor/Client/Enterprise copy, B&W portrait convention.
- `guidelines/*.card.html` — foundation specimens.

Icons: Lucide (outline / Feather weight), typically inside navy rounded-square icon chips.
