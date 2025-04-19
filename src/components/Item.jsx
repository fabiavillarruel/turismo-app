import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({producto}) => {
  return (
    <div className='card'>
        <img src={producto.img} alt={producto.name} />
        <div className='producto-container'>
            <h3>{producto.name}</h3>
            <p className='producto-price'>${producto.price} {producto.currency}</p>
            <div className='producto-button-container'>
              <Link className='producto-button' to={`/item/${producto.id}`}>Ver más</Link>
            </div>            
        </div>
      
    </div>
  )
}

export default Item