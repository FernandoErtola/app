import { useState } from "react"

const ItemCount = ({ initial, name, stock, image, onAdd, onSelect }) => {

    const [count, setCount] = useState(initial)

    const Suma = () => {
        if (count < stock) {
            setCount(count + 1)
        } else {
            alert("No hay mas stock disponible")
        }
    }

    const Resta = () => {
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

                <button className="button" onClick={() => onAdd(count)}>Agregar al carrito</button>
                <button className="button" onClick={Suma}>+</button>
                <button className="button" onClick={Resta}>-</button>
            </div>
        </>
    )
}

export default ItemCount