'use client'
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ServicesSection from "../../components/ServicesSection";
import CTAButton from "../../components/hero/CTAButton";

export default function Services() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header fixe */}
      <Header />

      {/* Hero simplifié */}
      <section className="pt-24 text-center bg-gradient-to-r from-blue-500 to-blue-700 text-white py-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Nos Services</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Découvrez nos solutions techniques et industrielles conçues pour répondre à vos besoins.
        </p>
      </section>

      {/* Services */}
      <main className="flex-grow px-4 md:px-16 py-12">
        <ServicesSection />
      </main>

      {/* CTA */}
      <section className="bg-blue-600 py-12 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Besoin d’un conseil ou devis ?</h2>
        <CTAButton href="/contact">Contactez-nous dès maintenant</CTAButton>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}