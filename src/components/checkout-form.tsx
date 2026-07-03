"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import {
  Check,
  Mail,
  MessageCircle,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { plans } from "@/data/plans";
import { devices } from "@/data/features";
import { buildMailtoLink, buildWhatsAppLink } from "@/lib/site-config";
import { cn, formatCurrency } from "@/lib/utils";

const inputStyles =
  "w-full rounded-xl border border-border bg-white/[0.03] px-4 py-3 text-sm text-foreground placeholder:text-muted/70 outline-none transition-colors focus:border-primary/50 focus:bg-white/[0.05]";
const labelStyles = "text-sm font-medium text-foreground/90";

export function CheckoutForm() {
  const searchParams = useSearchParams();
  const preselected = searchParams.get("plan");

  const [planId, setPlanId] = useState(
    plans.some((p) => p.id === preselected) ? preselected! : plans[1].id
  );
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [device, setDevice] = useState(devices[0]);
  const [notes, setNotes] = useState("");
  const [attempted, setAttempted] = useState(false);

  const plan = useMemo(() => plans.find((p) => p.id === planId) ?? plans[1], [planId]);

  const isValid = name.trim().length > 1 && (email.trim().length > 3 || whatsapp.trim().length > 3);

  const orderMessage = useMemo(() => {
    const lines = [
      `New order — ${plan.name} (${plan.duration})`,
      `Price: ${formatCurrency(plan.price)}`,
      `Name: ${name || "-"}`,
      email ? `Email: ${email}` : null,
      whatsapp ? `WhatsApp/Phone: ${whatsapp}` : null,
      `Preferred device: ${device}`,
      notes ? `Notes: ${notes}` : null,
    ].filter(Boolean);
    return lines.join("\n");
  }, [plan, name, email, whatsapp, device, notes]);

  const whatsappHref = buildWhatsAppLink(orderMessage);
  const mailtoHref = buildMailtoLink({
    subject: `Order request — ${plan.name} plan`,
    body: orderMessage,
  });

  function handleGuardedClick(e: React.MouseEvent<HTMLAnchorElement>) {
    if (!isValid) {
      e.preventDefault();
      setAttempted(true);
    }
  }

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.3fr_1fr]">
      <div className="flex flex-col gap-8">
        <GlassCard className="p-6 sm:p-8">
          <h2 className="font-display text-xl font-semibold text-foreground">
            1. Choose your plan
          </h2>
          <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {plans.map((p) => {
              const active = p.id === planId;
              return (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setPlanId(p.id)}
                  className={cn(
                    "relative rounded-2xl border p-4 text-left transition-all",
                    active
                      ? "border-primary/60 bg-primary/10 shadow-[0_0_0_1px_rgba(59,158,255,0.4)]"
                      : "border-border bg-white/[0.02] hover:border-primary/30"
                  )}
                >
                  {p.popular ? (
                    <span className="absolute -top-2 right-3 rounded-full bg-[linear-gradient(100deg,var(--primary-2),var(--secondary))] px-2 py-0.5 text-[10px] font-bold uppercase text-white">
                      Popular
                    </span>
                  ) : null}
                  <p className="text-sm font-semibold text-foreground">{p.name}</p>
                  <p className="text-xs text-muted">{p.duration}</p>
                  <p className="mt-2 font-display text-lg font-bold text-foreground">
                    {formatCurrency(p.price)}
                  </p>
                  {active ? (
                    <span className="absolute right-3 top-3 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-white">
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                  ) : null}
                </button>
              );
            })}
          </div>
        </GlassCard>

        <GlassCard className="p-6 sm:p-8">
          <h2 className="font-display text-xl font-semibold text-foreground">
            2. Your details
          </h2>
          <p className="mt-1 text-sm text-muted">
            We only need enough info to activate your subscription and reach you.
          </p>

          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div className="flex flex-col gap-2 sm:col-span-2">
              <label className={labelStyles} htmlFor="name">
                Full name
              </label>
              <input
                id="name"
                className={inputStyles}
                placeholder="Jordan Rivera"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className={labelStyles} htmlFor="email">
                Email address
              </label>
              <input
                id="email"
                type="email"
                className={inputStyles}
                placeholder="you@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className={labelStyles} htmlFor="whatsapp">
                WhatsApp / Phone number
              </label>
              <input
                id="whatsapp"
                type="tel"
                className={inputStyles}
                placeholder="+1 555 123 4567"
                value={whatsapp}
                onChange={(e) => setWhatsapp(e.target.value)}
              />
            </div>

            <div className="flex flex-col gap-2 sm:col-span-2">
              <label className={labelStyles} htmlFor="device">
                Primary streaming device
              </label>
              <select
                id="device"
                className={cn(inputStyles, "appearance-none")}
                value={device}
                onChange={(e) => setDevice(e.target.value)}
              >
                {devices.map((d) => (
                  <option key={d} value={d} className="bg-surface">
                    {d}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col gap-2 sm:col-span-2">
              <label className={labelStyles} htmlFor="notes">
                Notes for our team (optional)
              </label>
              <textarea
                id="notes"
                rows={3}
                className={inputStyles}
                placeholder="Any add-ons, preferred activation time, or questions?"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              />
            </div>
          </div>

          {attempted && !isValid ? (
            <p className="mt-4 text-sm text-red-400">
              Please add your name and at least one contact method (email or WhatsApp).
            </p>
          ) : null}
        </GlassCard>
      </div>

      <div className="lg:sticky lg:top-28 lg:self-start">
        <GlassCard strong className="p-6 sm:p-8">
          <div className="flex items-center gap-2 text-primary-2">
            <Sparkles className="h-4 w-4" />
            <span className="text-xs font-semibold uppercase tracking-wider">
              Order summary
            </span>
          </div>

          <h3 className="mt-3 font-display text-2xl font-bold text-foreground">
            {plan.name} · {plan.duration}
          </h3>
          <p className="mt-1 text-sm text-muted">{plan.description}</p>

          <div className="mt-6 flex items-end gap-2">
            <span className="font-display text-4xl font-bold text-foreground">
              {formatCurrency(plan.price)}
            </span>
            {plan.originalPrice ? (
              <span className="pb-1.5 text-sm text-muted line-through">
                {formatCurrency(plan.originalPrice)}
              </span>
            ) : null}
          </div>
          <p className="mt-1 text-xs text-primary-2">
            {formatCurrency(plan.perMonth)}/mo · {plan.connections} connection
            {plan.connections > 1 ? "s" : ""}
          </p>

          <ul className="mt-6 flex flex-col gap-3 border-t border-border pt-6">
            {plan.features.slice(0, 5).map((feature) => (
              <li key={feature} className="flex items-start gap-2.5 text-sm text-foreground/90">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary-2" />
                {feature}
              </li>
            ))}
          </ul>

          <motion.div className="mt-8 flex flex-col gap-3" layout>
            <Button
              href={whatsappHref}
              external
              size="lg"
              onClick={handleGuardedClick}
              className="w-full justify-center bg-[#25D366] text-white shadow-[0_10px_30px_-8px_rgba(37,211,102,0.6)] hover:brightness-105"
            >
              <MessageCircle className="h-5 w-5" /> Order via WhatsApp
            </Button>
            <Button
              href={mailtoHref}
              external
              size="lg"
              variant="secondary"
              onClick={handleGuardedClick}
              className="w-full justify-center"
            >
              <Mail className="h-5 w-5" /> Order via Email
            </Button>
          </motion.div>

          <div className="mt-6 flex items-center gap-2 text-xs text-muted">
            <ShieldCheck className="h-4 w-4 text-primary-2" />
            No card required now — you only pay after confirming with our team.
          </div>
        </GlassCard>
      </div>
    </div>
  );
}
