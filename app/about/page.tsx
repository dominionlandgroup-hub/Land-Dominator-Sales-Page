import Link from "next/link";
import { CheckCircle2, ArrowRight, Target, Users, TrendingUp, Star } from "lucide-react";

export const metadata = {
  title: "About — LandIQ",
  description:
    "LandIQ was built by land investors who were tired of using tools built for everyone else. Learn about our mission to bring data-driven intelligence to vacant land investing.",
};

const values = [
  {
    icon: Target,
    title: "Purpose-Built",
    desc: "Every feature in LandIQ was designed around the way land investors actually work — not adapted from a residential platform.",
  },
  {
    icon: TrendingUp,
    title: "Data-Driven",
    desc: "We believe investors who make decisions based on real comp data consistently outperform those who rely on gut instinct alone.",
  },
  {
    icon: Users,
    title: "Investor-First",
    desc: "We build for serious operators — land flippers, infill buyers, builder lot sourcers — not casual browsers or hobbyists.",
  },
  {
    icon: Star,
    title: "Continuously Improving",
    desc: "Beta users get direct input into the roadmap. The product grows with your needs, not on a vendor's arbitrary schedule.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-bg grid-bg pt-32 pb-20">
        <div className="container-xl">
          <div className="mx-auto max-w-3xl text-center">
            <span className="badge mb-5">Our Mission</span>
            <h1 className="heading-hero text-white mt-4 mb-6">
              Built by Land Investors,{" "}
              <span className="text-gradient-gold">for Land Investors</span>
            </h1>
            <p className="text-xl text-white/60 leading-relaxed">
              LandIQ was created out of frustration. We were already using Land
              Portal to pull comps — but turning those exports into priced mailing
              lists still required hours of manual spreadsheet work. We built
              LandIQ to eliminate that bottleneck entirely.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-light py-20">
        <div className="container-lg">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 items-center">
            <div>
              <span className="badge-purple mb-4">Our Story</span>
              <h2 className="heading-sub text-gray-900 mt-4 mb-6">
                The Problem We Kept Running Into
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  We were already using Land Portal to export sold land comps for
                  every county we worked in. The data was there — but turning it
                  into priced offers was entirely manual. Filter out residential
                  sales. Calculate $/acre for each row. Sort comps by acreage band.
                  Build offer formulas. Repeat for every parcel on the target list.
                </p>
                <p>
                  On a 200-parcel campaign, that process took two to three days.
                  We were spending more time cleaning data than actually analyzing
                  deals — and making offers based on gut instinct more often than
                  we'd like to admit.
                </p>
                <p>
                  Every real estate tool we looked at was built for residential
                  agents. Land pricing is different: price-per-acre varies sharply
                  by size band, location, and buyer type. No existing platform
                  understood that. So we built one that did.
                </p>
                <p>
                  LandIQ originated as an internal workflow tool used by{" "}
                  <strong className="text-gray-900">We Are Land Specialists</strong>,
                  a real estate investment company focused exclusively on vacant land
                  acquisitions. The platform is now available to the broader land
                  investing community.
                </p>
              </div>
            </div>

            {/* Stats panel */}
            <div className="rounded-2xl bg-brand-ink p-8 border border-white/5">
              <p className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-6">
                Why We Built This
              </p>
              <div className="space-y-5">
                {[
                  {
                    stat: "2–3 days",
                    detail: "wasted per campaign cleaning Land Portal exports and pricing parcels manually in spreadsheets",
                    color: "text-red-400",
                  },
                  {
                    stat: "0",
                    detail: "land-specific pricing tools existed that understood acreage band logic and the Land Portal workflow",
                    color: "text-brand-gold",
                  },
                  {
                    stat: "Every",
                    detail: "real estate platform was built for residential agents — land investors were an afterthought",
                    color: "text-white/60",
                  },
                  {
                    stat: "Now",
                    detail: "land investors can go from Land Portal export to priced mailing list in under an hour",
                    color: "text-green-400",
                  },
                ].map((s) => (
                  <div key={s.stat} className="flex items-start gap-4 border-b border-white/5 pb-5 last:border-0 last:pb-0">
                    <span className={`text-2xl font-black ${s.color}`}>{s.stat}</span>
                    <p className="text-sm text-white/60 leading-relaxed">{s.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-muted py-20">
        <div className="container-xl">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="heading-sub text-gray-900 mb-4">What We Stand For</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="card-light text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-purple/10 text-brand-purple">
                  <v.icon size={22} />
                </div>
                <h3 className="mb-2 font-bold text-gray-900">{v.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-dark py-20">
        <div className="container-xl text-center">
          <h2 className="heading-sub text-white mb-4">
            Ready to Price Land with Confidence?
          </h2>
          <p className="mx-auto mb-8 max-w-lg text-white/50">
            Join the beta and go from Land Portal export to priced mailing list
            in your first session. Built by land investors, for land investors.
          </p>
          <Link href="/#waitlist" className="btn-primary px-10 py-4 text-base">
            Join the Beta Waitlist <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
