import React, { useState } from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Textarea } from './ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'
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
  
  const handleSelectChange = (value) => {
    setFormData(prev => ({ ...prev, subject: value }))
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
        <div className="space-y-2">
          <Label htmlFor="name">Nombre Completo *</Label>
          <Input
            type="text"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="font-lato"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Correo Electrónico *</Label>
          <Input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="font-lato"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Teléfono (Opcional)</Label>
          <Input
            type="tel"
            id="phone"
            value={formData.phone}
            onChange={handleChange}
            className="font-lato"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="subject">Asunto *</Label>
          <Select value={formData.subject} onValueChange={handleSelectChange} required>
            <SelectTrigger className="font-lato">
              <SelectValue placeholder="Seleccionar asunto..." />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="info">Información General</SelectItem>
              <SelectItem value="reserva">Reservación</SelectItem>
              <SelectItem value="productos">Consulta sobre Productos</SelectItem>
              <SelectItem value="queja">Queja o Sugerencia</SelectItem>
              <SelectItem value="otro">Otro</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">Mensaje *</Label>
          <Textarea
            id="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            required
            className="font-lato"
          />
        </div>

        <Button type="submit" className="w-full" size="lg">
          <i className="bi bi-send-fill mr-2" /> Enviar Mensaje
        </Button>

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
            <p className="text-sm text-muted-foreground font-lato mb-3">Si el envío automático falla, puedes enviar el mensaje manualmente a:</p>
            <Button 
              variant="outline" 
              onClick={() => window.open(makeMailto(), '_blank')}
            >
              Enviar por correo
            </Button>
          </div>
        )}
      </form>
    </div>
  )
}
