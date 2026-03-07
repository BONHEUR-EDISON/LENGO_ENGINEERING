'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, X } from "lucide-react";
import { useTheme } from "../ThemeProvider";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { darkMode, toggleDarkMode } = useTheme();

  const menuItems = [
    { label: "Accueil", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Produits", href: "/produits" },
    { label: "Projets", href: "/projets" },
    { label: "À propos", href: "/apropos" },
  ];

  // Sticky header
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Bloque le scroll du body quand le menu mobile est ouvert
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-lg border-b border-white/10 shadow-lg dark:bg-black/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 md:px-8 py-4 w-full">
        {/* LOGO */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3"
        >
          <motion.div
            whileHover={{ rotate: 20 }}
            className="w-12 h-10 rounded-full flex items-center justify-center bg-blue-600 text-white font-bold shadow-md"
          >
            ⚙
          </motion.div>

          <div className="leading-tight">
            <p className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">
              LENGO
            </p>
            <p className="text-xs text-gray-500 uppercase dark:text-gray-400">
              Engineering
            </p>
          </div>
        </motion.div>

        {/* NAVIGATION DESKTOP */}
        <nav className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <Link key={item.label} href={item.href} className="relative group">
              <motion.span
                whileHover={{ y: -2 }}
                className="text-gray-700 dark:text-gray-200 font-medium"
              >
                {item.label}
              </motion.span>
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* ACTIONS DESKTOP */}
        <div className="hidden md:flex items-center gap-4">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/contact"
            className="px-6 py-2 rounded-full bg-blue-600 text-white font-medium shadow-lg hover:bg-blue-700 transition"
          >
            Demander un devis
          </motion.a>

          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-gray-200/30 dark:hover:bg-gray-700/30 transition"
          >
            {darkMode ? (
              <Sun className="w-5 h-5 text-yellow-400" />
            ) : (
              <Moon className="w-5 h-5 text-gray-800 dark:text-white" />
            )}
          </button>
        </div>

        {/* BOUTON MOBILE */}
        <div className="md:hidden">
          <button onClick={() => setMobileOpen(!mobileOpen)} className="p-2">
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* MENU MOBILE AVEC ISO26 / BLUR */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-10 px-6 sm:px-12 bg-white/95 dark:bg-black/80 backdrop-blur-[26px] overflow-y-auto"
          >
            {/* BOUTON FERMER */}
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute top-6 right-6 p-3 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
            >
              <X className="w-6 h-6 text-gray-800 dark:text-white" />
            </button>

            {/* MENU */}
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="font-semibold text-2xl text-gray-900 dark:text-white"
              >
                {item.label}
              </Link>
            ))}

            <motion.a
              whileHover={{ scale: 1.1 }}
              href="/contact"
              className="px-6 py-3 rounded-full bg-blue-600 text-white text-lg shadow-lg hover:bg-blue-700 transition"
            >
              Demander un devis
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}