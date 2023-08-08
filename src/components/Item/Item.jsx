import "./Item.css"

const Item = ({id, nombre, precio, img}) => {
  return (
    <div className="container-card">
        <p>ID:{id}</p>
        <img className="imgCard" src={img} alt={nombre} />
        <h3>Nombre: {nombre}</h3>
        <p>Precio:${precio}</p>
        
        <button>Ver Detalles</button>
    </div>
  )
}

export default Item