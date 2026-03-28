import { useState, useEffect, useRef } from "react";
import { useLanguage } from "../context/LanguageContext";
import "./css/TestimonialsSection.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    avatar: "https://cdn.builder.io/api/v1/image/assets/e9cac1e18ae64186984fb4d639c633bc/cff8718ed4f0f5faeabddc91b083554f16cd40dc?placeholderIfAbsent=true",
    name: "Eliza Basanta",
    role: { ES: "Huésped verificada", EN: "Verified guest" },
    quote: {
      ES: [
        "Muy buena ",
        { h: "atención y ubicación" },
        " para hacer cosas en el centro. Precios accesibles y personal ",
        { h: "muy atento a todo" },
        ". Habitaciones y baño limpios y cómodos.",
      ],
      EN: [
        "Very good ",
        { h: "service and location" },
        " for doing things downtown. Affordable prices and ",
        { h: "very attentive staff" },
        ". Clean and comfortable rooms and bathroom.",
      ],
    },
  },
  {
    avatar: "https://cdn.builder.io/api/v1/image/assets/e9cac1e18ae64186984fb4d639c633bc/42d8f09ced906ebb8b6db823ce9967994cd5f31a?placeholderIfAbsent=true",
    name: "José Castillo",
    role: { ES: "Huésped verificado", EN: "Verified guest" },
    quote: {
      ES: [
        "Excelente atención y servicios. Personal ",
        { h: "muy atento" },
        " y el servicio a la habitación impecable. Sin duda alguna ",
        { h: "uno de los mejores hoteles de Caracas" },
        " 👍",
      ],
      EN: [
        "Excellent service and amenities. ",
        { h: "Very attentive staff" },
        " and impeccable room service. Without a doubt ",
        { h: "one of the best hotels in Caracas" },
        " 👍",
      ],
    },
  },
  {
    avatar: "https://cdn.builder.io/api/v1/image/assets/e9cac1e18ae64186984fb4d639c633bc/b0ca2e855d629dbac76ed839bcec398a560fe57c?placeholderIfAbsent=true",
    name: "Mayra Baez",
    role: { ES: "Huésped verificada", EN: "Verified guest" },
    quote: {
      ES: [
        "Hotel confortable en el Centro de Caracas, personal ",
        { h: "súper amable" },
        ", habitaciones cómodas y acogedoras. Sin duda ",
        { h: "un lugar donde sentirse como en casa" },
        ".",
      ],
      EN: [
        "Comfortable hotel in the center of Caracas, ",
        { h: "super friendly staff" },
        ", comfortable and cozy rooms. Definitely ",
        { h: "a place where you feel at home" },
        ".",
      ],
    },
  },
];

const Stars = () => (
  <div className="testimonials-stars" aria-label="5 stars">
    {[...Array(5)].map((_, i) => (
      <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ))}
  </div>
);

const renderQuote = (segments) =>
  segments.map((seg, i) =>
    typeof seg === "string"
      ? seg
      : <span key={i} className="testimonial-highlight">{seg.h}</span>
  );

const TestimonialsSection = () => {
  const { language } = useLanguage();
  const [active, setActive] = useState(0);
  const quoteAreaRef = useRef(null);
  const sectionRef = useRef(null);
  const isAnimatingRef = useRef(false);

  // Section entrance animation
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.from(sectionRef.current, {
        opacity: 0,
        y: 40,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  // Animate out/in on language change
  useEffect(() => {
    const el = quoteAreaRef.current;
    if (!el) return;

    const tl = gsap.timeline();
    tl.to(el, { opacity: 0, y: -10, duration: 0.18, ease: "power2.in" })
      .to(el, { opacity: 1, y: 0, duration: 0.32, ease: "power2.out", delay: 0.04 });

    return () => tl.kill();
  }, [language]);

  const switchTo = (index) => {
    if (index === active || isAnimatingRef.current) return;
    const el = quoteAreaRef.current;
    if (!el) return;

    isAnimatingRef.current = true;
    gsap.timeline()
      .to(el, { opacity: 0, y: -12, duration: 0.18, ease: "power2.in" })
      .call(() => setActive(index))
      .to(el, { opacity: 1, y: 0, duration: 0.32, ease: "power2.out" })
      .call(() => { isAnimatingRef.current = false; });
  };

  const current = testimonials[active];

  return (
    <section ref={sectionRef} className="testimonials-section">
      <div className="testimonials-inner">

        {/* Quote card */}
        <div ref={quoteAreaRef} className="testimonials-quote-area">
          <div className="testimonials-quotemark" aria-hidden="true">"</div>

          <Stars />

          <blockquote className="testimonials-quote">
            {renderQuote(current.quote[language])}
          </blockquote>

          <div className="testimonials-author">
            <span className="testimonials-author-name">{current.name}</span>
            <span className="testimonials-author-sep" aria-hidden="true">·</span>
            <span className="testimonials-author-role">{current.role[language]}</span>
          </div>
        </div>

        {/* Avatar selector */}
        <div className="testimonials-avatars" role="tablist" aria-label="Testimonials">
          {testimonials.map((t, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === active}
              aria-label={t.name}
              className={`testimonials-avatar-btn ${i === active ? "is-active" : ""}`}
              onClick={() => switchTo(i)}
            >
              <img
                src={t.avatar}
                alt={t.name}
                className="testimonials-avatar-img"
              />
            </button>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;
