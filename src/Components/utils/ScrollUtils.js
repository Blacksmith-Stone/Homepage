/**
 * Płynnie przewija do sekcji o podanym ID.
 * @param {string} sectionId - Selektor ID sekcji, do której chcemy przewinąć (np. "#projects").
 */
export const scrollToSection = (sectionId) => {
  if (sectionId === "#") {
    // Specjalny przypadek: przewiń na samą górę
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    const element = document.querySelector(sectionId);
    if (element) {
      // Offset dodany przez CSS (scroll-margin-top) - na ten moment opcja jest zakomentowana w navbar_animation.css
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }
};
