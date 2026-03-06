import Header from "../components/Header";
import Hero from "../components/Hero";
import ServicesSection from "../components/ServicesSection";
import FeaturesSection from "../components/FeaturesSection";
import ProjectsSection from "../components/ProjectsSection";
import ProjectsTimeline from "../components/ProjectsTimeline"
import MetalStructure from "@/components/MetalStructure";
import MapSection from "@/components/MapSection";
import StatsSection from "../components/StatsSection";

import TestimonialsSection from "../components/TestimonialsSection";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-grow pt-24 space-y-24">
        <Hero />

        <ServicesSection />

        <FeaturesSection />

        <ProjectsSection />
        <ProjectsTimeline />
        <MetalStructure />
        <MapSection />

        <StatsSection />

        <TestimonialsSection />

        <CTASection />
      </main>

      <Footer />
    </div>
  );
}
