'use client'

import Link from "next/link"
import { motion } from "framer-motion"

export default function CTASection() {
  return (
    <section className="py-28 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">

      <div className="max-w-6xl mx-auto px-6 text-center">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          Rejoignez notre plateforme aujourd’hui
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-blue-100 mb-10 max-w-2xl mx-auto"
        >
          LENGO Engineering vous accompagne dans vos projets
          industriels, technologiques et d’infrastructure.
        </motion.p>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >

          <Link
            href="/contact"
            className="bg-white text-blue-700 font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-2xl transition"
          >
            Commencer
          </Link>

        </motion.div>

      </div>

    </section>
  )
}