import { useState } from "react"

export default function Counter(){
    const [count , setCount] = useState(0) ; 
    const [val , setVal] = useState(1) ;
    const increment= ()=>{
        setCount(count+val ) 
    }
    
    const decrement = ( ) => {
        if(count<=0)
            setCount(0)
        else
            setCount(count - val )
    }
    return(
        <>
            <h1>{count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            
            <h1>Value to be added or subtract: {val}</h1>
            <button onClick={()=> setVal(val + 1 )}>Increment Value</button>
            <button onClick={()=> setVal(val - 1 )}>Decrement Value</button>
       
       
        </>
    )
}