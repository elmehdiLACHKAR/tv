import { ChannelsSlider } from "@/components/channels-slider";
import { FaqSection } from "@/components/faq-section";
import { FeaturesSection } from "@/components/features-section";
import { FinalCta } from "@/components/final-cta";
import { Hero } from "@/components/hero";
import { PricingSection } from "@/components/pricing-section";
import { StreamingSlider } from "@/components/streaming-slider";
import { TestimonialsSection } from "@/components/testimonials-section";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <ChannelsSlider />
      <PricingSection />
      <FeaturesSection />
      <StreamingSlider />
      <TestimonialsSection />
      <FaqSection />
      <FinalCta />
    </main>
  );
}
