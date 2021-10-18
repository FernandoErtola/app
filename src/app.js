import Header from "./header"
import Footer from "./footer"
import Main from "./main"

const General = () => {
    return(
        <>
            <Header 
                nombre="Fernando" 
                apellido="Ertola" 
                edad={35} 
            />
            <Main/>
            <Footer/>
        </>
    )
}


export default General