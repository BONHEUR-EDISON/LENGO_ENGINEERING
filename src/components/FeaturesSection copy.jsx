'use client'
import { motion } from "framer-motion"
import { Cpu, Building2, Wrench, Droplets, Settings, ArrowUpCircle } from "lucide-react"

const features = [
  {
    icon: ArrowUpCircle,
    title: "Innovation continue",
    description:
      "Nous intégrons les dernières technologies pour optimiser vos infrastructures industrielles et résidentielles."
  },
  {
    icon: Building2,
    title: "Expertise structurelle",
    description:
      "Nos ingénieurs conçoivent et supervisent des constructions métalliques robustes et durables."
  },
  {
    icon: Droplets,
    title: "Solutions intelligentes",
    description:
      "Systèmes d’irrigation, domotique et TIC pour automatiser et simplifier vos installations."
  },
  {
    icon: Wrench,
    title: "Précision et performance",
    description:
      "Ajustage de machines et maintenance industrielle avec rigueur et qualité professionnelle."
  },
  {
    icon: Cpu,
    title: "Technologies avancées",
    description:
      "Intégration de systèmes connectés pour une efficacité maximale et un suivi intelligent."
  },
  {
    icon: Settings,
    title: "Fiabilité & sécurité",
    description:
      "Chaque projet est pensé pour la sécurité, la durabilité et la satisfaction totale de nos clients."
  }
]

export default function FeaturesSection() {
  return (
    <section className="py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Titre */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Pourquoi choisir <span className="text-blue-600">LENGO Engineering</span>
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
            Nous transformons vos idées en solutions techniques innovantes, fiables et adaptées à vos besoins.
          </p>
        </div>

        {/* Grid responsive avec alternance de couleurs */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, i) => {
            const Icon = feature.icon
            const bgColors = ["bg-white", "bg-blue-50", "bg-white"]
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`${bgColors[i % bgColors.length]} group p-8 rounded-2xl border border-gray-100 hover:border-blue-500 hover:shadow-2xl transition duration-300`}
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-blue-100 text-blue-600 mb-6 group-hover:scale-110 transition transform">
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}