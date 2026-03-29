import { useRef, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { BOOKING_URL } from "../data/config";
import { gsap } from "gsap";
import { getRoomBySlug, rooms } from "../data/rooms";
import { AMENITIES } from "../data/amenities";
import { useLanguage } from "../context/LanguageContext";
import RoomListItem from "../components/RoomListItem";
import "./css/RoomDetail.css";

const EASE = "cubic-bezier(0.23, 1, 0.32, 1)";

const ui = {
  ES: {
    back: "Habitaciones",
    nightLabel: "/noche",
    persons: (n) => `${n} ${n === 1 ? "persona" : "personas"}`,
    about: "Sobre esta habitación",
    amenitiesTitle: "Comodidades incluidas",
    policies: "Políticas de la estadía",
    checkIn: "Check-in",
    checkOut: "Check-out",
    checkInTime: "A partir de las 2:00 PM",
    checkOutTime: "Hasta las 12:00 PM",
    noSmoking: "No se permite fumar",
    noPets: "No se admiten mascotas",
    book: "Reservar esta habitación",
    question: "¿Tienes preguntas?",
    whatsapp: "Escríbenos por WhatsApp",
    similar: "Otras habitaciones",
    notFound: "Habitación no encontrada",
    backHome: "Ver todas las habitaciones",
    perNight: "por noche",
  },
  EN: {
    back: "Rooms",
    nightLabel: "/night",
    persons: (n) => `${n} ${n === 1 ? "person" : "people"}`,
    about: "About this room",
    amenitiesTitle: "What's included",
    policies: "Stay policies",
    checkIn: "Check-in",
    checkOut: "Check-out",
    checkInTime: "From 2:00 PM",
    checkOutTime: "Until 12:00 PM",
    noSmoking: "No smoking",
    noPets: "No pets allowed",
    book: "Reserve this room",
    question: "Have questions?",
    whatsapp: "Message us on WhatsApp",
    similar: "Other rooms",
    notFound: "Room not found",
    backHome: "See all rooms",
    perNight: "per night",
  },
};

const RoomDetail = () => {
  const { slug } = useParams();
  const { language } = useLanguage();
  const navigate = useNavigate();
  const t = ui[language];

  const room = getRoomBySlug(slug);
  const otherRooms = rooms.filter((r) => r.slug !== slug).slice(0, 3);

  const heroRef    = useRef(null);
  const contentRef = useRef(null);
  const cardRef    = useRef(null);

  useEffect(() => { window.scrollTo(0, 0); }, [slug]);

  useEffect(() => {
    if (!room) return;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    gsap.set(heroRef.current,    { opacity: 0, scale: 1.04 });
    gsap.set(contentRef.current, { opacity: 0, y: 32 });
    if (cardRef.current) gsap.set(cardRef.current, { opacity: 0, x: 20 });

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: EASE } });
      tl.to(heroRef.current,    { opacity: 1, scale: 1, duration: 0.7 })
        .to(contentRef.current, { opacity: 1, y: 0, duration: 0.65 }, "-=0.35");
      if (cardRef.current) tl.to(cardRef.current, { opacity: 1, x: 0, duration: 0.5 }, "-=0.4");
    });

    return () => ctx.revert();
  }, [room, slug]);

  if (!room) {
    return (
      <div className="rd-not-found">
        <p>{t.notFound}</p>
        <Link to="/habitaciones" className="rd-back-link">{t.backHome}</Link>
      </div>
    );
  }

  const data        = room.t[language];
  const priceStr    = `$${room.price}`;
  const capacity    = t.persons(room.capacity);

  return (
    <div className="rd-page">

      {/* ── Hero ── */}
      <div className="rd-hero" ref={heroRef}>
        <img src={room.image} alt={data.title} className="rd-hero-img" />
        <div className="rd-hero-gradient" aria-hidden="true" />
        <button className="rd-back-btn" onClick={() => navigate("/habitaciones")} aria-label={t.back}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M19 12H5M12 5l-7 7 7 7" />
          </svg>
          <span>{t.back}</span>
        </button>
      </div>

      {/* ── Two-column layout ── */}
      <div className="rd-layout">

        {/* ── Left: main content ── */}
        <main ref={contentRef} className="rd-main">

          {/* Title + capacity */}
          <div className="rd-title-block">
            <div className="rd-badges">
              <span className="rd-badge-capacity">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="8" r="4" />
                  <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
                </svg>
                {capacity}
              </span>
            </div>
            <h1 className="rd-title">{data.title}</h1>
            {/* Price shown only on mobile — hidden on desktop via CSS */}
            <div className="rd-price-mobile">
              <span className="rd-price-value">{priceStr}</span>
              <span className="rd-price-suffix">{t.nightLabel}</span>
            </div>
          </div>

          <hr className="rd-rule" />

          {/* Description */}
          <section className="rd-section">
            <h2 className="rd-section-title">{t.about}</h2>
            <p className="rd-body-text">{data.longDesc}</p>
          </section>

          <hr className="rd-rule" />

          {/* Amenities */}
          <section className="rd-section">
            <h2 className="rd-section-title">{t.amenitiesTitle}</h2>
            <ul className="rd-amenities">
              {data.amenities.map((key) => {
                const a = AMENITIES[key];
                if (!a) return null;
                return (
                  <li key={key} className="rd-amenity">
                    <span className="rd-amenity-icon">{a.svg}</span>
                    <span className="rd-amenity-label">{a[language]}</span>
                  </li>
                );
              })}
            </ul>
          </section>

          <hr className="rd-rule" />

          {/* Policies */}
          <section className="rd-section">
            <h2 className="rd-section-title">{t.policies}</h2>
            <ul className="rd-policies">
              <li className="rd-policy">
                <span className="rd-policy-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </span>
                <div>
                  <p className="rd-policy-label">{t.checkIn}</p>
                  <p className="rd-policy-value">{t.checkInTime}</p>
                </div>
              </li>
              <li className="rd-policy">
                <span className="rd-policy-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 8 14" />
                  </svg>
                </span>
                <div>
                  <p className="rd-policy-label">{t.checkOut}</p>
                  <p className="rd-policy-value">{t.checkOutTime}</p>
                </div>
              </li>
              <li className="rd-policy">
                <span className="rd-policy-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
                  </svg>
                </span>
                <div>
                  <p className="rd-policy-label">{t.noSmoking}</p>
                </div>
              </li>
              <li className="rd-policy">
                <span className="rd-policy-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
                  </svg>
                </span>
                <div>
                  <p className="rd-policy-label">{t.noPets}</p>
                </div>
              </li>
            </ul>
          </section>

          {/* Similar rooms */}
          {otherRooms.length > 0 && (
            <>
              <hr className="rd-rule" />
              <section className="rd-section rd-similar">
                <h2 className="rd-section-title">{t.similar}</h2>
                <ul className="rd-similar-list">
                  {otherRooms.map((r) => (
                    <li key={r.slug}>
                      <RoomListItem
                        slug={r.slug}
                        image={r.image}
                        price={r.price}
                        capacity={r.capacity}
                        amenities={r.t[language].amenities}
                        title={r.t[language].title}
                        shortDesc={r.t[language].shortDesc}
                      />
                    </li>
                  ))}
                </ul>
              </section>
            </>
          )}
        </main>

        {/* ── Right: booking card (desktop) ── */}
        <aside ref={cardRef} className="rd-card">
          <div className="rd-card-price">
            <span className="rd-card-price-value">{priceStr}</span>
            <span className="rd-card-price-suffix">{t.nightLabel}</span>
          </div>
          <p className="rd-card-capacity">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="12" cy="8" r="4" />
              <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
            </svg>
            {capacity}
          </p>
          <hr className="rd-card-rule" />
          <a href={BOOKING_URL} className="rd-card-btn">
            {t.book}
            <div className="rd-card-btn-arrow">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
          </a>
          <div className="rd-card-contact">
            <p>{t.question}</p>
            <a href="https://wa.me/584141501515" target="_blank" rel="noopener noreferrer">
              {t.whatsapp}
            </a>
          </div>
        </aside>
      </div>

      {/* ── Mobile sticky bottom bar ── */}
      <div className="rd-sticky">
        <div className="rd-sticky-price">
          <span className="rd-sticky-value">{priceStr}</span>
          <span className="rd-sticky-suffix">{t.nightLabel}</span>
        </div>
        <a href={BOOKING_URL} className="rd-sticky-btn">{t.book}</a>
      </div>

    </div>
  );
};

export default RoomDetail;
