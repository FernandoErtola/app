import { useState } from "react"

const ItemCount = ({name, stock, onAdd}) => {

    const [count, setCount] = useState(0)

    const Suma = (e) => {
        e.preventDefault()
        if (count < stock) {
            setCount(count + 1)
        } else {
            alert("No hay mas stock disponible")
        }
    }

    const Resta = (e) => {
        e.preventDefault()
        if (count !== 0) {
            setCount(count - 1)
        }
    }

    return (
        <>
            <div className="cardCart">
                <h5 className="cart-title">Comprar producto {name}</h5>
                <p className="cart-text">Stock: {stock}</p>
                <p className="cart-text">Cantidad: {count}</p>
                <button className="button" onClick={Suma}>+</button>
                <button className="button" onClick={Resta}>-</button>
                <button className="button" onClick={onAdd}>Agregar al carrito</button>
            </div>
        </>
    )
}

export default ItemCount