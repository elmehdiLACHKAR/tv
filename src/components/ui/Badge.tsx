interface BadgeProps {
  children: React.ReactNode;
  variant?: "popular" | "new" | "default";
}

const variants = {
  popular: "bg-gradient-to-r from-neon-blue to-neon-purple text-white",
  new: "bg-neon-blue/20 text-neon-blue border border-neon-blue/30",
  default: "bg-white/10 text-white/80",
};

export default function Badge({ children, variant = "default" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${variants[variant]}`}
    >
      {children}
    </span>
  );
}
