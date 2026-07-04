"use client";

import type { ReactNode } from "react";

type MarqueeProps = {
  children: ReactNode;
  direction?: "forward" | "reverse";
  speedSeconds?: number;
};

export function Marquee({
  children,
  direction = "forward",
  speedSeconds = 32,
}: MarqueeProps) {
  return (
    <div className="marquee-mask overflow-hidden">
      <div
        className="marquee-track gap-4 py-1"
        data-direction={direction === "reverse" ? "reverse" : undefined}
        style={{ animationDuration: `${speedSeconds}s` }}
      >
        <div className="flex shrink-0 gap-4">{children}</div>
        <div aria-hidden="true" className="flex shrink-0 gap-4">
          {children}
        </div>
      </div>
    </div>
  );
}
