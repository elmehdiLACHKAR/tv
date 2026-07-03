import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Checkout",
  description:
    "Complete your NexStream IPTV subscription order via WhatsApp or email. Instant activation after payment.",
};

export default function CheckoutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
