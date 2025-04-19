import { NavLink } from "react-router-dom"
import CartWidget from "./CartWidget"
import { useCart } from "../context/CartContext"


const NavbarComponent = () => {
    const {cart}=useCart()

    return(
        <nav className='navContainer'>            
            <NavLink className='navLink navLinkLogo' to="/">
                <img src="../logo.png" alt="logo" className="navLogo" />
                Turismo App
            </NavLink>
            <NavLink className='navLink' to="/category/nuevos">Nuevos</NavLink>
            <NavLink className='navLink' to="/category/mas-vendidos">Más vendidos</NavLink>
            <NavLink className='navLink' to="/category/ofertas">Ofertas</NavLink>
            {cart.length > 0 && <NavLink className='navLink' to="/cart"><CartWidget/></NavLink>}
                      
        </nav>
    )
}

export default NavbarComponent