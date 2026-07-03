import { Clock, Mail, MessageCircle, Send } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { siteConfig, buildWhatsAppLink } from "@/lib/site-config";

const cards = [
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: siteConfig.contact.whatsappDisplay,
    helper: "Fastest way to reach us — usually replies in minutes.",
    href: buildWhatsAppLink("Hi! I have a question about Nebula Stream."),
    cta: "Chat now",
    accent: "bg-[#25D366]/15 text-[#25D366]",
  },
  {
    icon: Mail,
    title: "Email",
    value: siteConfig.contact.email,
    helper: "For detailed questions, invoices, or partnership requests.",
    href: `mailto:${siteConfig.contact.email}`,
    cta: "Send email",
    accent: "bg-primary/15 text-primary-2",
  },
  {
    icon: Send,
    title: "Telegram",
    value: "@nebulastream",
    helper: "Join our channel for outage updates and announcements.",
    href: siteConfig.contact.telegram,
    cta: "Open Telegram",
    accent: "bg-secondary/15 text-secondary-2",
  },
];

export function ContactInfo() {
  return (
    <div className="flex flex-col gap-5">
      {cards.map((card) => (
        <GlassCard key={card.title} className="p-6">
          <div className={`inline-flex h-11 w-11 items-center justify-center rounded-xl ${card.accent}`}>
            <card.icon className="h-5 w-5" />
          </div>
          <h3 className="mt-4 font-display text-lg font-semibold text-foreground">
            {card.title}
          </h3>
          <p className="mt-1 text-sm text-foreground/80">{card.value}</p>
          <p className="mt-1 text-xs text-muted">{card.helper}</p>
          <Button href={card.href} external variant="outline" size="sm" className="mt-4">
            {card.cta}
          </Button>
        </GlassCard>
      ))}

      <GlassCard className="flex items-center gap-3 p-6">
        <Clock className="h-5 w-5 shrink-0 text-primary-2" />
        <p className="text-sm text-muted">{siteConfig.contact.hours}</p>
      </GlassCard>
    </div>
  );
}
