import { features } from "@/lib/content";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { StaggerGroup, StaggerItem } from "@/components/ui/reveal";

export function Features() {
  return (
    <section id="features" className="relative py-24">
      <Container>
        <SectionHeading
          eyebrow="Why NebulaStream"
          title={
            <>
              Everything you need for the{" "}
              <span className="text-gradient">perfect stream</span>
            </>
          }
          description="Built on a global, load-balanced network engineered for stability, speed and cinema-grade quality."
        />

        <StaggerGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <StaggerItem key={feature.title}>
                <div className="group glass-card h-full p-7 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-glow">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 text-neon-cyan ring-1 ring-white/10 transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold text-white">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/55">
                    {feature.description}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </Container>
    </section>
  );
}
