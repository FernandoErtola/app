import { useState } from "react"

const ItemCount = () => {

const [stock, setStock] = useState({initial})

const Suma = () => {
    if (stock < 12)    
    setStock(stock + 1)
    else return (
        alert("No hay mas stock disponible")
    )
}

console.log({stock})

const Resta = () => {   
    if (stock === 0) 
        return (false)
    else return(
        setStock(stock - 1)
    )
}

    return(
            <>
            <div className="cardCart">
            <h5 className="cart-title">Comprar producto</h5>
            <p className="cart-text">Cantidad: {stock}</p>

            <button className="button" onClick={Suma}>+</button>
            <button className="button" onClick={Resta}>-</button>
            </div>  
            </>   
    )
}

export default ItemCount