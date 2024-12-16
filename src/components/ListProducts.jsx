import React, { useState } from 'react'
import { products } from './data'
import Product from './Product'

const ListProducts = ({onAdd}) => {
    
const [data,setData] = useState(products)



  return (
    <div className='container d-flex flex-wrap gap-4'>
      {
        data.map((item,key)=><Product key={key} product={item} onAdd={onAdd}/>)
      }
    </div>
  )
}

export default ListProducts
