"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: "blue" | "purple" | "none";
  delay?: number;
}

export default function GlassCard({
  children,
  className = "",
  hover = true,
  glow = "none",
  delay = 0,
}: GlassCardProps) {
  const glowClass =
    glow === "blue" ? "hover:glow-blue" : glow === "purple" ? "hover:glow-purple" : "";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={hover ? { y: -4, transition: { duration: 0.2 } } : undefined}
      className={`glass rounded-3xl p-6 transition-all duration-300 ${glowClass} ${className}`}
    >
      {children}
    </motion.div>
  );
}
