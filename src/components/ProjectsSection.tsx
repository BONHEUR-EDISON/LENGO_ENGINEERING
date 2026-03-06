'use client'

import Image from "next/image"
import { motion } from "framer-motion"

type Project = {
  title: string
  category: string
  image: string
}

const projects: Project[] = [
  {
    title: "Installation d’ascenseur moderne",
    category: "Ascenseurs",
    image: "/projects/elevator.jpg"
  },
  {
    title: "Structure métallique industrielle",
    category: "Construction métallique",
    image: "/projects/metal.jpg"
  },
  {
    title: "Système d’irrigation automatisé",
    category: "Irrigation",
    image: "/projects/irrigation.jpg"
  },
  {
    title: "Machines industrielles",
    category: "Ingénierie",
    image: "/projects/machines.jpg"
  },
  {
    title: "Domotique bâtiment intelligent",
    category: "Domotique",
    image: "/projects/domotique.jpg"
  },
  {
    title: "Infrastructure technique",
    category: "Engineering",
    image: "/projects/engineering.jpg"
  }
]

export default function ProjectsSection() {
  return (
    <section className="py-28 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">

        {/* title */}

        <div className="text-center mb-20">

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Projets réalisés
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Découvrez quelques projets réalisés par notre équipe
            dans les domaines de l’ingénierie et des infrastructures.
          </p>

        </div>

        {/* grid */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl shadow-lg"
            >

              {/* image */}

              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className="w-full h-72 object-cover group-hover:scale-110 transition duration-500"
              />

              {/* overlay */}

              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end p-6">

                <span className="text-blue-400 text-sm">
                  {project.category}
                </span>

                <h3 className="text-white text-xl font-semibold">
                  {project.title}
                </h3>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  )
}