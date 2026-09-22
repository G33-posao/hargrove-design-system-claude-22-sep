# LinkedIn Social — Design Guidelines

**Format — standing rule (Sep 2026): every LinkedIn graphic is 1200 × 1200 px unless the user states another size.** Square, one artboard per card, exported 1:1. Never default to 1200 × 627 link-preview or 1080 × 1080 proportions; a different size must be stated in the brief.

Source: `uploads/Hargrove-Social-Design-Guidelines.pdf` (July 2026, v1.0). The document states it **replaces all previous visual direction**. Follow it exactly for any social visual.

## Ten rules that are never broken
If a visual violates any of these, it does not ship.

1. **Navy `#16335D` is the only accent.** No gold, no tan, no cyan, no second accent color. Ever.
2. **Backgrounds are flat** — navy `#16335D`, white, or panel `#F8F8F8`. Never charcoal or near-black, never gradients.
3. **Inter is the only typeface** — the original rsms.me family. Not Poppins, not Montserrat, not a lookalike, **not Inter Display**.
4. **One focal point per card.** One message, one hierarchy. Generous whitespace is part of the brand.
5. **No underline bars beneath headlines.** No divider rules under titles, no accent stripes, no color bars. Separate with whitespace.
6. **Icons are small, thin, and functional** — Lucide outline in navy chips. Never oversized watermarks, never gradient or duotone fills.
7. **The wordmark is the provided SVG** — never typed as live text. Navy, white, or black only.
8. **Headlines are one color** — white on navy, navy on light. No two-tone headlines, no words highlighted in a second color.
9. **Copy is verbatim from approved source.** Sentence case for content, ALL CAPS only for hooks and covers. No emoji, anywhere.
10. **When in doubt: calmer, quieter, more navy.** Restraint reads as authority.

## Known off-brand patterns — do not repeat
The document diagnoses recent LinkedIn posts. Every item below is banned:
gold/tan accents · charcoal (warm near-black) backgrounds · a rounded geometric sans (Poppins-style) instead of Inter · two-tone or gold headlines with highlighted words · underline bars beneath titles · oversized gradient/duotone icons as decoration · a retyped "HARGROVE" wordmark in the body font · gold carousel arrows and hairlines.

## Card anatomy — the 1200×1200 grid
Canvas **1200×1200px**, fixed **96px margin** on all four sides. Nothing crosses the margins except a full-bleed navy surface.

1. **Wordmark** — provided SVG, **210px** wide, pinned to the top-left margin corner (bottom-left on covers and closing cards). Range 180–220px, never below 160px. Clear space equal to the height of the "H" on all sides.
2. **Eyebrow** — optional topic/event label, 30px, `0.18em` tracking, uppercase.
3. **Headline** — the single focal point, anchored to the text-block edge. One color. No underline bar.
4. **Support line** — one short sentence, `#C9D6EA` on navy, max width **800px**.
5. **Carousel arrow** — multi-slide posts only, bottom-right, thin **3px** stroke, white on navy / navy on light. Never gold.

Vertical gaps: **28px** eyebrow→headline, **44px** headline→support.

## Type scale (1200×1200 canvas)

| Element | Spec | Color |
| --- | --- | --- |
| Eyebrow label | SemiBold 600 · 30px · UPPERCASE · ls `0.18em` | `#C9D6EA` on navy · `#999999` on light |
| Hook headline | ExtraBold 800 · 84–100px · ALL CAPS · lh 1.08 · ls `0` · max 3 lines | White on navy · `#16335D` on light |
| Content headline | SemiBold 600 · 56–64px · sentence case · lh 1.1–1.15 | White on navy · `#16335D` on light |
| Body / support | Regular 400 · 34–38px · lh 1.5 · max 9 words per line | `#C9D6EA` on navy · `#696969` on light |
| Stat numeral | Black 900 · 180–240px · ls `0` | `#16335D` on light · white on navy |
| Minimum size | Nothing below **26px** on a 1200px canvas | — |

Two registers: **hook** (ALL CAPS ExtraBold — covers, big statements) and **content** (sentence case SemiBold — everything else). Text anchors to a clear edge, top or bottom — never floats vertically centered without intent. Body always left-aligned, never centered.

## Iconography
Lucide (outline / Feather weight). White 2px-stroke icon in a navy chip, **12px** corner radius, chips **88–96px** on the 1200px canvas. Standalone navy strokes only at small list sizes. Checkmarks: white check in a navy square (**14px** radius at 64px).

Never: gradient/duotone fills · oversized icons as background decoration or watermarks · gold, grey-on-charcoal, or multi-color icons · filled/solid styles, sharp corners, mixed stroke weights · emoji · illustrations or clip-art drawn to fill empty space.

## Carousels — the navy sandwich
`COVER navy → CONTENT light → CONTENT light → CONTENT light → CLOSING navy`

- **Max two background colors per carousel** — navy + one light (white or `#F8F8F8`). An all-navy short statement series is also acceptable. Never alternate randomly.
- **One idea per slide.** Headline plus at most one support sentence or one short list. Two ideas = two slides.
- **Arrow on every slide except the last.** The closing card carries the CTA and URL instead.
- **Identical frame throughout** — same margins, type scale, and wordmark placement on every slide.

## Template library (7 standard layouts)
The document defines seven layouts covering the full posting calendar: three rebuilt posts (navy statement cover, light content card with navy checkmark squares, navy carousel cover) plus **Event announcement** (navy cover), **Stat callout** (light), **Quote / testimonial** (panel), and **Carousel closing card** (navy). Placeholder text in `[brackets]` is replaced with approved copy only.

## Pre-flight checklist — all twelve pass, or it does not publish
1. Background is flat navy `#16335D`, white, or `#F8F8F8`
2. Only brand hexes — no gold, teal, charcoal, gradients
3. Every glyph is Inter 400/500/600/700/800/900
4. Headline is one color; no highlighted words
5. No underline bar, stripe, or color bar anywhere
6. Wordmark is the provided SVG, correctly placed and sized
7. One focal point; 96px margins respected
8. Icons: thin outline, navy chip or navy stroke, small
9. Copy is verbatim from approved source; casing correct
10. No emoji; no banned phrases
11. Carousel follows the navy sandwich; arrow placement correct
12. Stats and facts match the canonical list (see `../readme.md` → Canonical facts)

## People panels (multi-speaker cards — panels, webinars, "meet the team")
Learned on the Wealthies 2026 post; applies to every visual that lines up several people.
- **Panels bleed off the canvas** (top + right edge) with **no gaps** between them — they are one continuous band, not tiles with gutters.
- **Head centred by the eye**: gap from left ear to panel edge = gap from right ear to panel edge. **Both ears fully visible** — a clipped ear reads as a bad crop.
- **Consistent head scale** across every panel, and **eyes on the same height** across all of them. Measure; do not eyeball.
- **Faces fade into navy toward the bottom**; the title sits centred inside that fade — **22px SemiBold white** on the 1200px canvas.
- "No names, titles underneath" from the client means exactly that: **skip names, keep titles**.
- Titles come from `team-directory.md` only (e.g. Alex Hargrove — Chief Executive Officer, Board Member). Never invent one.
- Photo sources: `../assets/people/` (originals), `cutout/` (transparent), `bw/` + `cutout-bw/` (mono). Crop from the original, never from an already-tight headshot — the eye-centring rule needs room on both sides.

## Voice
Confident · Clear · Credible · Human. "You" for advisors, "we" for Hargrove. Copy is verbatim — if copy is missing, request it, do not write it. Banned phrases: "peace of mind", "competitive pricing", "legal professionals".

> Questions on anything not covered by the source document: send the draft with a note — do not improvise.
