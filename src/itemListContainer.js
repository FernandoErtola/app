import {useState} from "react"
import ItemList from ItemList.js
import Productos from "./api.json";

const ItemListContainer = ({id, nombre, precio}) => {


    
     let contador = 0

    const resultado = useState("Hola")
    const estado = resultado[0]
    const setEstado = resultado [1]  
    const [saludo,setSaludo] = useState("Bienvenido")
    const [contador, setContador] = useState(0)

    const Acumula = () => {
        
        setContador(contador + 1)
        
   }
   console.log(contador)
    return(
        <>
        <button onClick={Acumula}>click</button>

        <main className="ilc">
            <p>{saludo} <a className="user">{nombre} ({edad})</a></p>
            <p>{contador}</p>
        </main>
        </>
    )
}

export default ItemListContainer