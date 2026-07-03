import type { Metadata } from "next";
import { CheckoutPanel } from "@/components/checkout-panel";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "Checkout",
  description:
    "Choose an IPTV subscription and complete checkout through WhatsApp or email support.",
};

export default function CheckoutPage() {
  return (
    <main className="px-5 pb-24 pt-32 lg:px-8 lg:pt-40">
      <section className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Secure order flow"
          title="Checkout without friction."
          description="Select a plan and send your order through WhatsApp or email. The flow is intentionally simple for fast customer activation."
        />
        <div className="mt-14">
          <CheckoutPanel />
        </div>
      </section>
    </main>
  );
}
