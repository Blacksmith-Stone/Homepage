import React, { useEffect, useState } from "react";
import {
  CodeBracketIcon,
  SparklesIcon,
  CubeTransparentIcon,
} from "@heroicons/react/24/outline";
import "./ComponentsCSS/hero_animation.css";
import { useLanguage } from "./Translations/LanguageContext";

const Hero = () => {
  const { t, language } = useLanguage();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Typing effect for tagline
  const [displayedText, setDisplayedText] = useState("");
  const fullText = t("hero.subtitle");

  useEffect(() => {
    if (isLoaded && fullText) {
      setDisplayedText("");

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
  }, [isLoaded, fullText, language]);

  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Generowanie cząsteczek
  const particles = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    size: Math.random() * 2 + 1,
    left: Math.random() * 100,
    delay: Math.random() * 5,
    speed: Math.random() > 0.5 ? "fast" : "slow",
  }));

  return (
    <section className="relative bg-bg-primary text-text-primary min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Siatka w tle - różna opacity dla light/dark */}
        <div
          className="absolute inset-0 opacity-[0.05] dark:opacity-[0.05]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 223, 154, 0.2) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 223, 154, 0.2) 1px, transparent 1px)
            `,
            backgroundSize: "100px 100px",
          }}
        />

        {/* Gradient overlay - dostosowany do motywu */}
        <div className="absolute inset-0 bg-gradient-to-b from-bg-primary/90 via-bg-primary/80 to-bg-primary" />

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
                backgroundColor: "rgb(0, 223, 154)",
                borderRadius: "50%",
                opacity: 0.4,
                animationDelay: `${particle.delay}s`,
                boxShadow: `0 0 ${particle.size * 3}px rgba(0, 223, 154, 0.3)`,
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
            className={`h-8 w-8 text-accent opacity-60 ${
              isLoaded
                ? "animate-fade-in-down animation-delay-100"
                : "opacity-0"
            }`}
          />
          <SparklesIcon
            className={`h-8 w-8 text-accent opacity-60 ${
              isLoaded
                ? "animate-fade-in-down animation-delay-200"
                : "opacity-0"
            }`}
          />
          <CubeTransparentIcon
            className={`h-8 w-8 text-accent opacity-60 ${
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
          <span className="bg-gradient-to-r from-text-primary via-accent to-text-primary bg-clip-text text-transparent animate-gradient">
            Blacksmith Stone
          </span>
        </h1>

        {/* Animated Tagline */}
        <p
          className={`text-xl sm:text-2xl md:text-3xl font-light text-text-secondary mb-4 h-10 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
        >
          {displayedText}
          <span className="animate-pulse text-accent">|</span>
        </p>

        <p
          className={`text-base sm:text-lg text-text-muted mb-12 ${
            isLoaded ? "animate-fade-in-up animation-delay-500" : "opacity-0"
          }`}
        >
          {t("hero.description")}
        </p>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 ${
            isLoaded ? "animate-fade-in-up animation-delay-700" : "opacity-0"
          }`}
        >
          <button
            onClick={() => scrollToSection("#projects")}
            className="group relative px-8 py-4 bg-accent text-black font-bold rounded-full overflow-hidden transition-all duration-300  hover:scale-105"
          >
            <span className="relative z-10">{t("hero.cta.viewWork")}</span>
            <div className="absolute inset-0 bg-accent-hover transition-transform duration-300 transform scale-x-0 group-hover:scale-x-100 origin-left" />
            <span className="absolute inset-0 flex items-center justify-center text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-bold">
              {t("hero.cta.viewWork")}
            </span>
          </button>

          <button
            onClick={() => scrollToSection("#contact")}
            className="group px-8 py-4 rounded-full border-2 border-border hover:border-accent transition-all duration-300 hover:scale-105"
          >
            <span className="text-text-secondary group-hover:text-accent transition-all duration-300">
              {t("hero.cta.startProject")}
            </span>
          </button>
        </div>

        {/* Tech Stack */}
        <div
          className={`mt-16 flex justify-center gap-4 text-xs sm:text-sm text-text-muted ${
            isLoaded ? "animate-fade-in-up animation-delay-1000" : "opacity-0"
          }`}
        >
          <span className="hover:text-accent transition-colors cursor-default">
            React
          </span>
          <span>•</span>
          <span className="hover:text-accent transition-colors cursor-default">
            Python
          </span>
          <span>•</span>
          <span className="hover:text-accent transition-colors cursor-default">
            Django
          </span>
          <span>•</span>
          <span className="hover:text-accent transition-colors cursor-default">
            Flask
          </span>
        </div>
      </div>

      {/* Scroll */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 text-text-muted">
          <span className="text-xs uppercase tracking-widest">
            {t("hero.scroll")}
          </span>
          <div className="relative">
            <div className="w-5 h-8 border-2 border-border rounded-full">
              <div className="w-1 h-2 bg-accent rounded-full mx-auto mt-2 animate-scroll-indicator" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
