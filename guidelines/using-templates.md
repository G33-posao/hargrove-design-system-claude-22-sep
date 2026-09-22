# Templates are palettes, not moulds

> Companion file: `working-from-a-word-source.md` — this file covers what not to **invent**; that one covers how to **set** what the source already gives you. Read both before building from a supplied document.

This file exists because of one failure. The **Ideal Client Profile** brochure (Aug 2026) was the first piece built *from* a template, and it came out **worse** than pieces built without one. The diagnosis matters more than the fix, so it is recorded here.

## What went wrong, and why

The brochure template had been authored as a **finished specimen** — a cover with an eyebrow, an eyebrow above every section heading, pricing cards, a fixed six-page rhythm. Applied to a real task, its slots were read as *requirements*:

| The template had | The source had | What happened |
| --- | --- | --- |
| An eyebrow above every heading | No eyebrows at all | Three were invented: "ADVISOR REFERRAL GUIDE", "WHY ESTATE PLANNING", "WHO, IN ORDER OF IMPACT" |
| Sentence-case headings (a house rule for *our* copy) | Title Case headings | Headings were re-cased — house style applied over verbatim |
| An eyebrow + short-headline pair | Single-line headings, e.g. "Who: The Clients Most Likely to Complete a Plan" | Each heading was split in two to fit the pair |
| A stat-callout pattern | One sentence carrying the figures | Callout built **and** the full sentence repeated beneath it — same content twice |
| Six pages | Four sections | Content was stretched and re-grouped to fill the shape |

The mechanism, in one line: **an empty slot in a template reads as a content requirement, and inventing words to fill it breaks the verbatim rule.** A filled-in specimen is a trap; the more complete it looks, the more it dictates.

## The rules

1. **The source dictates structure. The design system dictates styling.** Which headings exist, their exact wording, their casing, their order, and how many there are — all from the source document. The system supplies colour, type, spacing, components, rhythm.
2. **Never fill a slot because it exists.** No eyebrow in the source → delete the eyebrow element — do NOT fill it with the document title, the section theme, or any other "safe" text; the doc title already lives in the footer, so a doc-title eyebrow is invented words AND duplication. Four sections in the source → four sections in the piece, not the template's six. **Deleting template parts is normal and expected.**
3. **Verbatim outranks house style.** Casing is part of the text. Title Case in the source stays Title Case. The sentence-case convention applies only to copy *we* write — nav labels, UI, captions we were explicitly asked for.
4. **Never number the sections.** "SECTION 01", "PART 01", "STEP 01", or a bare "01" placed above a heading are **invented words**. They are the most persistent version of this mistake — it recurs even when no template is used, because a numbered label *looks* like structure rather than copy. It is copy.

   The distinction: numbering that the **source itself** enumerates is fine — the ICP guide's own ordered list of four client profiles is legitimately `01`–`04`, because the source presents them as a ranked list. A counter **we** add to label sections the source never numbered is not.

5. **Never split or merge a source heading.** "Who: The Clients Most Likely to Complete a Plan" is one heading. Do not break it into eyebrow + headline. Do not promote a body sentence to a heading, and do not demote a heading to body.
6. **Stat callouts:** pulling a figure out is allowed and welcome — it is good graphic detail. The label beneath must be a **shortened fragment of the source's own words**, never a rephrasing. And do not repeat the full sentence next to the callout: use the callout **or** the sentence, not both.
7. **Every piece is a fresh composition — enforced, not hoped for.** Before building, recall the last delivered piece of the same kind (deck, brochure, post). The new one MUST differ from it in **at least two** of these axes:
   - **Grid** — column count, asymmetry, where the content mass sits
   - **Cover** — image band vs. typographic vs. stat-led vs. placeholder composition
   - **Section rhythm** — how content alternates (cards vs. open flow, navy-divider placement)
   - **Carrying component** — what does the visual work: stat callouts, checklist squares, numbered tabs, quote cards, open typography
   - **Scale strategy** — where the one big moment lands (a numeral, a heading, an image)

   Brand style stays identical every time — navy-only accent, Inter, margins, pagination, footer, craft rules. Composition never repeats. If the honest answer to "does this look like the last one with different words?" is yes, recompose before delivering. When there is no memory of the last piece (fresh conversation), deliberately pick a composition the template itself does NOT show.

   (Original rule: two brochures must not read as the same document with different words. A client seeing four deliverables should see four designs, not one design four times.) Two brochures must not read as the same document with different words. Vary the grid, the section rhythm, where the accent falls, which components carry the content, how the cover is built — while staying inside the system's colours, type scale, spacing, components and craft rules. **Design work is expected, not optional.** A client seeing four deliverables should see four designs, not one design four times.
8. **When the template's shape fights the source, the template loses.** Rebuild the layout around the content.

## So what is a template for?

A **palette**. It shows which parts exist, what the correct values are (margins, type sizes, pagination, footer, print geometry), and what "on brand" looks like in that medium. Take the parts you need, in the order the source needs them, and compose something new.

It is not a document to overwrite. Opening a template and replacing its text word-for-word is the failure mode this file exists to prevent.

## Working order for any content-driven piece

1. Read the source first, before opening any template. Write down its real structure: how many sections, the exact headings, what copy belongs to each.
2. Decide the composition for *this* piece — how it should look, given this content.
3. Then open the template as a parts bin: pull the components and values you need, delete what the source does not call for, add what it does.
4. Check the copy against the source line by line. Any word on the page that is not in the source, and was not asked for, comes off.
