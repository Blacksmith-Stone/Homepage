import React, { useState, useMemo, useCallback } from "react";
import useScrollReveal from "./utils/useScrollReveal";
import ProjectModal from "./ProjectsComponents/ProjectModal";
import ProjectCard from "./ProjectsComponents/ProjectCard";
import { projects, categories } from "./ProjectsComponents/projectsData";
import "./ComponentsCSS/project_animations.css";

const Projects = () => {
  const [filter, setFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  const { setItemRef, isVisible } = useScrollReveal({
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
    unobserveOnShow: true,
    dependencies: filter,
  });

  const filteredProjects = useMemo(
    () =>
      filter === "all"
        ? projects
        : projects.filter((p) => p.category === filter),
    [filter]
  );

  const handleProjectClick = useCallback((project) => {
    setSelectedProject(project);
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedProject(null);
  }, []);

  return (
    <section
      id="projects"
      className="bg-bg-primary py-32"
      aria-labelledby="projects-heading"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <header className="mb-20">
          <h2
            id="projects-heading"
            className="text-5xl md:text-6xl text-text-primary mb-6 tracking-tight"
          >
            Nasze Projekty<span className="text-accent">.</span>
          </h2>
          <p className="text-text-secondary text-lg font-light max-w-2xl">
            Tworzymy rozwiązania, które łączą minimalizm z funkcjonalnością
          </p>
        </header>

        {/* Filter */}
        <nav
          className="flex gap-8 mb-16"
          role="tablist"
          aria-label="Filtruj projekty"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              role="tab"
              aria-selected={filter === cat.id}
              aria-controls="projects-grid"
              className={`pb-4 text-sm font-weight transition-all relative ${
                filter === cat.id
                  ? "text-accent"
                  : "text-gray-500 hover:text-gray-300"
              }`}
            >
              {cat.label}
              {filter === cat.id && (
                <span
                  className="absolute bottom-0 left-0 right-0 h-px bg-accent"
                  aria-hidden="true"
                />
              )}
            </button>
          ))}
        </nav>

        {/* Projects Grid */}
        <div
          id="projects-grid"
          className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-20"
          role="tabpanel"
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              isVisible={isVisible(project.id)}
              setRef={setItemRef(index)}
              onClick={() => handleProjectClick(project)}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={handleCloseModal} />
      )}
    </section>
  );
};

export default Projects;
