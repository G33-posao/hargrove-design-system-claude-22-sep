# Working from a Word source

Written after the Ideal Client Profile brochure (Aug 2026), which took eight correction
rounds. Every rule here is a mistake that was actually made. Read this together with
`using-templates.md` — that file covers what not to invent, this one covers how to set
what the source already gives you.

## The governing principle

**Do not be clever. Be a designer.** The words, their order, their casing, their
grouping and their relative strength all come from the source. What is yours is
colour, type, spacing, composition, and graphic detail. When the two seem to conflict,
the source wins and you flag the conflict in chat.

## Match the source's own hierarchy

If two paragraphs look the same weight in Word, they must look the same weight in the
piece. Setting a lead paragraph large and navy and then dropping the paragraph beneath
it to small grey body invents a hierarchy the author never wrote — the second paragraph
starts reading like a disclaimer.

Practical rule: **one body setting per document.** Every paragraph the source sets as
plain body gets that one setting. Bold in Word stays bold. Nothing else earns a
different size or colour unless the source marks it.

The one latitude worth taking: a sentence that introduces a list ("In order of impact,
the client profile that converts most consistently looks like this:", "Here's what
effective referral notes look like in practice:") may take the same bold-navy lead
treatment the source already uses for its bold sub-heads — **provided every lead-in in
the document gets it.** Consistency is what keeps this from being invention.

## Never dismantle a paragraph to build a graphic

Pulling a figure out for a stat callout is allowed. **Removing the sentence it came
from is not.** The paragraph stays whole, verbatim, in its place in the flow; the
callout goes *beneath* it as graphic reinforcement, with a short derived label under
each numeral. Repeating a few of the source's words in that label is fine — losing the
author's sentence is not.

Wrong: two cards reading `82%` / "Clients with dependent children reach a consultation",
with the source sentence deleted and its remainder orphaned below.
Right: the full sentence set as body, ending with its footnote marker, and the `82%` /
`83%` cards under it.

## Footnotes sit exactly where the source puts them

A footnote marker belongs to a specific word. In the ICP guide it falls after
"(clients without dependents purchase at 17%)." — not on a card, not at the end of the
section, not moved to whichever block inherited the figure. The note itself goes at the
foot of the page the marker appears on, above the pinned footer, at 8pt.

**Superscript markers break leading.** A `<sup>` inflates its line box and opens a
visibly larger gap above that line. Always set:

```css
sup { font-size: 7pt; line-height: 0; position: relative; top: -0.35em; }
```

## Casing

Casing is part of the text and is reproduced as written — with one exception the client
has approved: **the cover title may be set ALL CAPS**, because that is the brand's cover
register. Everywhere else, Title Case stays Title Case and sentence case stays sentence
case.

## Covers

The title is the design. Set it large enough to fill the measure — 50–56pt ExtraBold
across the full content width, two lines, `letter-spacing: -0.025em` — and run the
subtitle to that **same measure** so it doesn't break into a ragged narrow column.
A cover image placeholder is a full-width band, not a side column that squeezes the
type into half the page.

## NetLaw addresses

`mo@netlaw.com` still appears in older source documents. It is retired — use
`mzoubi@hargrovemso.com` and say so in chat. See `team-directory.md`. This is the only
standing exception to verbatim reproduction.

## Italics are never used

No italic or oblique anywhere — not for subtitles, pull quotes, client-quote examples,
contact lines, disclaimers or emphasis, and not even when the source sets the text in
italics. Reproduce the words upright and carry the emphasis with weight (SemiBold 600 /
Bold 700), navy `#16335D` against grey `#696969` body, size, or a hairline rule.

## Quote examples read better as pills

A run of short verbatim quotes (referral-note examples, client comments) set as plain
paragraphs between hairlines reads as a wall. Set each as a content-width pill:
`#F8F8F8` fill, 1px `#E3E7EE` border, `border-radius: 999px`, `padding: 9pt 22pt`,
`box-shadow: 0 8px 24px rgba(22,51,93,.06)`, stacked with a small gap. The varying pill
widths give the page rhythm without changing a word.

## Print geometry checklist

Before delivering any `doc-page` brochure, measure — don't eyeball:

- every `.page` is 816×1056 (letter) with `scrollHeight === clientHeight`;
- every content footer sits at the same distance from the page top (989px at a 0.7in
  margin);
- one H2 size across the whole document, one body size, no decimal pt values;
- page numbers zero-padded, navy cover and closing pages carry none.

When a page overflows after a change, take the pixels back out of **block spacing**,
never out of the type scale on that page alone — an outlier heading size is more
visible than a tight margin.

### doc-page pagination can silently fail

`<doc-page>` only applies its `paginated` class from `_measure()`, which is scheduled
through `requestAnimationFrame`. In some render contexts that frame never fires, the
class is never set, and the pages quietly fall back to flowing 672px-wide blocks with
auto height — the document still looks plausible in the preview but is no longer paged.
Kick it deterministically from the component's mount:

```js
componentDidMount() {
  const kick = () => document.querySelectorAll('doc-page').forEach((dp) => {
    if (typeof dp._measure === 'function') dp._measure();
  });
  customElements.whenDefined('doc-page').then(kick);
  [0, 120, 500].forEach((t) => setTimeout(kick, t));
}
```

Verify with `sheet.className` containing `paginated` before shipping.
