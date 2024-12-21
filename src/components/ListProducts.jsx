import React, { useState } from 'react'
import { products } from './data'
import Product from './Product'

const ListProducts = () => {
    
const [data,setData] = useState(products)



  return (
    <div className='container d-flex flex-wrap gap-4'>
      {
        data.map((item,key)=><Product key={item.id} product={item} />)
      }
    </div>
  )
}

export default ListProducts
