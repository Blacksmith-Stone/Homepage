import "./App.css";
import Navbar from "./Components/NavBar";
import Hero from "./Components/Hero";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";
import About from "./Components/Aboutus";
import Contact from "./Components/Contact";
import { LanguageProvider } from "./Components/Translations/LanguageContext";
import "./Components/ComponentsCSS/global.css";

function App() {
  return (
    <LanguageProvider>
      <div className="App">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
