import React, { useEffect, useRef, useState, useMemo } from "react";
import CountUp from "react-countup";
import { useLanguage } from "./Translations/LanguageContext";
import useScrollReveal from "./utils/useScrollReveal";
import LogoLoop from "./utils/LogoLoop";
import {
  SiReact,
  SiPython,
  SiDjango,
  SiFlask,
  SiJavascript,
  SiGit,
  SiNodedotjs,
  SiTailwindcss,
  SiNextdotjs,
  SiGithub,
} from "react-icons/si";
import TrueFocus from "./utils/FocusText";

const About = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState("mission");

  const { setItemRef, isVisible } = useScrollReveal({
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
    unobserveOnShow: true,
  });

  const stats = useMemo(
    () => [
      { number: 20, suffix: "+", label: t("about.stats.projects") },
      { number: 40, suffix: "+", label: t("about.stats.clients") },
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

  const techLogos = [
    { node: <SiReact />, title: "React", href: "https://react.dev" },
    { node: <SiPython />, title: "React", href: "https://react.dev" },
    { node: <SiDjango />, title: "React", href: "https://react.dev" },
    { node: <SiFlask />, title: "React", href: "https://react.dev" },
    { node: <SiNodedotjs />, title: "React", href: "https://react.dev" },
    { node: <SiJavascript />, title: "React", href: "https://react.dev" },
    { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
    { node: <SiGithub />, title: "Next.js", href: "https://nextjs.org" },
    { node: <SiGit />, title: "Next.js", href: "https://nextjs.org" },

    {
      node: <SiTailwindcss />,
      title: "Tailwind CSS",
      href: "https://tailwindcss.com",
    },
  ];

  const techStack = [
    "React",
    "Node.js",
    "Python",
    "Django",
    "SQL",
    "MongoDB",
    "Docker",
    "Tailwind CSS",
  ];

  // Tabs: dostępność + obsługa klawiatury
  const tabKeys = Object.keys(tabs);

  return (
    <section
      id="about"
      className="relative bg-bg-primary py-28 md:py-32 overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <header
          ref={setItemRef(0)}
          data-id="hdr"
          className={`mb-16 motion-safe:transition-all motion-safe:duration-700 delay-150 ${
            isVisible("hdr")
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6 motion-reduce:translate-y-0"
          }`}
        >
          <h2 className="text-5xl md:text-6xl text-text-primary mb-6 tracking-tight ">
            {t("about.title")}
            <span className="text-accent"> Blacksmith Stone.</span>
          </h2>
          <p className="text-text-secondary text-lg font-light max-w-2xl">
            {t("about.subtitle")}
          </p>
        </header>

        {/* Stats */}
        <section
          aria-label={t("about.stats.title") || "Stats"}
          ref={setItemRef(1)}
          data-id="stats"
          className={`grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-16 motion-safe:transition-all motion-safe:duration-700 delay-150 ${
            isVisible("stats")
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6 motion-reduce:translate-y-0"
          }`}
        >
          {stats.map((s, i) => (
            <div
              key={i}
              className="group shadow-md border-card-border rounded-2xl p-6 bg-white/5 hover:border-accent/50 hover:bg-card-bg-hover motion-safe:transition-colors focus-within:border-accent/70"
              style={{
                transitionDelay: isVisible("stats") ? `${i * 60}ms` : "0ms",
              }}
            >
              <div className="text-4xl md:text-5xl font-light text-text-primary">
                {isVisible("stats") ? (
                  <CountUp end={s.number} suffix={s.suffix} duration={8} />
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
          ref={setItemRef(2)}
          data-id="tabs"
          className={`mb-16 motion-safe:transition-all motion-safe:duration-700 delay-150 ${
            isVisible("tabs")
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6 motion-reduce:translate-y-0"
          }`}
        >
          <div
            role="tablist"
            aria-label={t("about.tabs.title") || "Tabs"}
            className="flex gap-8 border-b border-white/10"
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
                      ? "text-text-primary"
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

          <div
            key={activeTab}
            id={`panel-${activeTab}`}
            role="tabpanel"
            aria-labelledby={`tab-${activeTab}`}
            className="mt-10 bg-white/5 shadow-md border-card-border rounded-2xl p-8 animate-[fade-slide_300ms_ease-out]"
          >
            <h3 className="text-2xl font-light text-text-primary mb-4">
              {tabs[activeTab].title}
            </h3>
            <p className="text-text-muted font-light leading-relaxed">
              {tabs[activeTab].content}
            </p>
          </div>
        </section>

        {/* Values */}
        <section
          aria-labelledby="values-heading"
          ref={setItemRef(3)}
          data-id="values"
          className={`mb-16 motion-safe:transition-all motion-safe:duration-700 delay-150 ${
            isVisible("values")
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6 motion-reduce:translate-y-0"
          }`}
        >
          <div className="flex items-center justify-between mb-6">
            <h3
              id="values-heading"
              className="text-3xl font-weight text-text-primary"
            >
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
                className="group bg-white/5 shadow-md border-card-border rounded-2xl p-6 hover:border-accent/60 hover:hover:bg-card-bg-hover motion-safe:transition-colors focus-within:border-accent/70"
                style={{
                  transitionDelay: isVisible("values") ? `${i * 60}ms` : "0ms",
                }}
              >
                <h4 className="text-lg text-text-primary mb-2 group-hover:text-accent transition-colors">
                  {v.title}
                </h4>
                <p className="text-text-muted text-sm leading-relaxed">
                  {v.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* Process */}
        <section
          aria-labelledby="process-heading"
          ref={setItemRef(4)}
          data-id="process"
          className={`mb-16 motion-safe:transition-all motion-safe:duration-700 delay-150 ${
            isVisible("process")
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6 motion-reduce:translate-y-0"
          }`}
        >
          <h3
            id="process-heading"
            className="text-3xl font-light text-text-primary mb-10"
          >
            {t("about.process.title")}
          </h3>

          <div className="grid md:grid-cols-4 gap-6 md:gap-8">
            {process.map((p, i) => (
              <div
                key={i}
                className="relative bg-white/5 shadow-md border-card-border rounded-2xl p-6 overflow-hidden group hover:border-accent/50 hover:bg-white/10 motion-safe:transition-colors"
                style={{
                  transitionDelay: isVisible("process") ? `${i * 60}ms` : "0ms",
                }}
              >
                <div className="absolute -top-12 -right-10 w-32 h-32 rounded-full bg-accent/10 blur-3xl" />
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center mb-4 bg-white/5">
                  <span className="text-accent text-sm font-semibold">
                    {p.step}
                  </span>
                </div>
                <h4 className="text-text-primary font-light text-lg mb-2">
                  {p.title}
                </h4>
                <p className="text-text-muted text-sm leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Tech Stack */}
        <section
          aria-labelledby="tech-heading"
          ref={setItemRef(5)}
          data-id="tech"
          className={`mb-16 motion-safe:transition-all motion-safe:duration-700 delay-150 ${
            isVisible("tech")
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6 motion-reduce:translate-y-0"
          }`}
        >
          <h3
            id="tech-heading"
            className="text-3xl font-light text-text-primary mb-8 text-center"
          >
            {t("about.tech")}
          </h3>
          <div className="flex flex-wrap justify-center gap-3 text-accent">
            {/* {techStack.map((tech, i) => (
              <span
                key={tech}
                className="px-5 py-2.5 rounded-full border border-card-border text-gray-600 text-sm bg-white/5 hover:border-accent hover:text-accent transition-colors"
              >
                {tech}
              </span>
            ))} */}
            <LogoLoop
              logos={techLogos}
              speed={35}
              direction="left"
              logoHeight={48}
              gap={40}
              hoverSpeed={0}
              scaleOnHover="true"
              ariaLabel="Technology partners"
            />
          </div>
        </section>

        {/* CTA */}
        <section
          ref={setItemRef(6)}
          data-id="cta"
          className={`text-center motion-safe:transition-all motion-safe:duration-700 delay-150 delay-150 ${
            isVisible("cta")
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6 motion-reduce:translate-y-0"
          }`}
        >
          <p className="text-2xl md:text-3xl font-light text-text-primary mb-8">
            <TrueFocus
              sentence="Gotowy na współpracę?"
              manualMode={false}
              blurAmount={5}
              borderColor="green"
              animationDuration={2}
              pauseBetweenAnimations={1}
            />
          </p>
        </section>
      </div>
    </section>
  );
};

export default About;
