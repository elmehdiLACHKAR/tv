import {
  BadgeCheck,
  Clock3,
  Globe2,
  Headphones,
  MonitorPlay,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";

export const brand = {
  name: "StreamNova",
  tagline: "Premium IPTV for every screen",
  email: "support@streamnova.example",
  whatsapp: "+1 555 014 9088",
  whatsappUrl:
    "https://wa.me/15550149088?text=Hi%20StreamNova%2C%20I%20want%20to%20start%20a%20premium%20IPTV%20subscription.",
};

export const plans = [
  {
    name: "Starter",
    period: "1 month",
    price: "$14",
    description: "A flexible plan for trying premium live TV and on-demand streaming.",
    features: [
      "18,000+ live channels",
      "4K, FHD and HD streams",
      "24-hour instant activation",
      "Works on smart TV and mobile",
    ],
    cta: "Start monthly",
    popular: false,
  },
  {
    name: "Plus",
    period: "3 months",
    price: "$29",
    description: "The best-selling plan for consistent entertainment at a better value.",
    features: [
      "All Starter features",
      "Premium sports and cinema",
      "Priority setup guidance",
      "Anti-freeze stream routing",
    ],
    cta: "Choose Plus",
    popular: true,
  },
  {
    name: "Elite",
    period: "12 months",
    price: "$79",
    description: "A full year of premium streaming with the strongest long-term savings.",
    features: [
      "All Plus features",
      "Massive VOD library",
      "Multi-device setup support",
      "VIP renewal reminders",
    ],
    cta: "Go annual",
    popular: false,
  },
];

export const features = [
  {
    title: "Crystal-clear streaming",
    description:
      "Enjoy HD, FHD and 4K channels optimized for smooth playback on modern devices.",
    icon: MonitorPlay,
  },
  {
    title: "Global channel lineup",
    description:
      "Access international sports, movies, shows, news and family entertainment in one place.",
    icon: Globe2,
  },
  {
    title: "Fast activation",
    description:
      "Get your subscription details and setup guidance quickly after checkout confirmation.",
    icon: Zap,
  },
  {
    title: "Premium support",
    description:
      "Reach a real support channel by WhatsApp or email whenever you need setup help.",
    icon: Headphones,
  },
  {
    title: "Secure checkout flow",
    description:
      "Choose your plan, confirm via WhatsApp or email, and receive clear next steps.",
    icon: ShieldCheck,
  },
  {
    title: "Reliable uptime",
    description:
      "Smart routing and curated playlists help keep entertainment running during peak hours.",
    icon: Clock3,
  },
];

export const highlights = [
  { value: "18K+", label: "Live channels" },
  { value: "4K", label: "Ultra HD ready" },
  { value: "24/7", label: "Support access" },
  { value: "99%", label: "Uptime focus" },
];

export const testimonials = [
  {
    quote:
      "The setup was simple and the channel quality feels miles ahead of my old provider.",
    name: "Amina R.",
    role: "Sports fan",
  },
  {
    quote:
      "I needed a premium-looking service for my family TV and mobile devices. StreamNova delivered.",
    name: "Lucas M.",
    role: "Family plan user",
  },
  {
    quote:
      "Fast support on WhatsApp, clean instructions, and no complicated hardware. Exactly what I wanted.",
    name: "Nora K.",
    role: "Smart TV customer",
  },
];

export const faqs = [
  {
    question: "How quickly is my plan activated?",
    answer:
      "Most subscriptions are activated shortly after checkout confirmation. You will receive setup details by WhatsApp or email.",
  },
  {
    question: "Which devices are supported?",
    answer:
      "You can use most Smart TVs, Android boxes, Fire TV devices, phones, tablets, computers and IPTV player apps.",
  },
  {
    question: "Can I test the service first?",
    answer:
      "Contact support to ask about current trial availability and the recommended app for your device.",
  },
  {
    question: "What happens after I buy?",
    answer:
      "Choose a plan, send your order via WhatsApp or email, and support will confirm payment and activation steps.",
  },
];

export const trustItems = [
  { label: "Instant setup guidance", icon: BadgeCheck },
  { label: "Curated premium content", icon: Sparkles },
  { label: "Encrypted support channels", icon: ShieldCheck },
];
