import {useEffect, useState, useContext} from "react"
import ItemList from "./itemList"
import ItemDetails from "./itemDetails"
import { useParams, useHistory } from "react-router-dom"
import { CartContext } from "./cartContext"
    
const getProductos = (category) => {
    return new Promise((resolve, reject) => {
        fetch('../api.json')
        .then(res => res.json())
        .then(data => {
            if(category == 'destacados'){
                data = data.filter(item => item.star)
            }else if(category == 'makita'){
                data = data.filter(item => item.marca == 'Makita')
            }
            setTimeout(() => {resolve(data)}, 2000)
        })
    })
}

const ItemListContainer = () => {  

    const { addToCart } = useContext(CartContext);

    const history = useHistory();

    const [productos, setProductos] = useState([]);

    const {category} = useParams()

    useEffect(async () => {
        setProductos(await getProductos(category));
    }, [category]);

    const onAgregarAlCarrito = (quantity, producto) => {
        addToCart(quantity, producto);
    }

    const goToDetail = (producto) => {
        history.push(`/item/${producto.id}`)
    }

    return (
        <>
            <main className="ilc">
                <div>
                    <div style={{width: '50%', float: 'left'}}>
                        <ItemList productos={productos} onAddToCart={onAgregarAlCarrito} onItemSelect={goToDetail} />
                    </div>
                </div>
            </main>
        </>
    )
}

export default ItemListContainer