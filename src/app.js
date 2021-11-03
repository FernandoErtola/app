
import Header from "./header"
import Footer from "./footer"
import ItemCount from "./itemCount"
import ItemListContainer from "./itemListContainer"
import ItemDetails from "./itemDetails"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Carrito from "./carrito"
 import { useState } from "./itemDetailContainer"

const App = () => {

    const onAdd = () => {        
        console.log('Producto agregado')
    }

    return(
        <BrowserRouter>
        <>       
            <Header 
                nombre="Fernando" 
                apellido="Ertola" 
                edad={35} 
            />

        <Switch>
            <Route path="/" component={ItemListContainer} exact/>        
            <Route path="/productos/:id" component={ItemListContainer}/>
            <Route path="/item/:id" component={ItemDetails}/>
        </Switch>

            <Footer/>
        </>
        </BrowserRouter>
    )
}

export default App