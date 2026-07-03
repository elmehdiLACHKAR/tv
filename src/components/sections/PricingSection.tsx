import SectionHeading from "@/components/ui/SectionHeading";
import PricingCard from "@/components/ui/PricingCard";
import { plans } from "@/lib/data";

interface PricingSectionProps {
  showHeading?: boolean;
  showFullFeatures?: boolean;
}

export default function PricingSection({
  showHeading = true,
  showFullFeatures = false,
}: PricingSectionProps) {
  return (
    <section id="pricing" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {showHeading && (
          <SectionHeading
            eyebrow="Pricing"
            title="Choose Your Perfect Plan"
            subtitle="Flexible subscriptions with no hidden fees. All plans include instant activation and premium support."
          />
        )}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {plans.map((plan, index) => (
            <PricingCard
              key={plan.id}
              plan={plan}
              delay={index * 0.1}
              showFullFeatures={showFullFeatures}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
