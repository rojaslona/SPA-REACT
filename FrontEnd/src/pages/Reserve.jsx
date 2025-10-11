import React from 'react'

export default function Reserve() {
  return (
    <div className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold mb-3">Reserva tu cita</h1>
          <p className="lead text-muted">Agenda tu servicio de spa y bienestar fácilmente.</p>
        </div>
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <div className="card border-0 shadow-sm p-4">
              <div className="card-body">
                <p>Aquí iría el formulario de reserva. Por ahora se mantiene el contenido estático para preservar la estructura original.</p>
                <p>Implementar el formulario dinámico o integración con backend cuando sea necesario.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
