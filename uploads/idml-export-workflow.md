# IDML export — standing instructions

How to turn an HTML design (brochure, one-pager, deck page) into an InDesign IDML
package. Written after the Ideal Client Profile brochure (Aug 2026) took thirteen
versions; every rule below is a mistake that was actually made and diagnosed. Follow
this and the first delivery should be right.

A working reference implementation lives in the Ideal Client Profile project:
`idml/gen-idml.js` (generator) + `idml/spec4.json` (measured layout). Adapt it;
don't rewrite from scratch.

## The goal

The IDML is a **working file for a designer**, not a frozen replica. It must open
with no missing fonts, look 1:1 like the HTML preview, AND behave like a document a
human built in InDesign: text edits reflow naturally, nothing needs manual cleanup.
When fidelity and editability conflict, editability wins (a line breaking one word
differently is acceptable; hard line breaks everywhere are not).

## Pipeline

1. **Measure the live HTML preview** (eval in the rendered page):
   - Normalize every position by the real page width: `K = targetWidthPt / pageRect.width`.
     Never assume the preview zoom. Computed styles (font-size, line-height) are
     zoom-independent; `getBoundingClientRect` is NOT.
   - Convert px→pt exactly ONCE. The classic failure is text at 75% of its intended
     position (double ×0.75) while boxes sit correctly — check the first text frame
     lands exactly on the document margin before shipping.
   - Capture per element: rect, font size/leading/weight/color/tracking/caps, and
     styled runs. Capture boxes (fills, borders, radius), hairlines (single-edge
     borders), images, and SVGs separately.
   - **Skip nested text elements**: `<strong>`, `<a>`, `<sup>` inside an already
     captured paragraph are part of the parent's runs. If captured separately they
     appear as duplicate text stacked on the original. Filter: text is a substring
     of a larger frame's text AND rect sits inside it → drop.

2. **Build frames the way a designer would**:
   - **Frame width = element's design width + ~4pt**, `AutoSizingType="HeightOnly"`,
     natural text flow. No U+2028 hard breaks, no page-wide stretched frames. With
     correct widths, Inter wraps the same as the browser (±1 word).
   - **Consecutive same-style paragraphs go in ONE frame**: same x/width/size/leading
     and a gap smaller than the leading → merge into one story with a real paragraph
     break (`<Br/>`) and `SpaceBefore` = the measured gap.
   - **Centered labels** (element centered on the page/panel): frame spans margin to
     margin with `Justification="CenterAlign"` — stays centered after edits.
   - **Right-anchored bits** (page numbers): right-aligned frame anchored at the
     right edge.
   - First baseline: `frameTop = elementTop − leading/2 + 0.364 × fontSize`
     with `FirstBaselineOffset="LeadingOffset"` (0.364 = (ascent−descent)/2 for Inter).

3. **Typography XML — the parts InDesign silently ignores if wrong**:
   - Font and leading go in Properties form, never as attributes:
     `<Properties><AppliedFont type="string">Inter</AppliedFont><Leading type="unit">16</Leading></Properties>`.
     Attribute form falls back to Minion Pro with no error pointing at your XML.
   - Style names come from the TTF's name ID 17: `SemiBold`, `ExtraBold` (exact
     casing). One family "Inter" with five styles — never "Inter SemiBold" as a family.
   - Superscripts: own `PointSize` (0.7× base) + `BaselineShift` (0.35× sup size).
     `Position="Superscript"` renders 58.3% and too high.
   - `Hyphenation="false"` on every paragraph (house style).

4. **Graphics**:
   - **Logo is vector geometry in the document**, never a linked PNG. Parse the SVG
     (M/L/H/V/C/S/Z + polygon) into `<Polygon>` bezier paths; cubic control points
     map to RightDirection (outgoing) / LeftDirection (incoming).
   - **Numerals in badge chips** = vector outlines from the TTF glyf table, not text.
   - **Circular photos**: the `<Oval>` tag does NOT clip — the path geometry decides.
     Circle = 4 bezier anchors with k = 0.5523; a rectangular path in an Oval renders
     square.
   - Rounded cards: `RoundedCorner` options with the measured radius; pills = h/2.
   - Hairlines: `GraphicLine`, 0.75pt (= 1px).

5. **Document & package**:
   - `PagesPerDocument="1"`; every spread `ItemTransform="1 0 0 1 0 0"` — otherwise
     InDesign appends blank pages.
   - Zip: STORED (no compression), `mimetype` as the first entry, type
     `application/vnd.adobe.indesign-idml-package`.
   - Ship a folder: the `.idml` + `Links/` (photos) + `Document fonts/` (Inter TTFs —
     auto-activated only when the user extracts the WHOLE zip and opens the .idml
     from that folder; say so when delivering).

## Verify before delivering, and diagnose from the user's PDF

Self-check the generated IDML programmatically: first text frame exactly on the
margin, story count = intended frame count, no `AppliedFont="` attribute form,
`SemiBold`/`ExtraBold` style spellings, `<Br/>` + `SpaceBefore` present where
paragraphs merged.

When the user reports breakage, ask for their PDF export and read it with pdf-parse
(`load()` + `getTextContent()`): `transform[4]/[5]` give each line's x/baseline.
Diff against intended coordinates and look for the SYSTEMATIC pattern — ×0.75 on
everything = double conversion; uniform offset = wrong first-baseline math; doubled
short lines = InDesign re-wrapping (frames too narrow); stacked duplicate text =
nested-element frames. Don't rasterize the PDF (times out); the text-position diff
is faster and more precise.
