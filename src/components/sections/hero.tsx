"use client";

import { motion } from "framer-motion";
import { siteConfig, whatsappLink } from "@/lib/site";
import { stats } from "@/lib/content";
import { Container } from "@/components/ui/container";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Star } from "@/components/icons";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-20 pt-16 sm:pt-24">
      <AuroraBackground />
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/70 backdrop-blur"
          >
            <span className="flex h-2 w-2 items-center justify-center">
              <span className="absolute h-2 w-2 animate-ping rounded-full bg-neon-cyan/70" />
              <span className="h-2 w-2 rounded-full bg-neon-cyan" />
            </span>
            Rated 4.9/5 by 50,000+ streamers
          </motion.div>

          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl"
          >
            Stream the{" "}
            <span className="text-gradient">entire universe</span> of TV in 4K
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/60 sm:text-lg"
          >
            {siteConfig.name} delivers 20,000+ live channels, 80,000+ movies &amp;
            series, live sports and premium 4K quality — instantly, on every device
            you own.
          </motion.p>

          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <Button href="/plans" size="lg" className="w-full sm:w-auto">
              View plans
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              href={whatsappLink(`Hi ${siteConfig.name}, I'd like a free trial.`)}
              external
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto"
            >
              <Play className="h-4 w-4" />
              Start free trial
            </Button>
          </motion.div>

          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-5 flex items-center justify-center gap-1.5 text-sm text-white/45"
          >
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-4 w-4 text-yellow-400" />
            ))}
            <span className="ml-2">No contracts · Instant setup · 24/7 support</span>
          </motion.div>
        </div>

        {/* Hero visual */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto mt-16 max-w-5xl"
        >
          <div className="glass-card overflow-hidden p-2 shadow-soft">
            <div className="relative aspect-video overflow-hidden rounded-2xl bg-gradient-to-br from-surface-2 via-surface to-background">
              {/* Placeholder "app" mockup */}
              <div className="absolute inset-0 grid grid-cols-4 gap-3 p-6 opacity-90 sm:grid-cols-6 sm:gap-4 sm:p-8">
                {Array.from({ length: 12 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="rounded-xl border border-white/10 bg-white/5"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + i * 0.05, duration: 0.4 }}
                  />
                ))}
              </div>
              <div className="absolute inset-x-0 bottom-0 flex items-center gap-3 bg-gradient-to-t from-background via-background/70 to-transparent p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-neon-cyan to-neon-purple text-white shadow-glow">
                  <Play className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Now streaming · 4K UHD</p>
                  <p className="text-xs text-white/50">Live · Movies · Sports · Series</p>
                </div>
              </div>
            </div>
          </div>

          {/* floating badges */}
          <motion.div
            className="absolute -left-4 top-10 hidden rounded-2xl border border-white/10 bg-surface/80 px-4 py-3 shadow-soft backdrop-blur-xl sm:block"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <p className="text-xs text-white/50">Live channels</p>
            <p className="font-display text-lg font-bold text-white">20,000+</p>
          </motion.div>
          <motion.div
            className="absolute -right-4 bottom-16 hidden rounded-2xl border border-white/10 bg-surface/80 px-4 py-3 shadow-soft backdrop-blur-xl sm:block"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <p className="text-xs text-white/50">Uptime</p>
            <p className="font-display text-lg font-bold text-gradient">99.9%</p>
          </motion.div>
        </motion.div>

        {/* stats */}
        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="text-center"
            >
              <p className="font-display text-3xl font-bold text-white sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-white/50">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
