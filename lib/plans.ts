export type Plan = {
  id: string;
  name: string;
  duration: string;
  price: number;
  originalPrice?: number;
  perMonth: string;
  popular?: boolean;
  badge?: string;
  features: string[];
};

export const plans: Plan[] = [
  {
    id: "1-month",
    name: "Starter",
    duration: "1 Month",
    price: 12.99,
    perMonth: "$12.99 / mo",
    features: [
      "20,000+ live channels",
      "80,000+ movies & series (VOD)",
      "4K / FHD / HD quality",
      "1 device connection",
      "Anti-freeze technology",
      "Instant activation",
      "24/7 customer support",
    ],
  },
  {
    id: "3-months",
    name: "Plus",
    duration: "3 Months",
    price: 29.99,
    originalPrice: 38.97,
    perMonth: "$9.99 / mo",
    badge: "Save 23%",
    features: [
      "Everything in Starter",
      "2 device connections",
      "Full EPG TV guide",
      "Catch-up & replay TV",
      "PPV events included",
      "Free updates during period",
      "Priority support",
    ],
  },
  {
    id: "12-months",
    name: "Ultimate",
    duration: "12 Months",
    price: 69.99,
    originalPrice: 155.88,
    perMonth: "$5.83 / mo",
    popular: true,
    badge: "Best value — save 55%",
    features: [
      "Everything in Plus",
      "3 device connections",
      "Premium sports packages",
      "Adult content (optional)",
      "Free future channel additions",
      "VIP 24/7 priority support",
      "7-day money-back guarantee",
    ],
  },
];

export function getPlan(id: string | undefined | null): Plan | undefined {
  return plans.find((p) => p.id === id);
}
