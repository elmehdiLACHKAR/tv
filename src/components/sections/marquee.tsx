"use client";

import { motion } from "framer-motion";

const items = [
  "Live Sports",
  "Premier League",
  "Movies 4K",
  "Netflix Originals",
  "News 24/7",
  "Kids & Family",
  "PPV Events",
  "Documentaries",
  "International",
  "Series & Shows",
];

function Row() {
  return (
    <div className="flex shrink-0 items-center gap-10 px-5">
      {items.map((item) => (
        <span
          key={item}
          className="whitespace-nowrap font-display text-lg font-semibold text-white/40"
        >
          {item}
        </span>
      ))}
    </div>
  );
}

export function Marquee() {
  return (
    <section aria-hidden className="relative border-y border-white/10 bg-white/[0.02] py-6">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
      <div className="flex overflow-hidden">
        <motion.div
          className="flex"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
        >
          <Row />
          <Row />
          <Row />
          <Row />
        </motion.div>
      </div>
    </section>
  );
}
