"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

const heroImages = [
  {
    src: "/hero-baguettes-2.jpg",
    alt: "Baguettes de pain frais dans un panier en osier",
  },
  {
    src: "/hero-baguettes-3.jpg",
    alt: "Paniers remplis de baguettes dans une boulangerie",
  },
  {
    src: "/hero-baguettes-1.jpg",
    alt: "Baguettes dorées sortant du four",
  },
];

const INTERVAL_MS = 5000;

export function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const advance = useCallback(() => {
    setCurrent((prev) => (prev + 1) % heroImages.length);
  }, []);

  // Auto-advance timer
  useEffect(() => {
    if (isPaused) return;
    timerRef.current = setInterval(advance, INTERVAL_MS);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, advance]);

  return (
    <div
      className="absolute inset-0 z-0"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      role="region"
      aria-roledescription="carousel"
      aria-label="Images de baguettes de pain"
    >
      {/* Images */}
      {heroImages.map((img, index) => (
        <div
          key={img.src}
          aria-hidden={index !== current}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            priority={index === 0}
            unoptimized
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
      ))}

      {/* Indicator dots */}
      <div className="absolute bottom-6 left-1/2 z-30 flex -translate-x-1/2 gap-2.5">
        {heroImages.map((img, index) => (
          <button
            key={img.src}
            type="button"
            onClick={() => setCurrent(index)}
            aria-label={`Afficher l'image ${index + 1} sur ${heroImages.length}`}
            className={`size-2.5 rounded-full border border-white/50 transition-all duration-300 ${
              index === current
                ? "scale-125 bg-white"
                : "bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
