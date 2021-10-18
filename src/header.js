import Navbar from "./navbar"

const Header = ({nombre, apellido, edad}) => {

    
    return(
        <header className="header">
            <h1>FERTOLA</h1>
            <Navbar/>
            <p className="welcome">Bienvenido <a className="user">{nombre} ({edad})</a></p>
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

