import React, { useState } from 'react'
import Counter from './Counter'
import { Link, useNavigate } from 'react-router-dom'
function Home() {
  const [userName , setUserName] = useState("guest") 

  const navigate = useNavigate() ;
  
  const handleClick = ()=>{
    navigate('/dashboard' , {state:{userName}}) ; 
  }
  return (
    <div>
        <h1>Hello GTA</h1>
        <Link to="/counter">Counter</Link>
        <br />
        <Link to="/counter/form">Form</Link>
        <br />

        <input
         type="text" 
         value={userName} 
          onChange={(e) => setUserName(e.target.value)}
        />
        <button onClick={handleClick}>Dashboard</button>


    </div>
  )
}

export default Home
