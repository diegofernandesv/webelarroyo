import React from "react";
import "./css/TestimonialCard.css";

const TestimonialCard = ({ avatar, name, quote, centered = false }) => {
  return (
    <div className="testimonial-card">
      <div className="testimonial-content">
        <img src={avatar} className="testimonial-avatar" alt={name} />
        <div className="testimonial-text-content">
          <div
            className={`testimonial-name ${centered ? "testimonial-name-centered" : ""}`}
          >
            {name}
          </div>
          <div className="testimonial-quote">{quote}</div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
