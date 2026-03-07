'use client'

import { motion } from "framer-motion"
import { Cpu, Cog, Building2, Droplets, Network } from "lucide-react"
import { useTheme } from "./ThemeProvider"

const technologies = [
  { title: "IoT", icon: Network },
  { title: "Automation PLC", icon: Cog },
  { title: "CAD / Simulation", icon: Building2 },
  { title: "Smart Energy", icon: Droplets },
  { title: "AI Monitoring", icon: Cpu }
]

export default function TechnologiesSection() {
  const { darkMode } = useTheme()

  return (
    <section className={`py-28 transition-colors duration-500 ${darkMode ? "bg-gray-900" : "bg-white"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className={`text-4xl md:text-5xl font-bold mb-6 transition-colors duration-500 ${darkMode ? "text-white" : "text-blue-600"}`}>
          Technologies & R&D
        </h2>
        <p className={`text-lg md:text-xl mb-12 transition-colors duration-500 ${darkMode ? "text-gray-300" : "text-gray-900"}`}>
          Nos technologies avancées pour garantir des solutions fiables et innovantes.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 sm:gap-10">
          {technologies.map((tech, i) => {
            const Icon = tech.icon
            return (
              <motion.div
                key={i}
                className={`group flex flex-col items-center text-center p-6 rounded-2xl transition-all duration-500 cursor-pointer 
                  ${darkMode ? "bg-gray-800 hover:shadow-2xl" : "bg-blue-50 hover:shadow-2xl"}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                whileHover={{ scale: 1.05, rotateX: 2, rotateY: -2 }}
              >
                <Icon className={`w-12 h-12 mb-3 transition-colors duration-500 ${darkMode ? "text-blue-400" : "text-blue-600"}`} />
                <span className={`font-semibold transition-colors duration-500 ${darkMode ? "text-white" : "text-gray-900"}`}>
                  {tech.title}
                </span>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}