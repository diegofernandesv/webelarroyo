import React from "react";

const Contacto = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <div className="page-hero">
          <h1 className="page-title">Contáctanos</h1>
          <p className="page-subtitle">
            Estamos aquí para ayudarte. Ponte en contacto con nosotros
          </p>
        </div>
      </div>

      <div className="contact-section">
        <div className="contact-container">
          <div className="contact-info">
            <h2 className="section-title">Información de Contacto</h2>

            <div className="contact-item">
              <h3>WhatsApp</h3>
              <p>+58 4141501515</p>
              <a href="https://wa.me/584141501515" className="contact-link">
                Enviar mensaje
              </a>
            </div>

            <div className="contact-item">
              <h3>Dirección</h3>
              <p>
                Av Lecuna, Frente al Metro Teatros
                <br />
                Centro de Caracas, Venezuela
              </p>
            </div>

            <div className="contact-item">
              <h3>Horario de Atención</h3>
              <p>
                Recepción: 24 horas
                <br />
                Todos los días del año
              </p>
            </div>

            <div className="contact-item">
              <h3>Oficina en USA</h3>
              <p>
                FERCAT INVESTMENT LLC
                <br />
                12211 Regency Village Drive
                <br />
                Orlando, FL 32821
              </p>
            </div>
          </div>

          <div className="contact-form">
            <h2 className="section-title">Envíanos un Mensaje</h2>
            <form className="form">
              <div className="form-group">
                <label htmlFor="name">Nombre Completo</label>
                <input type="text" id="name" name="name" required />
              </div>

              <div className="form-group">
                <label htmlFor="email">Correo Electrónico</label>
                <input type="email" id="email" name="email" required />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Teléfono</label>
                <input type="tel" id="phone" name="phone" />
              </div>

              <div className="form-group">
                <label htmlFor="checkin">Fecha de Llegada</label>
                <input type="date" id="checkin" name="checkin" />
              </div>

              <div className="form-group">
                <label htmlFor="checkout">Fecha de Salida</label>
                <input type="date" id="checkout" name="checkout" />
              </div>

              <div className="form-group">
                <label htmlFor="message">Mensaje</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Cuéntanos sobre tu estad��a..."
                ></textarea>
              </div>

              <button type="submit" className="submit-button">
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
