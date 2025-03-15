import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Switch , 
} from "react-router-dom";

// import ConditionalRenderer from './components/ConditionalRendering';
import Counter from './components/Counter';
// import Fruits from './components/fruit';
// // import HardWareData from './components/HardWare';
// import {x , name } from './components/Hello'
// import Hello  from './components/Hello'
// import Home from './components/Home';
// // import ArgFunc from './components/Hello'
// import Login from './components/Login';
// import Message from './components/Message';
// import { useContext, useState } from "react";
// import HardWareData from "./components/HardWare";
// import UserContext from './components/Login'
// import Home from "./components/Home";
// let temp = x ; 
// import { flag } from "./components/Login";
import Form from "./components/Form";
import Todo from "./components/ToDo";


function App() {
  // let [count , setCount] = useState(0) ;
  // const handleRequest = ()=>{
  //   setCount(count + 1 )
  // }
  return (
  
    <>
    <Todo/>
    <Form />
    <Counter/>
    {/* <button onClick={handleRequest}>Request</button>
    <Home flag={count}/>   */}
    {/* <Router>
      <div>
        <Switch>

            <Routes>
              <Route
              exact
              path='./components/Message'
              component={<Message/>}
            />
              <Route
                path='./components/Login'
                component={<Login/>}
              />
              
              <Route
                path='./components/HardWare'
                component={<HardWareData/>}
              />
            </Routes>
        </Switch>
      </div>
    </Router> */}
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
