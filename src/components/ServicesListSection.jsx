import { useLanguage } from "../context/LanguageContext";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// Replace these with local imports once you export the photos from Figma:
// import breakfastImg from "../assets/breakfast.jpg";
// import restaurantImg from "../assets/restaurant.jpg";
const breakfastImg = "https://cdn.builder.io/api/v1/image/assets/e9cac1e18ae64186984fb4d639c633bc/a20a48a5db03373f7fdc5d93456c894875c2847b?placeholderIfAbsent=true";
const restaurantImg = "https://cdn.builder.io/api/v1/image/assets/e9cac1e18ae64186984fb4d639c633bc/bb0a7cfa8f105c812bf6fce9a5fdaacb5962f634?placeholderIfAbsent=true";
import "./css/ServicesListSection.css";

gsap.registerPlugin(ScrollTrigger);

const texts = {
  ES: {
    heading: "Todo lo que necesitas\nen un solo lugar",
    cta: "Ver más",
    services: [
      {
        title: "Panadería",
        desc: "Un espacio ideal para disfrutar desayunos, almuerzos, pastelería y pan fresco en el centro de Caracas, con opciones para cualquier momento del día.",
        btn1: "Instagram",
        btn1Href: "https://www.instagram.com/hotel_el_arroyo/",
        btn2: "0212-481-93-30",
        btn2Href: "tel:02124819330",
        showInstagram: true,
      },
      {
        title: "Restaurant",
        desc: "Disfruta de la gastronomía venezolana e internacional en nuestro restaurante. Cocina de autor con los mejores ingredientes locales, pensada para que cada comida sea una experiencia memorable.",
        btn1: "Menú",
        btn1Href: "/servicios",
        btn2: "0212-481-93-30",
        btn2Href: "tel:02124819330",
        showInstagram: false,
      },
    ],
  },
  EN: {
    heading: "Everything you need\nin one place",
    cta: "See more",
    services: [
      {
        title: "Bakery",
        desc: "An ideal space to enjoy breakfasts, lunches, pastries and fresh bread in the heart of Caracas, with options for any time of day.",
        btn1: "Instagram",
        btn1Href: "https://www.instagram.com/hotel_el_arroyo/",
        btn2: "0212-481-93-30",
        btn2Href: "tel:02124819330",
        showInstagram: true,
      },
      {
        title: "Restaurant",
        desc: "Enjoy Venezuelan and international cuisine at our restaurant. Chef-driven cooking with the finest local ingredients, crafted so every meal becomes a memorable experience.",
        btn1: "Menu",
        btn1Href: "/servicios",
        btn2: "0212-481-93-30",
        btn2Href: "tel:02124819330",
        showInstagram: false,
      },
    ],
  },
};

const serviceImages = [breakfastImg, restaurantImg];

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="sls-btn-icon">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const ServicesListSection = () => {
  const { language } = useLanguage();
  const t = texts[language];

  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const rowRefs = useRef([]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // header
      gsap.from(headerRef.current, {
        scrollTrigger: { trigger: headerRef.current, start: "top 85%", toggleActions: "play none none none" },
        opacity: 0,
        y: 30,
        duration: 0.7,
        ease: "power3.out",
      });

      // each row
      rowRefs.current.filter(Boolean).forEach((row) => {
        const img = row.querySelector(".sls-photo");
        const content = row.querySelector(".sls-content");

        const tl = gsap.timeline({
          scrollTrigger: { trigger: row, start: "top 82%", toggleActions: "play none none none" },
        });

        tl.from(img, { opacity: 0, x: -40, duration: 0.8, ease: "power3.out" })
          .from(content.children, { opacity: 0, y: 24, stagger: 0.1, duration: 0.6, ease: "power3.out" }, "-=0.5");
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="sls-section">
      {/* Header row */}
      <div ref={headerRef} className="sls-header">
        <h2 className="sls-heading">{t.heading}</h2>
        <a href="/servicios" className="sls-cta-btn">{t.cta}</a>
      </div>

      {/* Service rows */}
      <div className="sls-rows">
        {t.services.map((service, index) => (
          <div
            key={index}
            className="sls-row"
            ref={el => { rowRefs.current[index] = el; }}
          >
            <img
              src={serviceImages[index]}
              alt={service.title}
              className="sls-photo"
            />
            <div className="sls-content">
              <h3 className="sls-title">{service.title}</h3>
              <p className="sls-desc">{service.desc}</p>
              <div className="sls-actions">
                <a
                  href={service.btn1Href}
                  target={service.showInstagram ? "_blank" : undefined}
                  rel={service.showInstagram ? "noopener noreferrer" : undefined}
                  className="sls-btn"
                >
                  {service.showInstagram && <InstagramIcon />}
                  {service.btn1}
                </a>
                <a href={service.btn2Href} className="sls-btn">
                  {service.btn2}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesListSection;
