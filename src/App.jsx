import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Nav-bar/navbar";
import Home from "./Components/Home/home";
import Services from "./Components/Services/services";
import AboutUs from "./Components/About Us/about-us";
import Portfolio from "./Components/Portfolio/portfolio";
import Contact from "./Components/Contact/contact";

function App() {
  return (
    <>
      <Navbar />
      <Home/>
      <Services/>
      <AboutUs/>
      <Portfolio/>
      <Routes>
        <Route path="/services" element={<Services />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
