'use client';

import { motion } from "framer-motion";
import CTAButton from "../hero/CTAButton";
import { useTheme } from "../ThemeProvider";

export default function Hero() {
  const { darkMode } = useTheme();

  return (
    <section className="relative w-full h-[90vh] flex items-center justify-center text-center overflow-hidden">
      {/* VIDEO BACKGROUND */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover scale-105"
      >
        <source src="/videos/hero-video.mp4" type="video/mp4" />
      </video>

      {/* OVERLAY */}
      <div
        className={`absolute inset-0 ${
          darkMode ? "bg-black/60" : "bg-black/40"
        }`}
      ></div>

      {/* HERO CONTENT */}
      <div className="relative z-10 max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight break-words"
        >
          Engineering the <span className="text-blue-400">Future</span> of Infrastructure
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-white/90 leading-relaxed"
        >
          Ascenseurs intelligents • Construction métallique • Automatisation industrielle • Domotique avancée
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="mt-6 sm:mt-10 flex flex-col sm:flex-row gap-4 justify-center flex-wrap"
        >
          <CTAButton href="/contact">Demander une étude technique</CTAButton>

          <a
            href="/services"
            className="px-6 py-3 rounded-full border border-white/40 text-white hover:bg-white/10 transition"
          >
            Découvrir nos services
          </a>
        </motion.div>
      </div>

      {/* SCROLL INDICATOR */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-4 sm:bottom-8 text-white text-2xl"
      >
        ↓
      </motion.div>
    </section>
  );
}