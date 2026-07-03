import Hero from "@/components/sections/Hero";
import PricingSection from "@/components/sections/PricingSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <PricingSection />
      <FeaturesSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
