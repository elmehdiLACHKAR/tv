import Hero from "@/components/home/Hero";
import ChannelMarquee from "@/components/home/ChannelMarquee";
import Features from "@/components/home/Features";
import HowItWorks from "@/components/home/HowItWorks";
import PricingSection from "@/components/pricing/PricingSection";
import Testimonials from "@/components/home/Testimonials";
import Faq from "@/components/home/Faq";
import FinalCta from "@/components/home/FinalCta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ChannelMarquee />
      <Features />
      <HowItWorks />
      <PricingSection />
      <Testimonials />
      <Faq />
      <FinalCta />
    </>
  );
}
