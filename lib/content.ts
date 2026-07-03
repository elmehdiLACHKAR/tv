export type Feature = {
  title: string;
  description: string;
  icon: string; // key resolved by the Icon component
};

export const features: Feature[] = [
  {
    title: "20,000+ Live Channels",
    description:
      "Sports, movies, news, kids and international channels from 100+ countries — all in one place.",
    icon: "tv",
  },
  {
    title: "4K Ultra HD Quality",
    description:
      "Crystal-clear 4K, FHD and HD streams powered by premium anti-freeze servers with 99.9% uptime.",
    icon: "sparkles",
  },
  {
    title: "Instant Activation",
    description:
      "Receive your access credentials within minutes of ordering. No waiting, no complicated setup.",
    icon: "bolt",
  },
  {
    title: "All Devices Supported",
    description:
      "Smart TV, Android, iOS, Firestick, MAG, Windows, macOS — if it has a screen, we stream to it.",
    icon: "devices",
  },
  {
    title: "80,000+ Movies & Series",
    description:
      "A massive on-demand library updated daily with the latest blockbusters and trending series.",
    icon: "film",
  },
  {
    title: "24/7 Human Support",
    description:
      "Real people on WhatsApp and email, around the clock. Setup help, troubleshooting, anything.",
    icon: "chat",
  },
];

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
  rating: number;
  initials: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Marcus T.",
    role: "Sports fan — United Kingdom",
    quote:
      "Every Premier League match in 4K without a single freeze. I cancelled three other subscriptions after my first weekend with NovaStream.",
    rating: 5,
    initials: "MT",
  },
  {
    name: "Sofia R.",
    role: "Family plan — Spain",
    quote:
      "Setup took five minutes on our Smart TV and the kids' channels selection is huge. Support answered my WhatsApp message at 1am. Impressive.",
    rating: 5,
    initials: "SR",
  },
  {
    name: "David K.",
    role: "Movie enthusiast — Canada",
    quote:
      "The VOD library is unreal — new releases show up faster than anywhere else I've tried. The 12-month plan basically pays for itself.",
    rating: 5,
    initials: "DK",
  },
  {
    name: "Amira H.",
    role: "Expat — Germany",
    quote:
      "Finally, all my home-country channels plus international sports in one subscription. Streams are stable even during big events.",
    rating: 4,
    initials: "AH",
  },
  {
    name: "James L.",
    role: "Firestick user — USA",
    quote:
      "Was skeptical at first, but the free trial convinced me. Zero buffering on my Firestick and the EPG guide is spot-on accurate.",
    rating: 5,
    initials: "JL",
  },
  {
    name: "Elena P.",
    role: "Multi-device home — Italy",
    quote:
      "Three connections means the living room, bedroom and my phone all stream at once. Best value we've found, period.",
    rating: 5,
    initials: "EP",
  },
];

export type Faq = {
  question: string;
  answer: string;
};

export const faqs: Faq[] = [
  {
    question: "What is IPTV and how does NovaStream work?",
    answer:
      "IPTV delivers television over the internet instead of satellite or cable. After you order, we send your personal access credentials by email or WhatsApp. Enter them into any IPTV-compatible app and start watching within minutes.",
  },
  {
    question: "Which devices are supported?",
    answer:
      "Practically all of them: Smart TVs (Samsung, LG, Android TV), Amazon Firestick, Android and iOS phones and tablets, MAG and Formuler boxes, Windows, macOS and web players. We'll help you set up any device for free.",
  },
  {
    question: "How fast is activation after payment?",
    answer:
      "Activation is nearly instant. Most customers receive their credentials within 5–15 minutes of confirming their order via WhatsApp or email, 24 hours a day.",
  },
  {
    question: "Do I need a VPN or special internet connection?",
    answer:
      "No VPN is required in most regions. Any stable connection of 10 Mbps or faster is enough for FHD, and 25 Mbps is recommended for 4K streams.",
  },
  {
    question: "Can I watch on multiple devices at the same time?",
    answer:
      "Yes. The Starter plan includes 1 connection, Plus includes 2, and Ultimate includes 3 simultaneous connections. Need more? Contact us for a custom multi-room offer.",
  },
  {
    question: "Is there a free trial or money-back guarantee?",
    answer:
      "We offer a free 24-hour trial so you can test channels, quality and stability on your own devices. The 12-month Ultimate plan also comes with a 7-day money-back guarantee.",
  },
  {
    question: "How do I pay and complete my order?",
    answer:
      "Choose your plan, then finish the order through WhatsApp or email. Our team confirms your payment method, activates your subscription and walks you through setup personally.",
  },
];

export const channelCategories = [
  "Live Sports",
  "Movies & Cinema",
  "News Worldwide",
  "Kids & Family",
  "Documentaries",
  "Entertainment",
  "Music & Radio",
  "PPV Events",
  "International",
  "Series & Shows",
];

export const stats = [
  { value: "20K+", label: "Live channels" },
  { value: "80K+", label: "Movies & series" },
  { value: "99.9%", label: "Server uptime" },
  { value: "45K+", label: "Happy customers" },
];
