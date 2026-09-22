# hargrovefirm.com — live site reference

**This site is the model for all future Hargrove design.** When anything here conflicts with an older PDF comp or a preview we built, **the live site wins**. Verified against the live page and its production markup (Aug 2026).

## Site map
| Page | URL |
| --- | --- |
| Home | `/` |
| Services | `/services/` · Our Technology `/services/our-technology/` |
| Attorneys | `/attorneys/` · Advisors `/advisors/` |
| About | `/about/` · Our Team `/our-team/` · Resources `/resources/` · Contact `/contact-us/` |
| The Latest | Blog `/blog/` · Case Study `/case-study/` · In the News `/in-the-news/` |
| Deed Order Form | `deeds.hargrovefirm.com` |
| Sign in | `login.netlaw.com` |

Nav order: **SERVICES · ATTORNEYS · OUR TECHNOLOGY · ABOUT ▾ · THE LATEST ▾ · SIGN IN** — uppercase, letterspaced, small, white on navy. Logo sits left inside a centred max-width container.

## Contact — as published
- **(877) 564-8716** — on every page of the live site.
- support@hargrovefirm.com · 12910 Shelbyville Road, Suite 124, Louisville, Kentucky 40243
- LinkedIn `/company/hargrovefirm/` · YouTube `@hargrovefirm`

> ⚠️ Brand notes list **(833) HARGROVE**; the live site uses **(877) 564-8716** everywhere. Confirm before publishing a phone number.

---

## THE HERO — production spec
> **The hero exists as real code in this project**: `ui_kits/website/hero.css` + `ui_kits/website/hero-markup.js`, verbatim from the client's export. Reuse those files rather than rebuilding from the spec below; the spec is here so the values are documented and so decks/social can borrow individual pieces.

The single most reused element. Built together; treat these values as canonical.

**Surface.** Full-bleed navy **gradient**, `linear-gradient(180deg,#16335D 0%,#0A1C38 100%)` — top-to-bottom, navy into a deeper navy. This is the one place a gradient is correct (it is a tonal navy deepening, not decoration). Plus a soft radial light: `radial-gradient(900px 640px at 70% 40%, rgba(159,194,240,.16), transparent 62%)`.

**Dotted US map.** Real vector in hand — `ui_kits/website/us-map.js` (`window.HargroveUSMap`). A halftone-dot map of the United States sits at the right, `#9FC2F0` fill, `opacity:.17`, `width:min(760px,54vw)`, pinned `top:56px`, pointer-events none, behind the text. The dots are grouped and **pulse** — `@keyframes` from `opacity:.2` to `.85` over `3.6s ease-in-out infinite`, each group with a staggered negative `animation-delay` (−0.0s, −0.3s, −0.6s …) so the map shimmers rather than blinking as one. Hidden below 760px; `opacity:.14` below 1150px. **This is the brand's signature background graphic** — reuse it, do not substitute a texture or a photo.

**Headline.** Inter **900**, ALL CAPS, `clamp(31px,4.35vw,62px)`, `line-height:1.02`, `letter-spacing:-.02em`. Set as four lines, and **two-tone**: lines 1–2 white, lines 3–4 `#C9D6EA`.

> THE ESTATE PLAN / YOU DESERVE. / **THE ACCOUNTABILITY** / **YOU NEED.**

Each line is a `.lw` clipping wrapper around a `.li` inner span that slides up from `translateY(110%)` over `.9s cubic-bezier(.22,.61,.36,1)`, staggered `.15s / .3s / .45s / .6s`. (The two-tone headline is allowed **here only** — it is a tonal navy pair, not a second accent. Never gold, never a highlighted word mid-sentence.)

**Support line.** `#C9D6EA`, `clamp(15px,1.15vw,17px)`, `line-height:1.6`, `max-width:520px`. Fades up `.8s` at `.8s` delay.

**Buttons.** Pills, `padding:15px 34px`, `16px/600`, `border-radius:999px`, `white-space:nowrap`.
- Primary: white fill, `#16335D` text. **Hover goes to black fill / white text** with `box-shadow:0 10px 28px rgba(0,0,0,.28)`.
- Secondary: transparent, white text, `1px solid #40587A`. **Hover: black fill, black border.**
- Transitions `.18s cubic-bezier(.22,.61,.36,1)`.

**Partner logo ticker.** Below the CTAs, separated by `1px solid rgba(44,74,124,.7)` top border. An infinite marquee (`translateX(0)`→`-50%`, `46s linear`, `34s` on mobile) of partner wordmarks as **inline SVG** (`fill:currentColor`, white, `opacity:.68`). Edges feather with a `mask-image` linear-gradient (190px, 60px on mobile). Hovering the strip dims all to `.5` and lifts the hovered one to `1`. Partners: **CARSON · MARINER · Wealth Enhancement · SEIA · MERIT · RWA · compound · TMG**.

**Frame.** Content `max-width:1280px`, centred, `padding:104px clamp(24px,5.5vw,80px) 0`. Headline drops to `8.2vw` below 900px; top padding `76px` below 760px.

**Reduced motion.** `@media (prefers-reduced-motion:reduce)` kills every animation and settles the map at `opacity:.55`. Always ship this.

---

## Homepage structure (verified order)
1. **Navy header** — wordmark left, nav, Sign in.
2. **Hero** (above) + partner ticker.
3. **The Hargrove Difference** — on **`#F8F8F8`**. Heading and body both **centred**, body in a narrow measure. Bold-weight emphasis on "estate planning attorneys", "accountability", "transparency". (Centred body copy is correct *here* — it is a short standalone statement block, not a list or long-form passage.)
4. **The Hargrove Platform** — centred eyebrow `THE HARGROVE PLATFORM` + centred two-line headline "See where your plan stands. / Know who stands behind it." Below: the **advisor-portal UI as a product screenshot**, with four numbered steps `01`–`04` listed at its left: *Start a new plan in seconds · Partner with a licensed Hargrove attorney · Track your progress · One tap to communicate with your attorney*. The active step is highlighted on a pale panel. The screenshot shows the "Schedule initial consultation" modal (March 2026 calendar, "Hargrove attorney" chip, Skip / Schedule).
5. **Audience tabs** — centred `• ADVISOR / CLIENT / ENTERPRISE`, dot marks the active one.
6. **Segment block** — tall **navy card** at left (heading, paragraph, white pill CTA), **four light cards** at right, each an outline icon in a pale square + uppercase letterspaced title + grey copy. Verbatim copy for all three audiences is below.
7. **Trusted by Top Wealth Advisory Firms Nationwide.** — centred heading; the **dotted US map** again as the background graphic; a light card with the two paragraphs; then the stat **`$400+`** with **`billion`** beneath it, huge and black-weight. The number **counts up from `$ 0 +`** on scroll.
8. **What Our Clients Are Saying** — four cards. **Round photo sits above the card, overlapping its top edge.** Quote, then name / title / firm.
9. **Closing CTA** — centred headline "Estate planning, done right. For advisors and clients who expect more.", navy pill *Schedule a Consultation*, then a plain text link **Call (877) 564-8716**.
10. **Footer — LIGHT, not navy.** White ground, navy text. Address + email + phone at left; four link columns (SERVICES / OUR TEAM / ABOUT / THE LATEST); LinkedIn + YouTube marks centred beneath; small legal line at the bottom.

> Two things worth committing to memory because they are easy to get wrong: **the footer is light**, and **the hero headline is two-tone**.

## Segment cards (verbatim, all three tabs)

**For Financial Advisors** — *Your clients need estate plans. Hargrove Firm handles the legal work—and keeps you informed at every stage, without adding to your workload.* → *Partner With Us*
- **Accountability** — A licensed attorney stands behind every plan. Your clients aren't handed off—they're represented by attorneys who are accountable for the work.
- **Visibility** — Track your client's progress in real time. No status calls, no chasing updates.
- **Fixed Price** — Flat fee price, based on your clients' needs. They know what it costs before the work begins—and so do you.
- **Scalability** — We operate where you operate. Hargrove Firm delivers a consistent estate planning experience across the country.

**For Clients** — *Estate planning is straightforward when you have the right firm. We handle the details—you'll know exactly where things stand, and exactly what it costs.* → *Get Started Today*
- **Accountability** — A real law firm stands behind your plan. Every estate plan is prepared and reviewed by licensed attorneys who are accountable for the work.
- **Visibility** — You'll always know what's been done and what's coming next—no follow-up calls required.
- **Fixed Price** — Know your costs upfront - one price, no surprises.
- **Documents Included** — All the required legal documents are included. Nothing is missing, nothing extra to figure out.

**For Enterprise** — *You serve clients across the country. We deliver the estate plans they need — with the accountability, consistency, and oversight an enterprise requires.* → *Talk to Our Enterprise Team*
- **Accountability** — A licensed law firm, not a vendor. Every plan is prepared and reviewed by attorneys who take professional responsibility for the work — a clear line of legal accountability your compliance team can rely on.
- **Visibility** — Oversight across your entire footprint. Track engagement progress in real time, with the reporting and audit trails an enterprise needs to manage risk and measure adoption.
- **Fixed Price** — One pricing structure, firm-wide. Your team and your clients know what each engagement costs before it begins — no surprise legal fees, no exception pricing.
- **National Coverage** — Hargrove Firm delivers the same estate planning experience in all 50 states — a single, consistent partner for every client your firm serves.

## Testimonials (verbatim)
- **Amanda Long**, Senior Wealth Advisor, Mariner Wealth Advisors — *"Meeting with a local attorney takes time, scheduling and effort, and many clients never get there. Hargrove helps remove those barriers so clients can take the next step."*
- **Jim Sandager**, Senior VP, Financial Advisor, Wealth Enhancement — *"Twenty of our clients have either completed or are amid completing their estate planning with them… I've even begun my own estate planning with them. After such good experiences I don't plan to use an outside law firm again."*
- **Scott Luhnau**, Head of Multi-Generational Wealth Planning, Mariner Wealth Advisors — *"Hargrove has fundamentally transformed how we deliver estate planning to our clients. Their unique combination of sophisticated legal expertise and innovative technology has allowed us to scale high-quality estate planning services across our advisors."*
- **Bob Glass**, Managing Director, Mariner Wealth Advisors — *"What I value about Hargrove is the fixed-cost structure, the in-house experience, and the transparency of the process. Those are important reasons I chose to partner with the firm."*

## Attorneys page
Heading **The Hargrove Heritage**. **Jamie Hargrove** — Founding Partner, Attorney/CPA. **Tucker Hargrove** — President | Managing Partner. Roster splits into **The Hargrove Attorneys** (~14) and **Of Counsel** (~38, each "Attorney, Of Counsel — Licensed in: [states]"). Titles in use: Founding Partner · President | Managing Partner · Partner · Senior Advanced Planning Attorney · Advanced Planning Attorney · Advanced Estate Planning Attorney · Estate Planning Attorney · Junior Associate – Estate Planning Attorney · Attorney/CPA | Director of Tax Services · Attorney, Of Counsel.

**Portraits are mostly black-and-white**, on plain or dark grounds; a few are colour. Missing faces get a grey silhouette avatar. Treat **B&W portrait** as the default team-photo treatment.

## The advisor portal
The real portal is **built and owned by the Hargrove dev team** — it is not ours to design. It appears here only as the **product screenshot inside the Platform section**. `ui_kits/portal/` is a one-off preview kept for that purpose (grabbing a clean on-brand product shot for a deck or the site); it is deliberately **not** a template and must not be treated as the source of truth for the product.

## How to source a page from the live site
The site is built in Elementor by an outside firm; the design is the client's.

### Best route — a static-export zip (whole site at once)
Install a **static site export** plugin (Simply Static is free and enough; WP2Static also works) and export. It crawls the rendered site and produces a zip of real `.html` files, the stylesheets, and **the actual image files** — which also solves the raster problem, since photos and portraits arrive as files rather than URLs.

A zip like that can be read directly: unpack it into the project and every page becomes a source the same way the hero was.

Two cautions:
- **Not a migration/backup plugin.** All-in-One WP Migration (`.wpress`), Duplicator and UpdraftPlus produce PHP plus a SQL dump; page content then sits in the database as serialised Elementor JSON in `wp_postmeta._elementor_data`. Readable, but there is no rendered HTML or CSS in it — far less useful.
- Keep it lean. Exclude video and large media folders if the export runs to hundreds of MB.

### Per-page route (proven — this is how the hero got here)
1. Open the page in Chrome in an **incognito window** (so no admin bar or editor markup is included).
2. DevTools → Elements → right-click the `<html>` node → **Copy → Copy outerHTML**.
3. Paste into a text file, save as e.g. `services.html`, upload it.

That single file carries the real markup, the inline `<style>` blocks, and every inline SVG (logos, icons, the dotted map) — which is exactly what let the hero be reused byte-for-byte instead of reconstructed. With this route **rasters still need separate upload**, since photos appear only as URLs.

### Worth having either way
- **Elementor kit export** (Elementor → Tools → Import / Export Kit) — JSON with the global colour and typography settings, i.e. the site's real tokens.
- The generated stylesheets under `/wp-content/uploads/elementor/css/` (`global.css`, `post-{id}.css`).

Not useful on their own: screenshots (lossy — use only as a layout hint), and "Save page as → Webpage, Complete" (works, but the assets folder tends to arrive incomplete).

Page priority: Home (done) → Our Technology → Services → Attorneys → Advisors → About / Our Team → Contact → Blog / Case Study.

## Not copied in
Vectors are all in hand: the wordmark (`assets/logo*.svg`), the eight partner logos (`ui_kits/website/partner-logos.js`) and the dotted US map (`ui_kits/website/us-map.js`) — all extracted verbatim from the production source. Still missing, because they are rasters: the hero photo, the attorney portraits and the advisor-portal screenshot. Upload those directly.
