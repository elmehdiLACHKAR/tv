import Link from "next/link";

type ButtonProps = {
  href?: string;
  variant?: "primary" | "secondary" | "ghost" | "whatsapp";
  size?: "md" | "lg";
  className?: string;
  children: React.ReactNode;
  external?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-neon-400 focus-visible:ring-offset-2 focus-visible:ring-offset-night-950 disabled:cursor-not-allowed disabled:opacity-50";

const variants = {
  primary:
    "bg-gradient-to-r from-neon-500 to-violet-500 text-white shadow-glow-blue hover:shadow-glow-violet hover:brightness-110 hover:-translate-y-0.5",
  secondary:
    "glass text-slate-100 hover:border-neon-400/50 hover:text-white hover:-translate-y-0.5",
  ghost: "text-slate-300 hover:text-white hover:bg-white/5",
  whatsapp:
    "bg-emerald-500 text-white shadow-[0_0_40px_-8px_rgba(16,185,129,0.5)] hover:bg-emerald-400 hover:-translate-y-0.5",
};

const sizes = {
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

export default function Button({
  href,
  variant = "primary",
  size = "md",
  className = "",
  children,
  external = false,
  ...rest
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
