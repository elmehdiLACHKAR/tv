"use client";

import { Clapperboard, Sparkles, Tv, type LucideIcon } from "lucide-react";
import { streamingLibrary } from "@/lib/data";
import { Marquee } from "./marquee";
import { SectionHeading } from "./section-heading";

const typeStyles: Record<string, { icon: LucideIcon; badge: string }> = {
  Movie: { icon: Clapperboard, badge: "bg-cyan-300/15 text-cyan-200" },
  Series: { icon: Tv, badge: "bg-violet-400/15 text-violet-200" },
  Anime: { icon: Sparkles, badge: "bg-fuchsia-400/15 text-fuchsia-200" },
};

export function StreamingSlider() {
  return (
    <section className="px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="On-demand library"
          title="Binge-ready movies, series and anime."
          description="A growing on-demand library alongside your live channels, refreshed with new movies, series and anime titles."
          align="left"
        />
      </div>

      <div className="relative mt-10">
        <Marquee direction="reverse" speedSeconds={38}>
          {streamingLibrary.map((item) => {
            const style = typeStyles[item.type] ?? typeStyles.Movie;
            const Icon = style.icon;

            return (
              <div
                key={item.title}
                className="glass-card w-56 shrink-0 overflow-hidden rounded-2xl p-4"
              >
                <div className="mb-4 flex aspect-[3/4] items-center justify-center rounded-xl bg-gradient-to-br from-slate-800 via-slate-900 to-violet-950">
                  <Icon size={32} className="text-cyan-200/70" />
                </div>
                <span
                  className={`inline-flex rounded-full px-2.5 py-1 text-[10px] font-black uppercase tracking-wide ${style.badge}`}
                >
                  {item.type}
                </span>
                <p className="mt-2 truncate text-sm font-bold text-white">{item.title}</p>
                <p className="text-xs text-slate-400">{item.genre}</p>
              </div>
            );
          })}
        </Marquee>
      </div>
    </section>
  );
}
