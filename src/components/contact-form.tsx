"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { buildMailtoLink } from "@/lib/site-config";

const inputStyles =
  "w-full rounded-xl border border-border bg-white/[0.03] px-4 py-3 text-sm text-foreground placeholder:text-muted/70 outline-none transition-colors focus:border-primary/50 focus:bg-white/[0.05]";
const labelStyles = "text-sm font-medium text-foreground/90";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("General inquiry");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const mailto = buildMailtoLink({
      subject: `[Contact] ${subject} — ${name || "New message"}`,
      body: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });
    window.location.href = mailto;
    setSubmitted(true);
  }

  return (
    <GlassCard className="p-6 sm:p-8">
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div className="flex flex-col gap-2">
            <label className={labelStyles} htmlFor="contact-name">
              Full name
            </label>
            <input
              id="contact-name"
              required
              className={inputStyles}
              placeholder="Alex Johnson"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className={labelStyles} htmlFor="contact-email">
              Email address
            </label>
            <input
              id="contact-email"
              type="email"
              required
              className={inputStyles}
              placeholder="you@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className={labelStyles} htmlFor="contact-subject">
            Subject
          </label>
          <select
            id="contact-subject"
            className={`${inputStyles} appearance-none`}
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          >
            <option className="bg-surface">General inquiry</option>
            <option className="bg-surface">Billing question</option>
            <option className="bg-surface">Technical support</option>
            <option className="bg-surface">Reseller / Business</option>
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label className={labelStyles} htmlFor="contact-message">
            Message
          </label>
          <textarea
            id="contact-message"
            required
            rows={5}
            className={inputStyles}
            placeholder="Tell us how we can help..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>

        <Button size="lg" className="mt-2 w-full justify-center sm:w-auto">
          <Send className="h-4 w-4" /> Send Message
        </Button>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 rounded-xl border border-primary/30 bg-primary/10 px-4 py-3 text-sm text-primary-2"
          >
            <CheckCircle2 className="h-4 w-4" />
            Opening your email app to send the message — see you soon!
          </motion.div>
        ) : null}
      </form>
    </GlassCard>
  );
}
