import Link from "next/link";
import { CheckCircle2, ArrowRight, Star, Users, BookOpen } from "lucide-react";

export const metadata = {
  title: "You're In — LandIQ Beta Waitlist",
  description:
    "Thank you for joining the LandIQ beta waitlist. We'll be in touch shortly with your access details.",
};

const nextSteps = [
  {
    icon: Star,
    title: "Check your inbox",
    desc: "We've sent a confirmation to your email. Add hello@landiq.com to your contacts so you don't miss your access invite.",
  },
  {
    icon: BookOpen,
    title: "See how it works",
    desc: "Explore the product walkthrough to see exactly what LandIQ does and how it fits your deal process.",
    link: { label: "View Dashboard Preview →", href: "/dashboard-preview" },
  },
  {
    icon: Users,
    title: "Share with your network",
    desc: "Know another land investor who would benefit? Tell them — beta spots are limited and filling up.",
  },
];

export default function ThankYouPage() {
  return (
    <>
      <section className="hero-bg grid-bg min-h-screen flex items-center">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 30%, rgba(92,41,119,0.35) 0%, transparent 70%)",
          }}
        />

        <div className="container-xl relative z-10 py-32">
          <div className="mx-auto max-w-2xl text-center">
            {/* Success icon */}
            <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full border-2 border-brand-gold/30 bg-brand-gold/10">
              <CheckCircle2 size={40} className="text-brand-gold" />
            </div>

            {/* Badge */}
            <span className="badge mb-5">You're on the list</span>

            <h1 className="heading-section text-white mt-4 mb-5">
              Welcome to the{" "}
              <span className="text-gradient-gold">LandIQ Beta</span>
            </h1>

            <p className="text-xl text-white/60 leading-relaxed mb-10">
              You're in. We'll review your submission and send your beta access
              invite soon. You'll be among the first investors to price land with
              precision.
            </p>

            {/* What happens next */}
            <div className="rounded-2xl border border-white/10 bg-[#1e1030]/80 backdrop-blur-sm p-8 text-left mb-10">
              <p className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-6">
                What happens next
              </p>
              <div className="space-y-6">
                {nextSteps.map((step, i) => (
                  <div key={step.title} className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-gold/10 text-brand-gold">
                      <step.icon size={18} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] font-bold text-white/30 uppercase tracking-widest">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <h3 className="text-sm font-bold text-white">{step.title}</h3>
                      </div>
                      <p className="text-sm text-white/50 leading-relaxed">{step.desc}</p>
                      {step.link && (
                        <Link
                          href={step.link.href}
                          className="mt-2 inline-block text-xs font-semibold text-brand-gold hover:underline"
                        >
                          {step.link.label}
                        </Link>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link href="/" className="btn-primary px-8 py-3">
                Back to Home <ArrowRight size={16} />
              </Link>
              <Link href="/dashboard-preview" className="btn-secondary px-8 py-3">
                See the Dashboard →
              </Link>
            </div>

            <p className="mt-8 text-sm text-white/30">
              Questions?{" "}
              <Link href="/contact" className="text-brand-gold/70 hover:text-brand-gold underline">
                Reach out anytime
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
