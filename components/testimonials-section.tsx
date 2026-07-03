"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { testimonials } from "@/lib/data";
import { SectionHeading } from "./section-heading";

export function TestimonialsSection() {
  return (
    <section className="px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Customer voices"
          title="Designed to feel credible from the first scroll."
          description="Use these placeholder testimonials as a starting point, then replace them with real customer feedback before launch."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="glass-card rounded-[2rem] p-6"
            >
              <Quote className="mb-6 text-cyan-200" size={30} />
              <div className="mb-5 flex gap-1 text-cyan-200">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <Star key={starIndex} size={16} className="fill-cyan-200" />
                ))}
              </div>
              <p className="text-base leading-7 text-slate-200">“{testimonial.quote}”</p>
              <div className="mt-7 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-cyan-300/30 to-violet-500/40 font-black text-white">
                  {testimonial.name.slice(0, 1)}
                </div>
                <div>
                  <p className="font-bold text-white">{testimonial.name}</p>
                  <p className="text-sm text-slate-400">{testimonial.role}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
