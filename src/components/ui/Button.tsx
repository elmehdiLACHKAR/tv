"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { type ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  type?: "button" | "submit";
  external?: boolean;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-gradient-to-r from-neon-blue to-neon-purple text-white shadow-lg shadow-neon-blue/20 hover:shadow-neon-purple/30 hover:scale-[1.02]",
  secondary:
    "bg-white/10 text-white border border-white/10 hover:bg-white/15 hover:border-white/20",
  outline:
    "border border-neon-blue/50 text-neon-blue hover:bg-neon-blue/10 hover:border-neon-blue",
  ghost: "text-muted hover:text-white hover:bg-white/5",
};

const sizes: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
  external = false,
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-2xl font-semibold transition-all duration-300 cursor-pointer ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    if (external) {
      return (
        <motion.a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {children}
        </motion.a>
      );
    }
    return (
      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        <Link href={href} className={classes}>
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={classes}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.button>
  );
}
