import { useRef, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import { Link } from "react-router-dom";
import "./css/RingCTASection.css";

const texts = {
  ES: {
    title: "¿Todo listo para hacer tu reserva?",
    button: "Reserva ya",
  },
  EN: {
    title: "Ready to make your reservation?",
    button: "Book now",
  },
};

const images = [
  { src: "https://images.unsplash.com/photo-1505515888495-c1897b0b5740?w=700&h=900&fit=crop", alt: "Building" },
  { src: "https://images.unsplash.com/photo-1521464302861-ce943915d1c3?w=700&h=900&fit=crop", alt: "Golden Gate" },
  { src: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=700&h=900&fit=crop", alt: "Flowers" },
  { src: "https://images.unsplash.com/photo-1496293455970-f8581aae0e3b?w=700&h=900&fit=crop", alt: "Turntable" },
  { src: "https://images.unsplash.com/photo-1517784229726-7b866d820438?w=700&h=900&fit=crop", alt: "Penguins" },
  { src: "https://images.unsplash.com/photo-1481414981591-5732874c7193?w=700&h=900&fit=crop", alt: "Stairs" },
  { src: "https://images.unsplash.com/photo-1625794084867-8ddd239946b1?w=700&h=900&fit=crop", alt: "Dog" },
  { src: "https://images.unsplash.com/photo-1504275107627-0c2ba7a43dba?w=700&h=900&fit=crop", alt: "Lockers" },
  { src: "https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?w=700&h=900&fit=crop", alt: "Monkey" },
  { src: "https://images.unsplash.com/photo-1580137189272-c9379f8864fd?w=700&h=900&fit=crop", alt: "Mountains" },
  { src: "https://images.unsplash.com/photo-1532798210189-ca8e366884b9?w=700&h=900&fit=crop", alt: "Building" },
  { src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=700&h=900&fit=crop", alt: "Mountain lake" },
  { src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=700&h=900&fit=crop", alt: "Sunlight forest" },
  { src: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=700&h=900&fit=crop", alt: "Lakeside" },
  { src: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=700&h=900&fit=crop", alt: "Waterfall" },
  { src: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=700&h=900&fit=crop", alt: "Aerial mountains" },
  { src: "https://images.unsplash.com/photo-1518791841217-8f162f1912da?w=700&h=900&fit=crop", alt: "Cat" },
  { src: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=700&h=900&fit=crop", alt: "Sneakers" },
  { src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=700&h=900&fit=crop", alt: "Food" },
  { src: "https://images.unsplash.com/photo-1493770348161-369560ae357d?w=700&h=900&fit=crop", alt: "Breakfast" },
  { src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=700&h=900&fit=crop", alt: "Restaurant" },
];

// Auto-scroll speed: percentage points per second (negative = left)
const AUTO_SPEED = 4;

const RingCTASection = () => {
  const { language } = useLanguage();
  const t = texts[language];
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let percentage = 0;
    let isDragging = false;
    let mouseDownAt = 0;
    let prevPercentage = 0;
    let rafId = null;
    let lastTime = null;

    const applyPercentage = (pct, animDuration = 0) => {
      if (animDuration > 0) {
        track.animate(
          { transform: `translate(${pct}%, -50%)` },
          { duration: animDuration, fill: "forwards" }
        );
        for (const image of track.getElementsByClassName("rcs-track-image")) {
          image.animate(
            { objectPosition: `${100 + pct}% center` },
            { duration: animDuration, fill: "forwards" }
          );
        }
      } else {
        track.style.transform = `translate(${pct}%, -50%)`;
        for (const image of track.getElementsByClassName("rcs-track-image")) {
          image.style.objectPosition = `${100 + pct}% center`;
        }
      }
    };

    // Auto-scroll loop
    const tick = (timestamp) => {
      if (!isDragging) {
        if (lastTime !== null) {
          const delta = (timestamp - lastTime) / 1000; // seconds
          percentage -= AUTO_SPEED * delta;
          // Loop back to 0 when we reach -100
          if (percentage < -100) percentage = 0;
          applyPercentage(percentage);
        }
        lastTime = timestamp;
      } else {
        lastTime = null; // reset so we don't jump on resume
      }
      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);

    // Drag handlers
    const handleOnDown = (clientX) => {
      isDragging = true;
      mouseDownAt = clientX;
      prevPercentage = percentage;
    };

    const handleOnUp = () => {
      isDragging = false;
      prevPercentage = percentage;
    };

    const handleOnMove = (clientX) => {
      if (!isDragging) return;

      const mouseDelta = mouseDownAt - clientX;
      const maxDelta = window.innerWidth / 2;
      const pct = (mouseDelta / maxDelta) * -100;
      const next = Math.max(Math.min(prevPercentage + pct, 0), -100);

      percentage = next;
      applyPercentage(percentage, 1200);
    };

    const onMouseDown = (e) => handleOnDown(e.clientX);
    const onTouchStart = (e) => handleOnDown(e.touches[0].clientX);
    const onMouseUp = () => handleOnUp();
    const onTouchEnd = () => handleOnUp();
    const onMouseMove = (e) => handleOnMove(e.clientX);
    const onTouchMove = (e) => handleOnMove(e.touches[0].clientX);

    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("touchstart", onTouchStart);
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("touchend", onTouchEnd);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("touchmove", onTouchMove);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("touchend", onTouchEnd);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("touchmove", onTouchMove);
    };
  }, []);

  return (
    <section className="rcs-section">
      <h2 className="rcs-title">{t.title}</h2>

      <div className="rcs-track-wrapper">
        <div ref={trackRef} className="rcs-track">
          {images.map((img, i) => (
            <img
              key={i}
              className="rcs-track-image"
              src={img.src}
              alt={img.alt}
              draggable="false"
            />
          ))}
        </div>
      </div>

      <Link to="/contacto" className="rcs-button">
        {t.button}
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      </Link>
    </section>
  );
};

export default RingCTASection;
