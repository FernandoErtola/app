import {useEffect, useState, useContext} from "react"
import ItemList from "./itemList"
import { useParams, useHistory } from "react-router-dom"
import { CartContext } from "./cartContext"
import { db } from "./firebase"
import { collection, getDocs } from "firebase/firestore"; 

    
const getProductos = async (category) => {
    let data = (await getDocs(collection(db, "productos"))).docs.map(doc => doc.data());
    if(category == 'destacados'){
        data = data.filter(item => item.star)
    }else if(category == 'makita'){
        data = data.filter(item => item.marca == 'Makita')
    }
    return data;
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
        <div className="container-fluid mt-3">
            <div className="row">
                        <ItemList productos={productos} onAddToCart={onAgregarAlCarrito} onItemSelect={goToDetail} />
                        </div>
                    </div>
        </>
    )
}

export default ItemListContainer