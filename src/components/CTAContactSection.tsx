'use client'

import Link from "next/link"
import { motion } from "framer-motion"
import { useTheme } from "./ThemeProvider"

export default function CTAContactSection() {
  const { darkMode } = useTheme()
  return (
    <section className={`py-24 text-center transition-colors duration-500 ${darkMode ? "bg-gray-800" : "bg-blue-50"}`}>
      <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${darkMode ? "text-white" : "text-blue-600"}`}>
        Besoin d’un conseil ou d’un devis ?
      </h2>
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
        <Link href="/contact" className={`px-8 py-4 rounded-md font-semibold text-lg shadow-md transition ${darkMode ? "bg-blue-600 text-white hover:bg-blue-500" : "bg-blue-600 text-white hover:bg-blue-700"}`}>
          Contactez-nous
        </Link>
      </motion.div>
    </section>
  )
}