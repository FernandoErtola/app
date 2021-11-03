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

    return (
        <>
            <main className="ilc">
                    <div style={{width: '50%', float: 'right'}}>
                        {productos.map(p =>
                        <ItemDetail image={p.image}
                        descripcion={p.descripcion}
                        stock={p.stock}
                        precio={p.precio}
                        name={p.name} />
                        )}
                    </div>
            </main>
        </>
    )
}

export default ItemDetailContainer