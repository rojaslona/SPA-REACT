import React, { useState } from 'react'
import { LiquidButton } from './ui/liquid-button'
import { motion } from 'framer-motion'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [status, setStatus] = useState(null)
  const [showFallback, setShowFallback] = useState(false)

  const handleChange = (e) => {
    const { id, value } = e.target
    setFormData(prev => ({ ...prev, [id]: value }))
  }

  const validateForm = () => {
    if (!formData.name.trim()) return { valid: false, field: 'name', msg: 'El nombre es requerido.' }
    if (!formData.email.trim() || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(formData.email)) return { valid: false, field: 'email', msg: 'Correo inválido.' }
    if (!formData.subject) return { valid: false, field: 'subject', msg: 'Selecciona un asunto.' }
    if (!formData.message.trim()) return { valid: false, field: 'message', msg: 'Escribe un mensaje.' }
    return { valid: true }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus(null)
    setShowFallback(false)
    const v = validateForm()
    if (!v.valid) {
      setStatus({ type: 'error', message: v.msg })
      return
    }

    const params = new URLSearchParams()
    params.append('para', 'cuartodeunvago@gmail.com')
    params.append('asunto', formData.subject)
    params.append('mensaje', `Nombre: ${formData.name}\nCorreo: ${formData.email}\nTeléfono: ${formData.phone}\nAsunto: ${formData.subject}\nMensaje: ${formData.message}`)

    try {
      const res = await fetch('http://localhost:8080/api/email/enviar', {
        method: 'POST',
        body: params
      })
      if (res.ok) {
        setStatus({ type: 'success', message: '¡Tu mensaje ha sido enviado correctamente!' })
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
      } else {
        setStatus({ type: 'error', message: 'Ocurrió un error al enviar el mensaje.' })
        setShowFallback(true)
      }
    } catch {
      setStatus({ type: 'error', message: 'Error de conexión. Inténtalo de nuevo.' })
      setShowFallback(true)
    }
  }

  const makeMailto = () => {
    const to = 'cuartodeunvago@gmail.com'
    const subject = encodeURIComponent(formData.subject || 'Contacto H&B SPA')
    const body = encodeURIComponent(`Nombre: ${formData.name}\nCorreo: ${formData.email}\nTeléfono: ${formData.phone}\nAsunto: ${formData.subject}\nMensaje: ${formData.message}`)
    return `mailto:${to}?subject=${subject}&body=${body}`
  }

  return (
    <div>
      <form id="contactForm" onSubmit={handleSubmit} noValidate className="space-y-4">
        <div>
          <label htmlFor="name" className="block font-lato font-medium text-gris-humo mb-2">Nombre Completo *</label>
          <input 
            type="text" 
            className="w-full px-4 py-3 rounded-xl border-2 border-sal-marina focus:border-turquesa-pastel focus:outline-none transition-colors font-lato" 
            id="name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
          />
        </div>

        <div>
          <label htmlFor="email" className="block font-lato font-medium text-gris-humo mb-2">Correo Electrónico *</label>
          <input 
            type="email" 
            className="w-full px-4 py-3 rounded-xl border-2 border-sal-marina focus:border-turquesa-pastel focus:outline-none transition-colors font-lato" 
            id="email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
          />
        </div>

        <div>
          <label htmlFor="phone" className="block font-lato font-medium text-gris-humo mb-2">Teléfono (Opcional)</label>
          <input 
            type="tel" 
            className="w-full px-4 py-3 rounded-xl border-2 border-sal-marina focus:border-turquesa-pastel focus:outline-none transition-colors font-lato" 
            id="phone" 
            value={formData.phone} 
            onChange={handleChange} 
          />
        </div>

        <div>
          <label htmlFor="subject" className="block font-lato font-medium text-gris-humo mb-2">Asunto *</label>
          <select 
            className="w-full px-4 py-3 rounded-xl border-2 border-sal-marina focus:border-turquesa-pastel focus:outline-none transition-colors font-lato" 
            id="subject" 
            value={formData.subject} 
            onChange={handleChange} 
            required
          >
            <option value="">Seleccionar asunto...</option>
            <option value="info">Información General</option>
            <option value="reserva">Reservación</option>
            <option value="productos">Consulta sobre Productos</option>
            <option value="queja">Queja o Sugerencia</option>
            <option value="otro">Otro</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block font-lato font-medium text-gris-humo mb-2">Mensaje *</label>
          <textarea 
            className="w-full px-4 py-3 rounded-xl border-2 border-sal-marina focus:border-turquesa-pastel focus:outline-none transition-colors font-lato resize-none" 
            id="message" 
            rows="4" 
            value={formData.message} 
            onChange={handleChange} 
            required 
          />
        </div>

        <LiquidButton type="submit" className="w-full" size="lg">
          <i className="bi bi-send-fill mr-2" /> Enviar Mensaje
        </LiquidButton>

        {status && status.type === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-turquesa-pastel/20 border-2 border-turquesa-pastel rounded-xl p-4 text-gris-humo font-lato"
          >
            {status.message}
          </motion.div>
        )}
        {status && status.type === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-rosa-petalo/50 border-2 border-rosa-petalo rounded-xl p-4 text-gris-humo font-lato"
          >
            {status.message}
          </motion.div>
        )}

        {showFallback && (
          <div className="mt-4">
            <p className="text-sm text-gris-humo/70 font-lato mb-3">Si el envío automático falla, puedes enviar el mensaje manualmente a:</p>
            <LiquidButton 
              variant="outline" 
              onClick={() => window.open(makeMailto(), '_blank')}
            >
              Enviar por correo
            </LiquidButton>
          </div>
        )}
      </form>
    </div>
  )
}
