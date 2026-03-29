import { useNavigate } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { AMENITIES } from "../data/amenities";
import "./css/RoomListItem.css";

// Show only the first N amenities in the list
const MAX_AMENITIES = 5;

const RoomListItem = ({ slug, image, price, capacity, amenities, title, shortDesc }) => {
  const { language } = useLanguage();
  const navigate = useNavigate();

  const nightLabel = language === "ES" ? "/noche" : "/night";
  const viewLabel  = language === "ES" ? "Ver habitación" : "View room";
  const persons    = language === "ES"
    ? `${capacity} ${capacity === 1 ? "persona" : "personas"}`
    : `${capacity} ${capacity === 1 ? "person" : "people"}`;

  const amenityNames = amenities
    .slice(0, MAX_AMENITIES)
    .map((k) => AMENITIES[k]?.[language])
    .filter(Boolean)
    .join(" · ");

  return (
    <article
      className="rli"
      onClick={() => navigate(`/habitaciones/${slug}`)}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && navigate(`/habitaciones/${slug}`)}
      role="link"
      tabIndex={0}
      aria-label={title}
    >
      {/* Image */}
      <div className="rli-media">
        <img src={image} alt={title} className="rli-img" />
      </div>

      {/* Content */}
      <div className="rli-content">
        <div className="rli-top">
          <div className="rli-header">
            <span className="rli-capacity">{persons}</span>
            <h3 className="rli-title">{title}</h3>
            <p className="rli-desc">{shortDesc}</p>
          </div>
          <p className="rli-amenities">{amenityNames}</p>
        </div>

        {/* Price + CTA */}
        <div className="rli-footer">
          <div className="rli-price">
            <span className="rli-price-value">${price}</span>
            <span className="rli-price-suffix">{nightLabel}</span>
          </div>
          <button className="rli-btn" tabIndex={-1} aria-hidden="true">
            {viewLabel}
            <div className="rli-btn-arrow">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </article>
  );
};

export default RoomListItem;
