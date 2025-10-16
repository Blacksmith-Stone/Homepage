import React, { useState, useEffect } from "react";
import {
  CheckCircleIcon,
  LightBulbIcon,
  RocketLaunchIcon,
  UserGroupIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";
import CountUp from "react-countup";
import { useLanguage } from "./Translations/LanguageContext";

const About = () => {
  const { t, language } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("mission");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.querySelector("#about");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const stats = [
    { number: 20, suffix: "+", label: t("about.stats.projects") },
    { number: 10, suffix: "+", label: t("about.stats.clients") },
    { number: 4, suffix: "", label: t("about.stats.team") },
    { number: 7, suffix: "+", label: t("about.stats.experience") },
  ];

  const values = [
    {
      icon: <LightBulbIcon className="w-6 h-6" />,
      title: t("about.values.items.innovation.title"),
      description: t("about.values.items.innovation.description"),
    },
    {
      icon: <UserGroupIcon className="w-6 h-6" />,
      title: t("about.values.items.collaboration.title"),
      description: t("about.values.items.collaboration.description"),
    },
    {
      icon: <RocketLaunchIcon className="w-6 h-6" />,
      title: t("about.values.items.excellence.title"),
      description: t("about.values.items.excellence.description"),
    },
    {
      icon: <ChartBarIcon className="w-6 h-6" />,
      title: t("about.values.items.excellence.title"),
      description: t("about.values.items.excellence.description"),
    },
  ];

  const tabs = {
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
  };

  return (
    <section
      id="about"
      className="relative bg-bg-primary py-20 overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div
          className={`text-center mb-16 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text-secondary mb-4">
            {t("about.title")}{" "}
            <span className="text-[#00df9a]">Blacksmith Stone</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {t("about.subtitle")}
          </p>
        </div>

        {/* Stats Section */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 ${
            isVisible ? "animate-fade-in-up animation-delay-200" : "opacity-0"
          }`}
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#00df9a] mb-2">
                {isVisible && (
                  <CountUp
                    end={stat.number}
                    duration={2.5}
                    delay={0.5}
                    suffix={stat.suffix}
                  />
                )}
              </div>
              <p className="text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Side - Tabs */}
          <div
            className={`${
              isVisible ? "animate-fade-in-up animation-delay-300" : "opacity-0"
            }`}
          >
            <div className="flex gap-4 mb-6">
              {Object.keys(tabs).map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    activeTab === key
                      ? "bg-[#00df9a] text-black"
                      : "bg-gray-900 text-gray-400 hover:text-white"
                  }`}
                >
                  {tabs[key].title}
                </button>
              ))}
            </div>

            <div className="bg-card-bg rounded-2xl p-8 border border-card-border">
              <h3 className="text-2xl font-bold text-text-primary mb-4">
                {tabs[activeTab].title}
              </h3>
              <p className="text-text-primary leading-relaxed">
                {tabs[activeTab].content}
              </p>
            </div>

            {/* Tech Stack */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-text-secondary mb-4">
                {t("about.tech")}
              </h4>
              <div className="flex flex-wrap gap-3">
                {[
                  "React",
                  "Django",
                  "Tailwind",
                  "Node.js",
                  "Python",
                  "SQL",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-card-bg text-[#00df9a] rounded-lg text-sm border border-card-borde hover:border-[#00df9a] transition-colors cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Values */}
          <div
            className={`${
              isVisible ? "animate-fade-in-up animation-delay-500" : "opacity-0"
            }`}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="flex-1 h-px bg-border"></div>
              <h3 className="text-2xl font-bold text-text-primary">
                {t("about.values.title")}
              </h3>
              <div className="flex-1 h-px bg-border"></div>
            </div>
            <div className="space-y-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-xl bg-card-bg/50 border border-card-border hover:border-accent/50 transition-all duration-300 hover:bg-card-bg-hover group"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center text-accent group-hover:bg-accent/30 transition-colors">
                    {value.icon}
                  </div>
                  <div className="flex-1 pt-1">
                    <h4 className="text-lg font-semibold text-text-primary mb-2 group-hover:text-accent transition-colors">
                      {value.title}
                    </h4>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div
          className={`transition-all duration-700 ${
            isVisible ? "animate-fade-in-up animation-delay-700" : "opacity-0"
          }`}
        >
          <h3 className="text-2xl font-bold text-text-secondary text-center mb-8">
            {t("about.process.title")}
          </h3>

          <div className="grid md:grid-cols-4 gap-10">
            {[
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
            ].map((phase, index) => (
              <div
                key={index}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Step Circle */}
                <div className="relative mb-6">
                  <div className="w-20 h-20 mx-auto bg-gray-900 rounded-full flex items-center justify-center border-2 border-gray-800 group-hover:border-[#00df9a] transition-all duration-500 shadow-md shadow-[#00df9a]/10">
                    <span className="text-[#00df9a] font-bold text-xl">
                      {phase.step}
                    </span>
                  </div>

                  {/* Connector Line */}
                  {index < 3 && (
                    <div className="hidden md:block absolute top-1/2 left-full w-full h-[2px] bg-gray-800">
                      <div className="h-full bg-[#00df9a] scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
                    </div>
                  )}
                </div>

                {/* Text Content */}
                <h4 className="font-semibold text-text-secondary mb-2 text-lg">
                  {phase.title}
                </h4>
                <p className="text-gray-400 text-sm max-w-[200px] mx-auto">
                  {phase.desc}
                </p>

                {/* Hover Accent */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-[#00df9a] blur-2xl rounded-full transition-all duration-700" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
