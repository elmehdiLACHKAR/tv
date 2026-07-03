import type { Metadata } from "next";
import { Suspense } from "react";
import { CheckoutClient } from "@/components/checkout/checkout-client";

export const metadata: Metadata = {
  title: "Checkout",
  description:
    "Complete your NebulaStream subscription order via WhatsApp or email. Fast, secure and activated within minutes.",
};

export default function CheckoutPage() {
  return (
    <Suspense fallback={<CheckoutFallback />}>
      <CheckoutClient />
    </Suspense>
  );
}

function CheckoutFallback() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center">
      <div className="h-10 w-10 animate-spin rounded-full border-2 border-white/20 border-t-neon-cyan" />
    </div>
  );
}
