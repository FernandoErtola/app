import { useContext } from "react"
import Navbar from "./navbar"
import {Link, NavLink} from 'react-router-dom'
import { CartContext } from "./cartContext"

const Header = ({nombre, apellido, edad}) => {

    const { cart } = useContext(CartContext);
    const itemsCount = cart.reduce((acc, item) => acc + item.quantity, 0);

    return(
        <header className="header">
            <Link to="/">
                <h1>FERTOLA</h1>
            </Link>
            <Navbar/>
            <NavLink to={'/carrito'} className="fas fa-shopping-cart cart navBar">{itemsCount > 0 ? itemsCount : ''}</NavLink>

            <p className="welcome">Bienvenido <a className="user">{nombre} ({edad})</a></p>
            
        </header>
    )
}

export default Header
