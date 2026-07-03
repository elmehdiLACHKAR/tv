"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  MessageCircle,
  Mail,
  Check,
  Shield,
  Zap,
  ArrowLeft,
  Clock,
  Headphones,
} from "lucide-react";

const planDetails: Record<string, { period: string; features: string[]; color: string }> = {
  Starter: {
    period: "1 Month",
    color: "from-cyan-500 to-blue-600",
    features: ["20,000+ Live Channels", "HD / Full HD Quality", "1 Connection", "VOD Access", "24/7 Support"],
  },
  Pro: {
    period: "3 Months",
    color: "from-purple-500 to-violet-600",
    features: ["20,000+ Live Channels", "4K Ultra HD", "2 Connections", "Full VOD + Series", "Priority Support", "7-Day EPG"],
  },
  Ultimate: {
    period: "12 Months",
    color: "from-pink-500 to-rose-600",
    features: ["20,000+ Live Channels", "4K + HDR", "4 Connections", "Full VOD + Exclusive", "VIP Support", "14-Day EPG", "7-Day Catch-Up"],
  },
};

const steps = [
  { number: "01", title: "Contact Us", description: "Reach us via WhatsApp or Email" },
  { number: "02", title: "Choose Payment", description: "We'll guide you to secure payment" },
  { number: "03", title: "Receive Credentials", description: "Get your login in minutes" },
  { number: "04", title: "Start Streaming", description: "Enjoy on all your devices" },
];

function CheckoutContent() {
  const searchParams = useSearchParams();
  const planName = searchParams.get("plan") || "Pro";
  const price = searchParams.get("price") || "9.99";
  const details = planDetails[planName] || planDetails.Pro;

  const whatsappMessage = `Hi! I want to subscribe to the StreamVault ${planName} plan ($${price}/month - ${details.period}). Please assist me with the order.`;

  const emailSubject = `StreamVault ${planName} Plan Order - $${price}/mo`;
  const emailBody = `Hello StreamVault Team,\n\nI would like to subscribe to the following plan:\n\nPlan: ${planName}\nPrice: $${price}/month\nDuration: ${details.period}\n\nPlease guide me through the payment process.\n\nThank you!`;

  return (
    <div className="min-h-screen pt-24 pb-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900" />
      <div className="glow-blob w-[500px] h-[500px] bg-purple-600 -top-64 right-0 opacity-10" />
      <div className="glow-blob w-[400px] h-[400px] bg-cyan-500 bottom-0 -left-64 opacity-8" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Plans
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left: Order summary */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="glass rounded-2xl border border-white/10 overflow-hidden">
              <div className={`bg-gradient-to-br ${details.color} p-6`}>
                <p className="text-white/80 text-sm font-medium mb-1">Order Summary</p>
                <h2 className="text-2xl font-black text-white">{planName} Plan</h2>
                <p className="text-white/80 text-sm">{details.period} Subscription</p>
              </div>

              <div className="p-6">
                {/* Price */}
                <div className="flex items-end gap-1 mb-6">
                  <span className="text-5xl font-black text-white">${price}</span>
                  <span className="text-gray-400 mb-2">/month</span>
                </div>

                {/* Features */}
                <ul className="space-y-2.5 mb-6">
                  {details.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm text-gray-300">
                      <div className="w-5 h-5 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-green-400" />
                      </div>
                      {f}
                    </li>
                  ))}
                </ul>

                {/* Trust badges */}
                <div className="space-y-2 border-t border-white/10 pt-4">
                  {[
                    { icon: Shield, text: "30-Day Money-Back Guarantee" },
                    { icon: Zap, text: "Instant Activation" },
                    { icon: Headphones, text: "24/7 Priority Support" },
                  ].map(({ icon: Icon, text }) => (
                    <div key={text} className="flex items-center gap-2 text-xs text-gray-400">
                      <Icon className="w-3.5 h-3.5 text-cyan-400" />
                      {text}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Contact options */}
          <div className="lg:col-span-3 space-y-6">
            {/* How to order */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="glass rounded-2xl border border-white/10 p-6"
            >
              <h2 className="text-xl font-bold text-white mb-6">
                How to Complete Your Order
              </h2>

              <div className="space-y-4">
                {steps.map((step, i) => (
                  <div key={step.number} className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center text-white font-bold text-xs">
                      {step.number}
                    </div>
                    <div className="flex-1 pt-1">
                      <h4 className="text-white font-semibold text-sm">{step.title}</h4>
                      <p className="text-gray-400 text-xs mt-0.5">{step.description}</p>
                    </div>
                    {i < steps.length - 1 && (
                      <div className="absolute left-5 mt-10 w-px h-4 bg-white/10" />
                    )}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Contact options */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass rounded-2xl border border-white/10 p-6"
            >
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-4 h-4 text-cyan-400" />
                <span className="text-sm text-gray-300">
                  Average response time:{" "}
                  <span className="text-white font-semibold">Under 5 minutes</span>
                </span>
              </div>
              <p className="text-gray-400 text-sm mb-6">
                Contact us via WhatsApp or email to complete your order. We'll guide you through secure payment and activate your account instantly.
              </p>

              {/* WhatsApp CTA */}
              <a
                href={`https://wa.me/1234567890?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full bg-green-500 hover:bg-green-600 active:bg-green-700 text-white font-bold py-4 px-6 rounded-2xl transition-all duration-200 shadow-xl shadow-green-500/20 hover:shadow-green-500/30 hover:-translate-y-0.5 mb-3"
              >
                <MessageCircle className="w-6 h-6" />
                <span className="text-lg">Order via WhatsApp</span>
              </a>

              <div className="relative flex items-center gap-3 my-4">
                <div className="flex-1 h-px bg-white/10" />
                <span className="text-gray-500 text-xs">OR</span>
                <div className="flex-1 h-px bg-white/10" />
              </div>

              {/* Email CTA */}
              <a
                href={`mailto:support@streamvault.tv?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`}
                className="flex items-center justify-center gap-3 w-full glass border border-white/20 hover:border-cyan-500/40 hover:bg-cyan-500/5 text-white font-bold py-4 px-6 rounded-2xl transition-all duration-200 hover:-translate-y-0.5"
              >
                <Mail className="w-6 h-6 text-cyan-400" />
                <span className="text-lg">Order via Email</span>
              </a>

              <p className="text-center text-gray-500 text-xs mt-4">
                🔒 Secure ordering · 30-day guarantee · Instant setup
              </p>
            </motion.div>

            {/* Reassurance */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="glass rounded-2xl border border-green-500/20 bg-green-500/5 p-5"
            >
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-semibold text-sm mb-1">
                    Safe & Secure
                  </h4>
                  <p className="text-gray-400 text-xs leading-relaxed">
                    All transactions are handled securely. We accept multiple payment methods and your satisfaction is 100% guaranteed with our 30-day refund policy.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CheckoutPageClient() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin" />
      </div>
    }>
      <CheckoutContent />
    </Suspense>
  );
}
