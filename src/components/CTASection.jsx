import React from "react";
import "./css/CTASection.css";

const CTASection = () => {
  return (
    <div className="cta-section">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/e9cac1e18ae64186984fb4d639c633bc/f452337233853d5a5e8dee6e6dee9e9169b96535?placeholderIfAbsent=true"
        className="cta-image"
        alt="Hotel"
      />
      <div className="cta-content">
        <div className="cta-title">
          ¿Listo para tu estadía perfecta en Caracas?
        </div>
        <div className="cta-button">
          <div className="cta-button-text">Reserva Ya</div>
          <div className="cta-arrow-icon">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/e9cac1e18ae64186984fb4d639c633bc/6dbd8209367e18349627fadd44d8ee82df71fd66?placeholderIfAbsent=true"
              className="cta-arrow-image"
              alt="Arrow"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
