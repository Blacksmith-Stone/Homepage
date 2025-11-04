import React, { useEffect, memo } from "react";
import { XMarkIcon, ArrowUpRightIcon } from "@heroicons/react/24/outline";

const ProjectModal = memo(({ project, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    const handleEscape = (e) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "unset";
      document.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/90 animate-fadeIn"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Content */}
      <div className="relative bg-black rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-slideUp">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-10 p-2 rounded-full bg-white/10 backdrop-blur hover:bg-white/20 transition-colors"
          aria-label="Zamknij modal"
        >
          <XMarkIcon className="w-5 h-5 text-white" />
        </button>

        {/* Hero Image */}
        <div className="relative h-80 overflow-hidden rounded-t-2xl">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-8">
            <h2 id="modal-title" className="text-4xl font-bold text-gray-200">
              {project.title}
            </h2>
          </div>
        </div>

        <ModalContent project={project} onClose={onClose} />
      </div>
    </div>
  );
});

const ModalContent = memo(({ project, onClose }) => (
  <div className="p-8">
    {/* Description */}
    <section className="mb-8">
      <h3 className="text-xl font-semibold text-gray-200 mb-4">O projekcie</h3>
      <p className="text-gray-400 leading-relaxed">{project.fullDescription}</p>
    </section>

    {/* Technologies */}
    <section className="mb-8">
      <h3 className="text-xl font-semibold text-gray-200 mb-4">Technologie</h3>
      <div className="flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300"
          >
            {tech}
          </span>
        ))}
      </div>
    </section>

    {/* Features */}
    <section className="mb-8">
      <h3 className="text-xl font-semibold text-gray-200 mb-4">
        Kluczowe funkcje
      </h3>
      <ul className="space-y-2">
        {project.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <span className="text-accent mt-1" aria-hidden="true">
              •
            </span>
            <span className="text-gray-400">{feature}</span>
          </li>
        ))}
      </ul>
    </section>

    {/* Metrics */}
    <section className="mb-8">
      <h3 className="text-xl font-semibold text-white mb-4">Rezultaty</h3>
      <div className="grid grid-cols-3 gap-4">
        {Object.entries(project.metrics).map(([key, value]) => (
          <div key={key} className="text-center p-4 bg-white/5 rounded-xl">
            <p className="text-2xl font-bold text-gray-200 mb-1">{value}</p>
            <p className="text-xs text-gray-500 capitalize">
              {key.replace(/([A-Z])/g, " $1").trim()}
            </p>
          </div>
        ))}
      </div>
    </section>

    {/* Actions */}
    <div className="flex gap-4">
      <a
        href={project.liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 py-3 px-6 bg-accent text-black font-medium rounded-lg hover:bg-accent/90 transition-colors flex items-center justify-center gap-2"
      >
        Zobacz
        <ArrowUpRightIcon className="w-4 h-4" />
      </a>
      <button
        onClick={onClose}
        className="flex-1 py-3 px-6 border border-white/20 text-gray-200 rounded-lg hover:bg-white/5 transition-colors"
      >
        Zamknij
      </button>
    </div>
  </div>
));

ProjectModal.displayName = "ProjectModal";
ModalContent.displayName = "ModalContent";

export default ProjectModal;
