import ItemDetails from './itemDetails.js'
import ItemCount from './itemCount.js'

const ItemList = ({productos, onAddToCart, onItemSelect}) => {
    return productos.map(p => {
        return <ItemCount key={p.id} image={p.image} name={p.name} stock={p.stock} onSelect={() => onItemSelect(p)} onAdd={(quantity) => onAddToCart(quantity, p)} initial={0} />  
    })
}

export default ItemList;