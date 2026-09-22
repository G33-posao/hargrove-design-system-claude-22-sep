# PPTX export — standing instructions

> **Scope: apply ONLY when the prompt explicitly asks for a PPT / PPTX.** PowerPoint deliveries are rare. For HTML, PDF and IDML the standing rules stay unchanged (SVG numerals, separate overlay layer, `object-fit` photos, layout-alignment.md, presentation-workflow.md). Nothing here overrides them. Convert to the PPTX form as the *last step* before `gen_pptx`, on a copy of the deck if the HTML/IDML version must stay untouched.

Learned on the CAPTRUST Partner Onboarding deck (Sept 2026), where the first export came back with doubled cover text, off-centre numerals and photos spilling out of their circles.

## Why the export differs from the browser

The editable PPTX exporter turns each DOM element into a native PowerPoint object: text frames, rectangles, ellipses, pictures. Three things do not survive that translation:

1. **Clipping.** PowerPoint pictures are placed at the image's full bounds; `overflow:hidden`, `border-radius:50%` and `object-fit:cover` on the wrapper are ignored. A 1000×1000 headshot in a 170px circle lands as a 202px square over the text beneath.
2. **Layering with transparency.** A semi-transparent shape over a picture is exported correctly in XML, but several viewers (PowerPoint for Windows included) render text under it twice — once sharp, once offset behind the overlay.
3. **SVG text.** `<svg><text>` numerals are rasterised as a separate picture whose baseline/centre differs from the browser's, so the digit sits high or low inside its badge. Positioned `<div>` digits fare no better — they become an independent text frame with PowerPoint's own line metrics.

## The rules

### Photos — pre-crop, then raster
- Crop every photo to its **exact visible frame** with canvas (`run_script`, `readImage` → `createCanvas` at the frame's aspect → `drawImage` with the source rect that `object-position` / the IDML `ItemTransform` implies).
- Keep the wrapper (`overflow:hidden; border-radius:50%` etc.) and add **`data-om-raster`** to it, so the exporter embeds the wrapper as one picture with the circle already applied.
- Result: headshots stay round, report screenshots stay inside their card.

### Full-bleed hero + navy overlay — bake it
- Draw the photo on a canvas, then `fillRect` the overlay colour at its opacity (`rgba(22,51,93,.8)` for the CAPTRUST cover) and save the result.
- Place that single image; **delete the overlay `<div>`** from the export copy. One flat picture, no transparency layer, no doubled text.

### Numbered badges — one element
- The badge shape **contains** the digit: `<div data-om-raster style="…background:#16335D;border-radius:50%;display:flex;align-items:center;justify-content:center;color:#FFF;font-weight:800;font-size:28px;line-height:1">1</div>`.
- `data-om-raster` on that div exports the circle+digit as one picture, centred exactly as the browser draws it.
- Sizes used: 56px circle → 26px digit · 64px → 28px · 72px → 32px · 88px chip → 44px.
- This replaces the SVG-numeral rule **for the PPTX copy only**. The HTML/IDML deck keeps SVG numerals.

### What exports fine as-is
- Inline SVG icons (Lucide outline, checkmark polylines) — auto-rasterised, correct size and position.
- Rectangles, rounded rectangles, ellipses with solid fills, 1px hairlines, drop shadows.
- Live text frames: Inter is named in the file; if the recipient lacks Inter, PowerPoint substitutes and reflows. Offer an Arial-swapped or screenshot variant when that matters.

## Procedure

1. Finish the deck in the normal (HTML/IDML) form and get sign-off.
2. Make the PPTX conversions above on the deck being exported (or on a `… PPT.dc.html` copy if the HTML must stay canonical).
3. `show_to_user` the deck, then `gen_pptx` with `width:1920, height:1080`, `resetTransformSelector:"deck-stage"`, one entry per slide (`goTo(N)`, selector `deck-stage > [data-deck-active]`).
4. Verify by unzipping the .pptx and reading `ppt/slides/slideN.xml`: every `<p:pic>` should sit at its wrapper's coordinates, no `<a:alpha>` fill on the cover, no standalone single-digit `<a:t>` frames.

## Checklist before handing over a PPTX
- [ ] Every photo pre-cropped and its wrapper carries `data-om-raster`
- [ ] Hero overlay baked into the image; overlay div removed
- [ ] Every numbered badge is one `data-om-raster` div containing its digit
- [ ] Speaker notes present on every slide (the exporter reads `data-speaker-notes`)
- [ ] 14/14 (or N/N) slides captured, no duplicate-adjacent warnings
- [ ] Told the user the Inter-font caveat
