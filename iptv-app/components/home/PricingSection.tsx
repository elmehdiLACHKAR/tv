"use client";

import SectionHeader from "@/components/ui/SectionHeader";
import PricingCard from "@/components/ui/PricingCard";

export const plans = [
  {
    name: "Starter",
    price: 14.99,
    period: "1 month",
    badge: "Starter",
    features: [
      "20,000+ Live Channels",
      "HD & Full HD Quality",
      "1 Simultaneous Connection",
      "VOD Library Access",
      "24/7 Customer Support",
      "Instant Activation",
      "Anti-Freeze Technology",
    ],
    cta: "Get Starter",
    popular: false,
    color: "blue" as const,
  },
  {
    name: "Pro",
    price: 9.99,
    period: "3 months",
    originalPrice: 14.99,
    badge: "Best Value",
    features: [
      "20,000+ Live Channels",
      "4K Ultra HD Quality",
      "2 Simultaneous Connections",
      "Full VOD + Series Library",
      "Priority 24/7 Support",
      "Instant Activation",
      "Anti-Freeze Technology",
      "EPG Guide (7-Day)",
    ],
    cta: "Get Pro",
    popular: true,
    color: "purple" as const,
  },
  {
    name: "Ultimate",
    price: 6.99,
    period: "12 months",
    originalPrice: 14.99,
    badge: "Best Deal",
    features: [
      "20,000+ Live Channels",
      "4K + HDR Quality",
      "4 Simultaneous Connections",
      "Full VOD + Series Library",
      "VIP Priority Support",
      "Instant Activation",
      "Anti-Freeze Technology",
      "EPG Guide (14-Day)",
      "Catch-Up TV (7 Days)",
    ],
    cta: "Get Ultimate",
    popular: false,
    color: "pink" as const,
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-700/30 to-transparent" />
      <div className="glow-blob w-96 h-96 bg-cyan-500 -top-32 left-1/4 opacity-8" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <SectionHeader
            eyebrow="Pricing"
            title="Choose Your "
            highlight="Perfect Plan"
            description="Flexible plans that grow with you. No contracts, no hidden fees — cancel anytime."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <PricingCard key={plan.name} plan={plan} index={index} />
          ))}
        </div>

        {/* Money back guarantee */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 text-sm">
            🔒{" "}
            <span className="text-white font-medium">
              30-day money-back guarantee
            </span>{" "}
            — No questions asked
          </p>
        </div>
      </div>
    </section>
  );
}
