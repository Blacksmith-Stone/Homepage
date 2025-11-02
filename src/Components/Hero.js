import React, { useEffect, useState } from "react";
import {
  CodeBracketIcon,
  SparklesIcon,
  CubeTransparentIcon,
} from "@heroicons/react/24/outline";
import { useLanguage } from "./Translations/LanguageContext";
import Typewriter from "typewriter-effect";
import "./ComponentsCSS/hero_animation.css";
import Particles from "./Particles";

const Hero = () => {
  const { t, language } = useLanguage();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative bg-bg-primary text-text-primary min-h-screen flex items-center justify-center overflow-hidden">
      {/* RippleGrid Background
      <div className="absolute inset-0 z-0">
        <Particles
          particleColors={["#006633", "#006633"]}
          particleCount={500}
          particleSpread={5}
          speed={0.3}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div> */}

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
          <Typewriter
            options={{
              strings: t("hero.subtitle"),
              autoStart: true,
              loop: false,
              delay: 40,
            }}
          />
        </p>

        <p className="text-base sm:text-lg text-text-muted mb-12">
          <Typewriter
            options={{
              strings: t("hero.description"),
              autoStart: true,
              loop: false,
              delay: 50,
              cursor: "",
            }}
          />
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
          <button
            onClick={() => scrollToSection("#projects")}
            className="group px-8 py-4 bg-accent rounded-full overflow-hidden transition-all duration-300  hover:scale-105"
          >
            <span className="text-bg-primary group-hover:text-text-primary transition-all duration-300">
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
        <div className="mt-16 flex justify-center gap-4 text-xs sm:text-sm text-text-muted">
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
