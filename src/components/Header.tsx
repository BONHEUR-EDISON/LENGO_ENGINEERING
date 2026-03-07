'use client'
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react"; // pour le toggle dark mode
import { useTheme } from "./ThemeProvider";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { darkMode, toggleDarkMode } = useTheme();

  const menuItems = [
    { label: "Accueil", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Produits", href: "/produits" },
    { label: "À propos", href: "/apropos" },
    { label: "Contact", href: "/contact" },
  ];

  // Gestion scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock scroll mobile
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
  }, [mobileOpen]);

  const closeMobileMenu = () => setMobileOpen(false);

  return (
    <header
      className={`fixed w-full max-w-full z-50 transition-all duration-500 ease-in-out ${
        scrolled
          ? "bg-white/20 backdrop-blur-xl shadow-md dark:bg-gray-900/50"
          : "bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-700 text-white shadow-lg dark:from-gray-800 dark:via-gray-900 dark:to-gray-800"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4 md:p-6 w-full">

        {/* Logo */}
        <div className="flex items-center space-x-3 transform transition-transform duration-500"
             style={{ transform: scrolled ? "scale(0.95)" : "scale(1)" }}
        >
          <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold shadow-md transition-colors duration-300 ${
            scrolled
              ? "bg-blue-600 text-white dark:bg-blue-500 dark:text-white"
              : "bg-white/30 text-white dark:bg-gray-700 dark:text-gray-100"
          }`}>
            ⚙️
          </div>
          <div className="flex flex-col leading-tight">
            <span className={`text-2xl font-extrabold tracking-tight transition-colors duration-300 ${
              scrolled
                ? "text-gray-900 dark:text-white"
                : "text-white dark:text-gray-100"
            }`}>LENGO</span>
            <span className={`text-xs uppercase transition-colors duration-300 ${
              scrolled
                ? "text-gray-500 dark:text-gray-300"
                : "text-white/80 dark:text-gray-400"
            }`}>Engineering</span>
          </div>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex flex-wrap space-x-6 font-medium">
          {menuItems.map((item) => (
            <Link key={item.label} href={item.href} className="relative group">
              <span className={`transition-colors duration-200 ${
                scrolled
                  ? "text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400"
                  : "text-white hover:text-blue-300 dark:text-gray-100 dark:hover:text-blue-400"
              }`}>
                {item.label}
              </span>
              <span className={`absolute left-0 -bottom-1 h-0.5 bg-blue-600 transition-all duration-300 scale-x-0 group-hover:scale-x-100 origin-left ${
                scrolled ? "bg-blue-600" : "bg-white dark:bg-blue-400"
              }`}></span>
            </Link>
          ))}
        </nav>

        {/* CTA Desktop + Dark Mode Toggle */}
        <div className="hidden md:flex items-center space-x-4">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/contact"
            className={`px-5 py-2 rounded-lg shadow-md font-semibold transition ${
              scrolled
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "bg-white/30 text-white hover:bg-white/50 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
            }`}
          >
            Nous contacter
          </motion.a>

          <button
            onClick={toggleDarkMode}
            className="p-2 rounded hover:bg-gray-200/20 transition"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <Sun className="w-5 h-5 text-yellow-400"/> : <Moon className="w-5 h-5 text-gray-800 dark:text-white"/>}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMobileOpen(!mobileOpen)} className="p-2 rounded hover:bg-gray-200/20 transition">
            {mobileOpen ? (
              <svg className="w-6 h-6 text-gray-800 dark:text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6 text-gray-800 dark:text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            className="md:hidden fixed top-0 left-0 w-full h-screen z-50 bg-white/20 dark:bg-gray-900/80 backdrop-blur-xl shadow-2xl overflow-y-auto"
          >
            <nav className="flex flex-col p-6 mt-24 space-y-6 text-gray-800 dark:text-gray-100 max-w-full">
              {menuItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className="block text-lg font-semibold hover:text-blue-600 dark:hover:text-blue-400 transition break-words"
                >
                  {item.label}
                </Link>
              ))}
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/contact"
                onClick={closeMobileMenu}
                className="block bg-blue-600 text-center px-4 py-2 rounded-lg hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition text-lg font-semibold mt-4"
              >
                Nous contacter
              </motion.a>
              <div className="text-sm text-center mt-4 text-gray-500 dark:text-gray-400 break-words">
                📞 +243 847 447 696
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}