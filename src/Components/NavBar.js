import { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import "./ComponentsCSS/navbar_animation.css";
import LanguageSwitcher from "./Translations/LanguageSwitcher";
import { useLanguage } from "./Translations/LanguageContext";
import ThemeSwitcher from "./Theme/ThemeSwitcher";
import { scrollToSection } from "./utils/ScrollUtils";

export default function Navbar() {
  const { t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#");

  const navigation = [
    { name: t("nav.home"), href: "#" },
    { name: t("nav.about"), href: "#about" },
    { name: t("nav.projects"), href: "#projects" },
    { name: t("nav.contact"), href: "#contact" },
  ];

  // Zablokowanie scrolla przy otwartym menu
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  // Efekt zmiany tła przy scrollu
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Śledzenie aktywnej sekcji
  useEffect(() => {
    const handleScroll = () => {
      const sections = navigation.map((item) => item.href);
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        if (section === "#") {
          if (window.scrollY < 100) {
            setActiveSection("#");
            break;
          }
        } else {
          const element = document.querySelector(section);
          if (element) {
            const { offsetTop, offsetHeight } = element;
            if (
              scrollPosition >= offsetTop &&
              scrollPosition < offsetTop + offsetHeight
            ) {
              setActiveSection(section);
              break;
            }
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navigation]);

  // Zamknij menu przy zmianie rozmiaru okna
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 bg-bg-primary/95 ${
          scrolled
            ? "bg-bg-primary/95 backdrop-blur-md shadow-lg border-b border-border"
            : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setMenuOpen(false);
                  scrollToSection("#");
                }}
                className="text-2xl font-bold text-accent transition-colors"
              >
                BSS.
              </a>
            </div>

            {/* Desktop menu */}
            <div className="hidden md:flex items-center space-x-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    setMenuOpen(false);
                    scrollToSection(item.href);
                  }}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    activeSection === item.href
                      ? "text-accent bg-accent/10 shadow-sm"
                      : "text-text-secondary hover:text-accent hover:bg-accent/5"
                  }`}
                >
                  {item.name}
                </a>
              ))}

              {/* Language & Theme Switchers dla desktop */}
              <div className="flex items-center gap-2 ml-4">
                <LanguageSwitcher />
                <ThemeSwitcher />
              </div>
            </div>

            {/* Mobile hamburger */}
            <div className="md:hidden flex items-center gap-2">
              <LanguageSwitcher />
              <ThemeSwitcher />
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="relative p-2 rounded-md text-accent hover:bg-accent/10 transition-all focus:outline-none focus:ring-2 focus:ring-accent/50"
                aria-label="Toggle menu"
              >
                <div className="relative w-6 h-6">
                  <Bars3Icon
                    className={`absolute inset-0 h-6 w-6 transition-all duration-300 ${
                      menuOpen
                        ? "opacity-0 rotate-90 scale-50"
                        : "opacity-100 rotate-0 scale-100"
                    }`}
                  />
                  <XMarkIcon
                    className={`absolute inset-0 h-6 w-6 transition-all duration-300 ${
                      menuOpen
                        ? "opacity-100 rotate-0 scale-100"
                        : "opacity-0 -rotate-90 scale-50"
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-bg-primary/50 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-16 right-0 h-[calc(100%-4rem)] w-full sm:w-80 bg-bg-primary backdrop-blur-md z-40 transform transition-transform duration-300 ease-in-out md:hidden border-l border-border ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Mobile Navigation Links */}
        <div className="flex flex-col items-center justify-center h-[calc(100%-80px)] space-y-8">
          {navigation.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                setMenuOpen(false);
                scrollToSection(item.href);
              }}
              className={`text-2xl font-semibold transition-all duration-200 transform hover:scale-110 ${
                activeSection === item.href
                  ? "text-accent"
                  : "text-text-secondary hover:text-accent"
              }`}
              style={{
                animation: menuOpen
                  ? `slideInRight ${0.3 + index * 0.1}s ease-out`
                  : "",
              }}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Footer */}
        <div className="absolute bottom-8 left-0 right-0 text-center">
          <p className="text-text-muted text-sm">
            © 2025 BSS. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
}
