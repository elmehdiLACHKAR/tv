import { FaqSection } from "@/components/faq-section";
import { FeaturesSection } from "@/components/features-section";
import { FinalCta } from "@/components/final-cta";
import { Hero } from "@/components/hero";
import { PricingSection } from "@/components/pricing-section";
import { TestimonialsSection } from "@/components/testimonials-section";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <PricingSection />
      <FeaturesSection />
      <TestimonialsSection />
      <FaqSection />
      <FinalCta />
    </main>
  );
}
