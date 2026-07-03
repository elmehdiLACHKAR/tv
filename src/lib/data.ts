import type { Plan, Feature, Testimonial, FAQItem } from "@/types";

export const plans: Plan[] = [
  {
    id: "monthly",
    name: "Starter",
    duration: "1 Month",
    months: 1,
    price: 14.99,
    features: [
      "15,000+ Live Channels",
      "HD & 4K Quality",
      "1 Device Connection",
      "Movies & Series Library",
      "EPG TV Guide",
      "Email Support",
    ],
    description: "Perfect for trying out premium streaming.",
  },
  {
    id: "quarterly",
    name: "Pro",
    duration: "3 Months",
    months: 3,
    price: 34.99,
    originalPrice: 44.97,
    popular: true,
    features: [
      "15,000+ Live Channels",
      "HD & 4K Quality",
      "2 Device Connections",
      "Movies & Series Library",
      "EPG TV Guide",
      "Sports & PPV Events",
      "Priority Support",
      "Anti-Freeze Technology",
    ],
    description: "Our most popular plan — best value for regular viewers.",
  },
  {
    id: "annual",
    name: "Elite",
    duration: "12 Months",
    months: 12,
    price: 89.99,
    originalPrice: 179.88,
    features: [
      "15,000+ Live Channels",
      "HD & 4K Quality",
      "4 Device Connections",
      "Movies & Series Library",
      "EPG TV Guide",
      "Sports & PPV Events",
      "VIP Priority Support",
      "Anti-Freeze Technology",
      "Adult Content (Optional)",
      "Free Setup Assistance",
    ],
    description: "Maximum savings for dedicated streamers.",
  },
];

export const features: Feature[] = [
  {
    icon: "tv",
    title: "15,000+ Channels",
    description:
      "Access live TV from around the world — sports, news, entertainment, and more in one place.",
  },
  {
    icon: "film",
    title: "VOD Library",
    description:
      "Thousands of movies and series on demand, updated daily with the latest releases.",
  },
  {
    icon: "zap",
    title: "Instant Activation",
    description:
      "Get your credentials within minutes after purchase. No waiting, start streaming right away.",
  },
  {
    icon: "shield",
    title: "Stable & Secure",
    description:
      "Anti-freeze technology and 99.9% uptime ensure smooth playback without interruptions.",
  },
  {
    icon: "devices",
    title: "Multi-Device",
    description:
      "Watch on Smart TV, Fire Stick, Android, iOS, MAG boxes, and all popular IPTV apps.",
  },
  {
    icon: "headphones",
    title: "24/7 Support",
    description:
      "Our dedicated team is available around the clock via WhatsApp and email to help you.",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Marcus Rivera",
    role: "Sports Enthusiast",
    avatar: "MR",
    content:
      "Switched from cable and never looked back. Every Premier League match in 4K with zero buffering. The setup took less than 10 minutes.",
    rating: 5,
  },
  {
    id: "2",
    name: "Sarah Chen",
    role: "Family Subscriber",
    avatar: "SC",
    content:
      "My whole family uses NexStream on different devices. The kids love the movie library and I love the price. Incredible value for 3 months.",
    rating: 5,
  },
  {
    id: "3",
    name: "David Okonkwo",
    role: "Expat Viewer",
    avatar: "DO",
    content:
      "Finally found a service with all my home country channels. Picture quality is outstanding and customer support replied on WhatsApp in minutes.",
    rating: 5,
  },
  {
    id: "4",
    name: "Elena Vasquez",
    role: "Movie Buff",
    avatar: "EV",
    content:
      "The VOD selection is massive — newer releases than my old provider. Glass-smooth interface and the annual plan saved me a fortune.",
    rating: 5,
  },
];

export const faqItems: FAQItem[] = [
  {
    question: "What devices are compatible with NexStream?",
    answer:
      "NexStream works on Smart TVs (Samsung, LG), Amazon Fire Stick, Android TV boxes, smartphones, tablets, MAG boxes, Formuler, and any device that supports IPTV apps like IPTV Smarters, TiviMate, or GSE Smart IPTV.",
  },
  {
    question: "How quickly will I receive my subscription?",
    answer:
      "Activation is instant. Once your payment is confirmed via WhatsApp or email, you'll receive your login credentials within 5–15 minutes during business hours, and within 1 hour outside business hours.",
  },
  {
    question: "Do you offer a free trial?",
    answer:
      "We offer a 24-hour trial for new customers. Contact us via WhatsApp to request a trial account and experience our service before committing to a plan.",
  },
  {
    question: "What internet speed do I need?",
    answer:
      "We recommend a minimum of 10 Mbps for HD streaming and 25 Mbps for 4K content. A stable wired or 5GHz Wi-Fi connection provides the best experience.",
  },
  {
    question: "Can I use my subscription on multiple devices?",
    answer:
      "Yes, depending on your plan. Starter allows 1 device, Pro allows 2, and Elite allows up to 4 simultaneous connections. You can upgrade anytime.",
  },
  {
    question: "What is your refund policy?",
    answer:
      "We offer a 7-day money-back guarantee if the service doesn't work on your device after our support team has attempted setup assistance. Contact us within 7 days of purchase.",
  },
];
