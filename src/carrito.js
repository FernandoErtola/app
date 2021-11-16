import { useContext } from 'react'
import { CartContext } from "./cartContext";
import ItemDetails from "./itemDetails";
import { Link } from 'react-router-dom';

const Carrito = () => {

    const { cart, removeFromCart, clearCart } = useContext(CartContext)
    const itemsCount = cart.reduce((acc, item) => acc + item.quantity, 0);
    const valorTotal = cart.reduce((acc, item) => acc + item.quantity * item.product.precio, 0);

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
                            <Link to={'/productos/productos'}>Seguir comprando</Link>
                            <div className='valorTotal'> Total: {valorTotal}</div>
                        </div>
                    </>
                }
            </div>
        </div>
    )

}

export default Carrito;