import type { Metadata } from "next";
import { Mail, MessageCircle, Send } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { brand } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact Support",
  description:
    "Contact premium IPTV support by form, WhatsApp or email for setup guidance and subscription help.",
};

export default function ContactPage() {
  return (
    <main className="px-5 pb-24 pt-32 lg:px-8 lg:pt-40">
      <section className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Contact"
          title="Need help choosing a plan?"
          description="Send a message, open WhatsApp, or email support for setup questions, device recommendations and plan guidance."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_0.8fr]">
          <form className="glass-card rounded-[2rem] p-6 md:p-8">
            <div className="grid gap-5 md:grid-cols-2">
              <label className="grid gap-2 text-sm font-bold text-slate-200">
                Name
                <input
                  name="name"
                  placeholder="Your name"
                  className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-200/60"
                />
              </label>
              <label className="grid gap-2 text-sm font-bold text-slate-200">
                Email
                <input
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-200/60"
                />
              </label>
            </div>
            <label className="mt-5 grid gap-2 text-sm font-bold text-slate-200">
              Interested plan
              <select
                name="plan"
                className="rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-cyan-200/60"
                defaultValue="Plus"
              >
                <option>Starter</option>
                <option>Plus</option>
                <option>Elite</option>
              </select>
            </label>
            <label className="mt-5 grid gap-2 text-sm font-bold text-slate-200">
              Message
              <textarea
                name="message"
                rows={6}
                placeholder="Tell us your device type and what you want to watch."
                className="resize-none rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-200/60"
              />
            </label>
            <button
              type="button"
              className="mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-300 to-violet-500 px-7 py-4 text-sm font-black text-slate-950 transition hover:scale-105"
            >
              <Send size={18} />
              Send message
            </button>
            <p className="mt-4 text-xs leading-5 text-slate-500">
              Demo form only. Connect this to your preferred form API or CRM before
              production.
            </p>
          </form>

          <aside className="grid gap-5">
            <a
              href={brand.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="glass-card group rounded-[2rem] p-6 transition hover:border-cyan-200/40"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-300/15 text-cyan-200 transition group-hover:scale-110">
                <MessageCircle size={28} />
              </div>
              <h2 className="font-[var(--font-jakarta)] text-2xl font-black text-white">
                WhatsApp support
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                Ask questions, request activation details or confirm your order through
                WhatsApp.
              </p>
              <p className="mt-5 text-sm font-bold text-cyan-100">{brand.whatsapp}</p>
            </a>

            <a
              href={`mailto:${brand.email}`}
              className="glass-card group rounded-[2rem] p-6 transition hover:border-cyan-200/40"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-400/15 text-violet-200 transition group-hover:scale-110">
                <Mail size={28} />
              </div>
              <h2 className="font-[var(--font-jakarta)] text-2xl font-black text-white">
                Email support
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                Prefer email? Send device details and support can reply with setup steps.
              </p>
              <p className="mt-5 text-sm font-bold text-cyan-100">{brand.email}</p>
            </a>
          </aside>
        </div>
      </section>
    </main>
  );
}
