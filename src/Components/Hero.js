import React, { useEffect, useState } from "react";
import {
  CodeBracketIcon,
  SparklesIcon,
  CubeTransparentIcon,
} from "@heroicons/react/24/outline";
import "..\\src\\Components\\ComponentsCSS\\hero_animation.css";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Typing effect for tagline
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "Foundry of Ideas, Forge of Technology";

  useEffect(() => {
    if (isLoaded) {
      let index = 0;
      const timer = setInterval(() => {
        if (index <= fullText.length) {
          setDisplayedText(fullText.slice(0, index));
          index++;
        } else {
          clearInterval(timer);
        }
      }, 50);
      return () => clearInterval(timer);
    }
  }, [isLoaded]);

  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Generowanie cząsteczek - proste ustawienia
  const particles = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    size: Math.random() * 2 + 1, // 1-3px
    left: Math.random() * 100, // losowa pozycja X
    delay: Math.random() * 5, // losowe opóźnienie startu
    speed: Math.random() > 0.5 ? "fast" : "slow", // różne prędkości
  }));

  return (
    <section className="relative bg-black text-white min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Statyczna siatka w tle */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 223, 154, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 223, 154, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "100px 100px",
          }}
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black" />

        {/* Cząsteczki lecące do góry */}
        <div className="absolute inset-0">
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
                backgroundColor: "#00df9a",
                borderRadius: "50%",
                opacity: 0.7,
                animationDelay: `${particle.delay}s`,
                boxShadow: `0 0 ${particle.size * 3}px rgba(0, 223, 154, 0.4)`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl text-center px-6">
        {/* Tech Icons */}
        <div className="flex justify-center gap-8 mb-8">
          <CodeBracketIcon
            className={`h-8 w-8 text-[#00df9a] opacity-60 ${
              isLoaded
                ? "animate-fade-in-down animation-delay-100"
                : "opacity-0"
            }`}
          />
          <SparklesIcon
            className={`h-8 w-8 text-[#00df9a] opacity-60 ${
              isLoaded
                ? "animate-fade-in-down animation-delay-200"
                : "opacity-0"
            }`}
          />
          <CubeTransparentIcon
            className={`h-8 w-8 text-[#00df9a] opacity-60 ${
              isLoaded
                ? "animate-fade-in-down animation-delay-300"
                : "opacity-0"
            }`}
          />
        </div>

        {/* Main Heading */}
        <h1
          className={`text-5xl sm:text-7xl md:text-8xl font-black mb-8 ${
            isLoaded ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <span className="bg-gradient-to-r from-white via-[#00df9a] to-white bg-clip-text text-transparent animate-gradient">
            Blacksmith Stone
          </span>
        </h1>

        {/* Animated Tagline */}
        <p
          className={`text-xl sm:text-2xl md:text-3xl font-light text-gray-300 mb-4 h-10 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
        >
          {displayedText}
          <span className="animate-pulse">|</span>
        </p>

        <p
          className={`text-base sm:text-lg text-gray-500 mb-12 ${
            isLoaded ? "animate-fade-in-up animation-delay-500" : "opacity-0"
          }`}
        >
          We craft digital experiences that inspire and innovate
        </p>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 ${
            isLoaded ? "animate-fade-in-up animation-delay-700" : "opacity-0"
          }`}
        >
          <button
            onClick={() => scrollToSection("#projects")}
            className="group relative px-8 py-4 bg-[#00df9a] text-black font-bold rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,223,154,0.5)] hover:scale-105"
          >
            <span className="relative z-10">View Our Work</span>
            <div className="absolute inset-0 bg-white transition-transform duration-300 transform scale-x-0 group-hover:scale-x-100 origin-left" />
            <span className="absolute inset-0 flex items-center justify-center text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-bold">
              View Our Work
            </span>
          </button>

          <button
            onClick={() => scrollToSection("#contact")}
            className="group px-8 py-4 rounded-full border-2 border-gray-600 hover:border-[#00df9a] transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,223,154,0.3)] hover:scale-105"
          >
            <span className="bg-gradient-to-r from-gray-400 to-gray-400 group-hover:from-[#00df9a] group-hover:to-white bg-clip-text text-transparent transition-all duration-300">
              Start a Project
            </span>
          </button>
        </div>

        {/* Tech Stack */}
        <div
          className={`mt-16 flex justify-center gap-4 text-xs sm:text-sm text-gray-600 ${
            isLoaded ? "animate-fade-in-up animation-delay-1000" : "opacity-0"
          }`}
        >
          <span className="hover:text-[#00df9a] transition-colors cursor-default">
            React
          </span>
          <span className="text-gray-700">•</span>
          <span className="hover:text-[#00df9a] transition-colors cursor-default">
            Python
          </span>
          <span className="text-gray-700">•</span>
          <span className="hover:text-[#00df9a] transition-colors cursor-default">
            Django
          </span>
          <span className="text-gray-700">•</span>
          <span className="hover:text-[#00df9a] transition-colors cursor-default">
            Flask
          </span>
        </div>
      </div>

      {/* Scroll */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 text-gray-500">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="relative">
            <div className="w-5 h-8 border-2 border-gray-600 rounded-full">
              <div className="w-1 h-2 bg-[#00df9a] rounded-full mx-auto mt-2 animate-scroll-indicator" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
