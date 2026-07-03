"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`max-w-3xl mb-12 md:mb-16 ${alignClass}`}
    >
      {eyebrow && (
        <span className="inline-block text-neon-blue text-sm font-semibold uppercase tracking-widest mb-3">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted text-lg md:text-xl leading-relaxed">{subtitle}</p>
      )}
    </motion.div>
  );
}
