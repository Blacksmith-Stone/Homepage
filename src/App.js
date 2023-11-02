import "./App.css";
import Example from "./Components/NavBar";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";

function App() {
  return (
    <div className="App">
      <Example />
      <main>
        <Hero />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
