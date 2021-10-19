import Header from "./header"
import Footer from "./footer"
import ItemListContainer from "./itemListContainer"


const General = () => {
    return(
        <>
            <Header 
                nombre="Fernando" 
                apellido="Ertola" 
                edad={35} 
            />
            <ItemListContainer/>
            <Footer/>
        </>
    )
}


export default General