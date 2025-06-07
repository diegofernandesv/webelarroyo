import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import BurgerMenu from "./BurgerMenu";
import "./css/NavigationHeader.css";

const NavigationHeader = () => {
  const location = useLocation();
  const [language, setLanguage] = useState("ES");

  const isActive = (path) => {
    return location.pathname === path;
  };

  const handleLanguageToggle = () => {
    setLanguage((prev) => (prev === "ES" ? "EN" : "ES"));
  };

  return (
    <div className="navigation-header">
      <Link to="/webelarroyo" className="logo-link">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/e9cac1e18ae64186984fb4d639c633bc/109542cbc3c83c77d44b9819ca7bdc9467883379?placeholderIfAbsent=true"
          className="logo"
          alt="Hotel Logo"
        />
      </Link>

      <div className="nav-container">
        <div className="nav-menu">
          <Link
            to="/webelarroyo"
            className={`nav-item ${isActive("/") ? "nav-item-active" : ""}`}
          >
            Inicio
          </Link>
          <Link
            to="/habitaciones"
            className={`nav-item ${isActive("/habitaciones") ? "nav-item-active" : ""}`}
          >
            Habitaciones
          </Link>
          <Link
            to="/servicios"
            className={`nav-item ${isActive("/servicios") ? "nav-item-active" : ""}`}
          >
            Servicios
          </Link>
          <Link
            to="/contacto"
            className={`nav-item ${isActive("/contacto") ? "nav-item-active" : ""}`}
          >
            Contacto
          </Link>
        </div>

        <div className="nav-actions">
          <Link to="/contacto" className="book-button">
            <div className="book-text">Reserva ya</div>
            <div className="arrow-icon">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/e9cac1e18ae64186984fb4d639c633bc/3551d6b81fe6cec95bd141041e8e8c8b4a87d0b2?placeholderIfAbsent=true"
                className="arrow-image"
                alt="Arrow"
              />
            </div>
          </Link>

          <div className="language-selector" onClick={handleLanguageToggle} style={{ cursor: "pointer" }}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/e9cac1e18ae64186984fb4d639c633bc/a5cbfbbff7bdc6c9c30569c0ce55c8cf41426b71?placeholderIfAbsent=true"
              className="language-flag"
              alt="Language Flag"
            />
            <div className="language-content">
              <div className="language-text">{language}</div>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/e9cac1e18ae64186984fb4d639c633bc/450b95e5260320f0966d3f916c63f386f1bc27a8?placeholderIfAbsent=true"
                className="dropdown-arrow"
                alt="Dropdown"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Burger Menu for Mobile */}
      <BurgerMenu />
    </div>
  );
};

export default NavigationHeader;
