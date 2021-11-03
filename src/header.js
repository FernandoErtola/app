import Navbar from "./navbar"
import {Link} from 'react-router-dom'
import { NavBar } from "react-router-dom"

const Header = ({nombre, apellido, edad}) => {

    
    return(
        <header className="header">
            <Link to="/">
                <h1>FERTOLA</h1>
            </Link>
            <Navbar/>
            <p className="welcome">Bienvenido <a className="user">{nombre} ({edad})</a></p>
            <i className="fas fa-shopping-cart cart"></i>
        </header>
    )
}

export default Header

/* const Header = ({props}) => {

    
    return(
        <header className="header">
            <h1>FERTOLA</h1>
            <Navbar/>
            <p>Bienvenido {props.nombre}</p>
        </header>
    )
} */

