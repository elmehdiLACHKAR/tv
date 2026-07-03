"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { Container } from "@/components/ui/container";
import { features } from "@/data/features";

export function Features() {
  return (
    <section id="features" className="relative py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Why choose us"
          title={
            <>
              Built for viewers who expect{" "}
              <span className="gradient-text">more</span>
            </>
          }
          description="A streaming infrastructure engineered for reliability, speed, and picture quality — backed by a support team that actually answers."
        />

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (index % 4) * 0.08 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-surface/60 p-6 transition-colors duration-300 hover:border-primary/40"
            >
              <div className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-primary/10 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[linear-gradient(135deg,rgba(59,158,255,0.18),rgba(168,85,247,0.18))] text-primary-2">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
