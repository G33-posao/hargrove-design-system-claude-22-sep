# Hargrove Presentation Workflow — Standing Instructions

## Redesign = DESIGN ONLY (text is frozen)
When the task is a redesign of an existing PDF/document, the text is frozen: same words, same casing, same block order, same heading/subheading splits as the source. Creative freedom applies exclusively to composition, style, and layout within the design system — never to the text or its order.
- **Block order on a page is part of the verbatim rule.** Moving sections around is the same violation as rewriting words.
- **Do not trust PDF-extraction text order** — extractors mix columns and blocks. Before building each page, verify the real order on the rendered page (render it to an image and look); if it cannot be verified — ASK, never guess.
- For numbered lists, map each number to its text by position, and state the assumed mapping in chat if there is any doubt.
- After building, compare every slide against the source: same blocks, same order, same words, same casing.
- **Never merge or split source headings.** Extraction can glue a page title to an unrelated subheading — visually verify what is the TITLE and what is a subheading. (Concrete lesson: a deck's page 2 — "INTRODUCTION TO" + HARGROVE logo → "Who is Hargrove?" → "Jamie Hargrove" — was assembled wrong twice by trusting extraction instead of looking.)

## Workflow (applies to every new presentation)
1. The user attaches a source PPTX (or other source) — extract the text and use it **verbatim**. Never rewrite, paraphrase, or invent content. **Zero changes** — not a grammar fix, not an added eyebrow, not a "PART 01" label the source never had. Flag errors in chat; never edit them. See `layout-alignment.md` → "Copy is verbatim".
2. Build the deck as a Design Component on `deck-stage`, 1920×1080, in the Hargrove design system (navy sandwich: navy cover/dividers/closing, light content slides; footer "Hargrove Firm · [doc name]" + page number — **NEVER add "Confidential"** or any other label the user did not ask for). The page number is **zero-padded** (`03`, never `3` / `3 of 5` / `Page 3`) — see `pagination.md`.
3. Covers: about half carry an accompanying image — leave a labelled tone-on-tone **placeholder** where it will go when the asset isn't available. See `layout-alignment.md`.
3. Panelist photos: round crop, name/role below.
4. Be maximally creative and modern, but strictly within the design system (navy #16335D as the only accent, Inter, no gradients/emoji/other colors).
5. Alignment is non-negotiable — equal-height boxes, left-aligned text inside boxes, identical margins, eyebrows and titles in the same position on every page. See `layout-alignment.md`.

## Vectors — MANDATORY
- **All numbers inside boxes/circles** (step badges 1-2-3, page numbers in navy tabs) → inline SVG with `text-anchor="middle"` + `dominant-baseline="central"`. Never plain text — alignment drifts. (Footer page numbers are the exception: plain text, see `pagination.md`.)- **All checkmarks** → inline SVG (navy box + white check), never a ✓ text character.
- **Large decorative numerals** (ghost "01"/"02" on section dividers) → in the IDML export ALWAYS convert to vector outlines (glyph outlines from the Inter font), never as a text frame — otherwise they overflow their frames.
- Cover: modern vector elements suggesting the topic (e.g. for a webinar: video window + play button + signal rings), tone-on-tone navy (#1B3A68/#2C4A7C/#40587A). Large multi-line ALL-CAPS title.

## IDML delivery (at the end of every deck)
> **Authoritative recipe: `idml-export-workflow.md`** — written after the Ideal Client Profile brochure took thirteen versions; it supersedes the notes below where they differ (frame widths, merged stories, vector logo, Oval clipping, PDF diagnosis).
- Pipeline: measure slide geometry from the live render (eval in the preview; correct for deck-stage scale — computed font/padding values are in authored px, rects must be multiplied by k = 1920/renderedWidth), save the spec to `idml/spec.b64`, then a `run_script` generator builds the IDML zip (STORED entries, `mimetype` first).
- **Round every type value to a whole point before writing it into the IDML** — `PointSize` and `Leading` alike. The px→pt conversion produces values like `9.38pt` / `14.53pt`; those must never reach the file. Main text is 10pt minimum; only disclaimers and footers go smaller. See `layout-alignment.md`.
- Text = editable Inter text frames; cards = Rectangle/Oval with corner radii; SVG numbers/checkmarks = Polygon/GraphicLine/outline curves (digit outlines parsed from the Inter TTFs shipped in the design system — Bold for badges, ExtraBold/Black for ghost numerals).
- The logo is the **only** permitted raster link (`Links/logo-white.png`), because IDML cannot carry the SVG directly. Everywhere else — HTML, PDF, social — the wordmark stays inline vector.
- **Hyphenation="false" on every ParagraphStyleRange** — words must NEVER break with a hyphen across lines.
- Text frames ~2% wider than measured + `FirstBaselineOffset="LeadingOffset"` (frameTop = y − lineHeight/2 + 0.364·fontSize).
- Delivery: a zip named `idml/Hargrove-[DocName]-IDML-Package.zip` = the .idml + `Links/` folder (photos + logo-white.png raster) → present as a download card.

PowerPoint is not a standard deliverable. If a PPTX is explicitly requested, follow `guidelines/pptx-export.md` as a final conversion step; it changes nothing about how the deck is built.

## Other rules
- Never rewrite the user's text; never invent content. **Never add words the source did not contain** — no invented eyebrows, kickers or "PART 01" labels.
- **The logo is inline vector SVG**, never a linked `.png` — see `layout-alignment.md`.
- **Never put "Confidential" in the footer** — it was never requested.
- **Body text is always 10pt** in print, **never a decimal size** (no `9.38pt`) — only disclaimers and footers go smaller, and every other element sits larger. See `layout-alignment.md`.
- **Pagination is zero-padded** (`01`, `02`, `03` … `10`, `11`) and **never designed** — one size, one position, every page. See `pagination.md`.
- **Alignment, equal-height boxes, margins, whitespace, cover placeholders** — see `layout-alignment.md`.
- **Titles and contact details** for named staff — see `team-directory.md`. Never invent a title.
- Words must not hyphenate/break across lines — neither in HTML nor in IDML. An email, URL, phone number or name inside a box sits on **one line with side room** — shrink the font or widen the box, never break the token (`layout-alignment.md` → "Unbreakable strings").
- Keep permanent instructions in English (the workflow may move to corporate Claude).

## Client feedback — Estate Planning Playbook deck (Goran, Aug 2026)
Every rule below is a correction Goran actually made — standing instructions for all future Hargrove decks.

### Hierarchy & source fidelity
1. **Source hierarchy is binding, including SCALE.** If the source sets the heading big
   and the quote/subline small, keep those roles. Never swap which element is the large
   one on a slide (mistake made: title set as small eyebrow, quote blown up to headline).
2. **People order follows the source's VISUAL order** (panelists, team rosters).
   PPTX/PDF extraction order is not visual order — verify on the rendered source page.
   (Mistake made: Tim/Jessi swapped because extraction listed Tim first.)
3. **Don't add "SECTION NN" labels** unless the source uses them consistently across all
   sections. A single stray "SECTION 04" in a source is likely an authoring error — ask.

### Composition & whitespace
4. **No dead whitespace at the bottom of a slide.** Either equal-height boxes vertically
   centered between title and footer, or stretch the blocks to fill that space. The
   "Remaining Avenues" slide (card block vertically centered on the page) is the approved
   model. Content must never sit "nabijen" (crammed) in the top 60% with an empty bottom.
5. **Icons may be enlarged freely to help fill** — navy icon chips ~96px and check
   squares ~48px at 1920×1080 are the working sizes. Don't keep icons small out of rigidity.
6. **Keep related content grouped tightly.** An intro line and the bullets it introduces
   belong together — put them inside one card if needed. Never let a lead-in line float
   far from its list.
7. **Source enumerations stay visually enumerated lists** — a vertical list with
   consistent, generous spacing (checkmark rows work well). Don't scatter list items
   into loose boxes with uneven gaps.
8. **A sub-headline line is set as a subhead, never boxed into a card.** Only true list
   items become cards. (Mistake made: "Learn more about Hargrove" — a lead-in — was
   turned into a third card next to two contact cards.)

### Courage & special slides
9. **Statement / closing-takeaway slides need a bolder composition** — e.g. a full-width
   navy panel (radius 14) with white statements — NOT body text styled like the title.
   Goran, verbatim: more courage, less rigidity, "ipak smo mi dizajneri a ne roboti" —
   while staying strictly inside the brand (navy-only accent, Inter, no gradients).
10. **Q&A and Thank-you slides: centered composition** — title and logo centered on the
    slide. Restrained tone-on-tone decoration is welcome (thin navy rings #1B3A68/#22406E).

### Typography
11. **Headline tracking is 0 — NEVER negative.** Remove `letter-spacing:-0.02em` /
    `-0.015em` / `-0.01em` (InDesign tracking −20/−15/−10) from all titles, headings,
    names and statements, in HTML and IDML alike. Let headlines breathe. The only
    letter-spacing in the system is the POSITIVE spacing on uppercase eyebrow labels
    (~.14–.2em). This supersedes the old −0.015em/−0.02em values in the type foundations
    (`tokens/typography.css` now sets both to 0).
