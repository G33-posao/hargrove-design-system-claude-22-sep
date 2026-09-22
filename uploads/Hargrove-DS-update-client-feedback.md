# Client feedback — Estate Planning Playbook deck (Goran, Aug 2026)

> PASTE-READY: append this whole section to the end of `guidelines/presentation-workflow.md`
> in the Hargrove Design System project (or drop this file into `guidelines/` as
> `client-feedback-2026-08.md` and add a pointer to it from presentation-workflow.md).
> Every rule below is a correction Goran actually made — treat them as standing
> instructions for all future Hargrove decks.

## Hierarchy & source fidelity

1. **Source hierarchy is binding, including SCALE.** If the source sets the heading big
   and the quote/subline small, keep those roles. Never swap which element is the large
   one on a slide (mistake made: title set as small eyebrow, quote blown up to headline).
2. **People order follows the source's VISUAL order** (panelists, team rosters).
   PPTX/PDF extraction order is not visual order — verify on the rendered source page.
   (Mistake made: Tim/Jessi swapped because extraction listed Tim first.)
3. **Don't add "SECTION NN" labels** unless the source uses them consistently across all
   sections. A single stray "SECTION 04" in a source is likely an authoring error — ask.

## Composition & whitespace

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

## Courage & special slides

9. **Statement / closing-takeaway slides need a bolder composition** — e.g. a full-width
   navy panel (radius 14) with white statements — NOT body text styled like the title.
   Goran, verbatim: more courage, less rigidity, "ipak smo mi dizajneri a ne roboti" —
   while staying strictly inside the brand (navy-only accent, Inter, no gradients).
10. **Q&A and Thank-you slides: centered composition** — title and logo centered on the
    slide. Restrained tone-on-tone decoration is welcome (thin navy rings #1B3A68/#22406E).

## Typography

11. **Headline tracking is 0 — NEVER negative.** Remove `letter-spacing:-0.02em` /
    `-0.015em` / `-0.01em` (InDesign tracking −20/−15/−10) from all titles, headings,
    names and statements, in HTML and IDML alike. Let headlines breathe. The only
    letter-spacing in the system is the POSITIVE spacing on uppercase eyebrow labels
    (~.14–.2em). This supersedes the "letter-spacing −0.015em" value in the type
    foundations — update `tokens/typography.css` guidance and the guide text accordingly.
