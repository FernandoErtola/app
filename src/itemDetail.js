import ItemCount from './itemCount.js'

const ItemDetail = ({producto}) => {
    return (
        <>
            <h1>{producto.name}</h1>
            <p>Stock: {producto.stock}</p>
            <p>Descripcion: {producto.descripcion}</p>
            <img className="cart-image" src={producto.image} alt="imagen" />
        </>
    )
    
}


export default ItemDetail;
