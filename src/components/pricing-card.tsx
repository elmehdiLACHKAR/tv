"use client";

import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn, formatCurrency } from "@/lib/utils";
import type { Plan } from "@/data/plans";

export function PricingCard({ plan, index = 0 }: { plan: Plan; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className={cn(
        "relative flex h-full flex-col rounded-3xl p-7 sm:p-8",
        plan.popular
          ? "glow-border glass-strong shadow-[0_20px_60px_-20px_rgba(59,158,255,0.45)]"
          : "glass"
      )}
    >
      {plan.badge ? (
        <div
          className={cn(
            "absolute -top-3.5 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-white shadow-lg",
            plan.popular
              ? "bg-[linear-gradient(100deg,var(--primary-2),var(--secondary))]"
              : "bg-surface-2 border border-border text-muted"
          )}
        >
          {plan.popular ? <Sparkles className="h-3.5 w-3.5" /> : null}
          {plan.badge}
        </div>
      ) : null}

      <h3 className="font-display text-xl font-semibold text-foreground">{plan.name}</h3>
      <p className="mt-1.5 text-sm text-muted">{plan.description}</p>

      <div className="mt-6 flex items-end gap-2">
        <span className="font-display text-4xl font-bold text-foreground sm:text-5xl">
          {formatCurrency(plan.price)}
        </span>
        <span className="pb-1.5 text-sm text-muted">/ {plan.duration}</span>
      </div>
      <div className="mt-1.5 flex items-center gap-2 text-sm">
        {plan.originalPrice ? (
          <span className="text-muted line-through">
            {formatCurrency(plan.originalPrice)}
          </span>
        ) : null}
        <span className="text-primary-2">
          {formatCurrency(plan.perMonth)}/mo · {plan.connections}{" "}
          {plan.connections > 1 ? "connections" : "connection"}
        </span>
      </div>

      <ul className="mt-7 flex flex-1 flex-col gap-3.5">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-sm text-foreground/90">
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary-2">
              <Check className="h-3 w-3" strokeWidth={3} />
            </span>
            {feature}
          </li>
        ))}
      </ul>

      <Button
        href={`/checkout?plan=${plan.id}`}
        size="md"
        variant={plan.popular ? "primary" : "secondary"}
        className="mt-8 w-full justify-center"
      >
        Choose {plan.name}
      </Button>
      <Link
        href={`/checkout?plan=${plan.id}`}
        className="mt-3 text-center text-xs text-muted underline-offset-4 hover:text-foreground hover:underline"
      >
        Order via WhatsApp or Email
      </Link>
    </motion.div>
  );
}
