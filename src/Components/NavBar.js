import { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import "..\\src\\Components\\ComponentsCSS\\navbar_animation.css";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "./Translations/LanguageContext";

export default function Navbar() {
  const { t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#");

  const navigation = [
    { name: t("nav.home"), href: "#" },
    { name: t("nav.about"), href: "#about" },
    { name: t("nav.projects"), href: "#projects" },
    { name: "Gallery", href: "#gallery" },
    { name: t("nav.contact"), href: "#contact" },
  ];
  // Zablokowanie scrolla przy otwartym menu
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup przy odmontowaniu komponentu
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
    handleScroll(); // Sprawdź początkową pozycję

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
  }, []);

  // Smooth scroll do sekcji
  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);

    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.querySelector(href);
      if (element) {
        const offsetTop = element.offsetTop - 70;
        window.scrollTo({ top: offsetTop, behavior: "smooth" });
      }
    }
  };

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
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-black/95 backdrop-blur-md shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a
                href="#"
                onClick={(e) => handleNavClick(e, "#")}
                className="text-2xl font-bold text-[#00df9a] hover:text-white transition-colors"
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
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    activeSection === item.href
                      ? "text-white bg-[#00df9a]/20"
                      : "text-[#00df9a] hover:text-white hover:bg-white/10"
                  }`}
                >
                  {item.name}
                </a>
              ))}

              {/* Language Switcher dla desktop */}
              <div className="ml-4">
                <LanguageSwitcher />
              </div>
            </div>

            {/* Mobile hamburger */}
            <div className="md:hidden flex items-center gap-2">
              <LanguageSwitcher />
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="relative p-2 rounded-md text-[#00df9a] hover:text-white hover:bg-white/10 transition-all focus:outline-none focus:ring-2 focus:ring-[#00df9a]/50"
                aria-label="Toggle menu"
              >
                <Bars3Icon
                  className={`h-6 w-6 transition-all duration-300 ${
                    menuOpen ? "opacity-0 rotate-90" : "opacity-100 rotate-0"
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-80 bg-black/95 backdrop-blur-md z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close button */}
        <div className="flex justify-end p-4">
          <button
            onClick={() => setMenuOpen(false)}
            className="p-2 rounded-md text-[#00df9a] hover:text-white hover:bg-white/10 transition-all focus:outline-none focus:ring-2 focus:ring-[#00df9a]/50"
            aria-label="Close menu"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Navigation Links */}
        <div className="flex flex-col items-center justify-center h-[calc(100%-80px)] space-y-8">
          {navigation.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className={`text-2xl font-semibold transition-all duration-200 transform hover:scale-110 ${
                activeSection === item.href
                  ? "text-white"
                  : "text-[#00df9a] hover:text-white"
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
          <p className="text-gray-500 text-sm">
            © 2025 BSS. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
}
