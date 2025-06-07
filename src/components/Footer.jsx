import React from "react";
import { Link } from "react-router-dom";
import "./css/Footer.css";

const Footer = () => {
  const socialIcons = [
    "https://cdn.builder.io/api/v1/image/assets/e9cac1e18ae64186984fb4d639c633bc/a6637b8b82d84e4ce81dc776d6e6e7aaebaca95f?placeholderIfAbsent=true",
    "https://cdn.builder.io/api/v1/image/assets/e9cac1e18ae64186984fb4d639c633bc/46f44abf84dd9a1c58c3d8501972c9e9c7303313?placeholderIfAbsent=true",
    "https://cdn.builder.io/api/v1/image/assets/e9cac1e18ae64186984fb4d639c633bc/ed5cc320a9dafdf5169859e78018837e5a1e6ef1?placeholderIfAbsent=true",
  ];

  return (
    <div className="footer-section">
      <div className="footer-content">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/e9cac1e18ae64186984fb4d639c633bc/42773e83346e4e55a12b134745d5063d4aec89d7?placeholderIfAbsent=true"
          className="footer-logo"
          alt="Hotel Logo"
        />
        <nav className="footer-nav">
          <Link to="/">Inicio</Link>
          <Link to="/habitaciones">Habitaciones</Link>
          <Link to="/servicios">Servicios</Link>
          <Link to="/contacto">Contacto</Link>
          <Link to="/location">Ubicación</Link>
        </nav>
        <div className="footer-info">
          <div className="social-icons">
            {socialIcons.map((icon, index) => (
              <img
                key={index}
                src={icon}
                className="social-icon"
                alt="Social Media"
              />
            ))}
          </div>
          <div className="footer-copyright">©2022 Hotel El Arroyo.</div>
          <div className="footer-address">
            USA Office: FERCAT INVESTMENT LLC
            <br />
            12211 Regency Village Drive,
            <br />
            Orlando, FL 32821
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
