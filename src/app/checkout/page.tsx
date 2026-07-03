"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Mail, Check, ArrowLeft } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import { plans } from "@/lib/data";
import { CONTACT } from "@/lib/constants";

function CheckoutContent() {
  const searchParams = useSearchParams();
  const planId = searchParams.get("plan") ?? "quarterly";
  const selectedPlan = plans.find((p) => p.id === planId) ?? plans[1];

  const whatsappMessage = encodeURIComponent(
    `Hi! I'd like to purchase the ${selectedPlan.name} plan (${selectedPlan.duration}) for $${selectedPlan.price}. Please send me payment details.`
  );

  const emailSubject = encodeURIComponent(
    `NexStream Purchase — ${selectedPlan.name} Plan`
  );
  const emailBody = encodeURIComponent(
    `Hello,\n\nI would like to purchase the following plan:\n\nPlan: ${selectedPlan.name}\nDuration: ${selectedPlan.duration}\nPrice: $${selectedPlan.price}\n\nPlease send me payment instructions.\n\nThank you!`
  );

  return (
    <div className="pt-24 md:pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Button href="/products" variant="ghost" size="sm" className="mb-8">
          <ArrowLeft size={16} />
          Back to Plans
        </Button>

        <SectionHeading
          eyebrow="Checkout"
          title="Complete Your Order"
          subtitle="Choose your preferred payment method. Our team will respond within minutes with activation details."
          align="left"
        />

        <div className="grid md:grid-cols-2 gap-8">
          <GlassCard hover={false} className="h-fit">
            <h3 className="text-lg font-bold mb-1">Order Summary</h3>
            <p className="text-muted text-sm mb-6">Review your selected plan</p>

            <div className="glass rounded-2xl p-5 mb-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="font-semibold text-lg">{selectedPlan.name}</p>
                  <p className="text-muted text-sm">{selectedPlan.duration}</p>
                </div>
                <p className="text-2xl font-bold gradient-text">
                  ${selectedPlan.price}
                </p>
              </div>
              <ul className="space-y-2">
                {selectedPlan.features.slice(0, 4).map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-muted">
                    <Check size={14} className="text-neon-blue shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <p className="text-sm font-medium text-muted">Switch plan:</p>
              <div className="flex flex-wrap gap-2">
                {plans.map((plan) => (
                  <a
                    key={plan.id}
                    href={`/checkout?plan=${plan.id}`}
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all cursor-pointer ${
                      plan.id === selectedPlan.id
                        ? "bg-gradient-to-r from-neon-blue to-neon-purple text-white"
                        : "glass hover:bg-white/10"
                    }`}
                  >
                    {plan.duration}
                  </a>
                ))}
              </div>
            </div>
          </GlassCard>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <GlassCard hover={false} glow="blue">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-green-500/20 flex items-center justify-center">
                    <MessageCircle size={24} className="text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Pay via WhatsApp</h3>
                    <p className="text-muted text-sm">Fastest response — usually within 5 min</p>
                  </div>
                </div>
                <p className="text-muted text-sm mb-6 leading-relaxed">
                  Send us a message with your plan selection. We&apos;ll reply with
                  secure payment options and activate your account instantly after
                  confirmation.
                </p>
                <Button
                  href={`${CONTACT.whatsappUrl}?text=${whatsappMessage}`}
                  external
                  className="w-full"
                  size="lg"
                >
                  <MessageCircle size={20} />
                  Order on WhatsApp
                </Button>
              </GlassCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <GlassCard hover={false} glow="purple">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-neon-purple/20 flex items-center justify-center">
                    <Mail size={24} className="text-neon-purple" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Pay via Email</h3>
                    <p className="text-muted text-sm">Response within 1 hour</p>
                  </div>
                </div>
                <p className="text-muted text-sm mb-6 leading-relaxed">
                  Prefer email? Send us your order details and we&apos;ll respond
                  with payment instructions and your login credentials once
                  processed.
                </p>
                <Button
                  href={`mailto:${CONTACT.email}?subject=${emailSubject}&body=${emailBody}`}
                  external
                  variant="secondary"
                  className="w-full"
                  size="lg"
                >
                  <Mail size={20} />
                  Order via Email
                </Button>
              </GlassCard>
            </motion.div>

            <p className="text-center text-muted text-xs">
              Secure checkout · 7-day money-back guarantee · Instant activation
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense
      fallback={
        <div className="pt-32 text-center text-muted">Loading checkout...</div>
      }
    >
      <CheckoutContent />
    </Suspense>
  );
}
