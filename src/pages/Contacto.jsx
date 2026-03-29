import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { useLanguage } from "../context/LanguageContext";
import image1 from "../assets/image1.png";
import "./css/Contacto.css";

const texts = {
  ES: {
    title: "Hablemos",
    sub: "La forma más rápida de reservar o consultar disponibilidad. Te respondemos en minutos.",
    waCta: "Escribir por WhatsApp",
    phoneCta: "Llamar al hotel",
    infoTitle: "Información de contacto",
    info: [
      {
        label: "Dirección",
        lines: ["Av. Lecuna, frente al Metro Teatros", "Centro de Caracas, Venezuela"],
      },
      {
        label: "Teléfono",
        lines: ["0212-481-93-30"],
        href: "tel:02124819330",
      },
      {
        label: "WhatsApp",
        lines: ["+58 414-150-1515"],
        href: "https://wa.me/584141501515",
        external: true,
      },
      {
        label: "Recepción",
        lines: ["24 horas · Todos los días del año"],
      },
    ],
  },
  EN: {
    title: "Let's talk",
    sub: "The fastest way to book or check availability. We reply in minutes.",
    waCta: "Message on WhatsApp",
    phoneCta: "Call the hotel",
    infoTitle: "Contact information",
    info: [
      {
        label: "Address",
        lines: ["Av. Lecuna, in front of Metro Teatros", "Downtown Caracas, Venezuela"],
      },
      {
        label: "Phone",
        lines: ["0212-481-93-30"],
        href: "tel:02124819330",
      },
      {
        label: "WhatsApp",
        lines: ["+58 414-150-1515"],
        href: "https://wa.me/584141501515",
        external: true,
      },
      {
        label: "Reception",
        lines: ["24 hours · Every day of the year"],
      },
    ],
  },
};

const WA_HREF = "https://wa.me/584141501515";

const WhatsAppIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.847L.057 23.57a.75.75 0 00.92.921l5.808-1.521A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.705 9.705 0 01-4.953-1.355l-.355-.21-3.683.965.983-3.595-.23-.37A9.718 9.718 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/>
  </svg>
);

const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const Contacto = () => {
  const { language } = useLanguage();
  const t = texts[language];
  const titleRef  = useRef(null);
  const subRef    = useRef(null);
  const ctasRef   = useRef(null);
  const bgRef     = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    gsap.set([titleRef.current, subRef.current, ctasRef.current], { opacity: 0, y: 28 });

    const ctx = gsap.context(() => {
      gsap.timeline({ delay: 0.1 })
        .to(titleRef.current, { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" })
        .to(subRef.current,   { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, "-=0.6")
        .to(ctasRef.current,  { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }, "-=0.5");

      // Subtle parallax on scroll
      if (window.innerWidth >= 768) {
        let ticking = false;
        const onScroll = () => {
          if (!ticking) {
            requestAnimationFrame(() => {
              if (bgRef.current) {
                bgRef.current.style.transform = `translateY(${window.scrollY * 0.3}px)`;
              }
              ticking = false;
            });
            ticking = true;
          }
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
      }
    });

    return () => ctx.revert();
  }, [language]);

  return (
    <main className="ct-page">

      {/* ── Hero — matches home hero style ───────────── */}
      <section className="ct-hero">
        <img ref={bgRef} src={image1} alt="" className="ct-hero-bg" aria-hidden="true" />
        <div className="ct-hero-overlay" aria-hidden="true" />

        <div className="ct-hero-content">
          <h1 ref={titleRef} className="ct-hero-title">{t.title}</h1>
          <p ref={subRef} className="ct-hero-sub">{t.sub}</p>

          <div ref={ctasRef} className="ct-ctas">
            <a
              href={WA_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="ct-btn ct-btn--primary"
            >
              <WhatsAppIcon />
              {t.waCta}
              <span className="ct-btn-arrow">
                <ArrowIcon />
              </span>
            </a>
            <a href="tel:02124819330" className="ct-btn ct-btn--secondary">
              {t.phoneCta}
            </a>
          </div>
        </div>
      </section>

      {/* ── Info section — matches LocationSection style ── */}
      <section className="ct-info-section">
        <h2 className="ct-info-title">{t.infoTitle}</h2>
        <hr className="ct-divider" />
        <div className="ct-info-grid">
          {t.info.map((item, i) => (
            <div key={i} className="ct-info-item">
              <p className="ct-info-label">{item.label}</p>
              {item.href ? (
                <a
                  href={item.href}
                  className="ct-info-value ct-info-link"
                  {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  {item.lines.join("\n")}
                </a>
              ) : (
                <p className="ct-info-value">
                  {item.lines.map((l, j) => (
                    <span key={j}>{l}{j < item.lines.length - 1 && <br />}</span>
                  ))}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

    </main>
  );
};

export default Contacto;
