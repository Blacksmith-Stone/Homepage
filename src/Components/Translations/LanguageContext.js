import React, { createContext, useContext, useState, useEffect } from "react";
import { en } from "./en";
import { pl } from "./pl";

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");
  const [translations, setTranslations] = useState(en);

  useEffect(() => {
    // Pobierz zapisany język z localStorage
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      setLanguage(savedLanguage);
      setTranslations(savedLanguage === "pl" ? pl : en);
    } else {
      // Wykryj język przeglądarki
      const browserLanguage = navigator.language.toLowerCase();
      if (browserLanguage.startsWith("pl")) {
        setLanguage("pl");
        setTranslations(pl);
      }
    }
  }, []);

  const changeLanguage = (lang) => {
    setLanguage(lang);
    setTranslations(lang === "pl" ? pl : en);
    localStorage.setItem("language", lang);
  };

  const t = (key) => {
    const keys = key.split(".");
    let value = translations;

    for (const k of keys) {
      value = value?.[k];
    }

    return value || key;
  };

  return (
    <LanguageContext.Provider
      value={{ language, changeLanguage, t, translations }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
