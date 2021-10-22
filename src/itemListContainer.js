import {useState} from "react"

const ItemListContainer = ({nombre, apellido, edad}) => {
    
/*      let contador = 0
 */ 
/*     const resultado = useState("Hola")
    const estado = resultado[0]
    const setEstado = resultado [1]  */
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