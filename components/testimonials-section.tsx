"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import Image from "next/image";
import { reviewScreenshots } from "@/lib/data";
import { SectionHeading } from "./section-heading";

export function TestimonialsSection() {
  return (
    <section className="px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Customer voices"
          title="Real reviews, straight from WhatsApp."
          description="These are placeholder screenshots. Replace the images in public/reviews/ with real customer chats to showcase authentic feedback."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {reviewScreenshots.map((review, index) => (
            <motion.figure
              key={review.src}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="glass-card group relative overflow-hidden rounded-[1.75rem] p-2"
            >
              <div className="relative aspect-[9/16] overflow-hidden rounded-[1.4rem]">
                <Image
                  src={review.src}
                  alt={review.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full bg-emerald-500/90 px-2.5 py-1 text-[11px] font-black text-white shadow-lg">
                <MessageCircle size={12} />
                WhatsApp
              </div>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
