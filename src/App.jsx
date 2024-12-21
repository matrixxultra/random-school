import React, { useContext, useReducer, useState } from 'react'
import Header from './components/Header'
import ListProducts from './components/ListProducts'
import CardContext, { CardReducer } from './components/CardContext'
import { products } from './components/data'

const App = () => {
  const initialState = {
    products:products,
    panier : []
}
  const [state,dispach] = useReducer(CardReducer,initialState)
 
 
  const UseCardContext = useContext(CardContext)
 
 
/*
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
    */
  return (
    <>
     
    <CardContext.Provider value={{state,dispach}}>
    <Header />
    <ListProducts/>
    </CardContext.Provider>
      
    </>
  )
}

export default App
