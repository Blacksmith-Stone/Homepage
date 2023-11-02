import logo from "./logo.svg";
import "./App.css";
import Example from "./Components/NavBar";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Example />

      <header className="App-header"></header>

      <body>
        <div className="inprogress">
          <span>S</span>
          <span>T</span>
          <span>R</span>
          <span>O</span>
          <span>N</span>
          <span>A</span>
          <br />
          <span>W</span>
          <br />
          <span>B</span>
          <span>U</span>
          <span>D</span>
          <span>O</span>
          <span>W</span>
          <span>I</span>
          <span>E</span>
        </div>
        <footer>
          <Footer />
        </footer>
      </body>
    </div>
  );
}

export default App;
