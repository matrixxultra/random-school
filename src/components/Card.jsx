import React from 'react'

const Card = ({ panier,onAdd , onDelete }) => {
    return (
        <>

<button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
 Card ({panier.length})
</button>


<div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">

                  {panier.map((item,key)=>  
                  <>
                  <div key={key} className="card w-100 mb-3">
                <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">{item.description}</p>
                    <p className="card-text">{item.price} $</p>
                    <button  className="btn btn-info" onClick={()=>onAdd(item.id)} >+</button>
                     {item.quantity}
                    <button  className="btn btn-danger" onClick={()=>onDelete(item.id)}>-</button>
                </div>
                </div>
                </>
                )}
                
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Ok</button>
      </div>
    </div>
  </div>
</div>
        </>
    )
}

export default Card
