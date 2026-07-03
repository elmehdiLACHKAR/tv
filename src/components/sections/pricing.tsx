import { ArrowRight, ShieldCheck } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Container } from "@/components/ui/container";
import { PricingCard } from "@/components/pricing-card";
import { Button } from "@/components/ui/button";
import { plans } from "@/data/plans";

export function Pricing() {
  return (
    <section id="pricing" className="relative py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Simple pricing"
          title={
            <>
              Plans that fit{" "}
              <span className="gradient-text">every household</span>
            </>
          }
          description="No contracts, no hidden fees. Pick a duration, choose your favorite way to order, and start streaming today."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <PricingCard key={plan.id} plan={plan} index={index} />
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center gap-4 text-center">
          <div className="flex items-center gap-2 text-sm text-muted">
            <ShieldCheck className="h-4 w-4 text-primary-2" />
            60-day money-back guarantee on the Elite plan
          </div>
          <Button href="/plans" variant="outline">
            Compare all plan details <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </Container>
    </section>
  );
}
