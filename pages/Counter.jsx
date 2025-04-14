import React, { useReducer, useState } from 'react'
import { Outlet } from 'react-router-dom'
function Counter() {
    // const [count , setCount] = useState(0) ; 
    // const [val , setValue] = useState(1) ; 
    
    const [state , dispatch] = useReducer(reducer , {count:0 , value: 1} ) 

    function reducer(state , action ){
        if(action.type === "Increment"){
            return {...state, count:state.count  + state.value }
        }
        else if(action.type === "Decrement"){
            return {...state, count:state.count  - state.value }
        }
        else if(action.type === "valueNum" ){
            return {...state , value: +(action.payload)}
        }
        // return "data"
    }
    

    // const Increment = () => {setCount(count + val) ; }
    // const decrement = ()=> {setCount(count - val) ;}

    return (
    <div>

        <h1>Hello</h1>
        <h1>Counter: {state.count}</h1>

        {/* <button onClick={Increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <h2>Value of update: {val}</h2> */}

        <button onClick={()=> dispatch({type:"Increment"})}> Increment Value</button>
        <button onClick={()=> dispatch({type:"Decrement"})}> Decrement Value</button>
        <br />
        <label htmlFor="">Value of Calculation: </label>
        <input type="number" value={state.value} onChange={(e)=> dispatch({type:"valueNum" , payload:e.target.value})} className='inputField' />
        <Outlet/>
    </div>
  )}

export default Counter
