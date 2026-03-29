import { useRef, useEffect } from "react";
import RoomCard from "./RoomCard";
import "./css/RoomsSection.css";
import { useLanguage } from "../context/LanguageContext";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { rooms } from "../data/rooms";

gsap.registerPlugin(ScrollTrigger);

const sectionTitle = {
  ES: "Habitaciones pensadas para tu comodidad",
  EN: "Rooms designed for your comfort",
};

const RoomsSection = () => {
  const { language } = useLanguage();
  const titleRef = useRef(null);
  const navRef = useRef(null);
  const cardsContainerRef = useRef(null);
  const cardRefs = useRef([]);

  const scrollAmount = 350;

  const handleScrollLeft = () => {
    if (cardsContainerRef.current) {
      cardsContainerRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
  };

  const handleScrollRight = () => {
    if (cardsContainerRef.current) {
      cardsContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        opacity: 0,
        x: -36,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(navRef.current, {
        opacity: 0,
        x: 36,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: navRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      const cards = cardRefs.current.filter(Boolean);
      if (cards.length) {
        gsap.from(cards, {
          opacity: 0,
          y: 40,
          stagger: 0.1,
          duration: 0.75,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardsContainerRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="rooms-section-header">
      <h2 ref={titleRef} className="rooms-title">
        {sectionTitle[language]}
      </h2>

      <div ref={navRef} className="rooms-navigation">
        <button className="nav-arrow-button" onClick={handleScrollLeft} aria-label="Scroll left">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        <button className="nav-arrow-button" onClick={handleScrollRight} aria-label="Scroll right">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>

      <div ref={cardsContainerRef} className="room-cards-container">
        {rooms.map((room, index) => (
          <div
            key={room.slug}
            className="room-card-wrapper"
            ref={el => { cardRefs.current[index] = el; }}
          >
            <RoomCard
              roomImage={room.image}
              title={room.t[language].title}
              description={room.t[language].shortDesc}
              price={`$${room.price}`}
              capacity={room.capacity}
              slug={room.slug}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoomsSection;
