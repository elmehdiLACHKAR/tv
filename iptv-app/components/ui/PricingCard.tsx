"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Check, Zap, Star } from "lucide-react";

interface PricingCardProps {
  plan: {
    name: string;
    price: number;
    period: string;
    originalPrice?: number;
    badge?: string;
    features: string[];
    cta: string;
    popular?: boolean;
    color: "blue" | "purple" | "pink";
  };
  index?: number;
}

const colorMap = {
  blue: {
    gradient: "from-cyan-500 to-blue-600",
    glow: "shadow-cyan-500/20",
    border: "border-cyan-500/30",
    badge: "bg-cyan-500/20 text-cyan-300",
    check: "text-cyan-400",
  },
  purple: {
    gradient: "from-purple-500 to-violet-600",
    glow: "shadow-purple-500/20",
    border: "border-purple-500/50",
    badge: "bg-purple-500/20 text-purple-300",
    check: "text-purple-400",
  },
  pink: {
    gradient: "from-pink-500 to-rose-600",
    glow: "shadow-pink-500/20",
    border: "border-pink-500/30",
    badge: "bg-pink-500/20 text-pink-300",
    check: "text-pink-400",
  },
};

export default function PricingCard({ plan, index = 0 }: PricingCardProps) {
  const colors = colorMap[plan.color];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className={`relative flex flex-col rounded-2xl p-6 glass transition-all duration-300 ${
        plan.popular
          ? `border ${colors.border} shadow-2xl ${colors.glow}`
          : "border border-white/10 hover:border-white/20"
      }`}
    >
      {/* Popular badge */}
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-gradient-to-r from-purple-500 to-violet-600 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg shadow-purple-500/30">
          <Star className="w-3 h-3 fill-current" />
          MOST POPULAR
        </div>
      )}

      {/* Header */}
      <div className="mb-6">
        <div className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full mb-3 ${colors.badge}`}>
          {plan.badge || plan.name}
        </div>
        <h3 className="text-xl font-bold text-white mb-1">{plan.name}</h3>
        <p className="text-gray-400 text-sm">{plan.period} subscription</p>
      </div>

      {/* Price */}
      <div className="mb-6">
        {plan.originalPrice && (
          <p className="text-gray-500 line-through text-sm mb-1">
            ${plan.originalPrice}/mo
          </p>
        )}
        <div className="flex items-end gap-1">
          <span className="text-5xl font-black text-white">${plan.price}</span>
          <span className="text-gray-400 text-sm mb-2">/mo</span>
        </div>
        {plan.originalPrice && (
          <p className={`text-xs font-semibold mt-1 ${colors.check}`}>
            Save {Math.round((1 - plan.price / plan.originalPrice) * 100)}% vs monthly
          </p>
        )}
      </div>

      {/* Features */}
      <ul className="space-y-3 mb-8 flex-1">
        {plan.features.map((feature, i) => (
          <li key={i} className="flex items-start gap-2.5">
            <div className={`mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center bg-white/5`}>
              <Check className={`w-3 h-3 ${colors.check}`} />
            </div>
            <span className="text-gray-300 text-sm">{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <Link
        href={`/checkout?plan=${encodeURIComponent(plan.name)}&price=${plan.price}`}
        className={`flex items-center justify-center gap-2 font-semibold py-3.5 px-6 rounded-xl transition-all duration-300 ${
          plan.popular
            ? `bg-gradient-to-r ${colors.gradient} text-white shadow-lg hover:shadow-2xl hover:shadow-purple-500/30 hover:-translate-y-0.5`
            : "glass border border-white/20 text-white hover:bg-white/10 hover:-translate-y-0.5"
        }`}
      >
        <Zap className="w-4 h-4" />
        {plan.cta}
      </Link>
    </motion.div>
  );
}
