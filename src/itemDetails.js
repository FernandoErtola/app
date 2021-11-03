import ItemCount from './itemCount.js'

const ItemDetails = ({producto, onItemSelect}) => {
    return (
        <>
            <h1>{producto.name}</h1>
            <p>Stock: {producto.stock}</p>    
            <p>Descripcion: {producto.descripcion}</p>   
            <p>Precio: ${producto.precio}</p>       
            <img className="cart-image" src={producto.image} alt="imagen" />
        </>
    )
    
}

export default ItemDetails;