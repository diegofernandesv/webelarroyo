import React from "react";
import ServicesSection from "../components/ServicesSection";
import CTASection from "../components/CTASection";

const Servicios = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <div className="page-hero">
          <h1 className="page-title">Nuestros Servicios</h1>
          <p className="page-subtitle">
            Todo lo que necesitas para una estadía perfecta en el centro de
            Caracas
          </p>
        </div>
      </div>
      <ServicesSection />
      <div className="services-details-section">
        <div className="services-details-container">
          <h2 className="section-title">Servicios Adicionales</h2>
          <div className="services-list">
            <div className="service-detail">
              <h3>Recepción 24 Horas</h3>
              <p>
                Personal disponible las 24 horas para asistirte en lo que
                necesites
              </p>
            </div>
            <div className="service-detail">
              <h3>Servicio de Limpieza</h3>
              <p>Limpieza diaria de habitaciones y cambio de ropa de cama</p>
            </div>
            <div className="service-detail">
              <h3>Panadería</h3>
              <p>Pan fresco y productos de panadería disponibles en el hotel</p>
            </div>
            <div className="service-detail">
              <h3>Transporte</h3>
              <p>Servicio de Uber facilitado para tu comodidad y seguridad</p>
            </div>
            <div className="service-detail">
              <h3>Ubicación Estratégica</h3>
              <p>Frente al Metro Teatros, cerca del SAIME y TSJ</p>
            </div>
            <div className="service-detail">
              <h3>Seguridad</h3>
              <p>Vigilancia las 24 horas para tu tranquilidad</p>
            </div>
          </div>
        </div>
      </div>
      <CTASection />
    </div>
  );
};

export default Servicios;
