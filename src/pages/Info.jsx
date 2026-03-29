import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "../context/LanguageContext";
import { infoCategories } from "../data/info";
import "./css/Info.css";

gsap.registerPlugin(ScrollTrigger);

const texts = {
  ES: {
    eyebrow: "Guía del huésped",
    title: "Todo lo que necesitas saber",
    sub: "Información práctica sobre el hotel, los alrededores y la ciudad.",
    readMore: "Leer más",
  },
  EN: {
    eyebrow: "Guest guide",
    title: "Everything you need to know",
    sub: "Practical information about the hotel, surroundings and the city.",
    readMore: "Read more",
  },
};

const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const Info = () => {
  const { language } = useLanguage();
  const t = texts[language];
  const heroRef  = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.from(heroRef.current?.querySelectorAll(".info-anim") ?? [], {
        opacity: 0, y: 24, duration: 0.8,
        ease: "power3.out", stagger: 0.1, delay: 0.05,
      });

      const cards = cardsRef.current?.querySelectorAll(".info-card");
      if (cards?.length) {
        gsap.from(cards, {
          scrollTrigger: { trigger: cardsRef.current, start: "top 85%", toggleActions: "play none none none" },
          opacity: 0, y: 32, duration: 0.65,
          ease: "power3.out", stagger: 0.09,
        });
      }
    });

    return () => ctx.revert();
  }, [language]);

  return (
    <main className="info-page">

      {/* ── Hero — typography only, no image ─────────── */}
      <section ref={heroRef} className="info-hero">
        <div className="info-hero-inner">
          <p className="info-hero-eyebrow info-anim">{t.eyebrow}</p>
          <h1 className="info-hero-title info-anim">{t.title}</h1>
          <p className="info-hero-sub info-anim">{t.sub}</p>
        </div>
        <div className="info-hero-nums" aria-hidden="true">
          {infoCategories.map(c => (
            <span key={c.slug} className="info-hero-bg-num">{c.num}</span>
          ))}
        </div>
      </section>

      {/* ── Cards grid ────────────────────────────────── */}
      <section ref={cardsRef} className="info-cards">
        {infoCategories.map((cat) => {
          const c = cat.t[language];
          return (
            <Link key={cat.slug} to={`/info/${cat.slug}`} className="info-card">
              <span className="info-card-num">{cat.num}</span>
              <div className="info-card-body">
                <h2 className="info-card-title">{c.title}</h2>
                <p className="info-card-summary">{c.summary}</p>
              </div>
              <span className="info-card-arrow">
                <ArrowIcon />
              </span>
            </Link>
          );
        })}
      </section>

    </main>
  );
};

export default Info;
