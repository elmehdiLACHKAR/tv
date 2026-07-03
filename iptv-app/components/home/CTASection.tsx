"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Zap, MessageCircle, ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-700/30 to-transparent" />

      {/* Animated glow blobs */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="glow-blob w-[700px] h-[700px] bg-purple-600 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10"
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass rounded-3xl border border-white/10 p-10 sm:p-16 relative overflow-hidden"
        >
          {/* Inner glow gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5" />

          <div className="relative">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full border border-cyan-500/30 mb-6">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm text-gray-300">
                Start watching in under 5 minutes
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4 leading-tight">
              Ready to{" "}
              <span className="gradient-text">Upgrade</span>
              <br />
              Your Streaming?
            </h2>

            <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
              Join over 50,000 happy subscribers streaming 20,000+ channels in
              stunning 4K quality today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/products"
                className="btn-primary flex items-center justify-center gap-2 text-white font-bold px-8 py-4 rounded-2xl text-lg shadow-2xl shadow-cyan-500/20"
              >
                <Zap className="w-5 h-5" />
                View All Plans
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://wa.me/1234567890?text=Hi!%20I%20want%20a%20free%20trial%20of%20StreamVault."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 glass border border-white/20 text-white font-bold px-8 py-4 rounded-2xl text-lg hover:bg-white/10 transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5 text-green-400" />
                Free 24h Trial
              </a>
            </div>

            <p className="text-gray-500 text-sm mt-6">
              No credit card required · Cancel anytime · 30-day guarantee
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
