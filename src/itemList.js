import ItemCount from './itemCount.js'
import ItemDetails from './itemDetails.js'

const ItemList = ({productos, onAddToCart, onItemSelect}) => {
    return productos.map(p => {
        return <>
            <div onClick={() => onItemSelect(p)} className="col-sm-3">
                <div className="card">
                    <ItemDetails producto={p} ></ItemDetails>
                    <ItemCount key={p.id} stock={p.stock} onAdd={(quantity) => onAddToCart(quantity, p)} initial={1} />  
                </div>
            </div>
        </>
    })
}

export default ItemList;