"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import { stats } from "@/lib/content";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.21, 0.65, 0.36, 1] as const },
  },
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden pb-20 pt-36 sm:pt-44">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="mx-auto flex max-w-4xl flex-col items-center text-center"
        >
          <motion.span
            variants={item}
            className="glass inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium text-slate-300"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            45,000+ streamers online right now
          </motion.span>

          <motion.h1
            variants={item}
            className="font-display mt-8 text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            All your TV. <span className="text-gradient">One subscription.</span>{" "}
            Zero buffering.
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-400 sm:text-xl"
          >
            Stream 20,000+ live channels and 80,000+ movies & series in stunning
            4K on any device. Instant activation, anti-freeze servers and real
            humans on support — 24/7.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
          >
            <Button href="/plans" size="lg">
              View Plans & Pricing
              <Icon name="arrowRight" className="h-5 w-5" />
            </Button>
            <Button href="/contact" variant="secondary" size="lg">
              <Icon name="play" className="h-4 w-4 text-neon-300" />
              Get a Free 24h Trial
            </Button>
          </motion.div>

          <motion.div variants={item} className="mt-8 flex items-center gap-2 text-sm text-slate-500">
            <Icon name="shield" className="h-4 w-4 text-emerald-400" />
            7-day money-back guarantee on yearly plans
          </motion.div>
        </motion.div>

        {/* stats strip */}
        <motion.dl
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.7, ease: [0.21, 0.65, 0.36, 1] }}
          className="glass mx-auto mt-20 grid max-w-4xl grid-cols-2 gap-y-8 rounded-3xl px-6 py-10 shadow-card sm:grid-cols-4"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-1 text-center">
              <dd className="font-display text-3xl font-bold text-white sm:text-4xl">
                <span className="text-gradient">{stat.value}</span>
              </dd>
              <dt className="text-xs font-medium uppercase tracking-widest text-slate-400">
                {stat.label}
              </dt>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
