// Main Application
import Nav from "./Nav";
import Typewriter from "./Typewriter";

function App() {
  return (
    <>
      <div className="first_page_wrapper">
        <header>
          <Nav />
        </header>
        <div className="hero">
          <div className="typewriter_wrapper">
            <Typewriter />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
