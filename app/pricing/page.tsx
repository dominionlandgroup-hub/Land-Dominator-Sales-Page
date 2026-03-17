import Link from "next/link";
import { CheckCircle2, ArrowRight, Zap, Star, Building2, Info } from "lucide-react";

export const metadata = {
  title: "Pricing — LandIQ",
  description:
    "Simple, transparent pricing for land investors. Plans are based on active markets (counties). Free during beta.",
};

const plans = [
  {
    name: "Solo Investor",
    icon: Zap,
    price: "$79",
    period: "/month",
    betaPrice: "Free",
    tagline: "Best for individual land investors testing a few markets.",
    markets: "3 Active Markets",
    highlight: false,
    features: [
      "3 Active Markets (Counties)",
      "Upload Land Portal sold comps",
      "Market analysis engine",
      "Target parcel matching",
      "Acreage band pricing",
      "Offer calculator (40 / 50 / 60%)",
      "Mailing list generator",
      "1 user seat",
      "Email support",
    ],
    notIncluded: [
      "Builder lot pricing mode",
      "Infill lot analyzer",
      "Team seats",
      "API access",
    ],
  },
  {
    name: "Investor Pro",
    icon: Star,
    price: "$149",
    period: "/month",
    betaPrice: "Free",
    tagline: "Best for investors running multiple acquisition campaigns.",
    markets: "10 Active Markets",
    highlight: true,
    features: [
      "10 Active Markets (Counties)",
      "Upload Land Portal sold comps",
      "Market analysis engine",
      "Target parcel matching",
      "Acreage band pricing",
      "Offer calculator (40 / 50 / 60%)",
      "Mailing list generator",
      "Builder lot pricing mode",
      "Infill lot analyzer",
      "Advanced comp filtering",
      "Faster processing",
      "Priority email support",
    ],
    notIncluded: ["Team seats", "API access"],
  },
  {
    name: "Team",
    icon: Building2,
    price: "$299",
    period: "/month",
    betaPrice: "Free",
    tagline: "Best for teams and larger acquisition operations.",
    markets: "Unlimited Markets",
    highlight: false,
    features: [
      "Unlimited Active Markets",
      "Upload Land Portal sold comps",
      "Market analysis engine",
      "Target parcel matching",
      "Acreage band pricing",
      "Offer calculator (40 / 50 / 60%)",
      "Mailing list generator",
      "Builder lot pricing mode",
      "Infill lot analyzer",
      "Advanced comp filtering",
      "Multiple user seats",
      "Team campaign management",
      "API access (coming soon)",
      "Priority support",
      "Custom onboarding",
    ],
    notIncluded: [],
  },
];

const pricingFaqs = [
  {
    q: "Is LandIQ really free during beta?",
    a: "Yes. All beta users get full Investor Pro feature access at no charge during the beta period. When commercial pricing activates, you'll receive advance notice and early users may receive a discounted rate.",
  },
  {
    q: "What is an 'Active Market'?",
    a: "An Active Market is a county you're currently running an acquisition campaign in. You upload Land Portal comp data for that county, analyze the market, build your target parcel list, and generate your mailing campaign. Your market limit is how many counties you can run simultaneously.",
  },
  {
    q: "Do I need a Land Portal subscription?",
    a: "Yes. LandIQ works with sold vacant land comp data exported from Land Portal. You pull the data from Land Portal, upload it to LandIQ, and the platform handles analysis, matching, pricing, and mailing list export. Land Portal is a separate subscription.",
  },
  {
    q: "What happens after the beta ends?",
    a: "Beta users keep their access. Pricing plans will activate after the commercial launch. Early users will receive advance notice and may be eligible for discounted pricing or priority access to new features.",
  },
  {
    q: "Can I switch plans later?",
    a: "Yes. You can upgrade or downgrade at any time. Changes take effect on your next billing cycle.",
  },
  {
    q: "Do you offer annual pricing?",
    a: "We plan to offer an annual discount at commercial launch. Beta users will have early access to lock in annual pricing.",
  },
];

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-bg grid-bg pt-28 pb-20">
        <div className="container-xl text-center">
          <span className="badge mb-5">Pricing</span>
          <h1 className="heading-hero text-white mt-4 mb-4">
            Plans Built Around{" "}
            <span className="text-gradient-gold">Active Markets</span>
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-white/60 leading-relaxed">
            Land investors work by county. Your plan is based on how many active
            markets you're running — not how many individual parcels you analyze.
          </p>
          <div className="mt-8 inline-flex items-center gap-2 rounded-xl border border-brand-gold/30 bg-brand-gold/10 px-6 py-3">
            <Star size={16} className="text-brand-gold fill-brand-gold" />
            <span className="text-sm font-semibold text-brand-gold">
              Beta Access — All features free for a limited time
            </span>
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="section-muted py-20 -mt-8">
        <div className="container-xl">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 items-start">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl border p-8 transition-all ${
                  plan.highlight
                    ? "border-brand-gold bg-brand-ink shadow-2xl shadow-brand-purple/20 relative"
                    : "border-gray-200 bg-white shadow-sm"
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="rounded-full bg-brand-gold px-4 py-1 text-xs font-bold text-brand-ink">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className={`mb-5 flex h-11 w-11 items-center justify-center rounded-xl ${plan.highlight ? "bg-brand-gold/20 text-brand-gold" : "bg-brand-purple/10 text-brand-purple"}`}>
                  <plan.icon size={22} />
                </div>

                <h3 className={`mb-1 text-xl font-black ${plan.highlight ? "text-white" : "text-gray-900"}`}>
                  {plan.name}
                </h3>
                <p className={`mb-2 text-sm ${plan.highlight ? "text-white/50" : "text-gray-500"}`}>
                  {plan.tagline}
                </p>

                {/* Markets callout */}
                <div className={`mb-5 inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-bold ${plan.highlight ? "bg-brand-gold/15 text-brand-gold" : "bg-brand-purple/10 text-brand-purple"}`}>
                  {plan.markets}
                </div>

                {/* Beta price */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className={`text-5xl font-black ${plan.highlight ? "text-brand-gold" : "text-brand-purple"}`}>
                      {plan.betaPrice}
                    </span>
                    <span className={`text-sm ${plan.highlight ? "text-white/40" : "text-gray-400"}`}>
                      during beta
                    </span>
                  </div>
                  <p className={`mt-1 text-xs ${plan.highlight ? "text-white/30" : "text-gray-400"}`}>
                    Then {plan.price}{plan.period} after launch
                  </p>
                </div>

                <Link
                  href="/#waitlist"
                  className={`mb-7 block w-full rounded-lg py-3 text-center text-sm font-bold transition-all ${
                    plan.highlight
                      ? "bg-brand-gold text-brand-ink hover:bg-brand-goldLight"
                      : "bg-brand-purple text-white hover:bg-brand-purpleLight"
                  }`}
                >
                  Claim Beta Access →
                </Link>

                <ul className="space-y-2.5">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <CheckCircle2
                        size={15}
                        className={`mt-0.5 shrink-0 ${plan.highlight ? "text-brand-gold" : "text-brand-purple"}`}
                      />
                      <span className={plan.highlight ? "text-white/70" : "text-gray-600"}>
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Land Portal note */}
          <div className="mt-8 flex items-start gap-3 rounded-xl border border-brand-gold/20 bg-brand-gold/5 px-5 py-4 mx-auto max-w-2xl">
            <Info size={16} className="mt-0.5 shrink-0 text-brand-gold" />
            <p className="text-sm text-gray-700">
              <span className="font-semibold text-gray-900">Land Portal subscription required</span>{" "}
              for sold comp data. LandIQ ingests your Land Portal exports — it does not replace your Land Portal subscription.
            </p>
          </div>

          <p className="mt-6 text-center text-sm text-gray-500">
            Need a custom plan for a fund or team?{" "}
            <Link href="/contact" className="font-semibold text-brand-purple hover:underline">
              Contact us →
            </Link>
          </p>
        </div>
      </section>

      {/* How markets work explainer */}
      <section className="section-light py-20 border-t border-gray-100">
        <div className="container-lg">
          <div className="text-center mb-12">
            <h2 className="heading-sub text-gray-900 mb-3">How Active Markets Work</h2>
            <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
              Each Active Market slot is one county you're running an acquisition campaign in.
              The full LandIQ workflow runs within each market.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", label: "Pull Comps", desc: "Export sold land comps from Land Portal for your target county." },
              { step: "02", label: "Analyze Market", desc: "LandIQ runs velocity analysis, median pricing, and acreage-band trends." },
              { step: "03", label: "Match Parcels", desc: "Upload your target parcel list. LandIQ matches each to relevant sold comps." },
              { step: "04", label: "Export Mail List", desc: "Download a priced, offer-ready CSV for your direct mail campaign." },
            ].map((s) => (
              <div key={s.step} className="rounded-xl border border-gray-100 bg-gray-50 p-5">
                <span className="text-3xl font-black text-brand-purple/20">{s.step}</span>
                <h3 className="mt-2 mb-1 text-sm font-bold text-gray-900">{s.label}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-muted py-20">
        <div className="container-lg">
          <h2 className="heading-sub text-gray-900 text-center mb-10">
            Pricing FAQs
          </h2>
          <div className="space-y-4 mx-auto max-w-2xl">
            {pricingFaqs.map((faq) => (
              <details
                key={faq.q}
                className="group rounded-xl border border-gray-100 bg-white overflow-hidden shadow-sm"
              >
                <summary className="flex cursor-pointer items-center justify-between px-6 py-4 text-sm font-semibold text-gray-900 list-none hover:text-brand-purple">
                  {faq.q}
                  <span className="ml-4 shrink-0 text-gray-400 transition-transform duration-200 group-open:rotate-45 text-lg leading-none">+</span>
                </summary>
                <div className="px-6 pb-5 pt-2">
                  <p className="text-sm text-gray-600 leading-relaxed">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-dark py-20">
        <div className="container-xl text-center">
          <h2 className="heading-sub text-white mb-4">Start Free During Beta</h2>
          <p className="text-white/50 mb-8 max-w-md mx-auto text-sm leading-relaxed">
            Join the waitlist and get full Investor Pro access at no cost while we
            finalize the platform. Spots are limited.
          </p>
          <Link href="/#waitlist" className="btn-primary px-10 py-4 text-base">
            Join the Beta Waitlist <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
