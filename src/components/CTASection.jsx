import { useLanguage } from "../context/LanguageContext";
import { Link } from "react-router-dom";
import { useRef, useEffect } from "react";
import "./css/CTASection.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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

  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const titleRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      tl.from(imageRef.current, { opacity: 0, scale: 0.92, duration: 1, ease: "power3.out" })
        .from(titleRef.current, { opacity: 0, x: -36, duration: 0.8, ease: "power3.out" }, "-=0.55")
        .from(buttonRef.current, { opacity: 0, y: 20, duration: 0.6, ease: "power3.out" }, "-=0.45");
    });

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="cta-section">
      <img
        ref={imageRef}
        src="https://cdn.builder.io/api/v1/image/assets/e9cac1e18ae64186984fb4d639c633bc/f452337233853d5a5e8dee6e6dee9e9169b96535?placeholderIfAbsent=true"
        className="cta-image"
        alt="Hotel"
      />
      <div className="cta-content">
        <h2 ref={titleRef} className="cta-title">
          {t.title}
        </h2>
        <Link ref={buttonRef} to="/contacto" className="cta-button">
          <span className="cta-button-text">{t.button}</span>
          <div className="cta-arrow-icon">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/e9cac1e18ae64186984fb4d639c633bc/6dbd8209367e18349627fadd44d8ee82df71fd66?placeholderIfAbsent=true"
              className="cta-arrow-image"
              alt=""
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CTASection;
