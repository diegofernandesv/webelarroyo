import React, { useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { BOOKING_URL } from "../data/config";
import { useLanguage } from "../context/LanguageContext";
import BurgerMenu from "./BurgerMenu";
import "./css/NavigationHeader.css";
import { gsap } from "gsap";

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
  const navRef = useRef(null);

  const isActive = (path) => {
    return location.pathname === path;
  };

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        navRef.current,
        { y: -80, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: "power3.out", delay: 0.05 }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div ref={navRef} className="navigation-header">
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
          <a href={BOOKING_URL} className="book-button">
            <div className="book-text">{t.book}</div>
            <div className="arrow-icon">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/e9cac1e18ae64186984fb4d639c633bc/3551d6b81fe6cec95bd141041e8e8c8b4a87d0b2?placeholderIfAbsent=true"
                className="arrow-image"
                alt="Arrow"
              />
            </div>
          </a>

          <div className="language-selector" onClick={toggleLanguage}>
            <svg className="globe-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/>
              <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
            </svg>
            <div className="language-content">
              <div className="language-text">{t.langLabel}</div>
              <svg className="dropdown-arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9"/>
              </svg>
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
