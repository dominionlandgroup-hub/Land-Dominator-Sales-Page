import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";

export const metadata = {
  title: "FAQ — LandIQ",
  description:
    "Answers to the most common questions about LandIQ — how the workflow works, what Land Portal data it uses, and how to get access.",
};

const categories = [
  {
    title: "Data & Coverage",
    faqs: [
      {
        q: "Where does LandIQ's data come from?",
        a: "LandIQ has no data of its own. You export sold vacant land comp data from Land Portal for your target county and upload the CSV to LandIQ. The platform processes your export — filtering out residential sales, calculating $/acre, building acreage band groups, and running market analysis on what you uploaded. LandIQ is an analysis engine, not a data provider.",
      },
      {
        q: "Does LandIQ replace Land Portal?",
        a: "No. LandIQ is a Land Portal companion, not a replacement. You still need an active Land Portal subscription to pull the sold comp exports and target parcel lists that feed LandIQ's analysis engine. LandIQ processes and analyzes that data — it does not source it independently.",
      },
      {
        q: "Does LandIQ provide parcel data or owner records?",
        a: "No. LandIQ does not provide parcel data, owner names, or property search capabilities. You upload your own target parcel list (exported from Land Portal) and LandIQ prices each parcel using the comp data you uploaded. Think of it as a pricing and mailing list engine — not a data source.",
      },
      {
        q: "How current is the data?",
        a: "You control the freshness. Most investors analyze the last 12 months of sold comps when evaluating a market. You pull your comp window from Land Portal and upload it to LandIQ. If you want to refresh a market analysis with more recent comps, just re-upload an updated export.",
      },
      {
        q: "Which states and markets are supported?",
        a: "LandIQ can work in any U.S. market where you have sold land comp data from Land Portal. Coverage is not limited by LandIQ's own data feeds — if Land Portal has comp data for a county, you can analyze it in LandIQ.",
      },
    ],
  },
  {
    title: "The LandIQ Workflow",
    faqs: [
      {
        q: "What is the full LandIQ workflow?",
        a: "The workflow is: (1) Pull sold vacant land comps from Land Portal for your target county. (2) Upload the comp export to LandIQ. (3) LandIQ analyzes the market — velocity, median pricing, and acreage-band trends. (4) Pull a target parcel list from Land Portal and upload it. (5) LandIQ matches each target parcel to the most relevant sold comps using acreage band and location. (6) The pricing engine calculates estimated retail values using median comp prices within each acreage band. (7) LandIQ generates 40%, 50%, and 60% offer tiers for every parcel. (8) Export a mailing list with calculated offers — ready for your direct mail campaign.",
      },
      {
        q: "What is Target-to-Comp Matching?",
        a: "Target-to-Comp Matching is LandIQ's automated process for pairing each parcel on your target list to the most relevant sold comps. It uses acreage band logic and location proximity — the same logic an experienced investor applies manually, done automatically across your entire list. This is what allows bulk pricing of hundreds of parcels at once.",
      },
      {
        q: "What is acreage band pricing?",
        a: "Price-per-acre changes dramatically depending on parcel size. A 0.5-acre lot prices completely differently from a 50-acre rural parcel — even in the same county. LandIQ's acreage band logic groups comps and target parcels into size tiers (e.g. 1–5 acres, 5–20 acres, 20–50 acres) and prices each parcel using only the comps within the same band. This produces much more accurate estimates than averaging across all sizes.",
      },
      {
        q: "What does LandIQ NOT do?",
        a: "LandIQ is not a data provider, property search tool, or reporting platform. It does not source comp data, provide parcel records, replace Land Portal, or produce licensed appraisals. It does not give you owner lists or contact information. LandIQ's job is to take the Land Portal data you already pull and turn it into a priced, mail-ready list as fast as possible.",
      },
    ],
  },
  {
    title: "Land Analysis",
    faqs: [
      {
        q: "Does LandIQ work for infill lots?",
        a: "Yes. The platform supports infill lots, subdivision parcels, and rural acreage. Investor Pro and Team plans include Builder Lot Pricing Mode, which estimates what a local builder would pay for an infill or near-infill parcel based on local builder activity and finished lot demand.",
      },
      {
        q: "Does it work for rural or large-acreage land?",
        a: "Yes. The acreage band pricing logic is designed specifically for how price-per-acre shifts at different size thresholds — from sub-1-acre infill to 500+ acre rural parcels. Bands adjust automatically based on the comp data you upload.",
      },
      {
        q: "How does the offer calculator work?",
        a: "After LandIQ estimates the retail market value based on comps and acreage band pricing, the offer calculator automatically generates three tiers: 40% (conservative), 50% (moderate), and 60% (aggressive). These are applied across every parcel in your target list in bulk — not one at a time.",
      },
      {
        q: "Does LandIQ replace a licensed appraisal?",
        a: "No. LandIQ is an investor deal intelligence and acquisition tool — not a licensed appraisal. It is designed for investors to quickly evaluate markets, match target parcels to comps, and generate direct mail campaigns. For lending, legal, or estate purposes, always engage a licensed appraiser.",
      },
    ],
  },
  {
    title: "Mailing List & Campaigns",
    faqs: [
      {
        q: "How does the mailing list export work?",
        a: "After LandIQ prices your target parcel list, you export a clean CSV that includes each parcel with its matched comps, estimated retail value, and calculated offer tiers. The CSV is formatted for direct mail houses — you can send it to your mailer the same day you finish your market pull.",
      },
      {
        q: "Can I use the export with any direct mail service?",
        a: "Yes. The mailing list export is a standard CSV file. You can use it with any direct mail provider, mail house, or fulfillment service you already work with.",
      },
    ],
  },
  {
    title: "Access & Billing",
    faqs: [
      {
        q: "How do I get access during the beta?",
        a: "Join the beta waitlist on the homepage. We review submissions and send access invitations on a rolling basis. Priority is given to active land investors who are already running acquisition campaigns.",
      },
      {
        q: "Is it really free during beta?",
        a: "Yes. No credit card is required during the beta period. All beta users receive full Investor Pro feature access at no charge. You'll be notified in advance of any pricing changes before commercial launch.",
      },
      {
        q: "What happens after the beta ends?",
        a: "Beta users keep their access. Pricing plans will activate after the commercial launch. Early users will receive advance notice and may be eligible for discounted pricing or priority access to new features. You will not be billed without explicit confirmation.",
      },
      {
        q: "Do I need a Land Portal subscription to use LandIQ?",
        a: "Yes. LandIQ works with sold comp exports from Land Portal. You need an active Land Portal subscription to pull the comp data and target parcel lists that feed LandIQ's analysis engine. Land Portal and LandIQ are separate products. If you don't yet have Land Portal access, visit the homepage for a link to get started.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-bg grid-bg pt-28 pb-20">
        <div className="container-xl text-center">
          <span className="badge mb-5">FAQ</span>
          <h1 className="heading-hero text-white mt-4 mb-4">
            Frequently Asked{" "}
            <span className="text-gradient-gold">Questions</span>
          </h1>
          <p className="mx-auto max-w-xl text-xl text-white/60 leading-relaxed">
            Everything you need to know about LandIQ — how the workflow operates,
            what data it uses, and how to get started.
          </p>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="section-muted py-20 -mt-8">
        <div className="container-lg">
          <div className="space-y-12">
            {categories.map((cat) => (
              <div key={cat.title}>
                <h2 className="mb-5 text-xl font-black text-gray-900 flex items-center gap-2">
                  <span className="inline-block h-1 w-6 rounded bg-brand-purple" />
                  {cat.title}
                </h2>
                <div className="space-y-3">
                  {cat.faqs.map((faq) => (
                    <details
                      key={faq.q}
                      className="group rounded-xl border border-gray-100 bg-white shadow-sm overflow-hidden"
                    >
                      <summary className="flex cursor-pointer items-center justify-between px-6 py-4 text-sm font-semibold text-gray-900 list-none hover:text-brand-purple">
                        {faq.q}
                        <ChevronDown
                          size={16}
                          className="shrink-0 text-gray-400 transition-transform duration-200 group-open:rotate-180"
                        />
                      </summary>
                      <div className="px-6 pb-5 pt-1">
                        <p className="text-sm leading-relaxed text-gray-600">{faq.a}</p>
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Still have questions */}
          <div className="mt-16 rounded-2xl border border-brand-purple/20 bg-gradient-to-br from-brand-purple/5 to-transparent p-8 text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Still have questions?
            </h3>
            <p className="text-gray-500 mb-6 max-w-md mx-auto text-sm">
              We respond to every message from serious land investors. Reach out
              and we'll get back to you promptly.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link href="/contact" className="btn-dark">
                Contact Us →
              </Link>
              <Link href="/#waitlist" className="btn-secondary border-brand-purple text-brand-purple">
                Join Beta Waitlist
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
