import React, { useEffect, useState } from 'react'

const crew = [
  { name: 'Anghelo', img: '/images/bugBuster/Anghelo.webp' },
  { name: 'Arturo', img: '/images/bugBuster/Arturo.webp' },
  { name: 'Aylin', img: '/images/bugBuster/Aylin.webp' },
  { name: 'Daniel', img: '/images/bugBuster/Daniel.webp' },
  { name: 'Erick', img: '/images/bugBuster/Erick.webp' },
  { name: 'Josett', img: '/images/bugBuster/Josett.webp' },
  { name: 'Lona', img: '/images/bugBuster/Lona.webp' },
  { name: 'Ramon', img: '/images/bugBuster/Ramon.webp' },
  { name: 'Juan', img: '/images/bugBuster/juan.webp' }
]

function idxMod(i, len) {
  return ((i % len) + len) % len
}

export default function Carousel3D({ autoRotate = true, interval = 4000 }) {
  const len = crew.length
  const [active, setActive] = useState(0)

  useEffect(() => {
    if (!autoRotate) return
    const id = setInterval(() => {
      setActive((s) => idxMod(s + 1, len))
    }, interval)
    return () => clearInterval(id)
  }, [autoRotate, interval, len])

  const prev = () => setActive((s) => idxMod(s - 1, len))
  const next = () => setActive((s) => idxMod(s + 1, len))

  return (
    <div className="carousel-3d-container">
      <div className="carousel-3d" aria-hidden={false}>
        {crew.map((c, i) => {
          const rel = (i - active + len) % len
          let cls = 'carousel-card'
          if (i === active) cls += ' active'
          else if (rel === 1) cls += ' next'
          else if (rel === len - 1) cls += ' prev'
          else if (rel < len / 2) cls += ' hidden-right'
          else cls += ' hidden-left'

          return (
            <div className={cls} key={c.name} style={{ zIndex: i === active ? 20 : 10 }}>
              <div className="equipo-card card h-100">
                <img src={c.img} className="card-img-top" alt={c.name} />
                <div className="card-body">
                  <h5 className="card-title text-center">{c.name}</h5>
                  <p className="text-center text-muted">Equipo H&B SPA</p>
                </div>
                <div className="card-footer text-center border-0">
                  <small className="text-muted">Especialista</small>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <div className="carousel-controls" aria-hidden={false}>
        <button className="carousel-btn prev" id="prevBtn" aria-label="Anterior" onClick={prev}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
        <button className="carousel-btn next" id="nextBtn" aria-label="Siguiente" onClick={next}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>
    </div>
  )
}
