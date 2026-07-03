"use client";

import { motion } from "framer-motion";
import { Play, Sparkles, ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6"
            >
              <Sparkles size={16} className="text-neon-blue" />
              <span className="text-sm font-medium">
                #1 Rated IPTV Service 2026
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6"
            >
              Stream{" "}
              <span className="gradient-text">Everything</span>
              <br />
              Without Limits
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-muted leading-relaxed mb-8 max-w-xl"
            >
              15,000+ live channels, movies, and sports in crystal-clear 4K.
              Instant activation, zero contracts, and premium support included.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button href="/products" size="lg">
                Start Streaming
                <ArrowRight size={20} />
              </Button>
              <Button href="/contact" variant="outline" size="lg">
                Free 24h Trial
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center gap-8 mt-10 pt-10 border-t border-white/5"
            >
              {[
                { value: "15K+", label: "Channels" },
                { value: "4K", label: "Ultra HD" },
                { value: "99.9%", label: "Uptime" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl md:text-3xl font-bold gradient-text">
                    {stat.value}
                  </p>
                  <p className="text-muted text-sm">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 animate-pulse-glow" />
              <div className="absolute inset-4 glass-strong rounded-3xl overflow-hidden glow-blue">
                <div className="h-full flex flex-col">
                  <div className="p-4 border-b border-white/10 flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                    <span className="text-xs text-muted ml-2">NexStream Player</span>
                  </div>
                  <div className="flex-1 p-6 grid grid-cols-3 gap-3">
                    {Array.from({ length: 9 }).map((_, i) => (
                      <motion.div
                        key={i}
                        className="rounded-xl bg-gradient-to-br from-white/5 to-white/10 aspect-video flex items-center justify-center"
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{
                          duration: 2,
                          delay: i * 0.2,
                          repeat: Infinity,
                        }}
                      >
                        <Play
                          size={16}
                          className="text-neon-blue opacity-60"
                        />
                      </motion.div>
                    ))}
                  </div>
                  <div className="p-4 border-t border-white/10">
                    <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-neon-blue to-neon-purple rounded-full"
                        animate={{ width: ["0%", "75%", "75%"] }}
                        transition={{ duration: 4, repeat: Infinity }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <motion.div
                className="absolute -top-4 -right-4 glass rounded-2xl px-4 py-3 animate-float"
                style={{ animationDelay: "1s" }}
              >
                <p className="text-xs text-muted">Now Playing</p>
                <p className="text-sm font-semibold">Live Sports 4K</p>
              </motion.div>
              <motion.div
                className="absolute -bottom-4 -left-4 glass rounded-2xl px-4 py-3 animate-float"
                style={{ animationDelay: "2s" }}
              >
                <p className="text-xs text-muted">Active Users</p>
                <p className="text-sm font-semibold text-neon-blue">12,847 online</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
