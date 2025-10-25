import React, { useEffect, useRef, useState, useMemo } from "react";
import CountUp from "react-countup";
import { useLanguage } from "./Translations/LanguageContext";

const About = () => {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(new Set());
  const refs = useRef({});
  const [activeTab, setActiveTab] = useState("mission");

  // Observer: pokazuje sekcje raz, z lekkim offsetem
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.dataset.id;
            if (id) setVisible((prev) => new Set(prev).add(id));
          }
        }),
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    );

    Object.values(refs.current).forEach((el) => el && observer.observe(el));
    return () =>
      Object.values(refs.current).forEach((el) => el && observer.unobserve(el));
  }, []);

  const stats = useMemo(
    () => [
      { number: 20, suffix: "+", label: t("about.stats.projects") },
      { number: 10, suffix: "+", label: t("about.stats.clients") },
      { number: 4, suffix: "", label: t("about.stats.team") },
      { number: 7, suffix: "+", label: t("about.stats.experience") },
    ],
    [t]
  );

  const tabs = useMemo(
    () => ({
      mission: {
        title: t("about.tabs.mission.title"),
        content: t("about.tabs.mission.content"),
      },
      vision: {
        title: t("about.tabs.vision.title"),
        content: t("about.tabs.vision.content"),
      },
      approach: {
        title: t("about.tabs.approach.title"),
        content: t("about.tabs.approach.content"),
      },
    }),
    [t]
  );

  const values = useMemo(
    () => [
      {
        title: t("about.values.items.innovation.title"),
        description: t("about.values.items.innovation.description"),
      },
      {
        title: t("about.values.items.collaboration.title"),
        description: t("about.values.items.collaboration.description"),
      },
      {
        title: t("about.values.items.excellence.title"),
        description: t("about.values.items.excellence.description"),
      },
      {
        title: t("about.values.items.growth.title"),
        description: t("about.values.items.growth.description"),
      },
    ],
    [t]
  );

  const process = useMemo(
    () => [
      {
        step: "01",
        title: t("about.process.steps.step1.title"),
        desc: t("about.process.steps.step1.desc"),
      },
      {
        step: "02",
        title: t("about.process.steps.step2.title"),
        desc: t("about.process.steps.step2.desc"),
      },
      {
        step: "03",
        title: t("about.process.steps.step3.title"),
        desc: t("about.process.steps.step3.desc"),
      },
      {
        step: "04",
        title: t("about.process.steps.step4.title"),
        desc: t("about.process.steps.step4.desc"),
      },
    ],
    [t]
  );

  const techStack = [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Python",
    "Django",
    "PostgreSQL",
    "MongoDB",
    "AWS",
    "Docker",
    "Tailwind CSS",
    "Figma",
  ];

  // Tabs: dostępność + obsługa klawiatury
  const tabKeys = Object.keys(tabs);
  const onTabKeyDown = (e) => {
    const currentIndex = tabKeys.indexOf(activeTab);
    if (e.key === "ArrowRight") {
      e.preventDefault();
      setActiveTab(tabKeys[(currentIndex + 1) % tabKeys.length]);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      setActiveTab(
        tabKeys[(currentIndex - 1 + tabKeys.length) % tabKeys.length]
      );
    } else if (e.key === "Home") {
      e.preventDefault();
      setActiveTab(tabKeys[0]);
    } else if (e.key === "End") {
      e.preventDefault();
      setActiveTab(tabKeys[tabKeys.length - 1]);
    }
  };

  return (
    <section
      id="about"
      className="relative bg-black py-28 md:py-32 overflow-hidden"
    >
      {/* Subtelne tło w stylu Projects */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          background:
            "radial-gradient(800px 400px at 50% 0%, rgba(0,223,154,0.2), transparent 60%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <header
          ref={(el) => (refs.current.hdr = el)}
          data-id="hdr"
          className={`mb-16 motion-safe:transition-all motion-safe:duration-700 ${
            visible.has("hdr")
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6 motion-reduce:translate-y-0"
          }`}
        >
          <h2 className="text-5xl md:text-6xl font-semibold text-white mb-6 tracking-tight ">
            {t("about.title")}
            <span className="text-accent">.</span>
          </h2>
          <p className="text-white text-lg font-light max-w-2xl">
            {t("about.subtitle")}
          </p>
        </header>

        {/* Stats */}
        <section
          aria-label={t("about.stats.title") || "Stats"}
          ref={(el) => (refs.current.stats = el)}
          data-id="stats"
          className={`grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-16 motion-safe:transition-all motion-safe:duration-700 ${
            visible.has("stats")
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6 motion-reduce:translate-y-0"
          }`}
        >
          {stats.map((s, i) => (
            <div
              key={i}
              className="group border border-white/10 rounded-2xl p-6 bg-white/5 hover:border-accent/50 hover:bg-white/10 motion-safe:transition-colors focus-within:border-accent/70"
              style={{
                transitionDelay: visible.has("stats") ? `${i * 60}ms` : "0ms",
              }}
            >
              <div className="text-4xl md:text-5xl font-light text-white">
                {visible.has("stats") ? (
                  <CountUp end={s.number} suffix={s.suffix} duration={1.4} />
                ) : (
                  <span aria-hidden="true">0{s.suffix}</span>
                )}
                <span className="sr-only">
                  {s.number}
                  {s.suffix}
                </span>
              </div>
              <p className="mt-2 text-xs md:text-sm uppercase tracking-wider text-gray-500">
                {s.label}
              </p>
            </div>
          ))}
        </section>

        {/* Tabs + Content */}
        <section
          aria-label={t("about.tabs.title") || "About sections"}
          ref={(el) => (refs.current.tabs = el)}
          data-id="tabs"
          className={`mb-16 motion-safe:transition-all motion-safe:duration-700 ${
            visible.has("tabs")
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6 motion-reduce:translate-y-0"
          }`}
        >
          <div
            role="tablist"
            aria-label={t("about.tabs.title") || "Tabs"}
            className="flex gap-8 border-b border-white/10"
            onKeyDown={onTabKeyDown}
          >
            {tabKeys.map((key) => {
              const selected = activeTab === key;
              return (
                <button
                  key={key}
                  id={`tab-${key}`}
                  role="tab"
                  aria-selected={selected}
                  aria-controls={`panel-${key}`}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setActiveTab(key)}
                  className={`pb-4 text-sm font-light relative focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 rounded-sm ${
                    selected
                      ? "text-white"
                      : "text-gray-500 hover:text-gray-300"
                  }`}
                >
                  {tabs[key].title}
                  {selected && (
                    <span className="absolute bottom-0 left-0 right-0 h-px bg-accent" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Panel z delikatnym cross-fade/slide */}
          <div
            key={activeTab}
            id={`panel-${activeTab}`}
            role="tabpanel"
            aria-labelledby={`tab-${activeTab}`}
            className="mt-10 bg-white/5 border border-white/10 rounded-2xl p-8 animate-[fade-slide_300ms_ease-out]"
          >
            <h3 className="text-2xl font-light text-white mb-4">
              {tabs[activeTab].title}
            </h3>
            <p className="text-gray-400 font-light leading-relaxed">
              {tabs[activeTab].content}
            </p>
          </div>
        </section>

        {/* Values */}
        <section
          aria-labelledby="values-heading"
          ref={(el) => (refs.current.values = el)}
          data-id="values"
          className={`mb-16 motion-safe:transition-all motion-safe:duration-700 ${
            visible.has("values")
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6 motion-reduce:translate-y-0"
          }`}
        >
          <div className="flex items-center justify-between mb-6">
            <h3 id="values-heading" className="text-3xl font-light text-white">
              {t("about.values.title") || "Wartości"}
            </h3>
            <span className="text-xs text-accent/70 tracking-widest uppercase">
              Core
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <article
                key={i}
                className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-accent/60 hover:bg-white/10 motion-safe:transition-colors focus-within:border-accent/70"
                style={{
                  transitionDelay: visible.has("values")
                    ? `${i * 60}ms`
                    : "0ms",
                }}
              >
                <h4 className="text-lg text-white font-light mb-2 group-hover:text-accent transition-colors">
                  {v.title}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {v.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* Process */}
        <section
          aria-labelledby="process-heading"
          ref={(el) => (refs.current.process = el)}
          data-id="process"
          className={`mb-16 motion-safe:transition-all motion-safe:duration-700 ${
            visible.has("process")
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6 motion-reduce:translate-y-0"
          }`}
        >
          <h3
            id="process-heading"
            className="text-3xl font-light text-white mb-10"
          >
            {t("about.process.title")}
          </h3>

          <div className="grid md:grid-cols-4 gap-6 md:gap-8">
            {process.map((p, i) => (
              <div
                key={i}
                className="relative bg-white/5 border border-white/10 rounded-2xl p-6 overflow-hidden group hover:border-accent/50 hover:bg-white/10 motion-safe:transition-colors"
                style={{
                  transitionDelay: visible.has("process")
                    ? `${i * 60}ms`
                    : "0ms",
                }}
              >
                <div className="absolute -top-12 -right-10 w-32 h-32 rounded-full bg-accent/10 blur-3xl" />
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center mb-4 bg-white/5">
                  <span className="text-accent text-sm font-semibold">
                    {p.step}
                  </span>
                </div>
                <h4 className="text-white font-light text-lg mb-2">
                  {p.title}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Tech Stack */}
        <section
          aria-labelledby="tech-heading"
          ref={(el) => (refs.current.tech = el)}
          data-id="tech"
          className={`mb-16 motion-safe:transition-all motion-safe:duration-700 ${
            visible.has("tech")
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6 motion-reduce:translate-y-0"
          }`}
        >
          <h3
            id="tech-heading"
            className="text-3xl font-light text-white mb-8 text-center"
          >
            {t("about.tech")}
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech, i) => (
              <span
                key={tech}
                className="px-5 py-2.5 rounded-full border border-white/10 text-gray-300 text-sm bg-white/5 hover:border-accent hover:text-white transition-colors"
                style={{
                  transitionDelay: visible.has("tech") ? `${i * 25}ms` : "0ms",
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section
          ref={(el) => (refs.current.cta = el)}
          data-id="cta"
          className={`text-center motion-safe:transition-all motion-safe:duration-700 ${
            visible.has("cta")
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6 motion-reduce:translate-y-0"
          }`}
        >
          <p className="text-2xl md:text-3xl font-light text-white mb-8">
            Gotowy na współpracę?
          </p>
          <a
            href="#contact"
            className="group inline-flex items-center justify-center px-8 py-4 border border-white text-white hover:bg-white hover:text-black transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
          >
            Rozpocznij projekt
            <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
        </section>
      </div>

      {/* Keyframes dla fade-slide panelu */}
      <style jsx>{`
        @keyframes fade-slide {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default About;
