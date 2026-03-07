"use client";

import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import SmoothScroll from "../components/effetApple/SmoothScroll";
import Header from "../components/Header";
import { ThemeProvider } from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadata SEO + Social
export const metadata: Metadata = {
  title: "LENGO-ENGINEERING | Solutions d’ingénierie avancées",
  description: "Solutions d’ingénierie premium pour l’industrie et l’énergie",
  keywords: ["ingénierie", "industrie", "énergie", "solutions", "Lengo"],
  authors: [{ name: "LENGO ENGINEERING", url: "https://lengo-engineering.vercel.app" }],
  creator: "LENGO ENGINEERING",
  publisher: "LENGO ENGINEERING",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
  alternates: {
    canonical: "https://lengo-engineering.vercel.app/",
  },
  openGraph: {
    title: "LENGO-ENGINEERING | Solutions d’ingénierie avancées",
    description: "Solutions d’ingénierie premium pour l’industrie et l’énergie",
    url: "https://lengo-engineering.vercel.app/",
    siteName: "LENGO ENGINEERING",
    type: "website",
    locale: "fr_FR",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "LENGO ENGINEERING",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LENGO-ENGINEERING | Solutions d’ingénierie avancées",
    description: "Solutions d’ingénierie premium pour l’industrie et l’énergie",
    site: "@lengoengineering",
    creator: "@lengoengineering",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body>
        <ThemeProvider>
          {/* Header global */}
          <Header />

          {/* Smooth scrolling effet Apple */}
          <SmoothScroll />

          {/* Contenu principal */}
          <main className="relative z-10">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
