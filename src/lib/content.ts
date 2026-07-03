import type { ComponentType, SVGProps } from "react";
import {
  Bolt,
  Devices,
  Globe,
  Headset,
  Shield,
  Sparkle,
} from "@/components/icons";

export type Feature = {
  title: string;
  description: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
};

export const features: Feature[] = [
  {
    title: "20,000+ Live Channels",
    description:
      "News, sports, entertainment and international channels streaming around the clock from every continent.",
    icon: Globe,
  },
  {
    title: "Blazing-Fast Servers",
    description:
      "Load-balanced global CDN with anti-freeze technology delivers instant zapping and buffer-free playback.",
    icon: Bolt,
  },
  {
    title: "Any Device, Anywhere",
    description:
      "Smart TV, Firestick, Android, iOS, MAG, Mac & Windows — set up in minutes with our guided apps.",
    icon: Devices,
  },
  {
    title: "4K / UHD Quality",
    description:
      "Crystal-clear adaptive streaming that scales from mobile data to full 4K on your big screen.",
    icon: Sparkle,
  },
  {
    title: "99.9% Uptime & Secure",
    description:
      "Redundant infrastructure and encrypted connections keep you streaming, privately and reliably.",
    icon: Shield,
  },
  {
    title: "24/7 Human Support",
    description:
      "Real people on WhatsApp and email, ready to help you install, activate and troubleshoot anytime.",
    icon: Headset,
  },
];

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
  initials: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Marcus Reed",
    role: "Sports fan · Chicago",
    initials: "MR",
    quote:
      "I cancelled three separate subscriptions after switching. Every match, every league, zero buffering. NebulaStream just works.",
  },
  {
    name: "Elena Torres",
    role: "Family of five · Madrid",
    initials: "ET",
    quote:
      "Setup took five minutes and the kids have their cartoons while I get my series. The 4K quality genuinely surprised me.",
  },
  {
    name: "David Kim",
    role: "Frequent traveler · Seoul",
    initials: "DK",
    quote:
      "I watch my home channels from any hotel in the world. Support answered on WhatsApp within a minute. Incredible value.",
  },
  {
    name: "Amara Okafor",
    role: "Movie lover · London",
    initials: "AO",
    quote:
      "The VOD library is enormous and always up to date. It feels like every streaming app rolled into one clean platform.",
  },
];

export type FaqItem = {
  question: string;
  answer: string;
};

export const faqs: FaqItem[] = [
  {
    question: "What is NebulaStream and how does it work?",
    answer:
      "NebulaStream is a premium IPTV service that streams live TV, movies and series over your internet connection. After purchase you receive activation details and a quick setup guide for your device.",
  },
  {
    question: "Which devices are supported?",
    answer:
      "Smart TVs (Samsung, LG, Android TV), Amazon Firestick, Android & iOS phones/tablets, MAG boxes, Windows and Mac. If it connects to the internet, it most likely works.",
  },
  {
    question: "How fast is activation after I pay?",
    answer:
      "Most subscriptions are activated within 5–30 minutes. You'll receive your login and setup instructions by WhatsApp or email as soon as your order is confirmed.",
  },
  {
    question: "Do I need a VPN?",
    answer:
      "A VPN is optional and not required in most regions, but we provide free guidance if you'd like the extra layer of privacy and stability.",
  },
  {
    question: "What internet speed do I need?",
    answer:
      "We recommend at least 15 Mbps for Full HD and 25 Mbps+ for smooth 4K streaming. Our adaptive technology automatically adjusts to your connection.",
  },
  {
    question: "What is your refund policy?",
    answer:
      "We offer a satisfaction guarantee. If you experience an issue we can't resolve within the first 24 hours, reach out and we'll make it right.",
  },
];

export type Step = {
  title: string;
  description: string;
};

export const steps: Step[] = [
  {
    title: "Choose your plan",
    description: "Pick 1, 3 or 12 months — the longer you go, the more you save.",
  },
  {
    title: "Checkout via WhatsApp or email",
    description: "Send us your selection and we confirm your order in minutes.",
  },
  {
    title: "Receive activation",
    description: "Get your credentials and a simple, device-specific setup guide.",
  },
  {
    title: "Start streaming",
    description: "Open the app, log in, and enjoy 20,000+ channels in stunning quality.",
  },
];

export const stats = [
  { value: "20K+", label: "Live channels" },
  { value: "80K+", label: "Movies & series" },
  { value: "99.9%", label: "Uptime" },
  { value: "50K+", label: "Happy viewers" },
];
