import React from "react";
import "./css/RoomCard.css";

const RoomCard = ({ roomImage, amenities, isVectorStyle = false }) => {
  return (
    <div className="room-card">
      <div className="room-card-content">
        <img src={roomImage} className="room-image" alt="Room" />
        <div className="room-details">
          <div className="room-name">
            Habitación
            <br />
            Matrimonial Plus
          </div>
          <div className="room-amenities">
            <div className="amenities-row">
              {amenities.map((amenity, index) => (
                <div
                  key={index}
                  className={`amenity-item ${isVectorStyle ? "amenity-item-vector" : ""}`}
                >
                  <div className="amenity-content">
                    {isVectorStyle ? (
                      amenity.type === "bed" ? (
                        <div className="vector-icon bed-vector"></div>
                      ) : (
                        <div className="tv-icon-container">
                          <div className="tv-vector"></div>
                        </div>
                      )
                    ) : (
                      <img
                        src={amenity.icon}
                        className="amenity-icon"
                        alt={amenity.name}
                      />
                    )}
                    <div className="amenity-text">{amenity.name}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="room-book-button">
            <div className="room-book-text">Reserva Ya</div>
            <div
              className={`room-book-arrow ${isVectorStyle ? "room-book-arrow-vector" : ""}`}
            >
              {isVectorStyle ? (
                <div className="arrow-vector"></div>
              ) : (
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/e9cac1e18ae64186984fb4d639c633bc/cbc9000d68e57045a2e2ceb0df8448d2d23eecc9?placeholderIfAbsent=true"
                  className="room-arrow-icon"
                  alt="Arrow"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
