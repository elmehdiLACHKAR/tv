import PricingCard from "@/components/pricing/PricingCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { plans } from "@/lib/plans";

export default function PricingSection() {
  return (
    <section id="pricing" className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
      <SectionHeading
        eyebrow="Pricing"
        title={
          <>
            One subscription, <span className="text-gradient">everything included</span>
          </>
        }
        subtitle="No hidden fees, no equipment to buy. Pick a duration, order in one message, and start streaming within minutes."
      />
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-6 xl:gap-8">
        {plans.map((plan, index) => (
          <PricingCard key={plan.id} plan={plan} index={index} />
        ))}
      </div>
    </section>
  );
}
