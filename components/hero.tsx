"use client";

import { motion } from "framer-motion";
import { Play, ShieldCheck, Star } from "lucide-react";
import { AnimatedBackground } from "@/components/animated-background";
import { CtaButton } from "@/components/cta-button";
import { highlights, trustItems } from "@/lib/data";

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden px-5 pb-20 pt-32 lg:px-8 lg:pt-40">
      <AnimatedBackground />
      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.08fr_0.92fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-200/20 bg-cyan-200/10 px-4 py-2 text-sm font-bold text-cyan-100"
          >
            <Star size={16} className="fill-cyan-200 text-cyan-200" />
            Premium IPTV subscriptions for modern streamers
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-[var(--font-jakarta)] text-5xl font-black tracking-[-0.06em] text-white sm:text-6xl lg:text-7xl"
          >
            Stream live TV, sports and movies in a{" "}
            <span className="text-gradient">premium 4K experience.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl"
          >
            Launch a high-conversion streaming storefront with flexible IPTV plans,
            instant activation messaging, sleek animations and a mobile-first checkout.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-9 flex flex-col gap-4 sm:flex-row"
          >
            <CtaButton href="/products" className="px-8 py-4 text-base">
              View premium plans
            </CtaButton>
            <CtaButton href="#features" variant="secondary" className="px-8 py-4 text-base">
              Explore features
            </CtaButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4"
          >
            {highlights.map((item) => (
              <div key={item.label} className="rounded-3xl border border-white/10 bg-white/[0.04] p-4">
                <p className="font-[var(--font-jakarta)] text-2xl font-black text-white">
                  {item.value}
                </p>
                <p className="mt-1 text-xs text-slate-400">{item.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="relative"
        >
          <div className="glass-card neon-ring relative overflow-hidden rounded-[2.3rem] p-4">
            <div className="aspect-[4/5] overflow-hidden rounded-[1.8rem] bg-gradient-to-br from-slate-900 via-slate-950 to-violet-950 p-5">
              <div className="mb-5 flex items-center justify-between">
                <div className="flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-yellow-300" />
                  <span className="h-3 w-3 rounded-full bg-green-300" />
                </div>
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-cyan-100">
                  Live now
                </span>
              </div>

              <div className="relative mb-5 flex aspect-video items-center justify-center overflow-hidden rounded-3xl bg-[radial-gradient(circle_at_center,rgba(38,217,255,0.32),rgba(15,23,42,0.88))]">
                <motion.div
                  animate={{ scale: [1, 1.18, 1], opacity: [0.85, 0.45, 0.85] }}
                  transition={{ duration: 2.6, repeat: Infinity }}
                  className="absolute h-32 w-32 rounded-full border border-cyan-200/30"
                />
                <button className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-white text-slate-950 shadow-2xl">
                  <Play className="ml-1 fill-slate-950" size={26} />
                </button>
              </div>

              <div className="grid gap-3">
                {["Champions League Ultra HD", "Cinema Premiere", "Family Kids Hub"].map(
                  (item, index) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.05] p-3"
                    >
                      <div className="h-12 w-16 rounded-xl bg-gradient-to-br from-cyan-300/40 to-violet-500/40" />
                      <div className="flex-1">
                        <p className="text-sm font-bold text-white">{item}</p>
                        <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-cyan-300 to-violet-500"
                            style={{ width: `${86 - index * 14}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>

          <div className="glass-card absolute -bottom-8 left-4 right-4 rounded-3xl p-4 sm:left-auto sm:right-8 sm:w-80">
            <div className="mb-3 flex items-center gap-2 text-sm font-bold text-white">
              <ShieldCheck size={18} className="text-cyan-200" />
              Trusted streaming setup
            </div>
            <div className="grid gap-2">
              {trustItems.map((item) => (
                <div key={item.label} className="flex items-center gap-2 text-xs text-slate-300">
                  <item.icon size={15} className="text-cyan-200" />
                  {item.label}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
