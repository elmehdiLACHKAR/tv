"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";

const categories = [
  { name: "Sports", icon: "⚽", count: "2,500+" },
  { name: "Movies", icon: "🎬", count: "10,000+" },
  { name: "News", icon: "📰", count: "500+" },
  { name: "Kids", icon: "🧒", count: "300+" },
  { name: "Music", icon: "🎵", count: "400+" },
  { name: "Documentary", icon: "🎭", count: "800+" },
  { name: "Entertainment", icon: "🎪", count: "3,000+" },
  { name: "Series", icon: "📺", count: "5,000+" },
];

const sportsChannels = [
  "ESPN", "Fox Sports", "beIN Sports", "Sky Sports", "DAZN", "Eurosport",
  "NBA TV", "NFL Network", "MLB Network", "Premier Sports", "BT Sport", "TNT Sports",
];

const regions = [
  { flag: "🇺🇸", name: "USA", channels: "3,000+" },
  { flag: "🇬🇧", name: "UK", channels: "800+" },
  { flag: "🇫🇷", name: "France", channels: "600+" },
  { flag: "🇩🇪", name: "Germany", channels: "700+" },
  { flag: "🇪🇸", name: "Spain", channels: "500+" },
  { flag: "🇮🇹", name: "Italy", channels: "600+" },
  { flag: "🇦🇪", name: "Arabic", channels: "1,200+" },
  { flag: "🌍", name: "More", channels: "10,000+" },
];

export default function ChannelsSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-700/20 to-transparent" />
      <div className="glow-blob w-80 h-80 bg-cyan-600 top-1/2 -left-40 opacity-10" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <SectionHeader
            eyebrow="Content Library"
            title="Endless Entertainment "
            highlight="Awaits You"
            description="From live sports to on-demand movies — everything you love, all in one place."
          />
        </div>

        {/* Category grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.07 }}
              className="glass rounded-2xl p-5 border border-white/10 hover:border-cyan-500/30 text-center card-hover group transition-all duration-300"
            >
              <div className="text-4xl mb-3">{cat.icon}</div>
              <h3 className="text-white font-bold mb-1">{cat.name}</h3>
              <p className="text-cyan-400 text-sm font-semibold">{cat.count}</p>
            </motion.div>
          ))}
        </div>

        {/* Two column layout: sports + regions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Popular sports channels */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl p-6 border border-white/10"
          >
            <h3 className="text-white font-bold text-xl mb-6 flex items-center gap-2">
              ⚡ Top Sports Channels
            </h3>
            <div className="flex flex-wrap gap-2">
              {sportsChannels.map((ch) => (
                <span
                  key={ch}
                  className="glass px-3 py-1.5 rounded-lg text-sm text-gray-300 border border-white/10 hover:border-cyan-500/30 hover:text-cyan-400 transition-colors cursor-default"
                >
                  {ch}
                </span>
              ))}
            </div>
            <p className="text-gray-500 text-xs mt-4">+ 2,400 more sports channels</p>
          </motion.div>

          {/* Regions */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl p-6 border border-white/10"
          >
            <h3 className="text-white font-bold text-xl mb-6 flex items-center gap-2">
              🌍 Global Coverage
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {regions.map((region) => (
                <div
                  key={region.name}
                  className="flex items-center gap-3 glass px-3 py-2.5 rounded-xl border border-white/10"
                >
                  <span className="text-2xl">{region.flag}</span>
                  <div>
                    <p className="text-white font-medium text-sm">{region.name}</p>
                    <p className="text-cyan-400 text-xs font-semibold">{region.channels}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
