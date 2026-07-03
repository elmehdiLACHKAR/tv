import { Hero } from "@/components/sections/hero";
import { Devices } from "@/components/sections/devices";
import { Features } from "@/components/sections/features";
import { Pricing } from "@/components/sections/pricing";
import { Testimonials } from "@/components/sections/testimonials";
import { FAQ } from "@/components/sections/faq";
import { CTA } from "@/components/sections/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Devices />
      <Features />
      <Pricing />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
}
