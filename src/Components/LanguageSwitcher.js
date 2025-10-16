import React, { useState, useRef, useEffect } from "react";
import { useLanguage } from "./Translations/LanguageContext";
import { GlobeAltIcon } from "@heroicons/react/24/outline";

const LanguageSwitcher = () => {
  const { language, changeLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  const languages = [
    {
      code: "en",
      name: "English",
      shortName: "EN",
      flag: (
        <svg className="w-5 h-5 rounded-sm overflow-hidden" viewBox="0 0 60 40">
          <rect width="60" height="40" fill="#012169" />
          <path d="M0,0 L60,40 M60,0 L0,40" stroke="#fff" strokeWidth="6" />
          <path d="M0,0 L60,40 M60,0 L0,40" stroke="#C8102E" strokeWidth="4" />
          <path d="M30,0 L30,40 M0,20 L60,20" stroke="#fff" strokeWidth="10" />
          <path
            d="M30,0 L30,40 M0,20 L60,20"
            stroke="#C8102E"
            strokeWidth="6"
          />
        </svg>
      ),
    },
    {
      code: "pl",
      name: "Polski",
      shortName: "PL",
      flag: (
        <svg className="w-5 h-5 rounded-sm overflow-hidden" viewBox="0 0 60 40">
          <rect width="60" height="20" fill="#fff" />
          <rect y="20" width="60" height="20" fill="#dc143c" />
        </svg>
      ),
    },
  ];

  const currentLang = languages.find((lang) => lang.code === language);

  // Zamknij menu gdy klikniemy poza nim
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative" ref={containerRef}>
      {/* Main Button - Desktop */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="hidden md:flex items-center gap-2 px-3 py-2 rounded-xl bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-[#00df9a]/50 hover:bg-gray-900/80 transition-all duration-300 group"
      >
        <div className="relative">
          {currentLang?.flag}
          <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-[#00df9a] rounded-full animate-pulse" />
        </div>
        <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
          {currentLang?.shortName}
        </span>
        <svg
          className={`w-4 h-4 text-gray-500 transition-all duration-300 ${
            isOpen ? "rotate-180 text-[#00df9a]" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Mobile Button - Simplified */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden flex items-center gap-1.5 px-2.5 py-2 rounded-lg bg-gray-900/50 backdrop-blur-sm border border-gray-800"
      >
        {currentLang?.flag}
        <span className="text-xs font-medium text-gray-300">
          {currentLang?.shortName}
        </span>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-gray-900/95 backdrop-blur-md border border-gray-800 rounded-xl shadow-2xl shadow-black/50 z-50 overflow-hidden animate-fade-in-down">
          <div className="p-2">
            {languages.map((lang, index) => (
              <button
                key={lang.code}
                onClick={() => {
                  changeLanguage(lang.code);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 ${
                  language === lang.code
                    ? "bg-[#00df9a]/20 text-[#00df9a]"
                    : "hover:bg-gray-800 text-gray-300 hover:text-white"
                }`}
              >
                <div className="relative">
                  {lang.flag}
                  {language === lang.code && (
                    <div className="absolute -bottom-0.5 -right-0.5 w-2 h-2 bg-[#00df9a] rounded-full" />
                  )}
                </div>
                <div className="flex-1 text-left">
                  <div className="text-sm font-medium">{lang.name}</div>
                  <div className="text-xs text-gray-500">{lang.shortName}</div>
                </div>
                {language === lang.code && (
                  <svg
                    className="w-4 h-4 text-[#00df9a]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
