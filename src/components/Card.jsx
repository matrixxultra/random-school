import React, { useContext } from 'react'
import CardContext from './CardContext'

const Card = () => {
  const myContext = useContext(CardContext)
 
    return (
        <>

<button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
 Card ({myContext.state.panier.length})
</button>


<div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>


      <div className="modal-body">
                  {myContext.state.panier?.map((item,key)=>  
                  <>
                  <div key={item.id + key} className="card w-100 mb-3">
                <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">{item.description}</p>
                    <p className="card-text">{item.price} $</p>
                    <button  className="btn btn-info" onClick={()=>myContext.dispach({type:"Increment",payload : item})} >+</button>
                     {item.quantity}
                    <button  className="btn btn-danger" onClick={()=>myContext.dispach({type:"Decrement",payload : item})}>-</button>
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
