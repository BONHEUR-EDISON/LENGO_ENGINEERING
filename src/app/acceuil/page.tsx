import Header from "../../components/sections/Header";
import Hero from "../../components/sections/Hero";
import ServicesSection from "../../components/sections/ServicesSection";
import Footer from "../../components/sections/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <ServicesSection />
      </main>
      <Footer />
    </div>
  );
}
