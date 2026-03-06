'use client'

import { motion } from "framer-motion"

const timeline = [
  { year: "2019", title: "Installation d’ascenseurs modernes" },
  { year: "2020", title: "Construction métallique industrielle" },
  { year: "2021", title: "Système d’irrigation automatisé" },
  { year: "2022", title: "Domotique et TIC pour bâtiments" },
  { year: "2023", title: "Machines industrielles ajustées" }
]

export default function ProjectsTimeline() {
  return (
    <section className="py-28 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">
          Timeline de nos projets
        </h2>

        <div className="relative border-l-2 border-blue-600 ml-6">
          {timeline.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="mb-12 ml-6"
            >
              <span className="absolute -left-4 w-8 h-8 rounded-full bg-blue-600 border-2 border-white"></span>
              <time className="text-blue-600 font-semibold">{item.year}</time>
              <h3 className="text-xl font-bold mt-1">{item.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}