import { useLanguage } from "../context/LanguageContext";
import React, { useRef, useEffect } from "react";
import "./css/LocationSection.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const texts = {
  ES: {
    title: "La mejor ubicación para hacer tus diligencias.",
    desc: "En el Hotel El Arroyo, situado estratégicamente en el centro de Caracas, ofrecemos una estadía ideal para quienes buscan resolver trámites en el SAIME o el TSJ, o asistir a conciertos y eventos deportivos.",
    address: "Av Lecuna, Frente al Metro Teatros, Centro de Caracas",
  },
  EN: {
    title: "The best location for your business in Caracas.",
    desc: "At Hotel El Arroyo, strategically located in downtown Caracas, we offer the ideal stay for those who need to handle paperwork at SAIME or TSJ, or attend concerts and sporting events.",
    address: "Av Lecuna, In front of Metro Teatros, Downtown Caracas",
  },
};

const LocationSection = () => {
  const { language } = useLanguage();
  const t = texts[language];

  const titleRef = useRef(null);
  const addressRef = useRef(null);
  const descRef = useRef(null);
  const mapRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      gsap.set([titleRef.current, addressRef.current, descRef.current, mapRef.current], {
        opacity: 1,
        y: 0,
      });
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      tl.to(titleRef.current, { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" })
        .to(addressRef.current, { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }, "-=0.4")
        .to(descRef.current, { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }, "-=0.4")
        .to(mapRef.current, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, "-=0.3");
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="location-section">
      <div className="location-top">
        <div className="location-left">
          <h2 ref={titleRef} className="location-title">
            {t.title}
          </h2>
          <div ref={addressRef} className="location-address-row">
            <svg className="location-pin" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor"/>
            </svg>
            <span>{t.address}</span>
          </div>
        </div>

        <p ref={descRef} className="location-desc">
          {t.desc}
        </p>
      </div>

      <hr className="location-divider" />

      <div ref={mapRef} className="location-map">
        <iframe
          title="Hotel El Arroyo Map"
          src="https://maps.google.com/maps?q=Avenida+Lecuna+frente+al+Metro+Teatros+Caracas+Venezuela&z=16&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0, borderRadius: "inherit" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
};

export default LocationSection;
