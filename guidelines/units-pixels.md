# Mjerne jedinice — pikseli (standing instruction)

Client rule, Aug 2026, **updated**: applies to **every** Hargrove deliverable, print
included. There is no point-based pipeline any more.

## The rule

**Design and build in pixels, always. Never convert px → pt — not even for a print
piece.** The only thing measured in points is type size, and even that is numerically
identical to the px value because the document sits at 72 ppi (68 px headline = 68 pt
= 68 px on screen).

99% of Hargrove output is consumed on the web — YouTube thumbnails, LinkedIn cards,
website sections — and the client opens and converts documents in Canva and other
browser tools. A document authored in points survives none of that conversion.

**Print is rare and is NOT an exception.** A paper piece is authored in pixels too: as
long as the page keeps the Letter proportion,
the client rescales it in InDesign in seconds. That is a trivial fix; a geometry
blow-up is not.

**The real reason this matters:** every px → pt conversion is a place where the design
drifts. HTML that looks right routinely falls apart in IDML — positions shift, spacing
rounds off, elements detach from their relationships. Keeping the geometry 1:1 with
the HTML removes that whole class of failure. Measure once, write the same numbers.

## Why (the failure this prevents)

The YouTube thumbnail set (Aug 2026) was authored 1280×720 px in HTML and exported to
IDML with the standard print pipeline: geometry × 0.75 into a 960×540 pt document.
When the client converted that document to a 1280×720 px web document in Canva, the
page grew to 1280×720 while every object kept its 960×540 numbers. The whole design
sat at 75% in the top-left corner, photos hanging off the artboard. Nothing was
recoverable by scaling — the geometry had to be regenerated.

## IDML settings — every document

- `DocumentPreference PageWidth` / `PageHeight` = the px numbers verbatim
  (1280 / 720), plus `Intent="WebIntent"`.
- `ViewPreference HorizontalMeasurementUnits="Pixels" VerticalMeasurementUnits="Pixels"
  PointsPerInch="72"`.
- Every coordinate, frame size, radius, stroke and leading value = the measured px
  value, 1:1. No scale factor anywhere in the generator (`const PT = 1`).
- `PointSize` = the CSS px size as-is. Leading = the CSS line-height in px.
- Tracking stays in 1/1000 em (0.18 em → `Tracking="180"`).
- Images: place at their px frame size; `ActualPpi="72 72"`, `EffectivePpi` derived
  from natural size ÷ frame size.
- Export at **72 ppi** to get exactly the intended px dimensions.

Because there is no px → pt rounding, the whole-point font-size house rule and the
frame-width rounding-factor reserve from the print pipeline do not apply here: sizes
are already integers and frame widths match the browser's wrap width exactly (a
small reserve of ~8 px is still fine).

## Print pieces

A print piece is authored in pixels like everything else — the page is sized in px at
the correct **proportion**, and the client rescales to physical paper in InDesign by
changing the resolution only. Because the geometry is 1:1 with the HTML, page and
element proportions survive that step exactly; nothing reflows.

Letter (8.5 × 11 in) in pixels:

| Resolution | Pixels |
| --- | --- |
| 72 ppi | 612 × 792 |
| 96 ppi (screen) | 816 × 1056 |
| 150 ppi | 1275 × 1650 |
| **300 ppi (print)** | **2550 × 3300** |

**House choice: author Letter pieces at 612 × 792 px** — our IDML documents sit at
72 ppi, so px and pt are numerically identical there and the type sizes in the spec
need no adjustment at all. The client then sets 300 dpi in InDesign and gets
2550 × 3300 at the same layout. Any row in the table is acceptable as long as the
ratio is right and body type stays proportional (10 pt body on a 612 × 792 page).

**Letter only — forget A4.** Hargrove is a US client and every print piece is US
Letter. Never author, offer, or fall back to A4 for this brand.

The typographic house rules from `idml-export-workflow.md` still hold for print
(10 pt minimum body, no decimal sizes, identical margins, no hyphenation) — it is only
the **unit system and geometry** that stay in pixels.

## Delivery note wording

State the unit system in the package README every time, e.g. "Dokument: 1280 × 720
piksela, mjerne jedinice u dokumentu su pikseli (72 ppi, Web intent), geometrija 1:1
s HTML verzijom. Export na 72 ppi daje točno 1280 × 720 px."

For a print piece, add that the page is in Letter proportion and can be scaled
to physical Letter in InDesign without the layout shifting.
