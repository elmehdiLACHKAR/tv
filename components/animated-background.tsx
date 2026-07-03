"use client";

import { motion } from "framer-motion";

export function AnimatedBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="mesh-bg absolute inset-0 opacity-50" />
      <motion.div
        animate={{ x: [0, 80, -30, 0], y: [0, 30, 70, 0], scale: [1, 1.12, 0.96, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[-10rem] top-20 h-72 w-72 rounded-full bg-cyan-400/25 blur-3xl"
      />
      <motion.div
        animate={{ x: [0, -70, 40, 0], y: [0, 90, 10, 0], scale: [1, 0.92, 1.16, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[-8rem] top-28 h-80 w-80 rounded-full bg-violet-500/25 blur-3xl"
      />
      <motion.div
        animate={{ opacity: [0.25, 0.55, 0.25], rotate: [0, 12, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 top-1/3 h-56 w-56 -translate-x-1/2 rounded-full bg-fuchsia-400/15 blur-3xl"
      />
    </div>
  );
}
