import { useState } from "react"

const ItemCount = ({ initial, stock, onAdd}) => {

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

                

                
                <div>
                    <h5 className="cart-text mt-4 list-group-item light">Cantidad: {count}
                        <button className="me-2 ms-2 btn btn-secondary" onClick={Suma}>+</button>
                        <button className="btn btn-secondary" onClick={Resta}>-</button>
                    </h5>
                </div>
                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                    <button className="mb-1 btn btn-primary me-md-2" onClick={(event) => {event.stopPropagation(); onAdd(count);}}>Agregar al carrito</button>
                </div>
            </div>
        </>
    )
}

export default ItemCount