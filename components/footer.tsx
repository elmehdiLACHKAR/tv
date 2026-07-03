import Link from "next/link";
import { brand } from "@/lib/data";

const links = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Plans" },
  { href: "/checkout", label: "Checkout" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-slate-950/70">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-[1.3fr_0.7fr_0.8fr] lg:px-8">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 via-blue-500 to-violet-500 font-black text-white">
              S
            </span>
            <div>
              <p className="font-[var(--font-jakarta)] text-xl font-black text-white">
                {brand.name}
              </p>
              <p className="text-sm text-slate-400">{brand.tagline}</p>
            </div>
          </div>
          <p className="max-w-xl text-sm leading-6 text-slate-400">
            A modern premium IPTV storefront concept with flexible subscription plans,
            responsive support, and a conversion-focused purchase flow.
          </p>
        </div>

        <div>
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-cyan-200">
            Explore
          </p>
          <div className="grid gap-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-slate-400 transition hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-cyan-200">
            Support
          </p>
          <div className="space-y-3 text-sm text-slate-400">
            <p>Email: {brand.email}</p>
            <p>WhatsApp: {brand.whatsapp}</p>
            <p className="text-xs leading-5 text-slate-500">
              Replace placeholder contact details with your real business support channels
              before production launch.
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-5 py-5 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} {brand.name}. Demo content for a premium IPTV
        commerce experience.
      </div>
    </footer>
  );
}
