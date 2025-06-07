import React from "react";
import RoomsSection from "../components/RoomsSection";
import CTASection from "../components/CTASection";

const Habitaciones = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <div className="page-hero">
          <h1 className="page-title">Nuestras Habitaciones</h1>
          <p className="page-subtitle">
            Descubre nuestras cómodas habitaciones diseñadas para tu descanso y
            comodidad
          </p>
        </div>
      </div>
      <RoomsSection />
      <div className="room-details-section">
        <div className="room-details-container">
          <h2 className="section-title">Comodidades Incluidas</h2>
          <div className="amenities-grid">
            <div className="amenity-card">
              <h3>WiFi Gratuito</h3>
              <p>Internet de alta velocidad en todas las habitaciones</p>
            </div>
            <div className="amenity-card">
              <h3>Aire Acondicionado</h3>
              <p>Climatización perfecta para tu comodidad</p>
            </div>
            <div className="amenity-card">
              <h3>Smart TV</h3>
              <p>Entretenimiento con acceso a plataformas streaming</p>
            </div>
            <div className="amenity-card">
              <h3>Baño Privado</h3>
              <p>Baño completo con agua caliente las 24 horas</p>
            </div>
          </div>
        </div>
      </div>
      <CTASection />
    </div>
  );
};

export default Habitaciones;
