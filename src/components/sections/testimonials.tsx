"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Container } from "@/components/ui/container";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-1/2 -z-10 h-[30rem] -translate-y-1/2 bg-[radial-gradient(ellipse_at_center,rgba(59,158,255,0.08),transparent_70%)]" />
      <Container>
        <SectionHeading
          eyebrow="Loved worldwide"
          title={
            <>
              Subscribers can&apos;t stop{" "}
              <span className="gradient-text">talking about us</span>
            </>
          }
          description="Real feedback from real streamers across six continents."
        />

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
              whileHover={{ y: -6 }}
              className="flex h-full flex-col rounded-2xl border border-border bg-surface/60 p-6"
            >
              <Quote className="h-7 w-7 text-primary/40" />
              <div className="mt-3 flex items-center gap-0.5 text-yellow-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-3.5 w-3.5"
                    fill={i < testimonial.rating ? "currentColor" : "none"}
                    strokeWidth={i < testimonial.rating ? 0 : 1.5}
                  />
                ))}
              </div>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-foreground/90">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[linear-gradient(135deg,var(--primary),var(--secondary))] text-xs font-bold text-white">
                  {testimonial.initials}
                </span>
                <div>
                  <p className="text-sm font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-xs text-muted">
                    {testimonial.location} · {testimonial.plan}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
