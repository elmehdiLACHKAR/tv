# NebulaStream — Premium IPTV / Streaming Landing Site

A modern, premium IPTV & streaming subscription landing website built with **Next.js 15**, **React 19**, **Tailwind CSS** and **Framer Motion**. Dark theme with neon blue / purple accents, glassmorphism cards, premium animations and a mobile-first, SEO-optimized, high-conversion UI.

> This is a demo project with placeholder branding, dummy content and placeholder pricing. Update contact details and copy before going live.

## Features

- **Dark, premium SaaS aesthetic** with neon blue/purple gradients and glassmorphism.
- **Framer Motion** animations: animated aurora background, scroll reveals, staggered grids, marquee, animated FAQ accordion.
- **Sticky navbar** with scroll-aware glass effect and animated active indicator.
- **Smooth scrolling**, soft shadows, large typography and rounded corners.
- **Responsive / mobile-first** across all breakpoints.
- **SEO optimized**: metadata, Open Graph, Twitter cards, `sitemap.xml`, `robots.txt`, web manifest and app icon.
- **Fast loading**: `next/font`, minimal dependencies, compression enabled.
- **Clean, reusable component structure**.

## Pages

| Route        | Description                                                                 |
| ------------ | --------------------------------------------------------------------------- |
| `/`          | Home — hero + animated background, marquee, features, how-it-works, pricing (1/3/12 months), testimonials, FAQ, CTA. |
| `/plans`     | Plans/Products — subscription cards with price, features, buy button and "Most Popular" / "Best Value" badges. |
| `/checkout`  | Checkout — plan selector + details form that generates a **WhatsApp** or **email** order. |
| `/contact`   | Contact — form (email/WhatsApp), WhatsApp button and email support.         |

## Tech stack

- [Next.js 15](https://nextjs.org/) (App Router)
- [React 19](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- TypeScript

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Scripts

- `npm run dev` — start the dev server
- `npm run build` — production build
- `npm run start` — run the production server
- `npm run lint` — lint the project

## Configuration

All site-wide settings, plans and contact details live in `src/lib/site.ts`:

```ts
export const siteConfig = {
  name: "NebulaStream",
  whatsapp: "15551234567", // digits only, international format
  email: "support@nebulastream.example.com",
  url: "https://nebulastream.example.com",
  // ...
};
```

Update `whatsapp`, `email`, `url`, and the `plans` array to match your business.
Textual content (features, testimonials, FAQ, steps) lives in `src/lib/content.ts`.

## Project structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout: fonts, metadata, navbar, footer, WhatsApp FAB
│   ├── page.tsx            # Home page (composes sections)
│   ├── globals.css         # Tailwind + base styles, glass utilities
│   ├── plans/page.tsx      # Plans / products
│   ├── checkout/page.tsx   # Checkout (Suspense wrapper)
│   ├── contact/page.tsx    # Contact
│   ├── not-found.tsx       # 404
│   ├── sitemap.ts          # SEO sitemap
│   ├── robots.ts           # SEO robots
│   ├── manifest.ts         # PWA manifest
│   └── icon.svg            # App icon / favicon
├── components/
│   ├── icons.tsx           # Inline SVG icon set
│   ├── pricing-card.tsx    # Reusable pricing card
│   ├── layout/             # navbar, footer, whatsapp-fab
│   ├── sections/           # hero, marquee, features, how-it-works, pricing, testimonials, faq, cta
│   ├── checkout/           # checkout client
│   ├── contact/            # contact form
│   └── ui/                 # button, container, section-heading, reveal, aurora-background
└── lib/
    ├── site.ts             # Site config, plans, links
    ├── content.ts          # Features, testimonials, FAQ, steps, stats
    └── utils.ts            # cn() helper
```

## License

Provided as-is for demonstration purposes.
