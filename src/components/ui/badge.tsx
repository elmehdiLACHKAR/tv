import { cn } from "@/lib/utils";

export function Badge({
  children,
  className,
  variant = "default",
}: {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "outline" | "solid";
}) {
  const styles = {
    default:
      "bg-primary/10 text-primary-2 border border-primary/25",
    outline: "border border-border text-muted",
    solid:
      "text-white bg-[linear-gradient(100deg,var(--primary-2),var(--secondary))]",
  } as const;

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider",
        styles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
