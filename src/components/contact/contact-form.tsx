"use client";

import { useState, type FormEvent } from "react";
import { mailtoLink, siteConfig, whatsappLink } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Check, Mail, WhatsApp } from "@/components/icons";

const inputClass =
  "w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-white/35 outline-none transition-colors focus:border-neon-cyan/60 focus:bg-white/[0.05]";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const composed = [
    subject ? `Subject: ${subject}` : null,
    name ? `Name: ${name}` : null,
    email ? `Contact: ${email}` : null,
    message ? `\n${message}` : null,
  ]
    .filter(Boolean)
    .join("\n");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    window.open(mailtoLink(subject || `${siteConfig.name} enquiry`, composed), "_blank");
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="glass-card p-6 sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-white/70">Name</span>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="John Doe"
            className={inputClass}
          />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-white/70">
            Email / WhatsApp
          </span>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="you@email.com"
            className={inputClass}
          />
        </label>
      </div>

      <label className="mt-4 block">
        <span className="mb-1.5 block text-sm font-medium text-white/70">Subject</span>
        <input
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder="How can we help?"
          className={inputClass}
        />
      </label>

      <label className="mt-4 block">
        <span className="mb-1.5 block text-sm font-medium text-white/70">Message</span>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          rows={5}
          placeholder="Tell us a bit about what you need..."
          className={cn(inputClass, "resize-none")}
        />
      </label>

      {sent ? (
        <p className="mt-4 flex items-center gap-2 rounded-xl border border-neon-cyan/30 bg-neon-cyan/10 px-4 py-3 text-sm text-neon-cyan">
          <Check className="h-4 w-4" strokeWidth={2.5} />
          Your email app should have opened. Prefer WhatsApp? Use the button below.
        </p>
      ) : null}

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <Button type="submit" className="w-full sm:flex-1">
          <Mail className="h-4 w-4" />
          Send via Email
        </Button>
        <Button
          href={whatsappLink(composed || `Hi ${siteConfig.name}, I have a question.`)}
          external
          variant="secondary"
          className="w-full sm:flex-1"
        >
          <WhatsApp className="h-4 w-4" />
          Send via WhatsApp
        </Button>
      </div>
    </form>
  );
}
