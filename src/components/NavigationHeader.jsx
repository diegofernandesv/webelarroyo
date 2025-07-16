import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import BurgerMenu from "./BurgerMenu";
import "./css/NavigationHeader.css";

const navTexts = {
  ES: {
    home: "Inicio",
    rooms: "Habitaciones",
    services: "Servicios",
    contact: "Contacto",
    book: "Reserva ya",
    langLabel: "ES"
  },
  EN: {
    home: "Home",
    rooms: "Rooms",
    services: "Services",
    contact: "Contact",
    book: "Book now",
    langLabel: "EN"
  }
};

const NavigationHeader = () => {
  const location = useLocation();
  const { language, toggleLanguage } = useLanguage();
  const t = navTexts[language];

  const isActive = (path) => {
    return location.pathname === path;
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
            {t.home}
          </Link>
          <Link
            to="/habitaciones"
            className={`nav-item ${isActive("/habitaciones") ? "nav-item-active" : ""}`}
          >
            {t.rooms}
          </Link>
          <Link
            to="/servicios"
            className={`nav-item ${isActive("/servicios") ? "nav-item-active" : ""}`}
          >
            {t.services}
          </Link>
          <Link
            to="/contacto"
            className={`nav-item ${isActive("/contacto") ? "nav-item-active" : ""}`}
          >
            {t.contact}
          </Link>
        </div>

        <div className="nav-actions">
          <Link to="/contacto" className="book-button">
            <div className="book-text">{t.book}</div>
            <div className="arrow-icon">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/e9cac1e18ae64186984fb4d639c633bc/3551d6b81fe6cec95bd141041e8e8c8b4a87d0b2?placeholderIfAbsent=true"
                className="arrow-image"
                alt="Arrow"
              />
            </div>
          </Link>

          <div className="language-selector" onClick={toggleLanguage}>
            <div className="language-content">
              <div className="language-text">{t.langLabel}</div>
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
