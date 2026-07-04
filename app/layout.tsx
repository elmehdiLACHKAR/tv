import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import type { ReactNode } from "react";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { brand } from "@/lib/data";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://streamnova.example"),
  title: {
    default: `${brand.name} | Premium American IPTV Streaming Plans`,
    template: `%s | ${brand.name}`,
  },
  description:
    "A premium IPTV and streaming subscription website for the USA, with NFL and American sports coverage, flexible monthly, quarterly and annual plans, fast activation and responsive support.",
  keywords: [
    "IPTV",
    "American IPTV",
    "streaming subscription",
    "premium IPTV USA",
    "live TV",
    "NFL streaming",
    "4K channels",
    "sports streaming",
  ],
  openGraph: {
    title: `${brand.name} | Premium American IPTV Streaming Plans`,
    description:
      "Flexible U.S. IPTV subscription plans with NFL and American sports channels, 4K support and fast activation.",
    type: "website",
    url: "https://streamnova.example",
  },
  icons: {
    icon: "/brand/streamnova-icon.png",
    apple: "/brand/streamnova-icon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable}`}>
      <body className="font-[var(--font-inter)] antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
