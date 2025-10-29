import React from 'react'
import { HashRouter } from 'react-router-dom'
import { Navbar04 } from './components/ui/navbar-04'
import Footer from './components/layout/Footer'
import App from './App'

const navigationLinks = [
  { to: '/', label: 'Inicio' },
  { to: '/products', label: 'Productos' },
  { to: '/reserve', label: 'Reserva' },
  { to: '/about', label: 'Acerca de Nosotros' },
  { to: '/contact', label: 'Contacto' },
]

export default function Root() {
  return (
    <HashRouter>
      <div className="app-shell">
        <Navbar04
          logo="H&B SPA"
          logoHref="/"
          navigationLinks={navigationLinks}
        />
        <div className="app-content pt-16 md:pt-20">
          <App />
        </div>
        <Footer />
      </div>
    </HashRouter>
  )
}
