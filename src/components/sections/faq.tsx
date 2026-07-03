"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Container } from "@/components/ui/container";
import { faqs } from "@/data/faqs";
import { cn } from "@/lib/utils";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 sm:py-32">
      <Container className="max-w-3xl">
        <SectionHeading
          eyebrow="Got questions?"
          title={
            <>
              Frequently asked <span className="gradient-text">questions</span>
            </>
          }
          description="Everything you need to know before you subscribe. Can't find your answer? Reach out on WhatsApp anytime."
        />

        <div className="mt-12 flex flex-col gap-3">
          {faqs.map((faq, index) => {
            const open = openIndex === index;
            return (
              <div
                key={faq.question}
                className={cn(
                  "overflow-hidden rounded-2xl border transition-colors",
                  open ? "border-primary/40 bg-white/[0.04]" : "border-border bg-surface/50"
                )}
              >
                <button
                  onClick={() => setOpenIndex(open ? null : index)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
                >
                  <span className="font-medium text-foreground">{faq.question}</span>
                  <motion.span
                    animate={{ rotate: open ? 45 : 0 }}
                    transition={{ duration: 0.25 }}
                    className={cn(
                      "flex h-8 w-8 shrink-0 items-center justify-center rounded-full",
                      open ? "bg-primary/20 text-primary-2" : "bg-white/5 text-muted"
                    )}
                  >
                    <Plus className="h-4 w-4" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {open ? (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-sm leading-relaxed text-muted sm:px-6">
                        {faq.answer}
                      </p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
