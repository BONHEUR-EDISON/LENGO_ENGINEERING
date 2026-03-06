'use client'
import Header from "../components/Header";
import Hero from "../components/Hero";
import ServicesSection from "../components/ServicesSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header fixe */}
      <Header />

      {/* Main content avec padding top pour header */}
      <main className="flex-grow pt-24 py-20"> {/* <-- pt-24 correspond à la hauteur du header */}
        <Hero />
        <ServicesSection />
      </main>

      <Footer />
    </div>
  );
}