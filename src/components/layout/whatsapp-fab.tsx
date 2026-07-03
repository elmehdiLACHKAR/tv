"use client";

import { motion } from "framer-motion";
import { siteConfig, whatsappLink } from "@/lib/site";
import { WhatsApp } from "@/components/icons";

export function WhatsAppFab() {
  return (
    <motion.a
      href={whatsappLink(`Hi ${siteConfig.name}, I'd like to know more about your plans.`)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_40px_-8px_rgba(37,211,102,0.7)]"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.94 }}
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366]/40" />
      <WhatsApp className="relative h-7 w-7" />
    </motion.a>
  );
}
