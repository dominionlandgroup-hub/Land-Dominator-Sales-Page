import WaitlistForm from "@/components/WaitlistForm";
import { Mail, MessageSquare, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Contact — LandIQ",
  description:
    "Have a question about LandIQ? Request a demo, send feedback, or reach out to our team.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-bg grid-bg pt-32 pb-20">
        <div className="container-xl text-center">
          <span className="badge mb-5">Contact</span>
          <h1 className="heading-hero text-white mt-4 mb-4">
            Let's{" "}
            <span className="text-gradient-gold">Talk Land</span>
          </h1>
          <p className="mx-auto max-w-xl text-xl text-white/60">
            Questions about the platform, beta access, or pricing? We respond to
            every message from serious land investors.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-muted py-20 -mt-8">
        <div className="container-xl">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
            {/* Info sidebar */}
            <div className="space-y-6">
              <div className="card-light">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-purple/10 text-brand-purple">
                  <Mail size={20} />
                </div>
                <h3 className="mb-1 font-bold text-gray-900">Email Us</h3>
                <p className="text-sm text-gray-500 mb-3">
                  For general questions, partnership inquiries, and feedback.
                </p>
                <a
                  href="mailto:wearelandspecialist@gmail.com"
                  className="text-sm font-semibold text-brand-purple hover:underline"
                >
                  wearelandspecialist@gmail.com
                </a>
              </div>

              <div className="card-light">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-gold/10 text-brand-gold">
                  <MessageSquare size={20} />
                </div>
                <h3 className="mb-1 font-bold text-gray-900">Request a Demo</h3>
                <p className="text-sm text-gray-500 mb-3">
                  Want a walkthrough of the platform? Fill out the form and we'll
                  schedule a call.
                </p>
                <Link href="/#waitlist" className="text-sm font-semibold text-brand-purple hover:underline">
                  Book a Demo →
                </Link>
              </div>

              <div className="card-light border-brand-gold/20 bg-gradient-to-br from-brand-gold/5 to-transparent">
                <h3 className="mb-2 font-bold text-gray-900">Beta Waitlist</h3>
                <p className="text-sm text-gray-500 mb-4">
                  Not signed up yet? Join the beta waitlist for early access and
                  priority onboarding.
                </p>
                <Link href="/#waitlist" className="btn-dark text-sm w-full text-center">
                  Join the Waitlist →
                </Link>
              </div>
            </div>

            {/* Contact form */}
            <div className="lg:col-span-2">
              <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
                <WaitlistForm
                  variant="light"
                  showPhone
                  showMessage
                  type="demo"
                  ctaLabel="Send Message"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
