import type { Metadata } from "next";
import { Inter, Cormorant_Garamond, Azeret_Mono, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const azeretMono = Azeret_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-azeret",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Dr. Joshi's Holistic Multispeciality Clinic | Ayurvedic Treatment Mumbai",
  description:
    "Authentic Ayurvedic healing for kidney disease, cancer care, and chronic conditions. Treating since 2004 with BAMS + MD expertise. Book your consultation today.",
  keywords:
    "Ayurvedic doctor Mumbai, kidney treatment Ayurveda, cancer Ayurveda, Dr Joshi Ayurveda",
  openGraph: {
    title: "Dr. Joshi's Holistic Multispeciality Clinic",
    description:
      "Root cause Ayurvedic healing since 2004. 10,000+ patients healed.",
    siteName: "Dr. Joshi's Clinic",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable} ${azeretMono.variable} ${ibmPlexMono.variable}`}>
      <body className="font-sans antialiased">
        <Navbar />
        {children}
        <Footer />
        <WhatsAppWidget />
      </body>
    </html>
  );
}
