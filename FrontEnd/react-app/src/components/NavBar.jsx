import {Link} from "react-router-dom";
import React, { useEffect } from "react";

export default function NavBar() {
    // toggle white-translucent style when at top; use current color when scrolled
    useEffect(() => {
        const el = document.querySelector('.site-nav.navbar')
        if (!el) return
        const apply = () => {
            if (window.scrollY <= 10) el.classList.add('at-top')
            else el.classList.remove('at-top')
        }
        apply()
        window.addEventListener('scroll', apply, { passive: true })
        return () => window.removeEventListener('scroll', apply)
    }, [])

    return (
    <nav className="site-nav navbar navbar-expand-lg navbar-light bg-light sticky-top" role="navigation">
        <div className="container-fluid">
            <Link className="navbar-brand fw-bold" to="/">H&B SPA</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item"><Link className="nav-link" to="/">Inicio</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/products">Productos</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/reserve">Reserva</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/about">Acerca de Nosotros</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/contact">Contacto</Link></li>
                </ul>
            </div>
        </div>
    </nav>
    )
}