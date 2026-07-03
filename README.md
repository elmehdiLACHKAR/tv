# StreamNova IPTV Landing Website

A modern, premium IPTV/e-commerce landing website built with Next.js 15, React,
Tailwind CSS and Framer Motion. The design uses an original dark SaaS aesthetic
with neon blue and purple accents, glassmorphism cards, sticky navigation and
mobile-first responsive layouts.

## Pages

- `/` - Home page with animated hero, pricing, features, testimonials, FAQ and CTA.
- `/products` - Subscription plan cards with a popular badge and buy buttons.
- `/checkout` - Plan selection with WhatsApp or email order actions.
- `/contact` - Contact form mockup, WhatsApp button and email support.

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

- Update brand, plans, features, testimonials and FAQ content in `lib/data.ts`.
- Replace placeholder support details before launch.
- Replace `public/stream-placeholder.svg` with production visuals if needed.
- Connect the contact form to your form API or CRM before production.