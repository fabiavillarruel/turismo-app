import React from 'react'
import { Link } from 'react-router-dom'

const EmptyCart = () => {
  return (
    <div>
        <h1>Tu carrito está vacío</h1>
        <h2>Te invitamos al inicio para ver más productos</h2>
        <Link to ='/'>Ir a inicio</Link>
    </div>
  )
}

export default EmptyCart