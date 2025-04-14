import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'


function Dashboard() {
  
  const location = useLocation()
  const {userName} = location.state || "guest" 
  console.log(userName) ;
  return (
  
  <div>
        <h1>Dashboard</h1>
        <h2>{userName}</h2>
        <Outlet/>
    </div>
  )
}

export default Dashboard
