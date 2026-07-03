"use client";

import GlassCard from "./GlassCard";
import Badge from "./Badge";
import Button from "./Button";
import { Check } from "lucide-react";
import type { Plan } from "@/types";

interface PricingCardProps {
  plan: Plan;
  delay?: number;
  showFullFeatures?: boolean;
}

export default function PricingCard({
  plan,
  delay = 0,
  showFullFeatures = false,
}: PricingCardProps) {
  const features = showFullFeatures
    ? plan.features
    : plan.features.slice(0, 5);

  return (
    <GlassCard
      delay={delay}
      glow={plan.popular ? "purple" : "blue"}
      className={`relative flex flex-col h-full ${
        plan.popular ? "gradient-border glow-purple scale-[1.02] md:scale-105" : ""
      }`}
    >
      {plan.popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <Badge variant="popular">Most Popular</Badge>
        </div>
      )}

      <div className="mb-6">
        <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
        <p className="text-muted text-sm">{plan.duration}</p>
      </div>

      <div className="mb-6">
        <div className="flex items-baseline gap-2">
          <span className="text-4xl md:text-5xl font-bold gradient-text">
            ${plan.price}
          </span>
          {plan.originalPrice && (
            <span className="text-muted line-through text-lg">
              ${plan.originalPrice}
            </span>
          )}
        </div>
        <p className="text-muted text-sm mt-2">
          ${(plan.price / plan.months).toFixed(2)}/month
        </p>
      </div>

      <p className="text-muted text-sm mb-6 leading-relaxed">{plan.description}</p>

      <ul className="space-y-3 mb-8 flex-1">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-sm">
            <Check size={16} className="text-neon-blue shrink-0 mt-0.5" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <Button
        href={`/checkout?plan=${plan.id}`}
        variant={plan.popular ? "primary" : "secondary"}
        className="w-full"
      >
        Get Started
      </Button>
    </GlassCard>
  );
}
