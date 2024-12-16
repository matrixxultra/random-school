import React from 'react'
import Card from './Card'

const Header = ({panier,onAdd,onDelete}) => {
  
  return (
    <>
      <nav className="navbar bg-body-tertiary container">
        <div className="container-fluid">
          <h1 className="">Mini Store</h1>
          <div className="d-flex" >
            <Card panier={panier} onAdd={onAdd} onDelete={onDelete} />

          </div>
        </div>
        
        
      </nav>
     <div className="container">
      <hr />
     <h3>All Products</h3>
     <br />
     </div>
    </>
  )
}

export default Header
