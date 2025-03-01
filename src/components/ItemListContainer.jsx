const ItemListContainer = ({greeting, nombreUsuario}) => {
    return(
        <div className='itemListContainer'>
            <h1>{greeting} {nombreUsuario.name}</h1>
        </div>
    )
}

export default ItemListContainer