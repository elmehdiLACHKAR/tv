import { cn } from "@/lib/utils";

export function GlassCard({
  children,
  className,
  strong = false,
}: {
  children: React.ReactNode;
  className?: string;
  strong?: boolean;
}) {
  return (
    <div
      className={cn(
        "rounded-3xl",
        strong ? "glass-strong" : "glass",
        className
      )}
    >
      {children}
    </div>
  );
}
