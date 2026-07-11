# StreamNova IPTV Landing Website

A modern, premium IPTV/e-commerce landing website built with Next.js 15, React,
Tailwind CSS and Framer Motion, tailored for the U.S. streaming market with NFL
and American sports coverage. The design uses an original dark SaaS aesthetic
with neon blue and purple accents, glassmorphism cards, sticky navigation and
mobile-first responsive layouts.

## Pages

- `/` - Home page with animated hero, live-channel slider, pricing, features,
  a movies/series/anime slider, a WhatsApp review-screenshot gallery, FAQ and CTA.
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

## Reviews section (WhatsApp screenshots)

The reviews section on the home page displays customer feedback as **images**
instead of typed quotes, so you can drop in real WhatsApp screenshots:

1. Save your screenshots into `public/reviews/` (any file name/format works).
2. Update the `reviewScreenshots` array in `lib/data.ts` so each entry's `src`
   points at your image (e.g. `/reviews/review-1.png`) — add or remove entries
   to change how many screenshots are shown.
3. The four `review-1.png`…`review-4.png` files currently in `public/reviews/`
   are placeholder mockups labeled "Replace this image" — simply overwrite
   them with your own screenshots (keeping the same file names) if you don't
   want to touch the code at all.

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

- Update brand, plans, features, reviewScreenshots, channels and
  streaming-library content in `lib/data.ts`.
- The 12-month `Premium` plan is priced at `$49.99`/year by default.
- The reviews section (`components/testimonials-section.tsx`) renders images
  from `public/reviews/` — see "Reviews section" above to add your own.
- `components/channels-slider.tsx` and `components/streaming-slider.tsx` render
  auto-scrolling marquees (built on `components/marquee.tsx`) for live channels
  and on-demand movies/series/anime.
- Replace placeholder support details before launch.
- Replace the files in `public/brand/` with your production logo if needed.
- Connect the contact form to your form API or CRM before production.