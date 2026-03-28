import { useLanguage } from "../context/LanguageContext";
import React from "react";
import { useScrollAnimation, useMouseParallax } from "../hooks/useParallax";
import "./css/LocationSection.css";

const texts = {
  ES: {
    title: "La mejor ubicación para hacer tus diligencias.",
    desc: "En el Hotel El Arroyo, situado estratégicamente en el centro de Caracas, ofrecemos una estadía ideal para quienes buscan resolver trámites en el SAIME o el TSJ, o asistir a conciertos y eventos deportivos.",
    address: "Av Lecuna, Frente al Metro Teatros, Centro de Caracas",
    highlights: [
      { title: "SAIME Central", time: "8 min caminando" },
      { title: "TSJ", time: "12 min en carro" },
      { title: "Eventos y conciertos", time: "10 min" }
    ],
    badge: "Corazón de Caracas"
  },
  EN: {
    title: "The best location for your business in Caracas.",
    desc: "At Hotel El Arroyo, strategically located in downtown Caracas, we offer the ideal stay for those who need to handle paperwork at SAIME or TSJ, or attend concerts and sporting events.",
    address: "Av Lecuna, In front of Metro Teatros, Downtown Caracas",
    highlights: [
      { title: "SAIME Central", time: "8 min walk" },
      { title: "Supreme Court", time: "12 min drive" },
      { title: "Shows & games", time: "10 min" }
    ],
    badge: "Downtown comfort"
  },
};

const LocationSection = () => {
  const { language } = useLanguage();
  const t = texts[language];

  const { isVisible: titleVisible, elementRef: titleRef } =
    useScrollAnimation(0.2);
  const { isVisible: descVisible, elementRef: descRef } =
    useScrollAnimation(0.3);
  const { isVisible: cardVisible, elementRef: cardRef } =
    useScrollAnimation(0.4);
  const { isVisible: imageVisible, elementRef: imageRef } =
    useScrollAnimation(0.2);

  const { transform: mouseTransform, elementRef: mouseRef } =
    useMouseParallax(15);

  return (
    <div className="location-section">
      <div className="location-container">
        <div className="location-content-wrapper">
          <div className="location-text-content">
            <div
              ref={titleRef}
              className={`location-title scroll-animate-left ${
                titleVisible ? "animate-in" : ""
              }`}
            >
              {t.title}
            </div>

            <div
              ref={descRef}
              className={`location-description scroll-animate-left ${
                descVisible ? "animate-in" : ""
              }`}
            >
              {t.desc}
            </div>

            <div className="location-highlights">
              {t.highlights.map((highlight, index) => (
                <div key={highlight.title} className="location-highlight-card">
                  <div className="highlight-number">0{index + 1}</div>
                  <div>
                    <p className="highlight-title">{highlight.title}</p>
                    <p className="highlight-time">{highlight.time}</p>
                  </div>
                </div>
              ))}
            </div>

            <div
              ref={cardRef}
              className={`location-address-card scroll-animate-scale ${
                cardVisible ? "animate-in" : ""
              }`}
            >
              <div className="location-badge">{t.badge}</div>
              <div className="location-address">{t.address}</div>
            </div>
          </div>

          <div
            ref={mouseRef}
            className="location-image-container mouse-parallax"
            style={{ transform: mouseTransform }}
          >
            <div>
              <img
                ref={imageRef}
                src="https://cdn.builder.io/api/v1/image/assets/e9cac1e18ae64186984fb4d639c633bc/154af17daa1bd51e24e0cff4fd94e3d5c2b9a97b?placeholderIfAbsent=true"
                className={`location-image scroll-animate-right ${
                  imageVisible ? "animate-in" : ""
                }`}
                alt="Hotel Location"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationSection;
