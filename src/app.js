/*const General = () => "Hola Mundo del React"*/

/*const General = () => {
    return (
        "Hola Mundo de react"
        )
}*/

import Header from "./header"

const General = () => {
    return(
        <>
            <Header/>
            <main/>
            <footer>
                <p>Copyright</p>
            </footer>
        </>
    )
}


export default General