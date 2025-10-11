import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="site-footer bg-light pt-4 pb-3" role="contentinfo">
      <div className="container">
        <div className="d-flex justify-content-evenly flex-wrap text-center text-md-start">
          <div className="mb-4">
            <h5 className="fw-bold mb-3">H&B SPA Jardín Balbuena</h5>
            <p className="text-muted">Tu refugio de belleza y bienestar desde 2015.</p>
            <p className="text-muted mb-1"><i className="bi bi-geo-alt-fill"></i> Jardín Balbuena, CDMX</p>
            <p className="text-muted mb-1"><i className="bi bi-telephone-fill"></i> (55) 1234-5678</p>
            <p className="text-muted"><i className="bi bi-envelope-fill"></i> contacto@hbspa.com</p>
          </div>

          <div className="mb-4">
            <h5 className="fw-bold mb-3">Enlaces Rápidos</h5>
            <ul className="footer-nav list-unstyled">
              <li className="mb-2"><Link to="/" className="footer-link text-muted text-decoration-none">Inicio</Link></li>
              <li className="mb-2"><Link to="/products" className="footer-link text-muted text-decoration-none">Productos</Link></li>
              <li className="mb-2"><Link to="/reserve" className="footer-link text-muted text-decoration-none">Reserva</Link></li>
              <li className="mb-2"><Link to="/about" className="footer-link text-muted text-decoration-none">Acerca de Nosotros</Link></li>
              <li className="mb-2"><Link to="/contact" className="footer-link text-muted text-decoration-none">Contacto</Link></li>
            </ul>
          </div>

          <div className="mb-4">
            <h5 className="fw-bold mb-3">Síguenos</h5>
            <div className="d-flex justify-content-start gap-3 mb-3">
              <a href="https://wa.me/5562316302" target="_blank" rel="noopener" className="text-muted fs-4 text-decoration-none" aria-label="WhatsApp"><i className="bi bi-whatsapp"></i></a>
              <a href="https://www.facebook.com/share/1AezGeWWhd/" target="_blank" rel="noopener" className="text-muted fs-4 text-decoration-none" aria-label="Facebook"><i className="bi bi-facebook"></i></a>
              <a href="https://www.instagram.com/spahyb?igsh=c2ttcnhuY2k1N2F3" target="_blank" rel="noopener" className="text-muted fs-4 text-decoration-none" aria-label="Instagram"><i className="bi bi-instagram"></i></a>
            </div>
            <h6 className="fw-bold mt-4 mb-2">Horarios</h6>
            <ul className="list-unstyled text-muted mb-0">
              <li>Lunes - Viernes: 9:00 AM - 8:00 PM</li>
              <li>Sábado: 10:00 AM - 6:00 PM</li>
              <li>Domingo: Cerrado</li>
            </ul>
          </div>
        </div>

        <hr className="my-4" />
        <div className="row">
          <div className="col-12 text-center">
            <p className="text-muted mb-0">&copy; 2025 H&B SPA Jardín Balbuena. Todos los derechos reservados.</p>
            <p className="text-muted small mb-0">
              <a href="#" className="footer-link text-muted text-decoration-none">Política de Privacidad</a> |
              <a href="#" className="footer-link text-muted text-decoration-none"> Términos y Condiciones</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
