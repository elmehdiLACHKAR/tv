import type { Metadata } from "next";
import PricingCard from "@/components/pricing/PricingCard";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import FinalCta from "@/components/home/FinalCta";
import { plans } from "@/lib/plans";

export const metadata: Metadata = {
  title: "Plans & Pricing",
  description:
    "Compare NovaStream IPTV subscription plans — 1, 3 or 12 months. All plans include 20,000+ channels, 80,000+ VOD titles and 24/7 support.",
};

const guarantees = [
  { icon: "bolt", label: "Instant activation" },
  { icon: "shield", label: "Money-back guarantee" },
  { icon: "clock", label: "24/7 support" },
  { icon: "devices", label: "All devices supported" },
];

export default function PlansPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-4 pb-8 pt-36 sm:px-6 sm:pt-44">
        <SectionHeading
          eyebrow="Plans & Pricing"
          title={
            <>
              Simple pricing. <span className="text-gradient">Serious streaming.</span>
            </>
          }
          subtitle="Every plan unlocks the full NovaStream experience — 20,000+ live channels, 80,000+ movies & series and premium 4K servers. Longer plans, bigger savings."
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-6 xl:gap-8">
          {plans.map((plan, index) => (
            <PricingCard key={plan.id} plan={plan} index={index} />
          ))}
        </div>

        <Reveal delay={0.2} className="mt-16">
          <div className="glass grid grid-cols-2 gap-6 rounded-3xl px-6 py-8 sm:grid-cols-4">
            {guarantees.map((g) => (
              <div key={g.label} className="flex flex-col items-center gap-2 text-center">
                <Icon name={g.icon} className="h-6 w-6 text-neon-300" />
                <span className="text-sm font-medium text-slate-300">{g.label}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <FinalCta />
    </>
  );
}
