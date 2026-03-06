'use client'

import Header from "../components/Header"
import Hero from "../components/Hero"
import ServicesSection from "../components/ServicesSection"
import FeaturesSection from "../components/FeaturesSection"
import ProjectsSection from "../components/ProjectsSection"
import ProjectsTimeline from "../components/ProjectsTimeline"
import MetalStructure from "../components/MetalStructure"
import MapSection from "../components/MapSection"
import StatsSection from "../components/StatsSection"
import TestimonialsSection from "../components/TestimonialsSection"
import CTASection from "../components/CTASection"
import Footer from "../components/Footer"
import Reveal from "../components/Reveal"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">

      {/* Header */}
      <Header />

      <main className="flex-grow pt-24">

        {/* Hero */}
        <section className="bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 text-white">
          <Hero />
        </section>

        {/* Services */}
        <section className="bg-gray-50">
          <Reveal><ServicesSection /></Reveal>
        </section>

        {/* Features */}
        <section className="bg-white">
          <Reveal><FeaturesSection /></Reveal>
        </section>

        {/* Projets */}
        <section className="bg-gray-50">
          <Reveal><ProjectsSection /></Reveal>
        </section>

        {/* Timeline */}
        <section className="bg-white">
          <Reveal><ProjectsTimeline /></Reveal>
        </section>

        {/* 3D Structure */}
        <section className="bg-gray-50">
          <Reveal><MetalStructure /></Reveal>
        </section>

        {/* Carte interactive */}
        <section className="bg-white">
          <Reveal><MapSection /></Reveal>
        </section>

        {/* Statistiques */}
        <section className="bg-gray-50">
          <Reveal><StatsSection /></Reveal>
        </section>

        {/* Témoignages */}
        <section className="bg-white">
          <Reveal><TestimonialsSection /></Reveal>
        </section>

        {/* Call To Action final */}
        <section className="bg-blue-700 text-white">
          <Reveal><CTASection /></Reveal>
        </section>

      </main>

      {/* Footer */}
      <Footer />

    </div>
  )
}