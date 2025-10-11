import React, { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [status, setStatus] = useState(null) // 'success' | 'error' | null
  const [showFallback, setShowFallback] = useState(false)

  const handleChange = (e) => {
    const { id, value } = e.target
    setFormData(prev => ({ ...prev, [id]: value }))
  }

  const validateForm = () => {
    // basic validation similar to original validation.js intent
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
    } catch (err) {
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
      <form id="contactForm" onSubmit={handleSubmit} noValidate>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Nombre Completo *</label>
          <input type="text" className="form-control" id="name" value={formData.name} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Correo Electrónico *</label>
          <input type="email" className="form-control" id="email" value={formData.email} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Teléfono (Opcional)</label>
          <input type="tel" className="form-control" id="phone" value={formData.phone} onChange={handleChange} />
        </div>

        <div className="mb-3">
          <label htmlFor="subject" className="form-label">Asunto *</label>
          <select className="form-select" id="subject" value={formData.subject} onChange={handleChange} required>
            <option value="">Seleccionar asunto...</option>
            <option value="info">Información General</option>
            <option value="reserva">Reservación</option>
            <option value="productos">Consulta sobre Productos</option>
            <option value="queja">Queja o Sugerencia</option>
            <option value="otro">Otro</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="message" className="form-label">Mensaje *</label>
          <textarea className="form-control" id="message" rows="3" value={formData.message} onChange={handleChange} required />
        </div>

        <button type="submit" className="btn btn-primary btn-lg w-100"><i className="bi bi-send-fill me-2" /> Enviar Mensaje</button>

        {status && status.type === 'success' && (
          <div className="alert alert-success mt-3">{status.message}</div>
        )}
        {status && status.type === 'error' && (
          <div className="alert alert-danger mt-3">{status.message}</div>
        )}

        {showFallback && (
          <div className="mt-3">
            <p className="small text-muted">Si el envío automático falla, puedes enviar el mensaje manualmente a:</p>
            <a className="btn btn-outline-secondary" href={makeMailto()} target="_blank" rel="noopener noreferrer">Enviar por correo</a>
          </div>
        )}
      </form>
    </div>
  )
}
