import Link from "next/link";
import { Tv, Mail, MessageCircle, Globe, PlayCircle, Camera, Shield, Zap } from "lucide-react";

const footerLinks = {
  Product: [
    { label: "Features", href: "/#features" },
    { label: "Pricing", href: "/#pricing" },
    { label: "Plans", href: "/products" },
    { label: "FAQ", href: "/#faq" },
  ],
  Support: [
    { label: "Contact Us", href: "/contact" },
    { label: "WhatsApp", href: "https://wa.me/1234567890" },
    { label: "Email Support", href: "mailto:support@streamvault.tv" },
    { label: "Setup Guide", href: "#" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Refund Policy", href: "#" },
    { label: "DMCA", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-dark-800 overflow-hidden">
      {/* Background glow */}
      <div className="glow-blob w-96 h-96 bg-purple-600 -bottom-48 -left-24 opacity-10" />
      <div className="glow-blob w-64 h-64 bg-cyan-400 -bottom-32 right-48 opacity-5" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center">
                <Tv className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold gradient-text">StreamVault</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
              Premium IPTV streaming with 20,000+ channels, crystal-clear 4K quality, and 99.9% uptime guarantee.
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-3 mb-6">
              <div className="flex items-center gap-1.5 glass px-3 py-1.5 rounded-full text-xs text-gray-300">
                <Shield className="w-3.5 h-3.5 text-cyan-400" />
                Secure Payments
              </div>
              <div className="flex items-center gap-1.5 glass px-3 py-1.5 rounded-full text-xs text-gray-300">
                <Zap className="w-3.5 h-3.5 text-purple-400" />
                99.9% Uptime
              </div>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-3">
              {[
                { icon: Globe, href: "#", color: "hover:text-cyan-400" },
                { icon: PlayCircle, href: "#", color: "hover:text-red-400" },
                { icon: Camera, href: "#", color: "hover:text-pink-400" },
              ].map(({ icon: Icon, href, color }, i) => (
                <a
                  key={i}
                  href={href}
                  className={`w-9 h-9 glass rounded-lg flex items-center justify-center text-gray-400 ${color} transition-colors duration-200`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold text-sm mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-400 text-sm hover:text-cyan-400 transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact quick links */}
        <div className="flex flex-wrap gap-4 mb-8 py-6 border-y border-white/10">
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 glass px-4 py-2.5 rounded-xl text-sm text-gray-300 hover:text-white hover:border-green-500/30 transition-all duration-200 hover:bg-green-500/10"
          >
            <MessageCircle className="w-4 h-4 text-green-400" />
            WhatsApp Support
          </a>
          <a
            href="mailto:support@streamvault.tv"
            className="flex items-center gap-2 glass px-4 py-2.5 rounded-xl text-sm text-gray-300 hover:text-white hover:border-cyan-500/30 transition-all duration-200 hover:bg-cyan-500/10"
          >
            <Mail className="w-4 h-4 text-cyan-400" />
            support@streamvault.tv
          </a>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} StreamVault. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built for{" "}
            <span className="gradient-text font-semibold">premium streaming</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
