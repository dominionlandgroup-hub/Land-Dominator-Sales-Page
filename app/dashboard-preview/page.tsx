import Link from "next/link";
import {
  BarChart3,
  Calculator,
  FileText,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Layers,
  Target,
  Mail,
  Upload,
  Download,
  Zap,
  MapPin,
} from "lucide-react";

export const metadata = {
  title: "How It Works — LandIQ",
  description:
    "See how LandIQ turns Land Portal sold comp data into county market analysis, acreage-band pricing, bulk offer generation, and mailing list exports.",
};

// ─── Shared sidebar nav mock ──────────────────────────────────────────────────
function AppSidebar({ active }: { active: 1 | 2 | 3 | 4 | 5 }) {
  const steps = [
    { n: 1, label: "Upload Comps" },
    { n: 2, label: "ZIP Dashboard" },
    { n: 3, label: "Match Targets" },
    { n: 4, label: "Mailing List" },
    { n: 5, label: "Campaigns" },
  ];
  return (
    <div className="w-40 shrink-0 border-r border-white/5 bg-brand-ink p-3 space-y-1">
      {steps.map((s) => (
        <div
          key={s.n}
          className={`flex items-center gap-2 rounded-lg px-2.5 py-2 text-xs font-medium transition-colors ${
            s.n === active
              ? "bg-brand-purple/30 text-brand-gold"
              : s.n < active
              ? "text-white/50"
              : "text-white/25"
          }`}
        >
          <span
            className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-bold ${
              s.n < active
                ? "bg-green-500/20 text-green-400"
                : s.n === active
                ? "bg-brand-gold/20 text-brand-gold"
                : "bg-white/5 text-white/30"
            }`}
          >
            {s.n < active ? "✓" : s.n}
          </span>
          {s.label}
        </div>
      ))}
    </div>
  );
}

export default function DashboardPreviewPage() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="hero-bg grid-bg pt-28 pb-16">
        <div className="container-xl text-center">
          <span className="badge mb-5">How It Works</span>
          <h1 className="heading-hero text-white mt-4 mb-4">
            Turn Land Portal Sold Data Into{" "}
            <span className="text-gradient-gold">Priced Mailing Lists</span>
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-white/60 mb-8 leading-relaxed">
            Upload your Land Portal comp export. LandIQ identifies high-velocity
            ZIP codes, prices every target parcel by acreage band, generates
            40/50/60% investor offers, and exports a mail-ready list — in one
            workflow.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="/#waitlist" className="btn-primary px-8 py-4 text-base">
              Get Early Access <ArrowRight size={18} />
            </Link>
            <Link href="/pricing" className="btn-secondary px-8 py-4 text-base">
              View Pricing →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Step 1: Upload Comps ─── */}
      <section className="section-dark py-20">
        <div className="container-xl">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-gold/20 text-brand-gold">
                  <Upload size={16} />
                </div>
                <span className="text-xs font-semibold uppercase tracking-widest text-brand-gold">
                  Step 01 · Upload Comps
                </span>
              </div>
              <h2 className="heading-sub text-white mb-4">
                Stop Cleaning Land Portal Exports by Hand
              </h2>
              <p className="text-white/60 mb-6 leading-relaxed">
                Raw Land Portal exports include residential sales, duplicate rows,
                and incomplete records. Investors spend hours filtering to true
                vacant land comps, calculating $/acre manually, and adjusting
                spreadsheets for acreage bands. LandIQ automates all of it.
              </p>
              <ul className="space-y-2.5 mb-6">
                {[
                  "Accepts Land Portal CSV exports directly — no reformatting",
                  "Filters residential sales out automatically — vacant land only",
                  "Calculates $/acre per row and groups comps into acreage bands",
                  "Detects ZIP codes, sale dates, and acreage from your export",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-white/60">
                    <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-brand-gold" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Mock: Upload screen */}
            <div className="rounded-2xl border border-white/10 overflow-hidden">
              <div className="flex border-b border-white/5">
                <AppSidebar active={1} />
                <div className="flex-1 bg-[#1a0e2e] p-5">
                  <p className="text-xs font-bold text-white/40 uppercase tracking-widest mb-4">Upload Comps</p>
                  {/* Drop zone */}
                  <div className="rounded-xl border-2 border-dashed border-brand-purple/30 bg-brand-purple/5 p-6 text-center mb-4">
                    <Upload size={24} className="mx-auto mb-2 text-brand-gold/60" />
                    <p className="text-sm font-semibold text-white/70 mb-0.5">Drop Land Portal export here</p>
                    <p className="text-[10px] text-white/30">CSV format · Sold comp data</p>
                  </div>
                  {/* Ingestion result */}
                  <div className="rounded-xl border border-green-500/20 bg-green-500/5 p-4 mb-3">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
                      <p className="text-xs font-semibold text-green-400">Processed successfully</p>
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { label: "Rows Imported", value: "6,713" },
                        { label: "Valid Comps", value: "931" },
                        { label: "ZIP Codes", value: "12" },
                      ].map((s) => (
                        <div key={s.label} className="text-center">
                          <p className="text-lg font-black text-brand-gold">{s.value}</p>
                          <p className="text-[10px] text-white/30 mt-0.5">{s.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <p className="text-[10px] text-white/20 text-center">County: Brunswick / Pender, NC · Last 12 months</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Step 2: ZIP Dashboard ─── */}
      <section className="section-muted py-20">
        <div className="container-xl">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 items-start">
            {/* Mock: ZIP Dashboard */}
            <div className="rounded-2xl border border-gray-200 bg-white shadow-md overflow-hidden order-2 lg:order-1">
              <div className="flex border-b border-gray-100">
                {/* Sidebar */}
                <div className="w-36 shrink-0 border-r border-gray-100 bg-gray-50 p-3 space-y-1">
                  {[
                    { n: 1, label: "Upload Comps", done: true },
                    { n: 2, label: "ZIP Dashboard", active: true },
                    { n: 3, label: "Match Targets" },
                    { n: 4, label: "Mailing List" },
                    { n: 5, label: "Campaigns" },
                  ].map((s) => (
                    <div key={s.n} className={`flex items-center gap-1.5 rounded-lg px-2 py-1.5 text-[11px] font-medium ${s.active ? "bg-brand-purple/10 text-brand-purple" : s.done ? "text-gray-400" : "text-gray-300"}`}>
                      <span className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-[9px] font-bold ${s.done ? "bg-green-100 text-green-600" : s.active ? "bg-brand-purple/20 text-brand-purple" : "bg-gray-100 text-gray-300"}`}>
                        {s.done ? "✓" : s.n}
                      </span>
                      {s.label}
                    </div>
                  ))}
                </div>

                <div className="flex-1 min-w-0 p-4">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">ZIP Code Intelligence Dashboard</p>

                  {/* Stats row */}
                  <div className="grid grid-cols-4 gap-2 mb-4">
                    {[
                      { label: "Valid Comps", value: "931", sub: "of 6,713 total" },
                      { label: "Median Sale", value: "$90K", sub: "across all ZIPs", gold: true },
                      { label: "Median $/Acre", value: "$208K", sub: "all valid comps", gold: true },
                      { label: "Most Active ZIP", value: "28461", sub: "194 sales" },
                    ].map((s) => (
                      <div key={s.label} className="rounded-lg bg-gray-50 p-2 text-center border border-gray-100">
                        <p className="text-[9px] text-gray-400 leading-tight mb-0.5">{s.label}</p>
                        <p className={`text-sm font-black ${s.gold ? "text-brand-gold" : "text-brand-purple"}`}>{s.value}</p>
                        <p className="text-[8px] text-gray-300 leading-tight">{s.sub}</p>
                      </div>
                    ))}
                  </div>

                  {/* Market Intelligence box */}
                  <div className="rounded-lg border-l-4 border-brand-purple bg-brand-purple/5 p-3 mb-3">
                    <p className="text-[10px] font-bold text-brand-purple mb-1">Market Intelligence</p>
                    <p className="text-[10px] text-gray-600 leading-relaxed">The sweet spot is parcels 0.0–0.5 acres, accounting for 71% of all sales (665 transactions). ZIP 28461 is the most liquid market with 194 transactions. Avoid ZIPs 28479, 28420, 28452 which have fewer than 10 sales.</p>
                  </div>

                  {/* Mini bar chart */}
                  <div className="rounded-lg bg-gray-50 p-3 mb-3">
                    <p className="text-[9px] font-semibold text-gray-400 mb-2">Sales Volume by ZIP</p>
                    <div className="space-y-1">
                      {[
                        { zip: "28461", count: 194, pct: "100%" },
                        { zip: "28422", count: 156, pct: "80%" },
                        { zip: "28462", count: 137, pct: "71%" },
                        { zip: "28470", count: 130, pct: "67%" },
                        { zip: "28467", count: 78, pct: "40%" },
                      ].map((r) => (
                        <div key={r.zip} className="flex items-center gap-2">
                          <span className="text-[9px] text-gray-500 w-10 shrink-0">{r.zip}</span>
                          <div className="flex-1 h-3 rounded bg-gray-200">
                            <div className="h-3 rounded bg-brand-purple/60" style={{ width: r.pct }} />
                          </div>
                          <span className="text-[9px] text-gray-400 w-6 text-right">{r.count}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Recommended target profile */}
                  <div className="rounded-lg border border-gray-100 bg-gray-50 p-2.5">
                    <p className="text-[9px] font-bold text-gray-400 uppercase tracking-wide mb-1.5">Recommended Target Profile</p>
                    <div className="flex flex-wrap gap-1 mb-1">
                      <span className="text-[9px] text-gray-500">Target ZIPs:</span>
                      {["28461","28422","28462","28470","28467"].map(z => (
                        <span key={z} className="rounded-full bg-brand-purple/10 px-1.5 py-0.5 text-[8px] font-semibold text-brand-purple">{z}</span>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-1">
                      <span className="text-[9px] text-gray-500">Avoid ZIPs:</span>
                      {["28479","28420","28452"].map(z => (
                        <span key={z} className="rounded-full bg-red-50 px-1.5 py-0.5 text-[8px] font-semibold text-red-400">{z}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-purple/10 text-brand-purple">
                  <BarChart3 size={16} />
                </div>
                <span className="text-xs font-semibold uppercase tracking-widest text-brand-purple">
                  Step 02 · ZIP Dashboard
                </span>
              </div>
              <h2 className="heading-sub text-gray-900 mb-4">
                See Where Land Is Actually Moving
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                LandIQ analyzes your comp upload and builds a full ZIP Code
                Intelligence Dashboard — showing you exactly which ZIP codes have
                velocity, which to target, and which to avoid.
              </p>
              <ul className="space-y-2.5 mb-6">
                {[
                  "Sales volume by ZIP — see where transactions are happening",
                  "Median $/acre for each ZIP code in the county",
                  "Price band distribution (<$50K, $50–100K, $100–250K, $250K+)",
                  "Market Intelligence summary with recommended target profile",
                  "Target ZIP and Avoid ZIP recommendations generated automatically",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                    <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-brand-purple" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Step 2b: ZIP Performance Table + Map ─── */}
      <section className="section-light py-16 border-t border-gray-100">
        <div className="container-xl">
          <div className="mx-auto max-w-3xl text-center mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-purple mb-3">ZIP Dashboard · Detail Views</p>
            <h2 className="heading-sub text-gray-900 mb-3">ZIP Performance Table & Sold Comps Map</h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              Every ZIP ranked by sales volume with price band breakdowns. Switch
              to Map view to see exactly where 994 sold comps are clustered —
              color-coded by ZIP code.
            </p>
          </div>

          {/* Full ZIP Performance Table */}
          <div className="rounded-2xl border border-gray-200 bg-white shadow-md overflow-hidden mb-8">
            <div className="border-b border-gray-100 px-5 py-3 flex items-center justify-between bg-gray-50">
              <span className="text-sm font-bold text-gray-900">ZIP Performance Table <span className="text-gray-400 font-normal text-xs">(12 ZIPs)</span></span>
              <div className="flex items-center gap-3">
                <div className="rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-xs text-gray-400 w-40">Search…</div>
                <span className="rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-xs text-gray-600 font-medium flex items-center gap-1">
                  ≡ Columns <span className="rounded-full bg-gray-100 px-1.5 text-[10px]">5 hidden</span>
                </span>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b border-gray-100 bg-gray-50/80">
                    {["ZIP ↕", "SALES ↕", "MEDIAN AC ↕", "MAX PRICE ↕", "MEDIAN $/AC ↕", "PRICE BANDS"].map((h) => (
                      <th key={h} className="px-4 py-3 text-left text-[10px] font-bold uppercase tracking-wide text-gray-400 whitespace-nowrap">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    { zip: "28461", sales: 194, medAc: "0.35", maxPx: "$17,000,000", medPac: "$167,716", bands: ["<$50K·69","$50–100K·28","$100–250K·33","$250K+·64"] },
                    { zip: "28422", sales: 156, medAc: "0.35", maxPx: "$6,250,000",  medPac: "$100,000",  bands: ["<$50K·91","$50–100K·19","$100–250K·12","$250K+·34"] },
                    { zip: "28462", sales: 137, medAc: "0.35", maxPx: "$6,250,000",  medPac: "$163,636",  bands: ["<$50K·52","$50–100K·52","$100–250K·11","$250K+·22"] },
                    { zip: "28470", sales: 130, medAc: "0.47", maxPx: "$7,250,000",  medPac: "$858,772",  bands: ["<$50K·23","$50–100K·9","$100–250K·6","$250K+·92"] },
                    { zip: "28467", sales: 78,  medAc: "0.40", maxPx: "$7,100,000",  medPac: "$197,941",  bands: ["<$50K·22","$50–100K·33","$100–250K·3","$250K+·20"] },
                    { zip: "28469", sales: 68,  medAc: "0.25", maxPx: "$3,642,500",  medPac: "$338,176",  bands: ["<$50K·15","$50–100K·15","$100–250K·7","$250K+·31"] },
                    { zip: "28451", sales: 60,  medAc: "0.48", maxPx: "$3,720,500",  medPac: "$173,049",  bands: ["<$50K·10","$50–100K·10","$100–250K·14","$250K+·26"] },
                    { zip: "28468", sales: 57,  medAc: "0.29", maxPx: "$4,295,000",  medPac: "$338,078",  bands: ["<$50K·2","$50–100K·30","$100–250K·2","$250K+·23"] },
                    { zip: "28465", sales: 23,  medAc: "0.17", maxPx: "$1,700,000",  medPac: "$1,928,571",bands: ["$100–250K·3","$250K+·20"] },
                    { zip: "28479", sales: 7,   medAc: "2.73", maxPx: "$1,000,000",  medPac: "$56,816",   bands: ["<$50K·2","$50–100K·2","$100–250K·1","$250K+·2"], thin: true },
                    { zip: "28420", sales: 5,   medAc: "3.60", maxPx: "$100,000",    medPac: "$7,222",    bands: ["<$50K·3","$50–100K·1","$100–250K·1"], thin: true },
                    { zip: "28452", sales: 1,   medAc: "1.19", maxPx: "$204,050",    medPac: "$171,471",  bands: ["$100–250K·1"], thin: true },
                  ].map((row) => (
                    <tr key={row.zip} className={`border-b border-gray-50 hover:bg-gray-50/70 ${row.thin ? "opacity-50" : ""}`}>
                      <td className="px-4 py-3 font-bold text-brand-purple">{row.zip}</td>
                      <td className="px-4 py-3 text-gray-800 font-semibold">{row.sales}</td>
                      <td className="px-4 py-3 text-gray-500">{row.medAc}</td>
                      <td className="px-4 py-3 text-gray-500">{row.maxPx}</td>
                      <td className="px-4 py-3 font-bold text-brand-gold">{row.medPac}</td>
                      <td className="px-4 py-3">
                        <div className="flex flex-wrap gap-1">
                          {row.bands.map((b) => (
                            <span key={b} className="rounded-full border border-gray-200 bg-gray-50 px-2 py-0.5 text-[9px] font-medium text-gray-500 whitespace-nowrap">
                              {b}
                            </span>
                          ))}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="border-t border-gray-100 px-5 py-2.5 bg-gray-50 flex items-center justify-between">
              <span className="text-[11px] text-gray-400">Showing <strong>1–12</strong> of <strong>12</strong> rows · Thin data ZIPs ({"<"}10 sales) shown at reduced opacity</span>
            </div>
          </div>

          {/* Map view callout */}
          <div className="rounded-2xl border border-gray-200 bg-white shadow-md overflow-hidden">
            <div className="border-b border-gray-100 px-5 py-3 flex items-center justify-between bg-gray-50">
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-brand-purple" />
                <span className="text-sm font-bold text-gray-900">Sold Comps Map</span>
                <span className="text-xs text-gray-400">994 comp locations shown</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="rounded-lg border border-brand-purple bg-brand-purple/5 px-3 py-1 text-xs font-semibold text-brand-purple">Charts</span>
                <span className="rounded-lg border border-gray-200 px-3 py-1 text-xs font-medium text-gray-400">Map</span>
              </div>
            </div>

            {/* ZIP filter chips */}
            <div className="flex flex-wrap gap-1.5 px-5 py-3 border-b border-gray-100">
              {[
                { zip: "28420", color: "border-purple-300 text-purple-700" },
                { zip: "28422", color: "border-purple-300 text-purple-600" },
                { zip: "28451", color: "border-yellow-300 text-yellow-700" },
                { zip: "28452", color: "border-purple-200 text-purple-500" },
                { zip: "28461", color: "border-pink-300 text-pink-700" },
                { zip: "28462", color: "border-orange-300 text-orange-700" },
                { zip: "28465", color: "border-green-300 text-green-700" },
                { zip: "28467", color: "border-purple-400 text-purple-700" },
                { zip: "28468", color: "border-orange-400 text-orange-600", active: true },
                { zip: "28469", color: "border-teal-300 text-teal-700" },
                { zip: "28470", color: "border-green-400 text-green-600" },
                { zip: "28479", color: "border-gray-300 text-gray-500" },
              ].map((z) => (
                <span key={z.zip} className={`rounded-full border px-2.5 py-0.5 text-[10px] font-semibold cursor-pointer ${z.active ? "bg-orange-400/10 " + z.color : z.color + " bg-white"}`}>
                  {z.zip}
                </span>
              ))}
            </div>

            {/* Map placeholder with realistic coastal geography */}
            <div className="relative h-56 bg-gradient-to-br from-slate-100 via-blue-50 to-sky-100 overflow-hidden">
              {/* Water */}
              <div className="absolute right-0 top-0 bottom-0 w-2/5 bg-gradient-to-l from-sky-300/40 to-transparent" />
              {/* Land mass suggestion */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-8 left-4 w-32 h-24 rounded-full bg-green-200 blur-xl" />
                <div className="absolute top-16 left-20 w-48 h-20 rounded-full bg-green-300 blur-xl" />
                <div className="absolute bottom-8 left-8 w-40 h-16 rounded-full bg-green-200 blur-xl" />
              </div>
              {/* ZIP bubble clusters near coast */}
              {[
                { x: "62%", y: "28%", count: 63, color: "bg-yellow-500", label: "28451" },
                { x: "58%", y: "45%", count: 5, color: "bg-purple-600", label: "28420" },
                { x: "64%", y: "44%", count: 57, color: "bg-orange-500", label: "28468" },
                { x: "68%", y: "44%", count: 40, color: "bg-orange-400", label: "28462" },
                { x: "70%", y: "44%", count: 196, color: "bg-pink-500", label: "28461", large: true },
                { x: "72%", y: "42%", count: 8, color: "bg-green-600", label: "28465" },
                { x: "73%", y: "46%", count: 23, color: "bg-green-500", label: "28469" },
              ].map((b) => (
                <div
                  key={b.label}
                  className={`absolute flex items-center justify-center rounded-full text-white font-bold shadow-md ${b.color} ${b.large ? "h-10 w-10 text-xs" : "h-7 w-7 text-[10px]"}`}
                  style={{ left: b.x, top: b.y, transform: "translate(-50%,-50%)" }}
                >
                  {b.count}
                </div>
              ))}
              {/* Map attribution */}
              <div className="absolute bottom-2 right-2 text-[8px] text-gray-400">Leaflet · © OpenStreetMap</div>
              {/* + / - zoom */}
              <div className="absolute top-2 left-2 rounded border border-gray-300 bg-white shadow text-xs">
                <div className="px-1.5 py-0.5 border-b border-gray-200 cursor-pointer text-gray-600">+</div>
                <div className="px-1.5 py-0.5 cursor-pointer text-gray-600">−</div>
              </div>
              {/* Legend */}
              <div className="absolute top-2 right-2 rounded-lg border border-gray-200 bg-white/95 p-2 text-[9px]">
                <p className="font-bold text-gray-500 mb-1">ZIP LEGEND</p>
                {[
                  { zip: "28461", color: "bg-pink-500" },
                  { zip: "28462", color: "bg-orange-400" },
                  { zip: "28465", color: "bg-green-600" },
                  { zip: "28468", color: "bg-orange-500" },
                  { zip: "28451", color: "bg-yellow-500" },
                ].map((l) => (
                  <div key={l.zip} className="flex items-center gap-1 mb-0.5">
                    <span className={`h-2 w-2 rounded-full shrink-0 ${l.color}`} />
                    <span className="text-gray-600">{l.zip}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Market Intelligence below map */}
            <div className="p-5 border-t border-gray-100">
              <h3 className="text-sm font-bold text-gray-900 mb-2">Market Intelligence</h3>
              <p className="text-xs text-gray-600 leading-relaxed mb-4">
                The sweet spot is parcels 0.0–0.5 acres, accounting for 71% of all sales (665 transactions). The most liquid ZIP is 28461 with 194 sales. Outlier ZIPs with median $/acre above 3x market median are 28470, 28465. Thin data ZIPs ({"<"}10 sales) are 28479, 28420, 28452 and should be treated cautiously.
              </p>
              <div className="rounded-lg border border-gray-100 bg-gray-50 p-3">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wide mb-2">Recommended Target Profile</p>
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <p className="text-gray-500 mb-1">Ideal acreage range: <span className="font-bold text-gray-900">0.0–0.5 acres</span></p>
                    <p className="text-gray-500 mb-1.5">Target ZIPs:</p>
                    <div className="flex flex-wrap gap-1">
                      {["28461","28422","28462","28470","28467","28469","28451","28468","28465"].map(z => (
                        <span key={z} className="rounded-full border border-brand-purple/30 bg-brand-purple/5 px-2 py-0.5 text-[9px] font-semibold text-brand-purple">{z}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1">Expected offer range: <span className="font-bold text-brand-gold">$42,000–$887,500</span></p>
                    <p className="text-gray-500 mb-1.5">Avoid ZIPs:</p>
                    <div className="flex flex-wrap gap-1">
                      {["28479","28420","28452"].map(z => (
                        <span key={z} className="rounded-full border border-red-200 bg-red-50 px-2 py-0.5 text-[9px] font-semibold text-red-500">{z}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Step 3: Match Targets ─── */}
      <section className="section-dark py-20">
        <div className="container-xl">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-gold/20 text-brand-gold">
                  <Target size={16} />
                </div>
                <span className="text-xs font-semibold uppercase tracking-widest text-brand-gold">
                  Step 03 · Match Targets
                </span>
              </div>
              <h2 className="heading-sub text-white mb-4">
                Automatically Price Hundreds of Parcels at Once
              </h2>
              <p className="text-white/60 mb-6 leading-relaxed">
                Upload your target parcel list. LandIQ matches every parcel to
                its most relevant comps by ZIP code and acreage band, calculates
                estimated retail value using median $/acre, and generates 40/50/60%
                investor offer tiers — across the entire list in seconds.
              </p>
              <ul className="space-y-2.5 mb-6">
                {[
                  "Upload hundreds or thousands of target parcels at once",
                  "Each parcel matched within its ZIP code and acreage band",
                  "Estimated retail value calculated per parcel automatically",
                  "40%, 50%, and 60% investor offer tiers generated per parcel",
                  "Low-comp parcels flagged — so you know which to trust",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-white/60">
                    <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-brand-gold" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs font-semibold text-white/40 mb-1">What this replaces</p>
                <p className="text-sm text-white/60 leading-relaxed">
                  Manually matching 200+ parcels to sold comps in a spreadsheet.
                  That takes days. LandIQ does it in seconds.
                </p>
              </div>
            </div>

            {/* Mock: Match Targets view */}
            <div className="rounded-2xl border border-white/10 overflow-hidden">
              <div className="flex">
                <AppSidebar active={3} />
                <div className="flex-1 min-w-0 bg-[#1a0e2e] p-4">
                  <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-3">Match Targets</p>

                  {/* Status bar */}
                  <div className="rounded-lg bg-white/5 p-3 mb-3 flex items-center justify-between">
                    <div className="flex items-center gap-3 text-[10px] text-white/40">
                      <span className="flex items-center gap-1"><span className="h-1.5 w-1.5 rounded-full bg-green-400" />Comps: 931</span>
                      <span className="flex items-center gap-1"><span className="h-1.5 w-1.5 rounded-full bg-brand-gold" />Targets: 247</span>
                    </div>
                    <span className="rounded-full bg-brand-gold/20 px-2 py-0.5 text-[10px] font-semibold text-brand-gold">Running…</span>
                  </div>

                  {/* Matched list */}
                  <div className="rounded-lg border border-white/5 overflow-hidden mb-2">
                    <div className="grid grid-cols-5 bg-white/3 px-3 py-1.5 text-[9px] font-bold uppercase tracking-wide text-white/25">
                      <span className="col-span-1">Owner</span>
                      <span className="text-center">ZIP</span>
                      <span className="text-center">Acres</span>
                      <span className="text-center">ARV</span>
                      <span className="text-center">Band</span>
                    </div>
                    {[
                      { owner: "J. Harrison", zip: "28461", acres: "0.38", arv: "$49,400", band: "<1ac", conf: "high" },
                      { owner: "M. Lawson", zip: "28422", acres: "0.42", arv: "$38,200", band: "<1ac", conf: "high" },
                      { owner: "R. Bethea", zip: "28462", acres: "1.2", arv: "$96,400", band: "1–5ac", conf: "high" },
                      { owner: "C. Stone", zip: "28470", acres: "0.35", arv: "$141,500", band: "<1ac", conf: "med" },
                      { owner: "T. Ackerman", zip: "28461", acres: "0.29", arv: "$42,700", band: "<1ac", conf: "high" },
                    ].map((row, i) => (
                      <div key={i} className="grid grid-cols-5 border-t border-white/5 px-3 py-2">
                        <span className="text-[10px] text-white/70 truncate">{row.owner}</span>
                        <span className="text-[10px] text-white/40 text-center">{row.zip}</span>
                        <span className="text-[10px] text-white/40 text-center">{row.acres}</span>
                        <span className="text-[10px] text-brand-gold font-semibold text-center">{row.arv}</span>
                        <span className="text-center">
                          <span className={`text-[9px] rounded-full px-1.5 py-0.5 ${row.conf === "high" ? "bg-green-500/15 text-green-400" : "bg-yellow-500/15 text-yellow-400"}`}>{row.band}</span>
                        </span>
                      </div>
                    ))}
                  </div>
                  <p className="text-[10px] text-white/20 text-center">+ 242 more parcels matched…</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Step 4: Mailing List ─── */}
      <section className="section-muted py-20">
        <div className="container-xl">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 items-center">
            {/* Mock: Mailing List view */}
            <div className="rounded-2xl border border-gray-200 bg-white shadow-md overflow-hidden order-2 lg:order-1">
              <div className="flex">
                {/* Light sidebar */}
                <div className="w-36 shrink-0 border-r border-gray-100 bg-gray-50 p-3 space-y-1">
                  {[
                    { n: 1, label: "Upload Comps", done: true },
                    { n: 2, label: "ZIP Dashboard", done: true },
                    { n: 3, label: "Match Targets", done: true },
                    { n: 4, label: "Mailing List", active: true },
                    { n: 5, label: "Campaigns" },
                  ].map((s) => (
                    <div key={s.n} className={`flex items-center gap-1.5 rounded-lg px-2 py-1.5 text-[11px] font-medium ${s.active ? "bg-brand-purple/10 text-brand-purple" : s.done ? "text-gray-400" : "text-gray-300"}`}>
                      <span className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-[9px] font-bold ${s.done ? "bg-green-100 text-green-600" : s.active ? "bg-brand-purple/20 text-brand-purple" : "bg-gray-100 text-gray-300"}`}>
                        {s.done ? "✓" : s.n}
                      </span>
                      {s.label}
                    </div>
                  ))}
                </div>

                <div className="flex-1 min-w-0 p-4">
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Mailing List · 247 Parcels</p>
                    <span className="rounded-full border border-green-200 bg-green-50 px-2 py-0.5 text-[9px] font-semibold text-green-700">Ready to Export</span>
                  </div>

                  {/* Offer columns */}
                  <div className="rounded-lg border border-gray-100 overflow-hidden text-[10px] mb-3">
                    <div className="grid grid-cols-5 bg-gray-50 px-3 py-1.5 text-[9px] font-bold uppercase text-gray-400">
                      <span>Owner</span>
                      <span className="text-center">ZIP</span>
                      <span className="text-center text-red-400">40%</span>
                      <span className="text-center text-brand-gold">50%</span>
                      <span className="text-center text-green-600">60%</span>
                    </div>
                    {[
                      { owner: "J. Harrison", zip: "28461", o40: "$19,760", o50: "$24,700", o60: "$29,640" },
                      { owner: "M. Lawson", zip: "28422", o40: "$15,280", o50: "$19,100", o60: "$22,920" },
                      { owner: "R. Bethea", zip: "28462", o40: "$38,560", o50: "$48,200", o60: "$57,840" },
                      { owner: "C. Stone", zip: "28470", o40: "$56,600", o50: "$70,750", o60: "$84,900" },
                      { owner: "T. Ackerman", zip: "28461", o40: "$17,080", o50: "$21,350", o60: "$25,620" },
                    ].map((row, i) => (
                      <div key={i} className="grid grid-cols-5 border-t border-gray-50 px-3 py-2">
                        <span className="text-gray-700 truncate">{row.owner}</span>
                        <span className="text-center text-gray-400">{row.zip}</span>
                        <span className="text-center text-red-500 font-semibold">{row.o40}</span>
                        <span className="text-center text-brand-gold font-bold">{row.o50}</span>
                        <span className="text-center text-green-600 font-semibold">{row.o60}</span>
                      </div>
                    ))}
                  </div>

                  {/* Export button */}
                  <div className="flex items-center gap-3 rounded-lg border border-dashed border-gray-200 bg-gray-50 px-3 py-2.5">
                    <Download size={13} className="text-brand-purple shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="text-[10px] font-semibold text-gray-700 truncate">PenderCounty_MailList_247.csv</p>
                      <p className="text-[9px] text-gray-400">247 rows · Owner, Address, ZIP, ARV, 40/50/60% Offers</p>
                    </div>
                    <span className="rounded-lg bg-brand-purple text-white text-[10px] px-2.5 py-1.5 font-bold whitespace-nowrap cursor-pointer">
                      Download
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-purple/10 text-brand-purple">
                  <Mail size={16} />
                </div>
                <span className="text-xs font-semibold uppercase tracking-widest text-brand-purple">
                  Step 04 · Mailing List
                </span>
              </div>
              <h2 className="heading-sub text-gray-900 mb-4">
                Investor Offer Engine — Applied to Every Parcel
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Every matched parcel receives an estimated retail value based on
                acreage-band comp pricing — then three investor offer tiers are
                calculated automatically: 40% conservative, 50% standard, and 60%
                aggressive. Export the full list as a clean CSV for your mail house.
              </p>
              <ul className="space-y-2.5 mb-6">
                {[
                  "Estimated retail value calculated per parcel from comp median",
                  "40% offer — conservative, low-risk acquisition target",
                  "50% offer — standard investor offer, highest response rate",
                  "60% offer — aggressive, for competitive or thin-comp markets",
                  "Export to CSV — compatible with any direct mail house",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                    <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-brand-purple" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="rounded-xl border border-brand-purple/20 bg-brand-purple/5 p-4">
                <div className="flex items-center gap-2 mb-1">
                  <Zap size={13} className="text-brand-purple" />
                  <p className="text-xs font-semibold text-brand-purple">Full cycle time</p>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  From Land Portal export to mail-ready offer list — the workflow that
                  used to take days now takes less than an hour.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="section-dark py-20 relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(ellipse 60% 60% at 50% 100%, rgba(92,41,119,0.4) 0%, transparent 70%)" }}
        />
        <div className="container-xl relative z-10 text-center">
          <h2 className="heading-sub text-white mb-4">
            Ready to Run Your First Market?
          </h2>
          <p className="text-white/50 mb-8 max-w-lg mx-auto leading-relaxed">
            Join the beta and go from Land Portal comp export to priced mailing
            list in your first session. Free during beta. No credit card required.
          </p>
          <Link href="/#waitlist" className="btn-primary px-10 py-4 text-base">
            Join the Beta Waitlist <ArrowRight size={18} />
          </Link>
          <p className="mt-4 text-xs text-white/30">
            Land Portal subscription required for sold comp data
          </p>
        </div>
      </section>
    </>
  );
}
