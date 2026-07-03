import type { Metadata } from "next";
import CheckoutPageClient from "./CheckoutPageClient";

export const metadata: Metadata = {
  title: "Checkout — StreamVault",
  description: "Complete your StreamVault subscription order.",
};

export default function CheckoutPage() {
  return <CheckoutPageClient />;
}
