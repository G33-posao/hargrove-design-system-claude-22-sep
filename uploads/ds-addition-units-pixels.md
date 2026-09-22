# Mjerne jedinice — pikseli (standing instruction)

Client rule, Aug 2026. Applies to every Hargrove deliverable unless the piece is
explicitly a print piece (brochure, checklist, one-pager for paper).

## The rule

**Design and build in pixels. Never convert px → pt.** The only thing measured in
points is type size, and even that is numerically identical to the px value because
the document sits at 72 ppi (68 px headline = 68 pt = 68 px on screen).

99% of Hargrove output is consumed on the web — YouTube thumbnails, LinkedIn cards,
website sections — and the client opens and converts documents in Canva and other
browser tools. A document authored in points survives none of that conversion.

## Why (the failure this prevents)

The YouTube thumbnail set (Aug 2026) was authored 1280×720 px in HTML and exported to
IDML with the standard print pipeline: geometry × 0.75 into a 960×540 pt document.
When the client converted that document to a 1280×720 px web document in Canva, the
page grew to 1280×720 while every object kept its 960×540 numbers. The whole design
sat at 75% in the top-left corner, photos hanging off the artboard. Nothing was
recoverable by scaling — the geometry had to be regenerated.

## IDML settings for a web-intent document

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

## Print pieces are the exception

Brochures, checklists and anything destined for paper keep the print pipeline in
`guidelines/idml-export-workflow.md` (points, letter/A4 geometry, 0.5 in margins).
Decide which of the two a piece is **before** measuring, and say so in the delivery
note.

## Delivery note wording

State the unit system in the package README every time, e.g. "Dokument: 1280 × 720
piksela, mjerne jedinice u dokumentu su pikseli (72 ppi, Web intent), geometrija 1:1
s HTML verzijom. Export na 72 ppi daje točno 1280 × 720 px."
