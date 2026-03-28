import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./css/RoomCard.css";
import { useLanguage } from "../context/LanguageContext";
import { gsap } from "gsap";

const RoomCard = ({ roomImage, title, description, price, capacity }) => {
  const { language } = useLanguage();
  const cardRef = useRef(null);

  const label = language === "ES" ? "Reserva Ya" : "Book Now";
  const capacityLabel = language === "ES"
    ? `${capacity} ${capacity === 1 ? "persona" : "personas"}`
    : `${capacity} ${capacity === 1 ? "person" : "people"}`;
  const nightLabel = language === "ES" ? "/noche" : "/night";

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const onEnter = () => {
      gsap.to(card, { y: -8, scale: 1.015, duration: 0.3, ease: "power2.out", overwrite: "auto" });
    };

    const onLeave = () => {
      gsap.to(card, { y: 0, scale: 1, duration: 0.35, ease: "power2.out", overwrite: "auto" });
    };

    card.addEventListener("mouseenter", onEnter);
    card.addEventListener("mouseleave", onLeave);

    return () => {
      card.removeEventListener("mouseenter", onEnter);
      card.removeEventListener("mouseleave", onLeave);
      gsap.killTweensOf(card);
    };
  }, []);

  return (
    <article ref={cardRef} className="room-card">
      <div className="room-media">
        <img src={roomImage} className="room-image" alt={title} />
        <span className="room-capacity-badge">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="12" cy="8" r="4" />
            <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
          </svg>
          {capacityLabel}
        </span>
      </div>

      <div className="room-body">
        <div className="room-info-row">
          <div className="room-info-left">
            <h3 className="room-title">{title}</h3>
            <p className="room-description">{description}</p>
          </div>
          <div className="room-price">
            <span className="room-price-value">{price}</span>
            <span className="room-price-suffix">{nightLabel}</span>
          </div>
        </div>

        <Link to="/contacto" className="room-book-button">
          <span className="room-book-text">{label}</span>
          <div className="room-book-arrow">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </div>
        </Link>
      </div>
    </article>
  );
};

export default RoomCard;
