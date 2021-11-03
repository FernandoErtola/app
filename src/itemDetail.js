import ItemCount from './itemCount.js'

const ItemDetail = ({name, stock, descripcion, precio, image}) => {
    return (
        <>
            <h1>Articulo:</h1>
            <p>Producto: {name}</p>
            <p>Stock: {stock}</p>
            <p>Descripción: {descripcion}</p>
            <p>Precio: ${precio}</p>
            <img className="cart-image" src={image} alt="imagen" />
        </>
    )
    
}

export default ItemDetail;
