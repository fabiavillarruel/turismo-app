import CartWidget from "./CartWidget"

const NavbarComponent = () => {
    return(
        <nav className='navContainer'>            
            <a className='navLink' href="">
                <img src="./logo.png" alt="logo" style={{width:'3rem'}} />
                Turismo Shop
            </a>
            <a className='navLink' href="">Nuevos</a>
            <a className='navLink' href="">Más vendidos</a>
            <a className='navLink' href="">Ofertas</a>
            <CartWidget/>
        </nav>
    )
}

export default NavbarComponent