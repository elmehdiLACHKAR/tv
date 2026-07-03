"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const defaultVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export function AnimatedSection({
  children,
  className,
  delay = 0,
  variants = defaultVariants,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  variants?: Variants;
  as?: "div" | "span";
}) {
  const MotionTag = as === "span" ? motion.span : motion.div;
  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
      variants={variants}
    >
      {children}
    </MotionTag>
  );
}
