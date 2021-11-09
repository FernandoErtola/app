import Navbar from "./navbar"
import {Link} from 'react-router-dom'
import { NavLink } from "react-router-dom"
import { NavBar } from "react-router-dom"

const Header = ({nombre, apellido, edad}) => {

    
    return(
        <header className="header">
            <Link to="/">
                <h1>FERTOLA</h1>
            </Link>
            <Navbar/>
            <NavLink to={'/carrito'} className="fas fa-shopping-cart cart navBar"></NavLink>

            <p className="welcome">Bienvenido <a className="user">{nombre} ({edad})</a></p>
            
        </header>
    )
}

export default Header
