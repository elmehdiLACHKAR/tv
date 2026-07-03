import type { Metadata } from "next";
import PricingSection from "@/components/sections/PricingSection";
import SectionHeading from "@/components/ui/SectionHeading";
import FeaturesSection from "@/components/sections/FeaturesSection";

export const metadata: Metadata = {
  title: "Plans & Pricing",
  description:
    "Choose from flexible IPTV subscription plans — monthly, quarterly, or annual. Instant activation with premium 4K streaming.",
};

export default function ProductsPage() {
  return (
    <div className="pt-24 md:pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <SectionHeading
          eyebrow="Subscription Plans"
          title="Find the Right Plan for You"
          subtitle="All plans include instant activation, EPG guide, and access to our full channel library. Upgrade or downgrade anytime."
        />
      </div>
      <PricingSection showHeading={false} showFullFeatures />
      <FeaturesSection />
    </div>
  );
}
