import React from 'react'
import CartView from './CartView'
import EmptyCart from './EmptyCart'
import { useCart } from '../context/CartContext'

const CartContainer = () => {
    const {cart} = useCart()
    return (
        <div>
        { 
            cart.length ? <CartView/> : <EmptyCart/>
        }
        </div>
    )
}

export default CartContainer