# Nebula Stream — Premium IPTV Landing Site

A modern, premium IPTV/streaming marketing site built with Next.js 15, React 19,
Tailwind CSS v4, and Framer Motion. Dark theme with neon blue/purple accents,
glassmorphism cards, and scroll-triggered animations throughout.

> This is an original design created for demo/portfolio purposes. All brand
> names, pricing, testimonials, and contact details are dummy content.

## Tech Stack

- **Framework:** Next.js 15 (App Router, TypeScript)
- **UI:** React 19, Tailwind CSS v4
- **Animation:** Framer Motion
- **Icons:** lucide-react
- **Utilities:** clsx + tailwind-merge

## Pages

| Route         | Description                                                                 |
| ------------- | ---------------------------------------------------------------------------- |
| `/`           | Home — hero, animated background, device strip, features, pricing preview, testimonials, FAQ, CTA |
| `/plans`      | Full plan lineup, feature comparison table, add-ons, FAQ, CTA               |
| `/checkout`   | Plan selector + contact form; completes the order via **WhatsApp or Email** (no payment gateway) |
| `/contact`    | Contact form, WhatsApp/Email/Telegram cards, FAQ                            |

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Other scripts

```bash
npm run build   # production build
npm run start   # run the production build
npm run lint    # eslint
```

## Project Structure

```
src/
  app/                    # Routes (App Router)
    page.tsx              # Home
    plans/page.tsx        # Plans/Products page
    checkout/page.tsx     # Checkout (WhatsApp/Email order flow)
    contact/page.tsx      # Contact page
    layout.tsx            # Root layout (fonts, Navbar, Footer, WhatsApp button)
    globals.css           # Theme tokens, glassmorphism + animation utilities
    sitemap.ts / robots.ts
  components/
    ui/                   # Reusable primitives (Button, GlassCard, Badge, Container, SectionHeading)
    layout/               # Navbar, Footer
    sections/             # Page sections (Hero, Features, Pricing, Testimonials, FAQ, CTA, ...)
    pricing-card.tsx       # Shared pricing card used on Home + Plans
    checkout-form.tsx      # Plan selector + WhatsApp/Email order form
    contact-form.tsx       # Contact form (mailto submission)
    animated-background.tsx, animated-section.tsx
  data/                   # Dummy content: plans, features, testimonials, faqs
  lib/
    site-config.ts        # Brand info, WhatsApp/mailto link builders
    utils.ts               # cn() helper, currency formatter
```

## Customization

- **Brand & contact info:** edit `src/lib/site-config.ts` (name, tagline, WhatsApp number, email, socials).
- **Pricing plans:** edit `src/data/plans.ts`.
- **Theme colors:** edit the CSS variables in `src/app/globals.css` (`--primary`, `--secondary`, etc).
- **Content:** features, testimonials, and FAQs live in `src/data/`.

## Notes

- No real payment integration — the checkout flow collects plan + contact details and hands off to **WhatsApp (`wa.me`)** or a **`mailto:`** link, matching a lead-gen/manual-fulfillment IPTV sales flow.
- All avatars/logos are CSS/gradient placeholders (no external image dependencies), keeping the site fast and self-contained.
