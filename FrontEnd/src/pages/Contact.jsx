import React, { useEffect } from 'react'
import ContactForm from '../components/ContactForm'

export default function Contact() {
  useEffect(() => {
    // dynamically load Elfsight platform script if not already present
    const id = 'elfsight-platform-script'
    if (!document.getElementById(id)) {
      const s = document.createElement('script')
      s.src = 'https://elfsightcdn.com/platform.js'
      s.async = true
      s.id = id
      document.body.appendChild(s)
    }
  }, [])

  return (
    <div className="pt-5 pb-3">
      <div className="container">
        <div className="text-center mb-4">
          <h1 className="display-4 fw-bold mb-3 section-title">Contáctanos</h1>
        </div>
        {/* align items so both cards stretch to same height */}
        <div className="row g-5 align-items-stretch">
          <div className="col-lg-6 d-flex">
            <div className="card border-0 shadow-sm w-100 h-100">
              <div className="card-body p-4 d-flex flex-column">
                <h3 className="mb-4">Envíanos un Mensaje</h3>
                <ContactForm />
              </div>
            </div>
          </div>
          <div className="col-lg-6 d-flex">
            <div className="card border-0 shadow-sm w-100 h-100">
              <div className="card-body p-4 d-flex flex-column">
                <h3 className="mb-4">Información de Contacto</h3>
                <div className="mb-4">
                  <div className="d-flex align-items-start mb-3">
                    <i className="bi bi-geo-alt-fill fs-4 text-accent-teal me-3" />
                    <div>
                      <h5>Dirección</h5>
                      <p className="text-muted mb-0">
                        Calle Genaro García 357<br />
                        Jardín Balbuena,Venustiano Carranza<br />
                        Ciudad de México, CDMX 15900
                      </p>
                    </div>
                  </div>
                  <div className="d-flex align-items-start mb-3">
                    <i className="bi bi-telephone-fill fs-4 text-accent-teal me-3" />
                    <div>
                      <h5>Teléfono </h5>
                      <p className="text-muted mb-0">+52 55 62 31 63 02</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-start mb-3">
                    <i className="bi bi-envelope-fill fs-4 text-accent-teal me-3" />
                    <div>
                      <h5>Correo Electrónico</h5>
                      <p className="text-muted mb-0">info@hbspa.com</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-start mb-3">
                    <i className="bi bi-clock-fill fs-4 text-accent-teal me-3" />
                    <div>
                      <h5>Horario de Atención</h5>
                      <p className="text-muted mb-0">Lunes - Viernes: 9:00 - 20:00</p>
                      <p className="text-muted mb-0">Sábado: 10:00 - 18:00</p>
                      <p className="text-muted mb-0">Domingo: Cerrado</p>
                    </div>
                  </div>
                </div>
                <h5>Vísitanos en nuestras redes sociales:</h5>
                <div className="d-flex gap-3 mb-0 mt-auto justify-content-center">
                  <a href="https://www.facebook.com/people/Spa-HB-Jard%C3%ADn-Balbuena/100063493903198/?ref=_xav_ig_profile_page_web_bt#" className="btn btn-outline-primary" target="_blank" rel="noopener" aria-label="Facebook">
                    <i className="bi bi-facebook fs-5 social-icon" />
                  </a>
                  <a href="https://www.instagram.com/spahyb/" target="_blank" className="btn btn-outline-primary" aria-label="Instagram">
                    <i className="bi bi-instagram fs-5 social-icon" />
                  </a>
                  <a href="https://wa.me/5562316302" target="_blank" className="btn btn-outline-primary" aria-label="WhatsApp">
                    <i className="bi bi-whatsapp fs-5 social-icon" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-5">
        <div className="container">
          <div className="text-center mb-4">
            <h5 className="display-6 fw-bold mb-2 section-title">Lo que dicen y dónde estamos</h5>
            <p className="text-muted mb-0">Lee reseñas reales y encuentra nuestra ubicación con facilidad</p>
          </div>
          {/* emphasized blocks: reviews and map side-by-side */}
          <div className="row g-4 align-items-stretch">
            <div className="col-lg-6 d-flex">
              <div className="info-block emphasis w-100 h-100 p-4">
                <h4 className="mb-3">Reseñas</h4>
                {/* elfsight widget placeholder — platform script is loaded dynamically */}
                <div style={{ minHeight: 240 }}>
                  <div className="elfsight-app-fe189f22-bf26-437b-aed6-dda28d5e9e47" data-elfsight-app-lazy />
                </div>
              </div>
            </div>
            <div className="col-lg-6 d-flex">
              <div className="info-block emphasis w-100 h-100 p-4">
                <h4 className="mb-3">Mapa</h4>
                <div className="ratio ratio-4x3">
                  <iframe className="mapa-redondeado" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4347.6446444466565!2d-99.10551055118415!3d19.41044566117988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1fea2dbf56537%3A0x915741ec01026932!2sSpa%20H%26B%20Jard%C3%ADn%20Balbuena!5e0!3m2!1ses-419!2smx!4v1759536085374!5m2!1ses-419!2smx" width="600" height="450" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
