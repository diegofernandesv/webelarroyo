import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import "./components/css/ParallaxContainer.css";
import ContactBanner from "./components/ContactBanner";
import NavigationHeader from "./components/NavigationHeader";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Habitaciones from "./pages/Habitaciones";
import RoomDetail from "./pages/RoomDetail";
import Servicios from "./pages/Servicios";
import Contacto from "./pages/Contacto";
import LocationSection from "./components/LocationSection";

function App() {
  return (
    <Router>
      <div className="hotel-landing-page">
        <div className="sticky-header">
          <ContactBanner />
          <NavigationHeader />
        </div>

        <main className="main-content">
          <Routes>
            <Route path="/webelarroyo" element= {<Home/>} />
            <Route path="/habitaciones" element={<Habitaciones />} />
            <Route path="/habitaciones/:slug" element={<RoomDetail />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/location" element={<LocationSection />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
