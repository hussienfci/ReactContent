import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import ConditionalRenderer from './components/ConditionalRendering';
import Counter from './components/Counter';
import Fruits from './components/fruit';
// import HardWareData from './components/HardWare';
import {x , name } from './components/Hello'
import Hello  from './components/Hello'
import Home from './components/Home';
// import ArgFunc from './components/Hello'
import Login from './components/Login';
import Message from './components/Message';
import { useContext, useState } from "react";
import UserContext from './components/Login'
// import Home from "./components/Home";
// let temp = x ; 
// import { flag } from "./components/Login";


function App() {
  let [count , setCount] = useState(0) ;
  const handleRequest = ()=>{
    setCount(count + 1 )
  }
  return (
  
    <>
    <button onClick={handleRequest}>Request</button>
    {/* <Home flag={count}/>  */}

    <Router>
      <Routes>
        <Route

        path='./components/Login'
        element={<Login/>}
      />
        <Route
          path='./components/Home'
          element={<Home flag={count}/>}
        />
      </Routes>
    </Router>
    {/* <h1>Hello from app</h1>
    {console.log(x)}
    {console.log(temp++)}
    {console.log(name)}
    <Hello/>
    
    */}
    {
    /*
    {flag? <Login/>:<Home/>} ;  */}
    {/* <HardWareData/> */}
    {/* <Fruits />  */}
    {/* <ConditionalRenderer/> */}
    {/* <Message/> */}
    {/* <Counter/> */}
    </>
  )
    
}

export default App
