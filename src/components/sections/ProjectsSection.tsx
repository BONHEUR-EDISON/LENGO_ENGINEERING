'use client'

import Image from "next/image"
import { motion, useMotionValue, useTransform } from "framer-motion"
import { useRef } from "react"
import { useTheme } from "../ThemeProvider"

type Project = {
  title: string
  category: string
  image: string
  result?: string
}

const projects: Project[] = [
  {
    title: "Installation d’ascenseur moderne",
    category: "Ascenseurs",
    image: "/projects/elevator.jpg",
    result: "12 bâtiments équipés"
  },
  {
    title: "Structure métallique industrielle",
    category: "Construction métallique",
    image: "/projects/metal.jpg",
    result: "5 usines livrées"
  },
  {
    title: "Système d’irrigation automatisé",
    category: "Irrigation",
    image: "/projects/irrigation.jpg",
    result: "80 hectares modernisés"
  },
  {
    title: "Machines industrielles",
    category: "Ingénierie",
    image: "/projects/machines.jpg",
    result: "20 machines installées"
  },
  {
    title: "Domotique bâtiment intelligent",
    category: "Domotique",
    image: "/projects/domotique.jpg",
    result: "25 bâtiments connectés"
  },
  {
    title: "Infrastructure technique",
    category: "Engineering",
    image: "/projects/engineering.jpg",
    result: "10 sites opérationnels"
  }
]

export default function ProjectsSection() {
  const { darkMode } = useTheme()
  const cardRef = useRef<HTMLDivElement>(null)

  return (
    <section className={`py-28 transition-colors duration-500 ${darkMode ? "bg-gray-900" : "bg-white"}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 transition-colors duration-500 ${darkMode ? "text-white" : "text-blue-600"}`}>
            Projets réalisés
          </h2>
          <p className={`text-lg md:text-xl transition-colors duration-500 ${darkMode ? "text-gray-300" : "text-gray-900"}`}>
            Découvrez nos réalisations emblématiques en ingénierie, construction et technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              ref={cardRef}
              className={`group relative overflow-hidden rounded-3xl shadow-lg cursor-pointer transition-all duration-500 ${darkMode ? "bg-gray-800 border border-gray-700" : "bg-white border border-gray-200"}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition duration-500 z-10"
              />

              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className="w-full h-72 object-cover group-hover:scale-110 transition duration-500"
              />

              <div className="absolute bottom-0 left-0 right-0 p-6 bg-black/50 dark:bg-gray-900/50 backdrop-blur-md text-white rounded-b-3xl">
                <span className="text-blue-400 text-sm">{project.category}</span>
                <h3 className="text-xl font-semibold mt-1">{project.title}</h3>
                {project.result && <p className="text-sm mt-1">{project.result}</p>}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}