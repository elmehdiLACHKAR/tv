"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";

export default function CTASection() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/20 via-neon-purple/20 to-neon-pink/20" />
          <div className="absolute inset-0 glass" />
          <div className="relative px-8 py-16 md:px-16 md:py-20 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Ready to Cut the Cord?
            </h2>
            <p className="text-muted text-lg md:text-xl max-w-2xl mx-auto mb-8">
              Join over 50,000 happy streamers. Get instant access to premium
              channels starting at just $14.99/month.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/products" size="lg">
                View All Plans
                <ArrowRight size={20} />
              </Button>
              <Button href="/contact" variant="outline" size="lg">
                Contact Support
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
