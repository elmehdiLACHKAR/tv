import type { Metadata } from "next";
import { plans } from "@/lib/site";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { PricingCard } from "@/components/pricing-card";
import { StaggerGroup, StaggerItem } from "@/components/ui/reveal";
import { Reveal } from "@/components/ui/reveal";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { Faq } from "@/components/sections/faq";
import { Cta } from "@/components/sections/cta";
import { Check } from "@/components/icons";

export const metadata: Metadata = {
  title: "Plans & Pricing",
  description:
    "Choose a NebulaStream subscription: 1 month, 3 months or 12 months. 20,000+ channels, 4K quality, instant activation and 24/7 support.",
};

const included = [
  "20,000+ live channels",
  "80,000+ movies & series",
  "4K / UHD streaming",
  "All sports & PPV events",
  "EPG guide & catch-up",
  "Multi-device support",
  "Anti-freeze technology",
  "24/7 human support",
];

export default function PlansPage() {
  return (
    <>
      <section className="relative overflow-hidden pb-8 pt-16">
        <AuroraBackground />
        <Container>
          <SectionHeading
            eyebrow="Plans & Pricing"
            title={
              <>
                Choose the plan that{" "}
                <span className="text-gradient">fits you best</span>
              </>
            }
            description="Every subscription unlocks the full NebulaStream library. Pay for longer and save more — cancel anytime."
          />
        </Container>
      </section>

      <section className="relative pb-20">
        <Container>
          <StaggerGroup className="grid items-stretch gap-6 md:grid-cols-3">
            {plans.map((plan) => (
              <StaggerItem key={plan.id} className="h-full">
                <PricingCard plan={plan} />
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Container>
      </section>

      <section className="relative pb-8">
        <Container>
          <Reveal>
            <div className="glass-card p-8 sm:p-10">
              <h3 className="font-display text-2xl font-bold text-white">
                Every plan includes
              </h3>
              <p className="mt-2 text-sm text-white/55">
                No matter which duration you pick, you get the complete premium
                experience.
              </p>
              <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {included.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-white/75">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-neon-cyan/15 text-neon-cyan">
                      <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </Container>
      </section>

      <Faq />
      <Cta />
    </>
  );
}
