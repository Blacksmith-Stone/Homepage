import React, { useEffect, useState, useRef } from "react";
import { SunIcon, MoonIcon, CheckIcon } from "@heroicons/react/24/outline";

const ThemeSwitcherDropdown = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "dark";
    }
    return "dark";
  });

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const themes = [
    {
      value: "light",
      label: "Light",
      icon: <SunIcon className="w-4 h-4" />,
    },
    {
      value: "dark",
      label: "Dark",
      icon: <MoonIcon className="w-4 h-4" />,
    },
  ];

  useEffect(() => {
    const root = document.documentElement;

    if (theme === "dark") {
      root.setAttribute("data-theme", "dark");
    } else {
      root.removeAttribute("data-theme");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  // Zamknij dropdown po kliknięciu poza nim
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const currentTheme = themes.find((t) => t.value === theme);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 group rounded-xl bg-bg-primary shadow-md shadow-border hover:scale-105 transition-transform duration-300 ease-out will-change-transform "
        aria-label="Theme switcher"
      >
        <span className="text-yellow-500 group-hover:text-accent transition-colors">
          {currentTheme?.icon}
        </span>
        <span className="text-sm font-medium text-text-secondary group-hover:text-text-primary transition-colors hidden sm:inline">
          {currentTheme?.label}
        </span>
        <svg
          className={`w-4 h-4 text-text-muted transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
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

      {isOpen && (
        <div className="absolute right-0 mt-2 w-36 bg-bg-primary border border-border rounded-xl shadow-lg overflow-hidden z-50">
          {themes.map((themeOption) => (
            <button
              key={themeOption.value}
              onClick={() => {
                setTheme(themeOption.value);
                setIsOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-3 py-2.5 text-sm transition-colors ${
                theme === themeOption.value
                  ? "bg-accent/10 text-accent"
                  : "text-text-secondary hover:bg-surface hover:text-text-primary"
              }`}
            >
              {themeOption.icon}
              <span className="flex-1 text-left">{themeOption.label}</span>
              {theme === themeOption.value && <CheckIcon className="w-4 h-4" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ThemeSwitcherDropdown;
