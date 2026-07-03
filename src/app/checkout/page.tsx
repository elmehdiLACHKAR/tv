import type { Metadata } from "next";
import { Suspense } from "react";
import { PageHeader } from "@/components/sections/page-header";
import { Container } from "@/components/ui/container";
import { CheckoutForm } from "@/components/checkout-form";

export const metadata: Metadata = {
  title: "Checkout",
  description:
    "Complete your Nebula Stream order in seconds — confirm your plan and send your details via WhatsApp or email to activate instantly.",
};

export default function CheckoutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Secure checkout"
        title={
          <>
            Complete your order <span className="gradient-text">in two steps</span>
          </>
        }
        description="No payment forms, no waiting. Confirm your plan and send it straight to our team over WhatsApp or email — we'll activate your subscription right away."
      />

      <section className="pb-24 sm:pb-32">
        <Container>
          <Suspense fallback={null}>
            <CheckoutForm />
          </Suspense>
        </Container>
      </section>
    </>
  );
}
