"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { buildWhatsAppLink } from "@/lib/site-config";

export function CTA() {
  return (
    <section className="relative py-20 sm:py-28">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="glow-border glass-strong relative overflow-hidden rounded-[2rem] px-6 py-14 text-center sm:px-16 sm:py-20"
        >
          <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-primary/25 blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-24 right-0 h-64 w-64 rounded-full bg-secondary/25 blur-[100px]" />

          <h2 className="relative font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl md:text-5xl">
            Ready to upgrade your <span className="gradient-text">streaming experience?</span>
          </h2>
          <p className="relative mx-auto mt-5 max-w-xl text-base text-muted sm:text-lg">
            Join thousands of subscribers streaming premium IPTV in 4K. Setup is
            instant and support is one message away.
          </p>
          <div className="relative mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/plans" size="lg">
              View Pricing Plans <ArrowRight className="h-5 w-5" />
            </Button>
            <Button
              href={buildWhatsAppLink("Hi! I'd like to subscribe to Nebula Stream.")}
              external
              size="lg"
              variant="secondary"
            >
              <MessageCircle className="h-5 w-5" /> Chat on WhatsApp
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
