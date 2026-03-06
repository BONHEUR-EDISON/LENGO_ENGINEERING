import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import SmoothScroll from "../components/effetApple/SmoothScroll"


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LENGO-ENGINEERING | Solutions d’ingénierie avancées",
  description: "Solutions d’ingénierie premium pour l’industrie et l’énergie",
  viewport: "width=device-width, initial-scale=1",
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    canonical: "https://lengo-engineering.vercel.app/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SmoothScroll />

        <main className="relative z-10">
          {children}
        </main>
      </body>
    </html>
  );
}
