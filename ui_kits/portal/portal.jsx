/* Hargrove Advisor Portal — "My clients" dashboard. Exports PortalApp to window. */
function __initHargrovePortal() {
const { Button, Logo } = window.HargroveDesignSystem_607ee2;
const NAVY = "#16335D";

const L = ({ n, s = 20, color }) => (
  <i data-lucide={n} style={{ width: s, height: s, color }}></i>
);

const STATUS = {
  "Ready to invite": { pill: "In progress", bg: "#EEF2F8", fg: "#8AA0C0" },
  "In review": { pill: "Attorney review", bg: "#E7EDF6", fg: "#16335D" },
  "Consultation set": { pill: "Initial consultation", bg: "#F8F8F8", fg: "#696969" },
  "Plan complete": { pill: "Complete", bg: "#E7EDF6", fg: "#16335D" },
};

const SEED = [
  { name: "Carla Farrell", email: "carla.farrell@email.com", added: "Jul 2, 2026", status: "Ready to invite" },
  { name: "Brandon Baker", email: "b.baker@email.com", added: "Jun 28, 2026", status: "In review" },
  { name: "Sammy Larson", email: "sammy.l@email.com", added: "Jun 21, 2026", status: "Consultation set" },
  { name: "Priya Nair", email: "priya.nair@email.com", added: "Jun 14, 2026", status: "Plan complete" },
];

function Sidebar() {
  const items = [
    { n: "users", t: "Clients", active: true },
    { n: "calendar", t: "Meetings" },
    { n: "folder", t: "Resources" },
    { n: "life-buoy", t: "Support" },
    { n: "monitor-play", t: "Schedule Demo" },
  ];
  return (
    <aside
      style={{
        width: 108,
        background: "#F8F8F8",
        borderRight: "1px solid #E3E7EE",
        padding: "22px 0",
        display: "flex",
        flexDirection: "column",
        gap: 6,
      }}
    >
      {items.map((it) => (
        <button
          key={it.t}
          style={{
            background: it.active ? "#E7EDF6" : "transparent",
            border: "none",
            cursor: "pointer",
            padding: "12px 6px",
            margin: "0 12px",
            borderRadius: 10,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 7,
            color: it.active ? NAVY : "#8A8A8A",
            fontFamily: "var(--font-sans)",
          }}
        >
          <L n={it.n} s={22} color={it.active ? NAVY : "#9AA3B2"} />
          <span style={{ fontSize: 11, fontWeight: it.active ? 600 : 500 }}>{it.t}</span>
        </button>
      ))}
    </aside>
  );
}

function Topbar() {
  return (
    <div
      style={{
        background: NAVY,
        height: 60,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 28px",
      }}
    >
      <Logo variant="white" width={130} basePath="../.." />
      <div
        style={{
          width: 34,
          height: 34,
          borderRadius: 999,
          background: "#2C4A7C",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 13,
          fontWeight: 700,
        }}
      >
        GS
      </div>
    </div>
  );
}

function StatusPill({ status }) {
  const s = STATUS[status];
  return (
    <span
      style={{
        background: s.bg,
        color: s.fg,
        fontSize: 12,
        fontWeight: 600,
        padding: "5px 12px",
        borderRadius: 999,
        whiteSpace: "nowrap",
      }}
    >
      {s.pill}
    </span>
  );
}

function AddClientBar({ onAdd }) {
  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  function submit() {
    if (!name.trim()) return;
    onAdd({ name: name.trim(), email: email.trim() || "—", added: "Today", status: "Ready to invite" });
    setName("");
    setEmail("");
    setOpen(false);
  }
  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: 26, fontWeight: 700, color: "#111",  margin: 0 }}>
          My clients
        </h1>
        <Button size="sm" onClick={() => setOpen((o) => !o)}>
          <L n="plus" s={16} color="#fff" /> Add new client
        </Button>
        <div style={{ flex: 1 }} />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            background: "#F8F8F8",
            border: "1px solid #E3E7EE",
            borderRadius: 999,
            padding: "9px 16px",
            width: 260,
            color: "#999",
          }}
        >
          <L n="search" s={16} color="#999" />
          <input
            placeholder="Search clients"
            style={{ border: "none", background: "transparent", outline: "none", fontFamily: "var(--font-sans)", fontSize: 14, width: "100%", color: "#111" }}
          />
        </div>
      </div>
      {open && (
        <div
          style={{
            marginTop: 16,
            padding: 18,
            background: "#F8F8F8",
            border: "1px solid #E3E7EE",
            borderRadius: 12,
            display: "flex",
            gap: 12,
            alignItems: "center",
          }}
        >
          <input
            autoFocus
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Client name"
            style={{ flex: 1, padding: "10px 14px", borderRadius: 8, border: "1px solid #E3E7EE", fontFamily: "var(--font-sans)", fontSize: 14, outline: "none" }}
          />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            onKeyDown={(e) => e.key === "Enter" && submit()}
            style={{ flex: 1, padding: "10px 14px", borderRadius: 8, border: "1px solid #E3E7EE", fontFamily: "var(--font-sans)", fontSize: 14, outline: "none" }}
          />
          <Button size="sm" onClick={submit}>Add</Button>
          <Button size="sm" variant="ghost" onClick={() => setOpen(false)}>Cancel</Button>
        </div>
      )}
    </div>
  );
}

function ClientTable({ rows, selected, onSelect }) {
  const cols = ["Name", "Contact", "Added on", "Status", ""];
  return (
    <div style={{ marginTop: 22, border: "1px solid #E3E7EE", borderRadius: 14, overflow: "hidden", background: "#fff" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.4fr 1.6fr 1fr 1.2fr 0.5fr",
          padding: "14px 22px",
          borderBottom: "1px solid #E3E7EE",
          fontSize: 12,
          fontWeight: 600,
          textTransform: "uppercase",
          letterSpacing: "0.06em",
          color: "#999",
        }}
      >
        {cols.map((c, i) => <div key={i}>{c}</div>)}
      </div>
      {rows.map((r, i) => (
        <div
          key={i}
          onClick={() => onSelect(i)}
          style={{
            display: "grid",
            gridTemplateColumns: "1.4fr 1.6fr 1fr 1.2fr 0.5fr",
            padding: "16px 22px",
            alignItems: "center",
            borderBottom: i < rows.length - 1 ? "1px solid #F0F2F6" : "none",
            background: selected === i ? "#F5F8FC" : "#fff",
            cursor: "pointer",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <span style={{ width: 30, height: 30, borderRadius: 999, background: "#E7EDF6", color: NAVY, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700 }}>
              {r.name.split(" ").map((w) => w[0]).join("")}
            </span>
            <span style={{ fontWeight: 600, color: "#111", fontSize: 14 }}>{r.name}</span>
          </div>
          <div style={{ color: "#696969", fontSize: 14 }}>{r.email}</div>
          <div style={{ color: "#696969", fontSize: 14 }}>{r.added}</div>
          <div><StatusPill status={r.status} /></div>
          <div style={{ textAlign: "right", color: "#B4BCC8" }}><L n="chevron-right" s={18} color="#B4BCC8" /></div>
        </div>
      ))}
    </div>
  );
}

function AttorneyBanner() {
  return (
    <div
      style={{
        marginTop: 22,
        background: NAVY,
        borderRadius: 14,
        padding: "18px 22px",
        display: "flex",
        alignItems: "center",
        gap: 16,
      }}
    >
      <span style={{ width: 40, height: 40, borderRadius: 999, background: "#2C4A7C", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 14 }}>
        JH
      </span>
      <div style={{ flex: 1 }}>
        <div style={{ color: "#fff", fontWeight: 700, fontSize: 15 }}>A licensed attorney is on your plan</div>
        <div style={{ color: "#C9D6EA", fontSize: 13, marginTop: 2 }}>Real legal review — not a vendor, not a bot.</div>
      </div>
      <Button variant="onNavy" size="sm">Contact the legal team</Button>
    </div>
  );
}

function PortalApp() {
  const [rows, setRows] = React.useState(SEED);
  const [selected, setSelected] = React.useState(null);
  React.useEffect(() => { if (window.lucide) window.lucide.createIcons(); });
  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column", background: "#fff" }}>
      <Topbar />
      <div style={{ flex: 1, display: "flex", minHeight: 0 }}>
        <Sidebar />
        <main style={{ flex: 1, padding: "30px 34px", overflow: "auto" }}>
          <AddClientBar onAdd={(c) => setRows((r) => [c, ...r])} />
          <ClientTable rows={rows} selected={selected} onSelect={setSelected} />
          <AttorneyBanner />
        </main>
      </div>
    </div>
  );
}

window.PortalApp = PortalApp;
}

(function boot() {
  if (window.HargroveDesignSystem_607ee2) __initHargrovePortal();
  else setTimeout(boot, 30);
})();
