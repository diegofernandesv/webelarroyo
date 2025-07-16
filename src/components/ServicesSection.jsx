import { useLanguage } from "../context/LanguageContext";
import React from "react";
import "./css/ServicesSection.css";

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
  return (
    <div className="services-section">
      <div className="services-container">
        <div className="services-text-content">
          <div className="services-title">{t.title}</div>
          <div className="services-button">
            <div className="services-button-text">{t.button}</div>
            <div className="services-arrow-icon">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/e9cac1e18ae64186984fb4d639c633bc/6cae9776603b35b835ae5d71b997bb889b43013f?placeholderIfAbsent=true"
                className="services-arrow-image"
                alt="Arrow"
              />
            </div>
          </div>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-item">
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
          src="https://cdn.builder.io/api/v1/image/assets/e9cac1e18ae64186984fb4d639c633bc/a20a48a5db03373f7fdc5d93456c894875c2847b?placeholderIfAbsent=true"
          className="services-image"
          alt="Hotel Services"
        />
      </div>
    </div>
  );
};

export default ServicesSection;
