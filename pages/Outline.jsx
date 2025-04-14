import React, { useContext } from 'react'
import { userContext } from '../src/App'
export default function Outline() {
  const data = useContext(userContext)
    return (
    <div>
        <h1>Hello from outline - {data} </h1>
        
    </div>
  )
}