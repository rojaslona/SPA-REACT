import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '../../lib/utils'

export function LiquidButton({ 
  children, 
  className, 
  variant = 'primary',
  size = 'default',
  ...props 
}) {
  const variants = {
    primary: 'bg-turquesa-pastel hover:bg-lila-rosa text-gris-humo',
    secondary: 'bg-lila-rosa hover:bg-rosa-petalo text-gris-humo',
    outline: 'bg-transparent border-2 border-turquesa-pastel hover:bg-turquesa-pastel text-gris-humo'
  }

  const sizes = {
    default: 'px-8 py-3 text-base',
    sm: 'px-6 py-2 text-sm',
    lg: 'px-10 py-4 text-lg'
  }

  return (
    <motion.button
      className={cn(
        'font-lato font-semibold rounded-2xl border-none cursor-pointer shadow-md',
        'transition-all duration-300 ease-in-out',
        variants[variant],
        sizes[size],
        className
      )}
      whileHover={{ 
        scale: 1.05,
        y: -2,
        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.15)'
      }}
      whileTap={{ scale: 0.95 }}
      transition={{
        type: 'spring',
        stiffness: 400,
        damping: 17
      }}
      {...props}
    >
      {children}
    </motion.button>
  )
}
