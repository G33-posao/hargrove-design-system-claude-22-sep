/* Hargrove marketing website — recreation of the live hargrovefirm.com homepage.
   Spec: ../../guidelines/site-reference.md. Exports sections + WebsiteApp to window. */
function __initHargroveSite() {
const { Button, Eyebrow, Card, IconChip, Logo, StatCallout, CommitmentCard, Testimonial } =
  window.HargroveDesignSystem_607ee2;

const NAVY = "#16335D";
const L = ({ n, s = 22, color }) => (
  <i data-lucide={n} style={{ width: s, height: s, color }}></i>
);
function relucide() {
  if (window.lucide) window.lucide.createIcons();
}

const WRAP = { maxWidth: 1280, margin: "0 auto" };
const PAD = "clamp(24px,5.5vw,80px)";

/* All eight real partner vectors are in partner-logos.js
   (window.HargrovePartnerLogos) — reusable in decks and social, not just here.
   The hero renders its own copies via hero-markup.js. */

const SEGMENTS = {
  Advisor: {
    heading: "For Financial Advisors",
    intro:
      "Your clients need estate plans. Hargrove Firm handles the legal work—and keeps you informed at every stage, without adding to your workload.",
    cta: "Partner With Us",
    cards: [
      { icon: "id-card", t: "Accountability", d: "A licensed attorney stands behind every plan. Your clients aren't handed off—they're represented by attorneys who are accountable for the work." },
      { icon: "eye", t: "Visibility", d: "Track your client's progress in real time. No status calls, no chasing updates." },
      { icon: "minus", t: "Fixed Price", d: "Flat fee price, based on your clients' needs. They know what it costs before the work begins—and so do you." },
      { icon: "move-diagonal", t: "Scalability", d: "We operate where you operate. Hargrove Firm delivers a consistent estate planning experience across the country." },
    ],
  },
  Client: {
    heading: "For Clients",
    intro:
      "Estate planning is straightforward when you have the right firm. We handle the details—you'll know exactly where things stand, and exactly what it costs.",
    cta: "Get Started Today",
    cards: [
      { icon: "id-card", t: "Accountability", d: "A real law firm stands behind your plan. Every estate plan is prepared and reviewed by licensed attorneys who are accountable for the work." },
      { icon: "eye", t: "Visibility", d: "You'll always know what's been done and what's coming next—no follow-up calls required." },
      { icon: "minus", t: "Fixed Price", d: "Know your costs upfront - one price, no surprises." },
      { icon: "file-text", t: "Documents Included", d: "All the required legal documents are included. Nothing is missing, nothing extra to figure out." },
    ],
  },
  Enterprise: {
    heading: "For Enterprise",
    intro:
      "You serve clients across the country. We deliver the estate plans they need — with the accountability, consistency, and oversight an enterprise requires.",
    cta: "Talk to Our Enterprise Team",
    cards: [
      { icon: "id-card", t: "Accountability", d: "A licensed law firm, not a vendor. Every plan is prepared and reviewed by attorneys who take professional responsibility for the work — a clear line of legal accountability your compliance team can rely on." },
      { icon: "eye", t: "Visibility", d: "Oversight across your entire footprint. Track engagement progress in real time, with the reporting and audit trails an enterprise needs to manage risk and measure adoption." },
      { icon: "minus", t: "Fixed Price", d: "One pricing structure, firm-wide. Your team and your clients know what each engagement costs before it begins — no surprise legal fees, no exception pricing." },
      { icon: "map", t: "National Coverage", d: "Hargrove Firm delivers the same estate planning experience in all 50 states — a single, consistent partner for every client your firm serves." },
    ],
  },
};

function Header() {
  const items = ["Services", "Attorneys", "Our Technology", "About", "The Latest"];
  return (
    <header style={{ background: NAVY }}>
      <div
        style={{
          ...WRAP,
          padding: `20px ${PAD}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 40,
        }}
      >
        <Logo variant="white" width={150} basePath="../.." />
        <nav style={{ display: "flex", gap: 30, alignItems: "center" }}>
          {items.map((t) => (
            <a
              key={t}
              href="#"
              style={{
                color: "#fff",
                textDecoration: "none",
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                whiteSpace: "nowrap",
                opacity: 0.92,
              }}
            >
              {t}
            </a>
          ))}
          <a
            href="https://login.netlaw.com/"
            style={{
              color: "#fff",
              textDecoration: "none",
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              whiteSpace: "nowrap",
            }}
          >
            Sign in
          </a>
        </nav>
      </div>
    </header>
  );
}

/* Hero — injected VERBATIM from the production source (hero-markup.js + hero.css).
   Deliberately not reconstructed in JSX: this is the client's own markup, so the
   gradient, dotted map, two-tone headline, pill hovers and the eight partner
   vectors are byte-for-byte correct. hero-markup.js also carries the page's own
   init script (it clones the ticker row for the seamless marquee and drops the
   map under reduced-motion) — run it once after mount, never duplicate the row
   in React or the logos appear twice. */
function Hero() {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (window.HargroveHeroInit) window.HargroveHeroInit();
  }, []);
  return (
    <div
      ref={ref}
      dangerouslySetInnerHTML={{ __html: window.HargroveHeroHTML || "" }}
    />
  );
}

function Difference() {
  return (
    <section style={{ background: "#F8F8F8", padding: `84px ${PAD}` }}>
      <div style={{ ...WRAP, textAlign: "center" }}>
        <h2
          style={{
            color: "#111",
            fontWeight: 700,
            fontSize: 34,
            
            margin: 0,
          }}
        >
          The Hargrove Difference
        </h2>
        <div style={{ maxWidth: 720, margin: "30px auto 0", color: "#696969", fontSize: 15, lineHeight: 1.7 }}>
          <p style={{ margin: "0 0 16px" }}>
            Hargrove Firm is a law firm built by <strong style={{ color: "#111" }}>estate planning
            attorneys</strong> who knew the process from the inside — and knew what was wrong with it.
            For too many advisors and clients alike, it was slow, opaque, and came with a final bill
            that was an unpleasant surprise.
          </p>
          <p style={{ margin: 0 }}>
            Hargrove Firm combines the <strong style={{ color: "#111" }}>accountability</strong> of a
            premier legal practice with the <strong style={{ color: "#111" }}>transparency</strong> of
            a real-time platform — at a fixed price, available to advisors and clients nationwide.
          </p>
        </div>
      </div>
    </section>
  );
}

/* Platform — centred eyebrow + headline, then the portal product shot with
   numbered steps at its left. */
function Platform() {
  const steps = [
    "Start a new plan in seconds",
    "Partner with a licensed Hargrove attorney",
    "Track your progress",
    "One tap to communicate with your attorney",
  ];
  const [active, setActive] = React.useState(1);
  return (
    <section style={{ padding: `88px ${PAD}` }}>
      <div style={{ ...WRAP, textAlign: "center" }}>
        <div
          style={{
            color: "#999",
            fontWeight: 600,
            fontSize: 12,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
          }}
        >
          The Hargrove Platform
        </div>
        <h2
          style={{
            color: "#111",
            fontWeight: 700,
            fontSize: 34,
            lineHeight: 1.25,
            
            margin: "14px 0 0",
          }}
        >
          See where your plan stands.
          <br />
          Know who stands behind it.
        </h2>
      </div>
      <div
        style={{
          ...WRAP,
          marginTop: 52,
          display: "grid",
          gridTemplateColumns: "0.8fr 1.2fr",
          gap: 40,
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          {steps.map((s, i) => (
            <button
              key={s}
              onClick={() => setActive(i)}
              style={{
                display: "flex",
                gap: 14,
                alignItems: "flex-start",
                textAlign: "left",
                background: active === i ? "#EEF2F8" : "transparent",
                border: "none",
                borderRadius: 10,
                padding: "14px 16px",
                cursor: "pointer",
                fontFamily: "var(--font-sans)",
                transition: "background var(--dur-base) var(--ease-standard)",
              }}
            >
              <span
                style={{
                  flex: "none",
                  width: 26,
                  height: 20,
                  color: active === i ? NAVY : "#B4BCC8",
                  fontWeight: 700,
                  fontSize: 12,
                }}
              >
                <svg viewBox="0 0 26 20" style={{ display: "block", width: "100%", height: "100%" }}>
                  <text x="13" y="10" textAnchor="middle" dominantBaseline="central" fill="currentColor" fontFamily="Inter" fontWeight="700" fontSize="11">
                    {String(i + 1).padStart(2, "0")}
                  </text>
                </svg>
              </span>
              <span style={{ color: active === i ? NAVY : "#696969", fontSize: 14, lineHeight: 1.5, fontWeight: active === i ? 600 : 400 }}>
                {s}
              </span>
            </button>
          ))}
        </div>
        {/* The portal UI stands in as a product screenshot — see ui_kits/portal/. */}
        <div
          style={{
            background: "#EEF1F5",
            border: "1px solid var(--border-card)",
            borderRadius: 14,
            height: 340,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#8AA0C0",
            fontSize: 12,
            fontWeight: 600,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            boxShadow: "var(--shadow-card)",
          }}
        >
          Advisor portal screenshot
        </div>
      </div>
    </section>
  );
}

function AdvisorSegment() {
  const [tab, setTab] = React.useState("Advisor");
  const tabs = ["Advisor", "Client", "Enterprise"];
  const seg = SEGMENTS[tab];
  React.useEffect(relucide);
  return (
    <section style={{ padding: `10px ${PAD} 90px` }}>
      <div
        style={{
          ...WRAP,
          display: "flex",
          justifyContent: "center",
          gap: 60,
          borderBottom: "1px solid #E3E7EE",
          paddingBottom: 16,
          marginBottom: 56,
        }}
      >
        {tabs.map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              fontFamily: "var(--font-sans)",
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              whiteSpace: "nowrap",
              color: tab === t ? "#111" : "#999",
              position: "relative",
              padding: "4px 2px",
            }}
          >
            {tab === t && (
              <span
                style={{
                  position: "absolute",
                  left: -14,
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: 6,
                  height: 6,
                  borderRadius: 999,
                  background: "#111",
                }}
              />
            )}
            {t}
          </button>
        ))}
      </div>
      <div style={{ ...WRAP, display: "grid", gridTemplateColumns: "0.85fr 1.15fr", gap: 24 }}>
        <Card tone="navy" padding={44} style={{ display: "flex", flexDirection: "column" }}>
          <h3
            style={{
              fontSize: 32,
              fontWeight: 700,
              lineHeight: 1.15,
              
              margin: 0,
            }}
          >
            {seg.heading}
          </h3>
          <p style={{ color: "#C9D6EA", fontSize: 15, lineHeight: 1.65, marginTop: 20 }}>{seg.intro}</p>
          <div style={{ marginTop: "auto", paddingTop: 40 }}>
            <Button variant="onNavy">{seg.cta}</Button>
          </div>
        </Card>
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {seg.cards.map((c) => (
            <Card key={c.t} interactive padding={22} style={{ display: "flex", gap: 18, alignItems: "flex-start", background: "#F8F8F8" }}>
              <span
                style={{
                  flex: "none",
                  width: 42,
                  height: 42,
                  borderRadius: 10,
                  background: "#fff",
                  border: "1px solid var(--border-card)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: NAVY,
                }}
              >
                <L n={c.icon} s={20} />
              </span>
              <div>
                <div
                  style={{
                    fontWeight: 700,
                    fontSize: 12,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: NAVY,
                  }}
                >
                  {c.t}
                </div>
                <div style={{ fontSize: 14, lineHeight: 1.6, color: "#696969", marginTop: 7 }}>{c.d}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Stat band — dotted map behind, light card, then the counting-up $400+ billion. */
function StatBand() {
  const [n, setN] = React.useState(0);
  React.useEffect(() => {
    let raf, start;
    const dur = 1400;
    const step = (t) => {
      if (!start) start = t;
      const p = Math.min(1, (t - start) / dur);
      setN(Math.round(400 * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, []);
  return (
    <section style={{ padding: `70px ${PAD} 90px`, textAlign: "center" }}>
      <div style={{ ...WRAP, position: "relative" }}>
        <h2 style={{ color: "#111", fontWeight: 700, fontSize: 30, margin: "0 0 44px" }}>
          Trusted by Top Wealth Advisory Firms Nationwide.
        </h2>
        <div
          aria-hidden="true"
          className="hg-map-svg"
          style={{
            position: "absolute",
            left: "50%",
            top: 70,
            transform: "translateX(-50%)",
            width: "min(900px,92%)",
            opacity: 0.16,
            pointerEvents: "none",
          }}
          dangerouslySetInnerHTML={{ __html: window.HargroveUSMap || "" }}
        />
        <div style={{ position: "relative", maxWidth: 620, margin: "0 auto" }}>
          <Card tone="white" padding={34} style={{ textAlign: "left" }}>
            <p style={{ color: "#696969", fontSize: 14, lineHeight: 1.7, margin: "0 0 12px" }}>
              Hargrove Firm provides estate planning services to wealth advisors collectively
              managing <strong style={{ color: "#111" }}>over $400 billion</strong> in client assets.
            </p>
            <p style={{ color: "#696969", fontSize: 14, lineHeight: 1.7, margin: 0 }}>
              We work with financial advisors who need a reliable estate planning partner—one with
              legal <strong style={{ color: "#111" }}>accountability, real-time visibility, and a
              fixed price</strong> their clients can count on.
            </p>
          </Card>
          <div style={{ marginTop: 26 }}>
            <div
              style={{
                color: "#111",
                fontWeight: 900,
                fontSize: 72,
                lineHeight: 1,
                
              }}
            >
              ${n}+
            </div>
            <div style={{ color: "#111", fontWeight: 700, fontSize: 17, marginTop: 4 }}>billion</div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Testimonials — round photo overlaps the top edge of each card. */
function Testimonials() {
  const data = [
    { q: "Meeting with a local attorney takes time, scheduling and effort, and many clients never get there. Hargrove helps remove those barriers so clients can take the next step.", n: "Amanda Long", t: "Senior Wealth Advisor", f: "Mariner Wealth Advisors" },
    { q: "Twenty of our clients have either completed or are amid completing their estate planning with them\u2026 I've even begun my own estate planning with them. After such good experiences I don't plan to use an outside law firm again.", n: "Jim Sandager", t: "Senior VP, Financial Advisor", f: "Wealth Enhancement" },
    { q: "Hargrove has fundamentally transformed how we deliver estate planning to our clients. Their unique combination of sophisticated legal expertise and innovative technology has allowed us to scale high-quality estate planning services across our advisors.", n: "Scott Luhnau", t: "Head of Multi-Generational Wealth Planning", f: "Mariner Wealth Advisors" },
    { q: "What I value about Hargrove is the fixed-cost structure, the in-house experience, and the transparency of the process. Those are important reasons I chose to partner with the firm.", n: "Bob Glass", t: "Managing Director", f: "Mariner Wealth Advisors" },
  ];
  return (
    <section style={{ padding: `20px ${PAD} 90px` }}>
      <div style={{ ...WRAP }}>
        <h2 style={{ color: "#111", fontWeight: 700, fontSize: 30, margin: "0 0 74px", textAlign: "center" }}>
          What Our Clients Are Saying
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 18, alignItems: "stretch" }}>
          {data.map((d) => (
            <div key={d.n} style={{ position: "relative", paddingTop: 44 }}>
              {/* Real portraits are B&W on the live site — see guidelines/site-reference.md */}
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  top: 0,
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: 88,
                  height: 88,
                  borderRadius: 999,
                  background: "#EEF1F5",
                  border: "1px solid var(--border-card)",
                  zIndex: 1,
                }}
              />
              <Card
                padding={22}
                style={{
                  background: "#F8F8F8",
                  paddingTop: 60,
                  height: "100%",
                  boxSizing: "border-box",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <p style={{ color: "#696969", fontSize: 13.5, lineHeight: 1.65, margin: 0, flex: 1 }}>
                  &ldquo;{d.q}&rdquo;
                </p>
                <div style={{ marginTop: 20 }}>
                  <div style={{ fontWeight: 700, color: NAVY, fontSize: 13 }}>{d.n}</div>
                  <div style={{ fontSize: 12, color: "#696969", marginTop: 2, lineHeight: 1.4 }}>{d.t}</div>
                  <div style={{ fontSize: 12, color: "#999" }}>{d.f}</div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ClosingCTA() {
  return (
    <section style={{ padding: `20px ${PAD} 96px`, textAlign: "center" }}>
      <div style={{ ...WRAP }}>
        <h2
          style={{
            color: "#111",
            fontWeight: 700,
            fontSize: 38,
            lineHeight: 1.2,
            
            maxWidth: 620,
            margin: "0 auto",
          }}
        >
          Estate planning, done right. For advisors and clients who expect more.
        </h2>
        <div style={{ marginTop: 30 }}>
          <Button variant="primary">Schedule a Consultation</Button>
        </div>
        <a href="#" style={{ display: "block", marginTop: 18, color: NAVY, fontSize: 14, textDecoration: "none" }}>
          Call (877) 564-8716
        </a>
      </div>
    </section>
  );
}

/* Footer — LIGHT ground, navy text (not navy; a common mistake). */
function Footer() {
  const cols = [
    { h: "Services", items: ["Our Technology", "Deed Order Form"] },
    { h: "Our Team", items: ["Advisors", "Attorneys"] },
    { h: "About", items: ["Resources", "Contact Us", "Privacy"] },
    { h: "The Latest", items: ["Blog", "Case Study", "In the News"] },
  ];
  return (
    <footer style={{ background: "#fff", padding: `56px ${PAD} 34px` }}>
      <div
        style={{
          ...WRAP,
          display: "grid",
          gridTemplateColumns: "1.6fr repeat(4,1fr)",
          gap: 28,
        }}
      >
        <div style={{ color: "#696969", fontSize: 12.5, lineHeight: 1.8 }}>
          12910 Shelbyville Road, Suite 124, Louisville, Kentucky 40243
          <br />
          <a href="#" style={{ color: NAVY, textDecoration: "none" }}>support@hargrovefirm.com</a>
          <br />
          <a href="#" style={{ color: NAVY, textDecoration: "none" }}>(877) 564-8716</a>
        </div>
        {cols.map((c) => (
          <div key={c.h}>
            <div
              style={{
                color: "#111",
                fontWeight: 600,
                fontSize: 11,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
              }}
            >
              {c.h}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 9, marginTop: 14 }}>
              {c.items.map((i) => (
                <a key={i} href="#" style={{ color: "#696969", fontSize: 13, textDecoration: "none" }}>
                  {i}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div style={{ ...WRAP, display: "flex", justifyContent: "center", gap: 16, marginTop: 42, color: NAVY }}>
        <L n="linkedin" s={18} />
        <L n="youtube" s={18} />
      </div>
      <div
        style={{
          ...WRAP,
          marginTop: 22,
          textAlign: "center",
          color: "#999",
          fontSize: 11,
          lineHeight: 1.6,
        }}
      >
        © 2026 Hargrove Firm LLP. All rights reserved. Hargrove Firm is a national law firm
        practicing in coordination with local counsel in various jurisdictions.
      </div>
    </footer>
  );
}

function WebsiteApp() {
  React.useEffect(() => { if (window.lucide) window.lucide.createIcons(); });
  return (
    <div>
      <Header />
      <Hero />
      <Difference />
      <Platform />
      <AdvisorSegment />
      <StatBand />
      <Testimonials />
      <ClosingCTA />
      <Footer />
    </div>
  );
}

Object.assign(window, {
  WebsiteApp,
  SiteHeader: Header,
  SiteHero: Hero,
  SiteDifference: Difference,
  SitePlatform: Platform,
  SiteAdvisorSegment: AdvisorSegment,
  SiteStatBand: StatBand,
  SiteTestimonials: Testimonials,
  SiteClosingCTA: ClosingCTA,
  SiteFooter: Footer,
});
}

(function boot() {
  if (window.HargroveDesignSystem_607ee2) __initHargroveSite();
  else setTimeout(boot, 30);
})();
