import { steps } from "@/lib/content";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { StaggerGroup, StaggerItem } from "@/components/ui/reveal";

export function HowItWorks() {
  return (
    <section className="relative py-24">
      <Container>
        <SectionHeading
          eyebrow="How it works"
          title={
            <>
              Streaming in <span className="text-gradient">four easy steps</span>
            </>
          }
          description="From checkout to your first show in minutes — no technical skills required."
        />

        <StaggerGroup className="mt-14 grid gap-6 md:grid-cols-4">
          {steps.map((step, i) => (
            <StaggerItem key={step.title}>
              <div className="glass-card relative h-full p-7">
                <span className="font-display text-5xl font-bold text-white/10">
                  0{i + 1}
                </span>
                <h3 className="mt-3 font-display text-lg font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/55">
                  {step.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </section>
  );
}
