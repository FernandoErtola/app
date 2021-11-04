import {useEffect, useState} from "react"
import ItemList from "./itemList"
import ItemDetails from "./itemDetails"
import { useParams, useHistory } from "react-router-dom"

const getProductosStar = (star) => {
            return new Promise((resolve, reject) => {
                fetch('/api.json')
                .then(res => res.json())
                .then(data => {
                    const elemento = data.find(item => item.star === 1)
                    setTimeout(() => {resolve(data)}, 2000)
                })
            })
        }
    
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

    const history = useHistory();

    const [productos, setProductos] = useState([]);
    const [productosStar, setProductosStar] = useState([]);

    const {star} = useParams()
    useEffect(async () => {
        setProductosStar(await getProductosStar(parseInt(star)));
    }, []);

    useEffect(async () => {
        setProductos(await getProductos());
    }, []);

    const onAgregarAlCarrito = (quantity, producto) => {
        console.log(quantity, producto)
    }

    const goToDetail = (producto) => {
        history.push(`/item/${producto.id}`)
    }

   const goToStar = (id) => {
        history.push(`/productos/${star.id}`)
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