'use client'
import { useState, useEffect } from "react";
import CTAButton from "./hero/CTAButton";
import ImageSlider from "./hero/ImageSlider";

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="relative w-full flex flex-col items-center justify-center text-center overflow-hidden pt-24">
      {/* Background: video desktop / slider mobile */}
      {!isMobile ? (
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover z-[-1]"
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <div className="absolute inset-0 z-[-1]">
          <ImageSlider />
        </div>
      )}

      {/* Overlay pour lisibilité */}
      <div className="absolute inset-0 bg-black/30 z-0"></div>

      {/* Texte Hero */}
      <div className="relative z-10 max-w-4xl px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
          Merci d’avoir contacté <span className="text-blue-400">LENGO ENGINEERING ⚙️</span>
        </h1>
        <p className="text-lg md:text-xl mb-6 text-white/90">
          Nos services : commande et montage des ascenseurs, Construction métallique industrielle,
          Irrigation et arrosage automatique, Ajustage et machines outils architecture métallique,
          Domotique et TIC.
        </p>

        {/* CTA détaché */}
        <CTAButton href="/contact">Comment pouvons-nous vous aider ?</CTAButton>
      </div>
    </section>
  );
}