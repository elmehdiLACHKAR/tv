import type { Metadata } from "next";
import { PricingCard } from "@/components/pricing-card";
import { SectionHeading } from "@/components/section-heading";
import { plans } from "@/lib/data";

export const metadata: Metadata = {
  title: "Products and IPTV Plans",
  description:
    "Compare premium IPTV subscription plans for 1 month, 3 months and 12 months with clear features and checkout options.",
};

export default function ProductsPage() {
  return (
    <main className="px-5 pb-24 pt-32 lg:px-8 lg:pt-40">
      <section className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Products and plans"
          title="Subscription cards built for confident buying."
          description="Select a flexible IPTV package and continue to checkout through WhatsApp or email support."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <PricingCard key={plan.name} plan={plan} />
          ))}
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-7xl">
        <div className="glass-card rounded-[2rem] p-7 md:p-10">
          <div className="grid gap-8 md:grid-cols-3">
            {[
              ["Device ready", "Works with popular IPTV players, Smart TVs and mobile devices."],
              ["Setup included", "Get practical setup guidance after your subscription is confirmed."],
              ["Upgrade anytime", "Move from monthly to longer-term value when you are ready."],
            ].map(([title, description]) => (
              <div key={title}>
                <h2 className="font-[var(--font-jakarta)] text-xl font-black text-white">
                  {title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-slate-400">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
