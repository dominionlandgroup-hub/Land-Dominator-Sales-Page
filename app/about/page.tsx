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
    title: "Land Only",
    desc: "No residential features. No filler. Every decision we make is filtered through one question: does this help a land investor move faster?",
  },
  {
    icon: TrendingUp,
    title: "Comps Over Gut",
    desc: "Gut instinct loses deals. Accurate $/acre by acreage band wins them. We built the math so you don't have to.",
  },
  {
    icon: Users,
    title: "Operators Only",
    desc: "Built for land flippers, infill buyers, and builder lot sourcers running real campaigns — not hobbyists browsing maps.",
  },
  {
    icon: Star,
    title: "You Shape the Roadmap",
    desc: "Beta users tell us what slows them down. We build that next. No vendor agenda, no feature bloat.",
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
              We were already using Land Portal. The data was there. But pricing
              200 parcels still took three days of spreadsheet work. We built the
              tool that should have existed.
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
                The Same Problem, Every Campaign
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  We pulled Land Portal comps for every county we worked.
                  The data existed. Making it usable didn&apos;t happen automatically.
                  Strip residential. Calculate $/acre per row. Sort by acreage band.
                  Build offer formulas. Do it again for every parcel on the list.
                </p>
                <p>
                  200-parcel campaign: two to three days of cleanup before a single
                  offer went out. We were pricing on feel more than data.
                  That&apos;s not a system — it&apos;s a liability.
                </p>
                <p>
                  Every platform we tried was residential. Land pricing doesn&apos;t
                  work that way. $/acre moves hard at 1, 5, 10, and 25 acres.
                  No tool accounted for that. So we built one that does.
                </p>
                <p>
                  LandIQ started as an internal tool at{" "}
                  <strong className="text-gray-900">We Are Land Specialists</strong>.
                  It solved our problem first. Now it&apos;s available to any land
                  investor running the same workflow.
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
            <h2 className="heading-sub text-gray-900 mb-4">How We Build</h2>
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
            Stop Pricing by Feel
          </h2>
          <p className="mx-auto mb-8 max-w-lg text-white/50">
            Land Portal export to priced mailing list in your first session.
            No spreadsheets. No guesswork. Just offers.
          </p>
          <Link href="/#waitlist" className="btn-primary px-10 py-4 text-base">
            Join the Beta Waitlist <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
