import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./css/BurgerMenu.css";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button
        className={`burger-button ${isOpen ? "burger-open" : ""}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span className="burger-line"></span>
        <span className="burger-line"></span>
        <span className="burger-line"></span>
      </button>

      <div
        className={`burger-overlay ${isOpen ? "burger-overlay-open" : ""}`}
        onClick={closeMenu}
      ></div>

      <nav className={`burger-menu ${isOpen ? "burger-menu-open" : ""}`}>
        <div className="burger-menu-header">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/e9cac1e18ae64186984fb4d639c633bc/109542cbc3c83c77d44b9819ca7bdc9467883379?placeholderIfAbsent=true"
            className="burger-logo"
            alt="Hotel Logo"
          />
          <button
            className="burger-close"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            ×
          </button>
        </div>

        <ul className="burger-nav-list">
          <li className="burger-nav-item">
            <Link to="/" className="burger-nav-link" onClick={closeMenu}>
              Inicio
            </Link>
          </li>
          <li className="burger-nav-item">
            <Link
              to="/habitaciones"
              className="burger-nav-link"
              onClick={closeMenu}
            >
              Habitaciones
            </Link>
          </li>
          <li className="burger-nav-item">
            <Link
              to="/servicios"
              className="burger-nav-link"
              onClick={closeMenu}
            >
              Servicios
            </Link>
          </li>
          <li className="burger-nav-item">
            <Link
              to="/contacto"
              className="burger-nav-link"
              onClick={closeMenu}
            >
              Contacto
            </Link>
          </li>
        </ul>

        <div className="burger-actions">
          <Link
            to="/contacto"
            className="burger-book-button"
            onClick={closeMenu}
          >
            <span className="burger-book-text">Reserva ya</span>
            <div className="burger-arrow-icon">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/e9cac1e18ae64186984fb4d639c633bc/3551d6b81fe6cec95bd141041e8e8c8b4a87d0b2?placeholderIfAbsent=true"
                className="burger-arrow-image"
                alt="Arrow"
              />
            </div>
          </Link>

          <div className="burger-contact-info">
            <p className="burger-contact-text">¿Tienes alguna pregunta?</p>
            <a
              href="https://wa.me/584141501515"
              className="burger-whatsapp-link"
            >
              WhatsApp +58 4141501515
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default BurgerMenu;
