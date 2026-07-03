import { plans } from "@/lib/site";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { PricingCard } from "@/components/pricing-card";
import { StaggerGroup, StaggerItem } from "@/components/ui/reveal";

export function Pricing() {
  return (
    <section id="pricing" className="relative py-24">
      <Container>
        <SectionHeading
          eyebrow="Simple pricing"
          title={
            <>
              Pick a plan, <span className="text-gradient">start streaming</span>
            </>
          }
          description="Transparent pricing with no hidden fees. The longer your plan, the more you save."
        />

        <StaggerGroup className="mt-14 grid items-stretch gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <StaggerItem key={plan.id} className="h-full">
              <PricingCard plan={plan} />
            </StaggerItem>
          ))}
        </StaggerGroup>

        <p className="mt-8 text-center text-sm text-white/45">
          All plans include a 24-hour satisfaction guarantee. Prices are placeholders
          for demonstration.
        </p>
      </Container>
    </section>
  );
}
