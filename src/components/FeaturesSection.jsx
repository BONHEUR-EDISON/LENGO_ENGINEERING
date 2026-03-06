'use client'

import { motion } from "framer-motion"
import {
  Cpu,
  Building2,
  Wrench,
  Droplets,
  Settings,
  ArrowUpCircle
} from "lucide-react"

const features = [
  {
    icon: ArrowUpCircle,
    title: "Ascenseurs",
    description:
      "Commande, installation et maintenance d’ascenseurs modernes pour bâtiments résidentiels et industriels."
  },
  {
    icon: Building2,
    title: "Construction métallique",
    description:
      "Fabrication et montage de structures métalliques industrielles robustes et durables."
  },
  {
    icon: Droplets,
    title: "Irrigation intelligente",
    description:
      "Systèmes d’irrigation et d’arrosage automatique pour agriculture et infrastructures."
  },
  {
    icon: Wrench,
    title: "Machines industrielles",
    description:
      "Ajustage, maintenance et conception de machines outils pour l'industrie."
  },
  {
    icon: Cpu,
    title: "Domotique & TIC",
    description:
      "Automatisation des bâtiments, systèmes connectés et solutions technologiques avancées."
  },
  {
    icon: Settings,
    title: "Ingénierie technique",
    description:
      "Solutions techniques innovantes pour les infrastructures industrielles et technologiques."
  }
]

export default function FeaturesSection() {
  return (
    <section className="py-28 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* titre */}
        <div className="text-center mb-20">

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Nos expertises
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            LENGO Engineering propose des solutions techniques modernes
            pour l’industrie, l’ingénierie et les infrastructures.
          </p>

        </div>

        {/* grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {features.map((feature, i) => {
            const Icon = feature.icon

            return (

              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-8 rounded-2xl border border-gray-100 hover:border-blue-500 hover:shadow-xl transition duration-300 bg-white"
              >

                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-blue-100 text-blue-600 mb-6 group-hover:scale-110 transition">

                  <Icon size={28} />

                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

              </motion.div>

            )
          })}

        </div>

      </div>

    </section>
  )
}