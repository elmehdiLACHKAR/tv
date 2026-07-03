"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/plans", label: "Plans" },
  { href: "/checkout", label: "Checkout" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "py-3" : "py-5"
      )}
    >
      <Container>
        <div
          className={cn(
            "flex items-center justify-between rounded-2xl px-4 py-3 transition-all duration-300 sm:px-5",
            scrolled ? "glass-strong shadow-[0_8px_32px_-12px_rgba(0,0,0,0.6)]" : "bg-transparent"
          )}
        >
          <Link href="/" aria-label="Nebula Stream home">
            <Logo />
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative rounded-full px-4 py-2 text-sm font-medium transition-colors",
                    active ? "text-foreground" : "text-muted hover:text-foreground"
                  )}
                >
                  {active ? (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 rounded-full bg-white/[0.07]"
                      transition={{ type: "spring", duration: 0.5 }}
                    />
                  ) : null}
                  <span className="relative">{link.label}</span>
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <Button href="/plans" size="sm" variant="primary">
              Get Started <ArrowRight className="h-4 w-4" />
            </Button>
          </div>

          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-xl text-foreground md:hidden"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="md:hidden"
          >
            <Container className="mt-3">
              <div className="glass-strong flex flex-col gap-1 rounded-2xl p-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "rounded-xl px-4 py-3 text-base font-medium transition-colors",
                      pathname === link.href
                        ? "bg-white/[0.08] text-foreground"
                        : "text-muted hover:bg-white/5 hover:text-foreground"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
                <Button href="/plans" className="mt-2 justify-center">
                  Get Started <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
