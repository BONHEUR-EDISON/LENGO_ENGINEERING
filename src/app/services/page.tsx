'use client'

import Footer from "../../components/sections/Footer"
import CTAButton from "../../components/hero/CTAButton"
import  ServicesSection from "../../components/sections/ServicesSection"
import { motion } from "framer-motion"
import { useTheme } from "../../components/ThemeProvider"


export default function Services() {
  const { darkMode } = useTheme()

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-500 ${darkMode ? "bg-gray-900 text-gray-100" : "bg-blue-50 text-gray-900"}`}>
      

      {/* Hero */}
      <section className={`pt-24 text-center py-24 transition-colors duration-500 ${darkMode ? "bg-gray-800" : "bg-gradient-to-r from-blue-600 to-blue-800 text-white"}`}>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
          Nos Services
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto drop-shadow-sm">
          Découvrez nos solutions techniques et industrielles conçues pour répondre à vos besoins avec efficacité et expertise.
        </p>
      </section>

      {/* Services Section */}
      <main className="flex-grow px-4 md:px-16 py-16">
        <ServicesSection />
      </main>

      {/* Technologies & Capabilities teaser */}
      <section className="py-32 px-6 relative">
        <div className={`absolute inset-0 -z-10 transition-colors duration-500 ${darkMode ? "bg-gray-900" : "bg-gradient-to-b from-white to-blue-50"}`} />
        <div className="max-w-7xl mx-auto text-center mb-20">
          <motion.h2 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }} className={`text-4xl md:text-5xl font-bold tracking-tight transition-colors duration-500 ${darkMode ? "text-white" : "text-gray-900"}`}>
            Technologies & Capabilities
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} viewport={{ once: true }} className={`mt-6 max-w-2xl mx-auto text-lg transition-colors duration-500 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
            Nous développons des solutions d’ingénierie avancées combinant mécanique, automatisation et technologies intelligentes pour construire l’infrastructure de demain.
          </motion.p>
        </div>
        {/* Ici tu peux réutiliser les cartes de TechnologiesSection pour teaser */}
      </section>

      {/* CTA final */}
      <section className={`py-16 text-center transition-colors duration-500 ${darkMode ? "bg-blue-700 text-white" : "bg-blue-600 text-white"}`}>
        <h2 className="text-3xl md:text-4xl font-bold mb-6 drop-shadow-lg">
          Besoin d’un conseil ou d’un devis ?
        </h2>
        <CTAButton href="/contact">
          Contactez-nous dès maintenant
        </CTAButton>
      </section>

      <Footer />
    </div>
  )
}