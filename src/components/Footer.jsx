import React from "react";
import { useLanguage } from "../context/LanguageContext";
import "./css/Footer.css";

const footerTexts = {
  ES: {
    links: [
      "Inicio",
      "Habitaciones",
      "Servicios",
      "Sobre Nosotros"
    ],
    copyright: "©2022 Hotel El Arroyo.",
    address: "USA Oficina: FERCAT INVESTMENT LLC\n12211 Regency Village Drive,\nOrlando, FL 32821"
  },
  EN: {
    links: [
      "Home",
      "Rooms",
      "Services",
      "About Us"
    ],
    copyright: "©2022 Hotel El Arroyo.",
    address: "USA Office: FERCAT INVESTMENT LLC\n12211 Regency Village Drive,\nOrlando, FL 32821"
  }
};

const Footer = () => {
  const { language } = useLanguage();
  const t = footerTexts[language];
  const footerLinks = t.links.map((text, i) => ({ text, active: i === 0 }));

  const socialIcons = [
    "https://cdn.builder.io/api/v1/image/assets/e9cac1e18ae64186984fb4d639c633bc/a6637b8b82d84e4ce81dc776d6e6e7aaebaca95f?placeholderIfAbsent=true",
    "https://cdn.builder.io/api/v1/image/assets/e9cac1e18ae64186984fb4d639c633bc/46f44abf84dd9a1c58c3d8501972c9e9c7303313?placeholderIfAbsent=true",
    "https://cdn.builder.io/api/v1/image/assets/e9cac1e18ae64186984fb4d639c633bc/ed5cc320a9dafdf5169859e78018837e5a1e6ef1?placeholderIfAbsent=true",
  ];

  return (
    <div className="footer-section">
      <div className="footer-content">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/e9cac1e18ae64186984fb4d639c633bc/42773e83346e4e55a12b134745d5063d4aec89d7?placeholderIfAbsent=true"
          className="footer-logo"
          alt="Hotel Logo"
        />
        <div className="footer-links-container">
          <div className="footer-links">
            {footerLinks.map((link, index) => (
              <div
                key={index}
                className={`footer-link ${link.active ? "footer-link-active" : ""}`}
              >
                {link.text}
              </div>
            ))}
          </div>
          <div className="footer-info">
            <div className="social-icons">
              {socialIcons.map((icon, index) => (
                <img
                  key={index}
                  src={icon}
                  className="social-icon"
                  alt="Social Media"
                />
              ))}
            </div>
            <div className="footer-copyright">{t.copyright}</div>
            <div className="footer-address">
              {t.address.split("\n").map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
