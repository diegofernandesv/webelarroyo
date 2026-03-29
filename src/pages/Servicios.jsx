import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "../context/LanguageContext";
import { services } from "../data/services";
import CTASection from "../components/CTASection";
import "./css/Servicios.css";

gsap.registerPlugin(ScrollTrigger);

const texts = {
  ES: {
    label: "Servicios",
    title: "Más que\nun hotel",
    sub: "En El Arroyo encontrarás todo lo que necesitas sin salir del edificio — y cuando salgas, estarás en el centro de todo.",
    caracasLabel: "Estás a pasos de",
    locations: [
      { dist: "Frente al hotel", name: "Metro Teatros",         note: "Toda la red del metro" },
      { dist: "2 min",           name: "TSJ",                   note: "Tribunal Supremo de Justicia" },
      { dist: "3 min",           name: "SAIME",                 note: "Pasaporte y cédula" },
      { dist: "5 min",           name: "Palacio de Miraflores", note: "Sede del Gobierno Nacional" },
      { dist: "10 min",          name: "Teatro Teresa Carreño", note: "Ópera, conciertos y cultura" },
      { dist: "12 min",          name: "Parque Los Caobos",     note: "Parque histórico de Caracas" },
    ],
  },
  EN: {
    label: "Services",
    title: "More than\na hotel",
    sub: "At El Arroyo you'll find everything you need without leaving the building — and when you do, you'll be at the center of it all.",
    caracasLabel: "You're steps away from",
    locations: [
      { dist: "At the hotel", name: "Metro Teatros",         note: "Full metro network" },
      { dist: "2 min",        name: "TSJ",                   note: "Supreme Court of Justice" },
      { dist: "3 min",        name: "SAIME",                 note: "Passport and ID services" },
      { dist: "5 min",        name: "Miraflores Palace",     note: "National Government HQ" },
      { dist: "10 min",       name: "Teatro Teresa Carreño", note: "Opera, concerts and culture" },
      { dist: "12 min",       name: "Parque Los Caobos",     note: "Historic park of Caracas" },
    ],
  },
};

const ArrowIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
    <path d="M4 9h10M9 4l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const Servicios = () => {
  const { language } = useLanguage();
  const t = texts[language];

  const heroRef    = useRef(null);
  const rowsRef    = useRef([]);
  const caracasRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Hero
      const heroEls = heroRef.current?.querySelectorAll(".srv2-hero-eyebrow, .srv2-hero-title, .srv2-hero-sub");
      if (heroEls?.length) {
        gsap.from(heroEls, {
          opacity: 0, y: 28, duration: 0.85,
          ease: "power3.out", stagger: 0.1, delay: 0.05,
        });
      }

      // Service rows
      rowsRef.current.filter(Boolean).forEach((row) => {
        gsap.from(row, {
          scrollTrigger: { trigger: row, start: "top 86%", toggleActions: "play none none none" },
          opacity: 0, y: 36, duration: 0.75, ease: "power3.out",
        });
      });

      // Caracas list items
      const locItems = caracasRef.current?.querySelectorAll(".srv2-loc-item");
      if (locItems?.length) {
        gsap.from(locItems, {
          scrollTrigger: { trigger: caracasRef.current, start: "top 84%", toggleActions: "play none none none" },
          opacity: 0, y: 16, duration: 0.5, ease: "power3.out", stagger: 0.055,
        });
      }
    });

    return () => ctx.revert();
  }, [language]);

  return (
    <main className="srv2-page">

      {/* ── Hero ─────────────────────────────────────── */}
      <section ref={heroRef} className="srv2-hero">
        <div className="srv2-hero-left">
          <div className="srv2-hero-accent" aria-hidden="true" />
          <p className="srv2-hero-label srv2-hero-eyebrow">{t.label}</p>
          <h1 className="srv2-hero-title">
            {t.title.split("\n").map((l, i) => <span key={i}>{l}{i === 0 && <br />}</span>)}
          </h1>
        </div>
        <div className="srv2-hero-right">
          <p className="srv2-hero-sub">{t.sub}</p>
        </div>
      </section>

      {/* ── Service rows ──────────────────────────────── */}
      <section className="srv2-rows">
        {services.map((svc, i) => {
          const s = svc.t[language];
          const flip = i % 2 !== 0;
          return (
            <Link
              key={svc.slug}
              to={`/servicios/${svc.slug}`}
              className={`srv2-row${flip ? " srv2-row--flip" : ""}`}
              ref={el => { rowsRef.current[i] = el; }}
            >
              <div className="srv2-row-img-wrap">
                <img src={svc.image} alt={s.title} className="srv2-row-img" loading="lazy" />
                <span className="srv2-row-num">{svc.num}</span>
              </div>
              <div className="srv2-row-content">
                <h2 className="srv2-row-title">{s.title}</h2>
                <p className="srv2-row-short">{s.short}</p>
                <span className="srv2-row-link">
                  Ver más <ArrowIcon />
                </span>
              </div>
            </Link>
          );
        })}
      </section>

      {/* ── Caracas ───────────────────────────────────── */}
      <section ref={caracasRef} className="srv2-caracas">
        <p className="srv2-caracas-label">{t.caracasLabel}</p>
        <ul className="srv2-loc-list">
          {t.locations.map((loc, i) => (
            <li key={i} className="srv2-loc-item">
              <span className="srv2-loc-dist">{loc.dist}</span>
              <span className="srv2-loc-name">{loc.name}</span>
              <span className="srv2-loc-note">{loc.note}</span>
            </li>
          ))}
        </ul>
      </section>

      <CTASection />
    </main>
  );
};

export default Servicios;
