import Link from "next/link";
import { Play, Mail, MessageCircle } from "lucide-react";
import { SITE_NAME, CONTACT, NAV_LINKS } from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-neon-blue to-neon-purple flex items-center justify-center">
                <Play size={18} className="text-white fill-white ml-0.5" />
              </div>
              <span className="text-xl font-bold">{SITE_NAME}</span>
            </Link>
            <p className="text-muted text-sm leading-relaxed max-w-md mb-6">
              Premium IPTV streaming service delivering 15,000+ channels in stunning
              4K quality. Instant activation, multi-device support, and 24/7
              customer care.
            </p>
            <div className="flex gap-3">
              <a
                href={CONTACT.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl glass flex items-center justify-center hover:bg-white/10 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle size={18} className="text-neon-blue" />
              </a>
              <a
                href={`mailto:${CONTACT.email}`}
                className="w-10 h-10 rounded-xl glass flex items-center justify-center hover:bg-white/10 transition-colors"
                aria-label="Email"
              >
                <Mail size={18} className="text-neon-purple" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-3 text-sm text-muted">
              <li>
                <a
                  href={CONTACT.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp: {CONTACT.whatsapp}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="hover:text-white transition-colors"
                >
                  {CONTACT.email}
                </a>
              </li>
              <li>Available 24/7</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 mt-10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-muted text-sm">
            &copy; {currentYear} {SITE_NAME}. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted">
            <span className="hover:text-white transition-colors cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:text-white transition-colors cursor-pointer">
              Terms of Service
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
