
import Header from "./header"
import Footer from "./footer"
import ItemCount from "./itemCount"
import ItemListContainer from "./itemListContainer"
import Carrito from "./carrito"
import { useState } from "react"

const App = () => {

    const [productos, setProductos] = useState([
        {
            id: '1',
            name: 'Destornillador',
            stock: 12
        },
        {
            id: '2',
            name: 'Martillo',
            stock: 10
        }
    ])

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

            <ItemListContainer
                nombre="Fernando" 
                apellido="Ertola" 
                edad={35} 
            />
            <Footer/>
        </>
    )
}

export default App