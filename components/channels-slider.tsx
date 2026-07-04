"use client";

import {
  Baby,
  Briefcase,
  CloudSun,
  Music2,
  Newspaper,
  Radio,
  Trophy,
  type LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import { channels } from "@/lib/data";
import { Marquee } from "./marquee";
import { SectionHeading } from "./section-heading";

const categoryIcons: Record<string, LucideIcon> = {
  "American Football": Trophy,
  Basketball: Trophy,
  Baseball: Trophy,
  Hockey: Trophy,
  News: Newspaper,
  Movies: Radio,
  Family: Baby,
  Music: Music2,
  Finance: Briefcase,
  Weather: CloudSun,
};

export function ChannelsSlider() {
  return (
    <section className="px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Live channel lineup"
          title="Every American sport and channel, streaming live."
          description="From NFL football to national news and family entertainment, browse a sample of the U.S. channels included in every StreamNova plan."
          align="left"
        />
      </div>

      <div className="relative mt-10">
        <Marquee speedSeconds={34}>
          {channels.map((channel) => {
            const Icon = categoryIcons[channel.category] ?? Radio;
            const isFeatured = channel.category === "American Football";

            return (
              <div
                key={channel.name}
                className={`glass-card flex w-64 shrink-0 items-center gap-4 rounded-2xl p-4 ${
                  isFeatured ? "neon-ring" : ""
                }`}
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-300/25 to-violet-500/25 text-cyan-200">
                  <Icon size={22} />
                </div>
                <div className="min-w-0">
                  <p className="truncate text-sm font-bold text-white">{channel.name}</p>
                  <p className="mt-1 text-xs text-slate-400">{channel.category}</p>
                </div>
                {isFeatured && (
                  <motion.span
                    animate={{ opacity: [1, 0.4, 1] }}
                    transition={{ duration: 1.6, repeat: Infinity }}
                    className="ml-auto shrink-0 rounded-full bg-red-500/90 px-2 py-1 text-[10px] font-black uppercase tracking-wide text-white"
                  >
                    Live
                  </motion.span>
                )}
              </div>
            );
          })}
        </Marquee>
      </div>
    </section>
  );
}
