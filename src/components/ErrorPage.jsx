import React from 'react'
import { Link } from 'react-router-dom'

function ErrorPage() {
  return (
    <div>
      <p>Error, esa ruta no existe.</p>
      <Link to='/'>Volver al inicio</Link>
    </div>
  )
}

export default ErrorPage
