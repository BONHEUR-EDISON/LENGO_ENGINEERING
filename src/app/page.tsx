'use client'

import Header from "../components/sections/Header"
import Hero from "../components/sections/Hero"
import ServicesSection from "../components/sections/ServicesSection"
import FeaturesSection from "../components/sections/FeaturesSection"
import ProjectsSection from "../components/sections/ProjectsSection"
import ProjectsTimeline from "../components/sections/ProjectsTimeline"
import MetalStructure from "../components/sections/MetalStructure"
import MapSection from "../components/sections/MapSection"
import StatsSection from "../components/sections/StatsSection"
import TestimonialsSection from "../components/sections/TestimonialsSection"
import CTASection from "../components/sections/CTASection"
import Footer from "../components/sections/Footer"
import Reveal from "../components/sections/Reveal"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-full overflow-x-hidden">

      <main className="flex-grow w-full pt-24">

        {/* Hero */}
        <section className="w-full bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 text-white">
          <Hero />
        </section>

        {/* Services */}
        <section className="w-full bg-gray-50 px-4 sm:px-6 md:px-8 lg:px-16 mx-auto">
          <Reveal><ServicesSection /></Reveal>
        </section>

        {/* Features */}
        <section className="w-full bg-white px-4 sm:px-6 md:px-8 lg:px-16 mx-auto">
          <Reveal><FeaturesSection /></Reveal>
        </section>

        {/* Projects */}
        <section className="w-full bg-gray-50 px-4 sm:px-6 md:px-8 lg:px-16 mx-auto">
          <Reveal><ProjectsSection /></Reveal>
        </section>

        {/* Timeline */}
        <section className="w-full bg-white px-4 sm:px-6 md:px-8 lg:px-16 mx-auto">
          <Reveal><ProjectsTimeline /></Reveal>
        </section>

        {/* 3D Structure */}
        <section className="w-full bg-gray-50 px-4 sm:px-6 md:px-8 lg:px-16 mx-auto">
          <Reveal><MetalStructure /></Reveal>
        </section>

        {/* Map */}
        <section className="w-full bg-white px-4 sm:px-6 md:px-8 lg:px-16 mx-auto">
          <Reveal><MapSection /></Reveal>
        </section>

        {/* Stats */}
        <section className="w-full bg-gray-50 px-4 sm:px-6 md:px-8 lg:px-16 mx-auto">
          <Reveal><StatsSection /></Reveal>
        </section>

        {/* Testimonials */}
        <section className="w-full bg-white px-4 sm:px-6 md:px-8 lg:px-16 mx-auto">
          <Reveal><TestimonialsSection /></Reveal>
        </section>

        {/* Call to Action */}
        <section className="w-full bg-blue-700 text-white px-4 sm:px-6 md:px-8 lg:px-16 mx-auto">
          <Reveal><CTASection /></Reveal>
        </section>

      </main>

      {/* Footer 
      <Footer />*/}
    </div>
  )
}