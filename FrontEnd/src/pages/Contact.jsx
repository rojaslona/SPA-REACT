import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
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
    <div className="py-12">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gris-humo">
          Contáctanos
        </h1>
        <p className="text-xl md:text-2xl font-lora text-gris-humo/70">
          Estamos aquí para ayudarte. Envíanos un mensaje o visítanos
        </p>
      </motion.div>

      {/* Contact Form & Info Section */}
      <div className="grid md:grid-cols-2 gap-8 mb-20">
        {/* Form */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-sal-marina rounded-3xl shadow-xl p-8"
        >
          <h3 className="text-2xl font-bold mb-6 text-gris-humo">Envíanos un Mensaje</h3>
          <ContactForm />
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-sal-marina rounded-3xl shadow-xl p-8"
        >
          <h3 className="text-2xl font-bold mb-6 text-gris-humo">Información de Contacto</h3>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-turquesa-pastel flex-shrink-0 mt-1" />
              <div>
                <h5 className="font-bold text-gris-humo mb-2">Dirección</h5>
                <p className="font-lato text-gris-humo/70">
                  Calle Genaro García 357<br />
                  Jardín Balbuena, Venustiano Carranza<br />
                  Ciudad de México, CDMX 15900
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="w-6 h-6 text-turquesa-pastel flex-shrink-0 mt-1" />
              <div>
                <h5 className="font-bold text-gris-humo mb-2">Teléfono</h5>
                <p className="font-lato text-gris-humo/70">+52 55 62 31 63 02</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 text-turquesa-pastel flex-shrink-0 mt-1" />
              <div>
                <h5 className="font-bold text-gris-humo mb-2">Correo Electrónico</h5>
                <p className="font-lato text-gris-humo/70">info@hbspa.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock className="w-6 h-6 text-turquesa-pastel flex-shrink-0 mt-1" />
              <div>
                <h5 className="font-bold text-gris-humo mb-2">Horario de Atención</h5>
                <p className="font-lato text-gris-humo/70">
                  Lunes - Viernes: 9:00 - 20:00<br />
                  Sábado: 10:00 - 18:00<br />
                  Domingo: Cerrado
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gris-humo/10">
            <h5 className="font-bold text-gris-humo mb-4">Vísitanos en nuestras redes sociales:</h5>
            <div className="flex gap-4 justify-center">
              <a
                href="https://www.facebook.com/people/Spa-HB-Jard%C3%ADn-Balbuena/100063493903198/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white border-2 border-turquesa-pastel flex items-center justify-center text-turquesa-pastel hover:bg-turquesa-pastel hover:text-white transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                aria-label="Facebook"
              >
                <i className="bi bi-facebook text-xl" />
              </a>
              <a
                href="https://www.instagram.com/spahyb/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white border-2 border-turquesa-pastel flex items-center justify-center text-turquesa-pastel hover:bg-turquesa-pastel hover:text-white transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                aria-label="Instagram"
              >
                <i className="bi bi-instagram text-xl" />
              </a>
              <a
                href="https://wa.me/5562316302"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white border-2 border-turquesa-pastel flex items-center justify-center text-turquesa-pastel hover:bg-turquesa-pastel hover:text-white transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                aria-label="WhatsApp"
              >
                <i className="bi bi-whatsapp text-xl" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Reviews & Map Section */}
      <div className="space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl font-bold mb-4 text-gris-humo">
            Lo que dicen y dónde estamos
          </h2>
          <p className="text-lg font-lora text-gris-humo/70">
            Lee reseñas reales y encuentra nuestra ubicación con facilidad
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Reviews */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-sal-marina rounded-3xl shadow-xl p-8"
          >
            <h4 className="text-2xl font-bold mb-6 text-gris-humo">Reseñas</h4>
            <div style={{ minHeight: 240 }}>
              <div className="elfsight-app-fe189f22-bf26-437b-aed6-dda28d5e9e47" data-elfsight-app-lazy />
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-sal-marina rounded-3xl shadow-xl p-8"
          >
            <h4 className="text-2xl font-bold mb-6 text-gris-humo">Mapa</h4>
            <div className="relative rounded-2xl overflow-hidden" style={{ paddingBottom: '75%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4347.6446444466565!2d-99.10551055118415!3d19.41044566117988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1fea2dbf56537%3A0x915741ec01026932!2sSpa%20H%26B%20Jard%C3%ADn%20Balbuena!5e0!3m2!1ses-419!2smx!4v1759536085374!5m2!1ses-419!2smx"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
