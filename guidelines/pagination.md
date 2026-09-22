# Pagination

**The page number is zero-padded: `01`, `02`, `03` … `10`, `11`, `12`.**

Always two digits from `01` up. No total, no label, no decoration.

| Correct | Wrong |
| --- | --- |
| `03` | `3` |
| `03` | `3 / 5` · `3 of 5` |
| `03` | `Page 03` · `p. 3` |
| `12` | `012` |

> Supersedes the earlier plain-number rule (client direction, Aug 2026). Applies to **decks and brochures alike**.

## Where it goes
Bottom-right of the pinned footer on **content pages/slides**, beside the doc line:

```
Hargrove Firm · [Doc Name]                                   03
```

Muted grey (`--hg-grey-400` / `#999999`), small (12px at 1280×720, ~20px at 1920×1080, 9pt in print), on the same baseline as the footer text.

## Counting — the cover IS page 01
The cover counts as `01` even though it displays no number. Every page's number is its **physical position in the document**, zero-padded:

| Physical page | Shows |
| --- | --- |
| Cover | *(nothing — but it is 01)* |
| Page 2 (first content page) | `02` |
| Page 3 | `03` |
| Navy divider at position 7 | *(nothing — but it is 07)* |
| Page 8 | `08` |

Wrong: starting the count at the first content page (first content page showing `01`, page 3 showing `02`). The displayed number must always equal the physical position.

## Notes
- Navy cover, section dividers, and closing pages carry **no footer and no page number** — but they keep their place in the count.
- Set as plain text — a footer page number sits on a text baseline, so it needs no SVG. The vector rule applies to numerals **inside a box or circle** (step badges, navy numeral tabs) — see `layout-alignment.md`.
- The footer never carries "Confidential" or any other label the user did not ask for.
