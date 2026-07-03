"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Mail, Send, MapPin, Clock } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import { CONTACT } from "@/lib/constants";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-24 md:pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Get in Touch"
          subtitle="Have questions? Need setup help? Our support team is available 24/7 via WhatsApp and email."
        />

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          <div className="lg:col-span-3">
            <GlassCard hover={false}>
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-neon-blue to-neon-purple flex items-center justify-center mx-auto mb-6">
                    <Send size={28} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                  <p className="text-muted mb-6">
                    We&apos;ll get back to you within 1 hour. For faster response,
                    reach us on WhatsApp.
                  </p>
                  <Button
                    href={CONTACT.whatsappUrl}
                    external
                    variant="outline"
                  >
                    <MessageCircle size={18} />
                    Chat on WhatsApp
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Full Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl glass text-white placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-neon-blue/50 transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl glass text-white placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-neon-blue/50 transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      className="w-full px-4 py-3 rounded-xl glass text-white focus:outline-none focus:ring-2 focus:ring-neon-blue/50 transition-all cursor-pointer"
                    >
                      <option value="general" className="bg-surface">
                        General Inquiry
                      </option>
                      <option value="trial" className="bg-surface">
                        Free Trial Request
                      </option>
                      <option value="setup" className="bg-surface">
                        Setup Assistance
                      </option>
                      <option value="billing" className="bg-surface">
                        Billing Question
                      </option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="How can we help you?"
                      className="w-full px-4 py-3 rounded-xl glass text-white placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-neon-blue/50 transition-all resize-none"
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full sm:w-auto">
                    <Send size={18} />
                    Send Message
                  </Button>
                </form>
              )}
            </GlassCard>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <GlassCard hover={false} glow="blue">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-green-500/20 flex items-center justify-center">
                  <MessageCircle size={24} className="text-green-400" />
                </div>
                <div>
                  <h3 className="font-bold">WhatsApp Support</h3>
                  <p className="text-muted text-sm">Fastest way to reach us</p>
                </div>
              </div>
              <p className="text-muted text-sm mb-4 leading-relaxed">
                Get instant help with setup, trials, and orders. Average response
                time under 5 minutes.
              </p>
              <Button href={CONTACT.whatsappUrl} external className="w-full">
                <MessageCircle size={18} />
                {CONTACT.whatsapp}
              </Button>
            </GlassCard>

            <GlassCard hover={false} glow="purple">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-neon-purple/20 flex items-center justify-center">
                  <Mail size={24} className="text-neon-purple" />
                </div>
                <div>
                  <h3 className="font-bold">Email Support</h3>
                  <p className="text-muted text-sm">For detailed inquiries</p>
                </div>
              </div>
              <p className="text-muted text-sm mb-4 leading-relaxed">
                Send us an email for billing questions, technical issues, or
                partnership inquiries.
              </p>
              <Button
                href={`mailto:${CONTACT.email}`}
                external
                variant="secondary"
                className="w-full"
              >
                <Mail size={18} />
                {CONTACT.email}
              </Button>
            </GlassCard>

            <GlassCard hover={false}>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Clock size={18} className="text-neon-blue" />
                  <div>
                    <p className="text-sm font-medium">Support Hours</p>
                    <p className="text-muted text-sm">24/7 — Always available</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin size={18} className="text-neon-purple" />
                  <div>
                    <p className="text-sm font-medium">Global Service</p>
                    <p className="text-muted text-sm">Worldwide coverage</p>
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </div>
  );
}
