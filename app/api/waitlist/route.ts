import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

interface Lead {
  id: string;
  name: string;
  email: string;
  role: string;
  phone?: string;
  message?: string;
  type: "waitlist" | "demo";
  submittedAt: string;
  ip?: string;
}

// Store leads in a local JSON file — swap for DB / email API (Resend, Mailchimp, etc.) later
const LEADS_FILE = path.join(process.cwd(), "leads.json");

function readLeads(): Lead[] {
  try {
    if (!fs.existsSync(LEADS_FILE)) return [];
    const raw = fs.readFileSync(LEADS_FILE, "utf-8");
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

function writeLeads(leads: Lead[]): void {
  fs.writeFileSync(LEADS_FILE, JSON.stringify(leads, null, 2), "utf-8");
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const { name, email, role, phone, message, type, submittedAt } = body;

    // Basic server-side validation
    if (!name || !email || !role) {
      return NextResponse.json(
        { error: "Name, email, and role are required." },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 }
      );
    }

    const lead: Lead = {
      id: crypto.randomUUID(),
      name: name.trim(),
      email: email.trim().toLowerCase(),
      role,
      phone: phone?.trim() || undefined,
      message: message?.trim() || undefined,
      type: type === "demo" ? "demo" : "waitlist",
      submittedAt: submittedAt || new Date().toISOString(),
      ip: req.headers.get("x-forwarded-for") ?? undefined,
    };

    // Read existing, check for duplicate email
    const leads = readLeads();
    const duplicate = leads.find(
      (l) => l.email === lead.email && l.type === lead.type
    );

    if (!duplicate) {
      leads.push(lead);
      writeLeads(leads);
    }

    // Log to console for easy monitoring during beta
    console.log(
      `[LandIQ] New ${lead.type} submission — ${lead.name} <${lead.email}> (${lead.role})`
    );

    /*
     * ─── CONNECT YOUR EMAIL PROVIDER HERE ────────────────────────────────────
     *
     * Example with Resend (https://resend.com):
     *
     * import { Resend } from "resend";
     * const resend = new Resend(process.env.RESEND_API_KEY);
     * await resend.emails.send({
     *   from: "LandIQ <noreply@yourdomain.com>",
     *   to: lead.email,
     *   subject: "You're on the LandIQ beta waitlist!",
     *   html: `<p>Hi ${lead.name}, thanks for joining!</p>`,
     * });
     *
     * Example with Mailchimp / ConvertKit / ActiveCampaign — same pattern.
     * ─────────────────────────────────────────────────────────────────────────
     */

    return NextResponse.json({ success: true, duplicate: !!duplicate });
  } catch (err) {
    console.error("[LandIQ] Waitlist error:", err);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}

// Return all leads (protect this in production with an API key!)
export async function GET(req: NextRequest) {
  const key = req.headers.get("x-admin-key");
  if (key !== process.env.ADMIN_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const leads = readLeads();
  return NextResponse.json({ total: leads.length, leads });
}
