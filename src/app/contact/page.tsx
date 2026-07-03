import type { Metadata } from "next";
import { mailtoLink, siteConfig, whatsappLink } from "@/lib/site";
import { Container } from "@/components/ui/container";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/contact/contact-form";
import { Headset, Mail, WhatsApp } from "@/components/icons";

export const metadata: Metadata = {
  title: "Contact & Support",
  description:
    "Get in touch with the NebulaStream team. 24/7 support via WhatsApp and email — we usually reply within minutes.",
};

export default function ContactPage() {
  return (
    <section className="relative py-12">
      <AuroraBackground />
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-neon-cyan">
            Contact
          </span>
          <h1 className="mt-5 font-display text-3xl font-bold tracking-tight text-white sm:text-5xl">
            We&apos;re here <span className="text-gradient">24/7</span>
          </h1>
          <p className="mt-4 text-white/60">
            Questions about setup, plans or billing? Reach out and a real person
            will help you — usually within minutes.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-5">
          <div className="space-y-4 lg:col-span-2">
            <Reveal>
              <a
                href={whatsappLink(`Hi ${siteConfig.name}, I need some help.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition-all hover:-translate-y-1 hover:border-[#25D366]/40"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#25D366]/15 text-[#25D366]">
                  <WhatsApp className="h-6 w-6" />
                </span>
                <span>
                  <span className="block font-semibold text-white">WhatsApp</span>
                  <span className="block text-sm text-white/55">
                    Fastest response · Chat with us instantly
                  </span>
                </span>
              </a>
            </Reveal>

            <Reveal delay={0.05}>
              <a
                href={mailtoLink(`${siteConfig.name} support`, "Hi team,")}
                className="group flex items-start gap-4 rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition-all hover:-translate-y-1 hover:border-neon-cyan/40"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-neon-cyan/15 text-neon-cyan">
                  <Mail className="h-6 w-6" />
                </span>
                <span>
                  <span className="block font-semibold text-white">Email support</span>
                  <span className="block break-all text-sm text-white/55">
                    {siteConfig.email}
                  </span>
                </span>
              </a>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="flex items-start gap-4 rounded-3xl border border-white/10 bg-white/[0.04] p-6">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-neon-purple/15 text-neon-purple">
                  <Headset className="h-6 w-6" />
                </span>
                <span>
                  <span className="block font-semibold text-white">Live assistance</span>
                  <span className="block text-sm text-white/55">
                    Available around the clock, every day of the year.
                  </span>
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-neon-blue/15 to-neon-purple/15 p-6">
                <p className="text-sm text-white/70">
                  Ready to subscribe? Skip the form and grab a plan now.
                </p>
                <Button href="/plans" size="sm" className="mt-4">
                  View plans
                </Button>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-3">
            <Reveal delay={0.1}>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
