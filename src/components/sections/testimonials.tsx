import { testimonials } from "@/lib/content";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { StaggerGroup, StaggerItem } from "@/components/ui/reveal";
import { Star } from "@/components/icons";

export function Testimonials() {
  return (
    <section className="relative py-24">
      <Container>
        <SectionHeading
          eyebrow="Loved worldwide"
          title={
            <>
              Join <span className="text-gradient">50,000+</span> happy streamers
            </>
          }
          description="Real feedback from members who cut the cord and never looked back."
        />

        <StaggerGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {testimonials.map((t) => (
            <StaggerItem key={t.name}>
              <figure className="glass-card h-full p-7 transition-all duration-300 hover:border-white/20">
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400" />
                  ))}
                </div>
                <blockquote className="mt-4 text-base leading-relaxed text-white/75">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-neon-blue to-neon-purple text-sm font-bold text-white">
                    {t.initials}
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-white">
                      {t.name}
                    </span>
                    <span className="block text-xs text-white/50">{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </section>
  );
}
