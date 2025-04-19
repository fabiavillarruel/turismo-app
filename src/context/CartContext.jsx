import { createContext, useContext, useState } from "react";

//Se crea el contexto
export const CartContext = createContext()

//Se crea el proveedor
export const CartProvider = ({children})=>{
    const [cart, setCart] = useState([])

    //Agrega un item al carrito
    const addToCart = (item, quantity) => {
        if(isInCart(item.id)){
            const updatedCart = cart.map((prod)=> {
                if(prod.id === item.id){
                    return {...prod, quantity: prod.quantity + quantity }
                }else{
                    return prod
                }
            })
            setCart(updatedCart)
        }else{
            setCart([...cart, {...item, quantity}])
        }
    }

    //Borrar todo el carrito
    const clear = () =>{
        setCart([])
    }

    //borrar un item
    const removeItem = (id) => {
        setCart(cart.filter((prod)=> prod.id !== id))
    }

    //si esta en el carrito
    const isInCart = (id) => {
        return cart.some((prod)=> prod.id === id)
    }

    //total a pagar la llamamos en Cart
    const cartTotal = () => {
        return cart.reduce((acc, prod) => (acc += prod.price * prod.quantity),0)
    }

    //total de items la llamamos en cartWidget
    const cartQuantity = () => {
        return cart.reduce((acc, prod)=> acc += prod.quantity, 0)
    }

    return(
        <CartContext.Provider value={{cart, addToCart, clear, removeItem, cartTotal, cartQuantity}}>
            {children}
        </CartContext.Provider>
    )
}


//OPCIONAL MINI CUSTOM HOOK
export const useCart = () => useContext(CartContext)