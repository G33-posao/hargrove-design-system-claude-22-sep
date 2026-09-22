# Advisor Portal — preview only

> **The real advisor portal is built and owned by the Hargrove dev team.** It is not ours to design. This recreation was made once as a preview, and is kept for one purpose: pulling a clean, on-brand **product screenshot** for a deck or the website's Platform section. It is deliberately **not** a template, and is not a source of truth for the product.


Recreation of the Hargrove Advisor Portal "My clients" dashboard (source: the portal mock inside `webpage-look-design.pdf`).

- `index.html` — interactive dashboard. Open directly (after the bundle compiles).
- `portal.jsx` — exports `PortalApp` to `window`.

Composes `Button` and `Logo` from `_ds_bundle.js`; icons via Lucide (CDN).

**Interactions:** "Add new client" reveals an inline name/email form that prepends a new row (status "Ready to invite"). Rows are selectable (highlight). Status pills map advisor-facing progress states.

**Layout:** navy topbar with the wordmark, left icon-rail sidebar (Clients / Meetings / Resources / Support / Schedule Demo), main client table (Name / Contact / Added on / Status), and the navy "A licensed attorney is on your plan — not a vendor, not a bot" banner with a "Contact the legal team" CTA.
