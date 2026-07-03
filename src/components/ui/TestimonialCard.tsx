"use client";

import GlassCard from "./GlassCard";
import { Star } from "lucide-react";
import type { Testimonial } from "@/types";

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
}

export default function TestimonialCard({ testimonial, index }: TestimonialCardProps) {
  return (
    <GlassCard delay={index * 0.1} className="flex flex-col h-full">
      <div className="flex gap-1 mb-4">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
        ))}
      </div>
      <p className="text-sm md:text-base leading-relaxed mb-6 flex-1">
        &ldquo;{testimonial.content}&rdquo;
      </p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-neon-blue to-neon-purple flex items-center justify-center text-sm font-bold">
          {testimonial.avatar}
        </div>
        <div>
          <p className="font-semibold text-sm">{testimonial.name}</p>
          <p className="text-muted text-xs">{testimonial.role}</p>
        </div>
      </div>
    </GlassCard>
  );
}
