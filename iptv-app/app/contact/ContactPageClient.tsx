"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  MessageCircle,
  Mail,
  Send,
  Clock,
  CheckCircle,
  Headphones,
  Globe,
  Zap,
} from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const contactMethods = [
  {
    icon: MessageCircle,
    title: "WhatsApp",
    description: "Fastest response. Chat with us instantly.",
    action: "Open WhatsApp",
    href: "https://wa.me/1234567890",
    color: "from-green-500 to-emerald-600",
    glow: "shadow-green-500/20",
    external: true,
  },
  {
    icon: Mail,
    title: "Email Support",
    description: "Send detailed inquiries or order requests.",
    action: "Send Email",
    href: "mailto:support@streamvault.tv",
    color: "from-cyan-500 to-blue-600",
    glow: "shadow-cyan-500/20",
    external: false,
  },
  {
    icon: Clock,
    title: "Response Time",
    description: "We reply within minutes, 24 hours a day, 7 days a week.",
    action: null,
    href: null,
    color: "from-purple-500 to-violet-600",
    glow: "shadow-purple-500/20",
    external: false,
  },
];

const faqs = [
  { q: "How quickly can I get started?", a: "Within 5–10 minutes of contacting us." },
  { q: "Do you offer a free trial?", a: "Yes! Ask us for a free 24-hour trial." },
  { q: "Which devices are supported?", a: "All major devices — Smart TV, Android, iOS, Firestick, PC, and more." },
  { q: "Can I upgrade my plan later?", a: "Absolutely. Contact us anytime to upgrade your subscription." },
];

export default function ContactPageClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen pt-24 pb-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900" />
      <div className="glow-blob w-[500px] h-[500px] bg-cyan-500 -top-64 -right-64 opacity-10" />
      <div className="glow-blob w-[400px] h-[400px] bg-purple-600 bottom-0 -left-64 opacity-10" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        {/* Header */}
        <div className="mb-16">
          <SectionHeader
            eyebrow="Contact Us"
            title="We're Here to "
            highlight="Help You"
            description="Have questions, need help, or want to place an order? Reach out and we'll respond within minutes."
          />
        </div>

        {/* Contact method cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          {contactMethods.map((method, index) => (
            <motion.div
              key={method.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`glass rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 card-hover hover:shadow-xl ${method.glow} flex flex-col`}
            >
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${method.color} flex items-center justify-center mb-4 shadow-lg`}
              >
                <method.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">{method.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed flex-1 mb-4">{method.description}</p>
              {method.action && method.href && (
                <a
                  href={method.href}
                  target={method.external ? "_blank" : "_self"}
                  rel={method.external ? "noopener noreferrer" : undefined}
                  className={`inline-flex items-center gap-2 font-semibold text-sm bg-gradient-to-r ${method.color} text-white px-4 py-2.5 rounded-xl transition-all hover:opacity-90 hover:-translate-y-0.5 w-fit`}
                >
                  {method.action}
                  {method.external ? <Globe className="w-3.5 h-3.5" /> : <Mail className="w-3.5 h-3.5" />}
                </a>
              )}
              {method.title === "Response Time" && (
                <div className="flex items-center gap-2 mt-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-green-400 text-sm font-semibold">Online now</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-black text-white mb-6">
              Send Us a <span className="gradient-text">Message</span>
            </h2>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass rounded-2xl border border-green-500/30 bg-green-500/5 p-10 text-center"
              >
                <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                <h3 className="text-white font-bold text-xl mb-2">Message Sent!</h3>
                <p className="text-gray-400">
                  Thank you, <strong className="text-white">{formData.name}</strong>! We'll
                  get back to you at <strong className="text-white">{formData.email}</strong>{" "}
                  within minutes.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: "", email: "", subject: "", message: "" });
                  }}
                  className="mt-6 text-cyan-400 hover:text-cyan-300 text-sm underline underline-offset-2"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="w-full glass rounded-xl border border-white/10 focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30 px-4 py-3 text-white placeholder-gray-500 bg-transparent outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className="w-full glass rounded-xl border border-white/10 focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30 px-4 py-3 text-white placeholder-gray-500 bg-transparent outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1.5">
                    Subject *
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full glass rounded-xl border border-white/10 focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30 px-4 py-3 text-white bg-dark-800 outline-none transition-all"
                  >
                    <option value="" className="bg-dark-800">Select a subject...</option>
                    <option value="New Subscription" className="bg-dark-800">New Subscription</option>
                    <option value="Free Trial Request" className="bg-dark-800">Free Trial Request</option>
                    <option value="Technical Support" className="bg-dark-800">Technical Support</option>
                    <option value="Billing & Payment" className="bg-dark-800">Billing & Payment</option>
                    <option value="Upgrade Plan" className="bg-dark-800">Upgrade Plan</option>
                    <option value="General Inquiry" className="bg-dark-800">General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1.5">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell us how we can help you..."
                    className="w-full glass rounded-xl border border-white/10 focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30 px-4 py-3 text-white placeholder-gray-500 bg-transparent outline-none transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="flex items-center justify-center gap-2 w-full btn-primary text-white font-bold py-4 rounded-xl text-lg disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

          {/* Right side: info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Direct contact cards */}
            <div className="glass rounded-2xl border border-white/10 p-6">
              <h3 className="text-white font-bold text-lg mb-5 flex items-center gap-2">
                <Headphones className="w-5 h-5 text-cyan-400" />
                Direct Contact
              </h3>
              <div className="space-y-4">
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-green-500/10 border border-green-500/20 hover:bg-green-500/15 transition-colors group"
                >
                  <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">WhatsApp</p>
                    <p className="text-gray-400 text-xs">+1 (234) 567-890</p>
                  </div>
                  <Zap className="w-4 h-4 text-green-400 ml-auto group-hover:text-green-300" />
                </a>

                <a
                  href="mailto:support@streamvault.tv"
                  className="flex items-center gap-4 p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/20 hover:bg-cyan-500/15 transition-colors group"
                >
                  <div className="w-10 h-10 bg-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">Email Support</p>
                    <p className="text-gray-400 text-xs">support@streamvault.tv</p>
                  </div>
                  <Zap className="w-4 h-4 text-cyan-400 ml-auto group-hover:text-cyan-300" />
                </a>
              </div>
            </div>

            {/* Quick FAQs */}
            <div className="glass rounded-2xl border border-white/10 p-6">
              <h3 className="text-white font-bold text-lg mb-5">Quick Answers</h3>
              <div className="space-y-4">
                {faqs.map((item) => (
                  <div key={item.q} className="border-b border-white/10 last:border-0 pb-4 last:pb-0">
                    <p className="text-white font-medium text-sm mb-1">{item.q}</p>
                    <p className="text-gray-400 text-xs leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Business hours */}
            <div className="glass rounded-2xl border border-white/10 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <h3 className="text-white font-bold">Support Hours</h3>
              </div>
              <div className="space-y-2">
                {[
                  { day: "Monday – Friday", hours: "24/7 Available" },
                  { day: "Saturday", hours: "24/7 Available" },
                  { day: "Sunday", hours: "24/7 Available" },
                ].map((item) => (
                  <div key={item.day} className="flex justify-between text-sm">
                    <span className="text-gray-400">{item.day}</span>
                    <span className="text-green-400 font-semibold">{item.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
