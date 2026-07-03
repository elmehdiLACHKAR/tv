export const siteConfig = {
  name: "NebulaStream",
  tagline: "Stream the universe in 4K",
  description:
    "NebulaStream is a premium IPTV & streaming subscription with 20,000+ live channels, 80,000+ movies & series, 4K/UHD quality and 99.9% uptime — on every device.",
  url: "https://nebulastream.example.com",
  // Update these with real contact details.
  whatsapp: "15551234567", // digits only, international format
  email: "support@nebulastream.example.com",
  social: {
    twitter: "https://twitter.com",
    telegram: "https://telegram.org",
    instagram: "https://instagram.com",
  },
};

export type Plan = {
  id: string;
  name: string;
  duration: string;
  price: number;
  oldPrice?: number;
  period: string;
  highlight?: boolean;
  badge?: string;
  description: string;
  features: string[];
};

export const plans: Plan[] = [
  {
    id: "1-month",
    name: "Starter",
    duration: "1 Month",
    price: 14.99,
    oldPrice: 19.99,
    period: "/month",
    description: "Perfect for trying out the full NebulaStream experience.",
    features: [
      "20,000+ live TV channels",
      "80,000+ movies & series (VOD)",
      "Full HD & 4K where available",
      "1 connected device",
      "Anti-freeze technology",
      "24/7 support",
    ],
  },
  {
    id: "3-months",
    name: "Pro",
    duration: "3 Months",
    price: 34.99,
    oldPrice: 44.99,
    period: "/quarter",
    highlight: true,
    badge: "Most Popular",
    description: "Our best-selling plan — the sweet spot of value and freedom.",
    features: [
      "Everything in Starter",
      "2 connected devices",
      "4K / UHD premium streams",
      "Sports & PPV events included",
      "EPG TV guide & catch-up",
      "Priority 24/7 support",
    ],
  },
  {
    id: "12-months",
    name: "Ultimate",
    duration: "12 Months",
    price: 89.99,
    oldPrice: 149.99,
    period: "/year",
    badge: "Best Value",
    description: "Maximum savings with an entire year of uninterrupted streaming.",
    features: [
      "Everything in Pro",
      "4 connected devices",
      "8K-ready adaptive streaming",
      "Multi-region channel packs",
      "Free setup & VPN guidance",
      "VIP concierge support",
    ],
  },
];

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/plans", label: "Plans" },
  { href: "/checkout", label: "Checkout" },
  { href: "/contact", label: "Contact" },
];

export function whatsappLink(message: string) {
  return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function mailtoLink(subject: string, body: string) {
  return `mailto:${siteConfig.email}?subject=${encodeURIComponent(
    subject,
  )}&body=${encodeURIComponent(body)}`;
}
