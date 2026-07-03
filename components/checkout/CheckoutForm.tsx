"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import Icon from "@/components/ui/Icon";
import { getPlan, plans } from "@/lib/plans";
import { mailtoLink, whatsappLink } from "@/lib/site";

const inputClasses =
  "w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-slate-500 transition-colors focus:border-neon-400/60 focus:outline-none focus:ring-1 focus:ring-neon-400/40";

const devices = [
  "Smart TV (Samsung / LG)",
  "Android TV / Box",
  "Amazon Firestick",
  "iOS / Apple TV",
  "MAG / Formuler box",
  "Windows / macOS",
  "Other",
];

export default function CheckoutForm() {
  const searchParams = useSearchParams();
  const preselected = getPlan(searchParams.get("plan"));

  const [planId, setPlanId] = useState(preselected?.id ?? "12-months");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [device, setDevice] = useState(devices[0]);
  const [note, setNote] = useState("");

  const plan = getPlan(planId)!;

  const orderMessage = useMemo(() => {
    const lines = [
      "Hi NovaStream! I'd like to place an order:",
      "",
      `Plan: ${plan.name} — ${plan.duration} ($${plan.price})`,
      `Name: ${name || "—"}`,
      `Email: ${email || "—"}`,
      `Device: ${device}`,
    ];
    if (note.trim()) lines.push(`Note: ${note.trim()}`);
    lines.push("", "Please confirm my order and send payment instructions.");
    return lines.join("\n");
  }, [plan, name, email, device, note]);

  return (
    <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
      {/* Order form */}
      <motion.div
        initial={{ opacity: 0, x: -24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: [0.21, 0.65, 0.36, 1] }}
        className="glass rounded-3xl p-8 shadow-card"
      >
        <h2 className="font-display text-xl font-semibold text-white">
          1. Your details
        </h2>
        <p className="mt-1 text-sm text-slate-400">
          We only use this to activate your subscription and send credentials.
        </p>

        <div className="mt-8 flex flex-col gap-5">
          <div>
            <label htmlFor="plan" className="mb-2 block text-sm font-medium text-slate-300">
              Subscription plan
            </label>
            <div className="grid gap-3 sm:grid-cols-3">
              {plans.map((p) => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setPlanId(p.id)}
                  aria-pressed={planId === p.id}
                  className={`rounded-xl border px-4 py-3 text-left transition-all duration-200 ${
                    planId === p.id
                      ? "border-neon-400/70 bg-neon-500/10 shadow-glow-blue"
                      : "border-white/10 bg-white/[0.03] hover:border-white/25"
                  }`}
                >
                  <span className="block text-sm font-semibold text-white">
                    {p.duration}
                  </span>
                  <span className="mt-0.5 block text-xs text-slate-400">
                    ${p.price} · {p.perMonth}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-300">
                Full name
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="John Doe"
                className={inputClasses}
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-300">
                Email address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@email.com"
                className={inputClasses}
              />
            </div>
          </div>

          <div>
            <label htmlFor="device" className="mb-2 block text-sm font-medium text-slate-300">
              Main device
            </label>
            <select
              id="device"
              value={device}
              onChange={(e) => setDevice(e.target.value)}
              className={`${inputClasses} appearance-none`}
            >
              {devices.map((d) => (
                <option key={d} value={d} className="bg-night-800">
                  {d}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="note" className="mb-2 block text-sm font-medium text-slate-300">
              Anything else? <span className="text-slate-500">(optional)</span>
            </label>
            <textarea
              id="note"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="Preferred payment method, extra devices, questions..."
              rows={3}
              className={`${inputClasses} resize-none`}
            />
          </div>
        </div>
      </motion.div>

      {/* Summary & complete order */}
      <motion.div
        initial={{ opacity: 0, x: 24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.21, 0.65, 0.36, 1] }}
        className="flex flex-col gap-6"
      >
        <div className="glass rounded-3xl p-8 shadow-card">
          <h2 className="font-display text-xl font-semibold text-white">
            2. Order summary
          </h2>
          <dl className="mt-6 space-y-4 text-sm">
            <div className="flex justify-between">
              <dt className="text-slate-400">Plan</dt>
              <dd className="font-medium text-white">
                {plan.name} · {plan.duration}
              </dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-slate-400">Connections</dt>
              <dd className="font-medium text-white">
                {plan.id === "1-month" ? "1 device" : plan.id === "3-months" ? "2 devices" : "3 devices"}
              </dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-slate-400">Activation</dt>
              <dd className="font-medium text-emerald-400">Instant</dd>
            </div>
            {plan.originalPrice && (
              <div className="flex justify-between">
                <dt className="text-slate-400">Regular price</dt>
                <dd className="text-slate-500 line-through">${plan.originalPrice}</dd>
              </div>
            )}
            <div className="flex justify-between border-t border-white/10 pt-4 text-base">
              <dt className="font-semibold text-white">Total</dt>
              <dd className="font-display text-2xl font-bold text-white">
                ${plan.price}
              </dd>
            </div>
          </dl>
        </div>

        <div className="glass rounded-3xl p-8 shadow-card">
          <h2 className="font-display text-xl font-semibold text-white">
            3. Complete your order
          </h2>
          <p className="mt-1 text-sm text-slate-400">
            Send your order in one click — our team confirms payment and
            activates your subscription within minutes.
          </p>

          <div className="mt-6 flex flex-col gap-3">
            <a
              href={whatsappLink(orderMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-8 py-4 text-base font-semibold text-white shadow-[0_0_40px_-8px_rgba(16,185,129,0.5)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-400"
            >
              <Icon name="whatsapp" className="h-5 w-5" />
              Order via WhatsApp
            </a>
            <a
              href={mailtoLink(`New order — ${plan.name} (${plan.duration})`, orderMessage)}
              className="glass inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-base font-semibold text-slate-100 transition-all duration-300 hover:-translate-y-0.5 hover:border-neon-400/50 hover:text-white"
            >
              <Icon name="mail" className="h-5 w-5 text-neon-300" />
              Order via Email
            </a>
          </div>

          <p className="mt-5 flex items-start gap-2 text-xs leading-relaxed text-slate-500">
            <Icon name="shield" className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
            Your details are pre-filled into the message — nothing is stored on
            this website. Payment is arranged securely in the chat.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
