'use client'
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleMobileMenu = () => setMobileOpen(!mobileOpen);

  const menuItems = [
    { label: "Accueil", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Produits", href: "/produits" },
    { label: "À propos", href: "/apropos" },
    { label: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // déclenche à partir de 50px
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/50 backdrop-blur-md shadow-md"
          : "bg-gradient-to-r from-blue-500 to-blue-700 text-white shadow-lg"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4 md:p-6">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold shadow-md ${
            scrolled ? "bg-blue-600 text-white" : "bg-white/30 text-white"
          }`}>
            ⚙️
          </div>
          <div className="flex flex-col leading-tight">
            <span className={`text-2xl font-extrabold tracking-tight ${
              scrolled ? "text-gray-900" : "text-white"
            }`}>LENGO</span>
            <span className={`text-xs uppercase ${
              scrolled ? "text-gray-500" : "text-white/80"
            }`}>Engineering</span>
          </div>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-10 font-medium transition-colors duration-300">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`relative group transition-colors duration-200 ${
                scrolled ? "text-gray-700 hover:text-blue-600" : "text-white hover:text-blue-300"
              }`}
            >
              {item.label}
              <span className={`absolute left-0 -bottom-1 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full ${
                scrolled ? "bg-blue-600" : "bg-white"
              }`}></span>
            </Link>
          ))}
        </nav>

        {/* CTA Desktop */}
        <div className="hidden md:flex items-center space-x-4">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/contact"
            className={`px-5 py-2 rounded-lg shadow-md font-semibold transition ${
              scrolled ? "bg-blue-600 text-white hover:bg-blue-700" : "bg-white/30 text-white hover:bg-white/50"
            }`}
          >
            Nous contacter
          </motion.a>
          <div className={`text-sm transition-colors duration-300 ${
            scrolled ? "text-gray-500" : "text-white"
          }`}>📞 +243 847 447 696</div>
        </div>

        {/* Mobile button */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="p-2 rounded hover:bg-gray-100 transition">
            {mobileOpen ? (
              <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            className="md:hidden fixed top-0 left-0 w-full h-screen z-50 bg-white/95 backdrop-blur-md shadow-2xl overflow-y-auto"
          >
            <nav className="flex flex-col p-6 mt-24 space-y-6 text-gray-800">
              {menuItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-lg font-semibold hover:text-blue-600 transition"
                >
                  {item.label}
                </Link>
              ))}
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/contact"
                className="block bg-blue-600 text-center px-4 py-2 rounded-lg hover:bg-blue-700 transition text-lg font-semibold mt-4"
              >
                Nous contacter
              </motion.a>
              <div className="text-sm text-center mt-4 text-gray-500">
                📞 +243 847 447 696
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}