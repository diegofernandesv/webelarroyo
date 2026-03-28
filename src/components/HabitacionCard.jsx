import React from "react";
import "./css/HabitacionCard.css";

const HabitacionCard = ({ 
  badgeIcon, 
  capacity, 
  backgroundImage, 
  title, 
  price 
}) => {
  return (
    <div className="room-card">
      <img
        src={backgroundImage}
        className="room-card-background"
        alt="Room Background"
      />
      <div className="room-card-content">
        <div className="room-card-info">
          <div className="room-card-badge">
            <img
              src={badgeIcon}
              className="badge-icon"
              alt="Capacity"
            />
            <span className="badge-text">{capacity}</span>
          </div>
          <h3 className="room-card-title">{title}</h3>
          <p className="room-card-price">{price}</p>
        </div>
        <button className="room-card-button">
          Detalles de la Habitación
        </button>
      </div>
    </div>
  );
};

export default HabitacionCard;
