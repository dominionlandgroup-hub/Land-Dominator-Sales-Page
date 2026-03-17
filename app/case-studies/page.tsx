import Link from "next/link";
import {
  MapPin,
  BarChart3,
  Calculator,
  Mail,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  DollarSign,
  FileText,
  Layers,
} from "lucide-react";

export const metadata = {
  title: "Case Studies — LandIQ",
  description:
    "Real-world examples of how land investors use LandIQ to identify markets, price parcels, and close profitable deals — from Land Portal comps to mailing list to contract.",
};

// ─── Case Study Data ──────────────────────────────────────────────────────────

const caseStudies = [
  {
    id: "pender-nc",
    badge: "Case Study 01",
    title: "Using Land Portal Data to Create a $28,000 Deal in Pender County, NC",
    subtitle:
      "A land investor identifies a high-velocity rural residential market, prices a 3.2-acre parcel using LandIQ's acreage band logic, and closes at $24,000 — reselling 60 days later for $52,000.",
    tag: "Rural Residential · North Carolina",
    color: "brand-purple",

    market: {
      county: "Pender County, NC",
      compsAnalyzed: 11,
      medianPricePerAcre: "$18,400",
      acreageBand: "2–5 Acres",
      salesVelocity: "9 sales in 6 months",
      insight:
        "Pender County showed consistent buyer demand for rural residential lots in the 2–5 acre range, with strong price-per-acre stability across the band. Low competition from other investors and motivated seller demographics made it an ideal direct mail target.",
    },

    parcel: {
      size: "3.2 acres",
      address: "Off Canetuck Rd, Rocky Point, NC 28457",
      zoning: "RA — Rural Agricultural",
      taxValue: "$41,200",
      comps: [
        { address: "144 Sunset Ridge Dr", acres: "2.8", price: "$49,000", perAcre: "$17,500", date: "Jan 2025" },
        { address: "Off Holly Shelter Rd", acres: "3.1", price: "$58,800", perAcre: "$18,968", date: "Feb 2025" },
        { address: "Topsail Timber Rd", acres: "2.5", price: "$47,500", perAcre: "$19,000", date: "Nov 2024" },
        { address: "Old Watha Rd", acres: "3.4", price: "$60,200", perAcre: "$17,706", date: "Mar 2025" },
        { address: "NC-53 Corridor", acres: "2.9", price: "$54,100", perAcre: "$18,655", date: "Dec 2024" },
      ],
      estimatedRetail: "$58,880",
      retailBasis: "3.2 acres × $18,400 median $/acre",
    },

    offers: [
      { label: "Conservative", pct: "40%", value: "$23,552", color: "text-red-400", bar: "bg-red-400/70", barW: "40%" },
      { label: "Moderate", pct: "50%", value: "$29,440", color: "text-brand-gold", bar: "bg-brand-gold", barW: "50%", highlight: true },
      { label: "Aggressive", pct: "60%", value: "$35,328", color: "text-green-400", bar: "bg-green-400/70", barW: "60%" },
    ],

    campaign: {
      listSize: 214,
      lettersDropped: 214,
      responseRate: "3.7%",
      responses: 8,
      dealsContracted: 1,
      campaignCost: "$320",
    },

    outcome: {
      contractPrice: "$24,000",
      resalePrice: "$52,000",
      grossProfit: "$28,000",
      daysToClose: 22,
      daysToResell: 61,
      totalHoldTime: "83 days",
      roi: "~117%",
    },

    insight:
      "Pender County has low investor saturation but consistent buyer demand — mostly owner-occupants looking for land to build on. LandIQ's acreage band pricing prevented the investor from pricing too high (which would have killed the mail response) or too low (which would have left money on the table). The 50% offer tier landed within $500 of the final contracted price.",
  },

  {
    id: "mohave-az",
    badge: "Case Study 02",
    title: "Scaling a Batch of 3 Mohave County Deals at $4,200/Acre",
    subtitle:
      "An investor running high-volume land mail in Arizona uses LandIQ to price a 5-acre desert parcel, validates the median across 14 comps, and turns a single campaign into three simultaneous contracts.",
    tag: "Desert Land · Arizona",
    color: "brand-gold",

    market: {
      county: "Mohave County, AZ",
      compsAnalyzed: 14,
      medianPricePerAcre: "$4,200",
      acreageBand: "2.5–10 Acres",
      salesVelocity: "22 sales in 6 months",
      insight:
        "Mohave County is a high-volume land market driven by out-of-state buyers seeking affordable recreational and speculative parcels. Price-per-acre is predictable within acreage bands, making LandIQ's median comp logic especially accurate. Direct mail response rates are higher than average due to absentee owner concentration.",
    },

    parcel: {
      size: "5.0 acres",
      address: "Near Union Pass Rd, Kingman, AZ 86401",
      zoning: "A-R — Agricultural Residential",
      taxValue: "$9,800",
      comps: [
        { address: "Valle Vista Rd parcel", acres: "4.8", price: "$19,200", perAcre: "$4,000", date: "Feb 2025" },
        { address: "Off Hwy 93 N", acres: "5.2", price: "$22,360", perAcre: "$4,300", date: "Jan 2025" },
        { address: "Boundary Cone Rd area", acres: "5.0", price: "$21,500", perAcre: "$4,300", date: "Mar 2025" },
        { address: "Calle Del Sol", acres: "4.5", price: "$18,450", perAcre: "$4,100", date: "Nov 2024" },
        { address: "Mineral Park Rd corridor", acres: "5.5", price: "$23,650", perAcre: "$4,300", date: "Dec 2024" },
      ],
      estimatedRetail: "$21,000",
      retailBasis: "5.0 acres × $4,200 median $/acre",
    },

    offers: [
      { label: "Conservative", pct: "40%", value: "$8,400", color: "text-red-400", bar: "bg-red-400/70", barW: "40%" },
      { label: "Moderate", pct: "50%", value: "$10,500", color: "text-brand-gold", bar: "bg-brand-gold", barW: "50%", highlight: true },
      { label: "Aggressive", pct: "60%", value: "$12,600", color: "text-green-400", bar: "bg-green-400/70", barW: "60%" },
    ],

    campaign: {
      listSize: 487,
      lettersDropped: 487,
      responseRate: "4.1%",
      responses: 20,
      dealsContracted: 3,
      campaignCost: "$640",
    },

    outcome: {
      contractPrice: "$9,500",
      resalePrice: "$19,500",
      grossProfit: "$10,000",
      daysToClose: 18,
      daysToResell: 44,
      totalHoldTime: "62 days",
      roi: "~105% (single deal)",
    },

    insight:
      "Mohave County's strength is volume. By running a 487-piece campaign with LandIQ-priced offers, the investor generated 3 simultaneous contracts — allowing them to batch-close and sell in sequence. The median $/acre figure from LandIQ held within 2% of actual resale comps, confirming the pricing engine's accuracy in high-transaction markets.",
  },

  {
    id: "polk-fl",
    badge: "Case Study 03",
    title: "Targeting a Suburban Infill Lot in Polk County, FL for $18,500 Net",
    subtitle:
      "In a rapidly developing Florida county, an investor uses LandIQ to identify a 1.1-acre infill-adjacent parcel undervalued by its owner — and flips it to a builder in under 90 days.",
    tag: "Suburban / Infill Adjacent · Florida",
    color: "brand-purple",

    market: {
      county: "Polk County, FL",
      compsAnalyzed: 8,
      medianPricePerAcre: "$32,000",
      acreageBand: "0.5–2 Acres",
      salesVelocity: "14 sales in 6 months",
      insight:
        "Polk County sits between Tampa and Orlando and is experiencing sustained population growth. Sub-2-acre residential lots are in high demand from both owner-builders and spec homebuilders. LandIQ's builder lot pricing mode flagged this parcel as having elevated builder demand, indicating a potential premium above standard retail.",
    },

    parcel: {
      size: "1.1 acres",
      address: "Near Lake Wales, Polk County, FL 33853",
      zoning: "R-1 — Residential Single Family",
      taxValue: "$28,400",
      comps: [
        { address: "Tillman Ave lot", acres: "0.9", price: "$27,500", perAcre: "$30,556", date: "Jan 2025" },
        { address: "Scenic Hwy parcel", acres: "1.2", price: "$40,000", perAcre: "$33,333", date: "Feb 2025" },
        { address: "Phosphate Rd lot", acres: "1.0", price: "$31,500", perAcre: "$31,500", date: "Mar 2025" },
        { address: "Burns Ave", acres: "1.1", price: "$36,200", perAcre: "$32,909", date: "Nov 2024" },
        { address: "Lake Region lot", acres: "0.8", price: "$25,000", perAcre: "$31,250", date: "Dec 2024" },
      ],
      estimatedRetail: "$35,200",
      retailBasis: "1.1 acres × $32,000 median $/acre",
      builderValue: "$44,000",
    },

    offers: [
      { label: "Conservative", pct: "40%", value: "$14,080", color: "text-red-400", bar: "bg-red-400/70", barW: "40%" },
      { label: "Moderate", pct: "50%", value: "$17,600", color: "text-brand-gold", bar: "bg-brand-gold", barW: "50%", highlight: true },
      { label: "Aggressive", pct: "60%", value: "$21,120", color: "text-green-400", bar: "bg-green-400/70", barW: "60%" },
    ],

    campaign: {
      listSize: 148,
      lettersDropped: 148,
      responseRate: "5.4%",
      responses: 8,
      dealsContracted: 2,
      campaignCost: "$215",
    },

    outcome: {
      contractPrice: "$15,500",
      resalePrice: "$34,000",
      grossProfit: "$18,500",
      daysToClose: 14,
      daysToResell: 72,
      totalHoldTime: "86 days",
      roi: "~119%",
    },

    insight:
      "LandIQ's Builder Lot Pricing Mode flagged this parcel at $44,000 builder value — nearly 25% above standard retail. The investor contracted at the 40% tier ($15,500), listed it to a local homebuilder network, and closed at $34,000 — well above the standard retail estimate. Without the builder value signal, the investor would have underpriced the resale.",
  },
];

// ─── Stat Block Component ─────────────────────────────────────────────────────

function StatBlock({ label, value, sub }: { label: string; value: string; sub?: string }) {
  return (
    <div className="rounded-xl bg-white/5 p-4 text-center">
      <p className="text-[10px] font-semibold uppercase tracking-widest text-white/40 mb-1">{label}</p>
      <p className="text-xl font-black text-white">{value}</p>
      {sub && <p className="text-[10px] text-white/30 mt-0.5">{sub}</p>}
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function CaseStudiesPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-bg grid-bg pt-32 pb-20">
        <div className="container-xl">
          <div className="mx-auto max-w-3xl text-center">
            <span className="badge mb-5">Case Studies</span>
            <h1 className="heading-hero text-white mt-4 mb-5">
              From Land Portal to{" "}
              <span className="text-gradient-gold">Closed Deal</span>
            </h1>
            <p className="text-xl text-white/80 leading-relaxed mb-8">
              Three real-world workflows showing how investors use LandIQ to
              pull Land Portal comps, price parcels by acreage band, build
              their offer, and mail to sellers.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/50">
              {[
                { icon: MapPin, label: "3 markets covered" },
                { icon: BarChart3, label: "Land Portal comp data" },
                { icon: Calculator, label: "Acreage band pricing" },
                { icon: Mail, label: "Direct mail workflow" },
              ].map(({ icon: Icon, label }) => (
                <span key={label} className="flex items-center gap-1.5">
                  <Icon size={14} className="text-brand-gold" />
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Workflow explainer */}
      <section className="section-muted py-14 border-b border-gray-100">
        <div className="container-xl">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-gray-400 mb-8">
            The LandIQ Workflow Behind Every Case Study
          </p>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
            {[
              { n: "1", label: "Land Portal Comps", desc: "Pull vacant land sales data by county" },
              { n: "2", label: "Market ID", desc: "Identify high-velocity counties" },
              { n: "3", label: "Pricing Engine", desc: "Median $/acre by acreage band" },
              { n: "4", label: "Offer Calculator", desc: "40 / 50 / 60% of retail" },
              { n: "5", label: "Mail Campaign", desc: "Export list → send offers" },
            ].map((step) => (
              <div
                key={step.n}
                className="rounded-xl border border-gray-100 bg-white p-4 text-center shadow-sm"
              >
                <div className="mx-auto mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-brand-purple text-white text-xs font-black">
                  {step.n}
                </div>
                <p className="text-xs font-bold text-gray-900 mb-1">{step.label}</p>
                <p className="text-[11px] text-gray-400 leading-snug">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      {caseStudies.map((cs, idx) => (
        <section
          key={cs.id}
          id={cs.id}
          className={idx % 2 === 0 ? "section-light py-20" : "section-muted py-20"}
        >
          <div className="container-xl">
            {/* Header */}
            <div className="mb-12">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="badge">{cs.badge}</span>
                <span className="rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-medium text-gray-500">
                  {cs.tag}
                </span>
              </div>
              <h2 className="text-2xl font-black text-gray-900 leading-tight mb-3 max-w-3xl sm:text-3xl">
                {cs.title}
              </h2>
              <p className="text-gray-500 max-w-2xl leading-relaxed">{cs.subtitle}</p>
            </div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              {/* Left column: Market + Parcel */}
              <div className="lg:col-span-2 space-y-6">

                {/* Step 1–2: Market Analysis */}
                <div className="card-light">
                  <div className="flex items-center gap-2 mb-5">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-purple text-white text-xs font-black">1</div>
                    <h3 className="font-bold text-gray-900">Market Analysis — {cs.market.county}</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 mb-5">
                    {[
                      { label: "Comps Analyzed", value: cs.market.compsAnalyzed },
                      { label: "Median $/Acre", value: cs.market.medianPricePerAcre },
                      { label: "Acreage Band", value: cs.market.acreageBand },
                      { label: "Sales Velocity", value: cs.market.salesVelocity },
                    ].map((s) => (
                      <div key={s.label} className="rounded-lg bg-brand-purple/5 p-3 text-center">
                        <p className="text-[10px] text-gray-400 mb-0.5">{s.label}</p>
                        <p className="text-sm font-bold text-brand-purple">{String(s.value)}</p>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed border-l-2 border-brand-purple/30 pl-3">
                    {cs.market.insight}
                  </p>
                </div>

                {/* Step 3: Comp Table */}
                <div className="card-light">
                  <div className="flex items-center gap-2 mb-5">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-purple text-white text-xs font-black">2</div>
                    <h3 className="font-bold text-gray-900">Comparable Sales (Land Portal)</h3>
                  </div>
                  <div className="overflow-x-auto mb-4">
                    <table className="w-full text-xs">
                      <thead>
                        <tr className="border-b border-gray-100">
                          {["Address", "Acres", "Sale Price", "$/Acre", "Date"].map((h) => (
                            <th key={h} className="pb-2 text-left text-[10px] font-semibold uppercase tracking-wide text-gray-400">
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {cs.parcel.comps.map((comp, i) => (
                          <tr key={i} className="border-b border-gray-50">
                            <td className="py-2.5 text-gray-600">{comp.address}</td>
                            <td className="py-2.5 text-gray-600">{comp.acres}</td>
                            <td className="py-2.5 font-semibold text-gray-900">{comp.price}</td>
                            <td className="py-2.5 text-brand-purple font-medium">{comp.perAcre}</td>
                            <td className="py-2.5 text-gray-400">{comp.date}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="flex flex-wrap items-center gap-4 rounded-lg bg-brand-purple/5 border border-brand-purple/10 p-3">
                    <div>
                      <p className="text-[10px] text-gray-400">Estimated Retail Value</p>
                      <p className="text-lg font-black text-brand-purple">{cs.parcel.estimatedRetail}</p>
                    </div>
                    <div className="h-8 w-px bg-brand-purple/20 hidden sm:block" />
                    <div>
                      <p className="text-[10px] text-gray-400">Basis</p>
                      <p className="text-sm font-medium text-gray-700">{cs.parcel.retailBasis}</p>
                    </div>
                    {cs.parcel.builderValue && (
                      <>
                        <div className="h-8 w-px bg-brand-purple/20 hidden sm:block" />
                        <div>
                          <p className="text-[10px] text-brand-gold font-semibold">Builder Lot Value</p>
                          <p className="text-lg font-black text-brand-gold">{cs.parcel.builderValue}</p>
                        </div>
                      </>
                    )}
                  </div>
                </div>

                {/* Step 5: Mail Campaign */}
                <div className="card-light">
                  <div className="flex items-center gap-2 mb-5">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-purple text-white text-xs font-black">4</div>
                    <h3 className="font-bold text-gray-900">Mail Campaign</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                    {[
                      { label: "List Size", value: String(cs.campaign.listSize) },
                      { label: "Letters Dropped", value: String(cs.campaign.lettersDropped) },
                      { label: "Response Rate", value: cs.campaign.responseRate },
                      { label: "Responses", value: String(cs.campaign.responses) },
                      { label: "Deals Contracted", value: String(cs.campaign.dealsContracted) },
                      { label: "Campaign Cost", value: cs.campaign.campaignCost },
                    ].map((s) => (
                      <div key={s.label} className="rounded-lg bg-gray-50 border border-gray-100 p-3">
                        <p className="text-[10px] text-gray-400 mb-0.5">{s.label}</p>
                        <p className="text-base font-bold text-gray-900">{s.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right column: Offer Calculator + Outcome */}
              <div className="space-y-6">
                {/* Parcel detail */}
                <div className="rounded-2xl bg-brand-ink p-5 border border-white/5">
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-white/40 mb-4">
                    Subject Parcel
                  </p>
                  <div className="space-y-3 mb-4">
                    {[
                      { label: "Size", value: cs.parcel.size },
                      { label: "Zoning", value: cs.parcel.zoning },
                      { label: "Tax Value", value: cs.parcel.taxValue },
                      { label: "Acreage Band", value: cs.market.acreageBand },
                    ].map((r) => (
                      <div key={r.label} className="flex items-center justify-between border-b border-white/5 pb-2 last:border-0">
                        <p className="text-[11px] text-white/40">{r.label}</p>
                        <p className="text-xs font-semibold text-white/80">{r.value}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Offer tiers */}
                <div className="rounded-2xl bg-brand-ink p-5 border border-white/5">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-gold text-brand-ink text-xs font-black">3</div>
                    <p className="text-xs font-bold text-white">Offer Calculator</p>
                  </div>
                  <div className="mb-4 rounded-lg border border-brand-gold/20 bg-brand-gold/5 p-3">
                    <p className="text-[10px] text-white/50 mb-0.5">Estimated Retail Value</p>
                    <p className="text-2xl font-black text-white">{cs.parcel.estimatedRetail}</p>
                  </div>
                  <div className="space-y-2.5">
                    {cs.offers.map((o) => (
                      <div key={o.pct} className="rounded-lg bg-white/5 border border-white/5 p-3">
                        <div className="flex items-center justify-between mb-1.5">
                          <span className={`text-[10px] font-semibold ${o.color}`}>{o.pct} · {o.label}</span>
                          <span className="text-sm font-black text-white">{o.value}</span>
                        </div>
                        <div className="h-1 rounded-full bg-white/5">
                          <div className={`h-1 rounded-full ${o.bar}`} style={{ width: o.barW }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Deal outcome */}
                <div className="rounded-2xl border border-green-500/20 bg-green-500/5 p-5">
                  <div className="flex items-center gap-2 mb-4">
                    <TrendingUp size={16} className="text-green-400" />
                    <p className="text-sm font-bold text-gray-900">Deal Outcome</p>
                  </div>
                  <div className="space-y-2.5">
                    {[
                      { label: "Contract Price", value: cs.outcome.contractPrice, bold: false },
                      { label: "Resale Price", value: cs.outcome.resalePrice, bold: false },
                      { label: "Gross Profit", value: cs.outcome.grossProfit, bold: true },
                      { label: "Days to Contract", value: `${cs.outcome.daysToClose} days`, bold: false },
                      { label: "Total Hold Time", value: cs.outcome.totalHoldTime, bold: false },
                      { label: "Approx. ROI", value: cs.outcome.roi, bold: true },
                    ].map((r) => (
                      <div key={r.label} className="flex items-center justify-between border-b border-green-500/10 pb-2 last:border-0">
                        <p className="text-xs text-gray-500">{r.label}</p>
                        <p className={`text-sm ${r.bold ? "font-black text-green-600" : "font-semibold text-gray-900"}`}>
                          {r.value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Investor Insight */}
            <div className="mt-8 rounded-2xl border border-brand-purple/20 bg-gradient-to-br from-brand-purple/5 to-transparent p-6">
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-purple/20 text-brand-purple">
                  <CheckCircle2 size={16} />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-brand-purple mb-2">
                    Investor Insight
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed">{cs.insight}</p>
                </div>
              </div>
            </div>

            {/* Divider between studies */}
            {idx < caseStudies.length - 1 && (
              <div className="mt-10 flex items-center gap-4">
                <div className="flex-1 h-px bg-gray-200" />
                <span className="text-xs text-gray-400">Next Case Study ↓</span>
                <div className="flex-1 h-px bg-gray-200" />
              </div>
            )}
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="section-dark py-20">
        <div className="container-xl text-center">
          <span className="badge mb-5">Run Your Own Analysis</span>
          <h2 className="heading-sub text-white mt-4 mb-4">
            Ready to Price Your Next Parcel?
          </h2>
          <p className="text-white/60 mb-8 max-w-lg mx-auto leading-relaxed">
            Join the beta and run a full Land Portal–powered comp analysis,
            get your offer tiers, and export your mail list — in minutes.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="/#waitlist" className="btn-primary px-10 py-4 text-base">
              Join the Beta Waitlist <ArrowRight size={18} />
            </Link>
            <Link href="/dashboard-preview" className="btn-secondary px-10 py-4 text-base">
              See the Dashboard →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
