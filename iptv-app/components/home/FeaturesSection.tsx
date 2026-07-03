"use client";

import { motion } from "framer-motion";
import {
  Tv,
  Smartphone,
  Globe,
  Zap,
  Shield,
  HeadphonesIcon,
  MonitorPlay,
  Wifi,
} from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const features = [
  {
    icon: Tv,
    title: "20,000+ Live Channels",
    description:
      "Access an enormous library of live TV channels from around the world, including sports, news, entertainment, and more.",
    color: "from-cyan-500 to-blue-600",
    glow: "group-hover:shadow-cyan-500/20",
  },
  {
    icon: MonitorPlay,
    title: "4K Ultra HD Streaming",
    description:
      "Enjoy crystal-clear picture quality with 4K, HDR, and Dolby Vision support on compatible devices.",
    color: "from-purple-500 to-violet-600",
    glow: "group-hover:shadow-purple-500/20",
  },
  {
    icon: Smartphone,
    title: "Any Device, Anywhere",
    description:
      "Stream on Smart TVs, phones, tablets, PCs, MAG, Firestick, and more. One subscription, all your screens.",
    color: "from-pink-500 to-rose-600",
    glow: "group-hover:shadow-pink-500/20",
  },
  {
    icon: Globe,
    title: "Global Content Library",
    description:
      "Channels from 150+ countries — sports leagues, international news, local programming, and exclusive content.",
    color: "from-amber-500 to-orange-600",
    glow: "group-hover:shadow-amber-500/20",
  },
  {
    icon: Zap,
    title: "Instant Activation",
    description:
      "Start streaming within minutes of subscribing. No hardware, no waiting — just instant access.",
    color: "from-green-500 to-emerald-600",
    glow: "group-hover:shadow-green-500/20",
  },
  {
    icon: Shield,
    title: "Anti-Freeze Technology",
    description:
      "Our advanced buffering system eliminates freezing and buffering, ensuring a smooth viewing experience.",
    color: "from-cyan-500 to-teal-600",
    glow: "group-hover:shadow-teal-500/20",
  },
  {
    icon: Wifi,
    title: "99.9% Uptime Guarantee",
    description:
      "Reliable, redundant servers distributed globally ensure your streams are always on and available.",
    color: "from-violet-500 to-purple-600",
    glow: "group-hover:shadow-violet-500/20",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Premium Support",
    description:
      "Our expert team is available around the clock via WhatsApp, email, and live chat to help you.",
    color: "from-rose-500 to-pink-600",
    glow: "group-hover:shadow-rose-500/20",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="glow-blob w-96 h-96 bg-purple-600 top-0 right-0 opacity-10" />
      <div className="glow-blob w-64 h-64 bg-cyan-500 bottom-0 left-0 opacity-8" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <SectionHeader
            eyebrow="Why StreamVault"
            title="Everything You Need to "
            highlight="Stream Smarter"
            description="From live sports to blockbuster movies, we deliver the complete entertainment experience with professional-grade technology."
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              className={`group glass rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 card-hover ${feature.glow} hover:shadow-xl`}
            >
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 shadow-lg`}
              >
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-bold mb-2 text-lg leading-tight">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 glass rounded-3xl p-8 sm:p-12 border border-white/10 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5" />
          <div className="relative">
            <h3 className="text-2xl sm:text-3xl font-black text-white mb-3">
              Compatible with{" "}
              <span className="gradient-text">All Your Devices</span>
            </h3>
            <p className="text-gray-400 mb-6 max-w-xl mx-auto">
              Smart TV, Android, iOS, Windows, Mac, MAG, Enigma2, Firestick, Roku, and more.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {["Smart TV", "iOS", "Android", "Windows", "Firestick", "MAG Box", "Roku", "Apple TV"].map(
                (device) => (
                  <span
                    key={device}
                    className="glass px-4 py-2 rounded-full text-sm text-gray-300 border border-white/10"
                  >
                    {device}
                  </span>
                )
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
