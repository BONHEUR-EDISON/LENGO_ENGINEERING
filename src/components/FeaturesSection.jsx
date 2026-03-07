'use client'
import { motion } from "framer-motion"
import { Cpu, Building2, Wrench, Droplets, Settings, ArrowUpCircle } from "lucide-react"

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
  return (
    <section className="py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Titre */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Pourquoi <span className="text-blue-600">LENGO Engineering</span> ?
          </h2>
          <p className="text-gray-600 mt-4 max-w-3xl mx-auto text-lg">
            En Afrique, de nombreux défis techniques et industriels freinent le développement. LENGO a été créé pour proposer des solutions fiables, innovantes et adaptées à ce contexte unique.
          </p>
        </div>

        {/* Grid responsive avec alternance */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, i) => {
            const Icon = feature.icon
            const bgColors = ["bg-white", "bg-blue-50", "bg-white"]
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
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