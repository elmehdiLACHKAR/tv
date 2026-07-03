"use client";

import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-background" />

      <motion.div
        className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full opacity-30"
        style={{
          background:
            "radial-gradient(circle, rgba(0,212,255,0.15) 0%, transparent 70%)",
        }}
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute top-[30%] right-[-15%] w-[700px] h-[700px] rounded-full opacity-25"
        style={{
          background:
            "radial-gradient(circle, rgba(168,85,247,0.2) 0%, transparent 70%)",
        }}
        animate={{
          x: [0, -40, 0],
          y: [0, 50, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute bottom-[-10%] left-[30%] w-[500px] h-[500px] rounded-full opacity-20"
        style={{
          background:
            "radial-gradient(circle, rgba(236,72,153,0.15) 0%, transparent 70%)",
        }}
        animate={{
          x: [0, 30, 0],
          y: [0, -40, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />
    </div>
  );
}
