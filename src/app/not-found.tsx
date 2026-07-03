import { Tv } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { AnimatedBackground } from "@/components/animated-background";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden py-20">
      <AnimatedBackground />
      <Container className="flex flex-col items-center gap-6 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary-2">
          <Tv className="h-8 w-8" />
        </div>
        <h1 className="font-display text-3xl font-bold sm:text-4xl">
          404 — Signal lost
        </h1>
        <p className="max-w-md text-muted">
          We couldn&apos;t find the page you were looking for. It may have been
          moved, or the channel simply isn&apos;t broadcasting from here.
        </p>
        <Button href="/">Back to homepage</Button>
      </Container>
    </section>
  );
}
