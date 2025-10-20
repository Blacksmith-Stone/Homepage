import React, { useState } from "react";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  ClockIcon,
  CheckIcon,
  ArrowRightIcon,
  SparklesIcon,
  CurrencyDollarIcon,
  CalendarIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/outline";
import { FaLinkedin, FaTwitter, FaGithub, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  const [formStep, setFormStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Form data
  const [formData, setFormData] = useState({
    // Step 1 - Project Type
    projectType: "",
    services: [],

    // Step 2 - Project Details
    budget: "",
    timeline: "",
    description: "",

    // Step 3 - Contact Info
    name: "",
    email: "",
    company: "",
    phone: "",
    preferredContact: "email",
  });

  const projectTypes = [
    {
      id: "webapp",
      label: "Web Application",
      icon: "🌐",
      description: "Custom web apps & platforms",
    },
    {
      id: "ecommerce",
      label: "E-Commerce",
      icon: "🛍️",
      description: "Online stores & marketplaces",
    },
    {
      id: "mobile",
      label: "Mobile App",
      icon: "📱",
      description: "iOS & Android applications",
    },
    {
      id: "saas",
      label: "SaaS Platform",
      icon: "☁️",
      description: "Software as a Service solutions",
    },
    {
      id: "corporate",
      label: "Corporate Site",
      icon: "🏢",
      description: "Professional business websites",
    },
    {
      id: "other",
      label: "Other",
      icon: "💡",
      description: "Custom digital solutions",
    },
  ];

  const services = [
    "UI/UX Design",
    "Frontend Development",
    "Backend Development",
    "Database Design",
    "SEO Optimization",
    "Maintenance & Support",
  ];

  const budgetRanges = [
    { id: "5k-10k", label: "$5,000 - $10,000" },
    { id: "10k-25k", label: "$10,000 - $25,000" },
    { id: "25k-50k", label: "$25,000 - $50,000" },
    { id: "50k-100k", label: "$50,000 - $100,000" },
    { id: "100k+", label: "$100,000+" },
    { id: "discuss", label: "Let's Discuss" },
  ];

  const timelines = [
    { id: "asap", label: "ASAP", icon: "🚀" },
    { id: "1month", label: "Within 1 month", icon: "⚡" },
    { id: "3months", label: "1-3 months", icon: "📅" },
    { id: "6months", label: "3-6 months", icon: "🗓️" },
    { id: "flexible", label: "Flexible", icon: "🔄" },
  ];

  const handleServiceToggle = (service) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormStep(1);
      setFormData({
        projectType: "",
        services: [],
        budget: "",
        timeline: "",
        description: "",
        name: "",
        email: "",
        company: "",
        phone: "",
        preferredContact: "email",
      });
    }, 5000);
  };

  const nextStep = () => {
    if (formStep < 3) setFormStep(formStep + 1);
  };

  const prevStep = () => {
    if (formStep > 1) setFormStep(formStep - 1);
  };

  const isStepValid = () => {
    switch (formStep) {
      case 1:
        return formData.projectType && formData.services.length > 0;
      case 2:
        return formData.budget && formData.timeline;
      case 3:
        return formData.name && formData.email;
      default:
        return false;
    }
  };

  return (
    <section
      id="contact"
      className="relative bg-bg-primary py-20 overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-text-secondary mb-4">
            Let's Build Something <span className="text-accent">Amazing</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Tell us about your project and we'll help bring your vision to life
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Side - Contact Info */}
          <div className="lg:col-span-1">
            <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800 sticky top-24">
              <h3 className="text-2xl font-bold text-white mb-6">
                Get in Touch
              </h3>

              {/* Contact Items */}
              <div className="space-y-4 mb-8">
                <a
                  href="mailto:hello@blacksmithstone.com"
                  className="flex items-start gap-4 text-gray-400 hover:text-accent transition-colors group"
                >
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center text-accent group-hover:bg-accent/20 transition-colors">
                    <EnvelopeIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="text-white">blacksmithstone.com</p>
                  </div>
                </a>

                <a
                  href="tel:+15551234567"
                  className="flex items-start gap-4 text-gray-400 hover:text-accent transition-colors group"
                >
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center text-accent group-hover:bg-accent/20 transition-colors">
                    <PhoneIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <p className="text-white">123 456 789</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 text-gray-400">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center text-accent">
                    <MapPinIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Office</p>
                    <p className="text-white">Grudziąc, PL</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 text-gray-400">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center text-accent">
                    <ClockIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Business Hours</p>
                    <p className="text-white">Mon-Fri 8:00 - 21:37</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-6 border-t border-gray-800">
                <p className="text-gray-500 text-sm mb-4">Connect with us</p>
                <div className="flex gap-3">
                  {[
                    { icon: <FaLinkedin />, href: "#" },
                    { icon: <FaGithub />, href: "#" },
                    { icon: <FaTwitter />, href: "#" },
                    { icon: <FaWhatsapp />, href: "#" },
                  ].map((social, idx) => (
                    <a
                      key={idx}
                      href={social.href}
                      className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:bg-accent hover:text-black transition-all duration-300"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick Response */}
              <div className="mt-6 p-4 bg-accent/10 rounded-lg border border-accent/20">
                <p className="text-accent text-sm font-medium flex items-center gap-2">
                  <SparklesIcon className="w-4 h-4" />
                  Average response time: 12 hours
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Project Form */}
          <div className="lg:col-span-2">
            <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-gray-400">
                    Step {formStep} of 3
                  </span>
                  <span className="text-sm text-accent">
                    {formStep === 1 && "Project Type"}
                    {formStep === 2 && "Project Details"}
                    {formStep === 3 && "Contact Info"}
                  </span>
                </div>
                <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-accent to-accent transition-all duration-500"
                    style={{ width: `${(formStep / 3) * 100}%` }}
                  />
                </div>
              </div>

              {/* Form Steps */}
              {!isSubmitted ? (
                <form onSubmit={handleSubmit}>
                  {/* Step 1: Project Type */}
                  {formStep === 1 && (
                    <div className="space-y-6 animate-fade-in-up">
                      <div>
                        <label className="block text-white text-lg font-medium mb-4">
                          What type of project do you need?
                        </label>
                        <div className="grid sm:grid-cols-2 gap-4">
                          {projectTypes.map((type) => (
                            <button
                              key={type.id}
                              type="button"
                              onClick={() =>
                                setFormData({
                                  ...formData,
                                  projectType: type.id,
                                })
                              }
                              className={`p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                                formData.projectType === type.id
                                  ? "border-accent bg-accent/10"
                                  : "border-gray-800 hover:border-gray-700"
                              }`}
                            >
                              <div className="flex items-start gap-3">
                                <span className="text-2xl">{type.icon}</span>
                                <div>
                                  <p className="font-medium text-white">
                                    {type.label}
                                  </p>
                                  <p className="text-sm text-gray-400 mt-1">
                                    {type.description}
                                  </p>
                                </div>
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="block text-white text-lg font-medium mb-4">
                          Select services you need
                        </label>
                        <div className="flex flex-wrap gap-3">
                          {services.map((service) => (
                            <button
                              key={service}
                              type="button"
                              onClick={() => handleServiceToggle(service)}
                              className={`px-4 py-2 rounded-full border transition-all duration-300 ${
                                formData.services.includes(service)
                                  ? "border-accent bg-accent/20 text-accent"
                                  : "border-gray-800 text-gray-400 hover:border-gray-700 hover:text-white"
                              }`}
                            >
                              {formData.services.includes(service) && (
                                <CheckIcon className="w-4 h-4 inline mr-2" />
                              )}
                              {service}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 2: Project Details */}
                  {formStep === 2 && (
                    <div className="space-y-6 animate-fade-in-up">
                      <div>
                        <label className="block text-white text-lg font-medium mb-4">
                          <CurrencyDollarIcon className="w-5 h-5 inline mr-2" />
                          What's your budget range?
                        </label>
                        <div className="grid sm:grid-cols-2 gap-3">
                          {budgetRanges.map((range) => (
                            <button
                              key={range.id}
                              type="button"
                              onClick={() =>
                                setFormData({ ...formData, budget: range.id })
                              }
                              className={`px-4 py-3 rounded-lg border transition-all duration-300 ${
                                formData.budget === range.id
                                  ? "border-accent bg-accent/20 text-accent"
                                  : "border-gray-800 text-gray-400 hover:border-gray-700 hover:text-white"
                              }`}
                            >
                              {range.label}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="block text-white text-lg font-medium mb-4">
                          <CalendarIcon className="w-5 h-5 inline mr-2" />
                          When do you need it completed?
                        </label>
                        <div className="grid sm:grid-cols-3 gap-3">
                          {timelines.map((timeline) => (
                            <button
                              key={timeline.id}
                              type="button"
                              onClick={() =>
                                setFormData({
                                  ...formData,
                                  timeline: timeline.id,
                                })
                              }
                              className={`px-4 py-3 rounded-lg border transition-all duration-300 ${
                                formData.timeline === timeline.id
                                  ? "border-accent bg-accent/20 text-accent"
                                  : "border-gray-800 text-gray-400 hover:border-gray-700 hover:text-white"
                              }`}
                            >
                              <span className="mr-2">{timeline.icon}</span>
                              {timeline.label}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="block text-white text-lg font-medium mb-4">
                          <DocumentTextIcon className="w-5 h-5 inline mr-2" />
                          Tell us more about your project
                        </label>
                        <textarea
                          value={formData.description}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              description: e.target.value,
                            })
                          }
                          rows={4}
                          className="w-full px-4 py-3 bg-black border border-gray-800 rounded-lg text-white focus:outline-none focus:border-accent transition-colors"
                          placeholder="Describe your project goals, target audience, and any specific requirements..."
                        />
                      </div>
                    </div>
                  )}

                  {/* Step 3: Contact Info */}
                  {formStep === 3 && (
                    <div className="space-y-6 animate-fade-in-up">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-white text-sm font-medium mb-2">
                            Name *
                          </label>
                          <input
                            type="text"
                            value={formData.name}
                            onChange={(e) =>
                              setFormData({ ...formData, name: e.target.value })
                            }
                            className="w-full px-4 py-3 bg-black border border-gray-800 rounded-lg text-white focus:outline-none focus:border-accent transition-colors"
                            placeholder="John Doe"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-white text-sm font-medium mb-2">
                            Email *
                          </label>
                          <input
                            type="email"
                            value={formData.email}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                email: e.target.value,
                              })
                            }
                            className="w-full px-4 py-3 bg-black border border-gray-800 rounded-lg text-white focus:outline-none focus:border-accent transition-colors"
                            placeholder="john@company.com"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-white text-sm font-medium mb-2">
                            Company
                          </label>
                          <input
                            type="text"
                            value={formData.company}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                company: e.target.value,
                              })
                            }
                            className="w-full px-4 py-3 bg-black border border-gray-800 rounded-lg text-white focus:outline-none focus:border-accent transition-colors"
                            placeholder="Company Inc."
                          />
                        </div>
                        <div>
                          <label className="block text-white text-sm font-medium mb-2">
                            Phone
                          </label>
                          <input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                phone: e.target.value,
                              })
                            }
                            className="w-full px-4 py-3 bg-black border border-gray-800 rounded-lg text-white focus:outline-none focus:border-accent transition-colors"
                            placeholder="+1 (555) 123-4567"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-white text-sm font-medium mb-2">
                          Preferred contact method
                        </label>
                        <div className="flex gap-4">
                          {["email", "phone", "whatsapp"].map((method) => (
                            <button
                              key={method}
                              type="button"
                              onClick={() =>
                                setFormData({
                                  ...formData,
                                  preferredContact: method,
                                })
                              }
                              className={`px-4 py-2 rounded-lg border capitalize transition-all duration-300 ${
                                formData.preferredContact === method
                                  ? "border-accent bg-accent/20 text-accent"
                                  : "border-gray-800 text-gray-400 hover:border-gray-700 hover:text-white"
                              }`}
                            >
                              {method}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Project Summary */}
                      <div className="p-4 bg-accent/10 rounded-lg border border-accent/20">
                        <p className="text-accent font-medium mb-2">
                          Project Summary:
                        </p>
                        <div className="space-y-1 text-sm text-gray-400">
                          <p>
                            Type:{" "}
                            <span className="text-white">
                              {
                                projectTypes.find(
                                  (t) => t.id === formData.projectType
                                )?.label
                              }
                            </span>
                          </p>
                          <p>
                            Services:{" "}
                            <span className="text-white">
                              {formData.services.join(", ")}
                            </span>
                          </p>
                          <p>
                            Budget:{" "}
                            <span className="text-white">
                              {
                                budgetRanges.find(
                                  (b) => b.id === formData.budget
                                )?.label
                              }
                            </span>
                          </p>
                          <p>
                            Timeline:{" "}
                            <span className="text-white">
                              {
                                timelines.find(
                                  (t) => t.id === formData.timeline
                                )?.label
                              }
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Navigation Buttons */}
                  <div className="flex justify-between mt-8">
                    <button
                      type="button"
                      onClick={prevStep}
                      className={`px-6 py-3 rounded-lg border border-gray-800 text-gray-400 hover:text-white hover:border-gray-700 transition-all duration-300 ${
                        formStep === 1 ? "invisible" : ""
                      }`}
                    >
                      Previous
                    </button>

                    {formStep < 3 ? (
                      <button
                        type="button"
                        onClick={nextStep}
                        disabled={!isStepValid()}
                        className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${
                          isStepValid()
                            ? "bg-accent text-black hover:bg-accent"
                            : "bg-gray-800 text-gray-500 cursor-not-allowed"
                        }`}
                      >
                        Next Step
                        <ArrowRightIcon className="w-4 h-4" />
                      </button>
                    ) : (
                      <button
                        type="submit"
                        disabled={!isStepValid() || isSubmitting}
                        className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${
                          isStepValid() && !isSubmitting
                            ? "bg-accent text-black hover:bg-accent"
                            : "bg-gray-800 text-gray-500 cursor-not-allowed"
                        }`}
                      >
                        {isSubmitting ? (
                          <>
                            <span className="animate-spin">⏳</span>
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Project Request
                            <ArrowRightIcon className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    )}
                  </div>
                </form>
              ) : (
                /* Success Message */
                <div className="text-center py-12 animate-fade-in-up">
                  <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckIcon className="w-10 h-10 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Thank You!
                  </h3>
                  <p className="text-gray-400 mb-6">
                    We've received your project request and will get back to you
                    within 2 hours.
                  </p>
                  <p className="text-sm text-gray-500">
                    Check your email for a confirmation message.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
