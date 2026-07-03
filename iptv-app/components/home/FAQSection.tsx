"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const faqs = [
  {
    q: "What is IPTV and how does StreamVault work?",
    a: "IPTV (Internet Protocol Television) delivers TV channels and content through your internet connection instead of traditional cable or satellite. StreamVault streams 20,000+ channels directly to your device via our high-performance servers. Simply subscribe, receive your credentials, and start watching instantly.",
  },
  {
    q: "Which devices are compatible with StreamVault?",
    a: "StreamVault works on virtually any device: Smart TVs (Samsung, LG, Sony), Android phones & tablets, iPhones & iPads, Amazon Firestick & Fire TV, Apple TV, MAG boxes, Enigma2 receivers, Windows/Mac computers, Android TV boxes, Roku, and any device with a compatible media player app.",
  },
  {
    q: "How long does it take to get started after subscribing?",
    a: "Activation is instant! Once you complete your payment via WhatsApp or email, you'll receive your subscription credentials within minutes. Simply enter them into your preferred IPTV player and you're ready to stream.",
  },
  {
    q: "What video quality does StreamVault support?",
    a: "StreamVault offers channels in various qualities: SD, HD (720p), Full HD (1080p), and 4K Ultra HD. The available quality depends on the original broadcast source and your internet speed. We recommend at least 25 Mbps for 4K content.",
  },
  {
    q: "How many devices can I use simultaneously?",
    a: "This depends on your plan. The Starter plan allows 1 simultaneous connection, Pro allows 2 connections, and Ultimate allows up to 4 simultaneous connections. You can install the app on as many devices as you like — only the simultaneous streams are limited.",
  },
  {
    q: "What happens if I experience buffering or freezing?",
    a: "StreamVault uses advanced anti-freeze technology and redundant servers to minimize interruptions. If you ever experience issues, our 24/7 support team can help immediately. Issues are typically resolved within minutes. We also offer server switching to find the optimal stream for your location.",
  },
  {
    q: "Can I get a free trial before subscribing?",
    a: "Yes! Contact us via WhatsApp or email to request a free 24-hour trial. This lets you test channel quality and compatibility on your device before committing to a subscription.",
  },
  {
    q: "What payment methods are accepted?",
    a: "We accept payments via WhatsApp and email coordination. Our support team will guide you through secure payment options including credit/debit cards, PayPal, cryptocurrency, and other methods. Contact us to discuss the most convenient option for you.",
  },
];

function FAQItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="glass rounded-2xl border border-white/10 overflow-hidden"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors duration-200"
        aria-expanded={open}
      >
        <span className="text-white font-semibold text-base pr-4 leading-snug">
          {faq.q}
        </span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0"
        >
          <ChevronDown className={`w-5 h-5 ${open ? "text-cyan-400" : "text-gray-400"}`} />
        </motion.div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 pb-6 pt-0 border-t border-white/10">
              <p className="text-gray-400 text-sm leading-relaxed pt-4">{faq.a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQSection() {
  return (
    <section id="faq" className="py-24 relative overflow-hidden">
      <div className="glow-blob w-80 h-80 bg-blue-600 bottom-0 right-1/4 opacity-8" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <SectionHeader
            eyebrow="FAQ"
            title="Got "
            highlight="Questions?"
            description="Everything you need to know about StreamVault. Can't find an answer? Chat with us on WhatsApp."
          />
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <FAQItem key={faq.q} faq={faq} index={index} />
          ))}
        </div>

        {/* Still have questions CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 glass rounded-2xl p-8 border border-white/10 text-center"
        >
          <h3 className="text-white font-bold text-xl mb-2">Still have questions?</h3>
          <p className="text-gray-400 mb-6 text-sm">
            Our support team is available 24/7 via WhatsApp and email.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-xl transition-colors duration-200"
            >
              💬 Chat on WhatsApp
            </a>
            <a
              href="mailto:support@streamvault.tv"
              className="flex items-center justify-center gap-2 glass border border-white/20 text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/10 transition-colors duration-200"
            >
              📧 Send Email
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
