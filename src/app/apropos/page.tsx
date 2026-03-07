'use client'
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CTAButton from "../../components/hero/CTAButton";
import { motion } from "framer-motion";

const team = [
  { name: "Jean M.", role: "CEO & Fondateur", photo: "/images/team1.jpg", bio: "Visionnaire et passionné par l'innovation industrielle." },
  { name: "Alice K.", role: "CTO", photo: "/images/team2.jpg", bio: "Experte en domotique et technologies intelligentes." },
  { name: "Marc L.", role: "Ingénieur principal", photo: "/images/team3.jpg", bio: "Spécialiste des structures métalliques et précision mécanique." },
];

const stats = [
  { label: "+1200 utilisateurs satisfaits", icon: "👥" },
  { label: "+35 partenaires", icon: "🤝" },
  { label: "+15 pays desservis", icon: "🌍" },
  { label: "99% de satisfaction", icon: "⭐" },
];

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 pt-24 ">

      {/* Hero */}
      <section className="pt-24 text-center bg-gradient-to-r from-blue-600 to-blue-800 text-white py-24">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
          Découvrez <span className="text-blue-400">LENGO ENGINEERING ⚙️</span>
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto drop-shadow-sm">
          Depuis notre création, nous transformons les idées en solutions industrielles fiables et innovantes.
        </p>
      </section>

      {/* Storytelling / Mission */}
      <section className="py-16 px-4 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Notre Histoire</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            LENGO ENGINEERING a été fondée avec la vision de rendre l’ingénierie accessible, sûre et innovante pour les entreprises et les particuliers. Nous combinons expertise technique, précision industrielle et solutions intelligentes pour chaque projet.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            Notre mission : accompagner nos clients avec des solutions fiables et un accompagnement personnalisé.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <img src="/images/about-hero.jpg" alt="Notre histoire" className="rounded-2xl shadow-lg object-cover max-h-96" />
        </motion.div>
      </section>

      {/* Statistiques clés */}
      <section className="py-16 px-4 md:px-16 bg-gray-100 dark:bg-gray-800 text-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="flex flex-col items-center justify-center p-6 bg-white dark:bg-gray-700 rounded-2xl shadow-md hover:shadow-xl transition"
          >
            <div className="text-4xl mb-2">{stat.icon}</div>
            <p className="font-semibold text-lg">{stat.label}</p>
          </motion.div>
        ))}
      </section>

      {/* Équipe */}
      <section className="py-16 px-4 md:px-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Notre Équipe
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition"
            >
              <img
                src={member.photo}
                alt={member.name}
                className="w-32 h-32 rounded-full mb-4 object-cover"
              />
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-gray-600 dark:text-gray-300">{member.role}</p>
              <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-blue-600 dark:bg-blue-700 py-16 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 drop-shadow-lg">
          Découvrez nos services et rejoignez notre réseau
        </h2>
        <CTAButton href="/services">Voir nos Services</CTAButton>
      </section>

      <Footer />
    </div>
  );
}