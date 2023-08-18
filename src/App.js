import Navbar from "./Component/Navbar/Navbar";
import "./App.css";
import About from "./Component/AboutMe/About";
import Services from "./Component/Service/Services";
import { BrowserRouter as Routex, Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Footer from "./Component/Footer/Footer";
import Skills from "./Component/Skills/Skills";

function App() {
  return (
    <Routex>
      <div className="App">
        <Navbar />
        <Services />
        <About />
        <Skills/>
        <Footer />
      </div>
      {/* <Routes>
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
      </Routes> */}
    </Routex>
  );
}

export default App;
