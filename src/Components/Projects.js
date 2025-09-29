import React, { useState, useEffect } from "react";
import {
  ArrowTopRightOnSquareIcon,
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  GlobeAltIcon,
  ShoppingBagIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";
import {
  FaGithub,
  FaReact,
  FaNodeJs,
  FaVuejs,
  FaWordpress,
  FaShopify,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiFirebase,
} from "react-icons/si";

const Projects = () => {
  const [filter, setFilter] = useState("all");
  const [visibleProjects, setVisibleProjects] = useState([]);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // Project data
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "web",
      description:
        "Modern e-commerce solution with real-time inventory management and AI-powered recommendations",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      icons: [<FaReact />, <FaNodeJs />, <SiMongodb />],
      demoUrl: "#",
      githubUrl: "#",
      featured: true,
      stats: {
        users: "10k+",
        performance: "99%",
        rating: "4.9",
      },
    },
    {
      id: 2,
      title: "FinTech Dashboard",
      category: "web",
      description:
        "Comprehensive financial dashboard with real-time data visualization and analytics",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600",
      tags: ["Next.js", "TypeScript", "Tailwind", "Firebase"],
      icons: [<SiNextdotjs />, <SiTypescript />, <SiTailwindcss />],
      demoUrl: "#",
      githubUrl: "#",
      featured: true,
      stats: {
        users: "5k+",
        performance: "98%",
        rating: "4.8",
      },
    },
    {
      id: 3,
      title: "Health & Fitness App",
      category: "mobile",
      description:
        "Cross-platform mobile app for tracking workouts, nutrition, and health metrics",
      image:
        "https://images.unsplash.com/photo-1576633587382-13ddf37b1fc1?w=600",
      tags: ["React Native", "Firebase", "Node.js"],
      icons: [<FaReact />, <SiFirebase />, <FaNodeJs />],
      demoUrl: "#",
      githubUrl: "#",
      featured: false,
      stats: {
        users: "25k+",
        performance: "97%",
        rating: "4.7",
      },
    },
    {
      id: 4,
      title: "Real Estate Portal",
      category: "web",
      description:
        "Property listing platform with virtual tours and advanced search filters",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600",
      tags: ["Vue.js", "Laravel", "MySQL"],
      icons: [<FaVuejs />, <SiTypescript />, <SiMongodb />],
      demoUrl: "#",
      githubUrl: "#",
      featured: false,
      stats: {
        users: "15k+",
        performance: "96%",
        rating: "4.6",
      },
    },
    {
      id: 5,
      title: "Online Learning Platform",
      category: "ecommerce",
      description:
        "EdTech platform with live streaming, course management, and student analytics",
      image:
        "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600",
      tags: ["Next.js", "Stripe", "WebRTC"],
      icons: [<SiNextdotjs />, <FaNodeJs />, <SiFirebase />],
      demoUrl: "#",
      githubUrl: "#",
      featured: true,
      stats: {
        users: "50k+",
        performance: "99%",
        rating: "4.9",
      },
    },
    {
      id: 6,
      title: "Restaurant Chain App",
      category: "mobile",
      description:
        "Mobile ordering system with loyalty program and real-time order tracking",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600",
      tags: ["React Native", "Node.js", "PostgreSQL"],
      icons: [<FaReact />, <FaNodeJs />, <SiFirebase />],
      demoUrl: "#",
      githubUrl: "#",
      featured: false,
      stats: {
        users: "30k+",
        performance: "95%",
        rating: "4.5",
      },
    },
  ];

  const categories = [
    {
      id: "all",
      label: "All Projects",
      icon: <GlobeAltIcon className="w-4 h-4" />,
    },
    {
      id: "web",
      label: "Web Apps",
      icon: <CodeBracketIcon className="w-4 h-4" />,
    },
    {
      id: "mobile",
      label: "Mobile",
      icon: <DevicePhoneMobileIcon className="w-4 h-4" />,
    },
    {
      id: "ecommerce",
      label: "E-Commerce",
      icon: <ShoppingBagIcon className="w-4 h-4" />,
    },
  ];

  useEffect(() => {
    setIsLoaded(true);
    filterProjects("all");
  }, []);

  const filterProjects = (category) => {
    setFilter(category);
    if (category === "all") {
      setVisibleProjects(projects);
    } else {
      setVisibleProjects(projects.filter((p) => p.category === category));
    }
  };

  return (
    <section id="projects" className="relative bg-black py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, rgba(0, 223, 154, 0.1) 0%, transparent 50%)`,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div
          className={`text-center mb-16 ${
            isLoaded ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="text-[#00df9a]">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore our portfolio of innovative digital solutions that drive
            business growth
          </p>
        </div>

        {/* Filter Tabs */}
        <div
          className={`flex flex-wrap justify-center gap-3 mb-12 ${
            isLoaded ? "animate-fade-in-up animation-delay-200" : "opacity-0"
          }`}
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => filterProjects(cat.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                filter === cat.id
                  ? "bg-[#00df9a] text-black shadow-[0_0_20px_rgba(0,223,154,0.5)]"
                  : "bg-gray-900 text-gray-400 border border-gray-800 hover:border-[#00df9a] hover:text-[#00df9a]"
              }`}
            >
              {cat.icon}
              {cat.label}
              <span
                className={`ml-2 px-2 py-0.5 rounded-full text-xs ${
                  filter === cat.id ? "bg-black/20" : "bg-gray-800"
                }`}
              >
                {cat.id === "all"
                  ? projects.length
                  : projects.filter((p) => p.category === cat.id).length}
              </span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative bg-gray-900 rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#00df9a]/20 ${
                isLoaded ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 left-4 z-20 px-3 py-1 bg-[#00df9a] text-black text-xs font-bold rounded-full">
                  Featured
                </div>
              )}

              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-60" />

                {/* Overlay on Hover */}
                <div
                  className={`absolute inset-0 bg-black/80 flex items-center justify-center gap-4 transition-all duration-300 ${
                    hoveredProject === project.id ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <a
                    href={project.demoUrl}
                    className="p-3 bg-[#00df9a] text-black rounded-lg hover:bg-[#00c886] transition-colors"
                    title="Live Demo"
                  >
                    <ArrowTopRightOnSquareIcon className="w-5 h-5" />
                  </a>
                  <a
                    href={project.githubUrl}
                    className="p-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
                    title="View Code"
                  >
                    <FaGithub className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#00df9a] transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tech Stack Icons */}
                <div className="flex gap-3 mb-4">
                  {project.icons.map((icon, idx) => (
                    <span
                      key={idx}
                      className="text-gray-500 text-xl hover:text-[#00df9a] transition-colors cursor-pointer"
                      title={project.tags[idx]}
                    >
                      {icon}
                    </span>
                  ))}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-2 pt-4 border-t border-gray-800">
                  <div className="text-center">
                    <p className="text-xs text-gray-500">Users</p>
                    <p className="text-sm font-semibold text-[#00df9a]">
                      {project.stats.users}
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-gray-500">Uptime</p>
                    <p className="text-sm font-semibold text-[#00df9a]">
                      {project.stats.performance}
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-gray-500">Rating</p>
                    <p className="text-sm font-semibold text-[#00df9a]">
                      {project.stats.rating}
                    </p>
                  </div>
                </div>

                {/* View Details Button */}
                <button className="mt-4 w-full py-2 text-sm text-gray-400 hover:text-[#00df9a] transition-colors flex items-center justify-center gap-2 group/btn">
                  View Case Study
                  <ArrowRightIcon className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-6">
            Have a project in mind? Let's work together!
          </p>
          <button className="px-8 py-4 bg-[#00df9a] text-black font-bold rounded-full hover:bg-[#00c886] transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,223,154,0.5)] hover:scale-105 flex items-center gap-2 mx-auto group">
            Start Your Project
            <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
