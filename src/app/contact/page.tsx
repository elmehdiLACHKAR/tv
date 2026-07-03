import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/page-header";
import { Container } from "@/components/ui/container";
import { ContactForm } from "@/components/contact-form";
import { ContactInfo } from "@/components/sections/contact-info";
import { FAQ } from "@/components/sections/faq";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with the Nebula Stream team via WhatsApp, email, or our contact form. Live support available 24/7.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="We're here to help"
        title={
          <>
            Let&apos;s get you <span className="gradient-text">streaming</span>
          </>
        }
        description="Questions about a plan, need setup help, or want to report an issue? Reach us instantly on WhatsApp or drop a message below."
      />

      <section className="pb-24 sm:pb-32">
        <Container>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.4fr_1fr]">
            <ContactForm />
            <ContactInfo />
          </div>
        </Container>
      </section>

      <FAQ />
    </>
  );
}
