import { NavLink } from 'react-router-dom'
/* import { useContext } from 'react'
import { contexto } from './cartContext' */

const Navbar = () => {

    /* const resultado = useContext(contexto) */

    return(
        <nav className="navBar">
            <NavLink to="/">HOME</NavLink>
            <NavLink to="/productos/productos">PRODUCTOS</NavLink>
            <NavLink to="/productos/destacados">DESTACADOS</NavLink>
            <NavLink to="#">CONTACTO</NavLink>

        </nav>
    )
} 

export default Navbar