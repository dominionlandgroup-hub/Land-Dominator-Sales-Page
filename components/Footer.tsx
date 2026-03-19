import Link from "next/link";

const footerLinks = {
  Product: [
    { label: "How It Works", href: "/#how-it-works" },
    { label: "Features", href: "/#features" },
    { label: "Pricing", href: "/pricing" },
    { label: "Dashboard Preview", href: "/dashboard-preview" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "FAQ", href: "/faq" },
  ],
  "Get Access": [
    { label: "Join Beta Waitlist", href: "/#waitlist", key: "join-waitlist" },
    { label: "Request a Demo", href: "/#waitlist", key: "request-demo" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-brand-ink border-t border-white/5">
      {/* Main footer */}
      <div className="container-xl py-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-5">
          {/* Brand col */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-4 group">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-gold/10 border border-brand-gold/30">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2L14.5 9H22L16 13.5L18.5 20.5L12 16L5.5 20.5L8 13.5L2 9H9.5L12 2Z"
                    fill="#FFD700"
                    stroke="#FFD700"
                    strokeWidth="0.5"
                  />
                </svg>
              </div>
              <span className="text-lg font-black tracking-tight text-white">
                Land<span className="text-brand-gold">IQ</span>
              </span>
            </Link>
            <p className="mb-4 max-w-xs text-sm leading-relaxed text-white/50">
              The first deal intelligence platform built exclusively for vacant
              land investors, infill lot buyers, and builder lot sourcers.
            </p>
            <p className="text-xs text-white/30">
              A product by{" "}
              <span className="font-semibold text-brand-gold/70">
                We Are Land Specialists
              </span>
            </p>
            <div className="mt-6">
              <span className="rounded-full border border-brand-gold/30 bg-brand-gold/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-brand-gold">
                Beta Access Open
              </span>
            </div>
          </div>

          {/* Nav cols */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-white/40">
                {group}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/60 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="container-xl py-5">
          <div className="flex flex-col items-center justify-between gap-3 text-xs text-white/30 sm:flex-row">
            <p>© {new Date().getFullYear()} LandIQ. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <Link href="/contact" className="hover:text-white/60 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/contact" className="hover:text-white/60 transition-colors">
                Terms of Service
              </Link>
              <Link href="/contact" className="hover:text-white/60 transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
