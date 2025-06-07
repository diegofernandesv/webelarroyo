import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import ContactBanner from "./components/ContactBanner";
import NavigationHeader from "./components/NavigationHeader";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Habitaciones from "./pages/Habitaciones";
import Servicios from "./pages/Servicios";
import Contacto from "./pages/Contacto";

function App() {
  return (
    <Router>
      <div className="hotel-landing-page">
        <ContactBanner />
        <NavigationHeader />

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/habitaciones" element={<Habitaciones />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
