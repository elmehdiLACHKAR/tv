import type { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { site, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact & Support",
  description:
    "Reach NovaStream support 24/7 via WhatsApp or email. Free trials, setup help, billing questions — real humans, fast answers.",
};

const channels = [
  {
    icon: "whatsapp",
    title: "WhatsApp",
    description: "Fastest way to reach us. Typical reply time: under 5 minutes.",
    action: "Chat now",
    href: whatsappLink("Hi! I need help with NovaStream."),
    external: true,
    accent: "text-emerald-400",
  },
  {
    icon: "mail",
    title: "Email support",
    description: `Write to ${site.email} — we answer every message within a few hours.`,
    action: "Send email",
    href: `mailto:${site.email}`,
    external: false,
    accent: "text-neon-400",
  },
  {
    icon: "clock",
    title: "24/7 availability",
    description: "Nights, weekends, holidays — our support team never sleeps.",
    action: "See FAQ",
    href: "/#faq",
    external: false,
    accent: "text-violet-400",
  },
];

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-24 pt-36 sm:px-6 sm:pt-44">
      <SectionHeading
        eyebrow="Contact"
        title={
          <>
            Talk to a <span className="text-gradient">real human</span>, anytime
          </>
        }
        subtitle="Questions about plans, free trials or setup? Pick your favorite channel — we're online 24/7."
      />

      <div className="mb-12 grid gap-6 md:grid-cols-3">
        {channels.map((channel, index) => (
          <Reveal key={channel.title} delay={index * 0.1}>
            <a
              href={channel.href}
              {...(channel.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="glass group flex h-full flex-col rounded-3xl p-8 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-white/25"
            >
              <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 transition-transform duration-300 group-hover:scale-110">
                <Icon name={channel.icon} className={`h-6 w-6 ${channel.accent}`} />
              </span>
              <h3 className="font-display text-lg font-semibold text-white">
                {channel.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">
                {channel.description}
              </p>
              <span className={`mt-5 inline-flex items-center gap-1.5 text-sm font-semibold ${channel.accent}`}>
                {channel.action}
                <Icon name="arrowRight" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </a>
          </Reveal>
        ))}
      </div>

      <ContactForm />
    </section>
  );
}
