import { plans } from "@/lib/data";
import { PricingCard } from "./pricing-card";
import { SectionHeading } from "./section-heading";

export function PricingSection() {
  return (
    <section id="pricing" className="relative px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Flexible subscriptions"
          title="Choose the plan that matches your streaming life."
          description="Simple IPTV packages with premium channels, fast setup, and responsive support by WhatsApp or email."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <PricingCard key={plan.name} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
}
