"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { faqs } from "@/lib/data";
import { SectionHeading } from "./section-heading";

export function FaqSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="px-5 py-24 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHeading
          eyebrow="FAQ"
          title="Questions before you stream?"
          description="A compact FAQ answers the biggest purchase objections and routes users to support when they need more help."
          align="left"
        />

        <div className="grid gap-4">
          {faqs.map((faq, index) => {
            const open = active === index;

            return (
              <div key={faq.question} className="glass-card rounded-3xl p-5">
                <button
                  className="flex w-full items-center justify-between gap-5 text-left"
                  onClick={() => setActive(open ? -1 : index)}
                >
                  <span className="font-[var(--font-jakarta)] text-lg font-black text-white">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`shrink-0 text-cyan-200 transition ${open ? "rotate-180" : ""}`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="pt-4 text-sm leading-6 text-slate-400">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
