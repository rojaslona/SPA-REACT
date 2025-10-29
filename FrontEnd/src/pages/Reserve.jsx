import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, Clock, User, Phone, Mail } from 'lucide-react'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Label } from '../components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select'
import { Card } from '../components/ui/card'

export default function Reserve() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: ''
  })

  const handleChange = (e) => {
    const { id, value } = e.target
    setFormData(prev => ({ ...prev, [id]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission - this would integrate with backend
    console.log('Reserva:', formData)
    alert('¡Gracias por tu reserva! Te contactaremos pronto para confirmar.')
  }

  const services = [
    'Masaje Relajante',
    'Facial Premium',
    'Tratamiento Corporal',
    'Paquete Bienestar',
    'Manicure y Pedicure',
    'Otro (especificar en comentarios)'
  ]

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
          Reserva tu Cita
        </h1>
        <p className="text-xl md:text-2xl font-lora text-gris-humo/70 max-w-3xl mx-auto">
          Agenda tu servicio de spa y bienestar fácilmente. Nos pondremos en contacto para confirmar
        </p>
      </motion.div>

      {/* Reservation Form */}
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-sal-marina rounded-3xl shadow-xl p-8 md:p-12"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Name */}
              <div className="space-y-2">
                <Label htmlFor="name" className="flex items-center gap-2">
                  <User className="w-4 h-4 text-turquesa-pastel" />
                  Nombre Completo *
                </Label>
                <Input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Tu nombre"
                  className="font-lato"
                />
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <Label htmlFor="phone" className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-turquesa-pastel" />
                  Teléfono *
                </Label>
                <Input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="+52 55 1234 5678"
                  className="font-lato"
                />
              </div>
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email" className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-turquesa-pastel" />
                Correo Electrónico *
              </Label>
              <Input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="tu@email.com"
                className="font-lato"
              />
            </div>

            {/* Service */}
            <div className="space-y-2">
              <Label htmlFor="service">Servicio Deseado *</Label>
              <Select value={formData.service} onValueChange={(value) => setFormData(prev => ({ ...prev, service: value }))} required>
                <SelectTrigger className="font-lato">
                  <SelectValue placeholder="Selecciona un servicio..." />
                </SelectTrigger>
                <SelectContent>
                  {services.map((service, index) => (
                    <SelectItem key={index} value={service}>
                      {service}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Date */}
              <div className="space-y-2">
                <Label htmlFor="date" className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-turquesa-pastel" />
                  Fecha Preferida *
                </Label>
                <Input
                  type="date"
                  id="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="font-lato"
                />
              </div>

              {/* Time */}
              <div className="space-y-2">
                <Label htmlFor="time" className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-turquesa-pastel" />
                  Hora Preferida *
                </Label>
                <Input
                  type="time"
                  id="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                  className="font-lato"
                />
              </div>
            </div>

            <div className="pt-4">
              <Button type="submit" className="w-full" size="lg">
                <i className="bi bi-calendar-check mr-2" /> Confirmar Reserva
              </Button>
            </div>
          </form>

          <div className="mt-8 pt-8 border-t border-gris-humo/10">
            <p className="text-center font-lato text-gris-humo/70 text-sm">
              Al enviar esta reserva, recibirás una confirmación por correo electrónico.<br />
              Para cambios o cancelaciones, contáctanos al +52 55 62 31 63 02
            </p>
          </div>
        </motion.div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {[
            {
              icon: 'bi-clock-history',
              title: 'Flexible',
              desc: 'Horarios adaptados a tus necesidades'
            },
            {
              icon: 'bi-shield-check',
              title: 'Seguro',
              desc: 'Protocolos de higiene certificados'
            },
            {
              icon: 'bi-star-fill',
              title: 'Calidad',
              desc: 'Profesionales altamente capacitados'
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              className="bg-gradient-to-br from-turquesa-pastel to-lila-rosa rounded-2xl p-6 text-center shadow-lg"
            >
              <i className={`bi ${item.icon} text-5xl text-gris-humo mb-3 block`}></i>
              <h4 className="font-bold text-gris-humo mb-2">{item.title}</h4>
              <p className="font-lato text-sm text-gris-humo/80">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
