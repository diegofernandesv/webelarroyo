import { useLanguage } from "../context/LanguageContext";
import React from "react";
import "./css/CTASection.css";

const texts = {
  ES: {
    title: "¿Listo para tu estadía perfecta en Caracas?",
    button: "Reserva Ya",
  },
  EN: {
    title: "Ready for your perfect stay in Caracas?",
    button: "Book Now",
  },
};

const CTASection = () => {
  const { language } = useLanguage();
  const t = texts[language];
  return (
    <div className="cta-section">
      <div className="cta-tag">
        <span className="cta-tag-pill">Escápate</span>
        <p>{language === "ES" ? "Agenda flexible y atención humana" : "Flexible plans and caring staff"}</p>
      </div>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/e9cac1e18ae64186984fb4d639c633bc/f452337233853d5a5e8dee6e6dee9e9169b96535?placeholderIfAbsent=true"
        className="cta-image"
        alt="Hotel"
      />
      <div className="cta-content">
        <div className="cta-title">{t.title}</div>
        <p className="cta-description">
          {language === "ES"
            ? "Coordinamos traslados, late check-outs y lo que necesites para disfrutar Caracas sin estrés."
            : "We coordinate transfers, late check-outs and every detail so you can enjoy Caracas, stress free."}
        </p>
        <div className="cta-buttons">
          <div className="cta-button">
            <div className="cta-button-text">{t.button}</div>
            <div className="cta-arrow-icon">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/e9cac1e18ae64186984fb4d639c633bc/6dbd8209367e18349627fadd44d8ee82df71fd66?placeholderIfAbsent=true"
                className="cta-arrow-image"
                alt="Arrow"
              />
            </div>
          </div>
          <button className="cta-outline">
            {language === "ES" ? "Habla con concierge" : "Chat with concierge"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
