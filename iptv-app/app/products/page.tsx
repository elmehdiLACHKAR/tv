import type { Metadata } from "next";
import ProductsPageClient from "./ProductsPageClient";

export const metadata: Metadata = {
  title: "Plans & Pricing — StreamVault",
  description:
    "Choose your StreamVault subscription plan. Starter, Pro, or Ultimate — all with 20,000+ channels and 4K quality.",
};

export default function ProductsPage() {
  return <ProductsPageClient />;
}
