'use client'

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Cpu, Building2, Wrench, Droplets, Settings, ArrowUpCircle } from "lucide-react"
import { useTheme } from "../ThemeProvider"

const features = [
  {
    icon: ArrowUpCircle,
    title: "Problème d’infrastructures fiables",
    description:
      "En RDC et dans plusieurs pays africains, l’accès à des infrastructures industrielles et résidentielles fiables reste limité, avec des équipements souvent obsolètes ou mal entretenus."
  },
  {
    icon: Building2,
    title: "Nos solutions innovantes",
    description:
      "LENGO Engineering conçoit, installe et maintient des solutions techniques modernes : ascenseurs, constructions métalliques, systèmes d’irrigation et domotique, adaptés aux réalités locales."
  },
  {
    icon: Droplets,
    title: "Expertise et précision",
    description:
      "Grâce à une équipe qualifiée et des technologies avancées, chaque projet est exécuté avec rigueur, sécurité et durabilité, réduisant les risques et optimisant les performances."
  },
  {
    icon: Wrench,
    title: "Fiabilité et sécurité",
    description:
      "Nos services garantissent des infrastructures sûres, entretenues et conformes aux standards internationaux, répondant aux besoins industriels et résidentiels."
  },
  {
    icon: Cpu,
    title: "Solutions adaptées au contexte africain",
    description:
      "Chaque projet prend en compte les contraintes locales (climat, ressources, maintenance) pour fournir des installations efficaces et durables."
  },
  {
    icon: Settings,
    title: "Pourquoi LENGO est la meilleure",
    description:
      "Innovation, expertise technique, suivi rigoureux et engagement envers nos clients font de LENGO Engineering le partenaire privilégié pour transformer vos infrastructures en Afrique."
  }
]

export default function FeaturesSection() {
  const { darkMode } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Evite le mismatch SSR
  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  return (
    <section className={`py-28 transition-colors duration-500 ${darkMode ? "bg-gray-900" : "bg-blue-50"}`}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Titre */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className={`text-4xl md:text-5xl font-bold tracking-tight transition-colors duration-500 ${darkMode ? "text-white" : "text-gray-900"}`}
          >
            Pourquoi <span className={`transition-colors duration-500 ${darkMode ? "text-blue-400" : "text-blue-600"}`}>LENGO Engineering</span> ?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className={`mt-4 max-w-3xl mx-auto text-lg transition-colors duration-500 ${darkMode ? "text-gray-300" : "text-gray-600"}`}
          >
            En Afrique, de nombreux défis techniques et industriels freinent le développement. LENGO a été créé pour proposer des solutions fiables, innovantes et adaptées à ce contexte unique.
          </motion.p>
        </div>

        {/* Grid responsive */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, i) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                whileHover={{ rotateX: 6, rotateY: -6, scale: 1.03 }}
                className={`
                  group relative rounded-3xl p-8 shadow-lg transition-all duration-500 perspective-1000
                  ${darkMode
                    ? "bg-gray-800/60 border border-gray-700 hover:border-blue-400 hover:shadow-2xl"
                    : "bg-white/70 border border-gray-200 hover:border-blue-500 hover:shadow-2xl backdrop-blur-xl"}
                `}
              >
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10" />

                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className={`w-14 h-14 flex items-center justify-center rounded-xl mb-6 transition-transform duration-500 transform ${darkMode ? "bg-blue-900/30 text-blue-400" : "bg-blue-100 text-blue-600"} group-hover:scale-110`}>
                    <Icon size={28} />
                  </div>
                  <h3 className={`text-xl font-semibold mb-3 transition-colors duration-500 ${darkMode ? "text-white" : "text-gray-900"}`}>
                    {feature.title}
                  </h3>
                  <p className={`text-gray-600 dark:text-gray-300 text-sm leading-relaxed transition-colors duration-500`}>
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}