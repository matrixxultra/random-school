import React, { useContext } from 'react'
import CardContext from './CardContext'

const Product = ({product}) => {
  const myContext = useContext(CardContext)
  return (
    <>
    <div className="card" style={{width: '18rem'}}>
        <img src={product.image} className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text">{product.description}</p>
            <p className="card-text">{product.price} $</p>
            <button className="btn btn-primary" onClick={()=>myContext.dispach({type:"Ajouter",payload:product})}>Add To Panel</button>
        </div>
    </div>

 
</>
  )
}

export default Product
