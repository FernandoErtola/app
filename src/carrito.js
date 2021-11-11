import { useContext } from 'react'
import { CartContext } from "./cartContext";
import ItemDetails from "./itemDetails";

const Carrito = () => {

    const { cart, removeFromCart, clearCart } = useContext(CartContext)

    return(
        <div>
            <h1>Carrito</h1>
            <button onClick={clearCart}>Vaciar carrito</button>
            {cart.map(item => (
                <>
                    <h1 key={item.id}>{item.quantity}</h1>
                    <ItemDetails key={item.id} producto={item.product} />
                    <button key={item.id} onClick={() => removeFromCart(item.product.id)}>Remover</button>
                </>
            ))}
        </div>
    )
}

export default Carrito;