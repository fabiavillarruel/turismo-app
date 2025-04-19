import React, { useState } from 'react'

const ItemCounter = ({stock, onAdd}) => {
    const [count, setCount] = useState(1)

    const add = () => {
        if(count < stock){
            setCount(count + 1)
        }
    }

    const substrack = () => {
        if(count > 0){
            setCount(count -1)
        }
    }

    const addToCart = () => {
        onAdd(count)
    }

    return (
        <div>
            <div>
                <button onClick={substrack}>-</button>
                <span>{count}</span>
                <button onClick={add}>+</button>
            </div>

            <button disabled={stock === 0 || count === 0} onClick={addToCart}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCounter
