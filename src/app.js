
import Header from "./header"
import Footer from "./footer"
import ItemListContainer from "./itemListContainer"


const App = () => {

    return(
        <>
                       
            <Header 
                nombre="Fernando" 
                apellido="Ertola" 
                edad={35} 
            />
            <ItemListContainer
                nombre="Fernando" 
                apellido="Ertola" 
                edad={35} 
            />
            <Footer/>
        </>
    )
}

export default App