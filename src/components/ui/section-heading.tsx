import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection } from "@/components/animated-section";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <AnimatedSection
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {eyebrow ? <Badge>{eyebrow}</Badge> : null}
      <h2
        className={cn(
          "font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-balance",
          align === "center" ? "max-w-3xl" : "max-w-2xl"
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "text-muted text-base sm:text-lg leading-relaxed text-balance",
            align === "center" ? "max-w-2xl" : "max-w-xl"
          )}
        >
          {description}
        </p>
      ) : null}
    </AnimatedSection>
  );
}
