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
    <section className="py-28 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white text-center mb-16">
          Timeline de nos projets
        </h2>

        <div className="relative border-l-2 border-blue-600 dark:border-blue-400 ml-4 md:ml-6">
          {timeline.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="mb-12 ml-6 relative"
            >
              <span className="absolute -left-5 md:-left-6 w-8 h-8 md:w-10 md:h-10 rounded-full bg-blue-600 dark:bg-blue-400 border-2 border-white dark:border-gray-900"></span>
              <time className="text-blue-600 dark:text-blue-400 font-semibold">{item.year}</time>
              <h3 className="text-xl md:text-2xl font-bold mt-1 text-gray-900 dark:text-white">{item.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}