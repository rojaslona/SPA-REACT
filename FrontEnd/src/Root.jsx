import React from 'react'
import { HashRouter } from 'react-router-dom'
import NavBar from './components/layout/NavBar'
import Footer from './components/layout/Footer'
import App from './App'

export default function Root() {
  return (
    <HashRouter>
      <div className="app-shell">
        <NavBar />
        <div className="app-content pt-16 md:pt-20">
          <App />
        </div>
        <Footer />
      </div>
    </HashRouter>
  )
}
