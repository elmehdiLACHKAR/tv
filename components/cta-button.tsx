import Link from "next/link";
import type { ReactNode } from "react";

type CtaButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export function CtaButton({
  href,
  children,
  variant = "primary",
  className = "",
}: CtaButtonProps) {
  const styles =
    variant === "primary"
      ? "bg-gradient-to-r from-cyan-300 via-sky-400 to-violet-500 text-slate-950 shadow-[0_0_36px_rgba(38,217,255,0.34)] hover:shadow-[0_0_46px_rgba(139,92,246,0.36)]"
      : "border border-white/15 bg-white/[0.04] text-white hover:border-cyan-200/50 hover:bg-cyan-300/10";

  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-black transition duration-300 hover:-translate-y-0.5 ${styles} ${className}`}
    >
      {children}
    </Link>
  );
}
