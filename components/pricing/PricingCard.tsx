"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import type { Plan } from "@/lib/plans";

type PricingCardProps = {
  plan: Plan;
  index?: number;
};

export default function PricingCard({ plan, index = 0 }: PricingCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.21, 0.65, 0.36, 1] }}
      whileHover={{ y: -8 }}
      className={`glass relative flex flex-col rounded-3xl p-8 shadow-card transition-colors duration-300 ${
        plan.popular
          ? "border-neon-400/60 shadow-glow-blue lg:scale-[1.04]"
          : "hover:border-white/20"
      }`}
    >
      {plan.popular && (
        <span className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-gradient-to-r from-neon-500 to-violet-500 px-5 py-1.5 text-xs font-bold uppercase tracking-widest text-white shadow-glow-violet">
          Most Popular
        </span>
      )}

      <div className="mb-6">
        <h3 className="font-display text-lg font-semibold text-white">{plan.name}</h3>
        <p className="mt-1 text-sm text-slate-400">{plan.duration} subscription</p>
      </div>

      <div className="mb-2 flex items-end gap-2">
        <span className="font-display text-5xl font-bold tracking-tight text-white">
          ${plan.price}
        </span>
        {plan.originalPrice && (
          <span className="mb-1.5 text-lg text-slate-500 line-through">
            ${plan.originalPrice}
          </span>
        )}
      </div>
      <p className="mb-1 text-sm font-medium text-neon-300">{plan.perMonth}</p>
      {plan.badge && (
        <span className="mt-2 w-fit rounded-full bg-violet-500/15 px-3 py-1 text-xs font-semibold text-violet-300">
          {plan.badge}
        </span>
      )}

      <ul className="my-8 flex-1 space-y-3.5">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-sm text-slate-300">
            <span
              className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                plan.popular ? "bg-neon-500/20 text-neon-300" : "bg-white/5 text-slate-400"
              }`}
            >
              <Icon name="check" className="h-3 w-3" />
            </span>
            {feature}
          </li>
        ))}
      </ul>

      <Button
        href={`/checkout?plan=${plan.id}`}
        variant={plan.popular ? "primary" : "secondary"}
        size="lg"
        className="w-full"
      >
        Get {plan.duration}
        <Icon name="arrowRight" className="h-4 w-4" />
      </Button>

      <p className="mt-4 text-center text-xs text-slate-500">
        Instant activation · Secure order via WhatsApp or email
      </p>
    </motion.article>
  );
}
