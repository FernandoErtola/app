import {useEffect, useState} from "react"
import ItemList from "./itemList"
import ItemDetails from "./itemDetails"

const getProductos = () => {
    return new Promise((resolve, reject) => {
        fetch('/api.json')
        .then(res => res.json())
        .then(data => {
            setTimeout(() => {resolve(data)}, 2000)
        })
    })
}

const ItemListContainer = () => {

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
                <div>
                    <div style={{width: '50%', float: 'left'}}>
                        <ItemList productos={productos} onAddToCart={onAgregarAlCarrito} onItemSelect={onItemSelected} />
                    </div>
                    <div style={{width: '50%', float: 'right'}}>
                        {selectedProducto && <ItemDetails producto={selectedProducto} />}
                    </div>
                </div>
            </main>
        </>
    )
}

export default ItemListContainer