import { useEffect, useRef } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { gsap } from "gsap";
import { useLanguage } from "../context/LanguageContext";
import { getServiceBySlug, services } from "../data/services";
import "./css/ServiceDetail.css";

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <circle cx="8" cy="8" r="7.25" stroke="#97bbe0" strokeWidth="1.5"/>
    <path d="M5 8l2 2 4-4" stroke="#97bbe0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ArrowLeft = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M12 8H4M7 4l-4 4 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const PhoneIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M14 10.67v2a1.33 1.33 0 01-1.45 1.33 13.2 13.2 0 01-5.75-2.05 13 13 0 01-4-4 13.2 13.2 0 01-2.05-5.78A1.33 1.33 0 012.07 1h2a1.33 1.33 0 011.33 1.15c.085.64.24 1.27.467 1.87a1.33 1.33 0 01-.3 1.4l-.847.85a10.67 10.67 0 004 4l.847-.847a1.33 1.33 0 011.4-.3c.6.228 1.23.382 1.873.467A1.33 1.33 0 0114 10.67z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ExternalIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path d="M5.5 2.5H2a1 1 0 00-1 1V12a1 1 0 001 1h8.5a1 1 0 001-1V8.5M8.5 1H13m0 0v4.5M13 1L6 8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ServiceDetail = () => {
  const { slug } = useParams();
  const { language } = useLanguage();
  const svc = getServiceBySlug(slug);

  const heroRef    = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    if (!svc) return;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.from(heroRef.current?.querySelectorAll(".sd-anim") ?? [], {
        opacity: 0, y: 30, duration: 0.85,
        ease: "power3.out", stagger: 0.1, delay: 0.05,
      });
      gsap.from(contentRef.current?.querySelectorAll(".sd-anim-scroll") ?? [], {
        opacity: 0, y: 24, duration: 0.7,
        ease: "power3.out", stagger: 0.08, delay: 0.3,
      });
    });

    return () => ctx.revert();
  }, [svc, language]);

  if (!svc) return <Navigate to="/servicios" replace />;

  const s = svc.t[language];
  const otherServices = services.filter(sv => sv.slug !== slug).slice(0, 3);
  const backLabel = language === "ES" ? "Todos los servicios" : "All services";
  const otherLabel = language === "ES" ? "También ofrecemos" : "We also offer";

  const isExternal = s.ctaHref.startsWith("http");

  return (
    <main className="sd-page">

      {/* ── Back ─────────────────────────────────────── */}
      <div className="sd-back-wrap">
        <Link to="/servicios" className="sd-back">
          <ArrowLeft />
          {backLabel}
        </Link>
      </div>

      {/* ── Hero ─────────────────────────────────────── */}
      <section ref={heroRef} className="sd-hero">
        <div className="sd-hero-img-wrap">
          <img src={svc.image} alt={s.title} className="sd-hero-img" />
          <div className="sd-hero-overlay" />
          <span className="sd-hero-num sd-anim">{svc.num}</span>
        </div>
        <div className="sd-hero-text">
          <h1 className="sd-hero-title sd-anim">{s.title}</h1>
        </div>
      </section>

      {/* ── Content ───────────────────────────────────── */}
      <section ref={contentRef} className="sd-content">

        <div className="sd-main">
          <p className="sd-long sd-anim-scroll">{s.long}</p>

          <ul className="sd-highlights sd-anim-scroll">
            {s.highlights.map((h, i) => (
              <li key={i} className="sd-highlight-item">
                <CheckIcon />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>

        <aside className="sd-sidebar sd-anim-scroll">
          <div className="sd-info-block">
            <p className="sd-info-label">
              {language === "ES" ? "Horario" : "Hours"}
            </p>
            <p className="sd-info-value">{s.hours}</p>
          </div>

          <div className="sd-actions">
            {isExternal ? (
              <a
                href={s.ctaHref}
                target="_blank"
                rel="noopener noreferrer"
                className="sd-btn sd-btn--primary"
              >
                {s.cta}
                <ExternalIcon />
              </a>
            ) : (
              <Link to={s.ctaHref} className="sd-btn sd-btn--primary">
                {s.cta}
              </Link>
            )}
            <a href={`tel:${s.phone.replace(/-/g, "")}`} className="sd-btn sd-btn--secondary">
              <PhoneIcon />
              {s.phone}
            </a>
          </div>
        </aside>
      </section>

      {/* ── Other services ────────────────────────────── */}
      <section className="sd-others">
        <p className="sd-others-label">{otherLabel}</p>
        <div className="sd-others-grid">
          {otherServices.map(sv => {
            const st = sv.t[language];
            return (
              <Link key={sv.slug} to={`/servicios/${sv.slug}`} className="sd-other-card">
                <img src={sv.image} alt={st.title} className="sd-other-img" loading="lazy" />
                <div className="sd-other-body">
                  <span className="sd-other-num">{sv.num}</span>
                  <h3 className="sd-other-title">{st.title}</h3>
                  <p className="sd-other-short">{st.short}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

    </main>
  );
};

export default ServiceDetail;
