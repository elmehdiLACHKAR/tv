"use client";

import { motion } from "framer-motion";
import { Cast, Laptop, MonitorSmartphone, Smartphone, Tv, Tv2 } from "lucide-react";
import { Container } from "@/components/ui/container";
import { devices } from "@/data/features";

const deviceIcons = [Tv, Cast, Smartphone, Tv2, MonitorSmartphone, Laptop, Tv, MonitorSmartphone];

export function Devices() {
  return (
    <section className="relative py-16">
      <Container>
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted">
          Works flawlessly on every device you already own
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {devices.map((device, index) => {
            const Icon = deviceIcons[index % deviceIcons.length];
            return (
              <motion.div
                key={device}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-2.5 text-sm text-foreground/85"
              >
                <Icon className="h-4 w-4 text-primary-2" />
                {device}
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
