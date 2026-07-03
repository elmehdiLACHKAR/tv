import type { Plan } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Check } from "@/components/icons";
import { Button } from "@/components/ui/button";

export function PricingCard({ plan }: { plan: Plan }) {
  return (
    <div
      className={cn(
        "group relative flex h-full flex-col rounded-3xl border p-8 transition-all duration-300 hover:-translate-y-1.5",
        plan.highlight
          ? "border-neon-purple/40 bg-gradient-to-b from-neon-purple/[0.12] to-white/[0.02] shadow-glow-purple"
          : "border-white/10 bg-white/[0.04] hover:border-white/20",
      )}
    >
      {plan.badge ? (
        <span
          className={cn(
            "absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-wide",
            plan.highlight
              ? "bg-gradient-to-r from-neon-cyan to-neon-purple text-white shadow-glow"
              : "border border-white/15 bg-surface text-white/80",
          )}
        >
          {plan.badge}
        </span>
      ) : null}

      <div className="flex items-baseline justify-between">
        <h3 className="font-display text-xl font-bold text-white">{plan.name}</h3>
        <span className="text-sm font-medium text-white/50">{plan.duration}</span>
      </div>
      <p className="mt-2 text-sm leading-relaxed text-white/55">{plan.description}</p>

      <div className="mt-6 flex items-end gap-2">
        <span className="font-display text-4xl font-bold text-white">
          ${plan.price}
        </span>
        <span className="pb-1 text-sm text-white/50">{plan.period}</span>
        {plan.oldPrice ? (
          <span className="pb-1.5 text-sm text-white/35 line-through">
            ${plan.oldPrice}
          </span>
        ) : null}
      </div>

      <ul className="mt-6 space-y-3.5">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-sm text-white/70">
            <span
              className={cn(
                "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full",
                plan.highlight ? "bg-neon-purple/20 text-neon-purple" : "bg-white/10 text-neon-cyan",
              )}
            >
              <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
            </span>
            {feature}
          </li>
        ))}
      </ul>

      <div className="mt-8 flex-1" />
      <Button
        href={`/checkout?plan=${plan.id}`}
        variant={plan.highlight ? "primary" : "secondary"}
        className="w-full"
      >
        Choose {plan.name}
      </Button>
      <p className="mt-3 text-center text-xs text-white/40">
        Instant activation · Cancel anytime
      </p>
    </div>
  );
}
