import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '../../lib/utils'

export function AnimatedTestimonials({ testimonials, autoplay = true }) {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!autoplay) return
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [autoplay, testimonials.length])

  const handlePrevious = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }

  return (
    <div className="relative w-full max-w-6xl mx-auto px-4 py-12">
      <div className="relative min-h-[400px] flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="w-full"
          >
            <div className="bg-sal-marina rounded-3xl shadow-xl p-8 md:p-12 backdrop-blur-custom">
              <div className="flex flex-col md:flex-row items-center gap-8">
                {testimonials[current].image && (
                  <div className="flex-shrink-0">
                    <img
                      src={testimonials[current].image}
                      alt={testimonials[current].name}
                      className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover shadow-lg"
                    />
                  </div>
                )}
                <div className="flex-1 text-center md:text-left">
                  <p className="text-xl md:text-2xl font-lora italic text-gris-humo mb-6">
                    "{testimonials[current].quote}"
                  </p>
                  <div>
                    <p className="font-cormorant font-bold text-xl text-gris-humo">
                      {testimonials[current].name}
                    </p>
                    {testimonials[current].title && (
                      <p className="font-lato text-sm text-gris-humo opacity-70">
                        {testimonials[current].title}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <button
          onClick={handlePrevious}
          className={cn(
            'absolute left-0 top-1/2 -translate-y-1/2',
            'w-12 h-12 rounded-full bg-sal-marina border-2 border-turquesa-pastel',
            'flex items-center justify-center cursor-pointer',
            'transition-all duration-300 shadow-lg',
            'hover:bg-lila-rosa hover:border-rosa-petalo hover:scale-110',
            'active:scale-95'
          )}
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-6 h-6 text-gris-humo" />
        </button>

        <button
          onClick={handleNext}
          className={cn(
            'absolute right-0 top-1/2 -translate-y-1/2',
            'w-12 h-12 rounded-full bg-sal-marina border-2 border-turquesa-pastel',
            'flex items-center justify-center cursor-pointer',
            'transition-all duration-300 shadow-lg',
            'hover:bg-lila-rosa hover:border-rosa-petalo hover:scale-110',
            'active:scale-95'
          )}
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-6 h-6 text-gris-humo" />
        </button>
      </div>

      {/* Indicators */}
      <div className="flex justify-center gap-2 mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={cn(
              'w-2.5 h-2.5 rounded-full transition-all duration-300',
              index === current
                ? 'bg-lila-rosa w-8'
                : 'bg-turquesa-pastel opacity-30 hover:opacity-60'
            )}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
