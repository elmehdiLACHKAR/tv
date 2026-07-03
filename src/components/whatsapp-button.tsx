"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/site-config";

export function WhatsAppButton({
  message = "Hi! I'd like to know more about Nebula Stream subscriptions.",
}: {
  message?: string;
}) {
  return (
    <motion.a
      href={buildWhatsAppLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed bottom-6 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-6px_rgba(37,211,102,0.7)] sm:bottom-8 sm:right-8"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 260, damping: 18 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.94 }}
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366]/50" />
      <MessageCircle className="relative h-7 w-7" fill="currentColor" strokeWidth={0} />
      <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-lg bg-surface-2 px-3 py-1.5 text-sm font-medium text-foreground opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100 sm:block">
        Chat with us
      </span>
    </motion.a>
  );
}
