import { useState } from "react"

export default function Todo(){
    const [todo, setTodo] = useState("");
    const [todos , setTodos] = useState([]);
    function handleSubmit(e){;
        e.preventDefault() ;
        setTodos([...todos , todo]);
        setTodo("") ;
        
    }
 
    return (
        <>
        <form onSubmit={(e) => handleSubmit(e)}>
            <input 
            onChange={(e)=> setTodo(e.target.value)}
            value={todo}
            placeholder="Add Todo"
            type="text" 
            />
            <button type="submit">Add</button>
        </form>
        {todos.map(item=> console.log(item))}
        
        {todos.map(item=> <h1>{item}</h1>)}
        
        
        
        </>
    )
}