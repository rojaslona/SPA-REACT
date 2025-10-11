import React from 'react'

export default function Products() {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Nuestros Productos</h1>
      <div className="row">
        <div className="col-md-4">
          <div className="card mb-4">
            <img src="https://via.placeholder.com/350x150" className="card-img-top" alt="Producto 1" />
            <div className="card-body">
              <h5 className="card-title">Producto 1</h5>
              <p className="card-text">Descripción breve del producto 1.</p>
              <a href="#" className="btn btn-primary">Ver más</a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4">
            <img src="https://via.placeholder.com/350x150" className="card-img-top" alt="Producto 2" />
            <div className="card-body">
              <h5 className="card-title">Producto 2</h5>
              <p className="card-text">Descripción breve del producto 2.</p>
              <a href="#" className="btn btn-primary">Ver más</a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4">
            <img src="https://via.placeholder.com/350x150" className="card-img-top" alt="Producto 3" />
            <div className="card-body">
              <h5 className="card-title">Producto 3</h5>
              <p className="card-text">Descripción breve del producto 3.</p>
              <a href="#" className="btn btn-primary">Ver más</a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer markup reused from old pages - kept minimal here since App renders a common footer */}
    </div>
  )
}
