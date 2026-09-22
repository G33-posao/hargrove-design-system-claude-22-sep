# Layout & alignment

Non-negotiable craft rules. Misalignment is the fastest way a Hargrove piece stops looking investment-grade.

## Numerals inside a box or circle → always vector
Any number sitting inside a shape — step badges `01`–`04`, navy numeral tabs, numbered circles — is drawn as **inline SVG**, never as a text node.

Three things must all be true, or the numeral still sits off-centre:

1. `text-anchor="middle"` + `dominant-baseline="central"` on the `<text>`.
2. The **SVG fills the box** — give the box a fixed `width`/`height` and the SVG `width:100%;height:100%` with a `viewBox` of the same proportion. Do not centre a small SVG inside a padded box.
3. **`display:block` on the SVG.** An inline SVG sits on a text baseline, which reserves descender space beneath it and pushes the numeral visibly upward — this is the single most common cause of "the number isn't centred".

```html
<div style="width:34pt;height:24pt;background:#16335D;border-radius:6pt">
  <svg viewBox="0 0 34 24" style="display:block;width:100%;height:100%">
    <text x="17" y="12" text-anchor="middle" dominant-baseline="central"
          fill="#FFFFFF" font-family="Inter" font-weight="700" font-size="12">01</text>
  </svg>
</div>
```

Never use padding on the box to position the numeral — padding centres the *SVG*, not the *glyph*, and the two are not the same. The same rules apply to **checkmarks** (white check in a navy square).

Exception: footer page numbers sit on a text baseline, not in a box — those stay plain text (see `pagination.md`).

## Boxed text: left-align the text, equal-height boxes
When text sits inside a **box/frame**:

- **Text is left-aligned**, even when it runs to several lines. Never centre body copy in a box.
- **A figure or price on the right is vertically centred** against the whole box, right-aligned.
- **Every box in a group is the height of the tallest box.** One box with one line and another with three lines are still the same height.

```html
<!-- grid-auto-rows:1fr forces every card to the tallest card's height -->
<div style="display:grid;grid-auto-rows:1fr;gap:11pt">
  <div style="display:grid;grid-template-columns:1fr auto;align-items:center;gap:18pt;…">
    <div><!-- eyebrow + description, left-aligned --></div>
    <div><!-- price, right column, vertically centred --></div>
  </div>
  …
</div>
```

This equal-height rule applies **only when there is a box around the text**. Free text in a flow needs no such treatment.

### Unbreakable strings inside a box (emails, URLs, phone numbers, names)
A single token — an email address, a URL, a phone number, a person's name — must sit on **one line with air on both sides**. When it does not fit its box, **reduce the font size or widen the box**; never let the browser or InDesign break the word, wrap it mid-token, or hyphenate it (learned on the Captrust deck, where contact emails wrapped inside their cards). Set `white-space:nowrap` on such tokens and give the box `min-width` from the longest string in the group, so every card in the set stays the same width and height.

## Alignment discipline
- **Perfect horizontal and vertical alignment**, everywhere. Nothing sits a few pixels off its neighbour.
- **Margins are identical** on every page/slide of a piece — one value, no per-page exceptions.
- **Titles and eyebrows land in the same position** on every page of a set. A reader flipping pages should see them hold still.
- Text anchors to a clear edge (top or bottom) — never floats vertically without intent.

## Relationships — nothing floats
Learned from the client's own corrected InDesign file (Private Wealth, Sep 2026); every rule here is something they had to fix by hand. Full evidence, measurements and working method: `one-pager-lessons-private-wealth.md`.

- **Every element has a partner.** A heading belongs to the block beneath it — when the block moves, the heading moves with it and stays tight to its first item; never leave a heading attached to the paragraph *above* with air below. A card belongs to the column beside it, a rule to the two texts it separates, a CTA to the margin it starts on. Name the partner before placing anything.
- **Boxes align by their edges, text by its baseline.** A card's bottom edge lands on the facing column's last line. Padding is never sacrificed to hit that — the box grows and the content stays inside the padding.
- **A separator gets equal space on both sides.** A rule jammed onto the text above it reads as an underline, not a divider.
- **Two left edges on a page:** the margin or a column start. Every heading, row title and CTA text sits on one of them — even when the CTA band itself bleeds off the page. **Right edges share one line too** (prices, hairlines, card edges).
- **Slack goes between sections, in proportion to the break.** Surplus space is distributed at structural breaks — largest gap at the biggest change of subject — never left as dead space above the footer while the sections above sit cramped. Inside a block, spacing stays tight.
- **One text block = one story.** Title + description, name + role, row title + sub-line, cover title + subtitle are one frame with a paragraph break, not two frames. Split only where the layout genuinely separates them: a rule, a box edge, a column change, an image.
- **Frames are as wide as their column, never as wide as their text.** InDesign sets Inter 3–4 % wider than Chrome; a shrink-wrapped frame always re-wraps. A one-word orphan is a width bug — widen the column in the HTML, never accept it.
- **Print is not a web page.** No pill buttons — a print CTA is a navy band bleeding off the left page edge, one rounded end (radius = h/2), text starting on the margin. No rule under a table footnote (the table closes with one hairline; the note follows on spacing). The legal disclaimer sits on one line at full measure, ≥ 24 px from the page edge. A person-card headshot is ≥ 96 px.
- **A client-corrected reference is the spec.** Measure its gaps and write them into the HTML before designing anything; apply the rules above only to what the reference does not cover.
- **Method:** build the relationships in HTML so they hold by construction (`align-items:stretch` rows, heading inside the bottom-aligned group, `margin-top:auto` inside padding, symmetric margins around rules) → alignment probe (every edge within 2 px of a margin, column edge, sibling edge, or a deliberate gap) → measure column widths for IDML → wrap pre-flight at +4 % → diff against the client's PDF.

## Copy is verbatim — zero changes
When the user sends text as a working version, it ships **exactly as sent**.

- **Do not fix grammar, spelling or punctuation.** If you spot an error, flag it in chat and leave the text alone.
- **Do not add copy that was not sent.** No invented eyebrows, no "PART 01" labels above headings, no kickers, no captions, no CTA lines, no section titles. If a layout looks like it wants an eyebrow and the source has none, the layout goes without one.
- **Do not restructure.** No splitting one sentence into bullets, no merging bullets, no reordering, no re-casing.
- Purely graphic elements (a numeral used as a decorative mark, a rule, a placeholder panel) are acceptable — **but they must not introduce words**.
- If copy is genuinely missing, **ask for it**. Never fill the gap.

Only pre-approved exception: extracting a large-number stat callout from source figures.

## Pagination
Zero-padded plain numbers, identical on every content page: `01`, `02`, `03` … `10`, `11`, `12`. See `pagination.md`.

**Do not design the pagination.** No oversized numerals, no numbers in boxes or tabs, no ghost/decorative page figures, no per-section restarts, no varying position or size. One treatment, one place, every page.

## The logo is an inline vector
Embed the wordmark as **inline SVG** (or a genuinely embedded vector), never as a linked `.png`.

- Sharper at every size, and sharp in print at any scale.
- Keeps external links to a minimum — a document should not depend on a linked raster to render correctly.
- Use the provided files: `assets/logo.svg` (navy `#16335D` on light), `assets/logo-white.svg` (on navy), `assets/logo-black.svg`.
- A raster is acceptable **only** where the target format cannot carry vector artwork — the IDML `Links/` folder is the one such case, and even there the on-page HTML/PDF version stays vector.
- Never retype the wordmark as live text, and never redraw it.

## The footer is invariant
The content-page footer is always the same construction: **"Hargrove Firm · [Doc Name]" at left, zero-padded page number at right** — same size, same position, same treatment on every content page of every piece. Never redesign it: no logo/wordmark swapped in for the text, no repositioning, no per-piece variation. The fresh-composition rule applies to the CONTENT area of a page; frame elements (margins, footer, pagination) are fixed brand furniture. Covers, dividers and closing pages carry no footer at all.

## Equal text, equal setting
Text of the same importance gets an **identical** setting — size, weight, colour. Two paragraphs from the same source flow are never split into a large "lede" and a smaller continuation; that invents a hierarchy the author didn't write, and makes the second paragraph read as a footnote. Size contrast lives between **headings and body**, not inside body copy. A distinct subtitle/lede exists only when the source itself marks one (or when we wrote the copy and the role genuinely differs).

## Italics are never used
No italic or oblique anywhere — not for subtitles, pull quotes, quoted examples, contact lines, disclaimers or emphasis, and **not even when the source sets the text in italics**. Reproduce the words upright and carry the emphasis with weight (SemiBold 600 / Bold 700), navy `#16335D` against grey `#696969` body, size, or a hairline rule.

## Print type sizes
**Never a decimal size.** Always round to a whole point value — `10pt`, not `9.38pt`; `13pt`, not `12.94pt`. This applies to **font size and leading alike**. Fractional values appear when a size is converted out of a pixel measurement (the IDML pipeline is the usual culprit) — round every value before it ships.

**Main text is 10pt minimum**, and 10pt is the normal setting. Body copy never goes below it.

**Everything else is larger than the main text** — subheads, eyebrow labels, headlines, stat numerals. An eyebrow is a small label, but in print it still sits at or above the body size (11pt against 10pt body); it is never set smaller.

**Only small notes may go under 10pt** — disclaimers, legal lines, pinned footers. Nothing else.

> Scope: this is the print/pt rule. The 1200×1200 social canvas keeps its own documented pixel scale in `social-linkedin.md` (where the eyebrow is deliberately smaller than body copy).

## Print geometry — measure, don't eyeball
Before delivering any `doc-page` piece: every `.page` is 816×1056 at letter with `scrollHeight === clientHeight`; every content footer sits the same distance from the page top; one H2 size and one body size across the whole document; no decimal pt values; page numbers zero-padded with none on navy cover/closing pages.

When a page overflows after a change, take the pixels out of **block spacing** — never out of the type scale on that page alone. An outlier heading size is more visible than a tight margin.

`doc-page` pagination can silently fail (its `_measure()` runs through `requestAnimationFrame`, which does not always fire) — kick it from `componentDidMount` and verify `paginated` is on the sheet. Full snippet: `working-from-a-word-source.md`.

## Whitespace
Generous whitespace is part of the brand, but a page that reads as *empty* is a layout problem. If a page is left with too much white, **stretch the design** — open up block spacing, scale the heading tier, or let a block span more of the measure — until the page feels composed. Do not add filler content, and **never absorb whitespace by enlarging one body paragraph over its equals** (the invented-lede mistake): body copy keeps one setting; stretch happens in spacing and headings.

## Covers: plan for an image
About **half** of brochure and deck covers carry an accompanying image. Build covers so an image can land without a redesign, and include a **visible placeholder** where the image will go when the real asset isn't available yet — a tone-on-tone navy panel (`#1B3A68` / `#22406E`) labelled for the intended image. Never substitute a stock photo or a drawn illustration.
