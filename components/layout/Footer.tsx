import Link from "next/link";
import Icon from "@/components/ui/Icon";
import { site, whatsappLink } from "@/lib/site";

const productLinks = [
  { href: "/plans", label: "Pricing Plans" },
  { href: "/#features", label: "Features" },
  { href: "/checkout", label: "Checkout" },
  { href: "/contact", label: "Free Trial" },
];

const supportLinks = [
  { href: "/#faq", label: "FAQ" },
  { href: "/contact", label: "Contact Us" },
  { href: `mailto:${site.email}`, label: "Email Support" },
];

export default function Footer() {
  return (
    <footer className="relative mt-24 border-t border-white/5">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neon-400/40 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Link href="/" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-neon-400 to-violet-500">
                <Icon name="play" className="h-4 w-4 text-white" />
              </span>
              <span className="font-display text-lg font-bold text-white">
                Nova<span className="text-gradient">Stream</span>
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
              Premium IPTV streaming with 20,000+ channels, 80,000+ movies and
              series, instant activation and 24/7 support.
            </p>
            <div className="mt-6 flex gap-3">
              {Object.entries(site.socials).map(([name, href]) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass flex h-10 w-10 items-center justify-center rounded-xl text-slate-400 transition-all duration-300 hover:border-neon-400/50 hover:text-neon-300"
                  aria-label={name}
                >
                  <Icon name="globe" className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Product">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white">
              Product
            </h3>
            <ul className="mt-5 space-y-3">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-neon-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Support">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white">
              Support
            </h3>
            <ul className="mt-5 space-y-3">
              {supportLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-neon-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white">
              Get in touch
            </h3>
            <div className="mt-5 space-y-3">
              <a
                href={whatsappLink("Hi! I have a question about NovaStream.")}
                target="_blank"
                rel="noopener noreferrer"
                className="glass flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-slate-300 transition-all duration-300 hover:border-emerald-400/50 hover:text-white"
              >
                <Icon name="whatsapp" className="h-5 w-5 text-emerald-400" />
                WhatsApp — instant reply
              </a>
              <a
                href={`mailto:${site.email}`}
                className="glass flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-slate-300 transition-all duration-300 hover:border-neon-400/50 hover:text-white"
              >
                <Icon name="mail" className="h-5 w-5 text-neon-400" />
                {site.email}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 text-xs text-slate-500 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>Demo content — replace contact details before going live.</p>
        </div>
      </div>
    </footer>
  );
}
