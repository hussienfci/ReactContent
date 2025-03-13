import { useState } from "react"

export default function Counter(){
    const [count , setCount] = useState(0) ; 
    const Increment= ()=>{
        setCount(count+1 ) 
    }
    
    const Decrement = ( ) => {
        if(count<=0)
            setCount(0)
        else
            setCount(count - 1 )
    }
    return(
        <>
            <h1>{count}</h1>
            <button onClick={Increment}>Increment</button>
            <button onClick={Decrement}>Decrement</button>
            
        </>
    )
}