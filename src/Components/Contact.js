import React, { useState, useEffect, useRef } from "react";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  CheckIcon,
  ArrowLongRightIcon,
  ArrowLongLeftIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";
import { FaLinkedin, FaTwitter, FaGithub, FaWhatsapp } from "react-icons/fa";
import "./ComponentsCSS/contact_animation.css";
import useScrollReveal from "./utils/useScrollReveal";

const Contact = () => {
  const [formStep, setFormStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { setItemRef, isVisible } = useScrollReveal({
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
    unobserveOnShow: true,
  });

  const [formData, setFormData] = useState({
    projectType: "",
    services: [],
    budget: "",
    timeline: "",
    description: "",
    name: "",
    email: "",
    company: "",
    phone: "",
  });

  const projectTypes = [
    {
      id: "webapp",
      label: "Web Application",
      description: "Custom web platforms",
    },
    { id: "ecommerce", label: "E-Commerce", description: "Online stores" },
    { id: "mobile", label: "Mobile App", description: "iOS & Android" },
    { id: "trouble", label: "Maintenance", description: "Support & fixes" },
    {
      id: "corporate",
      label: "Corporate Site",
      description: "Business websites",
    },
    { id: "other", label: "Other", description: "Custom solutions" },
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
    { id: "5k-10k", label: "$5K - $10K" },
    { id: "10k-25k", label: "$10K - $25K" },
    { id: "25k-50k", label: "$25K - $50K" },
    { id: "50k-100k", label: "$50K - $100K" },
    { id: "100k+", label: "$100K+" },
    { id: "discuss", label: "Let's Discuss" },
  ];

  const timelines = [
    { id: "asap", label: "ASAP" },
    { id: "1month", label: "1 Month" },
    { id: "3months", label: "1-3 Months" },
    { id: "6months", label: "3-6 Months" },
    { id: "flexible", label: "Flexible" },
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
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSubmitted(true);

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
    <section id="contact" className="bg-bg-primary py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6" data-id="contact-header">
        {/* Header */}
        <div
          ref={setItemRef(0)}
          data-id="contact-header"
          className={`mb-20 transition-all duration-700 ease-out delay-150 ${
            isVisible("contact-header")
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-5xl md:text-6xl text-text-primary mb-6 tracking-tight font-light">
            Zbudujmy coś niesamowitego<span className="text-accent">.</span>
          </h2>
          <p className="text-text-secondary text-lg font-light max-w-2xl">
            Opowiedz nam o swoim projekcie, a my przekształcimy wizję w
            rzeczywistość
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-16">
          {/* Contact Info */}
          <div
            ref={setItemRef(1)}
            data-id="contact-info"
            className={`lg:col-span-1 transition-all duration-700 ease-out delay-150 ${
              isVisible("contact-info")
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="space-y-8 sticky top-24">
              <div>
                <h3 className="text-xs uppercase tracking-widest text-text-secondary mb-8">
                  Informacje
                </h3>

                <div className="space-y-6 text-justify">
                  <a
                    href="mailto:hello@blacksmithstone.com"
                    className="group block"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-text-muted group-hover:border-accent group-hover:text-accent transition-all duration-300">
                        <EnvelopeIcon className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs text-text-secondary mb-1 uppercase tracking-wide">
                          Email
                        </p>
                        <p className="text-text-muted group-hover:text-accent transition-colors duration-300">
                          hello@blacksmithstone.com
                        </p>
                      </div>
                    </div>
                  </a>

                  <a href="tel:+48123456789" className="group block">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-text-muted group-hover:border-accent group-hover:text-accent transition-all duration-300">
                        <PhoneIcon className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs text-text-secondary mb-1 uppercase tracking-wide">
                          Telefon
                        </p>
                        <p className="text-text-muted group-hover:text-accent transition-colors duration-300">
                          +48 123 456 789
                        </p>
                      </div>
                    </div>
                  </a>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-text-muted">
                      <MapPinIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-text-secondary mb-1 uppercase tracking-wide">
                        Lokalizacja
                      </p>
                      <p className="text-text-muted">Grudziądz, Poland</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 pt-4 border-t border-border">
                    <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-accent">
                      <ClockIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-text-secondary mb-1 uppercase tracking-wide">
                        Czas odpowiedzi
                      </p>
                      <p className="text-text-muted">Do 12 godzin</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-8 border-t border-border">
                <p className="text-xs uppercase tracking-widest text-text-secondary mb-6">
                  Social Media
                </p>
                <div className="flex gap-4">
                  {[
                    { icon: <FaLinkedin />, href: "#" },
                    { icon: <FaGithub />, href: "#" },
                    { icon: <FaTwitter />, href: "#" },
                    { icon: <FaWhatsapp />, href: "#" },
                  ].map((social, idx) => (
                    <a
                      key={idx}
                      href={social.href}
                      className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-text-muted hover:border-accent hover:text-accent transition-all duration-300 transform hover:scale-110"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Form Container */}
          <div
            ref={setItemRef(11)}
            data-id="contact-form"
            className={`lg:col-span-2 transition-all duration-700 ease-out delay-150 ${
              isVisible("contact-form")
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <div className="bg-bg-primary shadow-xl rounded-2xl shadow-md shadow-gray-100/10 border-border p-8 md:p-10">
              {/* Progress */}
              <div className="mb-12">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-text-muted font-medium">
                    Krok {formStep}/3
                  </span>
                  <span className="text-sm text-text-primary font-medium">
                    {formStep === 1 && "Typ projektu"}
                    {formStep === 2 && "Szczegóły"}
                    {formStep === 3 && "Twoje dane"}
                  </span>
                </div>
                <div className="flex gap-2">
                  {[1, 2, 3].map((step) => (
                    <div
                      key={step}
                      className={`h-1 flex-1 rounded-full transition-all duration-300 ease-out ${
                        step <= formStep ? "bg-accent" : "bg-border"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {!isSubmitted ? (
                <form onSubmit={handleSubmit}>
                  {/* Step 1 */}
                  {formStep === 1 && (
                    <div key="step1" className="space-y-10 animate-slideIn">
                      <div>
                        <label className="block text-text-primary text-base font-medium mb-6">
                          Jakiego typu projekt Cię interesuje?
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
                              className={`relative p-5 rounded-xl shadow-md shadow-gray-100/20 text-left transition-all duration-200 hover:bg-accent/30 ${
                                formData.projectType === type.id
                                  ? "border-accent bg-accent/10 shadow-lg "
                                  : "border-border hover:border-accent/50 hover:shadow-md bg-bg-primary"
                              }`}
                            >
                              <p className="text-text-primary font-medium mb-1">
                                {type.label}
                              </p>
                              <p className="text-sm text-text-muted">
                                {type.description}
                              </p>
                              {formData.projectType === type.id && (
                                <div className="absolute top-5 right-5 w-5 h-5 rounded-full bg-accent flex items-center justify-center">
                                  <CheckIcon
                                    className="w-3 h-3 text-white"
                                    strokeWidth={3}
                                  />
                                </div>
                              )}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="block text-text-primary text-base font-medium mb-6">
                          Których usług potrzebujesz?
                        </label>
                        <div className="flex flex-wrap gap-3">
                          {services.map((service) => (
                            <button
                              key={service}
                              type="button"
                              onClick={() => handleServiceToggle(service)}
                              className={`px-5 py-2.5 rounded-full shadow-md shadow-gray-100/20 text-sm font-medium transition-all duration-200 ${
                                formData.services.includes(service)
                                  ? "border-accent text-white bg-accent/50 shadow-md"
                                  : "border-border text-text-secondary hover:border-accent/50 hover:text-accent bg-bg-primary"
                              }`}
                            >
                              {service}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 2 */}
                  {formStep === 2 && (
                    <div key="step2" className="space-y-10 animate-slideIn">
                      <div>
                        <label className="block text-text-primary text-base font-medium mb-6">
                          Jaki jest Twój budżet?
                        </label>
                        <div className="grid sm:grid-cols-3 gap-3">
                          {budgetRanges.map((range) => (
                            <button
                              key={range.id}
                              type="button"
                              onClick={() =>
                                setFormData({ ...formData, budget: range.id })
                              }
                              className={`px-4 py-3 rounded-lg shadow-md shadow-gray-100/20 text-sm font-medium transition-all duration-200 ${
                                formData.budget === range.id
                                  ? "border-accent text-white bg-accent/40 shadow-md"
                                  : "border-border text-text-secondary hover:border-accent/50 hover:text-accent bg-bg-primary"
                              }`}
                            >
                              {range.label}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="block text-text-primary text-base font-medium mb-6">
                          Jaki jest deadline?
                        </label>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
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
                              className={`px-4 py-3 rounded-lg shadow-md shadow-gray-100/20 text-sm font-medium transition-all duration-200 ${
                                formData.timeline === timeline.id
                                  ? "border-accent text-white bg-accent/40 shadow-md"
                                  : "border-border text-text-secondary hover:border-accent/50 hover:text-accent bg-bg-primary"
                              }`}
                            >
                              {timeline.label}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="block text-text-primary text-base font-medium mb-6">
                          Opowiedz nam o projekcie
                        </label>
                        <textarea
                          value={formData.description}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              description: e.target.value,
                            })
                          }
                          rows={6}
                          className="w-full px-5 py-4 bg-bg-primary shadow-md shadow-gray-100/20 border-border rounded-xl text-text-primary placeholder-text-muted focus:outline-none focus:border-accent focus:shadow-lg transition-all duration-200 resize-none"
                          placeholder="Opisz swoje cele, grupę docelową i wymagania..."
                        />
                      </div>
                    </div>
                  )}

                  {/* Step 3 */}
                  {formStep === 3 && (
                    <div key="step3" className="space-y-8 animate-slideIn">
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm text-text-secondary mb-3 tracking-wide font-medium">
                            Imię i nazwisko *
                          </label>
                          <input
                            type="text"
                            value={formData.name}
                            onChange={(e) =>
                              setFormData({ ...formData, name: e.target.value })
                            }
                            className="w-full px-0 py-3 bg-transparent border-b-2 border-border text-text-primary placeholder-text-muted focus:outline-none focus:border-accent transition-all duration-200"
                            placeholder="Jan Kowalski"
                            required
                          />
                        </div>

                        <div>
                          <label className="block text-sm text-text-secondary mb-3 tracking-wide font-medium">
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
                            className="w-full px-0 py-3 bg-transparent border-b-2 border-border text-text-primary placeholder-text-muted focus:outline-none focus:border-accent transition-all duration-200"
                            placeholder="jan@firma.pl"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm text-text-secondary mb-3 tracking-wide font-medium">
                            Firma
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
                            className="w-full px-0 py-3 bg-transparent border-b-2 border-border text-text-primary placeholder-text-muted focus:outline-none focus:border-accent transition-all duration-200"
                            placeholder="Nazwa firmy"
                          />
                        </div>

                        <div>
                          <label className="block text-sm text-text-secondary mb-3 tracking-wide font-medium">
                            Telefon
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
                            className="w-full px-0 py-3 bg-transparent border-b-2 border-border text-text-primary placeholder-text-muted focus:outline-none focus:border-accent transition-all duration-200"
                            placeholder="+48 123 456 789"
                          />
                        </div>
                      </div>

                      {/* Summary */}
                      <div className="mt-10 p-6 rounded-xl border-2 border-accent/30 bg-accent/5">
                        <p className="text-text-secondary mb-4 font-bold text-sm uppercase tracking-wide">
                          Podsumowanie
                        </p>
                        <div className="grid sm:grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="text-text-secondary font-bold">
                              Typ:
                            </span>
                            <p className="text-text-muted mt-1 font-medium">
                              {
                                projectTypes.find(
                                  (t) => t.id === formData.projectType
                                )?.label
                              }
                            </p>
                          </div>
                          <div>
                            <span className="text-text-secondary font-bold">
                              Budżet:
                            </span>
                            <p className="text-text-muted mt-1 font-medium">
                              {
                                budgetRanges.find(
                                  (b) => b.id === formData.budget
                                )?.label
                              }
                            </p>
                          </div>
                          <div>
                            <span className="text-text-secondary font-bold">
                              Timeline:
                            </span>
                            <p className="text-text-muted mt-1 font-medium">
                              {
                                timelines.find(
                                  (t) => t.id === formData.timeline
                                )?.label
                              }
                            </p>
                          </div>
                          <div>
                            <span className="text-text-secondary font-bold">
                              Usługi:
                            </span>
                            <p className="text-text-muted mt-1 font-medium">
                              {formData.services.length} wybranych
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Navigation Buttons */}
                  <div className="flex justify-between items-center mt-10 pt-8 border-t border-border">
                    {/* Przycisk Wstecz - tylko gdy formStep > 1 */}
                    {formStep > 1 ? (
                      <button
                        type="button"
                        onClick={prevStep}
                        className="group flex items-center gap-2 px-8 py-3 rounded-lg font-semibold border-2 border-border text-text-primary bg-bg-primary hover:border-accent/50 hover:bg-accent/5 transition-all duration-200"
                      >
                        Wstecz
                      </button>
                    ) : (
                      <div></div>
                    )}

                    {/* Przycisk Dalej / Wyślij */}
                    {formStep < 3 ? (
                      <button
                        type="button"
                        onClick={nextStep}
                        disabled={!isStepValid()}
                        className={`group flex items-center gap-2 px-8 py-3 rounded-lg font-semibold transition-all duration-200 ${
                          isStepValid()
                            ? "bg-accent/50 text-white hover:bg-accent/40 hover:shadow-lg active:scale-95"
                            : "bg-gray-300 text-gray-500 cursor-not-allowed"
                        }`}
                      >
                        Dalej
                        <ArrowLongRightIcon className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
                      </button>
                    ) : (
                      <button
                        type="submit"
                        disabled={!isStepValid() || isSubmitting}
                        className={`group flex items-center gap-2 px-8 py-3 rounded-lg font-semibold transition-all duration-200 ${
                          isStepValid() && !isSubmitting
                            ? "bg-accent/40 text-text-primary hover:bg-accent/50 hover:shadow-lg active:scale-95"
                            : "border-2 border-border text-text-primary cursor-not-allowed"
                        }`}
                      >
                        {isSubmitting ? (
                          <>
                            <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            Wysyłanie...
                          </>
                        ) : (
                          <>
                            Wyślij zapytanie
                            <ArrowLongRightIcon className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
                          </>
                        )}
                      </button>
                    )}
                  </div>
                </form>
              ) : (
                /* Success Message */
                <div className="text-center py-20 animate-slideIn">
                  <div className="w-16 h-16 rounded-full bg-accent/10 border-2 border-accent flex items-center justify-center mx-auto mb-6 animate-scaleIn">
                    <CheckIcon
                      className="w-8 h-8 text-accent"
                      strokeWidth={2}
                    />
                  </div>
                  <h3 className="text-3xl font-bold text-text-primary mb-3">
                    Dziękujemy!
                  </h3>
                  <p className="text-text-secondary mb-2">
                    Otrzymaliśmy Twoje zapytanie
                  </p>
                  <p className="text-sm text-text-muted">
                    Skontaktujemy się w ciągu 12 godzin
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
