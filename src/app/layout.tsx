// src/app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "../components/Header";
import { ThemeProvider } from "@/components/ThemeProvider";
import SmoothScrollWrapper from "@/components/SmoothScrollWrapper";

// Fonts Geist
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadata côté serveur pour SEO / Social
export const metadata: Metadata = {
  title: "LENGO-ENGINEERING | Solutions d’ingénierie avancées",
  description: "Solutions d’ingénierie premium pour l’industrie et l’énergie",
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
    images: ["/og-image.png"],
  },
};

// RootLayout côté serveur
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <body>
        <ThemeProvider>
          {/* Header global */}
          <Header />

          {/* SmoothScroll reste un Client Component */}
          <SmoothScrollWrapper />

          {/* Contenu principal */}
          <main className="relative z-10">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}