import { NavLink } from 'react-router-dom'

const Navbar = () => {
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