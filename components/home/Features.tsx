import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { features } from "@/lib/content";

export default function Features() {
  return (
    <section id="features" className="mx-auto max-w-7xl scroll-mt-24 px-4 py-24 sm:px-6">
      <SectionHeading
        eyebrow="Why NovaStream"
        title={
          <>
            Built for people who are <span className="text-gradient">serious about streaming</span>
          </>
        }
        subtitle="Everything you'd expect from a premium streaming service — and a few things you won't find anywhere else."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <Reveal key={feature.title} delay={index * 0.08}>
            <article className="glass group h-full rounded-3xl p-8 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-neon-400/40 hover:shadow-glow-blue">
              <span className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-neon-500/20 to-violet-500/20 text-neon-300 transition-transform duration-300 group-hover:scale-110">
                <Icon name={feature.icon} className="h-6 w-6" />
              </span>
              <h3 className="font-display text-lg font-semibold text-white">
                {feature.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                {feature.description}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
