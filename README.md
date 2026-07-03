# NexStream — Premium IPTV Landing Website

A modern, premium IPTV/e-commerce landing website built with Next.js 15, React, Tailwind CSS, and Framer Motion.

## Tech Stack

- **Next.js 15** — App Router, Server Components, SEO optimized
- **React 19** — UI library
- **Tailwind CSS v4** — Utility-first styling
- **Framer Motion** — Smooth animations
- **Lucide React** — Icon library

## Features

- Dark theme with neon blue/purple accents
- Glassmorphism cards with hover effects
- Sticky navbar with mobile menu
- Animated gradient background
- Responsive mobile-first design
- WhatsApp & email checkout flow
- Contact form with support options

## Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero, pricing, features, testimonials, FAQ |
| Plans | `/products` | Full subscription cards with features |
| Checkout | `/checkout` | Order summary with WhatsApp/email payment |
| Contact | `/contact` | Contact form and support channels |

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                  # Next.js App Router pages
│   ├── page.tsx          # Home page
│   ├── products/         # Plans page
│   ├── checkout/         # Checkout page
│   └── contact/          # Contact page
├── components/
│   ├── layout/           # Navbar, Footer
│   ├── sections/         # Page sections (Hero, FAQ, etc.)
│   └── ui/               # Reusable UI components
├── lib/
│   ├── constants.ts      # Site config & contact info
│   └── data.ts           # Plans, features, testimonials, FAQ
└── types/
    └── index.ts          # TypeScript interfaces
```

## Customization

Update contact details in `src/lib/constants.ts` and plan pricing in `src/lib/data.ts`.

## Build

```bash
npm run build
npm start
```
