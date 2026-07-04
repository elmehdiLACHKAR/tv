"use client";

import { motion } from "framer-motion";
import { CheckCheck, MessageCircle } from "lucide-react";
import { brand, testimonials } from "@/lib/data";
import { SectionHeading } from "./section-heading";

export function TestimonialsSection() {
  return (
    <section className="px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Customer voices"
          title="Real conversations, straight from WhatsApp."
          description="These placeholder reviews are styled like incoming WhatsApp messages. Swap them for real customer screenshots before launch."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="glass-card flex h-full flex-col rounded-[1.75rem] p-5"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-cyan-300/30 to-violet-500/40 text-sm font-black text-white">
                  {testimonial.name.slice(0, 1)}
                </div>
                <div className="min-w-0">
                  <p className="truncate text-sm font-bold text-white">{testimonial.name}</p>
                  <p className="text-xs text-slate-400">{testimonial.role}</p>
                </div>
                <MessageCircle size={16} className="ml-auto shrink-0 text-emerald-400" />
              </div>

              <div className="whatsapp-bubble rounded-2xl rounded-tl-sm px-4 py-3 text-sm leading-6 text-slate-100">
                {testimonial.quote}
                <div className="mt-2 flex items-center justify-end gap-1 text-[11px] text-emerald-300/80">
                  {testimonial.time}
                  <CheckCheck size={14} className="text-emerald-300" />
                </div>
              </div>

              <p className="mt-4 text-xs text-slate-500">
                Verified {brand.name} customer &middot; via WhatsApp
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
