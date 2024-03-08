import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Portafolio from "./pages/Portafolio";
import Servicios from "./pages/Servicios";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/servicios" element={<Servicios />} />
      <Route path="/about-me" element={<About />} />
      <Route path="/portafolio" element={<Portafolio />} />
    </Routes>
  );
}

export default App;
