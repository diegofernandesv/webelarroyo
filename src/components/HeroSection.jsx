import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import image1 from "../assets/image1.png";
import "./css/HeroSection.css";
import { useLanguage } from "../context/LanguageContext";
import { gsap } from "gsap";

const heroTexts = {
  ES: {
    title1: "Tranquilidad y Confort",
    title2: "en el Centro de Caracas",
    button: "Nuestras Habitaciones"
  },
  EN: {
    title1: "Tranquility and Comfort",
    title2: "in the Center of Caracas",
    button: "Our Rooms"
  }
};

const HeroSection = () => {
  const { language } = useLanguage();
  const t = heroTexts[language];
  const titleRef = useRef(null);
  const buttonRef = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    const title = titleRef.current;
    const button = buttonRef.current;
    if (!title || !button) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      gsap.set([title, button], { opacity: 1, y: 0, clearProps: "all" });
      return;
    }

    // Set initial state via GSAP (not CSS) so revert always restores correctly
    gsap.set(title, { opacity: 0, y: 36 });
    gsap.set(button, { opacity: 0, y: 20 });

    const ctx = gsap.context(() => {
      gsap.timeline({ delay: 0.1 })
        .to(title,  { opacity: 1, y: 0, duration: 1.0, ease: "power3.out" })
        .to(button, { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" }, "-=0.6");
    });

    // Parallax only on desktop (skip on mobile for performance)
    let scrollHandler = null;
    if (window.innerWidth >= 768) {
      let ticking = false;
      scrollHandler = () => {
        if (!ticking) {
          requestAnimationFrame(() => {
            if (bgRef.current) {
              bgRef.current.style.transform = `translateY(${window.scrollY * 0.35}px)`;
            }
            ticking = false;
          });
          ticking = true;
        }
      };
      window.addEventListener("scroll", scrollHandler, { passive: true });
    }

    return () => {
      ctx.revert();
      if (scrollHandler) window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <div className="hero-section">
      <img
        ref={bgRef}
        src={image1}
        className="hero-background"
        alt="Hotel Background"
        style={{ willChange: "transform" }}
      />

      <div className="hero-content">
        <h1 ref={titleRef} className="hero-title">
          {t.title1}
          <br />
          {t.title2}
        </h1>

        <Link to="/habitaciones" ref={buttonRef} className="hero-button">
          <span className="hero-button-text">{t.button}</span>
          <div className="hero-arrow-icon">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/e9cac1e18ae64186984fb4d639c633bc/6cae9776603b35b835ae5d71b997bb889b43013f?placeholderIfAbsent=true"
              alt=""
              className="hero-arrow-image"
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
