'use client'

import { useRef, useEffect } from "react"
import { motion, useMotionValue, useTransform } from "framer-motion"
import { Cpu, Cog, Building2, Droplets, Network } from "lucide-react"
import { useTheme } from "../ThemeProvider"

const technologies = [
  { title: "Automatisation industrielle", description: "Systèmes intelligents pour optimiser les processus industriels et augmenter la productivité.", icon: Cpu },
  { title: "Ingénierie mécanique", description: "Conception et fabrication de structures mécaniques robustes pour les environnements industriels.", icon: Cog },
  { title: "Construction métallique", description: "Structures métalliques avancées pour bâtiments industriels et infrastructures modernes.", icon: Building2 },
  { title: "Irrigation intelligente", description: "Systèmes automatisés pour la gestion efficace de l'eau dans l'agriculture moderne.", icon: Droplets },
  { title: "Infrastructure technologique", description: "Réseaux, domotique et systèmes connectés pour bâtiments intelligents.", icon: Network },
]

export default function TechnologiesSection() {
  const { darkMode } = useTheme()
  const containerRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const scrollY = useMotionValue(0)

  // Parallax scroll global
  useEffect(() => {
    const handleScroll = () => scrollY.set(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Mouse parallax global
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return
    const { left, top, width, height } = containerRef.current.getBoundingClientRect()
    const x = ((e.clientX - left) / width - 0.5) * 2
    const y = ((e.clientY - top) / height - 0.5) * 2
    mouseX.set(x)
    mouseY.set(y)
  }

  // Particles / reflets animés
  const particles = Array.from({ length: 20 })

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className={`relative w-full py-32 px-6 overflow-hidden transition-colors duration-700 ${
        darkMode ? "bg-gradient-to-b from-gray-900 to-black text-white" : "bg-gradient-to-b from-blue-700 via-blue-600 to-blue-500 text-gray-100"
      }`}
    >
      {/* Overlay 3D / Particles */}
      <div className="absolute inset-0 -z-20">
        {particles.map((_, idx) => {
          const size = Math.random() * 6 + 4 // 4px → 10px
          const xOffset = Math.random() * 100
          const yOffset = Math.random() * 100
          const delay = Math.random() * 5

          return (
            <motion.div
              key={idx}
              className={`absolute rounded-full bg-white/20 dark:bg-white/10`}
              style={{
                width: size,
                height: size,
                left: `${xOffset}%`,
                top: `${yOffset}%`,
              }}
              animate={{
                y: ["0%", "20%", "0%"],
                x: ["0%", "10%", "0%"],
                opacity: [0.2, 0.6, 0.2],
              }}
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                duration: 8 + Math.random() * 4,
                delay,
              }}
            />
          )
        })}
      </div>

      {/* Header */}
      <div className="max-w-7xl mx-auto text-center mb-20 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold tracking-tight transition-colors duration-500"
        >
          Technologies & Capabilities
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-6 max-w-2xl mx-auto text-lg transition-colors duration-500"
        >
          Nous développons des solutions d’ingénierie avancées combinant mécanique, automatisation et technologies intelligentes pour construire l’infrastructure de demain.
        </motion.p>
      </div>

      {/* Cards grid */}
      <div className="max-w-7xl mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-3 relative z-10">
        {technologies.map((tech, index) => {
          const Icon = tech.icon
          const cardRotateX = useTransform(mouseY, [-1, 1], [15 - index * 2, -15 + index * 2])
          const cardRotateY = useTransform(mouseX, [-1, 1], [-15 + index * 2, 15 - index * 2])
          const cardTranslateY = useTransform(scrollY, [0, 500], [0, index * 10])

          return (
            <motion.div
              key={index}
              style={{ rotateX: cardRotateX, rotateY: cardRotateY, y: cardTranslateY }}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.7 }}
              whileHover={{ scale: 1.07 }}
              className={`group relative rounded-3xl p-8 shadow-2xl transition-all duration-500 perspective-1000
                ${darkMode
                  ? "bg-gray-800/70 border border-gray-700 hover:shadow-3xl"
                  : "bg-white/20 border border-white/30 hover:shadow-3xl backdrop-blur-xl"
              }`}
            >
              {/* Glow & reflection */}
              <motion.div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-70 bg-gradient-to-tr from-blue-400/20 via-indigo-400/20 to-purple-400/20 pointer-events-none transition duration-500"
              />

              <div className="relative z-10 flex flex-col items-center text-center">
                <Icon className={`w-10 h-10 mb-6 transition-colors duration-500 ${darkMode ? "text-blue-400" : "text-white"}`} />
                <h3 className="text-xl font-semibold mb-3 transition-colors duration-500">{tech.title}</h3>
                <p className="text-sm leading-relaxed transition-colors duration-500">{tech.description}</p>
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}