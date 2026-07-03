"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import { site } from "@/lib/site";

const links = [
  { href: "/", label: "Home" },
  { href: "/plans", label: "Plans" },
  { href: "/#features", label: "Features" },
  { href: "/#faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <nav
          className={`flex items-center justify-between rounded-2xl px-5 py-3 transition-all duration-300 ${
            scrolled || open
              ? "glass-solid shadow-card"
              : "border border-transparent"
          }`}
          aria-label="Main navigation"
        >
          <Link href="/" className="group flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-neon-400 to-violet-500 shadow-glow-blue transition-transform duration-300 group-hover:scale-110">
              <Icon name="play" className="h-4 w-4 text-white" />
            </span>
            <span className="font-display text-lg font-bold tracking-tight text-white">
              Nova<span className="text-gradient">Stream</span>
            </span>
          </Link>

          <ul className="hidden items-center gap-1 lg:flex">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                    pathname === link.href
                      ? "text-white"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-3 lg:flex">
            <Button href="/contact" variant="ghost">
              Free Trial
            </Button>
            <Button href="/plans" variant="primary">
              Get Started
              <Icon name="arrowRight" className="h-4 w-4" />
            </Button>
          </div>

          <button
            className="flex h-10 w-10 items-center justify-center rounded-xl text-slate-300 hover:text-white lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" className="h-6 w-6">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -12, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: -12, height: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="glass-solid mt-2 overflow-hidden rounded-2xl shadow-card lg:hidden"
            >
              <ul className="flex flex-col p-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-300 transition-colors hover:bg-white/5 hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li className="mt-2 flex flex-col gap-2 border-t border-white/10 p-2 pt-4">
                  <Button href="/plans" variant="primary" className="w-full">
                    Get Started
                  </Button>
                  <Button
                    href={`https://wa.me/${site.whatsappNumber}`}
                    variant="whatsapp"
                    external
                    className="w-full"
                  >
                    <Icon name="whatsapp" className="h-4 w-4" />
                    WhatsApp
                  </Button>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
