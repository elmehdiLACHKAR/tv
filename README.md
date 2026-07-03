# NovaStream — Premium IPTV Landing Site

A modern, high-conversion landing website for an IPTV / streaming subscription
service. Dark theme with neon blue and purple accents, glassmorphism cards and
smooth Framer Motion animations throughout.

> All branding, contact details, pricing and testimonials are dummy content —
> replace them in `lib/site.ts`, `lib/plans.ts` and `lib/content.ts` before
> going live.

## Tech stack

- [Next.js 15](https://nextjs.org/) (App Router)
- [React 19](https://react.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Framer Motion](https://motion.dev/)
- TypeScript

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Production build:

```bash
npm run build
npm start
```

## Pages

| Route       | Description                                                        |
| ----------- | ------------------------------------------------------------------ |
| `/`         | Hero, channel marquee, features, how it works, pricing, testimonials, FAQ, final CTA |
| `/plans`    | Full pricing page with popular badge and guarantees strip           |
| `/checkout` | Order flow — details form + one-click order via WhatsApp or email   |
| `/contact`  | Contact channels, contact form with WhatsApp / email delivery       |

## Project structure

```
app/
  layout.tsx          # Root layout: fonts, SEO metadata, navbar, footer, background
  page.tsx            # Home page
  globals.css         # Tailwind v4 theme tokens, glass/gradient utilities
  plans/page.tsx
  checkout/page.tsx
  contact/page.tsx
  sitemap.ts          # SEO sitemap
  robots.ts           # SEO robots rules
components/
  layout/             # Navbar (sticky, glass), Footer, floating WhatsApp button
  home/               # Hero, ChannelMarquee, Features, HowItWorks, Testimonials, Faq, FinalCta
  pricing/            # PricingCard, PricingSection (shared between home & plans)
  checkout/           # CheckoutForm (client component)
  contact/            # ContactForm (client component)
  ui/                 # Button, Icon, Reveal (scroll animation), SectionHeading, AnimatedBackground
lib/
  site.ts             # Site config: name, WhatsApp number, email, helpers
  plans.ts            # Subscription plan data
  content.ts          # Features, testimonials, FAQ, stats, channel categories
```

## Customization

1. **Contact details** — set your WhatsApp number (digits only) and support
   email in `lib/site.ts`. All WhatsApp/mailto links across the site are
   generated from these values.
2. **Pricing** — edit `lib/plans.ts`. Set `popular: true` on the plan you want
   highlighted with the "Most Popular" badge.
3. **Copy & testimonials** — edit `lib/content.ts`.
4. **Colors** — theme tokens live in the `@theme` block of `app/globals.css`.
