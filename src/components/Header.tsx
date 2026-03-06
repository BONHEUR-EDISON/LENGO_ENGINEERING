'use client'
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const toggleMobileMenu = () => setMobileOpen(!mobileOpen);

  return (
    <header className="bg-gray-900 text-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4 md:p-6">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl font-bold shadow-lg">
            ⚙️
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-2xl font-extrabold tracking-wide">LENGO</span>
            <span className="text-sm text-gray-300 uppercase">Engineering</span>
          </div>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 font-medium">
          {["Accueil", "Services", "Contact"].map((item) => (
            <Link key={item} href={`/${item.toLowerCase()}`} className="hover:text-blue-400 transition-all duration-200 relative group">
              {item}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
        </nav>

        {/* CTA Desktop */}
        <div className="hidden md:flex flex-col items-end space-y-1 text-right">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/contact"
            className="bg-blue-600 px-4 py-2 rounded shadow hover:bg-blue-700 transition font-semibold"
          >
            Comment pouvons-nous vous aider ?
          </motion.a>
          <div className="text-sm text-gray-300">📞 +243 847 447 696 | +243 896 902 904</div>
        </div>

        {/* Mobile button */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="p-2 rounded hover:bg-gray-800 transition">
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="md:hidden fixed top-0 left-0 w-full h-screen z-50 bg-gray-900/80 backdrop-blur-lg shadow-2xl overflow-y-auto"
          >
            <nav className="flex flex-col p-6 mt-24 space-y-4">
              {["Accueil", "Services", "Contact"].map((item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  onClick={() => setMobileOpen(false)}
                  className="block text-lg font-semibold text-white hover:text-blue-400 transition"
                >
                  {item}
                </Link>
              ))}
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/contact"
                className="block bg-blue-600 text-center px-4 py-2 rounded hover:bg-blue-700 transition text-lg font-semibold mt-4"
              >
                Comment pouvons-nous vous aider ?
              </motion.a>
              <div className="text-sm text-center mt-2 text-gray-300">
                📞 +243 847 447 696 | +243 896 902 904
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}