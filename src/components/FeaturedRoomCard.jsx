import React from "react";
import "./css/FeaturedRoomCard.css";

const FeaturedRoomCard = ({ 
  badgeIcon, 
  capacity, 
  backgroundImage, 
  title, 
  price, 
  reverse = false 
}) => {
  return (
    <div className={`featured-room ${reverse ? "reverse" : ""}`}>
      <div className="featured-room-content">
        <img
          src={backgroundImage}
          className="room-background"
          alt="Room Background"
        />
        <div className="room-info">
          <div className="room-badge">
            <img
              src={badgeIcon}
              className="badge-icon"
              alt="Capacity"
            />
            <span className="badge-text">{capacity}</span>
          </div>
          <h2 className="room-title">{title}</h2>
          <p className="room-price">{price}</p>
        </div>
        <button className="room-button">
          Detalles de la Habitación
        </button>
      </div>
    </div>
  );
};

export default FeaturedRoomCard;
