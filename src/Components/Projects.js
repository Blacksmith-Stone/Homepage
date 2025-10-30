import React, { useState, useEffect, useRef } from "react";
import {
  XMarkIcon,
  ArrowUpRightIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/24/outline";

const Projects = () => {
  const [filter, setFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);
  const [visibleItems, setVisibleItems] = useState(new Set());
  const itemRefs = useRef([]);

  // Simplified project data
  const projects = [
    {
      id: 1,
      title: "Anatomia Smaku",
      category: "web",
      year: "2024",
      description: "Modern e-commerce platform with AI-powered recommendations",
      fullDescription:
        "Kompleksowa platforma e-commerce stworzona dla restauracji Anatomia Smaku. System zawiera zaawansowane zarządzanie zamówieniami, integrację z systemami płatności oraz personalizowane rekomendacje oparte na AI.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200",
      technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
      features: [
        "System zarządzania zamówieniami w czasie rzeczywistym",
        "Personalizowane rekomendacje AI",
        "Zintegrowany system płatności",
        "Panel administracyjny",
      ],
      metrics: {
        conversionRate: "+45%",
        loadTime: "1.2s",
        userSatisfaction: "4.9/5",
      },
      liveUrl: "https://anatomiasmaku.pl",
      caseStudyUrl: "#",
    },
    {
      id: 2,
      title: "Szkoła Pływania Delfin",
      category: "web",
      year: "2024",
      description:
        "Booking system for swimming school with schedule management",
      fullDescription:
        "Interaktywna platforma dla szkoły pływania z systemem rezerwacji zajęć, harmonogramem instruktorów oraz panelem dla rodziców do śledzenia postępów dzieci.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Firebase"],
      features: [
        "System rezerwacji online",
        "Kalendarz zajęć w czasie rzeczywistym",
        "Panel dla rodziców",
        "System powiadomień SMS/Email",
      ],
      metrics: {
        bookingIncrease: "+200%",
        userBase: "1500+",
        automation: "80%",
      },
      liveUrl: "https://delfinswim.pl",
      caseStudyUrl: "#",
    },
    {
      id: 3,
      title: "Health & Fitness App",
      category: "mobile",
      year: "2023",
      description: "Cross-platform mobile app for health tracking",
      fullDescription:
        "Aplikacja mobilna do monitorowania zdrowia i aktywności fizycznej z integracją z urządzeniami wearable.",
      image:
        "https://images.unsplash.com/photo-1576633587382-13ddf37b1fc1?w=1200",
      technologies: ["React Native", "Firebase", "HealthKit", "Google Fit"],
      features: [
        "Śledzenie aktywności",
        "Plany treningowe",
        "Analiza postępów",
        "Integracja z wearables",
      ],
      metrics: {
        downloads: "25k+",
        activeUsers: "15k",
        appRating: "4.7",
      },
      liveUrl: "#",
      caseStudyUrl: "#",
    },
    {
      id: 4,
      title: "Real Estate Portal",
      category: "web",
      year: "2023",
      description: "Property platform with virtual tours",
      fullDescription:
        "Portal nieruchomości z wirtualnymi spacerami 360°, zaawansowanymi filtrami wyszukiwania i systemem porównywania ofert.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200",
      technologies: ["Vue.js", "Laravel", "MySQL", "Matterport SDK"],
      features: [
        "Wirtualne spacery 360°",
        "Zaawansowane filtry",
        "System porównywania",
        "Kalkulator kredytowy",
      ],
      metrics: {
        listings: "5000+",
        monthlyVisits: "100k",
        conversionRate: "3.2%",
      },
      liveUrl: "#",
      caseStudyUrl: "#",
    },
    {
      id: 5,
      title: "SG-Rent",
      category: "ecommerce",
      year: "2024",
      description: "Equipment rental platform with booking system",
      fullDescription:
        "Platforma do wynajmu sprzętu budowlanego z systemem rezerwacji, śledzeniem dostępności i automatycznym generowaniem umów.",
      image:
        "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=1200",
      technologies: ["Next.js", "Prisma", "PostgreSQL", "Stripe"],
      features: [
        "System rezerwacji",
        "Śledzenie sprzętu",
        "Generowanie umów",
        "Płatności online",
      ],
      metrics: {
        equipment: "500+",
        monthlyRentals: "2000",
        revenue: "+150%",
      },
      liveUrl: "https://sgrent.pl",
      caseStudyUrl: "#",
    },
    {
      id: 6,
      title: "CK-Tronic",
      category: "ecommerce",
      year: "2023",
      description: "Electronics store with AR product preview",
      fullDescription:
        "Sklep internetowy z elektroniką oferujący podgląd produktów w AR oraz zaawansowany system rekomendacji.",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200",
      technologies: ["React", "Three.js", "Node.js", "MongoDB"],
      features: [
        "Podgląd AR",
        "System rekomendacji",
        "Live chat support",
        "Porównywarka produktów",
      ],
      metrics: {
        products: "10k+",
        dailyOrders: "500+",
        customerReturn: "45%",
      },
      liveUrl: "https://cktronic.com",
      caseStudyUrl: "#",
    },
  ];

  const categories = [
    { id: "all", label: "Wszystkie" },
    { id: "web", label: "Web" },
    { id: "mobile", label: "Mobile" },
    { id: "ecommerce", label: "E-Commerce" },
  ];

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleItems((prev) =>
              new Set(prev).add(entry.target.dataset.id)
            );
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      itemRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [filter]);

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  // Modal Component
  const ProjectModal = ({ project, onClose }) => {
    useEffect(() => {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "unset";
      };
    }, []);

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in">
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/90 animate-fadeIn"
          onClick={onClose}
        />

        {/* Modal Content */}
        <div className="relative bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-slide-up">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-10 p-2 rounded-full bg-white/10 backdrop-blur hover:bg-white/20 transition-colors"
          >
            <XMarkIcon className="w-5 h-5 text-white" />
          </button>

          {/* Hero Image */}
          <div className="relative h-80 overflow-hidden rounded-t-2xl">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-8">
              <p className="text-accent text-sm font-medium mb-2">
                {project.year}
              </p>
              <h2 className="text-4xl font-bold text-white">{project.title}</h2>
            </div>
          </div>

          {/* Content */}
          <div className="p-8">
            {/* Description */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-white mb-4">
                O projekcie
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {project.fullDescription}
              </p>
            </div>

            {/* Technologies */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-white mb-4">
                Technologie
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-white mb-4">
                Kluczowe funkcje
              </h3>
              <ul className="space-y-2">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-accent mt-1">•</span>
                    <span className="text-gray-400">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Metrics */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-white mb-4">
                Rezultaty
              </h3>
              <div className="grid grid-cols-3 gap-4">
                {Object.entries(project.metrics).map(([key, value]) => (
                  <div
                    key={key}
                    className="text-center p-4 bg-white/5 rounded-xl"
                  >
                    <p className="text-2xl font-bold text-accent mb-1">
                      {value}
                    </p>
                    <p className="text-xs text-gray-500 capitalize">
                      {key.replace(/([A-Z])/g, " $1").trim()}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-4">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-6 bg-accent text-black font-medium rounded-lg hover:bg-accent/90 transition-colors flex items-center justify-center gap-2"
              >
                Zobacz na żywo
                <ArrowUpRightIcon className="w-4 h-4" />
              </a>
              <button
                onClick={onClose}
                className="flex-1 py-3 px-6 border border-white/20 text-white rounded-lg hover:bg-white/5 transition-colors"
              >
                Zamknij
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="projects" className="bg-bg-primary py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Minimalist Header */}
        <div className="mb-20">
          <h2 className="text-5xl md:text-6xl text-text-primary mb-6 tracking-tight ">
            Nasze Projekty<span className="text-accent">.</span>
          </h2>
          <p className="text-text-secondary text-lg font-light max-w-2xl">
            Tworzymy rozwiązania, które łączą minimalizm z funkcjonalnością
          </p>
        </div>

        {/* Simple Filter */}
        <div className="flex gap-8 mb-16">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`pb-4 text-sm font-weight transition-all relative ${
                filter === cat.id
                  ? "text-accent"
                  : "text-gray-500 hover:text-gray-300"
              }`}
            >
              {cat.label}
              {filter === cat.id && (
                <span className="absolute bottom-0 left-0 right-0 h-px bg-accent" />
              )}
            </button>
          ))}
        </div>

        {/* Minimalist Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-20">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => (itemRefs.current[index] = el)}
              data-id={project.id}
              className={`group cursor-pointer transition-all duration-700 ${
                visibleItems.has(String(project.id))
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onClick={() => setSelectedProject(project)}
            >
              {/* Image */}
              <div className="relative overflow-hidden mb-6 aspect-[4/3]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Hover Indicator */}
                <div className="absolute bottom-4 right-4 p-3 bg-white text-black rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                  <ArrowLongRightIcon className="w-5 h-5 -rotate-45" />
                </div>
              </div>

              {/* Content */}
              <div>
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-2xl font-light text-text-primary group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-xs text-text-muted">
                    {project.year}
                  </span>
                </div>
                <p className="text-text-muted font-weight leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }

        .animate-slide-up {
          animation: slide-up 0.4s ease-out;
        }
      `}</style>
    </section>
  );
};

export default Projects;
