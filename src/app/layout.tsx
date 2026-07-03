import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AnimatedBackground from "@/components/ui/AnimatedBackground";
import { SITE_NAME, SITE_DESCRIPTION } from "@/lib/constants";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: `${SITE_NAME} — Premium IPTV Streaming Service`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "IPTV",
    "streaming",
    "live TV",
    "4K channels",
    "sports streaming",
    "movies on demand",
  ],
  openGraph: {
    title: `${SITE_NAME} — Premium IPTV Streaming Service`,
    description: SITE_DESCRIPTION,
    type: "website",
    locale: "en_US",
    siteName: SITE_NAME,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — Premium IPTV Streaming Service`,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}
      >
        <AnimatedBackground />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
