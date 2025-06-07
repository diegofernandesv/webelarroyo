import React from "react";
import ParallaxContainer from "./ParallaxContainer";
import { useScrollAnimation, useMouseParallax } from "../hooks/useParallax";
import "./css/LocationSection.css";

const LocationSection = () => {
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
              className={`location-title scroll-animate-left ${titleVisible ? "animate-in" : ""}`}
            >
              La mejor ubicación para hacer tus diligencias.
            </div>

            <div
              ref={descRef}
              className={`location-description scroll-animate-left ${descVisible ? "animate-in" : ""}`}
            >
              En el Hotel El Arroyo, situado estratégicamente en el centro de
              Caracas, ofrecemos una estadía ideal para quienes buscan resolver
              trámites en el SAIME o el TSJ, o asistir a conciertos y eventos
              deportivos.
            </div>

            <div
              ref={cardRef}
              className={`location-address-card scroll-animate-scale ${cardVisible ? "animate-in" : ""}`}
            >
              <ParallaxContainer speed={0.2}>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/e9cac1e18ae64186984fb4d639c633bc/a8e4955cc127c5f9a33f375feecf99c13f2221af?placeholderIfAbsent=true"
                  className="location-icon floating"
                  alt="Location Icon"
                />
              </ParallaxContainer>
              <div className="location-address">
                Av Lecuna, Frente al Metro Teatros, Centro de Caracas
              </div>
            </div>
          </div>

          <div
            ref={mouseRef}
            className="location-image-container mouse-parallax"
            style={{ transform: mouseTransform }}
          >
            <ParallaxContainer speed={0.3}>
              <img
                ref={imageRef}
                src="https://cdn.builder.io/api/v1/image/assets/e9cac1e18ae64186984fb4d639c633bc/154af17daa1bd51e24e0cff4fd94e3d5c2b9a97b?placeholderIfAbsent=true"
                className={`location-image scroll-animate-right ${imageVisible ? "animate-in" : ""}`}
                alt="Hotel Location"
              />
            </ParallaxContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationSection;
