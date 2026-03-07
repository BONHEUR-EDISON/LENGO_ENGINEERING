'use client'
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ServicesSection from "../../components/ServicesSection";
import CTAButton from "../../components/hero/CTAButton";

export default function Services() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 pt-24">
     
      {/* Hero simplifié */}
      <section className="pt-24 text-center bg-gradient-to-r from-blue-600 to-blue-800 text-white py-24">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
          Nos Services
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto drop-shadow-sm">
          Découvrez nos solutions techniques et industrielles conçues pour répondre à vos besoins avec efficacité et expertise.
        </p>
      </section>

      {/* Services */}
      <main className="flex-grow px-4 md:px-16 py-16">
        <ServicesSection />
      </main>

      {/* CTA final */}
      <section className="bg-blue-600 dark:bg-blue-700 py-16 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 drop-shadow-lg">
          Besoin d’un conseil ou d’un devis ?
        </h2>
        <CTAButton href="/contact">
          Contactez-nous dès maintenant
        </CTAButton>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}