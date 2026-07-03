"use client";

import { motion } from "framer-motion";

export function AnimatedBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 bg-grid mask-fade-x opacity-40 [mask-image:linear-gradient(to_bottom,black,transparent_75%)]" />

      <motion.div
        className="absolute -top-40 -left-24 h-[32rem] w-[32rem] rounded-full bg-primary/30 blur-[120px]"
        animate={{
          x: [0, 40, -20, 0],
          y: [0, -30, 20, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 -right-32 h-[36rem] w-[36rem] rounded-full bg-secondary/25 blur-[130px]"
        animate={{
          x: [0, -30, 20, 0],
          y: [0, 30, -20, 0],
          scale: [1, 0.9, 1.08, 1],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-10rem] left-1/3 h-[28rem] w-[28rem] rounded-full bg-primary-2/20 blur-[110px]"
        animate={{
          x: [0, 25, -15, 0],
          y: [0, -15, 25, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="absolute inset-0 bg-noise mix-blend-overlay opacity-60" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,var(--background)_78%)]" />
    </div>
  );
}
