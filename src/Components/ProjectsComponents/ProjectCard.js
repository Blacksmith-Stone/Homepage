import React, { memo } from "react";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

const ProjectCard = memo(({ project, index, isVisible, setRef, onClick }) => {
  return (
    <article
      ref={setRef}
      data-id={project.id}
      className={`group cursor-pointer transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyPress={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick();
        }
      }}
      aria-label={`Zobacz szczegóły projektu ${project.title}`}
    >
      {/* Image */}
      <div className="relative overflow-hidden mb-6 aspect-[4/3] bg-gray-900">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Hover Indicator */}
        <div
          className="absolute bottom-4 right-4 p-3 bg-white text-black rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0"
          aria-hidden="true"
        >
          <ArrowLongRightIcon className="w-5 h-5 -rotate-45" />
        </div>
      </div>

      {/* Content */}
      <div>
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-2xl font-light text-text-primary group-hover:text-accent transition-colors">
            {project.title}
          </h3>
          <span className="text-xs text-text-muted">{project.year}</span>
        </div>
        <p className="text-text-muted font-weight leading-relaxed">
          {project.description}
        </p>
      </div>
    </article>
  );
});

ProjectCard.displayName = "ProjectCard";

export default ProjectCard;
