# Case-study lessons — WEG Case Study (Sep 2026)

> **For the Hargrove Design System.** Copy to `guidelines/case-study-lessons-weg.md` and index it in the
> README beside `working-from-a-word-source.md`, `using-templates.md` and
> `one-pager-lessons-private-wealth.md`. Read it before any print brochure, case study or IDML delivery.
> Ship `assets/weg-logo.svg` / `assets/weg-logo-white.svg` (vector, extracted from the client's PDF) and
> `assets/cover-photo.png` alongside it.

Written after the Wealth Enhancement Group case study: four Letter pages, Word source → HTML → IDML, then
the client's own InDesign pass returned as `Hargrove-WEG-Case-Study.pdf`. Every rule is a correction the
client actually made. **The client's returned PDF is the spec** (one-pager-lessons A6): where this file
conflicts with an older guideline, this file wins.

---

## A. Content and structure — the corrections during review

### A1. Nothing on the page that is not in the source document
The Word file is the whole universe of copy. A contact block, a legal disclaimer, an invented eyebrow — if the
document doesn't contain it, the page doesn't either. Brand templates carry these as *examples*, not as
requirements (`using-templates.md`).
*Failure:* the closing page shipped with `hargrovefirm.com · support@… · 12910 Shelbyville Rd…` and the
local-counsel disclaimer. None of it was in the source. Removed on first review.

### A2. One topic = one text frame
Consecutive paragraphs of the same section are **one block with paragraph breaks** — one `<div>` with
`<br><br>` in HTML, one story with `<Br/>` + `SpaceBefore` in IDML — never a stack of separate boxes. The
client edits one sentence and the whole section reflows.
*Failure:* Challenge (3 ¶), Solution (3 ¶), Results (2 ¶) each went out as separate `<p>` frames. Corrected
twice; the most persistent mistake in this piece.

### A3. A source list is reproduced in full and uniformly
If a bulleted list of *N* items becomes *N* graphic cards, **every** item gets a card. Three stat cards plus the
fourth bullet demoted to a pale sentence underneath is an edit of the author's structure. An item with no
numeral gets the **same card, text only** — same fill, border, radius, padding. Lay the set out as a grid that
closes (2×2 for four items, never 3+1).
*Failure:* four Results bullets → three cards + one grey sentence. Client: *"follow the text as it is, without
improvisation."*

### A4. A stat callout keeps its unit in the numeral
`4.31 out of 5` is one figure. Splitting it into a `4.31` numeral and a bold `out of 5` label invents a second
unit of emphasis. Set the whole phrase in the large numeral.

### A5. Bold maps 1:1 from the source
Only what is bold in Word is bold on the page — here `internal survey`, the numerals, and the four lead phrases
(`Attorney-led planning:` …). Never bold a whole sentence because it introduces a list; never drop a bold
the source has. (Refines `working-from-a-word-source.md` "one body setting": bold *runs* survive inside it.)

### A6. A quote is set once, with its lead-in attached
Advisor quotes may be a navy card, a pull quote with a 96 px `“` glyph, or a rule-indented block — but each is
set **once**, and the sentence that introduces it belongs to the quote group, not to the body above.

---

## B. What the client changed in InDesign — measured from the returned PDF

816 × 1056 px, four pages, margins 54 (the 80 px instruction came after delivery — see B9). Measured with
pdf-parse: `getTextContent` for baselines, `getOperatorList` for fills/strokes/images. Everything not listed
here matched our HTML within ±1 px, so the differences below are deliberate.

### B1. Cover = full-bleed photo, multiplied over navy at 40 %
The cover is not flat navy. A full-bleed photograph (business silhouettes with a faint network-line overlay,
light background) is placed over the navy page with **blend mode Multiply, opacity 40 %**. White in the photo
disappears into navy; the figures read as slightly darker navy shapes. This is the site-hero treatment
(`site-reference.md`: "subtle darkened photo, navy-overlaid") applied to print. In HTML:
`position:absolute; inset:0; object-fit:cover; mix-blend-mode:multiply; opacity:.4` under the content.
The photo is shipped as `assets/cover-photo.png` (1224 × 1584, extracted from the PDF).

### B2. Cover header: both logos, larger, on one axis
- HARGROVE wordmark **190 px wide** (not 150), top-left, glyph top at y ≈ 68.
- Partner wordmark **200 px wide** (Wealth Enhancement, white vector), top-right, vertically centred on the
  Hargrove wordmark. A case study is a two-logo document; the partner mark sits opposite ours on the cover.
- Both are vector. The WEG mark is now in the system as `assets/weg-logo.svg` (brand green `#435A37`) and
  `assets/weg-logo-white.svg`.

### B3. Cover type fills the measure
- Eyebrow `CASE STUDY` **16 px**, SemiBold, tracking ≈ `.3em` (the PDF shows visible gaps between letters),
  `#C9D6EA`, baseline 547.
- Title **60 px** Inter ExtraBold, ALL CAPS, leading 61 (`line-height 1.02`), **six lines** across the full
  708 px measure, baselines 627 → 932. Our 40 px version left the top half of the page empty. On a cover the
  title *is* the image: air above the title means the type is too small.
- Eyebrow → title first-line top ≈ 24 px. Title last baseline → hairline 37 px. Hairline `#40587A` at 969,
  footer row (`hargrovefirm.com` / `2026`, 13 px `#9FC2F0`) baseline 999.

### B4. Content page 02 opens with a partner logo card
Top-left of page 02: a **white card 274 × 51, 1 px `#E3E7EE`, radius 12**, containing the partner wordmark in
its own brand colour (WEG green), 239 px wide, 18 px inset. The `About Wealth Enhancement Group` heading
follows **34 px** below the card (heading top ≈ 140). A partner's logo keeps its brand colour — the one-accent
rule governs *our* palette, not a partner's mark.

### B5. Section headings that open a page: `THE X:` prefix in caps + bold
`The Solution: A Consistent, Attorney-Led …` is set as **`THE SOLUTION:`** (Bold 700, uppercase) followed by
the remainder in the source's casing, same 22 px size, same line. Applied to the page-opening headings
(`THE SOLUTION:`, `THE RESULTS:`). Mid-page headings (`The Challenge:`, boxed `Conclusion:`) stayed as written.

### B6. Footer is three parts
`Hargrove Firm · Wealth Enhancement Group · Case Study` — firm · partner · document type, middle-dotted — plus
the zero-padded number right-aligned. Not `Wealth Enhancement Group Case Study` as one phrase.

### B7. Slack goes to the biggest break; separators only where they earn their place
- **Page 02:** the bottom-anchored Challenge block moved **up 11 px** — 48 px of air above the footer hairline
  instead of 36. The page now breathes at both ends (logo card at top, air above footer).
- **Page 03:** the hairline above the pull quote was **removed**, and the pull-quote group (lead-in + `“` glyph +
  20 px quote) moved **up 43 px** to sit 37 px under the navy quote card. Result: navy card → pull quote 37,
  pull quote → `Across WEG…` 66, lead-in → 2×2 cards 27 (was 16). Our version had 12 px between the quote and
  the next section and 80 px above it — the slack was in the wrong place. A rule between two blocks that
  already differ in scale (15 px card quote vs 20 px pull quote) is decoration; drop it.
- **Page 04:** unchanged apart from B5/B6 — the 2×2 stat grid, the rule-indented 18 px quote and the navy
  Conclusion box were accepted as delivered.

### B8. What the client did NOT change (this is the confirmed spec)
Body 13 / 20.15 `#696969` · H2 22 / 25.3 SemiBold navy, tracking 0 · card `#F8F8F8`, 1 px `#E3E7EE`, radius
12 · navy quote card `#16335D` 300 px wide, lead-in 12 px `#C9D6EA`, quote 15 / 21.75 white SemiBold ·
pull quote 20 / 28 SemiBold navy with a 96 px `“` in a 64 px column · 2×2 aspect cards with 18 px navy check
chips (white check, stroke 1.6) · stat numerals 56 px (page 02) / 48 px (page 04) ExtraBold, label 13 px,
numeral→label baseline gap 36 · rule-indented quote 18 / 26.1 with a 1 px `#E3E7EE` left rule · Conclusion
box `#16335D` radius 12, padding 28, heading 22 white, body 13 `#C9D6EA` · footer 12 px `#999999` on a 1 px
hairline at 975.

### B9. Margins: 80 px from the next piece
Standing instruction: **80 px on all four sides** of a Letter page (816 × 1056), content follows the deeper
margin (columns narrow; nothing is squeezed into the old frames). The WEG file stayed at 54 to remain 1:1
with the client's InDesign document.

---

## C. Pipeline lessons (Word → HTML → IDML → client PDF)

### C1. Copied SVG logos lose their fill
`logo-white.svg` as shipped uses `class="cls-1"` with an empty `<defs>`; copied into a project it renders
**black**. Rewrite each `<path>`/`<polygon>` with an explicit `fill` and crop the `viewBox` to the glyph bounds
(`100 144 400 50`) so the wordmark sits at its nominal width.

### C2. Two-part rows are two frames
A flex row with text at both ends (footer + page number, `hargrovefirm.com` + `2026`) is **two frames** in
IDML: left-aligned at the margin, right-aligned with `AutoSizingReferencePoint="TopRightPoint"`.

### C3. Emphasised runs are runs, not frames
`<span style="font-weight:700">internal survey</span>` inside a body `<p>` is a `CharacterStyleRange` with
`FontStyle="Bold"` inside the same story — never its own frame.

### C4. Numeral card = two frames at the card's inner left edge
Numeral (48–56 px ExtraBold) and label (13 px) are separate frames, both at card x + padding; label frame top
= numeral frame bottom + measured gap.

### C5. Measure once, keep the spec, splice per page
Measure the live HTML with `getBoundingClientRect` normalised by `816 / pageRect.width`, store as
`idml/spec.json`, regenerate from the spec after every HTML change. Re-measure only the changed page and splice
it in; the other pages stay byte-identical.

### C6. Reading the client's returned PDF
Text: `getTextContent` → `transform[4]` = x, `height − transform[5]` = baseline, `hypot(transform[0..1])` =
size. Shapes: `getOperatorList`; in pdf-parse 2.4.5 the path op is `91 constructPath` with
`args = [drawOp, [Float32Array path], minMax]` — `drawOp` 22 = fill, 20 = stroke; the path array is
`code, coords…` with codes `0 moveTo(2) · 1 lineTo(2) · 2 curveTo(6) · 3 closePath(0)`; apply the running CTM
(`12 transform`, `10 save`, `11 restore`). Fill colour `59`, stroke `58`, line width `2`, blend/opacity `9
setGState` (`["BM","multiply"], ["ca",0.4]`). Images: `85 paintImageXObject` → `page.objs.get(name)` gives an
`ImageBitmap`. Don't rasterise pages (times out); the operator list is faster and exact. A partner logo drawn
as fills can be lifted straight out as SVG paths this way.

---

## D. Working method that held up

1. Read the Word file first (styles + bold runs). Write the section list and every list with its item count —
   **that is the layout contract.**
2. Compose page by page: which element carries each section, where the one big moment sits. Cover: photo
   multiplied over navy, both logos, 60 px title filling the measure.
3. Copy verbatim; paragraph groups as one block; lists complete and uniform; bold 1:1; nothing invented.
4. Alignment probe: pages 816 × 1056, no overflow; footer hairline at one y; left edges = margin or column
   start; right edges on one line; slack between sections in proportion to the break.
5. HTML → client review → notes → measure → IDML. Never generate IDML before HTML sign-off.
6. When the client returns a PDF, diff it against the spec (text baselines + shapes) and write every delta
   into this file.

---

## E. One-paragraph summary

Nothing goes on the page that is not in the Word file. Same topic = one text frame. A source list is
reproduced in full and uniformly (4 bullets = 4 cards, 2×2). "4.31 out of 5" stays together. Bold exactly as
the source. Cover: full-bleed photo at Multiply 40 % over navy; HARGROVE 190 px left, partner logo 200 px
right, 16 px letter-spaced eyebrow, 60 px title in six lines anchored to the bottom. Page 02 opens with the
partner logo in a white 274 × 51 card (logo in its own brand colour), heading 34 px below. Page-opening
headings: "THE SOLUTION:" caps + bold, remainder as written. Three-part footer. Slack goes to the biggest
break (page 03: rule above the pull quote removed, quote moved up, 66 px to the next section). Margins 80 px
from the next piece. A copied SVG logo loses its fill — set it explicitly. A two-ended row is two frames
in IDML.
