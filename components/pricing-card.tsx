"use client";

import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import Link from "next/link";

type PricingCardProps = {
  plan: {
    name: string;
    period: string;
    price: string;
    description: string;
    features: string[];
    cta: string;
    popular: boolean;
  };
};

export function PricingCard({ plan }: PricingCardProps) {
  return (
    <motion.article
      whileHover={{ y: -10, scale: 1.015 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      className={`glass-card relative flex h-full flex-col rounded-[2rem] p-6 ${
        plan.popular ? "neon-ring" : ""
      }`}
    >
      {plan.popular && (
        <div className="absolute right-5 top-5 inline-flex items-center gap-1 rounded-full bg-cyan-300 px-3 py-1 text-xs font-black text-slate-950">
          <Sparkles size={14} />
          Popular
        </div>
      )}
      <div className="mb-8">
        <p className="text-sm font-bold uppercase tracking-[0.24em] text-cyan-200">
          {plan.period}
        </p>
        <h3 className="mt-4 font-[var(--font-jakarta)] text-2xl font-black text-white">
          {plan.name}
        </h3>
        <p className="mt-3 min-h-14 text-sm leading-6 text-slate-400">{plan.description}</p>
      </div>

      <div className="mb-7 flex items-end gap-2">
        <span className="font-[var(--font-jakarta)] text-5xl font-black tracking-tight text-white">
          {plan.price}
        </span>
        <span className="pb-2 text-sm text-slate-400">/{plan.period}</span>
      </div>

      <ul className="mb-8 grid gap-3">
        {plan.features.map((feature) => (
          <li key={feature} className="flex gap-3 text-sm text-slate-300">
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan-300/15 text-cyan-200">
              <Check size={14} />
            </span>
            {feature}
          </li>
        ))}
      </ul>

      <Link
        href={`/checkout?plan=${encodeURIComponent(plan.name)}`}
        className={`mt-auto inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-black transition ${
          plan.popular
            ? "bg-gradient-to-r from-cyan-300 to-violet-500 text-slate-950 shadow-[0_0_30px_rgba(38,217,255,0.3)] hover:scale-105"
            : "border border-white/15 text-white hover:border-cyan-200/50 hover:bg-white/10"
        }`}
      >
        {plan.cta}
      </Link>
    </motion.article>
  );
}
