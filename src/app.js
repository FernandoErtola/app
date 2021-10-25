
import Header from "./header"
import Footer from "./footer"
import ItemCount from "./itemCount"
import ItemListContainer from "./itemListContainer"


const App = () => {

    return(
        <>
                       
            <Header 
                nombre="Fernando" 
                apellido="Ertola" 
                edad={35} 
            />
            <ItemCount />
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