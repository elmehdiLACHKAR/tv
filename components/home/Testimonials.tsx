import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { testimonials } from "@/lib/content";

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Icon
          key={i}
          name="star"
          className={`h-4 w-4 ${
            i < rating ? "fill-amber-400 text-amber-400" : "text-slate-600"
          }`}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="mx-auto max-w-7xl scroll-mt-24 px-4 py-24 sm:px-6">
      <SectionHeading
        eyebrow="Testimonials"
        title={
          <>
            Loved by <span className="text-gradient">45,000+ streamers</span> worldwide
          </>
        }
        subtitle="Real feedback from customers who switched to NovaStream and never looked back."
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t, index) => (
          <Reveal key={t.name} delay={(index % 3) * 0.1}>
            <figure className="glass flex h-full flex-col rounded-3xl p-8 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-violet-400/40">
              <Stars rating={t.rating} />
              <blockquote className="mt-5 flex-1 text-sm leading-relaxed text-slate-300">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-white/5 pt-5">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-neon-500/30 to-violet-500/30 text-sm font-bold text-white">
                  {t.initials}
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">{t.name}</p>
                  <p className="text-xs text-slate-500">{t.role}</p>
                </div>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
