import React from "react";
import "./css/TestimonialsSection.css";
import "./css/TestimonialCard.css";

const testimonials = [
  {
    avatar:
      "https://cdn.builder.io/api/v1/image/assets/e9cac1e18ae64186984fb4d639c633bc/cff8718ed4f0f5faeabddc91b083554f16cd40dc?placeholderIfAbsent=true",
    name: "Eliza Basanta",
    quote:
      "Muy buena atención y ubicación para hacer cosas en el centro de la ciudad, precios accesibles y personal muy atento a todo, nos ayudaron mucho a poder ubicarnos. Habitaciones y baño limpios y cómodos",
  },
  {
    avatar:
      "https://cdn.builder.io/api/v1/image/assets/e9cac1e18ae64186984fb4d639c633bc/42d8f09ced906ebb8b6db823ce9967994cd5f31a?placeholderIfAbsent=true",
    name: "José Castillo",
    quote:
      "Excelente atención y servicios. Muy atento el personal y el servicio a la habitación. El Uber que facilitan buenísimo. Sin duda alguna uno de los mejores hoteles de Caracas 👍🥇",
  },
  {
    avatar:
      "https://cdn.builder.io/api/v1/image/assets/e9cac1e18ae64186984fb4d639c633bc/b0ca2e855d629dbac76ed839bcec398a560fe57c?placeholderIfAbsent=true",
    name: "Mayra Baez",
    quote:
      "Hotel confortable en el Centro de Caracas, personal super amable, habitaciones cómodas y acogedoras sin duda un lugar donde sentirse como en un segundo hogar.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="testimonials-section">
      {/* Floating Background Effects */}
      <div className="testimonials-bg-elements">
        <div className="bg-element" />
        <div className="bg-element bg-delayed" />
        <div className="bg-element bg-slow" />
      </div>

      <div className="testimonials-container">
        <h2 className="testimonials-title">Confianza basada en <br></br>experiencias reales</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div className="testimonial-card" key={index}>
              <img src={testimonial.avatar} alt={testimonial.name} className="testimonial-avatar" />
              <h3 className="testimonial-name">{testimonial.name}</h3>
              <p className="testimonial-quote">“{testimonial.quote}”</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
