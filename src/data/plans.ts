export type Plan = {
  id: string;
  name: string;
  duration: string;
  months: number;
  price: number;
  originalPrice?: number;
  perMonth: number;
  popular?: boolean;
  badge?: string;
  description: string;
  features: string[];
  connections: number;
};

export const plans: Plan[] = [
  {
    id: "starter-1m",
    name: "Starter",
    duration: "1 Month",
    months: 1,
    price: 14.99,
    perMonth: 14.99,
    description: "Perfect for trying out the full experience, no commitment.",
    connections: 1,
    features: [
      "20,000+ live channels",
      "45,000+ movies & series",
      "Full HD & 4K streams",
      "Works on all devices",
      "24/7 live chat support",
      "8h anti-freeze buffer",
    ],
  },
  {
    id: "pro-3m",
    name: "Pro",
    duration: "3 Months",
    months: 3,
    price: 34.99,
    originalPrice: 44.97,
    perMonth: 11.66,
    popular: true,
    badge: "Most Popular",
    description: "Our best value plan — the choice of most subscribers.",
    connections: 2,
    features: [
      "Everything in Starter",
      "2 simultaneous connections",
      "PPV & premium sports add-ons",
      "EPG 7-day program guide",
      "Priority 24/7 support",
      "Free setup assistance",
    ],
  },
  {
    id: "elite-12m",
    name: "Elite",
    duration: "12 Months",
    months: 12,
    price: 99.99,
    originalPrice: 179.88,
    perMonth: 8.33,
    badge: "Best Savings",
    description: "Maximum savings for long-term streaming without limits.",
    connections: 4,
    features: [
      "Everything in Pro",
      "4 simultaneous connections",
      "8K & Dolby Atmos channels",
      "Dedicated account manager",
      "Free device configuration",
      "60-day money-back guarantee",
    ],
  },
];

export const addOns = [
  { name: "Extra connection", price: 3.99, unit: "/month" },
  { name: "Adult content package", price: 4.99, unit: "/month" },
  { name: "Regional sports pack", price: 5.99, unit: "/month" },
];
