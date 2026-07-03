import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center text-center">
      <p className="font-display text-7xl font-bold text-gradient">404</p>
      <h1 className="mt-4 font-display text-2xl font-bold text-white sm:text-3xl">
        Signal lost
      </h1>
      <p className="mt-3 max-w-md text-white/60">
        The page you&apos;re looking for isn&apos;t on our network. Let&apos;s get
        you back to streaming.
      </p>
      <div className="mt-8 flex gap-3">
        <Button href="/">Back home</Button>
        <Button href="/plans" variant="secondary">
          View plans
        </Button>
      </div>
    </Container>
  );
}
