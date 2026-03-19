"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, Loader2, CheckCircle } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  role: string;
  phone: string;
  message: string;
}

interface WaitlistFormProps {
  variant?: "dark" | "light";
  showPhone?: boolean;
  showMessage?: boolean;
  ctaLabel?: string;
  type?: "waitlist" | "demo";
}

export default function WaitlistForm({
  variant = "dark",
  showPhone = false,
  showMessage = false,
  ctaLabel,
  type = "waitlist",
}: WaitlistFormProps) {
  const router = useRouter();
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    role: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [landPortalAgreed, setLandPortalAgreed] = useState(false);

  const roles = [
    "Land Investor / Flipper",
    "Infill Lot Buyer",
    "Builder / Developer",
    "Wholesaler",
    "Real Estate Agent / Broker",
    "Land Sourcer",
    "Other",
  ];

  const label = ctaLabel ?? (type === "demo" ? "Request a Demo" : "Join the Beta Waitlist");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setError("");
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const validate = () => {
    if (!form.name.trim()) return "Please enter your name.";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      return "Please enter a valid email address.";
    if (!form.role) return "Please select your role.";
    if (!landPortalAgreed) return "You must have or be willing to get a Land Portal account.";
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const err = validate();
    if (err) { setError(err); return; }

    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, type, submittedAt: new Date().toISOString() }),
      });

      if (res.status === 409) {
        const data = await res.json();
        setError(data.error ?? "Beta spots are full. Check back soon.");
        return;
      }

      if (!res.ok) throw new Error("Submission failed");

      router.push("/thank-you");
    } catch {
      setError("Something went wrong. Please try again or email us directly.");
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    variant === "dark" ? "input-field-dark" : "input-field";

  const labelClass =
    variant === "dark"
      ? "block mb-1.5 text-xs font-medium text-white/60"
      : "block mb-1.5 text-xs font-medium text-gray-600";

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {/* Name */}
        <div>
          <label htmlFor="name" className={labelClass}>
            Full Name <span className="text-brand-gold">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Your full name"
            className={inputClass}
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className={labelClass}>
            Email Address <span className="text-brand-gold">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@email.com"
            className={inputClass}
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      {/* Role */}
      <div>
        <label htmlFor="role" className={labelClass}>
          Your Role <span className="text-brand-gold">*</span>
        </label>
        <select
          id="role"
          name="role"
          className={inputClass}
          value={form.role}
          onChange={handleChange}
          required
        >
          <option value="">Select your role...</option>
          {roles.map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>
      </div>

      {/* Optional phone */}
      {showPhone && (
        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone Number <span className="text-white/30 text-xs">(optional)</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="(555) 000-0000"
            className={inputClass}
            value={form.phone}
            onChange={handleChange}
          />
        </div>
      )}

      {/* Optional message */}
      {showMessage && (
        <div>
          <label htmlFor="message" className={labelClass}>
            Tell us about your business{" "}
            <span className="text-white/30 text-xs">(optional)</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={3}
            placeholder="How many deals do you do per month? What markets are you in?"
            className={`${inputClass} resize-none`}
            value={form.message}
            onChange={handleChange}
          />
        </div>
      )}

      {/* Land Portal requirement */}
      <label className="flex items-start gap-3 cursor-pointer">
        <input
          type="checkbox"
          checked={landPortalAgreed}
          onChange={(e) => { setError(""); setLandPortalAgreed(e.target.checked); }}
          className="mt-0.5 h-4 w-4 shrink-0 rounded border-gray-300 accent-brand-gold"
        />
        <span className={`text-xs leading-relaxed ${variant === "dark" ? "text-white/60" : "text-gray-600"}`}>
          <span className="font-semibold">Requirement:</span> I have a Land Portal account, or I am able/willing to get one.{" "}
          <a
            href="https://www.landportal.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline opacity-70 hover:opacity-100"
          >
            Learn more
          </a>
        </span>
      </label>

      {/* Error */}
      {error && (
        <p className="flex items-center gap-1.5 text-xs font-medium text-red-400">
          <span>⚠</span> {error}
        </p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        className="btn-primary w-full py-3.5 text-sm disabled:cursor-not-allowed disabled:opacity-70"
      >
        {loading ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            Submitting...
          </>
        ) : (
          <>
            {label}
            <ArrowRight size={16} />
          </>
        )}
      </button>

      <p className={`text-center text-xs ${variant === "dark" ? "text-white/30" : "text-gray-400"}`}>
        No credit card required. Free beta access. Limited to 20 spots.
      </p>
    </form>
  );
}
