import ItemCount from './itemCount.js'

const ItemList = ({productos, onAddToCart, onItemSelect}) => {
    return productos.map(p => {
        return <ItemCount key={p.id} image={p.image} precio={p.precio} descripcion={p.descripcion} name={p.name} stock={p.stock} onSelect={() => onItemSelect(p)} onAdd={(quantity) => onAddToCart(quantity, p)} initial={1} />  
    })
}

export default ItemList;