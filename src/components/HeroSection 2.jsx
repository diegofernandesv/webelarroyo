import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import image1 from "../assets/image1.png";
import "./css/HeroSection.css";
import { useLanguage } from "../context/LanguageContext";

const useScrollAnimation = (threshold = 0.5) => {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(undefined); // undefined initially

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
        else setIsVisible(false);
      },
      { threshold }
    );

    if (elementRef.current) observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, [threshold]);

  return { isVisible, elementRef };
};

const heroTexts = {
  ES: {
    pill: "Hotel boutique en Caracas",
    title1: "Maletas listas,",
    title2: "Caracas te espera",
    subtitle:
      "Disfruta de habitaciones cómodas, atención cercana y la mejor ubicación para tus trámites o escapadas urbanas.",
    primaryCta: "Reserva tu estadía",
    secondaryCta: "Ver habitaciones",
    infoCards: [
      { label: "Check-in", value: "Desde las 2:00 p. m." },
      { label: "Check-out", value: "Hasta las 12:00 m." },
      { label: "Traslados", value: "Apoyo con Uber seguro" }
    ],
    stats: [
      { value: "+1.200", label: "Huéspedes felices" },
      { value: "24/7", label: "Atención y seguridad" },
      { value: "5 min", label: "Metro Teatros" }
    ],
    spotlightTitle: "Escápate con estilo",
    spotlightDesc: "Habitaciones remodeladas, Wi-Fi de alta velocidad y desayunos recién preparados."
  },
  EN: {
    pill: "Boutique hotel in Caracas",
    title1: "Pack your bags,",
    title2: "Caracas is calling",
    subtitle:
      "Stay steps away from SAIME, TSJ and the best venues while enjoying warm service and purposeful design.",
    primaryCta: "Book your stay",
    secondaryCta: "View rooms",
    infoCards: [
      { label: "Check-in", value: "From 2:00 p.m." },
      { label: "Check-out", value: "Until 12:00 p.m." },
      { label: "Transfers", value: "Verified Uber support" }
    ],
    stats: [
      { value: "+1,200", label: "Happy guests" },
      { value: "24/7", label: "Attentive security" },
      { value: "5 min", label: "Metro Teatros" }
    ],
    spotlightTitle: "Arrive inspired",
    spotlightDesc: "Renovated suites, fast Wi-Fi and freshly baked breakfasts every morning."
  }
};

const HeroSection = () => {
  const { language } = useLanguage();
  const t = heroTexts[language];
  const { isVisible: titleVisible, elementRef: titleRef } = useScrollAnimation(0.2);
  const { isVisible: buttonVisible, elementRef: buttonRef } = useScrollAnimation(0.25);
  const { isVisible: statsVisible, elementRef: statsRef } = useScrollAnimation(0.3);
  const { isVisible: cardVisible, elementRef: cardRef } = useScrollAnimation(0.3);

  // Parallax state and ref
  const bgRef = useRef(null);
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (bgRef.current) {
            const scrolled = window.scrollY;
            bgRef.current.style.transform = `translateY(${scrolled * 0.4}px)`;
          }
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="hero-section">
      <div className="hero-bg-wrapper">
        <img
          ref={bgRef}
          src={image1}
          className="hero-background"
          alt="Hotel El Arroyo"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://via.placeholder.com/1920x1080";
          }}
          style={{ willChange: "transform", transition: "transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)" }}
        />
        <div className="hero-overlay" />
      </div>

      <div className="hero-inner">
        <div className="hero-copy">
          <span className="hero-pill">{t.pill}</span>
          <h1
            ref={titleRef}
            className={`hero-title${titleVisible ? " animate-in" : ""}`}
          >
            {t.title1}
            <span className="hero-title-accent"> {t.title2}</span>
          </h1>
          <p className="hero-subtitle">{t.subtitle}</p>

          <div
            ref={buttonRef}
            className={`hero-actions ${buttonVisible ? "animate-in" : ""}`}
          >
            <Link to="/contacto" className="hero-cta hero-cta-primary">
              {t.primaryCta}
            </Link>
            <Link to="/habitaciones" className="hero-cta hero-cta-secondary">
              {t.secondaryCta}
            </Link>
          </div>

          <div
            ref={statsRef}
            className={`hero-stats ${statsVisible ? "animate-in" : ""}`}
          >
            {t.stats.map((stat, index) => (
              <div key={stat.label} className={`hero-stat ${index === 1 ? "hero-stat-divider" : ""}`}>
                <span className="hero-stat-value">{stat.value}</span>
                <span className="hero-stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div
          ref={cardRef}
          className={`hero-showcase ${cardVisible ? "animate-in" : ""}`}
        >
          <div className="hero-showcase-card">
            <div className="hero-showcase-header">
              <span className="hero-showcase-title">{t.spotlightTitle}</span>
              <p className="hero-showcase-desc">{t.spotlightDesc}</p>
            </div>
            <div className="hero-info-grid">
              {t.infoCards.map((card) => (
                <div key={card.label} className="hero-info-card">
                  <span className="hero-info-label">{card.label}</span>
                  <span className="hero-info-value">{card.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-floating-gallery">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/e9cac1e18ae64186984fb4d639c633bc/27ed5d5f5c184350a998540474fd1713d48e6502?placeholderIfAbsent=true"
              alt="Lobby detail"
              className="hero-gallery-image"
            />
            <div className="hero-gallery-card">
              <span className="hero-gallery-pill">Metro Teatros</span>
              <p className="hero-gallery-text">
                {language === "ES"
                  ? "A cinco minutos caminando. Perfecto para diligencias y conciertos."
                  : "Five-minute walk for paperwork days and concert nights."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
