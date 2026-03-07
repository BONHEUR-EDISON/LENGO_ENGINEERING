'use client'
import { motion } from "framer-motion";

const services = [
  {
    title: "Commande et montage d’ascenseurs",
    description: "Installation et maintenance professionnelle de vos ascenseurs avec sécurité maximale.",
    icon: "⚙️",
  },
  {
    title: "Construction métallique industrielle",
    description: "Structures métalliques robustes et personnalisées pour tous vos projets industriels.",
    icon: "🏗️",
  },
  {
    title: "Irrigation et arrosage automatique",
    description: "Systèmes d’irrigation modernes pour l’agriculture et les espaces verts.",
    icon: "💧",
  },
  {
    title: "Ajustage et machines outils",
    description: "Précision et expertise dans l’usinage et l’ajustage de pièces métalliques.",
    icon: "🛠️",
  },
  {
    title: "Domotique et TIC",
    description: "Solutions intelligentes pour maisons et entreprises connectées.",
    icon: "🏠",
  },
];

export default function ServicesSection() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-24">
      {services.map((service, index) => (
        <motion.div
          key={service.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.15, duration: 0.5 }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-2xl transition-all duration-300"
        >
          <div className="text-6xl mb-4">{service.icon}</div>
          <h3 className="text-xl font-bold mb-2">{service.title}</h3>
          <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
        </motion.div>
      ))}
    </div>
  );
}