import React from 'react'
import { motion } from 'framer-motion'
import { LiquidButton } from '../components/ui/liquid-button'

const products = [
  {
    title: 'Tratamiento Facial Premium',
    description: 'Rejuvenecimiento profundo con tecnología de vanguardia y productos naturales.',
    image: 'https://via.placeholder.com/400x300'
  },
  {
    title: 'Masaje Relajante',
    description: 'Técnicas ancestrales combinadas con aromaterapia para una relajación completa.',
    image: 'https://via.placeholder.com/400x300'
  },
  {
    title: 'Terapia Corporal',
    description: 'Tratamientos especializados para el cuidado integral del cuerpo.',
    image: 'https://via.placeholder.com/400x300'
  },
  {
    title: 'Paquete Bienestar',
    description: 'Experiencia completa de spa con múltiples tratamientos combinados.',
    image: 'https://via.placeholder.com/400x300'
  },
  {
    title: 'Productos Orgánicos',
    description: 'Línea exclusiva de productos naturales para el cuidado en casa.',
    image: 'https://via.placeholder.com/400x300'
  },
  {
    title: 'Tratamientos Especiales',
    description: 'Servicios personalizados según tus necesidades específicas.',
    image: 'https://via.placeholder.com/400x300'
  }
]

export default function Products() {
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
          Nuestros Productos y Servicios
        </h1>
        <p className="text-xl md:text-2xl font-lora text-gris-humo/70 max-w-3xl mx-auto">
          Descubre nuestra selección de tratamientos y productos diseñados para tu bienestar
        </p>
      </motion.div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {products.map((product, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-sal-marina rounded-3xl shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h5 className="text-xl font-bold mb-3 text-gris-humo">{product.title}</h5>
              <p className="font-lato text-gris-humo/70 mb-4">{product.description}</p>
              <LiquidButton variant="primary" size="sm">
                Ver más
              </LiquidButton>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-gradient-to-br from-turquesa-pastel to-lila-rosa rounded-3xl shadow-xl p-8 md:p-12 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gris-humo">
          ¿Listo para una experiencia única?
        </h2>
        <p className="text-xl font-lora text-gris-humo/80 mb-8 max-w-2xl mx-auto">
          Agenda tu cita hoy y descubre el poder transformador de nuestros tratamientos
        </p>
        <LiquidButton variant="secondary" size="lg">
          Reserva Ahora
        </LiquidButton>
      </motion.div>
    </div>
  )
}
