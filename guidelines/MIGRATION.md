# Migration runbook — moving this Design System to the Hargrove company account

Written by Claude, for Claude, on the source account (exported 13 Sept 2026); migrated into the Hargrove company account (netlaw.com) on 13 Sept 2026 via the GitHub repo. Read this FIRST on the
destination account, before touching anything. The user does not know the mechanics —
drive the process, ask only for uploads. The user speaks Croatian in chat; all files are English — keep it that way.

## What you are receiving
One or more zips of the **Hargrove Design System** project only. Working projects (decks,
brochures, social posts) stay on the source account by the user's decision — they are
personal to him and are not being moved. Chat history does not travel — every rule
already lives in `CLAUDE.md`, `readme.md` and `guidelines/`. Nothing needs to be re-learned.

**Never delete anything during a migration — not duplicates, not screenshots, not scratch
files — unless the user names the file and says delete.** On the first export (13 Sept 2026)
Claude "cleaned up" pasted screenshots and duplicate uploads on its own; the user had asked
for everything to be moved. Deletions are irreversible here. Move everything, ask afterwards.

## Step 0 — how the files arrive
**Preferred: a GitHub repo.** The whole project lives in a private repo
(`hargrove-design-system`); on the destination account the user connects it and pastes the
URL. Then: `github_get_tree` (depth 0, high limit) to list everything, `github_copy_files`
folder by folder (`path_prefix`, ≤500 files each — split `site-archive/` by sub-folder) into
the SAME paths at the project root. Copy 1:1; skip nothing; rename nothing. Write `github.md`
afterwards so the project remembers its source.

**Fallback: zips.** Upload limits are ~20 MB per attachment and 50 MB uncompressed per zip.
The project is far above that (the scraped WordPress site alone is ~90 MB, `uploads/` ~40 MB,
`assets/` ~23 MB), so it must arrive as many packages: one zip per top-level folder, with
`uploads/`, `assets/` and the site split further by sub-folder. Never export the project as
one zip. **Do not start assembling until the user says "that's all of them."** Extract each zip
into a folder of the same name at the project root, preserving inner paths.

After the last piece, confirm the tree has: `styles.css`, `tokens/`, `assets/fonts/`,
`assets/logo*.svg`, `assets/people/`, `components/`, `guidelines/`, `templates/`, `ui_kits/`,
`social/`, `slides/`, `CLAUDE.md`, `readme.md`, `SKILL.md`.

## Step 1 — fix the namespace (the one thing that WILL break)
The component bundle is exposed as `window.HargroveDesignSystem_<suffix>`; the suffix comes
from the project id, which is new on this account.
1. `check_design_system` → read the new namespace.
2. `grep` for `HargroveDesignSystem_607ee2` (the old one) across the project.
3. `run_script`: replace the old namespace with the new one in every `.html`, `.jsx`,
   `.dc.html`, `.md` hit (cards, `ui_kits/`, `templates/`, `social/`, `readme.md`, `SKILL.md`).
4. `check_design_system` again → 0 issues; open one component card and one template to
   confirm they render.

## Step 2 — verify, don't rebuild
- Fonts: open `guidelines/type-weights.card.html` — Inter must render (not a fallback).
- Logo: `guidelines/brand-logo.card.html` — navy on light, white on navy.
- People: `guidelines/brand-people.card.html` — all headshots load, titles match
  `guidelines/team-directory.md`.
- Templates: each `templates/<slug>/*.dc.html` previews styled (its `ds-base.js` uses `../..`).
- `thumbnail.html` renders.
If anything is missing, ask the user for that specific file — never redraw a logo, never
substitute a font, never invent a title.

## Step 3 — working projects (not moved)
The user decided NOT to migrate working projects. Do not ask for them. If one does arrive
later: it carries a frozen copy of the old DS under `_ds/hargrove-design-system-…/`; ask the
user to bind it to the new Design System (project settings — one click), then grep for
`HargroveDesignSystem_607ee2` and run the Step 1 replace inside that project if anything hits.
Do not redesign anything during migration. Fidelity first; improvements are separate tasks.

## Step 4 — clean-up and confirm
- Delete `guidelines/MIGRATION.md`? **No** — keep it; a future move will need it. Update the
  "Written…" line with the new date and account.
- Tell the user, in one short message, what was moved, what was verified, and anything that
  did not arrive.

## Known non-transferable items
- Chat history (intentionally).
- `_ds_bundle.js`, `_ds_manifest.json`, `_thumbnail.*` — regenerated automatically; never write them.
- The source account's project id / share links.
