import type { Metadata } from "next";
import ContactPageClient from "./ContactPageClient";

export const metadata: Metadata = {
  title: "Contact Us — StreamVault",
  description:
    "Get in touch with the StreamVault team. We're available 24/7 via WhatsApp, email, and our contact form.",
};

export default function ContactPage() {
  return <ContactPageClient />;
}
