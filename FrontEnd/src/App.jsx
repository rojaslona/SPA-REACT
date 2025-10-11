import React from 'react'
import { Routes, Route } from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import Products from './pages/Products'
import Reserve from './pages/Reserve'
import './App.css'

export default function App() {
  return (
    <>
      <main className="container my-4">
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/reserve" element={<Reserve />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </>
  )
}
