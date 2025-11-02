import "./App.css";
import Navbar from "./Components/NavBar";
import Hero from "./Components/Hero";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";
import About from "./Components/Aboutus";
import Contact from "./Components/Contact";
import { LanguageProvider } from "./Components/Translations/LanguageContext";
import "./Components/ComponentsCSS/global.css";
// import ParticleBackground from "./Components/ParticleBackground";

function App() {
  return (
    <LanguageProvider>
      {/* <div className="relative min-h-screen bg-bg-primary text-text-primary"> */}
      {/* <ParticleBackground /> */}
      <div className="App">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
      {/* </div> */}
    </LanguageProvider>
  );
}

export default App;
