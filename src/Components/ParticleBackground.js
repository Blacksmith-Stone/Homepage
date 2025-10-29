import React from "react";

const ParticleBackground = ({ particles }) => {
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
            bottom: "-10px",
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
