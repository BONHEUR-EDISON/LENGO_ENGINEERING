'use client'

import ProjectsSection from "@/components/sections/ProjectsSection"
import TechnologiesSection from "@/components/TechnologiesSection"
import CTAContactSection from "@/components/CTAContactSection"
import Footer from "@/components/sections/Footer"
import { useTheme } from "@/components/ThemeProvider"

export default function ProjectsPage() {
  const { darkMode } = useTheme()

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-500 
      ${darkMode ? "bg-gray-900 text-gray-100" : "bg-white text-gray-900"}`}
    >
      {/* Projects Section */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-16">
        <ProjectsSection />
      </section>

      {/* Technologies & R&D */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-16 bg-gray-50 dark:bg-gray-800">
        <TechnologiesSection />
      </section>

      {/* CTA Contact */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-16 bg-blue-700 text-white">
        <CTAContactSection />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}