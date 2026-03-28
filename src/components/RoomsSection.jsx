import { useRef, useEffect } from "react";
import RoomCard from "./RoomCard";
import "./css/RoomsSection.css";
import { useLanguage } from "../context/LanguageContext";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const sectionTitle = {
  ES: "Habitaciones pensadas para tu comodidad",
  EN: "Rooms designed for your comfort",
};

const rooms = [
  {
    image: "https://cdn.builder.io/api/v1/image/assets/e9cac1e18ae64186984fb4d639c633bc/bb0a7cfa8f105c812bf6fce9a5fdaacb5962f634?placeholderIfAbsent=true",
    price: "$35",
    capacity: 1,
    t: {
      ES: { title: "Sencilla", description: "Habitación individual con todo lo esencial para una estadía tranquila." },
      EN: { title: "Single", description: "Individual room with everything you need for a peaceful stay." },
    },
  },
  {
    image: "https://cdn.builder.io/api/v1/image/assets/e9cac1e18ae64186984fb4d639c633bc/27ed5d5f5c184350a998540474fd1713d48e6502?placeholderIfAbsent=true",
    price: "$45",
    capacity: 2,
    t: {
      ES: { title: "Estándar Doble", description: "Confortable y bien equipada para una estadía corta o larga." },
      EN: { title: "Standard Double", description: "Comfortable and well-equipped for short or extended stays." },
    },
  },
  {
    image: "https://cdn.builder.io/api/v1/image/assets/e9cac1e18ae64186984fb4d639c633bc/bb0a7cfa8f105c812bf6fce9a5fdaacb5962f634?placeholderIfAbsent=true",
    price: "$50",
    capacity: 2,
    t: {
      ES: { title: "Business Day", description: "Silenciosa, limpia y moderna, ideal para trámites y escapadas urbanas." },
      EN: { title: "Business Day", description: "Quiet, clean and modern — perfect for paperwork or a calm city stay." },
    },
  },
  {
    image: "https://cdn.builder.io/api/v1/image/assets/e9cac1e18ae64186984fb4d639c633bc/d406fb2ce66360bdf62fb0be768dd3d45440201c?placeholderIfAbsent=true",
    price: "$55",
    capacity: 2,
    t: {
      ES: { title: "Doble Superior", description: "Dos camas cómodas en un ambiente tranquilo y luminoso." },
      EN: { title: "Superior Double", description: "Two comfortable beds in a quiet, well-lit room." },
    },
  },
  {
    image: "https://cdn.builder.io/api/v1/image/assets/e9cac1e18ae64186984fb4d639c633bc/27ed5d5f5c184350a998540474fd1713d48e6502?placeholderIfAbsent=true",
    price: "$60",
    capacity: 3,
    t: {
      ES: { title: "Triple", description: "Espaciosa y versátil, ideal para grupos pequeños o familias." },
      EN: { title: "Triple", description: "Spacious and versatile, great for small groups or families." },
    },
  },
  {
    image: "https://cdn.builder.io/api/v1/image/assets/e9cac1e18ae64186984fb4d639c633bc/d406fb2ce66360bdf62fb0be768dd3d45440201c?placeholderIfAbsent=true",
    price: "$75",
    capacity: 3,
    t: {
      ES: { title: "Suite Ejecutiva", description: "Amplia y elegante, perfecta para profesionales y estadías prolongadas." },
      EN: { title: "Executive Suite", description: "Spacious and elegant, ideal for professionals and longer stays." },
    },
  },
];

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
            key={index}
            className="room-card-wrapper"
            ref={el => { cardRefs.current[index] = el; }}
          >
            <RoomCard
              roomImage={room.image}
              title={room.t[language].title}
              description={room.t[language].description}
              price={room.price}
              capacity={room.capacity}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoomsSection;
