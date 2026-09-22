# Deck text hierarchy — source levels survive

Learned on the TMG Business Entities Deck (Sept 2026). The client's designer (Andrea) changed **no words** in the final PDF — every correction was hierarchy and level treatment. These rules prevent the same round of fixes on the next deck.

## 1. Bullet levels from the source must survive
The main failure. If the source has a level-1 bullet with sub-bullets beneath it, the slide keeps that nesting. Never flatten sub-bullets into equal rows, and never promote one bullet into a bold callout while demoting its sibling into a grey label. The source author decided the levels; we render them.

- Source: `Limited liability is not absolute` → three sub-bullets → the slide shows one parent + three indented children, not five equal rows.
- Source: two level-1 bullets (`Piercing the corporate veil…`, `Common risk factors:`) each with children → two parents, each with its indented children. Neither becomes a card, neither becomes a caption.

## 2. One treatment per level (1920 × 1080 decks)
- **Level 1:** SemiBold 30, navy `#16335D`.
- **Level 2:** Regular 28, grey `#696969`, indented ~150px.
- A list with only one level is **all body Regular grey**. SemiBold navy is reserved for a row that has children beneath it — it marks a parent, not "importance".

## 3. Same structure = same treatment
When every item in a set has the same shape (title + description), every item gets the same layout. Five steps of `Title — description` are five identical rows: title Bold 28, description Regular 25, split on the source's dash. Never mix an inline treatment for some items with a stacked treatment for others.

## 4. Text under a section title is left-aligned and typed by role
- Section subtitle (e.g. `Liability`): Regular 34, grey.
- Intro sentence to a list (`A simple follow-up framework:`, `When in doubt…`): SemiBold 30, navy — it is a lead-in, not grey body.

## 5. Equal importance = equal set
- On tier / package slides the `Includes…` rows are Regular grey exactly like the description — not Medium navy.
- Titles of a two-column comparison are SemiBold 30, not Bold 44. A comparison heading is a label, not a slide title.

## 6. Contact block
Name Bold + title in a lighter weight, **same size, same line**; email beneath, Regular grey.

## Checklist before delivering a deck
1. Every source bullet level present, nested as in the source.
2. Only parent rows carry SemiBold navy; single-level lists are all Regular grey.
3. Repeated structures rendered identically.
4. Lead-in sentences SemiBold navy; subtitles Regular grey.
5. No invented emphasis: no callout cards, no big bold titles where the source has a label.
