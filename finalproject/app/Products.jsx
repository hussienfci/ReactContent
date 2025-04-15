'use client'

import React, { useEffect, useState } from 'react'
import ProductList from './ProductList'


function Products() {
  
  const [products , setProd] = useState(null)

  useEffect(()=>{
    async function fetchData() {
      const data = await fetch('https://dummyjson.com/products')
      const res = await data.json() ; 

      setProd(res) ; 

    } 
    fetchData()
  } , [])
  

  if (!products)
    return <div>Loading....!</div>


  return (
    <div className='bg-amber-50'>
         <ProductList prod={products.products}/>
      
    </div>
  )
}

export default Products
