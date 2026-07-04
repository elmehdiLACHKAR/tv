# StreamNova IPTV Landing Website

A modern, premium IPTV/e-commerce landing website built with Next.js 15, React,
Tailwind CSS and Framer Motion, tailored for the U.S. streaming market with NFL
and American sports coverage. The design uses an original dark SaaS aesthetic
with neon blue and purple accents, glassmorphism cards, sticky navigation and
mobile-first responsive layouts.

## Pages

- `/` - Home page with animated hero, live-channel slider, pricing, features,
  a movies/series/anime slider, WhatsApp-style reviews, FAQ and CTA.
- `/products` - Subscription plan cards with a popular badge and buy buttons.
- `/checkout` - Plan selection with WhatsApp or email order actions.
- `/contact` - Contact form mockup, WhatsApp button and email support.

## Brand assets

- `public/brand/streamnova-icon.png` - square app-icon-style logo mark used in
  the navbar, footer and site favicon/apple-icon.
- `public/brand/streamnova-logo.png` - full logo with wordmark, available for
  larger placements (e.g. print, social, email signatures).
- Both marks are original AI-generated designs (signal/play-button + star
  motif) and are not copies of any third-party brand.

## Tech stack

- Next.js 15 App Router
- React 19
- Tailwind CSS 4
- Framer Motion
- Lucide React icons
- TypeScript

## Getting started

```bash
npm install
npm run dev
```

Open `http://localhost:3000` to view the site.

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Customization

- Update brand, plans, features, testimonials, channels and streaming-library
  content in `lib/data.ts`.
- The 12-month `Premium` plan is priced at `$49.99`/year by default.
- Testimonials are styled as WhatsApp chat bubbles (`components/testimonials-section.tsx`);
  replace with real customer screenshots or feedback before launch.
- `components/channels-slider.tsx` and `components/streaming-slider.tsx` render
  auto-scrolling marquees (built on `components/marquee.tsx`) for live channels
  and on-demand movies/series/anime.
- Replace placeholder support details before launch.
- Replace the files in `public/brand/` with your production logo if needed.
- Connect the contact form to your form API or CRM before production.