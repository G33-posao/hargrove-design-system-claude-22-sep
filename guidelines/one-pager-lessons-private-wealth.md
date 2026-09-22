# How a one-pager is built — lessons from the Private Wealth brochure (Sep 2026)

> **For the Hargrove Design System.** Copy to `guidelines/` and index it in the README next
> to `idml-export-workflow.md`, `units-pixels.md` and `working-from-a-word-source.md`.
> Read it before any print one-pager, brochure page or IDML delivery.

The school for this file is the client's own corrected InDesign export
(`Stephen Putnoki-Higgins Meet the Chair.pdf`). Our IDML of the same page needed nine
rounds of hand correction. Every rule below is something the client had to fix, stated
first as **design logic** and then with the evidence. The logic is what transfers to the
next piece; the numbers are proof, not a recipe.

---

## A. Design logic — how elements relate

### A1. Everything belongs to something. Nothing floats.
Every element has a *partner*: a heading belongs to the block beneath it, a card to the
column beside it, a rule to the two texts it separates, a CTA to the margin it starts on.
Before placing anything, name its partner. If you cannot, the element is floating.

- A **heading is part of the block it introduces.** When a block moves (bottom-aligned,
  pushed down for slack), the heading moves with it and stays tight to its first item.
  Never leave a heading attached to the paragraph *above* it with air below.
  *Evidence:* "Designed around the advisor relationship" — intro→heading 59 px of air,
  heading→first item 39 px. Ours had it the other way round.
- **Boxes align by their edges, text by its baseline.** A card's bottom edge lands on the
  facing column's last line. The card's padding is never sacrificed to hit that; if the box
  must grow, it grows and the content stays inside the padding.
  *Evidence:* card bottom 725.8 ↔ last checklist baseline 726.3; credentials baseline 708,
  18 px above the edge. Our attempts: text baseline aligned instead (wrong partner), then
  padding collapsed to zero (defect).
- **A separator gets equal space on both sides.** A rule jammed onto the text above it
  reads as an underline, not a divider. *Evidence:* bio→rule 17, rule→credentials 17.
- **The left edge of text is the margin or a column start — one of two values on the page.**
  CTA band text sits on the page margin like every heading above it, even though the band
  itself bleeds off the page. *Evidence:* x = 54 for every heading, row title and the CTA.
- **Right edges share one line too.** Prices, hairlines and the card all end on the right
  margin (762).

### A2. Slack goes between sections, in proportion to the break
When content is shorter than the page, the surplus is distributed at the *structural*
breaks — largest gap at the biggest change of subject — never left as dead space above
the footer while the sections above sit cramped. Within a block, spacing stays tight.
*Evidence (his page, top→bottom):* intro→list heading 59 · card→"Representative
engagements" 57 · table→note 28 · note→CTA 33 · CTA→disclaimer 27 · disclaimer→edge 25.
Inside blocks: heading→first item 39 (16 px cap + 23) · item→item 32 · row padding 12.

### A3. One text block = one story
A title and its description, a name and its role, a row title and its sub-line, a cover
title and its subtitle are **one text frame with a paragraph break**, not two frames. The
client should be able to edit a line and have its partner reflow. Frames split only where
the layout genuinely separates them: a rule, a box edge, a column change, an image.

### A4. Frames are as wide as their column, never as wide as their text
Frame width comes from the CSS column the text lives in, not from the text's rendered
width. Cover titles run margin to margin. InDesign sets Inter 3–4 % wider than Chrome —
a shrink-wrapped frame *always* re-wraps. A one-word orphan is a width bug and is fixed by
widening the column in the HTML, never accepted.
*Evidence:* our title went 2→3 lines and hit the subtitle; "scale." and "base." orphaned.

### A5. Print is not a web page
- No button-shaped pills. A print CTA is a navy **band that bleeds off the left page edge**,
  one rounded end (radius = h/2), text starting on the margin. Web deliverables keep the pill.
- A footnote under a table gets **no rule of its own** — the table closes with one hairline,
  the note follows on spacing alone.
- The **legal disclaimer sits on one line at full measure**, well clear of the page edge
  (≥ 24 px). Choose the size that fits one line (7 px here); verify the measured width ≤ the
  measure.
- A **person-card headshot is ≥ 96 px** (100 here); 72 px reads as a list thumbnail.

### A6. When a client-corrected reference exists, it is the spec
Measure its gaps and write them into the HTML before designing anything. Do not re-decide
what the reference has settled. Then apply A1–A5 to whatever the reference doesn't cover.

---

## B. Working method (HTML first, then IDML)

1. **Read the reference / source.** List the blocks and, for each, its partner (A1).
2. **Build the relationships in the HTML** so they hold by construction: two-column rows
   `align-items: stretch`; a block that must sit on the row bottom gets `flex:1;
   justify-content:flex-end` **with its heading inside the group**; a card pins its last
   block with `margin-top:auto` inside normal padding; symmetric margins around rules.
3. **Alignment probe on the rendered HTML** before measuring for IDML: collect every block's
   box; each edge must sit within 2 px of a margin, a column edge, or a sibling edge, or be
   a deliberate gap from the spacing list. Anything else is fixed in the HTML.
4. **Measure for IDML** — column widths, not text widths (A4); merged stories (A3).
5. **Wrap pre-flight** with the shipped Inter TTFs at +4 % width: every frame's line count
   equals the browser's, no orphans, every band clears its text by ≥ 30 px.
6. **Package**, then **diff the delivery against the client's return PDF** (text baselines
   *and* shapes via pdf-parse `getTextContent` + `getOperatorList`). Anything they moved is a
   new line in this file.

---

## C. Reference values from this piece (816 × 1056 px, margins 54)

Cover band 251 · logo top 40 · title 38/40 ExtraBold caps, 3 lines · subtitle 15 · band→H2
44 · H2 22/25 · body 13/20 · intro→list heading 59 · list heading 16 · heading→item 39 ·
item→item 32 · chip 18, text indent 30 · card 300 wide, padding 20, radius 12 · eyebrow 11
tracked 180 · photo 100 round · photo→name 36 · name 15 Bold, role 12 · bio 12/18.6 ·
bio→rule 17, rule→credentials 17 · card→section heading 57 · heading→hairline 15 · row
padding 12 · price 20 ExtraBold right-anchored at 762 · table→note 28 · note→CTA band 33 ·
band 37 tall, from −87 to 255, radius 18.5 right · CTA text 13 SemiBold at x 54 · contact
line 13 at x 270 · band→disclaimer 27 · disclaimer 7, one line · disclaimer→edge 25.

---

## D. What was already right (keep)

816 × 1056 px, `Intent="WebIntent"`, Pixels units, `PT = 1` — no ×0.75 drift · baselines
via `frameTop = top − leading/2 + 0.364·size`, `FirstBaselineOffset="LeadingOffset"`
(0.1 px match) · tracked all-caps eyebrow · vector wordmark and checkmarks · Inter styles
from `Document fonts/` · hairlines as 1 px `GraphicLine` · right-anchored price frames.

---

## E. Kratki sažetak (HR)

Škola je klijentov PDF. Logika, ne pikseli: svaki element ima partnera (naslov pripada
bloku ispod, kartica stupcu pored, linija dvama tekstovima, CTA margini) — ništa ne pluta.
Boxovi se poravnavaju rubom, tekst baselineom; padding se ne žrtvuje. Separator ima jednak
razmak s obje strane. Višak prostora ide između sekcija, najveći na najvećem prijelomu,
nikad iznad footera dok su sekcije stisnute. Naslov+opis, ime+titula = jedan text box.
Okviri široki kao stupac, ne kao tekst; siroče je bug širine. Print nije web: bez pill
gumba (traka preko ruba), bez linije pod napomenom, disclaimer u jednom retku dalje od ruba,
portret ≥ 96 px. Kad postoji klijentova korekcija, ona je spec — kopirati, pa tek onda
dizajnirati ostatak.
