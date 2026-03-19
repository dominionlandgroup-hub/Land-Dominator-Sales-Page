"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
  { label: "Product", href: "/dashboard-preview" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-white/5 bg-brand-ink/95 backdrop-blur-xl shadow-xl shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="container-xl">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-gold/10 border border-brand-gold/30 transition group-hover:bg-brand-gold/20">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2L14.5 9H22L16 13.5L18.5 20.5L12 16L5.5 20.5L8 13.5L2 9H9.5L12 2Z"
                  fill="#A07520"
                  stroke="#A07520"
                  strokeWidth="0.5"
                />
              </svg>
            </div>
            <span className="text-lg font-black tracking-tight text-white">
              Land<span className="text-brand-gold">IQ</span>
            </span>
            <span className="hidden sm:inline-block rounded-full border border-brand-gold/30 bg-brand-gold/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-brand-gold">
              Beta
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="nav-link rounded-lg px-3 py-2"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-3 md:flex">
            <Link href="/#waitlist" className="btn-secondary px-4 py-2 text-xs">
              Join Waitlist
            </Link>
            <Link href="/#waitlist" className="btn-primary px-4 py-2 text-xs">
              Request Demo →
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-white/70 hover:bg-white/10 md:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-white/10 bg-brand-ink/98 backdrop-blur-xl md:hidden">
          <div className="container-xl py-4">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-4 py-3 text-sm font-medium text-white/70 hover:bg-white/5 hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-4 flex flex-col gap-2 border-t border-white/10 pt-4">
                <Link
                  href="/#waitlist"
                  onClick={() => setOpen(false)}
                  className="btn-secondary w-full text-center"
                >
                  Join Waitlist
                </Link>
                <Link
                  href="/#waitlist"
                  onClick={() => setOpen(false)}
                  className="btn-primary w-full text-center"
                >
                  Request Demo →
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
