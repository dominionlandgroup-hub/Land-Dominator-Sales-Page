import Link from "next/link";
import {
  MapPin,
  BarChart3,
  Calculator,
  Building2,
  FileText,
  Layers,
  CheckCircle2,
  ArrowRight,
  Star,
  TrendingUp,
  Target,
  Search,
  AlertCircle,
  Zap,
  Globe,
  Users,
  BadgeCheck,
  ChevronDown,
} from "lucide-react";
import WaitlistForm from "@/components/WaitlistForm";

// ─── Data ─────────────────────────────────────────────────────────────────────

const features = [
  {
    icon: Target,
    title: "Target-to-Comp Matching",
    desc: "Upload your Land Portal parcel list and LandIQ automatically matches each target to the most relevant sold comps by acreage band and location — bulk offers ready in minutes.",
    tag: "Unique",
  },
  {
    icon: BarChart3,
    title: "Land Portal Comp Analysis",
    desc: "Pull sold land comps directly from Land Portal exports. LandIQ filters for true vacant land sales — no residential noise, no manual cleanup.",
    tag: "Core",
  },
  {
    icon: Layers,
    title: "Acreage Band Pricing",
    desc: "Our proprietary band logic accounts for how price-per-acre changes at 1, 5, 10, 25, and 50+ acre thresholds — automatically applied to every analysis.",
    tag: "Proprietary",
  },
  {
    icon: Search,
    title: "Market Velocity Analysis",
    desc: "See how fast land is moving in your target county — days on market, sale volume trends, and median price shifts by acreage band.",
    tag: "Core",
  },
  {
    icon: Calculator,
    title: "Bulk Offer Calculator",
    desc: "Generate 40%, 50%, and 60% offer tiers for every parcel in your target list at once — ready to feed into your direct mail campaign.",
    tag: "Core",
  },
  {
    icon: FileText,
    title: "Mailing List Export",
    desc: "Export your matched, priced parcel list as a clean CSV — formatted for direct mail houses, ready to go the day you finish your market pull.",
    tag: "Core",
  },
  {
    icon: Building2,
    title: "Builder Lot Pricing Mode",
    desc: "Analyze infill lots from a builder's perspective. Estimate what a local builder would realistically pay for the parcel.",
    tag: "Unique",
  },
  {
    icon: Zap,
    title: "DirtCheck Integration",
    desc: "Future feasibility layer for zoning, utilities, and infrastructure — fully integrated into the deal analysis flow.",
    tag: "Roadmap",
  },
];

const problems = [
  {
    icon: AlertCircle,
    title: "Cleaning Land Portal exports takes hours",
    desc: "Raw Land Portal exports include residential sales, incomplete records, and mixed property types. Filtering to true vacant land comps is tedious — and easy to get wrong.",
  },
  {
    icon: Layers,
    title: "Acreage changes everything",
    desc: "A 1-acre lot and a 10-acre parcel price completely differently — even in the same county. Averaging comps across size bands produces offers that are wrong by thousands.",
  },
  {
    icon: Building2,
    title: "Pricing at scale is a bottleneck",
    desc: "When your target list has 300 parcels, individually pricing each one kills deal velocity. Most investors underprice entire lists just to move fast.",
  },
  {
    icon: Globe,
    title: "$/acre has to be calculated manually",
    desc: "Land Portal gives you sale prices. Converting those to $/acre by band, building a comp average, and applying it to hundreds of targets requires formulas most investors don't have.",
  },
  {
    icon: AlertCircle,
    title: "No tool was built for land",
    desc: "Every real estate platform is optimized for residential agents. Land investors run the same Land Portal workflow in spreadsheets — because there was nothing better.",
  },
];

const steps = [
  {
    number: "01",
    title: "Pull Comps from Land Portal",
    desc: "Export sold land comps from Land Portal for your target county. LandIQ ingests the data and runs market analysis — velocity, median prices, and acreage-band trends.",
    detail: "Land Portal data only. No MLS noise. No residential sales contaminating your comps.",
  },
  {
    number: "02",
    title: "Upload Your Target Parcel List",
    desc: "Pull your target parcel list from Land Portal and upload it to LandIQ. The Target-to-Comp Matching engine automatically pairs each parcel to its most relevant sold comps.",
    detail: "Matched by acreage band and location proximity — the same logic an experienced investor applies manually, done in seconds.",
  },
  {
    number: "03",
    title: "Price Every Parcel Instantly",
    desc: "LandIQ calculates median $/acre by acreage band for each matched parcel and generates 40%, 50%, and 60% offer tiers across your entire list — in bulk.",
    detail: "No spreadsheet formulas. No manual comp lookups. Every parcel priced consistently.",
  },
  {
    number: "04",
    title: "Export and Mail",
    desc: "Download your priced parcel list as a clean CSV. Send it straight to your direct mail house and launch your campaign the same day you finish your market pull.",
    detail: "From Land Portal export to mail-ready offer list — the workflow that takes days now takes an hour.",
  },
];

const audiences = [
  {
    icon: TrendingUp,
    title: "Land Investors & Flippers",
    desc: "Price faster, offer smarter, and stop leaving money on the table. Know your numbers before you ever call a seller.",
  },
  {
    icon: Building2,
    title: "Builders & Developers",
    desc: "Evaluate infill lots quickly and understand what makes a parcel worth pursuing. Stop overpaying for land that won't pencil.",
  },
  {
    icon: Users,
    title: "Wholesalers Entering Land",
    desc: "Land is a different game. LandIQ gives you the comp intelligence and offer logic to compete without years of experience.",
  },
  {
    icon: BadgeCheck,
    title: "Agents & Land Brokers",
    desc: "Give clients data-backed pricing analysis. Close faster by eliminating back-and-forth on valuation disagreements.",
  },
];

const differentiators = [
  "Built for the Land Portal workflow — not retrofitted from residential tools",
  "Target-to-Comp Matching prices your entire parcel list automatically",
  "Proprietary acreage band logic accounts for size-based value shifts",
  "Bulk offer calculator: 40/50/60% tiers across hundreds of parcels at once",
  "One-click mailing list export — from analysis to mail campaign same day",
  "Designed for deal velocity, not appraisals or academic analysis",
];

const faqs = [
  {
    q: "Where does LandIQ's data come from?",
    a: "LandIQ has no data of its own. You export sold vacant land comp data from Land Portal for your target county and upload it to LandIQ. The platform processes your export — filtering residential sales, calculating $/acre by acreage band, and running market analysis on what you upload.",
  },
  {
    q: "Does LandIQ replace Land Portal?",
    a: "No. LandIQ is a Land Portal companion. You still need Land Portal to pull the sold comp data and target parcel lists that feed LandIQ's analysis engine. LandIQ processes and analyzes that data — it does not source it.",
  },
  {
    q: "Does LandIQ provide parcel data or owner lists?",
    a: "No. LandIQ does not provide parcel data, owner records, or property searches. You upload your own target parcel list (exported from Land Portal) and LandIQ prices each parcel using the comp data you uploaded.",
  },
  {
    q: "Does it work for infill lots?",
    a: "Yes. LandIQ includes a dedicated Builder Lot Pricing Mode that analyzes infill lots from a builder's perspective, factoring in local builder activity, lot size, and market demand for finished lots.",
  },
  {
    q: "Does it work for rural or large-acreage land?",
    a: "Yes. Our acreage band pricing logic is specifically designed for how price-per-acre changes at different size thresholds — from a half-acre urban infill lot to a 500-acre rural parcel. It adjusts automatically.",
  },
  {
    q: "Does LandIQ replace a licensed appraisal?",
    a: "No. LandIQ is a deal intelligence and underwriting tool for investors — not a licensed appraisal. Use it to make informed offers and evaluate deals quickly. For lending or legal purposes, a licensed appraiser should always be engaged.",
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      {/* ═══════════════════════════ HERO ═══════════════════════════ */}
      <section className="hero-bg grid-bg relative overflow-hidden pt-20 pb-24">
        {/* Purple glow blob */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[600px] w-[700px] rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(ellipse at center, #5C2977 0%, transparent 70%)",
          }}
        />

        <div className="container-xl relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            {/* Badge */}
            <div className="mb-6 flex justify-center">
              <span className="badge">
                <Star size={10} className="fill-brand-gold" /> Beta Access Now Open
              </span>
            </div>

            {/* Headline */}
            <h1 className="heading-hero text-white mb-6">
              Turn Land Portal Sold Data Into{" "}
              <span className="text-gradient-gold">Priced Mailing Lists</span>
            </h1>

            {/* Subheadline */}
            <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-white/80 sm:text-xl">
              Upload your Land Portal comp export, identify high-velocity ZIP codes,
              match target parcels by acreage band, and export investor offer lists —
              in minutes.
            </p>

            {/* CTAs */}
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="#waitlist" className="btn-primary px-8 py-4 text-base">
                Join the Beta Waitlist
                <ArrowRight size={18} />
              </Link>
              <Link href="/dashboard-preview" className="btn-secondary px-8 py-4 text-base">
                See How It Works →
              </Link>
            </div>

            {/* Social proof */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs text-white/40">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={13} className="text-brand-gold" />
                No credit card required
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={13} className="text-brand-gold" />
                Free beta access
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={13} className="text-brand-gold" />
                Built for Land Portal users
              </span>
            </div>
          </div>

          {/* ─── ZIP Dashboard Mockup ─── */}
          <div className="mt-16 mx-auto max-w-5xl">
            <div className="relative rounded-2xl border border-white/10 bg-gradient-to-b from-[#1e1030]/80 to-[#150a25]/80 p-1 shadow-2xl glow-purple backdrop-blur-sm">
              {/* Window chrome */}
              <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/5">
                <div className="h-2.5 w-2.5 rounded-full bg-red-500/60" />
                <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/60" />
                <div className="h-2.5 w-2.5 rounded-full bg-green-500/60" />
                <div className="mx-auto flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-4 py-1 text-xs text-white/40">
                  <span className="h-2 w-2 rounded-full bg-brand-gold/60" />
                  app.landiq.com/market/brunswick-nc
                </div>
              </div>

              {/* App layout: sidebar + main */}
              <div className="flex min-h-[420px]">
                {/* Left sidebar */}
                <div className="w-44 shrink-0 border-r border-white/5 p-4 flex flex-col gap-1">
                  <p className="mb-2 text-[9px] font-semibold uppercase tracking-widest text-white/30">Workflow</p>
                  {[
                    { n: 1, label: "Upload Comps", done: true },
                    { n: 2, label: "ZIP Dashboard", active: true },
                    { n: 3, label: "Match Targets" },
                    { n: 4, label: "Mailing List" },
                    { n: 5, label: "Campaigns" },
                  ].map((s) => (
                    <div key={s.n} className={`flex items-center gap-2 rounded-lg px-2.5 py-2 text-[11px] font-medium ${
                      s.active ? "bg-brand-gold/15 text-brand-gold" :
                      s.done ? "text-green-400/70" : "text-white/30"
                    }`}>
                      <span className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-[9px] font-bold ${
                        s.active ? "bg-brand-gold text-brand-ink" :
                        s.done ? "bg-green-500/20 text-green-400" : "bg-white/5 text-white/20"
                      }`}>
                        {s.done ? "✓" : s.n}
                      </span>
                      {s.label}
                    </div>
                  ))}
                  <div className="mt-auto pt-4 border-t border-white/5">
                    <p className="text-[9px] text-white/20 uppercase tracking-wider mb-1">Market</p>
                    <p className="text-[10px] font-semibold text-white/60">Brunswick Co., NC</p>
                    <p className="text-[9px] text-white/30">931 comps · 12 ZIPs</p>
                  </div>
                </div>

                {/* Main content */}
                <div className="flex-1 p-5 overflow-hidden">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-xs font-bold text-white/80">ZIP Code Intelligence Dashboard</p>
                      <p className="text-[10px] text-white/40">Brunswick County, NC · Last 12 months</p>
                    </div>
                    <span className="rounded-full border border-brand-gold/30 bg-brand-gold/10 px-2 py-0.5 text-[10px] font-semibold text-brand-gold">
                      Step 2 of 5
                    </span>
                  </div>

                  {/* Stats row */}
                  <div className="grid grid-cols-4 gap-3 mb-4">
                    {[
                      { label: "Valid Comps", value: "931", sub: "vacant land only" },
                      { label: "Median Sale", value: "$90K", sub: "all ZIPs" },
                      { label: "Median $/Acre", value: "$208K", sub: "all ZIPs" },
                      { label: "Most Active ZIP", value: "28461", sub: "194 sales" },
                    ].map((s) => (
                      <div key={s.label} className="rounded-xl border border-white/5 bg-white/3 p-3">
                        <p className="text-[9px] text-white/30 uppercase tracking-wide mb-1">{s.label}</p>
                        <p className="text-sm font-black text-brand-gold">{s.value}</p>
                        <p className="text-[9px] text-white/30 mt-0.5">{s.sub}</p>
                      </div>
                    ))}
                  </div>

                  {/* Bar chart + AI summary side by side */}
                  <div className="grid grid-cols-5 gap-3">
                    {/* Bar chart */}
                    <div className="col-span-3 rounded-xl border border-white/5 bg-white/3 p-3">
                      <p className="text-[9px] font-semibold text-white/40 uppercase tracking-wide mb-3">Sales by ZIP</p>
                      <div className="flex items-end gap-1.5 h-20">
                        {[
                          { zip: "28461", h: 100, sales: 194 },
                          { zip: "28422", h: 80, sales: 156 },
                          { zip: "28462", h: 70, sales: 137 },
                          { zip: "28470", h: 67, sales: 130 },
                          { zip: "28467", h: 40, sales: 78 },
                          { zip: "28469", h: 35, sales: 68 },
                          { zip: "28451", h: 31, sales: 60 },
                          { zip: "28468", h: 29, sales: 57 },
                        ].map((b, i) => (
                          <div key={b.zip} className="flex flex-1 flex-col items-center gap-1">
                            <span className="text-[7px] text-white/30">{b.sales}</span>
                            <div
                              className="w-full rounded-t"
                              style={{
                                height: `${b.h * 0.6}px`,
                                background: i === 0 ? "#d5a940" : `rgba(92,41,119,${0.3 + (8-i)*0.07})`,
                              }}
                            />
                            <span className="text-[7px] text-white/30 rotate-0">{b.zip.slice(-3)}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* AI summary + targets */}
                    <div className="col-span-2 flex flex-col gap-2">
                      <div className="rounded-xl border border-white/5 bg-white/3 p-3 flex-1">
                        <p className="text-[9px] font-semibold text-white/40 uppercase tracking-wide mb-1.5">Market Intelligence</p>
                        <p className="text-[10px] leading-relaxed text-white/55">
                          Strong vacant land activity concentrated in 28461 and 28422. Coastal ZIPs command 3–5× premium vs. inland. Sub-acre lots dominate volume.
                        </p>
                      </div>
                      <div className="rounded-xl border border-brand-gold/20 bg-brand-gold/5 p-3">
                        <p className="text-[9px] font-semibold text-brand-gold/70 uppercase tracking-wide mb-1.5">Target ZIPs</p>
                        <div className="flex flex-wrap gap-1">
                          {["28461", "28422", "28462"].map((z) => (
                            <span key={z} className="rounded-full bg-brand-gold/20 px-1.5 py-0.5 text-[9px] font-bold text-brand-gold">{z}</span>
                          ))}
                        </div>
                        <p className="text-[9px] font-semibold text-white/30 uppercase tracking-wide mt-2 mb-1">Avoid</p>
                        <div className="flex flex-wrap gap-1">
                          {["28479", "28420"].map((z) => (
                            <span key={z} className="rounded-full bg-white/5 px-1.5 py-0.5 text-[9px] text-white/30">{z}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Caption */}
            <p className="mt-4 text-center text-xs text-white/30">
              LandIQ — ZIP Code Intelligence Dashboard · Brunswick County, NC · Mockup Preview
            </p>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/20">
          <ChevronDown size={16} className="animate-bounce" />
        </div>
      </section>

      {/* ═══════════════════════════ WORKFLOW PIPELINE ═══════════════════════════ */}
      <section className="bg-brand-ink border-y border-white/5 py-6">
        <div className="container-xl">
          <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-semibold text-white/50">
            {[
              "Land Portal Data",
              "Market Analysis",
              "Target Parcels",
              "Comp Matching",
              "Pricing Engine",
              "Mailing List",
            ].map((step, i, arr) => (
              <span key={step} className="flex items-center gap-2">
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-white/70">
                  {step}
                </span>
                {i < arr.length - 1 && (
                  <ArrowRight size={12} className="text-brand-gold/50" />
                )}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════ LAND PORTAL COMPANION ═══════════════════════════ */}
      <section className="section-light py-16 border-b border-gray-100">
        <div className="container-lg">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 items-center">
            {/* Built for Land Portal users */}
            <div className="rounded-2xl border border-brand-purple/20 bg-brand-purple/5 p-7">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-purple/10 text-brand-purple">
                  <CheckCircle2 size={18} />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-brand-purple">Built for Land Portal Users</span>
              </div>
              <h3 className="text-lg font-black text-gray-900 mb-3">
                LandIQ is a Land Portal companion — not a replacement.
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                The workflow is simple: export your sold vacant land comps from
                Land Portal for your target county, upload the CSV into LandIQ,
                and the platform handles all the analysis, matching, pricing, and
                mailing list generation.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                LandIQ does not provide parcel data or comp data. It processes
                the Land Portal exports you already pull — turning raw data into
                investor-ready pricing intelligence.
              </p>
            </div>

            {/* Don't have Land Portal yet */}
            <div className="rounded-2xl border border-brand-gold/25 bg-brand-gold/5 p-7">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-gold/15 text-brand-gold">
                  <ArrowRight size={18} />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-brand-gold">Don&apos;t Have Land Portal Yet?</span>
              </div>
              <h3 className="text-lg font-black text-gray-900 mb-3">
                LandIQ requires an active Land Portal subscription.
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-5">
                Land Portal is the data source that powers LandIQ&apos;s analysis
                engine. You export sold vacant land comps from Land Portal and
                upload them into LandIQ. If you&apos;re not yet on Land Portal,
                that&apos;s your first step.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-lg border border-brand-gold/40 bg-white px-5 py-2.5 text-sm font-bold text-brand-gold hover:bg-brand-gold/5 transition-colors"
              >
                Get Land Portal Access <ArrowRight size={14} />
              </a>
              <p className="mt-3 text-[11px] text-gray-400">Affiliate link — we may earn a commission at no cost to you.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════ PROBLEM ═══════════════════════════ */}
      <section className="bg-gray-50 py-24">
        <div className="container-xl">
          <div className="mx-auto max-w-3xl text-center mb-14">
            <span className="badge-purple mb-4">The Problem</span>
            <h2 className="heading-section text-gray-900 mt-4">
              You Have Land Portal Data.{" "}
              <span className="text-brand-purple">Now What?</span>
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Most investors pull comps from Land Portal and then spend hours
              cleaning spreadsheets, calculating $/acre manually, and guessing
              which parcels to offer on — and what to pay.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {problems.map((p, i) => (
              <div
                key={p.title}
                className="card-light group hover:border-brand-purple/20 hover:shadow-md transition-all duration-300"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-purple/10 text-brand-purple">
                  <p.icon size={20} />
                </div>
                <h3 className="mb-2 text-base font-bold text-gray-900">{p.title}</h3>
                <p className="text-sm leading-relaxed text-gray-500">{p.desc}</p>
              </div>
            ))}

            {/* Extra callout */}
            <div className="card-light border-brand-gold/30 bg-gradient-to-br from-brand-gold/5 to-transparent sm:col-span-2 lg:col-span-3 lg:hidden xl:flex">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div className="flex-1">
                  <p className="text-sm font-bold text-gray-900 mb-1">
                    The result? Hours lost cleaning data, offers based on guesswork, and deals missed.
                  </p>
                  <p className="text-sm text-gray-500">
                    LandIQ automates the entire process — from raw Land Portal export to mail-ready offer list.
                  </p>
                </div>
                <Link href="#waitlist" className="btn-dark shrink-0">
                  Solve It Now →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════ SOLUTION ═══════════════════════════ */}
      <section className="section-light py-24">
        <div className="container-xl">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <div>
              <span className="badge-purple mb-4">The Solution</span>
              <h2 className="heading-section text-gray-900 mt-4 mb-6">
                LandIQ Automates What You{" "}
                <span className="text-brand-purple">Do in Spreadsheets</span>
              </h2>
              <p className="mb-6 text-lg text-gray-500 leading-relaxed">
                Upload your Land Portal comp export. LandIQ filters out residential
                noise, builds your ZIP code intelligence dashboard, matches every
                target parcel to relevant comps by acreage band, calculates estimated
                retail value, and generates 40/50/60% investor offer tiers — across
                your entire list at once.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Ingests Land Portal comp exports — filters residential automatically",
                  "ZIP Intelligence Dashboard: velocity, median $/acre, price bands",
                  "Acreage band matching: each parcel priced within its size tier",
                  "Investor Offer Engine: 40/50/60% tiers calculated per parcel",
                  "One-click mailing list export — mail-ready the same day",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-gray-700">
                    <CheckCircle2
                      size={17}
                      className="mt-0.5 shrink-0 text-brand-purple"
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="#waitlist" className="btn-dark">
                Get Early Access →
              </Link>
            </div>

            {/* Illustration panel */}
            <div className="relative">
              <div className="rounded-2xl bg-gradient-to-br from-brand-ink to-[#1e1030] p-8 border border-white/5 shadow-xl">
                <p className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-1">
                  Investor Offer Engine
                </p>
                <p className="text-[11px] text-white/30 mb-5">3.2 acres · 28461 · acreage band 1–5ac · 5 comps matched</p>
                <div className="rounded-lg border border-brand-gold/20 bg-brand-gold/5 p-4 mb-5">
                  <p className="text-[10px] text-white/40 mb-1">Estimated Retail Value</p>
                  <div className="flex items-end gap-3">
                    <span className="text-4xl font-black text-white">$58,880</span>
                    <span className="mb-1 text-[11px] text-white/40">3.2 ac × $18,400/ac median</span>
                  </div>
                </div>
                <div className="space-y-2.5">
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-white/40 mb-3">
                    Offer Tiers — Applied to Every Parcel
                  </p>
                  {[
                    { label: "40% Conservative", value: "$23,552", width: "40%", color: "bg-red-500/70", sub: "Low-risk entry offer" },
                    { label: "50% Standard", value: "$29,440", width: "50%", color: "bg-brand-gold", sub: "Most common winning offer" },
                    { label: "60% Aggressive", value: "$35,328", width: "60%", color: "bg-green-400/70", sub: "Competitive markets" },
                  ].map((tier) => (
                    <div key={tier.label}>
                      <div className="flex items-center gap-3 mb-1">
                        <span className="text-[10px] text-white/50 w-28 shrink-0">{tier.label}</span>
                        <div className="flex-1 h-2 rounded-full bg-white/5">
                          <div className={`h-2 rounded-full ${tier.color}`} style={{ width: tier.width }} />
                        </div>
                        <span className="text-sm font-black text-white w-18 text-right">{tier.value}</span>
                      </div>
                      <p className="text-[9px] text-white/25 pl-28">{tier.sub}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 rounded-xl border border-brand-gold/30 bg-brand-ink px-4 py-2.5 shadow-xl">
                <p className="text-[10px] text-white/50 mb-0.5">Parcels Priced</p>
                <p className="text-lg font-black text-brand-gold">247 at once</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════ FEATURES ═══════════════════════════ */}
      <section id="features" className="section-dark py-24 grid-bg">
        <div className="container-xl">
          <div className="mx-auto max-w-3xl text-center mb-14">
            <span className="badge mb-4">Features</span>
            <h2 className="heading-section text-white mt-4">
              Every Tool a Land Investor{" "}
              <span className="text-gradient-gold">Actually Needs</span>
            </h2>
            <p className="mt-4 text-lg text-white/50">
              Built from the ground up for vacant land — not repurposed from a
              residential platform.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => (
              <div key={f.title} className="card-feature group">
                <div className="mb-4 flex items-start justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-gold/10 text-brand-gold">
                    <f.icon size={20} />
                  </div>
                  <span
                    className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${
                      f.tag === "Unique"
                        ? "bg-brand-gold/20 text-brand-gold"
                        : f.tag === "Proprietary"
                        ? "bg-brand-purple/30 text-brand-purpleLight"
                        : f.tag === "Coming Soon" || f.tag === "Roadmap"
                        ? "bg-white/5 text-white/30"
                        : "bg-white/5 text-white/40"
                    }`}
                  >
                    {f.tag}
                  </span>
                </div>
                <h3 className="mb-2 text-sm font-bold text-white">{f.title}</h3>
                <p className="text-xs leading-relaxed text-white/50">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════ PRODUCT SCREENSHOTS ═══════════════════════════ */}
      <section className="section-light py-20 border-b border-gray-100">
        <div className="container-xl">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <span className="badge-purple mb-4">The Platform</span>
            <h2 className="heading-section text-gray-900 mt-4">
              See LandIQ{" "}
              <span className="text-brand-purple">In Action</span>
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              From raw Land Portal export to priced mailing list — here&apos;s what the platform looks like.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Screenshot 1: ZIP Dashboard */}
            <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-lg">
              <img
                src="/screenshots/dashboard.png"
                alt="ZIP Code Intelligence Dashboard"
                className="w-full block"
              />
              <div className="bg-white px-5 py-4 border-t border-gray-100">
                <p className="font-bold text-gray-900 text-sm">ZIP Code Intelligence Dashboard</p>
                <p className="text-xs text-gray-500 mt-1">
                  See market velocity, median $/acre, and sales volume across every ZIP in your target county.
                </p>
              </div>
            </div>

            {/* Screenshot 2: Mailing List */}
            <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-lg">
              <img
                src="/screenshots/mailing-list.png"
                alt="Mailing List Export"
                className="w-full block"
              />
              <div className="bg-white px-5 py-4 border-t border-gray-100">
                <p className="font-bold text-gray-900 text-sm">Mailing List — Ready to Export</p>
                <p className="text-xs text-gray-500 mt-1">
                  Deduplicated, priced, and mail-ready. Download the full list or filter to High Confidence only.
                </p>
              </div>
            </div>

            {/* Screenshot 3: Match Targets */}
            <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-lg">
              <img
                src="/screenshots/match-targets.png"
                alt="Run Matching Engine — Matched Parcels"
                className="w-full block"
              />
              <div className="bg-white px-5 py-4 border-t border-gray-100">
                <p className="font-bold text-gray-900 text-sm">Target-to-Comp Matching Engine</p>
                <p className="text-xs text-gray-500 mt-1">
                  Every parcel scored, matched to comps, and priced with Low / Mid offer tiers — across thousands of targets at once.
                </p>
              </div>
            </div>

            {/* Screenshot 4: Sold Comps Map */}
            <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-lg">
              <img
                src="/screenshots/comps-map.png"
                alt="Sold Comps Map"
                className="w-full block"
              />
              <div className="bg-white px-5 py-4 border-t border-gray-100">
                <p className="font-bold text-gray-900 text-sm">Sold Comps Map</p>
                <p className="text-xs text-gray-500 mt-1">
                  See where 709 sold comp locations are clustered — color-coded by ZIP on a live interactive map.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 text-center">
            <Link href="/dashboard-preview" className="btn-dark">
              Full Platform Walkthrough →
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════ HOW IT WORKS ═══════════════════════════ */}
      <section id="how-it-works" className="section-muted py-24">
        <div className="container-xl">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <span className="badge-purple mb-4">Process</span>
            <h2 className="heading-section text-gray-900 mt-4">
              From Land Portal Pull to{" "}
              <span className="text-brand-purple">Mail Campaign in 4 Steps</span>
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Stop spending days on spreadsheets. LandIQ automates the full
              workflow — from comp analysis to bulk offers to mailing list export.
            </p>
          </div>

          <div className="relative">
            {/* Connector line */}
            <div
              aria-hidden
              className="absolute left-1/2 top-[60px] hidden h-[calc(100%-120px)] w-px -translate-x-1/2 bg-gradient-to-b from-brand-purple/40 via-brand-gold/40 to-transparent lg:block"
            />

            <div className="space-y-10 lg:space-y-16">
              {steps.map((step, i) => (
                <div
                  key={step.number}
                  className={`flex flex-col items-center gap-8 lg:flex-row ${
                    i % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Content */}
                  <div className="flex-1 lg:max-w-md">
                    <div className="card-light hover:shadow-lg transition-shadow">
                      <div className="mb-4 flex items-center gap-3">
                        <span className="text-4xl font-black text-brand-purple/20">
                          {step.number}
                        </span>
                        <h3 className="text-xl font-bold text-gray-900">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-gray-600 mb-3 leading-relaxed">{step.desc}</p>
                      <p className="text-sm text-brand-purple font-medium">
                        ↳ {step.detail}
                      </p>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="hidden lg:flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-brand-gold bg-brand-ink shadow-lg glow-gold">
                    <span className="text-xs font-black text-brand-gold">
                      {step.number}
                    </span>
                  </div>

                  {/* Empty spacer */}
                  <div className="flex-1 hidden lg:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════ WHO IT'S FOR ═══════════════════════════ */}
      <section className="section-light py-24">
        <div className="container-xl">
          <div className="mx-auto max-w-3xl text-center mb-14">
            <span className="badge-purple mb-4">Who It's For</span>
            <h2 className="heading-section text-gray-900 mt-4">
              Built for Everyone Who{" "}
              <span className="text-brand-purple">Buys or Prices Land</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {audiences.map((a) => (
              <div
                key={a.title}
                className="group rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm transition-all hover:border-brand-purple/30 hover:shadow-md"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-purple/10 text-brand-purple">
                  <a.icon size={22} />
                </div>
                <h3 className="mb-2 text-base font-bold text-gray-900">{a.title}</h3>
                <p className="text-sm leading-relaxed text-gray-500">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════ WHY DIFFERENT ═══════════════════════════ */}
      <section className="section-dark py-24">
        <div className="container-xl">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <div>
              <span className="badge mb-4">Why LandIQ</span>
              <h2 className="heading-section text-white mt-4 mb-6">
                Not Another{" "}
                <span className="text-gradient-gold">Generic RE Tool</span>
              </h2>
              <p className="mb-8 text-lg text-white/50 leading-relaxed">
                Every other real estate platform was built for residential agents.
                LandIQ was built from scratch for the way land investors actually
                work — market analysis, bulk comp matching, and direct mail
                acquisition campaigns powered by Land Portal data.
              </p>
              <ul className="space-y-3 mb-8">
                {differentiators.map((d) => (
                  <li key={d} className="flex items-start gap-2.5 text-sm text-white/70">
                    <CheckCircle2
                      size={16}
                      className="mt-0.5 shrink-0 text-brand-gold"
                    />
                    {d}
                  </li>
                ))}
              </ul>
              <Link href="/about" className="btn-secondary">
                Our Story →
              </Link>
            </div>

            {/* Compare table */}
            <div className="overflow-hidden rounded-2xl border border-white/10">
              <div className="grid grid-cols-3 bg-white/5 px-4 py-3 text-xs font-semibold uppercase tracking-widest text-white/50">
                <span>Feature</span>
                <span className="text-center text-brand-gold">LandIQ</span>
                <span className="text-center">Other Tools</span>
              </div>
              {[
                ["Land Portal comp ingestion", true, false],
                ["Target-to-Comp Matching", true, false],
                ["Acreage band pricing", true, false],
                ["Bulk offer calculator", true, false],
                ["Mailing list export", true, false],
                ["Land-specific data model", true, false],
                ["Residential comps", false, true],
                ["Built for land investors", true, false],
              ].map(([label, landiq, other]) => (
                <div
                  key={String(label)}
                  className="grid grid-cols-3 items-center border-t border-white/5 px-4 py-3 text-sm"
                >
                  <span className="text-white/70">{String(label)}</span>
                  <span className="text-center">
                    {landiq ? (
                      <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-brand-gold/20 text-brand-gold text-xs">✓</span>
                    ) : (
                      <span className="text-white/20 text-xs">—</span>
                    )}
                  </span>
                  <span className="text-center">
                    {other ? (
                      <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-white/10 text-white/50 text-xs">✓</span>
                    ) : (
                      <span className="text-white/20 text-xs">✗</span>
                    )}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════ WAITLIST ═══════════════════════════ */}
      <section id="waitlist" className="py-24" style={{ background: "linear-gradient(135deg, #3d1a50 0%, #5C2977 50%, #3d1a50 100%)" }}>
        <div className="container-xl">
          <div className="mx-auto max-w-2xl">
            <div className="text-center mb-10">
              <span className="badge mb-4">Limited Beta</span>
              <h2 className="heading-section text-white mt-4 mb-4">
                Get Early Access to LandIQ
              </h2>
              <p className="text-lg text-white/60 leading-relaxed">
                We're accepting a limited number of beta users. Join the waitlist
                and get priority access, free during beta, and input into the
                product roadmap.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-brand-ink/60 backdrop-blur-sm p-8">
              <WaitlistForm
                variant="dark"
                showPhone
                showMessage
                type="waitlist"
                ctaLabel="Claim My Beta Spot →"
              />
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4 text-center">
              {[
                { number: "Free", label: "During Beta" },
                { number: "100", label: "Spots Available" },
                { number: "Land", label: "Investors Only" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="text-2xl font-black text-brand-gold">{s.number}</p>
                  <p className="text-xs text-white/40">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════ FAQ ═══════════════════════════ */}
      <section id="faq" className="section-muted py-24">
        <div className="container-xl">
          <div className="mx-auto max-w-3xl">
            <div className="text-center mb-12">
              <span className="badge-purple mb-4">FAQ</span>
              <h2 className="heading-section text-gray-900 mt-4">
                Common Questions
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq) => (
                <details
                  key={faq.q}
                  className="group rounded-xl border border-gray-100 bg-white shadow-sm overflow-hidden"
                >
                  <summary className="flex cursor-pointer items-center justify-between px-6 py-4 text-sm font-semibold text-gray-900 hover:text-brand-purple list-none">
                    {faq.q}
                    <ChevronDown
                      size={16}
                      className="shrink-0 text-gray-400 transition-transform duration-200 group-open:rotate-180"
                    />
                  </summary>
                  <div className="px-6 pb-5">
                    <p className="text-sm leading-relaxed text-gray-500">{faq.a}</p>
                  </div>
                </details>
              ))}
            </div>

            <div className="mt-10 text-center">
              <p className="text-sm text-gray-500 mb-4">
                Have more questions?
              </p>
              <Link href="/contact" className="btn-dark">
                Contact Us →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════ FINAL CTA ═══════════════════════════ */}
      <section className="section-dark py-24 relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background: "radial-gradient(ellipse 60% 60% at 50% 100%, rgba(92,41,119,0.4) 0%, transparent 70%)",
          }}
        />
        <div className="container-xl relative z-10 text-center">
          <span className="badge mb-6">Limited Availability</span>
          <h2 className="heading-section text-white mt-4 mb-6 mx-auto max-w-3xl">
            Land Investors Who Price with Precision{" "}
            <span className="text-gradient-gold">Win More Deals</span>
          </h2>
          <p className="mx-auto mb-10 max-w-xl text-lg text-white/50 leading-relaxed">
            Join the investors who are moving faster, offering smarter, and
            building a data edge in one of real estate's least-analyzed sectors.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="#waitlist" className="btn-primary px-10 py-4 text-base">
              Join the Beta Waitlist
              <ArrowRight size={18} />
            </Link>
            <Link href="/dashboard-preview" className="btn-ghost px-10 py-4 text-base border border-white/10">
              See the Dashboard →
            </Link>
          </div>
          <p className="mt-6 text-xs text-white/30">
            Free during beta · No credit card required · Limited spots
          </p>
        </div>
      </section>
    </>
  );
}
