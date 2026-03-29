import { useRef, useEffect } from "react";
import "./css/Habitaciones.css";
import { BOOKING_URL } from "../data/config";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "../context/LanguageContext";
import RoomListItem from "../components/RoomListItem";
import { rooms } from "../data/rooms";
import image1 from "../assets/image1.png";

gsap.registerPlugin(ScrollTrigger);

const EASE = "cubic-bezier(0.23, 1, 0.32, 1)";

const texts = {
  ES: {
    heroTitle: "Descansa con nosotros",
    heroSub: "Habitaciones cómodas, limpias y acogedoras para cada tipo de viajero.",
    count: (n) => `${n} habitaciones disponibles`,
    ctaTitle: "¿Listo para tu estadía perfecta en Caracas?",
    ctaButton: "Reservar ahora",
  },
  EN: {
    heroTitle: "Rest with us",
    heroSub: "Comfortable, clean and welcoming rooms for every type of traveler.",
    count: (n) => `${n} rooms available`,
    ctaTitle: "Ready for your perfect stay in Caracas?",
    ctaButton: "Book now",
  },
};

const Habitaciones = () => {
  const { language } = useLanguage();
  const t = texts[language];

  const heroContentRef = useRef(null);
  const listRef        = useRef(null);
  const ctaRef         = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const hero = heroContentRef.current;

    if (prefersReducedMotion) {
      gsap.set(hero, { clearProps: "all" });
      return;
    }

    gsap.set(hero, { opacity: 0, y: 40 });

    const ctx = gsap.context(() => {
      gsap.to(hero, { opacity: 1, y: 0, duration: 1.0, ease: EASE, delay: 0.15 });

      if (listRef.current) {
        const items = listRef.current.querySelectorAll(".rli");
        gsap.set(items, { opacity: 0, y: 28 });
        gsap.to(items, {
          opacity: 1,
          y: 0,
          stagger: 0.07,
          duration: 0.65,
          ease: EASE,
          scrollTrigger: {
            trigger: listRef.current,
            start: "top 84%",
            toggleActions: "play none none none",
          },
        });
      }

      if (ctaRef.current) {
        gsap.set(ctaRef.current, { opacity: 0, y: 24 });
        gsap.to(ctaRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: EASE,
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 88%",
            toggleActions: "play none none none",
          },
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="hab-page">


      {/* ── Room list ── */}
      <section className="hab-rooms">
        <ul ref={listRef} className="hab-list">
          {rooms.map((room) => (
            <li key={room.slug}>
              <RoomListItem
                slug={room.slug}
                image={room.image}
                price={room.price}
                capacity={room.capacity}
                amenities={room.t[language].amenities}
                title={room.t[language].title}
                shortDesc={room.t[language].shortDesc}
              />
            </li>
          ))}
        </ul>
      </section>

      {/* ── CTA ── */}
      <section ref={ctaRef} className="hab-cta">
        <h2 className="hab-cta-title">{t.ctaTitle}</h2>
        <a href={BOOKING_URL} className="hab-cta-btn">
          <span>{t.ctaButton}</span>
          <div className="hab-cta-arrow">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </div>
        </a>
      </section>

    </div>
  );
};

export default Habitaciones;
