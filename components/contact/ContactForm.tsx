"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Icon from "@/components/ui/Icon";
import { mailtoLink, whatsappLink } from "@/lib/site";

const inputClasses =
  "w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-slate-500 transition-colors focus:border-neon-400/60 focus:outline-none focus:ring-1 focus:ring-neon-400/40";

const subjects = [
  "Free trial request",
  "Pre-sale question",
  "Setup help",
  "Billing / renewal",
  "Other",
];

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState(subjects[0]);
  const [message, setMessage] = useState("");

  const composed = [
    `Subject: ${subject}`,
    `Name: ${name || "—"}`,
    `Email: ${email || "—"}`,
    "",
    message || "(no message)",
  ].join("\n");

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.21, 0.65, 0.36, 1] }}
      className="glass rounded-3xl p-8 shadow-card"
    >
      <h2 className="font-display text-xl font-semibold text-white">
        Send us a message
      </h2>
      <p className="mt-1 text-sm text-slate-400">
        Fill in the form and deliver it via WhatsApp or email — whichever you
        prefer.
      </p>

      <form
        className="mt-8 flex flex-col gap-5"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="contact-name" className="mb-2 block text-sm font-medium text-slate-300">
              Full name
            </label>
            <input
              id="contact-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="John Doe"
              className={inputClasses}
            />
          </div>
          <div>
            <label htmlFor="contact-email" className="mb-2 block text-sm font-medium text-slate-300">
              Email address
            </label>
            <input
              id="contact-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@email.com"
              className={inputClasses}
            />
          </div>
        </div>

        <div>
          <label htmlFor="contact-subject" className="mb-2 block text-sm font-medium text-slate-300">
            Subject
          </label>
          <select
            id="contact-subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className={`${inputClasses} appearance-none`}
          >
            {subjects.map((s) => (
              <option key={s} value={s} className="bg-night-800">
                {s}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="contact-message" className="mb-2 block text-sm font-medium text-slate-300">
            Message
          </label>
          <textarea
            id="contact-message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Tell us how we can help..."
            rows={5}
            className={`${inputClasses} resize-none`}
          />
        </div>

        <div className="mt-2 flex flex-col gap-3 sm:flex-row">
          <a
            href={whatsappLink(composed)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-emerald-500 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_0_40px_-8px_rgba(16,185,129,0.5)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-400"
          >
            <Icon name="whatsapp" className="h-5 w-5" />
            Send via WhatsApp
          </a>
          <a
            href={mailtoLink(`[Contact] ${subject}`, composed)}
            className="glass inline-flex flex-1 items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-slate-100 transition-all duration-300 hover:-translate-y-0.5 hover:border-neon-400/50 hover:text-white"
          >
            <Icon name="mail" className="h-5 w-5 text-neon-300" />
            Send via Email
          </a>
        </div>
      </form>
    </motion.div>
  );
}
