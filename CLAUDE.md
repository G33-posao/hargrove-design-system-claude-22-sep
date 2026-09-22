# Hargrove Design System — standing rules

**Moving accounts? Read `guidelines/MIGRATION.md` first — it is the step-by-step runbook, including the namespace fix that everything depends on.**

Read `readme.md` first. **The 2026 Brand Guideline Deck (`guidelines/brand-guideline-deck.md`) is the most authoritative brand document — read it for ANY new piece; where anything conflicts with it, the deck wins.** Then read the guideline that governs the deliverable — these are client-dictated rules, not suggestions:

| Building | Read first |
| --- | --- |
| **Everything** (brand voice, pillars, taglines, writing style, palette) | `guidelines/brand-guideline-deck.md` |
| **Any new deck, guide or social card** | `guidelines/reference-library.md` → the Sep 2026 client-produced set in `guidelines/reference/` (open the matching PDF; it shows how new content is generated) |
| **Anything from a template** | `guidelines/using-templates.md` |
| **Anything built from a Word/PPTX source** | `guidelines/working-from-a-word-source.md` |
| **Any IDML delivery** | `guidelines/units-pixels.md` (pixels ALWAYS — even print), then `guidelines/idml-export-workflow.md` |
| **Any print one-pager or brochure page** | `guidelines/one-pager-lessons-private-wealth.md` (every element has a partner; frames = column width; client-corrected reference is the spec) |
| **Any print brochure, case study or IDML delivery** | `guidelines/case-study-lessons-weg.md` (nothing not in the source; one topic = one frame; lists in full and uniform; 80 px margins; cover photo Multiply 40 %; three-part footer) |
| **A PPT/PPTX — ONLY when explicitly asked** | `guidelines/pptx-export.md` (final conversion step; never for HTML/PDF/IDML) |
| Any deck or presentation | `guidelines/presentation-workflow.md`, then `guidelines/deck-text-hierarchy.md` (source bullet levels survive; one treatment per level) |
| Any print piece (brochure, one-pager, doc) | `guidelines/layout-alignment.md`, then `guidelines/one-pager-lessons-private-wealth.md` |
| Any LinkedIn / social visual | `guidelines/social-linkedin.md` — **1200 × 1200 px always, unless the user states another size** |
| Anything that mirrors the product or site | `guidelines/site-reference.md` |
| Recreating any live-site section | `guidelines/site-sections.md` |
| A hero, or any new web section | `guidelines/site-reference.md` → "THE HERO" |
| Named people (titles, contacts) | `guidelines/team-directory.md` |
| Page numbers, anywhere | `guidelines/pagination.md` |

## The rules that get broken most often

**Units — pixels, ALWAYS**
- **Design and build in pixels; never convert px → pt — not even for print.** Every deliverable, every IDML. Only type size is in points, and it is numerically identical to the px value (72 ppi).
- IDML, every document: `Intent="WebIntent"`, page size = the px numbers verbatim, Pixels measurement units, no scale factor anywhere (`PT = 1`), export at 72 ppi.
- **Print is not an exception.** A paper piece is authored in px at the Letter proportion; the client rescales in InDesign by changing resolution only, and the layout survives 1:1. **Author at 612 × 792 px** (72 ppi, where px = pt exactly); the client sets 300 dpi and gets 2550 × 3300 with the same layout. **Letter only — never A4** (US client). Print's typographic rules still apply (10pt min body, no decimals, equal margins, no hyphenation) — only the unit system stays px.
- **Why:** every px → pt conversion is where HTML that looks right falls apart in IDML — positions shift, spacing rounds, elements detach. 1:1 geometry removes that whole class of failure. Detail: `guidelines/units-pixels.md`.

**Setting a source document**
- **Always read and apply PDF comments/annotations.** Client corrections often live only in the PDF's comments, not its page text — extract annotations (pdf.js `getAnnotations()`) on every source PDF and apply them; they are client-approved corrections and outrank verbatim. Detail: `guidelines/working-from-a-word-source.md`.
- **Redesign means DESIGN ONLY.** When redesigning an existing PDF/document the text is frozen: same words, casing, block order, and heading/subheading splits as the source. Block order is part of the verbatim rule — reordering sections is the same violation as rewriting. PDF-extraction text order is NOT layout order (extractors mix columns); verify the real order on the rendered page, and ASK rather than guess. Never merge or split source headings. Full detail: `guidelines/presentation-workflow.md` → "Redesign = DESIGN ONLY".
- **Match the source's own hierarchy.** Two paragraphs that look equal in Word look equal in the piece. **One body setting per document** — no paragraph gets a different size or colour unless the source marks it. Bold in Word stays bold. **The recurring failure mode is the invented "lede"**: enlarging the first paragraph (or any paragraph) relative to its equals. Size contrast belongs between headings and body only — never inside body copy. "Stretch the design" for whitespace means block spacing and heading scale, NEVER splitting equal body text into big/small.
- **Source emphasis maps 1:1.** What the source frames/sets apart stays the emphasized element (a box stays a box); never promote a plain bullet into the featured card while demoting the source's own callout. Relocating emphasis rewrites the author's hierarchy.
- **Never dismantle a paragraph to build a graphic.** The sentence stays whole and verbatim in the flow; a stat callout goes *beneath* it as reinforcement, never instead of it.
- **Footnote markers stay on their word**, and the note sits at the foot of that page, 8pt. Always damp `<sup>` (`font-size:7pt;line-height:0;position:relative;top:-.35em`) or it breaks the leading.
- **No italics, anywhere** — not even when the source is italic. Carry emphasis with weight, navy against grey, size, or a hairline.
- **Cover title may be ALL CAPS** (the brand's cover register) — the only casing change allowed. Set it 50–56pt ExtraBold across the full measure, subtitle to the same measure, image placeholder as a full-width band.
- Full detail, including the `doc-page` pagination trap: `guidelines/working-from-a-word-source.md`.

**Typography (print)**
- Body text **10pt minimum**, and 10pt is the normal setting.
- **Never a decimal size** — round every value, font size *and* leading. `10pt`, not `9.38pt`. Decimals come from px→pt conversion in the IDML pipeline; round before writing.
- Everything else sits **larger** than body — subheads, eyebrows, headlines. An eyebrow is 11pt against 10pt body, never smaller.
- Only **disclaimers, legal lines and pinned footers** go under 10pt.
- **Inter only.** Never Inter Display — it is not part of the brand.
- **Headline tracking is 0 — never negative.** No `letter-spacing:-0.02em`/`-0.015em`/`-0.01em` on titles, headings, names or statements (HTML and IDML alike). The only letter-spacing in the system is the positive eyebrow spacing (~.14–.2em). Full Aug 2026 client-feedback list (hierarchy scale, people order, whitespace, statement slides, centered Q&A): `guidelines/presentation-workflow.md` → "Client feedback".
- **Never italic or oblique**, in any medium, for any purpose — including when the source sets italics.

**Numerals and checkmarks**
- Any number inside a box or circle (`01`–`04` badges, navy numeral tabs) is **inline SVG**, never a text node. All three required: `text-anchor="middle"` + `dominant-baseline="central"`, the SVG **fills** the box (fixed box + `width:100%;height:100%`), and **`display:block`** on the SVG. Padding does not centre a glyph.
- Checkmarks are the same — white check in a navy square, drawn as SVG.

**Pagination**
- **The footer is invariant**: "Hargrove Firm · [Doc Name]" left, page number right — identical on every content page. Never swap in a logo, reposition, or restyle it; creativity lives in the content area, never in the frame (margins/footer/pagination).
- **Zero-padded**: `01`, `02`, `03` … `10`, `11`, `12`. Decks and brochures alike.
- **The cover counts as `01`** (unshown). A page's number = its physical position: page 2 shows `02`, page 3 shows `03`. Never restart the count at the first content page. Covers/dividers/closing pages show no number but keep their place in the count.
- **Never designed** — no oversized numerals, no numbers in boxes or tabs, no ghost page figures, no per-section restarts. One size, one position, every page.
- No page number on covers, section dividers, or closing pages.
- **Never "Confidential"** in a footer, or any other label the user did not ask for.

**Boxes and alignment**
- Text inside a box is **left-aligned**, even across several lines. A price or figure on the right is **right-aligned and vertically centred** on the whole box.
- **Every box in a group takes the height of the tallest box** — only when there is a frame around the text.
- **Margins are identical on every page** of a piece. One value, no exceptions. **On Letter print pages (816 × 1056 px) that value is 80 px on all four sides** (Sep 2026 standing instruction); content follows the deeper margin, nothing is squeezed into old frames.
- Eyebrows and titles hold the **same position** on every page of a set.
- Words **never hyphenate or break** across lines — not in HTML, not in IDML. An email, URL, phone number or name inside a box sits on **one line with air on both sides** — shrink the font or widen the box, never wrap the token.

**Relationships — nothing floats** (from the client's corrected Private Wealth file; applies to every medium)
- **Every element has a partner.** A heading belongs to the block beneath it (moves with it, stays tight to its first item — never attached to the paragraph above with air below); a card to the column beside it; a rule to the two texts it separates; a CTA to the margin it starts on. Name the partner before placing anything; if you cannot, it is floating.
- **Boxes align by edge, text by baseline.** A card's bottom edge lands on the facing column's last line; padding is never sacrificed to hit it — the box grows.
- **A separator gets equal space on both sides**; jammed onto the text above it reads as an underline.
- **Two left edges on a page** — the margin or a column start; **right edges share one line** (prices, hairlines, cards).
- **Slack goes between sections**, largest gap at the biggest change of subject — never dead space above the footer while sections sit cramped. Inside a block, spacing stays tight.
- **One text block = one story.** Title+description, name+role, row title+sub-line = one frame with a paragraph break; split only at a rule, box edge, column change or image.
- **Frames are as wide as their column, never as wide as their text.** A one-word orphan is a width bug — widen the column, never accept it.
- **Print is not web:** no pill buttons (a navy band bleeding off the left edge, one rounded end, text on the margin); no rule under a footnote; disclaimer on one line, ≥ 24 px from the edge; person-card headshot ≥ 96 px.
- **One topic = one text frame.** Consecutive paragraphs of a section are one block with paragraph breaks, never separate boxes. **A source list is reproduced in full and uniformly** — N bullets = N identical cards in a grid that closes (2×2), never three cards plus a demoted sentence. A stat keeps its unit in the numeral (`4.31 out of 5` is one figure). Detail: `guidelines/case-study-lessons-weg.md`.
- **Case-study cover:** full-bleed photo at Multiply 40 % over navy (`assets/cover-photo.png`), HARGROVE wordmark left and the partner's wordmark right on one axis, 16 px letterspaced eyebrow, title ≈ 60 px ExtraBold caps filling the measure, bottom-anchored. Content page 02 opens with the partner logo in a white card, in the partner's own brand colour. Page-opening headings take a `THE X:` caps + bold prefix; footer is `Hargrove Firm · [Partner] · [Doc type]`.
- **A client-corrected reference is the spec** — measure it and write its gaps into the HTML before designing anything else. Method and evidence: `guidelines/one-pager-lessons-private-wealth.md`.

**Composition**
- Navy `#16335D` is the **only** accent. No gold, no teal, no charcoal, no second accent. The **one** sanctioned gradient is the hero's tonal navy deepening (`#16335D → #0A1C38`); never a gradient as decoration.
- The website's **footer is light**, not navy. The hero headline is **two-tone** (white over `#C9D6EA`). Both are easy to get wrong — see `guidelines/site-reference.md`.
- The **dotted US map** is the brand's signature background graphic (hero, stat band). Reuse it; never substitute a texture, stock photo, or hand-drawn SVG.
- Navy sandwich: navy cover / dividers / closing, light content pages. Commit fully per page.
- One focal point per view. No underline bars beneath titles, no accent stripes.
- Text anchors to a clear edge — never floats vertically centred without intent.
- Too much white on a page → **stretch the design** (type sizes within scale, block spacing). Never add filler content.
- Brochure and deck covers: about half carry an image — leave a labelled tone-on-tone navy **placeholder** where it goes.

**Templates and creativity**
- A template is a **palette, not a mould**. It shows which parts exist and what the correct values are. It does not dictate structure, section count, or page count.
- **The source dictates structure; the design system dictates styling.** Headings, their wording, their casing, their order and how many there are come from the source document.
- **Never fill a slot because it exists.** No eyebrow in the source → delete the eyebrow. Four sections in the source → four sections. Deleting template parts is normal.
- **Verbatim outranks house style.** Title Case in the source stays Title Case; the sentence-case rule applies only to copy we write.
- **Never split a source heading** into eyebrow + headline, and never promote a body sentence to a heading.
- **Every piece is a fresh composition — a hard rule.** Each new deck/brochure/post must differ from the last delivered one of its kind in **at least two** of: grid, cover treatment, section rhythm, carrying component, scale strategy. Brand style (navy, Inter, margins, pagination, craft) identical every time; composition never repeats. In a fresh conversation, pick a composition the template does NOT show.
- Read the source **before** opening a template. Full diagnosis of what happens otherwise: `guidelines/using-templates.md`.

**Copy**
- All body copy is **verbatim** from approved source. **Zero changes** — do not fix grammar or spelling, do not restructure, do not reorder. Flag errors in chat instead.
- **Never add words the source did not contain** — no invented eyebrows, kickers, captions, or section counters above a heading ("SECTION 01", "PART 01", "STEP 01", a bare "01"). Numbering is only correct where the **source itself** enumerates — a source's own ranked list may carry `01`–`04`; a counter we add to label sections may not. If the source has no eyebrow, the layout goes without one — a bare headline is fully on-brand; the eyebrow is an optional slot, not part of the frame. **Repurposing the document title as an eyebrow over every heading is the same violation** (it already sits in the footer). Decorative graphic elements are fine; they must not introduce words.
- **Stat callouts** are allowed and are good graphic detail, but the label under a figure must be a **shortened fragment of the source's own words**, never a rephrasing — and never repeat the full sentence beside the callout.
- If copy is missing, ask for it. Never fill the gap.
- No emoji, anywhere.
- Banned phrases: "peace of mind", "competitive pricing", "legal professionals" — plus the deck's avoid-list: "affordable", "seamless", "integrated", "comprehensive", "no hidden fees", "anywhere/everywhere", "product/solution/offering", "our team" (for attorneys). Preferred replacements: `guidelines/brand-guideline-deck.md` → Writing style.

**Client-supplied code**
- When the client sends working HTML/CSS for a section, **use it verbatim** — split it into a stylesheet + a markup file and inject it. Do not reconstruct it in JSX and do not retype its values. The hero is the reference case: `ui_kits/website/hero.css` + `hero-markup.js`.

**Logo**
- Embed the wordmark as **inline SVG**, never a linked `.png` — sharper, and no external dependency. `assets/logo.svg` on light, `assets/logo-white.svg` on navy. The IDML `Links/` folder is the sole exception, since IDML cannot carry the SVG.
- Never retype the wordmark as live text; never redraw it. **The same applies with more force to third-party partner logos** — real vectors only (see `ui_kits/website/partner-logos.js`); omit a logo rather than typing its name.

**Team**
- Titles and contacts are in `guidelines/team-directory.md` — confirmed from the official business cards. Never invent a title.

**Language**
- Everything written into the design system — guidelines, README, notes for future sessions, comments in templates — is in **English**, regardless of the language of the conversation.

## NetLaw is retired
**NetLaw no longer exists.** Do not describe it as the underlying platform and do not use `@netlaw.com` addresses — Mo Zoubi is **mzoubi@hargrovemso.com** (confirmed). Older source documents still say `mo@netlaw.com`; that is the one place a verbatim address must be corrected, so flag it rather than carrying it forward. Note the live site still links `login.netlaw.com` for Sign in — verify before reproducing it.

## Unresolved — ask before publishing
- **Phone number:** brand notes say (833) HARGROVE; the live site says **(877) 564-8716** everywhere.
- **Portraits:** the site's attorney portraits are black-and-white; the four supplied headshots are colour.
- **Missing site assets:** the portal screenshot and the testimonial portraits are still labelled placeholders in `ui_kits/website/` — remote binaries could not be pulled in. Ask for the files. (The dotted US map is in hand: `ui_kits/website/us-map.js`.)

## Not ours to design
The **advisor portal** is built and owned by the Hargrove dev team. `ui_kits/portal/` is a one-off preview kept only for pulling a product screenshot — never treat it as the product's source of truth, and do not make it a template.

## Never
Write `_ds_bundle.js`, `_ds_manifest.json`, or `_adherence.oxlintrc.json` — the compiler generates them.
