"use client";

import GlassCard from "./GlassCard";
import { Tv, Film, Zap, Shield, MonitorSmartphone, Headphones } from "lucide-react";
import type { Feature } from "@/types";

const iconMap = {
  tv: Tv,
  film: Film,
  zap: Zap,
  shield: Shield,
  devices: MonitorSmartphone,
  headphones: Headphones,
} as const;

interface FeatureCardProps {
  feature: Feature;
  index: number;
}

export default function FeatureCard({ feature, index }: FeatureCardProps) {
  const Icon = iconMap[feature.icon as keyof typeof iconMap] ?? Tv;

  return (
    <GlassCard delay={index * 0.1} glow="blue" className="group">
      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
        <Icon size={24} className="text-neon-blue" />
      </div>
      <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
      <p className="text-muted text-sm leading-relaxed">{feature.description}</p>
    </GlassCard>
  );
}
