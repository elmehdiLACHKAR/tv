"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Signal, Sparkles, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { AnimatedBackground } from "@/components/animated-background";
import { siteConfig } from "@/lib/site-config";

const channelPreview = [
  { name: "Sports 1", tag: "LIVE", color: "from-primary to-primary-2" },
  { name: "World News", tag: "HD", color: "from-secondary to-secondary-2" },
  { name: "Cinema+", tag: "4K", color: "from-primary-2 to-secondary" },
  { name: "Kids Zone", tag: "HD", color: "from-secondary-2 to-primary" },
];

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden pb-24 pt-16 sm:pt-20 lg:pb-32">
      <AnimatedBackground />

      <Container className="relative grid grid-cols-1 items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="flex flex-col items-start gap-7">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge>
              <Sparkles className="h-3.5 w-3.5" /> Now streaming 20,000+ channels
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl font-bold leading-[1.08] tracking-tight text-balance sm:text-5xl lg:text-6xl xl:text-[4.2rem]"
          >
            Every channel.
            <br />
            Every screen.{" "}
            <span className="gradient-text">Zero buffering.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="max-w-xl text-lg leading-relaxed text-muted"
          >
            {siteConfig.name} streams live sports, global news, and 45,000+
            movies &amp; series in stunning 4K — instantly on your TV, phone,
            or laptop. Setup takes minutes, not days.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col gap-4 sm:flex-row"
          >
            <Button href="/plans" size="lg">
              Get Instant Access <ArrowRight className="h-5 w-5" />
            </Button>
            <Button href="/contact" size="lg" variant="secondary">
              <Play className="h-5 w-5" /> See It In Action
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="grid w-full grid-cols-2 gap-x-8 gap-y-5 pt-4 sm:grid-cols-4"
          >
            {siteConfig.stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-2xl font-bold text-foreground sm:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs text-muted sm:text-sm">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div className="glow-border relative rounded-[2rem] p-2">
            <div className="glass-strong overflow-hidden rounded-[1.75rem] p-5 sm:p-6">
              <div className="flex items-center justify-between border-b border-border pb-4">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                </div>
                <div className="flex items-center gap-1.5 text-xs font-medium text-primary-2">
                  <Signal className="h-3.5 w-3.5" /> Streaming
                </div>
              </div>

              <div className="relative mt-5 aspect-video overflow-hidden rounded-xl bg-[linear-gradient(145deg,#0e1730,#161129)]">
                <div className="absolute inset-0 bg-grid opacity-30" />
                <motion.div
                  className="absolute inset-0 shimmer-bg"
                  animate={{ backgroundPosition: ["-200% 0", "200% 0"] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
                />
                <div className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full bg-black/40 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-red-500" /> LIVE
                </div>
                <div className="absolute bottom-3 right-3 rounded-full bg-black/40 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur">
                  4K UHD
                </div>
                <div className="flex h-full items-center justify-center">
                  <motion.div
                    animate={{ scale: [1, 1.08, 1] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                    className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10 backdrop-blur"
                  >
                    <Play className="h-6 w-6 translate-x-0.5 text-white" fill="white" />
                  </motion.div>
                </div>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {channelPreview.map((ch, i) => (
                  <motion.div
                    key={ch.name}
                    className="flex flex-col items-center gap-2 rounded-xl border border-border bg-white/[0.03] p-3 text-center"
                    animate={{ y: [0, -4, 0] }}
                    transition={{
                      duration: 3.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.3,
                    }}
                  >
                    <span
                      className={`flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br ${ch.color} text-[10px] font-bold text-white`}
                    >
                      {ch.tag}
                    </span>
                    <span className="text-[11px] font-medium text-muted">{ch.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <motion.div
            className="glass absolute -left-6 -top-6 hidden items-center gap-2 rounded-2xl px-4 py-3 sm:flex"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="flex -space-x-2">
              {["MW", "SA", "DO"].map((initials) => (
                <span
                  key={initials}
                  className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-surface bg-[linear-gradient(135deg,var(--primary),var(--secondary))] text-[10px] font-bold text-white"
                >
                  {initials}
                </span>
              ))}
            </div>
            <div className="text-xs">
              <div className="flex items-center gap-0.5 text-yellow-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3 w-3" fill="currentColor" />
                ))}
              </div>
              <p className="text-muted">84,000+ happy viewers</p>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
