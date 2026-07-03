export const siteConfig = {
  name: "Nebula Stream",
  shortName: "NebulaStream",
  tagline: "Premium Streaming, Reimagined",
  description:
    "Nebula Stream delivers ultra-reliable IPTV with 20,000+ live channels, global sports, blockbuster VOD, and 4K/8K quality on every screen you own.",
  url: "https://www.nebulastream.example",
  ogImage: "/og-image.png",
  contact: {
    email: "support@nebulastream.example",
    salesEmail: "sales@nebulastream.example",
    whatsappNumber: "15551234567",
    whatsappDisplay: "+1 (555) 123-4567",
    telegram: "https://t.me/nebulastream",
    address: "Remote-first · Serving customers worldwide",
    hours: "Live support 24/7, every day of the year",
  },
  social: {
    twitter: "https://twitter.com/nebulastream",
    instagram: "https://instagram.com/nebulastream",
    facebook: "https://facebook.com/nebulastream",
    telegram: "https://t.me/nebulastream",
  },
  stats: [
    { label: "Live channels", value: "20,000+" },
    { label: "Active subscribers", value: "84,000+" },
    { label: "Average uptime", value: "99.9%" },
    { label: "Countries served", value: "150+" },
  ],
};

export function buildWhatsAppLink(message: string) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encoded}`;
}

export function buildMailtoLink(options: {
  to?: string;
  subject: string;
  body: string;
}) {
  const to = options.to ?? siteConfig.contact.email;
  const subject = encodeURIComponent(options.subject);
  const body = encodeURIComponent(options.body);
  return `mailto:${to}?subject=${subject}&body=${body}`;
}
