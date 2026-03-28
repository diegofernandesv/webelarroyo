import { useLanguage } from "../context/LanguageContext";
import { Link } from "react-router-dom";
import { useRef, useEffect } from "react";
import "./css/ServicesSection.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const texts = {
  ES: {
    title: <>Todo lo que necesitas <br />en un solo lugar</>,
    button: "Servicios pensados para tu comodidad",
    services: [
      "Habitaciones Cómodas",
      "Panadería en el Hotel",
      "Ubicación céntrica"
    ]
  },
  EN: {
    title: <>Everything you need <br />in one place</>,
    button: "Services designed for your comfort",
    services: [
      "Comfortable Rooms",
      "Bakery in the Hotel",
      "Central Location"
    ]
  }
};

const ServicesSection = () => {
  const { language } = useLanguage();
  const t = texts[language];

  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const btnRef = useRef(null);
  const itemRefs = useRef([]);
  const imgRef = useRef(null);

  const services = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/e9cac1e18ae64186984fb4d639c633bc/b8c185aa317635f3d97e2861e033e4fdaa473ee0?placeholderIfAbsent=true",
      text: t.services[0],
      iconClass: "service-icon-wide",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/e9cac1e18ae64186984fb4d639c633bc/27c3c888723822d2a34ba9b9fd2ee4d7b144b67b?placeholderIfAbsent=true",
      text: t.services[1],
      iconClass: "",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/e9cac1e18ae64186984fb4d639c633bc/7b1a1ac13ba5bf7692b75cbc33bc0a3d7b0368d8?placeholderIfAbsent=true",
      text: t.services[2],
      iconClass: "service-icon-small",
    },
  ];

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      tl.from(titleRef.current, { opacity: 0, y: 30, duration: 0.7, ease: "power3.out" })
        .from(btnRef.current, { opacity: 0, y: 20, duration: 0.6, ease: "power3.out" }, "-=0.4")
        .from(itemRefs.current.filter(Boolean), {
          opacity: 0,
          y: 24,
          stagger: 0.12,
          duration: 0.6,
          ease: "power3.out",
        }, "-=0.3")
        .from(imgRef.current, {
          opacity: 0,
          x: 40,
          scale: 0.97,
          duration: 0.9,
          ease: "power3.out",
        }, "-=0.75");
    });

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="services-section">
      <div className="services-container">
        <div className="services-text-content">
          <h2 ref={titleRef} className="services-title">{t.title}</h2>
          <Link ref={btnRef} to="/servicios" className="services-button">
            <span className="services-button-text">{t.button}</span>
            <div className="services-arrow-icon">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/e9cac1e18ae64186984fb4d639c633bc/6cae9776603b35b835ae5d71b997bb889b43013f?placeholderIfAbsent=true"
                className="services-arrow-image"
                alt="Arrow"
              />
            </div>
          </Link>
          <div className="services-grid">
            {services.map((service, index) => (
              <div
                key={index}
                className="service-item"
                ref={el => { itemRefs.current[index] = el; }}
              >
                <img
                  src={service.icon}
                  className={`service-icon ${service.iconClass}`}
                  alt={service.text}
                />
                <div className="service-text">{service.text}</div>
              </div>
            ))}
          </div>
        </div>
        <img
          ref={imgRef}
          src="https://cdn.builder.io/api/v1/image/assets/e9cac1e18ae64186984fb4d639c633bc/a20a48a5db03373f7fdc5d93456c894875c2847b?placeholderIfAbsent=true"
          className="services-image"
          alt="Hotel Services"
        />
      </div>
    </div>
  );
};

export default ServicesSection;
