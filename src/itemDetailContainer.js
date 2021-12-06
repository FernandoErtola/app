import {useEffect, useState, useContext} from "react"
import ItemDetails from "./itemDetails.js"
import ItemCount from './itemCount.js'
import {useParams, useHistory} from "react-router-dom"
import { CartContext } from "./cartContext"
import { db } from "./firebase"
import { collection, getDocs, where, query } from "firebase/firestore"; 

const getProducto = async (idproducto) => {
    const q = query(collection(db, "productos"), where("id", "==", idproducto));
    const querySnapshot = (await getDocs(q)).docs.map(doc => doc.data());
    return querySnapshot[0];
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
                <main className="container-fluid mt-3 d-flex justify-content-center">
                        <div>
                            <ItemDetails producto={producto} />
                            <ItemCount key={producto.id} stock={producto.stock} onAdd={(quantity) => onAgregarAlCarrito(quantity, producto)} initial={1} />
                            <div className="d-flex justify-content-end">
                            {itemsCount > 0 && <button className="btn btn-success" onClick={goToCart}>Finalizar compra</button>}
                        </div>
                        </div>
                        
                </main> 
            }
        </>
    )
}

export default ItemDetailContainer