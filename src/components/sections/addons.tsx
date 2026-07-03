import { PlusCircle } from "lucide-react";
import { Container } from "@/components/ui/container";
import { addOns } from "@/data/plans";
import { formatCurrency } from "@/lib/utils";

export function AddOns() {
  return (
    <section className="pb-24 sm:pb-32">
      <Container>
        <div className="rounded-3xl border border-border bg-surface/60 p-8 sm:p-10">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h3 className="font-display text-2xl font-semibold text-foreground">
                Optional add-ons
              </h3>
              <p className="mt-1.5 text-sm text-muted">
                Customize any plan with extras — mention them when you place your order.
              </p>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {addOns.map((addon) => (
              <div
                key={addon.name}
                className="flex items-center justify-between gap-3 rounded-2xl border border-border bg-white/[0.03] p-5"
              >
                <div className="flex items-center gap-3">
                  <PlusCircle className="h-5 w-5 text-primary-2" />
                  <span className="text-sm font-medium text-foreground">{addon.name}</span>
                </div>
                <span className="whitespace-nowrap text-sm font-semibold text-primary-2">
                  +{formatCurrency(addon.price)}
                  {addon.unit}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
