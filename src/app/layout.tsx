// src/app/layout.tsx
import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "../components/Header";
import { ThemeProvider } from "@/components/ThemeProvider";
import SmoothScrollWrapper from "@/components/SmoothScrollWrapper";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

// Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Viewport (bonne pratique Next.js 14+)
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

// Metadata SEO
export const metadata: Metadata = {
  title: "LENGO-ENGINEERING | Solutions d’ingénierie avancées",
  description: "Solutions d’ingénierie premium pour l’industrie et l’énergie",

  keywords: [
    "ingénierie",
    "industrie",
    "énergie",
    "ascenseurs",
    "construction métallique",
    "domotique",
    "Lengo Engineering",
  ],

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },

  alternates: {
    canonical: "https://lengo-engineering.vercel.app/",
  },

  openGraph: {
    title: "LENGO ENGINEERING",
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
    title: "LENGO ENGINEERING",
    description: "Solutions d’ingénierie premium pour l’industrie et l’énergie",
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
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="antialiased">

        <ThemeProvider>

          {/* Header */}
          <Header />

          {/* Smooth scroll */}
          <SmoothScrollWrapper />

          {/* Main content */}
          <main className="relative z-10">
            {children}
          </main>

        </ThemeProvider>

        {/* Analytics Vercel */}
        <Analytics />

        {/* Performance metrics */}
        <SpeedInsights />

      </body>
    </html>
  );
}