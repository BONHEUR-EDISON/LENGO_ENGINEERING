'use client'

import { useState, useEffect } from "react"
import CTAButton from "./hero/CTAButton"
import { useTheme } from "./ThemeProvider"

const images = [
  "/images/hero-img1.jpg",
  "/images/hero-img2.jpg",
  "/images/hero-img3.jpg",
]

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false)
  const [current, setCurrent] = useState(0)
  const { darkMode } = useTheme()

  // Detect mobile
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Auto slide for mobile
  useEffect(() => {
    if (!isMobile) return
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [isMobile])

  const prevSlide = () => setCurrent((prev) => (prev - 1 + images.length) % images.length)
  const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length)

  return (
    <section className="relative w-full flex flex-col items-center justify-center text-center overflow-hidden pt-20 pb-35 h-[700px] md:h-[800px]">
      {/* Background: video desktop / slider mobile */}
      {!isMobile ? (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-[-2] transition-opacity duration-1000"
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <div className="absolute inset-0 z-[-2]">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Hero ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                index === current ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 text-white rounded-full p-2 z-10 hover:bg-black/60 transition"
          >
            &#10094;
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 text-white rounded-full p-2 z-10 hover:bg-black/60 transition"
          >
            &#10095;
          </button>

          {/* Pagination dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
            {images.map((_, idx) => (
              <span
                key={idx}
                className={`w-3 h-3 rounded-full cursor-pointer transition ${
                  idx === current ? "bg-white" : "bg-white/50"
                }`}
                onClick={() => setCurrent(idx)}
              ></span>
            ))}
          </div>
        </div>
      )}

      {/* Overlay pour lisibilité */}
      <div
        className={`absolute inset-0 z-0 transition-colors duration-500 ${
          darkMode ? "bg-black/50" : "bg-black/30"
        }`}
      ></div>

      {/* Texte Hero */}
      <div className="relative z-10 max-w-4xl px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-lg">
          Merci d’avoir contacté <span className="text-blue-400">LENGO ENGINEERING ⚙️</span>
        </h1>
        <p className="text-lg md:text-xl mb-6 text-white/90 drop-shadow-sm">
          Nos services : commande et montage des ascenseurs, Construction métallique industrielle,
          Irrigation et arrosage automatique, Ajustage et machines outils architecture métallique,
          Domotique et TIC.
        </p>

        {/* CTA */}
        <div className="flex justify-center">
          <CTAButton href="/contact" className="z-10">
            Comment pouvons-nous vous aider ?
          </CTAButton>
        </div>
      </div>
    </section>
  )
}