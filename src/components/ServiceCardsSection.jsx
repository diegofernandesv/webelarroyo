import { useLanguage } from "../context/LanguageContext";
import ScrollStack, { ScrollStackItem } from "./ScrollStack";
// Replace with local import once you export the photo from Figma:
// import breakfastImg from "../assets/breakfast.jpg";
const breakfastImg = "https://cdn.builder.io/api/v1/image/assets/e9cac1e18ae64186984fb4d639c633bc/a20a48a5db03373f7fdc5d93456c894875c2847b?placeholderIfAbsent=true";
import "./css/ServiceCardsSection.css";

const texts = {
  ES: {
    heading: "Nuestros Servicios",
    cards: [
      {
        title: "Panadería",
        desc: "Empieza tu día con el aroma del pan recién horneado. Nuestra panadería artesanal ofrece una variedad de panes, croissants y pasteles elaborados cada mañana con ingredientes frescos.",
        instagramLabel: "Visítanos en Instagram",
        instagramHref: "https://www.instagram.com/hotel_el_arroyo/",
        phone: "0212-481-93-30",
      },
      {
        title: "Restaurante",
        desc: "Disfruta de la gastronomía venezolana e internacional en nuestro restaurante. Cocina de autor con los mejores ingredientes locales, pensada para que cada comida sea una experiencia memorable.",
        instagramLabel: "Síguenos en Instagram",
        instagramHref: "https://www.instagram.com/hotel_el_arroyo/",
        phone: "0212-481-93-30",
      },
      {
        title: "Habitaciones Cómodas",
        desc: "Descansa en habitaciones cuidadosamente diseñadas para tu comodidad. Cada espacio combina elegancia y calidez para que te sientas como en casa durante tu estadía.",
        instagramLabel: "Ver habitaciones",
        instagramHref: "https://www.instagram.com/hotel_el_arroyo/",
        phone: "0212-481-93-30",
      },
    ],
  },
  EN: {
    heading: "Our Services",
    cards: [
      {
        title: "Bakery",
        desc: "Start your day with the scent of freshly baked bread. Our artisan bakery offers a variety of breads, croissants and pastries made every morning with fresh ingredients.",
        instagramLabel: "Visit us on Instagram",
        instagramHref: "https://www.instagram.com/hotel_el_arroyo/",
        phone: "0212-481-93-30",
      },
      {
        title: "Restaurant",
        desc: "Enjoy Venezuelan and international cuisine at our restaurant. Chef-driven cooking with the finest local ingredients, crafted so every meal becomes a memorable experience.",
        instagramLabel: "Follow us on Instagram",
        instagramHref: "https://www.instagram.com/hotel_el_arroyo/",
        phone: "0212-481-93-30",
      },
      {
        title: "Comfortable Rooms",
        desc: "Rest in rooms carefully designed for your comfort. Each space blends elegance and warmth so you feel at home throughout your stay.",
        instagramLabel: "View rooms",
        instagramHref: "https://www.instagram.com/hotel_el_arroyo/",
        phone: "0212-481-93-30",
      },
    ],
  },
};

const CARD_IMAGE = breakfastImg;

// Brand palette: light blue tint → medium blue → accent blue
const cardColors = ["#e0ebf6", "#c8d8f0", "#b0c6e8"];

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.22 1.18 2 2 0 012.18 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.09a16 16 0 006 6l.56-.56a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
  </svg>
);

const ServiceCardsSection = () => {
  const { language } = useLanguage();
  const t = texts[language];

  return (
    <section className="service-cards-section">
      <h2 className="service-cards-heading">{t.heading}</h2>
      <ScrollStack
        itemDistance={80}
        itemScale={0.04}
        itemStackDistance={20}
        stackPosition="15%"
        scaleEndPosition="8%"
        baseScale={0.75}
        useWindowScroll={true}
      >
        {t.cards.map((card, index) => (
          <ScrollStackItem key={index}>
            <div className="service-stack-card" style={{ backgroundColor: cardColors[index] }}>
              <div className="service-stack-card-inner">
                <img
                  src={CARD_IMAGE}
                  alt={card.title}
                  className="service-stack-photo"
                />
                <div className="service-stack-content">
                  <h3 className="service-stack-title">{card.title}</h3>
                  <p className="service-stack-desc">{card.desc}</p>
                  <div className="service-stack-actions">
                    <a
                      href={card.instagramHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="service-stack-btn"
                    >
                      <InstagramIcon />
                      {card.instagramLabel}
                    </a>
                    <a
                      href={`tel:${card.phone.replace(/-/g, "")}`}
                      className="service-stack-btn"
                    >
                      <PhoneIcon />
                      {card.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </ScrollStackItem>
        ))}
      </ScrollStack>
    </section>
  );
};

export default ServiceCardsSection;
