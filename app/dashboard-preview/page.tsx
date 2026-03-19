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
  Zap,
} from "lucide-react";

export const metadata = {
  title: "How It Works — LandIQ",
  description:
    "See how LandIQ turns Land Portal sold comp data into county market analysis, acreage-band pricing, bulk offer generation, and mailing list exports.",
};


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

            {/* Screenshot: ZIP Dashboard */}
            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-xl">
              <img
                src="/screenshots/dashboard.png"
                alt="ZIP Code Intelligence Dashboard — LandIQ"
                className="w-full block"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── Step 2: ZIP Dashboard ─── */}
      <section className="section-muted py-20">
        <div className="container-xl">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 items-start">
            {/* Screenshot: ZIP Dashboard */}
            <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-md order-2 lg:order-1">
              <img
                src="/screenshots/dashboard.png"
                alt="ZIP Code Intelligence Dashboard — LandIQ"
                className="w-full block"
              />
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

          {/* Screenshot: ZIP Performance Table */}
          <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-md mb-8">
            <img
              src="/screenshots/zip-performance.png"
              alt="ZIP Performance Table — LandIQ"
              className="w-full block"
            />
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

            {/* Screenshot: Match Targets */}
            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-xl">
              <img
                src="/screenshots/match-targets.png"
                alt="Run Matching Engine — Matched Parcels — LandIQ"
                className="w-full block"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── Step 4: Mailing List ─── */}
      <section className="section-muted py-20">
        <div className="container-xl">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 items-center">
            {/* Screenshot: Mailing List */}
            <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-md order-2 lg:order-1">
              <img
                src="/screenshots/mailing-list.png"
                alt="Mailing List Export — LandIQ"
                className="w-full block"
              />
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
