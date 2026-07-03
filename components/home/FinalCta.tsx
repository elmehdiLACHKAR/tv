import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import { whatsappLink } from "@/lib/site";

export default function FinalCta() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
      <Reveal>
        <div className="glass relative overflow-hidden rounded-[2.5rem] px-6 py-16 text-center shadow-card sm:px-16 sm:py-20">
          <div className="pointer-events-none absolute -top-32 left-1/2 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-neon-500/30 to-violet-500/30 blur-[100px]" />

          <h2 className="font-display relative mx-auto max-w-2xl text-3xl font-bold leading-tight text-white sm:text-5xl">
            Ready to upgrade your <span className="text-gradient">TV experience?</span>
          </h2>
          <p className="relative mx-auto mt-5 max-w-xl text-base text-slate-400 sm:text-lg">
            Join 45,000+ happy customers. Order now and be streaming in under 15
            minutes — or try it free for 24 hours first.
          </p>
          <div className="relative mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/plans" size="lg">
              Choose Your Plan
              <Icon name="arrowRight" className="h-5 w-5" />
            </Button>
            <Button
              href={whatsappLink("Hi! I'd like a free 24-hour trial of NovaStream.")}
              variant="whatsapp"
              size="lg"
              external
            >
              <Icon name="whatsapp" className="h-5 w-5" />
              Free Trial on WhatsApp
            </Button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
