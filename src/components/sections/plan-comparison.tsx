import { Check, Minus } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { plans } from "@/data/plans";

const rows = [
  { label: "Live TV channels", values: ["20,000+", "20,000+", "20,000+"] },
  { label: "VOD movies & series", values: ["45,000+", "45,000+", "45,000+"] },
  { label: "Simultaneous connections", values: ["1", "2", "4"] },
  { label: "Max video quality", values: ["Full HD", "4K", "8K + Dolby Atmos"] },
  { label: "7-day EPG & catch-up", values: [true, true, true] },
  { label: "PPV & premium sports", values: [false, true, true] },
  { label: "Dedicated account manager", values: [false, false, true] },
  { label: "Money-back guarantee", values: [false, false, true] },
];

export function PlanComparison() {
  return (
    <section className="relative py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Compare plans"
          title="Find the perfect fit, side by side"
          description="Every plan includes our full channel and VOD catalog. Longer plans unlock more connections and premium perks."
        />

        <div className="mt-14 overflow-x-auto">
          <div className="min-w-[640px] rounded-3xl border border-border bg-surface/60">
            <div className="grid grid-cols-4 border-b border-border">
              <div className="p-5" />
              {plans.map((plan) => (
                <div
                  key={plan.id}
                  className="flex flex-col items-center gap-1 p-5 text-center"
                >
                  <span className="font-display text-base font-semibold text-foreground">
                    {plan.name}
                  </span>
                  <span className="text-xs text-muted">{plan.duration}</span>
                </div>
              ))}
            </div>

            {rows.map((row, i) => (
              <div
                key={row.label}
                className={
                  i % 2 === 0
                    ? "grid grid-cols-4 bg-white/[0.015]"
                    : "grid grid-cols-4"
                }
              >
                <div className="p-5 text-sm font-medium text-foreground/90">{row.label}</div>
                {row.values.map((value, idx) => (
                  <div key={idx} className="flex items-center justify-center p-5 text-sm">
                    {typeof value === "boolean" ? (
                      value ? (
                        <Check className="h-4 w-4 text-primary-2" />
                      ) : (
                        <Minus className="h-4 w-4 text-muted/50" />
                      )
                    ) : (
                      <span className="text-foreground/85">{value}</span>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
