"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  highlight?: string;
  description?: string;
  centered?: boolean;
}

export default function SectionHeader({
  eyebrow,
  title,
  highlight,
  description,
  centered = true,
}: SectionHeaderProps) {
  const titleParts = highlight
    ? title.split(highlight)
    : [title];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={centered ? "text-center" : ""}
    >
      {eyebrow && (
        <span className="inline-block text-xs font-bold tracking-widest uppercase text-cyan-400 mb-4 px-4 py-1.5 bg-cyan-400/10 rounded-full border border-cyan-400/20">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 leading-tight">
        {titleParts[0]}
        {highlight && (
          <span className="gradient-text">{highlight}</span>
        )}
        {titleParts[1]}
      </h2>
      {description && (
        <p className="text-gray-400 text-lg max-w-2xl leading-relaxed mx-auto">
          {description}
        </p>
      )}
    </motion.div>
  );
}
