import React from 'react'

const Product = ({product,onAdd}) => {
  return (
    <>
    <div className="card" style={{width: '18rem'}}>
        <img src={product.image} className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text">{product.description}</p>
            <p className="card-text">{product.price} $</p>
            <button className="btn btn-primary" onClick={()=>onAdd(product)}>Add To Panel</button>
        </div>
    </div>

 
</>
  )
}

export default Product
