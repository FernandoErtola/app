
const ItemDetails = ({producto}) => {

    return (
        <>         
                        <img className="img-thumbnail img" src={producto.image} alt="imagen" /> 
                           <div className="ms-3">
                                <h3 className="card-title">{producto.name}</h3>
                                <p className="card-text">{producto.descripcion}</p>
                                <h4 className="card-text">${producto.precio}</h4>
                            </div>   
        </>
    )
    
}

export default ItemDetails;