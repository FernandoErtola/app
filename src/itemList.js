import ItemDetails from './itemDetails.js'

const ItemList = ({productos}) => {
    {productos.map(p => {
        return <ItemCount key={p.id} name={p.name} stock={p.stock} initial={0} onAdd={onAdd} />  
    })}
}

export default ItemList;