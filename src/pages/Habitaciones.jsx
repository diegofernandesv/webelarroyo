import { useRef, useEffect } from "react";
import "./css/Habitaciones.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Habitaciones = () => {
  const heroContentRef = useRef(null);
  const featuredRoom1Ref = useRef(null);
  const featuredRoom2Ref = useRef(null);
  const gridRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Hero content entrance
      gsap.from(heroContentRef.current, {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power3.out",
        delay: 0.2,
      });

      // First featured room
      gsap.from(featuredRoom1Ref.current, {
        opacity: 0,
        x: -50,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: featuredRoom1Ref.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      // Second featured room (opposite direction)
      gsap.from(featuredRoom2Ref.current, {
        opacity: 0,
        x: 50,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: featuredRoom2Ref.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      // Room grid cards stagger
      if (gridRef.current) {
        const cards = gridRef.current.querySelectorAll(".room-card");
        gsap.from(cards, {
          opacity: 0,
          y: 40,
          stagger: 0.1,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        });
      }

      // CTA
      gsap.from(ctaRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="habitaciones-page">
      {/* Hero Section */}
      <div className="habitaciones-hero">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/6ba9ce5ffcb2d554ec41d879b0652a8274687f81?placeholderIfAbsent=true"
          className="hero-background"
          alt="Hotel Background"
        />
        <div ref={heroContentRef} className="hero-content">
          <h1 className="hero-title">Descansa con nosotros</h1>
          <p className="hero-subtitle">
            Habitaciones cómodas, limpias y acogedoras para cada tipo de viajero.
          </p>
        </div>
      </div>

      {/* Rooms Section */}
      <div className="rooms-container">
        {/* First Featured Room */}
        <div ref={featuredRoom1Ref} className="featured-room">
          <div className="featured-room-content">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/e303756700ff264e5638aed710bbcd13bb2da77a?placeholderIfAbsent=true"
              className="room-background"
              alt="Room Background"
            />
            <div className="room-info">
              <div className="room-badge">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/6d51e68f4cbe2951823ea28c7fbc918e8aa0c722?placeholderIfAbsent=true"
                  className="badge-icon"
                  alt="Capacity"
                />
                <span className="badge-text">2</span>
              </div>
              <h2 className="room-title">Habitación Matrimonial Plus</h2>
              <p className="room-price">desde 40 USD por noche</p>
            </div>
            <button className="room-button">
              Detalles de la Habitación
            </button>
          </div>
        </div>

        {/* Second Featured Room */}
        <div ref={featuredRoom2Ref} className="featured-room reverse">
          <div className="featured-room-content">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/c3ba33d1d89fed1473918cdd7f80500e5e3457d1?placeholderIfAbsent=true"
              className="room-background"
              alt="Room Background"
            />
            <div className="room-info">
              <div className="room-badge">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/f45be4865b76faf9345371c3c9ec41befe3ca2d5?placeholderIfAbsent=true"
                  className="badge-icon"
                  alt="Capacity"
                />
                <span className="badge-text">2</span>
              </div>
              <h2 className="room-title">Mini Suite</h2>
              <p className="room-price">desde 60 USD por noche</p>
            </div>
            <button className="room-button">
              Detalles de la Habitación
            </button>
          </div>
        </div>

        {/* Room Grid */}
        <div ref={gridRef} className="rooms-grid">
          <div className="room-card">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/3ff18d4a0b60ee6eecf8a16cb3fba06aa180e1ea?placeholderIfAbsent=true"
              className="room-card-background"
              alt="Room Background"
            />
            <div className="room-card-content">
              <div className="room-card-info">
                <div className="room-card-badge">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/7cf0c6af66540b5736b649ae5afa1bcc5b1f8471?placeholderIfAbsent=true"
                    className="badge-icon"
                    alt="Capacity"
                  />
                  <span className="badge-text">2</span>
                </div>
                <h3 className="room-card-title">Mini Suite</h3>
                <p className="room-card-price">desde 60 USD por noche</p>
              </div>
              <button className="room-card-button">
                Detalles de la Habitación
              </button>
            </div>
          </div>

          <div className="room-card">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/78d4af9411d5bc69c963265dedfedb7f0ed7de6f?placeholderIfAbsent=true"
              className="room-card-background"
              alt="Room Background"
            />
            <div className="room-card-content">
              <div className="room-card-info">
                <div className="room-card-badge">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/7cf0c6af66540b5736b649ae5afa1bcc5b1f8471?placeholderIfAbsent=true"
                    className="badge-icon"
                    alt="Capacity"
                  />
                  <span className="badge-text">2</span>
                </div>
                <h3 className="room-card-title">Mini Suite</h3>
                <p className="room-card-price">desde 60 USD por noche</p>
              </div>
              <button className="room-card-button">
                Detalles de la Habitación
              </button>
            </div>
          </div>

          <div className="room-card">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/3ff18d4a0b60ee6eecf8a16cb3fba06aa180e1ea?placeholderIfAbsent=true"
              className="room-card-background"
              alt="Room Background"
            />
            <div className="room-card-content">
              <div className="room-card-info">
                <div className="room-card-badge">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/1e74e8c7ac8985377943b249fb7bee554f1f01fe?placeholderIfAbsent=true"
                    className="badge-icon"
                    alt="Capacity"
                  />
                  <span className="badge-text">2</span>
                </div>
                <h3 className="room-card-title">Mini Suite</h3>
                <p className="room-card-price">desde 60 USD por noche</p>
              </div>
              <button className="room-card-button">
                Detalles de la Habitación
              </button>
            </div>
          </div>

          <div className="room-card">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/78d4af9411d5bc69c963265dedfedb7f0ed7de6f?placeholderIfAbsent=true"
              className="room-card-background"
              alt="Room Background"
            />
            <div className="room-card-content">
              <div className="room-card-info">
                <div className="room-card-badge">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/1e74e8c7ac8985377943b249fb7bee554f1f01fe?placeholderIfAbsent=true"
                    className="badge-icon"
                    alt="Capacity"
                  />
                  <span className="badge-text">2</span>
                </div>
                <h3 className="room-card-title">Mini Suite</h3>
                <p className="room-card-price">desde 60 USD por noche</p>
              </div>
              <button className="room-card-button">
                Detalles de la Habitación
              </button>
            </div>
          </div>

          <div className="room-card">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/78d4af9411d5bc69c963265dedfedb7f0ed7de6f?placeholderIfAbsent=true"
              className="room-card-background"
              alt="Room Background"
            />
            <div className="room-card-content">
              <div className="room-card-info">
                <div className="room-card-badge">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/1e74e8c7ac8985377943b249fb7bee554f1f01fe?placeholderIfAbsent=true"
                    className="badge-icon"
                    alt="Capacity"
                  />
                  <span className="badge-text">2</span>
                </div>
                <h3 className="room-card-title">Mini Suite</h3>
                <p className="room-card-price">desde 60 USD por noche</p>
              </div>
              <button className="room-card-button">
                Detalles de la Habitación
              </button>
            </div>
          </div>

          <div className="room-card">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/3ff18d4a0b60ee6eecf8a16cb3fba06aa180e1ea?placeholderIfAbsent=true"
              className="room-card-background"
              alt="Room Background"
            />
            <div className="room-card-content">
              <div className="room-card-info">
                <div className="room-card-badge">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/1e74e8c7ac8985377943b249fb7bee554f1f01fe?placeholderIfAbsent=true"
                    className="badge-icon"
                    alt="Capacity"
                  />
                  <span className="badge-text">2</span>
                </div>
                <h3 className="room-card-title">Mini Suite</h3>
                <p className="room-card-price">desde 60 USD por noche</p>
              </div>
              <button className="room-card-button">
                Detalles de la Habitación
              </button>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div ref={ctaRef} className="cta-section">
          <h2 className="cta-title">¿Listo para tu estadía perfecta en Caracas?</h2>
          <button className="cta-button">
            <span className="cta-text">Reserva Ya</span>
            <div className="cta-arrow">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/1b4c68bce3c0d4729d400617bf6bc18adb451840?placeholderIfAbsent=true"
                className="arrow-icon"
                alt="Arrow"
              />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Habitaciones;
