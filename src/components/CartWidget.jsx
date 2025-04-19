import { useCart } from "../context/CartContext"

const CartWidget = () => {
    const { cartQuantity } = useCart()
    return(
        <div className="cartWidgetContainer">
            <span><img src="../carrito.png" alt="logo carrito" className="cartLogo"/></span>
            <span>{cartQuantity()}</span>
        </div>
    )
}

export default CartWidget