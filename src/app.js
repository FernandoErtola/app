
import Header from "./header"
import Footer from "./footer"
import ItemCount from "./itemCount"
import ItemListContainer from "./itemListContainer"
import ItemDetailContainer from "./itemDetailContainer"
import Carrito from "./carrito"
import { useState } from "react"

const App = () => {

/*     const [productos, setProductos] = useState([
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
    ]) */

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