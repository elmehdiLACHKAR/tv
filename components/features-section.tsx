"use client";

import { motion } from "framer-motion";
import { features } from "@/lib/data";
import { SectionHeading } from "./section-heading";

export function FeaturesSection() {
  return (
    <section id="features" className="relative px-5 py-24 lg:px-8">
      <div className="absolute inset-x-0 top-20 -z-10 mx-auto h-72 max-w-4xl rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Premium experience"
          title="Everything a high-converting IPTV brand needs."
          description="Purpose-built sections, polished animations, responsive cards and clear support channels create a trustworthy buying experience."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.article
              key={feature.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="glass-card group rounded-[2rem] p-6 transition hover:border-cyan-200/30"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-300/20 to-violet-500/20 text-cyan-200 transition group-hover:scale-110">
                <feature.icon size={26} />
              </div>
              <h3 className="font-[var(--font-jakarta)] text-xl font-black text-white">
                {feature.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">{feature.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
