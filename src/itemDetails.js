import ItemCount from './itemCount.js'

const ItemDetails = ({producto, onItemSelect}) => {
    return (
        <>
            <h1>{producto.name}</h1>
            <p>Stock: {producto.stock}</p>            
            <img className="cart-image" src={producto.image} alt="imagen" />
        </>
    )
    
}

export default ItemDetails;