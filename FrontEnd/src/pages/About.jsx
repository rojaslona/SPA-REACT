import React, { useState } from 'react'
import Carousel3D from '../components/Carousel3D'
import { Card, CardContent } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    quote: "El mejor spa que he visitado. El trato es excepcional y siempre salgo renovada.",
    name: "María González",
    title: "Cliente desde 2018",
  },
  {
    quote: "Los masajes son increíbles y el ambiente es muy relajante. ¡Totalmente recomendado!",
    name: "Ana Martínez",
    title: "Cliente frecuente",
  },
  {
    quote: "Profesionales expertos y tratamientos de primera calidad. Me siento en buenas manos.",
    name: "Laura Sánchez",
    title: "Cliente desde 2020",
  }
]

export default function About() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

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
          Acerca de Nosotros
        </h1>
        <p className="text-xl md:text-2xl font-lora text-gris-humo/70">
          Conoce nuestra historia, misión y equipo profesional
        </p>
      </motion.div>

      {/* History Section */}
      <section className="mb-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src="/images/Picture2.png"
              alt="H&B SPA"
              className="w-full rounded-3xl shadow-xl"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold text-gris-humo">Nuestra Historia</h2>
            <p className="text-lg font-lato text-gris-humo/80">
              Desde 2015, H&B SPA Jardín Balbuena ha sido el refugio de belleza y bienestar
              favorito de la comunidad. Nacimos con la visión de crear un espacio donde cada
              persona pueda encontrar paz, renovación y cuidado profesional.
            </p>
            <p className="text-lg font-lato text-gris-humo/80">
              A lo largo de los años, hemos crecido gracias a la confianza de nuestros clientes,
              expandiendo nuestros servicios y productos, siempre manteniendo nuestro compromiso
              con la excelencia y la atención personalizada.
            </p>
            <p className="text-lg font-lato text-gris-humo/80">
              Hoy, somos un equipo de profesionales apasionados por ayudar a cada persona a
              verse y sentirse mejor, utilizando las mejores técnicas y productos del mercado.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mb-20">
        <div className="bg-sal-marina rounded-3xl shadow-xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center p-6"
            >
              <i className="bi bi-compass text-6xl text-turquesa-pastel mb-4 block"></i>
              <h3 className="text-2xl font-bold mb-4 text-gris-humo">Nuestra Misión</h3>
              <p className="font-lato text-gris-humo/80">
                Brindar experiencias de bienestar y renovación integral a través de terapias especializadas,
                tratamientos estéticos y masajes que combinen lo clínico y lo holístico, en un ambiente cálido y profesional.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center p-6"
            >
              <i className="bi bi-eye text-6xl text-turquesa-pastel mb-4 block"></i>
              <h3 className="text-2xl font-bold mb-4 text-gris-humo">Nuestra Visión</h3>
              <p className="font-lato text-gris-humo/80">
                Consolidarnos como un spa de referencia en la ciudad, reconocido por la excelencia en el trato humano,
                la innovación en tratamientos y la capacidad de transformar la rutina de nuestras clientas en momentos de autocuidado y equilibrio.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="mb-20">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12 text-gris-humo"
        >
          Nuestros Valores
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {[
            { icon: 'bi-heart-fill', title: 'Profesionalismo', desc: 'Brindamos atención experta y personalizada.' },
            { icon: 'bi-yin-yang', title: 'Bienestar integral', desc: 'Equilibrio entre cuerpo, mente y emociones.' },
            { icon: 'bi-shield-check', title: 'Confianza', desc: 'Transparencia, ética y cercanía en cada servicio.' },
            { icon: 'bi-lightbulb-fill', title: 'Innovación', desc: 'Siempre en actualización constante con técnicas y aparatología.' },
            { icon: 'bi-person-heart', title: 'Empatía', desc: 'Escuchar y cuidar a cada persona como única.' }
          ].map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-sal-marina rounded-2xl shadow-lg p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <i className={`bi ${value.icon} text-5xl text-turquesa-pastel mb-4 block`}></i>
              <h5 className="font-bold mb-3 text-gris-humo">{value.title}</h5>
              <p className="font-lato text-sm text-gris-humo/70">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Philosophy */}
      <section className="mb-20">
        <div className="bg-turquesa-pastel rounded-3xl shadow-xl p-8 md:p-12">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-4xl font-bold mb-6 text-gris-humo"
            >
              Nuestra Filosofía del Spa
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-2xl font-lora text-gris-humo mb-6"
            >
              Creemos que la belleza exterior es el reflejo del bienestar interior.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-lg font-lato text-gris-humo mb-4"
            >
              En H&B SPA, no solo nos enfocamos en tratamientos estéticos; buscamos crear
              una experiencia holística que nutra cuerpo, mente y espíritu. Cada servicio
              está diseñado para promover la relajación profunda, el rejuvenecimiento y
              la conexión con uno mismo.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-lg font-lato text-gris-humo"
            >
              Utilizamos técnicas ancestrales combinadas con tecnología moderna, productos
              naturales y orgánicos, y creamos un ambiente de tranquilidad que te permitirá
              escapar del estrés diario y reconectar con tu esencia.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="mb-20">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12 text-gris-humo"
        >
          Nuestro Equipo
        </motion.h2>
        <Carousel3D />
      </section>

      {/* Testimonials */}
      <section className="mb-20">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12 text-gris-humo"
        >
          Lo Que Dicen Nuestros Clientes
        </motion.h2>
        <div className="max-w-4xl mx-auto relative">
          <Card className="bg-sal-marina border-none shadow-xl">
            <CardContent className="p-8 md:p-12">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-2xl font-lora italic text-gris-humo mb-6 text-center">
                  "{testimonials[currentTestimonial].quote}"
                </p>
                <div className="text-center">
                  <p className="font-cormorant font-bold text-xl text-gris-humo">
                    {testimonials[currentTestimonial].name}
                  </p>
                  <p className="font-lato text-sm text-gris-humo/70">
                    {testimonials[currentTestimonial].title}
                  </p>
                </div>
              </motion.div>
            </CardContent>
          </Card>
          
          <Button
            onClick={prevTestimonial}
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full bg-sal-marina hover:bg-lila-rosa"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          
          <Button
            onClick={nextTestimonial}
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rounded-full bg-sal-marina hover:bg-lila-rosa"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
          
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === currentTestimonial
                    ? 'bg-lila-rosa w-8'
                    : 'bg-turquesa-pastel/30'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="mb-12">
        <div className="bg-gradient-to-br from-lila-rosa to-rosa-petalo rounded-3xl shadow-xl p-8 md:p-12">
          <div className="text-center">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-4xl font-bold mb-8 text-gris-humo"
            >
              Certificaciones y Reconocimientos
            </motion.h2>
            <div className="flex flex-wrap justify-center gap-8">
              {[
                { icon: 'bi-award-fill', label: 'ISO 9001' },
                { icon: 'bi-check-circle-fill', label: 'COFEPRIS' },
                { icon: 'bi-star-fill', label: '5 Estrellas' },
                { icon: 'bi-shield-check', label: 'Certificación Orgánica' }
              ].map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6"
                >
                  <i className={`bi ${cert.icon} text-6xl text-gris-humo block mb-3`}></i>
                  <p className="font-bold text-gris-humo">{cert.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
