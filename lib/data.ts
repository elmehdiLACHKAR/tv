import {
  BadgeCheck,
  Clock3,
  Headphones,
  MonitorPlay,
  ShieldCheck,
  Sparkles,
  Trophy,
  Zap,
} from "lucide-react";

export const brand = {
  name: "StreamNova",
  tagline: "Premium IPTV built for the USA",
  country: "United States",
  email: "support@streamnova.example",
  whatsapp: "+1 (555) 014-9088",
  whatsappUrl:
    "https://wa.me/15550149088?text=Hi%20StreamNova%2C%20I%20want%20to%20start%20a%20premium%20IPTV%20subscription.",
};

export const plans = [
  {
    name: "Starter",
    period: "1 month",
    price: "$14",
    description: "A flexible plan for trying premium U.S. live TV and on-demand streaming.",
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
    description: "The best-selling plan for consistent American entertainment at a better value.",
    features: [
      "All Starter features",
      "American sports and cinema",
      "Priority setup guidance",
      "Anti-freeze stream routing",
    ],
    cta: "Choose Plus",
    popular: true,
  },
  {
    name: "Premium",
    period: "12 months",
    price: "$49.99",
    description: "A full year of premium U.S. streaming at the strongest long-term savings.",
    features: [
      "All Plus features",
      "Full American sports coverage",
      "Massive movies, series and anime library",
      "VIP renewal reminders",
    ],
    cta: "Go Premium annual",
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
    title: "Full American sports coverage",
    description:
      "Follow the NFL regular season and playoffs, NBA, MLB and NHL alongside U.S. news, movies and family entertainment in one place.",
    icon: Trophy,
  },
  {
    title: "Fast U.S. activation",
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
  { value: "NFL", label: "American football live" },
  { value: "24/7", label: "Support access" },
];

/**
 * Reviews are shown as real WhatsApp screenshots rather than typed quotes.
 * Drop your own screenshots into `public/reviews/` (any image name) and
 * reference them here — the placeholders below show exactly where to swap.
 */
export const reviewScreenshots = [
  { src: "/reviews/review-1.png", alt: "Customer WhatsApp review screenshot 1" },
  { src: "/reviews/review-2.png", alt: "Customer WhatsApp review screenshot 2" },
  { src: "/reviews/review-3.png", alt: "Customer WhatsApp review screenshot 3" },
  { src: "/reviews/review-4.png", alt: "Customer WhatsApp review screenshot 4" },
];

export const channels = [
  { name: "Gridiron Nation Live", category: "American Football" },
  { name: "Hoops Central HD", category: "Basketball" },
  { name: "Diamond League Network", category: "Baseball" },
  { name: "Ice Nation Hockey", category: "Hockey" },
  { name: "Capitol News 24", category: "News" },
  { name: "Liberty Cinema", category: "Movies" },
  { name: "Sunrise Kids Network", category: "Family" },
  { name: "Stage Country Music", category: "Music" },
  { name: "Vantage Business Live", category: "Finance" },
  { name: "Metro Weather Now", category: "Weather" },
];

export const streamingLibrary = [
  { title: "Neon Skyline", type: "Movie", genre: "Sci-Fi" },
  { title: "Boardwalk Nights", type: "Series", genre: "Drama" },
  { title: "Starbound Academy", type: "Anime", genre: "Action" },
  { title: "Midnight Circuit", type: "Movie", genre: "Thriller" },
  { title: "Coastal Heights", type: "Series", genre: "Drama" },
  { title: "Shadow Ronin", type: "Anime", genre: "Fantasy" },
  { title: "Route 9 Diner", type: "Series", genre: "Comedy" },
  { title: "Ember & Ash", type: "Movie", genre: "Romance" },
  { title: "Pixel Knights", type: "Anime", genre: "Adventure" },
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
