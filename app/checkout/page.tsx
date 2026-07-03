import type { Metadata } from "next";
import { Suspense } from "react";
import CheckoutForm from "@/components/checkout/CheckoutForm";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Checkout",
  description:
    "Complete your NovaStream IPTV order in one message via WhatsApp or email. Instant activation, secure ordering.",
};

export default function CheckoutPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-24 pt-36 sm:px-6 sm:pt-44">
      <SectionHeading
        eyebrow="Checkout"
        title={
          <>
            Almost there — <span className="text-gradient">one message away</span>
          </>
        }
        subtitle="Fill in your details, pick WhatsApp or email, and we'll activate your subscription within minutes."
      />
      <Suspense fallback={<div className="glass h-96 animate-pulse rounded-3xl" />}>
        <CheckoutForm />
      </Suspense>
    </section>
  );
}
