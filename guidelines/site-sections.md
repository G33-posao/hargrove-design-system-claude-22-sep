# Live site — section inventory

Every section of the live site, page by page, so any one can be picked and recreated 1:1. The full static export of the site lives in `uploads/hargrove package/` (Simply Static, 18 Aug 2026) — **read the section straight out of that HTML; never rebuild it from a screenshot or from memory.**

## How to use this
1. Find the section below and note its page and `data-id`.
2. Pull it out of the page file with a script, the same way the hero was done: grab the top-level `<div class="e-con e-parent" data-id="…">` block plus the page's `<style>` blocks.
3. Land it as a verbatim pair — a `.css` file and a `markup.js` exposing the HTML on `window` — then inject it. See `../ui_kits/website/hero.css` + `hero-markup.js` for the pattern.

Elementor wraps every section in `<div class="e-con e-parent" data-id="…">`; there are almost no literal `<section>` tags. Inline `<style>` blocks near the top of each page carry the per-section CSS.

**Shared across every page:** `data-id="36737c1"` is the **site footer** (2 SVGs = LinkedIn + YouTube). It appears as the last container on all 11 pages, so pull it once. Remember the footer is **light**, not navy.

**Reused sections worth knowing:** "See where your plan stands. Know who stands behind it." (the platform block) appears on Home, About and Our Technology. "Estate planning, done right…" (closing CTA) appears on Home and Services.

## What is in the package
11 page templates plus ~60 attorney bio pages (all one template — `attorneys/jamie-hargrove/index.html` is the representative). Excluded from the request and absent: blog, in-the-news, case-study, taxonomy archives.

**Still missing: the images.** The export's HTML references them by URL; the actual files were not included. Needed: attorney portraits (B&W on the live site), the hero photograph, and the advisor-portal screenshot.

### Home  
`uploads/hargrove package/index.html`

| # | data-id | Section | SVG | img |
| --- | --- | --- | --- | --- |
| 1 | `14b3f93` | The Estate Plan You Deserve. The Accountability You Need. | 9 | 0 |
| 2 | `8cb37cb` | The Hargrove Difference | 0 | 0 |
| 3 | `dbbcadd` | See where your plan stands. Know who stands behind it. | 1 | 0 |
| 4 | `4fb96a9` | For Financial Advisors | 18 | 0 |
| 5 | `53fc70d` | Trusted by Top Wealth Advisory Firms Nationwide. | 0 | 0 |
| 6 | `c1793c5` | What Our Clients Are Saying | 0 | 4 |
| 7 | `f7d6562` | Estate planning, done right. For advisors and clients who expect more. | 0 | 1 |
| 8 | `36737c1` | — | 2 | 0 |

### About  
`uploads/hargrove package/about/index.html`

| # | data-id | Section | SVG | img |
| --- | --- | --- | --- | --- |
| 1 | `5f7c304` | Built by Attorneys To Address a Persistent Problem. | 0 | 0 |
| 2 | `0295ac8` | Our Approach | 0 | 1 |
| 3 | `4cf0164` | Our Technology Platform | 0 | 0 |
| 4 | `b184884` | See where your plan stands. Know who stands behind it. | 1 | 1 |
| 5 | `36737c1` | — | 2 | 0 |

### Advisors  
`uploads/hargrove package/advisors/index.html`

| # | data-id | Section | SVG | img |
| --- | --- | --- | --- | --- |
| 1 | `4faab6b` | Your Clients Deserve Better. So Do You. | 0 | 0 |
| 2 | `7ab61ee` | Accountability You Can Stand Behind | 0 | 0 |
| 3 | `f579827` | Ready to learn more about the Advisor Partner Program? | 0 | 1 |
| 4 | `36737c1` | — | 2 | 0 |

### Services & Pricing  
`uploads/hargrove package/services/index.html`

| # | data-id | Section | SVG | img |
| --- | --- | --- | --- | --- |
| 1 | `fae1946` | Estate Planning Without the Guesswork. | 0 | 1 |
| 2 | `e0673df` | A clear process. A fixed price. A licensed attorney behind every step. | 4 | 1 |
| 3 | `e82e803` | Services & Pricing | 19 | 0 |
| 4 | `1c2cd4f` | At-Home Notary Services | 0 | 0 |
| 5 | `7261468` | Estate planning, done right. For advisors and clients who expect more. | 0 | 1 |
| 6 | `36737c1` | — | 2 | 0 |

### Our Technology  
`uploads/hargrove package/services/our-technology/index.html`

| # | data-id | Section | SVG | img |
| --- | --- | --- | --- | --- |
| 1 | `7ffcd50` | The Difference Is Built In. | 0 | 1 |
| 2 | `f55606b` | — | 0 | 1 |
| 3 | `8f1aa22` | What It's Like To Work This Way | 0 | 0 |
| 4 | `7bfd998` | The Bottom Line | 0 | 0 |
| 5 | `576d0e0` | See where your plan stands. Know who stands behind it. | 1 | 1 |
| 6 | `36737c1` | — | 2 | 0 |

### Attorneys roster  
`uploads/hargrove package/attorneys/index.html`

| # | data-id | Section | SVG | img |
| --- | --- | --- | --- | --- |
| 1 | `d4a5432` | The Hargrove Heritage | 0 | 0 |
| 2 | `1f61fc1` | The Hargrove Attorneys | 0 | 0 |
| 3 | `004c64e` | — | 0 | 0 |
| 4 | `004c64e` | — | 0 | 0 |

_+51 further containers — one repeating card per person._

### Of Counsel  
`uploads/hargrove package/of-counsel/index.html`

| # | data-id | Section | SVG | img |
| --- | --- | --- | --- | --- |
| 1 | `8a3b7b7` | Of Counsel Attorney Information | 0 | 1 |
| 2 | `36737c1` | — | 2 | 0 |

### Our Team  
`uploads/hargrove package/our-team/index.html`

| # | data-id | Section | SVG | img |
| --- | --- | --- | --- | --- |
| 1 | `186b1dd` | Our Team | 0 | 0 |
| 2 | `fbac17d` | Founders | 0 | 0 |
| 3 | `cd9fa78` | — | 0 | 0 |
| 4 | `cd9fa78` | — | 0 | 2 |

_+20 further containers — one repeating card per person._

### Online Estate Planning  
`uploads/hargrove package/online-estate-planning/index.html`

| # | data-id | Section | SVG | img |
| --- | --- | --- | --- | --- |
| 1 | `36737c1` | — | 2 | 0 |

### Resources  
`uploads/hargrove package/resources/index.html`

| # | data-id | Section | SVG | img |
| --- | --- | --- | --- | --- |
| 1 | `19723a8` | Resources | 0 | 0 |
| 2 | `1b0e4fa` | (12910 Shelbyville Road, Suite 124, Louisville, Kentucky 4024) | 0 | 3 |
| 3 | `36737c1` | — | 2 | 0 |

### Contact  
`uploads/hargrove package/contact-us/index.html`

| # | data-id | Section | SVG | img |
| --- | --- | --- | --- | --- |
| 1 | `ba5d68e` | Contact Us | 0 | 0 |
| 2 | `f96ba1c` | (12910 Shelbyville Road, Suite 124, Louisville, Kentucky 4024) | 0 | 1 |
| 3 | `36737c1` | — | 2 | 0 |
