import { useContext, useState } from 'react'
import { CartContext } from "./cartContext";
import ItemDetails from "./itemDetails";
import { Link } from 'react-router-dom';
import {db} from './firebase'
import { collection, addDoc, Timestamp } from "firebase/firestore"; 
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
                    <button className="btn btn-primary">Buscar productos</button>
                </Link>
            </div>
        )
    }

    else if (orderId) {
        return (
            <div className="container mt-5">
                <h3>Muchas gracias por su compra!</h3>
                <h6 className="mt-4">Su orden es la siguiente:</h6> <h4><span className="text-success">{orderId}</span></h4>
                <Link to="/">
                    <button className="btn btn-primary mt-4">Te invitamos a seguir viendo nuestra tienda</button>
                </Link>
            </div>
        )
    }


    return (
        <div>
            <h1 className="text-center mt-3">Carrito de compras</h1>
            <div>
                    <>
                        {cart.map(item => (
                            <div className="container mt-5">
                                <ul className="list-group">
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                    <ItemDetails key={item.id} producto={item.product} />
                                        <span className="badge bg-primary rounded-pill">Cantidad: {item.quantity}</span>
                                        <button className="btn btn-danger" key={item.id} onClick={() => removeFromCart(item.product.id)}>Remover</button>

                                    </li>

                                </ul>
                                <h4 key={item.id}></h4>
                            </div>
                        ))}
                        <div className="container">
                            <button className="btn btn-warning me-2" onClick={clearCart}>Vaciar carrito</button>
                            <Link className="btn btn-primary me-2" to={'/productos/productos'}>Seguir comprando</Link>
                            <button className="btn btn-success me-2" onClick={finishBuy}>Finalizar Compra</button>
                            
                            <div className='h3 mt-4'> Total: ${valorTotal}</div>
                        </div>
                        {showForm && <FormUser createOrder={createOrder} />}
                    </>
            </div>
        </div>
    )

}

export default Carrito;