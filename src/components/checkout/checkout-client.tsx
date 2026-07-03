"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { mailtoLink, plans, siteConfig, whatsappLink } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Check, Mail, WhatsApp } from "@/components/icons";

const devices = ["Smart TV", "Firestick", "Android", "iOS / Apple", "MAG box", "PC / Mac"];

export function CheckoutClient() {
  const searchParams = useSearchParams();
  const initialPlan = searchParams.get("plan");

  const [selectedId, setSelectedId] = useState(
    plans.some((p) => p.id === initialPlan)
      ? (initialPlan as string)
      : plans.find((p) => p.highlight)?.id ?? plans[0].id,
  );
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [device, setDevice] = useState(devices[0]);
  const [notes, setNotes] = useState("");

  const selected = useMemo(
    () => plans.find((p) => p.id === selectedId) ?? plans[0],
    [selectedId],
  );

  const orderText = useMemo(() => {
    return [
      `New order — ${siteConfig.name}`,
      `Plan: ${selected.name} (${selected.duration}) — $${selected.price}`,
      name ? `Name: ${name}` : null,
      contact ? `Contact: ${contact}` : null,
      `Device: ${device}`,
      notes ? `Notes: ${notes}` : null,
    ]
      .filter(Boolean)
      .join("\n");
  }, [selected, name, contact, device, notes]);

  return (
    <section className="relative py-12">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-neon-cyan">
            Checkout
          </span>
          <h1 className="mt-5 font-display text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Complete your <span className="text-gradient">order</span>
          </h1>
          <p className="mt-4 text-white/60">
            Confirm your details below, then send your order via WhatsApp or email.
            We&apos;ll activate your subscription within minutes.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-5">
          {/* form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3"
          >
            <div className="glass-card p-6 sm:p-8">
              <h2 className="font-display text-lg font-semibold text-white">
                1. Select your plan
              </h2>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {plans.map((plan) => {
                  const active = plan.id === selectedId;
                  return (
                    <button
                      key={plan.id}
                      type="button"
                      onClick={() => setSelectedId(plan.id)}
                      className={cn(
                        "relative rounded-2xl border p-4 text-left transition-all",
                        active
                          ? "border-neon-purple/50 bg-neon-purple/10 shadow-glow-purple"
                          : "border-white/10 bg-white/[0.03] hover:border-white/25",
                      )}
                    >
                      {active && (
                        <span className="absolute right-3 top-3 flex h-5 w-5 items-center justify-center rounded-full bg-neon-purple text-white">
                          <Check className="h-3 w-3" strokeWidth={3} />
                        </span>
                      )}
                      <p className="text-sm font-semibold text-white">{plan.name}</p>
                      <p className="text-xs text-white/50">{plan.duration}</p>
                      <p className="mt-2 font-display text-xl font-bold text-white">
                        ${plan.price}
                      </p>
                    </button>
                  );
                })}
              </div>

              <h2 className="mt-8 font-display text-lg font-semibold text-white">
                2. Your details
              </h2>
              <div className="mt-4 grid gap-4">
                <Field label="Full name">
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="John Doe"
                    className={inputClass}
                  />
                </Field>
                <Field label="Email or WhatsApp number">
                  <input
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    placeholder="you@email.com or +1 555 123 4567"
                    className={inputClass}
                  />
                </Field>
                <Field label="Primary device">
                  <select
                    value={device}
                    onChange={(e) => setDevice(e.target.value)}
                    className={inputClass}
                  >
                    {devices.map((d) => (
                      <option key={d} value={d} className="bg-surface">
                        {d}
                      </option>
                    ))}
                  </select>
                </Field>
                <Field label="Notes (optional)">
                  <textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    rows={3}
                    placeholder="Anything we should know?"
                    className={cn(inputClass, "resize-none")}
                  />
                </Field>
              </div>
            </div>
          </motion.div>

          {/* summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <div className="glass-card sticky top-28 p-6 sm:p-8">
              <h2 className="font-display text-lg font-semibold text-white">
                Order summary
              </h2>

              <div className="mt-5 flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <p className="font-semibold text-white">{selected.name}</p>
                  <p className="text-sm text-white/50">{selected.duration}</p>
                </div>
                <p className="font-display text-2xl font-bold text-white">
                  ${selected.price}
                </p>
              </div>

              <ul className="mt-5 space-y-3">
                {selected.features.slice(0, 4).map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-white/70">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-neon-cyan" strokeWidth={2.5} />
                    {f}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
                <span className="text-white/60">Total due today</span>
                <span className="font-display text-xl font-bold text-gradient">
                  ${selected.price}
                </span>
              </div>

              <div className="mt-6 space-y-3">
                <Button
                  href={whatsappLink(orderText)}
                  external
                  className="w-full"
                >
                  <WhatsApp className="h-4 w-4" />
                  Order via WhatsApp
                </Button>
                <Button
                  href={mailtoLink(`Order: ${selected.name} (${selected.duration})`, orderText)}
                  external
                  variant="secondary"
                  className="w-full"
                >
                  <Mail className="h-4 w-4" />
                  Order via Email
                </Button>
              </div>

              <p className="mt-4 text-center text-xs text-white/40">
                Secure manual checkout. No card details are stored on this site —
                payment is arranged directly with our team.
              </p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

const inputClass =
  "w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-white/35 outline-none transition-colors focus:border-neon-cyan/60 focus:bg-white/[0.05]";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-white/70">{label}</span>
      {children}
    </label>
  );
}
