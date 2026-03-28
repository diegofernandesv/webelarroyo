import React from "react";
import { useLanguage } from "../context/LanguageContext";
import "./css/ContactBanner.css";

const bannerTexts = {
  ES: {
    question: "¿Tienes alguna pregunta? Contáctanos a través de nuestro ",
    whatsapp: "Whatsapp +58 4141501515"
  },
  EN: {
    question: "Have a question? Contact us via ",
    whatsapp: "Whatsapp +58 4141501515"
  }
};

const ContactBanner = () => {
  const { language } = useLanguage();
  const t = bannerTexts[language];
  return (
    <div className="contact-banner">
      {t.question}
      <a
        href="https://wa.me/584141501515"
        target="_blank"
        rel="noopener noreferrer"
        className="contact-highlight"
      >
        {t.whatsapp}
      </a>
    </div>
  );
};

export default ContactBanner;
