import React from 'react'
import { useNavigate } from 'react-router-dom'

const Item = ({product}) => {

    const {id, img, name, description, price, stock}= product
    const navegar = useNavigate()
  return (
    <div className="card" style={{width:'20rem', margin:'.5rem'}}>
    <img src={img} className="card-img-top" alt={name}/>
    <div className="card-body">
        <p className="card-text">{name}</p>
        <p className="card-text">{description}</p>
        <p className="card-text">${price}</p>
        <p className="card-text">stock: {stock}</p>
    </div>
    {/* Navegacion con un boton  */}
    <button className='btn btn-primary' onClick={()=>navegar(`/detalle/${id}`)}>Ver más</button>
     {/* Navegacion con un link  */}
    {/* <Link to={`/detalle/${id}`}>Ir al detalle</Link> */}
        {/* Navegacion con boton y link (no recomiendo) */}
        {/* <Link  to={`/detalle/${id}`}>
          <button className='btn btn-primary'>Ver más</button> 
        </Link> */}
  </div>

  )
}

export default Item