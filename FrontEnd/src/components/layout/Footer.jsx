import React from 'react'
import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-arena-suave/85 backdrop-blur-custom border-t border-gris-humo/10 shadow-lg mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Company Info */}
          <div className="space-y-4">
            <h5 className="font-cormorant font-bold text-xl text-gris-humo">
              H&B SPA Jardín Balbuena
            </h5>
            <p className="font-lato text-gris-humo/70">
              Tu refugio de belleza y bienestar desde 2015.
            </p>
            <div className="space-y-2 font-lato text-sm text-gris-humo/70">
              <div className="flex items-center justify-center md:justify-start gap-2">
                <MapPin className="w-4 h-4 text-turquesa-pastel" />
                <span>Jardín Balbuena, CDMX</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2">
                <Phone className="w-4 h-4 text-turquesa-pastel" />
                <span>(55) 1234-5678</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2">
                <Mail className="w-4 h-4 text-turquesa-pastel" />
                <span>contacto@hbspa.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h5 className="font-cormorant font-bold text-xl text-gris-humo">
              Enlaces Rápidos
            </h5>
            <ul className="space-y-2 font-lato">
              {[
                { to: '/', label: 'Inicio' },
                { to: '/products', label: 'Productos' },
                { to: '/reserve', label: 'Reserva' },
                { to: '/about', label: 'Acerca de Nosotros' },
                { to: '/contact', label: 'Contacto' },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="relative inline-block text-gris-humo/70 hover:text-turquesa-pastel transition-colors duration-200 group"
                  >
                    {link.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-turquesa-pastel to-lila-rosa transition-all duration-300 group-hover:w-full" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Hours */}
          <div className="space-y-4">
            <h5 className="font-cormorant font-bold text-xl text-gris-humo">
              Síguenos
            </h5>
            <div className="flex justify-center md:justify-start gap-4">
              <a
                href="https://wa.me/5562316302"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-sal-marina flex items-center justify-center text-gris-humo hover:bg-turquesa-pastel hover:text-white transition-all duration-300 hover:scale-110 hover:-translate-y-1 shadow-md"
                aria-label="WhatsApp"
              >
                <i className="bi bi-whatsapp text-xl"></i>
              </a>
              <a
                href="https://www.facebook.com/share/1AezGeWWhd/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-sal-marina flex items-center justify-center text-gris-humo hover:bg-turquesa-pastel hover:text-white transition-all duration-300 hover:scale-110 hover:-translate-y-1 shadow-md"
                aria-label="Facebook"
              >
                <i className="bi bi-facebook text-xl"></i>
              </a>
              <a
                href="https://www.instagram.com/spahyb?igsh=c2ttcnhuY2k1N2F3"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-sal-marina flex items-center justify-center text-gris-humo hover:bg-turquesa-pastel hover:text-white transition-all duration-300 hover:scale-110 hover:-translate-y-1 shadow-md"
                aria-label="Instagram"
              >
                <i className="bi bi-instagram text-xl"></i>
              </a>
            </div>
            <div className="space-y-2">
              <h6 className="font-cormorant font-bold text-gris-humo">Horarios</h6>
              <ul className="font-lato text-sm text-gris-humo/70 space-y-1">
                <li>Lunes - Viernes: 9:00 AM - 8:00 PM</li>
                <li>Sábado: 10:00 AM - 6:00 PM</li>
                <li>Domingo: Cerrado</li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="my-8 border-gris-humo/10" />

        <div className="text-center space-y-2">
          <p className="font-lato text-sm text-gris-humo/70">
            &copy; 2025 H&B SPA Jardín Balbuena. Todos los derechos reservados.
          </p>
          <p className="font-lato text-xs text-gris-humo/60">
            <a href="#" className="hover:text-turquesa-pastel transition-colors">
              Política de Privacidad
            </a>
            {' | '}
            <a href="#" className="hover:text-turquesa-pastel transition-colors">
              Términos y Condiciones
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
