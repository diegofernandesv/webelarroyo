import React, { useRef } from "react";
import RoomCard from "./RoomCard";
import ParallaxContainer from "./ParallaxContainer";
import { useScrollAnimation } from "../hooks/useParallax";
import "./css/RoomsSection.css";

const RoomsSection = () => {
  const { isVisible: titleVisible, elementRef: titleRef } =
    useScrollAnimation(0.2);
  const { isVisible: navVisible, elementRef: navRef } = useScrollAnimation(0.3);
  const { isVisible: cardsVisible, elementRef: cardsRef } =
    useScrollAnimation(0.1);

  const roomsData = [
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/e9cac1e18ae64186984fb4d639c633bc/bb0a7cfa8f105c812bf6fce9a5fdaacb5962f634?placeholderIfAbsent=true",
      amenities: [
        {
          name: "1 Cama",
          icon: "https://cdn.builder.io/api/v1/image/assets/e9cac1e18ae64186984fb4d639c633bc/2d4b0a57ec785cff810effbaad4fdb02d4c92a4a?placeholderIfAbsent=true",
        },
        {
          name: "Smart Tv",
          icon: "https://cdn.builder.io/api/v1/image/assets/e9cac1e18ae64186984fb4d639c633bc/c47973c6e30b904e7164a14d6a67c8710c05f3fc?placeholderIfAbsent=true",
        },
        {
          name: "Smart Tv",
          icon: "https://cdn.builder.io/api/v1/image/assets/e9cac1e18ae64186984fb4d639c633bc/c47973c6e30b904e7164a14d6a67c8710c05f3fc?placeholderIfAbsent=true",
        },
      ],
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/e9cac1e18ae64186984fb4d639c633bc/bb0a7cfa8f105c812bf6fce9a5fdaacb5962f634?placeholderIfAbsent=true",
      amenities: [
        {
          name: "1 Cama",
          icon: "https://cdn.builder.io/api/v1/image/assets/e9cac1e18ae64186984fb4d639c633bc/2d4b0a57ec785cff810effbaad4fdb02d4c92a4a?placeholderIfAbsent=true",
        },
        {
          name: "Smart Tv",
          icon: "https://cdn.builder.io/api/v1/image/assets/e9cac1e18ae64186984fb4d639c633bc/c47973c6e30b904e7164a14d6a67c8710c05f3fc?placeholderIfAbsent=true",
        },
        {
          name: "Smart Tv",
          icon: "https://cdn.builder.io/api/v1/image/assets/e9cac1e18ae64186984fb4d639c633bc/c47973c6e30b904e7164a14d6a67c8710c05f3fc?placeholderIfAbsent=true",
        },
      ],
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/e9cac1e18ae64186984fb4d639c633bc/27ed5d5f5c184350a998540474fd1713d48e6502?placeholderIfAbsent=true",
      amenities: [
        {
          name: "1 Cama",
          icon: "https://cdn.builder.io/api/v1/image/assets/e9cac1e18ae64186984fb4d639c633bc/2d4b0a57ec785cff810effbaad4fdb02d4c92a4a?placeholderIfAbsent=true",
        },
        {
          name: "Smart Tv",
          icon: "https://cdn.builder.io/api/v1/image/assets/e9cac1e18ae64186984fb4d639c633bc/c47973c6e30b904e7164a14d6a67c8710c05f3fc?placeholderIfAbsent=true",
        },
        {
          name: "Smart Tv",
          icon: "https://cdn.builder.io/api/v1/image/assets/e9cac1e18ae64186984fb4d639c633bc/4500ca7887ad8369846a20d1e46ef316804a8f53?placeholderIfAbsent=true",
        },
      ],
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/e9cac1e18ae64186984fb4d639c633bc/d406fb2ce66360bdf62fb0be768dd3d45440201c?placeholderIfAbsent=true",
      amenities: [
        { name: "1 Cama", type: "bed" },
        { name: "Smart Tv", type: "tv" },
        { name: "Smart Tv", type: "tv" },
      ],
      isVectorStyle: true,
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/e9cac1e18ae64186984fb4d639c633bc/d406fb2ce66360bdf62fb0be768dd3d45440201c?placeholderIfAbsent=true",
      amenities: [
        { name: "1 Cama", type: "bed" },
        { name: "Smart Tv", type: "tv" },
        { name: "Smart Tv", type: "tv" },
      ],
      isVectorStyle: true,
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/e9cac1e18ae64186984fb4d639c633bc/d406fb2ce66360bdf62fb0be768dd3d45440201c?placeholderIfAbsent=true",
      amenities: [
        { name: "1 Cama", type: "bed" },
        { name: "Smart Tv", type: "tv" },
        { name: "Smart Tv", type: "tv" },
      ],
      isVectorStyle: true,
    },
  ];

  const cardsContainerRef = useRef(null);

  const scrollAmount = 350; // px, adjust as needed

  const handleScrollLeft = () => {
    if (cardsContainerRef.current) {
      cardsContainerRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
  };

  const handleScrollRight = () => {
    if (cardsContainerRef.current) {
      cardsContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  // Helper to combine refs
  const setCardsContainerRef = (el) => {
    if (typeof cardsRef === "function") {
      cardsRef(el);
    } else if (cardsRef && typeof cardsRef === "object") {
      cardsRef.current = el;
    }
    cardsContainerRef.current = el;
  };

  return (
    <div className="rooms-section-header">
      <div
        ref={titleRef}
        className={`rooms-title scroll-animate-left ${titleVisible ? "animate-in" : ""}`}
      >
        Habitaciones pensadas para tu comodidad
      </div>

      <div
        ref={navRef}
        className={`rooms-navigation scroll-animate-right ${navVisible ? "animate-in" : ""}`}
      >
        <ParallaxContainer speed={0.1}>
          <div className="nav-arrow-button" onClick={handleScrollLeft} tabIndex={0} role="button" aria-label="Scroll left">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/e9cac1e18ae64186984fb4d639c633bc/f238bbac7c3eedbf4a8952de000153f03e35a722?placeholderIfAbsent=true"
              className="nav-arrow"
              alt="Previous"
            />
          </div>
        </ParallaxContainer>

        <ParallaxContainer speed={0.1}>
          <div className="nav-arrow-button" onClick={handleScrollRight} tabIndex={0} role="button" aria-label="Scroll right">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/e9cac1e18ae64186984fb4d639c633bc/c69b2ba1217b00b138d62fe74c00ec49fa305779?placeholderIfAbsent=true"
              className="nav-arrow"
              alt="Next"
            />
          </div>
        </ParallaxContainer>
      </div>

      <div ref={setCardsContainerRef} className="room-cards-container">
        {roomsData.map((room, index) => (
          <div
            key={index}
            className={`room-card-wrapper stagger-animate ${cardsVisible ? "animate-in" : ""} stagger-${(index % 6) + 1}`}
          >
            <ParallaxContainer speed={0.1 + index * 0.05}>
              <RoomCard
                roomImage={room.image}
                amenities={room.amenities}
                isVectorStyle={room.isVectorStyle}
              />
            </ParallaxContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoomsSection;
