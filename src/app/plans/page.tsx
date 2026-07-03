import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/page-header";
import { Container } from "@/components/ui/container";
import { PricingCard } from "@/components/pricing-card";
import { PlanComparison } from "@/components/sections/plan-comparison";
import { AddOns } from "@/components/sections/addons";
import { FAQ } from "@/components/sections/faq";
import { CTA } from "@/components/sections/cta";
import { plans } from "@/data/plans";

export const metadata: Metadata = {
  title: "Pricing Plans",
  description:
    "Compare Nebula Stream IPTV subscription plans — Starter, Pro, and Elite. 20,000+ live channels, 45,000+ movies, and 4K quality starting at $14.99.",
};

export default function PlansPage() {
  return (
    <>
      <PageHeader
        eyebrow="Subscription plans"
        title={
          <>
            Choose your <span className="gradient-text">streaming plan</span>
          </>
        }
        description="Transparent pricing, no hidden fees, cancel anytime. Every plan unlocks the full channel lineup and VOD library from day one."
      />

      <section className="pb-24 sm:pb-28">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {plans.map((plan, index) => (
              <PricingCard key={plan.id} plan={plan} index={index} />
            ))}
          </div>
        </Container>
      </section>

      <PlanComparison />
      <AddOns />
      <FAQ />
      <CTA />
    </>
  );
}
