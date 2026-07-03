import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "StreamVault — Premium IPTV Streaming Service",
  description:
    "Access 20,000+ live channels, VOD content, and sports in stunning 4K quality. Start your premium IPTV experience today.",
  keywords: [
    "IPTV",
    "streaming",
    "live TV",
    "4K channels",
    "premium IPTV",
    "sports streaming",
    "VOD",
  ],
  openGraph: {
    title: "StreamVault — Premium IPTV Streaming Service",
    description: "Access 20,000+ live channels in 4K quality.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} antialiased bg-dark-900 text-white`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
