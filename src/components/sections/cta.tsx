import { siteConfig, whatsappLink } from "@/lib/site";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { ArrowRight, WhatsApp } from "@/components/icons";

export function Cta() {
  return (
    <section className="relative py-24">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-4xl border border-white/10 bg-gradient-to-br from-neon-blue/20 via-surface to-neon-purple/20 px-6 py-16 text-center shadow-soft sm:px-16">
            <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-neon-cyan/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-neon-purple/20 blur-3xl" />

            <h2 className="relative mx-auto max-w-2xl font-display text-3xl font-bold tracking-tight text-white sm:text-5xl">
              Ready to upgrade your{" "}
              <span className="text-gradient">TV experience?</span>
            </h2>
            <p className="relative mx-auto mt-4 max-w-xl text-base text-white/65 sm:text-lg">
              Join thousands of viewers streaming everything they love in stunning
              4K. Activate your plan today — it takes minutes.
            </p>
            <div className="relative mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href="/plans" size="lg" className="w-full sm:w-auto">
                Choose your plan
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                href={whatsappLink(`Hi ${siteConfig.name}, I'd like to get started.`)}
                external
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto"
              >
                <WhatsApp className="h-4 w-4" />
                Chat on WhatsApp
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
