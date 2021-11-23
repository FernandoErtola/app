import { useContext, useState } from 'react'
import { CartContext } from "./cartContext";
import ItemDetails from "./itemDetails";
import { Link } from 'react-router-dom';
import {db} from './firebase'
import { collection, getDoc, addDoc, doc, Timestamp } from "firebase/firestore"; 
import FormUser from './usr';


const Carrito = () => {

    const { cart, removeFromCart, clearCart } = useContext(CartContext)
    const [orderId, setOrderId] = useState('')
    const [showForm, setShowForm] = useState(false)

    const itemsCount = cart.reduce((acc, item) => acc + item.quantity, 0);
    const valorTotal = cart.reduce((acc, item) => acc + item.quantity * item.product.precio, 0);

    const finishBuy = async () => {
        setShowForm(true)
    }

    const createOrder = async (formUser) => {

        const newOrder = {
            formUser,
            cart,
            total: valorTotal,
            date: Timestamp.fromDate(new Date())
        }

        const docRef = await addDoc(collection(db, 'order'), newOrder)
        setOrderId(docRef.id)
        clearCart()
    }

    if (itemsCount === 0 && !orderId) {
        return (
            <div className="container mt-5">
                <h3>No hay productos en el carrito</h3>
                <Link to="/">
                    <button>Buscar productos</button>
                </Link>
            </div>
        )
    }

    else if (orderId) {
        return (
            <div className="container mt-5">
                <h3>Compra realizada con éxito</h3>
                <h4>Su orden es la siguiente: {orderId}</h4>
                <Link to="/">
                    <button>Te invitamos a seguir viendo nuestra tienda</button>
                </Link>
            </div>
        )
    }


    return (
        <div>
            <h1>Carrito de compras</h1>
            <div>
                {itemsCount === 0
                    ? <div className="empty">El carrito está vacio
                        <section className="emptyButton">
                            <Link to={'/productos/productos'}>Seguir comprando</Link>
                        </section>
                    </div>
                    :
                    <>
                        {cart.map(item => (
                            <div>
                                <ItemDetails key={item.id} producto={item.product} />
                                <h4 key={item.id}>Cantidad:{item.quantity}</h4>
                                <button key={item.id} onClick={() => removeFromCart(item.product.id)}>Remover</button>
                            </div>
                        ))}
                        <div className="carrito">
                            <button onClick={clearCart}>Vaciar carrito</button>
                            <button onClick={finishBuy}>Finalizar Compra</button>
                            <Link to={'/productos/productos'}>Seguir comprando</Link>
                            <div className='valorTotal'> Total: {valorTotal}</div>
                        </div>
                        {showForm && <FormUser createOrder={createOrder} />}
                    </>
                }
            </div>
        </div>
    )

}

export default Carrito;