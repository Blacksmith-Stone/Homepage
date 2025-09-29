import React, { useState, useEffect } from "react";
import {
  CheckCircleIcon,
  LightBulbIcon,
  RocketLaunchIcon,
  UserGroupIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";
import CountUp from "react-countup"; // npm install react-countup

const About = () => {
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
    { number: 20, suffix: "+", label: "Projects Completed" },
    { number: 10, suffix: "+", label: "Happy Clients" },
    { number: 4, suffix: "", label: "Team Members" },
    { number: 7, suffix: "+", label: "Years Experience" },
  ];

  const values = [
    {
      icon: <LightBulbIcon className="w-6 h-6" />,
      title: "Innovation",
      description: "Pushing boundaries with cutting-edge technologies",
    },
    {
      icon: <UserGroupIcon className="w-6 h-6" />,
      title: "Collaboration",
      description: "Working closely with clients to achieve their vision",
    },
    {
      icon: <RocketLaunchIcon className="w-6 h-6" />,
      title: "Excellence",
      description: "Delivering high-quality solutions that exceed expectations",
    },
    {
      icon: <ChartBarIcon className="w-6 h-6" />,
      title: "Growth",
      description: "Helping businesses scale through digital transformation",
    },
  ];

  const tabs = {
    mission: {
      title: "Our Mission",
      content:
        "To forge digital excellence by transforming innovative ideas into powerful, scalable solutions that drive business growth and create lasting impact in the digital landscape.",
    },
    vision: {
      title: "Our Vision",
      content:
        "To be the leading digital foundry where creativity meets technology, shaping the future of web experiences and setting new standards in digital craftsmanship.",
    },
    approach: {
      title: "Our Approach",
      content:
        "We combine agile methodologies with cutting-edge technologies, ensuring rapid development cycles while maintaining the highest standards of code quality and user experience.",
    },
  };

  return (
    <section id="about" className="relative bg-black py-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00df9a]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#00df9a]/10 rounded-full blur-3xl animate-pulse animation-delay-1000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div
          className={`text-center mb-16 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-[#00df9a]">Blacksmith Stone</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Where ideas are forged into digital reality
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

            <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
              <h3 className="text-2xl font-bold text-white mb-4">
                {tabs[activeTab].title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {tabs[activeTab].content}
              </p>
            </div>

            {/* Tech Stack */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-white mb-4">
                Our Tech Stack
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
                    className="px-3 py-1 bg-gray-900 text-[#00df9a] rounded-lg text-sm border border-gray-800 hover:border-[#00df9a] transition-colors cursor-default"
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
            <h3 className="text-2xl font-bold text-white mb-8">
              Our Core Values
            </h3>
            <div className="space-y-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="flex gap-4 p-4 rounded-xl bg-gray-900/50 border border-gray-800 hover:border-[#00df9a] transition-all duration-300 hover:bg-gray-900"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-[#00df9a]/20 rounded-lg flex items-center justify-center text-[#00df9a]">
                    {value.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">
                      {value.title}
                    </h4>
                    <p className="text-gray-400 text-sm">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div
          className={`${
            isVisible ? "animate-fade-in-up animation-delay-700" : "opacity-0"
          }`}
        >
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Our Process
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Discover",
                desc: "Understanding your vision and goals",
              },
              {
                step: "02",
                title: "Design",
                desc: "Creating intuitive user experiences",
              },
              {
                step: "03",
                title: "Develop",
                desc: "Building with cutting-edge tech",
              },
              {
                step: "04",
                title: "Deploy",
                desc: "Launching and ongoing support",
              },
            ].map((phase, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-4">
                  <div className="w-16 h-16 mx-auto bg-gray-900 rounded-full flex items-center justify-center border-2 border-gray-800 group-hover:border-[#00df9a] transition-colors">
                    <span className="text-[#00df9a] font-bold">
                      {phase.step}
                    </span>
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gray-800">
                      <div className="h-full bg-[#00df9a] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                    </div>
                  )}
                </div>
                <h4 className="font-semibold text-white mb-2">{phase.title}</h4>
                <p className="text-gray-400 text-sm">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
