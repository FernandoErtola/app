import { useState } from "react"
import { useHistory } from "react-router-dom"

const ItemCount = ({ initial, stock, onAdd, onSelect }) => {

    const [count, setCount] = useState(initial)

    const Suma = (event) => {
        event.stopPropagation();
        if (count < stock) {
            setCount(count + 1)
        } else {
            alert("No hay mas stock disponible")
        }
    }

    const Resta = (event) => {
        event.stopPropagation();
        if (count > 0) {
            setCount(count - 1)
        }
    }

    return (
        <>
            <div>

                <p className="cart-text">Cantidad: {count}</p>

                <button className="button" onClick={(event) => {event.stopPropagation(); onAdd(count);}}>Agregar al carrito</button>
                <button className="button" onClick={Suma}>+</button>
                <button className="button" onClick={Resta}>-</button>
            </div>
        </>
    )
}

export default ItemCount