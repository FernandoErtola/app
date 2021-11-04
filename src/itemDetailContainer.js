import {useEffect, useState} from "react"
import ItemDetails from "./itemDetails.js"
import ItemCount from './itemCount.js'
import {useParams} from "react-router-dom"


const getProducto = (idproducto) => {
    return new Promise((resolve, reject) => {
        fetch('../api.json')
        .then(res => res.json())
        .then(data => {
            const elemento = data.find(item => item.id === idproducto)
            setTimeout(() => {resolve(elemento)}, 2000)
        })
    })
}

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState(null);

    const { id } = useParams();

    useEffect(async () => {
        setProducto(await getProducto(parseInt(id)));
    }, []);

    return (
        <>
            {producto && 
                <main className="ilc">
                        <div style={{width: '50%', float: 'right'}}>
                            <ItemDetails producto={producto} />
                        </div>
                </main> 
            }
        </>
    )
}

export default ItemDetailContainer