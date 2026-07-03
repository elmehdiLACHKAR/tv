"use client";

import { motion } from "framer-motion";
import { Mail, MessageCircle, ShieldCheck } from "lucide-react";
import { useMemo, useState } from "react";
import { brand, plans } from "@/lib/data";

export function CheckoutPanel() {
  const [selectedPlan, setSelectedPlan] = useState(plans[1].name);

  const plan = plans.find((item) => item.name === selectedPlan) ?? plans[1];
  const message = useMemo(
    () =>
      `Hi ${brand.name}, I want to buy the ${plan.name} (${plan.period}) IPTV plan for ${plan.price}. Please send payment and activation steps.`,
    [plan],
  );
  const whatsappUrl = `https://wa.me/15550149088?text=${encodeURIComponent(message)}`;
  const emailUrl = `mailto:${brand.email}?subject=${encodeURIComponent(
    `${brand.name} ${plan.name} plan order`,
  )}&body=${encodeURIComponent(message)}`;

  return (
    <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card rounded-[2rem] p-6 md:p-8"
      >
        <p className="mb-4 text-sm font-black uppercase tracking-[0.25em] text-cyan-200">
          Step 1
        </p>
        <h2 className="font-[var(--font-jakarta)] text-3xl font-black text-white">
          Choose your subscription
        </h2>
        <div className="mt-7 grid gap-4">
          {plans.map((item) => (
            <button
              key={item.name}
              onClick={() => setSelectedPlan(item.name)}
              className={`rounded-3xl border p-5 text-left transition ${
                selectedPlan === item.name
                  ? "border-cyan-200/60 bg-cyan-300/10"
                  : "border-white/10 bg-white/[0.03] hover:border-white/20"
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-[var(--font-jakarta)] text-xl font-black text-white">
                    {item.name}
                  </p>
                  <p className="mt-1 text-sm text-slate-400">{item.period}</p>
                </div>
                <p className="font-[var(--font-jakarta)] text-2xl font-black text-cyan-100">
                  {item.price}
                </p>
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-400">{item.description}</p>
            </button>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="glass-card neon-ring rounded-[2rem] p-6 md:p-8"
      >
        <p className="mb-4 text-sm font-black uppercase tracking-[0.25em] text-cyan-200">
          Step 2
        </p>
        <h2 className="font-[var(--font-jakarta)] text-3xl font-black text-white">
          Checkout by WhatsApp or mail
        </h2>
        <p className="mt-4 text-sm leading-6 text-slate-400">
          This demo checkout sends a prepared order message to your support team. Replace
          the placeholder WhatsApp and email details with your production channels.
        </p>

        <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.04] p-5">
          <div className="flex items-center justify-between gap-5">
            <div>
              <p className="text-sm text-slate-400">Selected plan</p>
              <p className="mt-1 font-[var(--font-jakarta)] text-2xl font-black text-white">
                {plan.name}
              </p>
            </div>
            <p className="font-[var(--font-jakarta)] text-4xl font-black text-cyan-100">
              {plan.price}
            </p>
          </div>
          <div className="mt-5 grid gap-2">
            {plan.features.map((feature) => (
              <div key={feature} className="flex items-center gap-2 text-sm text-slate-300">
                <ShieldCheck size={16} className="text-cyan-200" />
                {feature}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-300 to-violet-500 px-6 py-4 text-sm font-black text-slate-950 transition hover:scale-105"
          >
            <MessageCircle size={18} />
            WhatsApp order
          </a>
          <a
            href={emailUrl}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-6 py-4 text-sm font-black text-white transition hover:border-cyan-200/50 hover:bg-white/10"
          >
            <Mail size={18} />
            Email order
          </a>
        </div>
      </motion.div>
    </div>
  );
}
