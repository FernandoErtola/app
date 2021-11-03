
import Header from "./header"
import Footer from "./footer"
import ItemCount from "./itemCount"
import ItemListContainer from "./itemListContainer"
import ItemDetailContainer from "./itemDetailContainer"
import Carrito from "./carrito"
import { useState } from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"

const App = () => {

    const onAdd = () => {        
        console.log('Producto agregado')
    }

    return(
        <>       
            <Header 
                nombre="Fernando" 
                apellido="Ertola" 
                edad={35} 
            />
            <ItemListContainer />
            <ItemDetailContainer />
            <Footer/>
        </>
    )
}

export default App