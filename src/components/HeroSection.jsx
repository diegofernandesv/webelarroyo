import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import image1 from "../assets/image1.png";
import "./css/HeroSection.css";
import { useLanguage } from "../context/LanguageContext";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      gsap.set([titleRef.current, buttonRef.current], { opacity: 1, y: 0 });
      return;
    }

    // Entrance timeline for above-the-fold content
    const ctx = gsap.context(() => {
      gsap.timeline({ delay: 0.15 })
        .fromTo(titleRef.current,
          { opacity: 0, y: 36 },
          { opacity: 1, y: 0, duration: 1.1, ease: "power3.out" }
        )
        .fromTo(buttonRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
          "-=0.65"
        );
    });

    // Parallax scroll effect
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (bgRef.current) {
            bgRef.current.style.transform = `translateY(${window.scrollY * 0.4}px)`;
          }
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      ctx.revert();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="hero-section">
      <div className="hero-bg-wrapper">
        <img
          ref={bgRef}
          src={image1}
          className="hero-background"
          alt="Hotel Background"
          style={{ willChange: "transform" }}
        />
      </div>

      <div className="hero-content">
        <h1 ref={titleRef} className="hero-title">
          {t.title1}
          <br />
          {t.title2}
        </h1>

        <Link
          to="/habitaciones"
          ref={buttonRef}
          className="hero-button"
        >
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
