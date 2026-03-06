'use client'

import Link from "next/link"
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="relative bg-white/20 backdrop-blur-xl border-t border-white/30 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Logo & Description */}
        <div className="flex flex-col space-y-4">
          <span className="text-2xl font-bold text-blue-700">LENGO</span>
          <span className="text-sm text-gray-700">Engineering ⚙️ — Fourniture et pose d’ascenseurs, construction métallique industrielle, domotique et TIC.</span>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition">
              <FaFacebookF />
            </a>
            <a href="#" className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition">
              <FaTwitter />
            </a>
            <a href="#" className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Liens rapides */}
        <div className="flex flex-col space-y-3">
          <h3 className="font-semibold text-gray-800 mb-2">Liens rapides</h3>
          <Link href="/" className="hover:text-blue-600 transition">Accueil</Link>
          <Link href="/products" className="hover:text-blue-600 transition">Produits</Link>
          <Link href="/services" className="hover:text-blue-600 transition">Services</Link>
          <Link href="/about" className="hover:text-blue-600 transition">À propos</Link>
          <Link href="/contact" className="hover:text-blue-600 transition">Contact</Link>
        </div>

        {/* Contact */}
        <div className="flex flex-col space-y-3">
          <h3 className="font-semibold text-gray-800 mb-2">Contact</h3>
          <p className="text-gray-700">📞 +243 847 447 696</p>
          <p className="text-gray-700">📞 +243 896 902 904</p>
          <p className="text-gray-700">📧 contact@lengoengineering.com</p>
        </div>

        {/* Newsletter */}
        <div className="flex flex-col space-y-3">
          <h3 className="font-semibold text-gray-800 mb-2">Newsletter</h3>
          <p className="text-gray-700">Recevez nos dernières mises à jour et projets.</p>
          <form className="mt-2 flex">
            <input
              type="email"
              placeholder="Votre email"
              className="flex-grow px-4 py-2 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-r-md transition font-semibold"
            >
              S’inscrire
            </button>
          </form>
        </div>

      </div>

      {/* Copyright */}
      <div className="border-t border-white/30 mt-8 py-6 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} LENGO Engineering. Tous droits réservés.
      </div>
    </footer>
  )
}