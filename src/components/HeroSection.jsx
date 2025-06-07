import React, { useRef, useEffect, useState } from "react";
import image1 from "../assets/image1.png";
import "./css/HeroSection.css";

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

const HeroSection = () => {
  const { isVisible: titleVisible, elementRef: titleRef } = useScrollAnimation(0.3);
  const { isVisible: buttonVisible, elementRef: buttonRef } = useScrollAnimation(0.5);

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
    <div className="hero-section">
      <div className="hero-bg-wrapper">
        <img
          ref={bgRef}
          src={image1}
          className="hero-background"
          alt="Hotel Background"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://via.placeholder.com/1920x1080";
          }}
          style={{ willChange: "transform", transition: "transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)" }}
        />
      </div>

      <div className="hero-content">
        <h1
          ref={titleRef}
          className={`hero-title${titleVisible ? " animate-in" : ""}${titleVisible === undefined ? " not-animated" : ""}`}
        >
          Tranquilidad y Confort
          <br />
          en el Centro de Caracas
        </h1>

        <div
          ref={buttonRef}
          className={`hero-button ${buttonVisible ? "animate-in" : ""}`}
        >
          <span className="hero-button-text">Nuestras Habitaciones</span>
          <div className="hero-arrow-icon">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/e9cac1e18ae64186984fb4d639c633bc/6cae9776603b35b835ae5d71b997bb889b43013f?placeholderIfAbsent=true"
              alt="Arrow"
              className="hero-arrow-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

