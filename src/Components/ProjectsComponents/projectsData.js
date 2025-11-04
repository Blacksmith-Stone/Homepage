export const projects = [
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
    description: "Booking system for swimming school with schedule management",
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

export const categories = [
  { id: "all", label: "Wszystkie" },
  { id: "web", label: "Web" },
  { id: "mobile", label: "Mobile" },
  { id: "ecommerce", label: "E-Commerce" },
];
