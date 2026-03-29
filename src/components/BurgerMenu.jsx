import { useState, useEffect, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { BOOKING_URL } from "../data/config";
import { useLanguage } from "../context/LanguageContext";
import "./css/BurgerMenu.css";

const texts = {
  ES: {
    home: "Inicio",
    rooms: "Habitaciones",
    services: "Servicios",
    contact: "Contacto",
    book: "Reserva ya",
    question: "¿Tienes alguna pregunta?",
    whatsapp: "WhatsApp +58 414 150 1515",
    langSwitch: "EN",
  },
  EN: {
    home: "Home",
    rooms: "Rooms",
    services: "Services",
    contact: "Contact",
    book: "Book now",
    question: "Have a question?",
    whatsapp: "WhatsApp +58 414 150 1515",
    langSwitch: "ES",
  },
};

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const location = useLocation();
  const t = texts[language];

  const close = useCallback(() => setIsOpen(false), []);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  // Close on navigation
  useEffect(() => { close(); }, [location.pathname, close]);

  // Close on Escape key
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") close(); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [close]);

  const isActive = (path) => location.pathname === path;

  const navLinks = [
    { to: "/", label: t.home },
    { to: "/habitaciones", label: t.rooms },
    { to: "/servicios", label: t.services },
    { to: "/contacto", label: t.contact },
  ];

  return (
    <>
      {/* ── Hamburger button ── */}
      <button
        className="bm-trigger"
        onClick={() => setIsOpen((v) => !v)}
        aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={isOpen}
        aria-controls="bm-panel"
      >
        <span className={`bm-icon${isOpen ? " bm-icon--open" : ""}`}>
          <span />
          <span />
          <span />
        </span>
      </button>

      {/* ── Backdrop ── */}
      {isOpen && (
        <div
          className="bm-backdrop"
          onClick={close}
          aria-hidden="true"
        />
      )}

      {/* ── Slide panel ── */}
      <nav
        id="bm-panel"
        className={`bm-panel${isOpen ? " bm-panel--open" : ""}`}
        aria-label="Menú de navegación"
        aria-hidden={!isOpen}
      >
        {/* Header */}
        <div className="bm-head">
          <button className="bm-close" onClick={close} aria-label="Cerrar menú">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Nav links */}
        <ul className="bm-nav">
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <Link
                to={to}
                className={`bm-link${isActive(to) ? " bm-link--active" : ""}`}
                onClick={close}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Action buttons — right after nav */}
        <div className="bm-actions">
          <a href={BOOKING_URL} className="bm-book" onClick={close}>
            {t.book}
            <span className="bm-book-arrow">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/e9cac1e18ae64186984fb4d639c633bc/3551d6b81fe6cec95bd141041e8e8c8b4a87d0b2?placeholderIfAbsent=true"
                alt=""
              />
            </span>
          </a>

          <button className="bm-lang" onClick={toggleLanguage}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
            {t.langSwitch}
          </button>
        </div>

        {/* Footer — contact info */}
        <div className="bm-footer">
          <div className="bm-contact">
            <p>{t.question}</p>
            <a href="https://wa.me/584141501515" target="_blank" rel="noopener noreferrer">
              {t.whatsapp}
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default BurgerMenu;
