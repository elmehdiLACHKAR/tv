"use client";

import { motion } from "framer-motion";
import Icon from "@/components/ui/Icon";
import { whatsappLink } from "@/lib/site";

export default function WhatsAppFloat() {
  return (
    <motion.a
      href={whatsappLink("Hi! I'd like to know more about NovaStream plans.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-[0_8px_32px_-4px_rgba(16,185,129,0.6)]"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.2, type: "spring", stiffness: 260, damping: 18 }}
      whileHover={{ scale: 1.12 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-emerald-500/40" />
      <Icon name="whatsapp" className="relative h-7 w-7" />
    </motion.a>
  );
}
