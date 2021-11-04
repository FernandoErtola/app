import { useState } from "react"

const ItemCount = ({ initial, name, descripcion, precio, stock, image, onAdd, onSelect }) => {

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
            <div className="cardCart" onClick={onSelect}>
                <h5 className="cart-title">{name}</h5>

                <img className="cart-image" src={image} alt="imagen" />

                <p className="cart-text">Cantidad: {count}</p>
                <p className="cart-text">Stock: {stock}</p>
                <p className="cart-text">Precio: ${precio}</p>
                <p className="cart-text">Descripcion: {descripcion}</p>

                <button className="button" onClick={(event) => {event.stopPropagation(); onAdd(count);}}>Agregar al carrito</button>
                <button className="button" onClick={Suma}>+</button>
                <button className="button" onClick={Resta}>-</button>
            </div>
        </>
    )
}

export default ItemCount