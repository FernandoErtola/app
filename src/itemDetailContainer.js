import {useEffect, useState} from "react"
import ItemDetail from "./itemDetail.js"
import ItemCount from './itemCount.js'


const getProductos = () => {
    return new Promise((resolve, reject) => {
        fetch('/producto.json')
        .then(res => res.json())
        .then(data => {
            setTimeout(() => {resolve(data)}, 2000)
        })
    })
}

const ItemDetailContainer = () => {

    const [productos, setProductos] = useState([]);
    const [selectedProducto, setSelectedProducto] = useState(null);

    useEffect(async () => {
        setProductos(await getProductos());
    }, []);

    const onAgregarAlCarrito = (quantity, producto) => {
        console.log(quantity, producto)
    }

    const onItemSelected = (producto) => {
        setSelectedProducto(producto);
    }

    const ItemDetailList = ({producto}) => {
            return <ItemCount key={producto.id} image={producto.image} name={producto.name} stock={producto.stock} initial={0} />  
        }

    return (
        <>
            <main className="idl">
                <div>
                    <div style={{width: '50%', float: 'left'}}>
                        <ItemDetailList productos={productos}/>
                    </div>
                    <div style={{width: '50%', float: 'right'}}>
                        {selectedProducto && <ItemDetail producto={selectedProducto} />}
                    </div>
                </div>
            </main>
        </>
    )
}

export default ItemDetailContainer