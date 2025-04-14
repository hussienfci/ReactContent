import React from 'react'
import { useParams } from 'react-router-dom'

function Product() {
    const {id} = useParams() ; 
  return (
    <div>
      <h1>Hello from products {id % 2} = {id} % 2 </h1>
    </div>
  )
}

export default Product
