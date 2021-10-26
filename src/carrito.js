const Carrito = ({items}) => {
    return items.map(i => {
        return <>
            <div><span>{i.name}</span></div>
        </>
    })
}

export default Carrito;