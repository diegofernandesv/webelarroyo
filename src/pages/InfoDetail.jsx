import { useRef, useEffect } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { gsap } from "gsap";
import { useLanguage } from "../context/LanguageContext";
import { getInfoBySlug, infoCategories } from "../data/info";
import "./css/InfoDetail.css";

const texts = {
  ES: { back: "← Volver a la guía", factsTitle: "Datos rápidos" },
  EN: { back: "← Back to the guide", factsTitle: "Quick facts" },
};

const InfoDetail = () => {
  const { slug } = useParams();
  const { language } = useLanguage();
  const t = texts[language];
  const category = getInfoBySlug(slug);
  const heroRef = useRef(null);
  const bodyRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.from(heroRef.current?.querySelectorAll(".id-anim") ?? [], {
        opacity: 0, y: 24, duration: 0.8,
        ease: "power3.out", stagger: 0.1, delay: 0.05,
      });

      const sections = bodyRef.current?.querySelectorAll(".id-section, .id-facts");
      if (sections?.length) {
        gsap.from(sections, {
          opacity: 0, y: 20, duration: 0.6,
          ease: "power3.out", stagger: 0.07, delay: 0.3,
        });
      }
    });

    return () => ctx.revert();
  }, [slug, language]);

  if (!category) return <Navigate to="/info" replace />;

  const c = category.t[language];

  return (
    <main className="id-page">

      {/* ── Hero ──────────────────────────── */}
      <section ref={heroRef} className="id-hero">
        <Link to="/info" className="id-hero-back id-anim">{t.back}</Link>
        <div className="id-hero-inner">
          <span className="id-hero-num" aria-hidden="true">{category.num}</span>
          <h1 className="id-hero-title id-anim">{c.title}</h1>
          <p className="id-hero-intro id-anim">{c.intro}</p>
        </div>
      </section>

      {/* ── Body ──────────────────────────── */}
      <div ref={bodyRef} className="id-body">

        {/* Sections */}
        <div className="id-sections">
          {c.sections.map((sec, i) => (
            <div key={i} className="id-section">
              <h2 className="id-section-heading">{sec.heading}</h2>
              <p className="id-section-body">{sec.body}</p>
            </div>
          ))}
        </div>

        {/* Facts sidebar */}
        <aside className="id-facts">
          <p className="id-facts-title">{t.factsTitle}</p>
          <dl className="id-facts-list">
            {c.facts.map((f, i) => (
              <div key={i} className="id-fact">
                <dt className="id-fact-label">{f.label}</dt>
                <dd className="id-fact-value">{f.value}</dd>
              </div>
            ))}
          </dl>
        </aside>

      </div>

    </main>
  );
};

export default InfoDetail;
