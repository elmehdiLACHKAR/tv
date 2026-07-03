"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { faqs } from "@/lib/content";

function FaqItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={`glass overflow-hidden rounded-2xl transition-colors duration-300 ${
        isOpen ? "border-neon-400/40" : "hover:border-white/20"
      }`}
    >
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="font-medium text-white">{question}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className={`shrink-0 ${isOpen ? "text-neon-300" : "text-slate-500"}`}
        >
          <Icon name="chevronDown" className="h-5 w-5" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <p className="px-6 pb-6 text-sm leading-relaxed text-slate-400">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="mx-auto max-w-4xl scroll-mt-24 px-4 py-24 sm:px-6">
      <SectionHeading
        eyebrow="FAQ"
        title={
          <>
            Questions? <span className="text-gradient">We&apos;ve got answers</span>
          </>
        }
        subtitle="Everything you need to know before you start streaming. Still unsure? Message us on WhatsApp anytime."
      />

      <div className="flex flex-col gap-4">
        {faqs.map((faq, index) => (
          <Reveal key={faq.question} delay={index * 0.05} y={16}>
            <FaqItem
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
