import React, { useMemo } from "react";
import "./ComponentsCSS/particleBackground.css";

const ParticleBackground = () => {
  const particles = useMemo(() => {
    return Array.from({ length: 12 }, (_, i) => ({
      id: i,
      size: Math.random() * 3 + 1,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      speed: Math.random() > 0.5 ? "fast" : "slow",
    }));
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className={
            particle.speed === "fast"
              ? "animate-float-up"
              : "animate-float-up-slow"
          }
          style={{
            position: "absolute",
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.left}%`,
            // ZMIANA: Ustawiamy start na dokładnej dolnej krawędzi ekranu
            bottom: "0",
            backgroundColor: "rgb(0, 223, 154)",
            borderRadius: "50%",
            opacity: 0.4,
            animationDelay: `${particle.delay}s`,
            boxShadow: `0 0 ${particle.size * 3}px rgba(0, 223, 154, 0.3)`,
          }}
        />
      ))}
    </div>
  );
};

export default ParticleBackground;
