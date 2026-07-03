export const site = {
  name: "NovaStream",
  tagline: "Premium IPTV, zero buffering",
  description:
    "NovaStream delivers 20,000+ live channels, 80,000+ movies and series in 4K — instant activation, anti-freeze servers and 24/7 support.",
  url: "https://novastream.example.com",
  email: "support@novastream.example.com",
  // Dummy number — replace with your real WhatsApp business number (digits only).
  whatsappNumber: "15550123456",
  socials: {
    twitter: "https://twitter.com",
    instagram: "https://instagram.com",
    telegram: "https://telegram.org",
  },
} as const;

export function whatsappLink(message: string): string {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function mailtoLink(subject: string, body: string): string {
  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
