'use client'
import { useState, useEffect } from "react";

const images = [
  "/images/hero1.jpg",
  "/images/hero2.jpg",
  "/images/hero3.jpg",
];

export default function ImageSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000); // changement toutes les 5s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full relative">
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
      <div className="absolute inset-0 bg-black/25"></div> {/* overlay */}
    </div>
  );
}