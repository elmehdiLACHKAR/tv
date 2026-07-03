import Icon from "@/components/ui/Icon";
import { channelCategories } from "@/lib/content";

export default function ChannelMarquee() {
  const items = [...channelCategories, ...channelCategories];

  return (
    <section className="relative border-y border-white/5 py-6" aria-label="Channel categories">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-night-950 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-night-950 to-transparent" />
      <div className="flex w-max animate-marquee gap-4">
        {items.map((category, i) => (
          <span
            key={`${category}-${i}`}
            className="glass flex items-center gap-2.5 whitespace-nowrap rounded-full px-6 py-2.5 text-sm font-medium text-slate-300"
          >
            <Icon name="play" className="h-3 w-3 text-neon-400" />
            {category}
          </span>
        ))}
      </div>
    </section>
  );
}
