import Link from "next/link";
import { mailtoLink, navLinks, siteConfig, whatsappLink } from "@/lib/site";
import { Logo, Mail, WhatsApp } from "@/components/icons";
import { Container } from "@/components/ui/container";

const legal = [
  { href: "/plans", label: "Plans" },
  { href: "/checkout", label: "Checkout" },
  { href: "/contact", label: "Support" },
];

export function Footer() {
  return (
    <footer className="relative mt-24 border-t border-white/10 bg-surface/40">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2.5">
              <Logo className="h-8 w-8" />
              <span className="font-display text-lg font-bold text-white">
                {siteConfig.name}
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/55">
              Premium IPTV & streaming with 20,000+ channels, 80,000+ titles and
              stunning 4K quality on every device.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Navigation</h3>
            <ul className="mt-4 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/55 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Company</h3>
            <ul className="mt-4 space-y-3">
              {legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/55 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Get in touch</h3>
            <div className="mt-4 space-y-3">
              <a
                href={whatsappLink(`Hi ${siteConfig.name}, I have a question.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-white/55 transition-colors hover:text-white"
              >
                <WhatsApp className="h-4 w-4 text-neon-cyan" />
                WhatsApp support
              </a>
              <a
                href={mailtoLink("NebulaStream support", "Hi team,")}
                className="flex items-center gap-3 text-sm text-white/55 transition-colors hover:text-white"
              >
                <Mail className="h-4 w-4 text-neon-cyan" />
                {siteConfig.email}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-white/45 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-center sm:text-right">
            For entertainment purposes. Demo content & placeholder pricing.
          </p>
        </div>
      </Container>
    </footer>
  );
}
