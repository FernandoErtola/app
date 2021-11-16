import {useEffect, useState, useContext} from "react"
import ItemDetails from "./itemDetails.js"
import ItemCount from './itemCount.js'
import {useParams, useHistory} from "react-router-dom"
import { CartContext } from "./cartContext"

const getProducto = (idproducto) => {
    return new Promise((resolve, reject) => {
        fetch('../api.json')
        .then(res => res.json())
        .then(data => {
            const elemento = data.find(item => item.id === idproducto)
            setTimeout(() => {resolve(elemento)}, 2000)
        })
    })
}

const ItemDetailContainer = () => {

    const history = useHistory();

    const { addToCart, cart } = useContext(CartContext);

    const [producto, setProducto] = useState(null);

    const itemsCount = cart.reduce((acc, item) => acc + item.quantity, 0);

    const goToCart = () => {
        history.push(`/carrito`)
    }

    const onAgregarAlCarrito = (quantity, producto) => {
        addToCart(quantity, producto);
    } 

    const { id } = useParams();

    useEffect(async () => {
        setProducto(await getProducto(parseInt(id)));
    }, []);

    return (
        <>
            {producto && 
                <main className="ilc">
                        <div style={{width: '50%', float: 'right'}}>
                            <ItemDetails producto={producto} />
                            <ItemCount key={producto.id} stock={producto.stock} onAdd={(quantity) => onAgregarAlCarrito(quantity, producto)} initial={1} />
                            {itemsCount > 0 && <button className="button" onClick={goToCart}>Finalizar compra</button>}
                        </div>
                </main> 
            }
        </>
    )
}

export default ItemDetailContainer