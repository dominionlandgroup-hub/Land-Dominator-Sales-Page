# LandIQ Marketing Site — Setup Guide

## Quick Start (2 steps)

### Step 1 — Install Node.js
If you don't have Node installed, grab it from:
https://nodejs.org/en/download  (choose the LTS version)

Or with Homebrew:
```bash
brew install node
```

### Step 2 — Install & Run

```bash
cd /Users/sold/Desktop/landiq
npm install
npm run dev
```

Then open: http://localhost:3000

---

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home / Landing page (all sections) |
| `/about` | About page |
| `/pricing` | Pricing page |
| `/contact` | Contact page |
| `/faq` | FAQ page |
| `/dashboard-preview` | Product walkthrough |
| `/thank-you` | Post-form submission |
| `POST /api/waitlist` | Lead capture API |

---

## Connecting Email

1. Copy `.env.local.example` → `.env.local`
2. Pick your email provider and uncomment the relevant block
3. Uncomment the matching send code in `app/api/waitlist/route.ts`

Recommended: **Resend** (https://resend.com) — free tier, easy setup, great DX.

---

## Viewing Leads

All leads are saved to `leads.json` in the project root.

To fetch via API (protected):
```bash
curl -H "x-admin-key: YOUR_ADMIN_SECRET" http://localhost:3000/api/waitlist
```

Set `ADMIN_SECRET` in `.env.local`.

---

## Deployment

### Vercel (easiest — free tier)
```bash
npm install -g vercel
vercel
```

### Other platforms
This is a standard Next.js 14 app — works on Railway, Render, Netlify, AWS Amplify, etc.

---

## Customization Checklist

- [ ] Replace `hello@landiq.com` with your real email in `components/Footer.tsx`
- [ ] Update product name if different from "LandIQ" (find/replace across files)
- [ ] Add your real logo SVG to `public/` and update `Navbar.tsx` and `Footer.tsx`
- [ ] Connect email provider in `app/api/waitlist/route.ts`
- [ ] Set `ADMIN_SECRET` in `.env.local`
- [ ] Add Google Analytics or Plausible tracking in `app/layout.tsx`

---

## Brand Colors

| Color | Hex |
|-------|-----|
| Brand Purple | `#5C2977` |
| Brand Gold | `#D5A940` |
| Dark Ink | `#0a0510` |

Defined in `tailwind.config.ts` under `theme.extend.colors.brand`.
