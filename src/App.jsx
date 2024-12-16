import React, { useState } from 'react'
import Header from './components/Header'
import ListProducts from './components/ListProducts'

const App = () => {
  const [panier,setPanier] = useState([])

  const handleAdd = (produit)=>{
    const item = panier.find(i=>i.id == produit.id)
    if (!item) {
      setPanier([...panier,{...produit , quantity : 1}])
    }
    else{
      setPanier(panier)
    }
     
  }
  const handleIncrementQuantity = (id)=>{

    setPanier(panier.map(i=>i.id== id ? {...i , quantity : i.quantity + 1} : i ))
  
  }
  const handleDecrementQuantity = (id)=>{
    const item = panier.find(i=>i.id == id)
    if (item.quantity == 1) {
      setPanier(panier.filter(i=>i.id !== item.id))
    }
    else{
      setPanier(panier.map(i=>i.id== item.id ? {...i , quantity : i.quantity - 1} : i ))
    }
  }
  return (
    <>
      <Header panier={panier} onAdd={handleIncrementQuantity} onDelete={handleDecrementQuantity}/>
      <ListProducts onAdd={handleAdd}/>
    </>
  )
}

export default App
