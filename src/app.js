
import Header from "./header"
import Footer from "./footer"
import ItemCount from "./itemCount"
import ItemListContainer from "./itemListContainer"
import ItemDetails from "./itemDetails"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Carrito from "./carrito"
import ItemDetailContainer, { useState } from "./itemDetailContainer"
import CartProvider from "./cartContext"
import firebase from "./firebase"

const App = () => {

    const onAdd = () => {
        console.log('Producto agregado')
    }

    return (

        <BrowserRouter>
            <>
                <CartProvider>
                    <Header
                        nombre="Fernando"
                        apellido="Ertola"
                        edad={35}
                    />

                    <Switch>
                        <Route path="/" component={ItemListContainer} exact />
                        <Route path="/productos/:category" component={ItemListContainer} />
                        <Route path="/item/:id" component={ItemDetailContainer} exact />
                        <Route path="/carrito" component={Carrito} exact />
                    </Switch>

                </CartProvider>
            </>
        </BrowserRouter>
    )
}

export default App