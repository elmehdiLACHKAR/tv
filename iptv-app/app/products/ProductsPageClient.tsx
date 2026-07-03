"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Check,
  X,
  Zap,
  Shield,
  MessageCircle,
  Mail,
  Star,
} from "lucide-react";
import PricingCard from "@/components/ui/PricingCard";
import { plans } from "@/components/home/PricingSection";
import SectionHeader from "@/components/ui/SectionHeader";

const comparisonFeatures = [
  { feature: "Live Channels", starter: "20,000+", pro: "20,000+", ultimate: "20,000+" },
  { feature: "Video Quality", starter: "HD / FHD", pro: "4K Ultra HD", ultimate: "4K + HDR" },
  { feature: "Simultaneous Connections", starter: "1", pro: "2", ultimate: "4" },
  { feature: "VOD Library", starter: true, pro: true, ultimate: true },
  { feature: "Series & Movies", starter: "Basic", pro: "Full", ultimate: "Full + Exclusive" },
  { feature: "EPG Guide", starter: "3 Days", pro: "7 Days", ultimate: "14 Days" },
  { feature: "Catch-Up TV", starter: false, pro: false, ultimate: "7 Days" },
  { feature: "Anti-Freeze Tech", starter: true, pro: true, ultimate: true },
  { feature: "24/7 Support", starter: "Standard", pro: "Priority", ultimate: "VIP" },
  { feature: "Setup Assistance", starter: false, pro: true, ultimate: true },
  { feature: "Multi-Screen", starter: false, pro: true, ultimate: true },
];

function FeatureValue({ value }: { value: boolean | string }) {
  if (value === true) return <Check className="w-5 h-5 text-green-400 mx-auto" />;
  if (value === false) return <X className="w-5 h-5 text-gray-600 mx-auto" />;
  return <span className="text-white text-sm font-medium">{value}</span>;
}

export default function ProductsPageClient() {
  return (
    <div className="min-h-screen pt-24 pb-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900" />
      <div className="glow-blob w-[500px] h-[500px] bg-purple-600 -top-64 right-0 opacity-10" />
      <div className="glow-blob w-[400px] h-[400px] bg-cyan-500 bottom-0 -left-64 opacity-8" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20 pt-10">
          <SectionHeader
            eyebrow="Pricing Plans"
            title="Simple, Transparent "
            highlight="Pricing"
            description="All plans include 20,000+ channels, VOD library, and 24/7 support. No contracts, cancel anytime."
          />

          {/* Benefits strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-6 mt-8"
          >
            {[
              { icon: Shield, text: "30-Day Money Back Guarantee" },
              { icon: Zap, text: "Instant Activation" },
              { icon: Star, text: "No Contract Required" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-sm text-gray-300">
                <Icon className="w-4 h-4 text-cyan-400" />
                {text}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-24">
          {plans.map((plan, index) => (
            <PricingCard key={plan.name} plan={plan} index={index} />
          ))}
        </div>

        {/* Comparison table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-2xl font-black text-white text-center mb-8">
            Full Plan <span className="gradient-text">Comparison</span>
          </h2>

          <div className="glass rounded-2xl border border-white/10 overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left p-4 text-gray-400 font-medium text-sm w-1/3">
                    Feature
                  </th>
                  <th className="p-4 text-center">
                    <div className="text-white font-bold">Starter</div>
                    <div className="text-cyan-400 text-sm font-semibold">$14.99/mo</div>
                  </th>
                  <th className="p-4 text-center relative">
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 bg-purple-500 text-white text-xs px-2 py-0.5 rounded-full">
                      Popular
                    </div>
                    <div className="text-white font-bold mt-3">Pro</div>
                    <div className="text-purple-400 text-sm font-semibold">$9.99/mo</div>
                  </th>
                  <th className="p-4 text-center">
                    <div className="text-white font-bold">Ultimate</div>
                    <div className="text-pink-400 text-sm font-semibold">$6.99/mo</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((row, index) => (
                  <tr
                    key={row.feature}
                    className={`border-b border-white/5 ${
                      index % 2 === 0 ? "bg-white/[0.01]" : ""
                    }`}
                  >
                    <td className="p-4 text-gray-300 text-sm">{row.feature}</td>
                    <td className="p-4 text-center">
                      <FeatureValue value={row.starter} />
                    </td>
                    <td className="p-4 text-center bg-purple-500/5">
                      <FeatureValue value={row.pro} />
                    </td>
                    <td className="p-4 text-center">
                      <FeatureValue value={row.ultimate} />
                    </td>
                  </tr>
                ))}
                <tr>
                  <td className="p-4" />
                  <td className="p-4">
                    <Link
                      href="/checkout?plan=Starter&price=14.99"
                      className="flex items-center justify-center gap-1.5 w-full glass border border-white/20 text-white text-sm font-semibold py-2.5 rounded-xl hover:bg-white/10 transition-colors"
                    >
                      <Zap className="w-3.5 h-3.5" />
                      Choose
                    </Link>
                  </td>
                  <td className="p-4 bg-purple-500/5">
                    <Link
                      href="/checkout?plan=Pro&price=9.99"
                      className="flex items-center justify-center gap-1.5 w-full bg-gradient-to-r from-purple-500 to-violet-600 text-white text-sm font-semibold py-2.5 rounded-xl hover:shadow-lg hover:shadow-purple-500/30 transition-all"
                    >
                      <Zap className="w-3.5 h-3.5" />
                      Choose
                    </Link>
                  </td>
                  <td className="p-4">
                    <Link
                      href="/checkout?plan=Ultimate&price=6.99"
                      className="flex items-center justify-center gap-1.5 w-full glass border border-white/20 text-white text-sm font-semibold py-2.5 rounded-xl hover:bg-white/10 transition-colors"
                    >
                      <Zap className="w-3.5 h-3.5" />
                      Choose
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Free trial CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-3xl p-10 border border-white/10 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-purple-500/5 to-pink-500/5" />
          <div className="relative">
            <div className="text-5xl mb-4">🎬</div>
            <h2 className="text-3xl font-black text-white mb-3">
              Not Sure Yet?{" "}
              <span className="gradient-text">Try It Free</span>
            </h2>
            <p className="text-gray-400 mb-8 max-w-lg mx-auto">
              Request a free 24-hour trial and test our service on your device before
              subscribing. No credit card required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/1234567890?text=Hi!%20I%20would%20like%20to%20request%20a%20free%20trial%20of%20StreamVault."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-2xl transition-colors shadow-lg shadow-green-500/20"
              >
                <MessageCircle className="w-5 h-5" />
                Request Trial on WhatsApp
              </a>
              <a
                href="mailto:support@streamvault.tv?subject=Free Trial Request"
                className="flex items-center justify-center gap-2 glass border border-white/20 text-white font-bold px-8 py-4 rounded-2xl hover:bg-white/10 transition-colors"
              >
                <Mail className="w-5 h-5" />
                Request via Email
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
