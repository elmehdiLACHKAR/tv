import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { AnimatedBackground } from "@/components/animated-background";

export function PageHeader({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("relative overflow-hidden pb-16 pt-14 sm:pt-20", className)}>
      <AnimatedBackground />
      <Container className="flex flex-col items-center gap-5 text-center">
        <Badge>{eyebrow}</Badge>
        <h1 className="font-display max-w-3xl text-4xl font-bold tracking-tight text-balance sm:text-5xl md:text-6xl">
          {title}
        </h1>
        {description ? (
          <p className="max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            {description}
          </p>
        ) : null}
      </Container>
    </section>
  );
}
