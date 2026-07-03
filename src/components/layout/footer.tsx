import Link from "next/link";
import { Send, Mail, MapPin, Clock } from "lucide-react";
import { IconX, IconInstagram, IconFacebook } from "@/components/social-icons";
import { Logo } from "@/components/logo";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/site-config";

const columns = [
  {
    title: "Product",
    links: [
      { href: "/plans", label: "Pricing Plans" },
      { href: "/#features", label: "Features" },
      { href: "/#faq", label: "FAQ" },
      { href: "/checkout", label: "Checkout" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/contact", label: "Contact Us" },
      { href: "/#testimonials", label: "Testimonials" },
      { href: "/plans", label: "Compare Plans" },
      { href: "/#hero", label: "Home" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/contact", label: "Terms of Service" },
      { href: "/contact", label: "Privacy Policy" },
      { href: "/contact", label: "Refund Policy" },
      { href: "/contact", label: "Acceptable Use" },
    ],
  },
];

const socials = [
  { href: siteConfig.social.twitter, icon: IconX, label: "X (Twitter)" },
  { href: siteConfig.social.instagram, icon: IconInstagram, label: "Instagram" },
  { href: siteConfig.social.facebook, icon: IconFacebook, label: "Facebook" },
  { href: siteConfig.social.telegram, icon: Send, label: "Telegram" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-surface">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,var(--primary),var(--secondary),transparent)]" />
      <div className="pointer-events-none absolute -bottom-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />

      <Container className="relative py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
              {siteConfig.description}
            </p>
            <div className="mt-6 flex flex-col gap-3 text-sm text-muted">
              <div className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-primary-2" />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-foreground">
                  {siteConfig.contact.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin className="h-4 w-4 text-primary-2" />
                <span>{siteConfig.contact.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="h-4 w-4 text-primary-2" />
                <span>{siteConfig.contact.hours}</span>
              </div>
            </div>
            <div className="mt-6 flex items-center gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-primary/50 hover:text-primary-2"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {columns.map((column) => (
            <div key={column.title}>
              <h4 className="text-sm font-semibold text-foreground">{column.title}</h4>
              <ul className="mt-4 flex flex-col gap-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-xs text-muted sm:flex-row">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-center sm:text-right">
            Demo content for showcase purposes only · Not affiliated with any broadcaster.
          </p>
        </div>
      </Container>
    </footer>
  );
}
