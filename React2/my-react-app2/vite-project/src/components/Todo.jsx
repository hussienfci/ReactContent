import { useState } from "react" ; 

import Form from "./Form";
import TodoList from "./TodoLst";

export default function Todo(){
    const [todos , setTodos] = useState([]);
    
 
    return (
        <>
        <Form todos={todos} setTodos= {setTodos} />
        <TodoList todos= {todos}/>
        
        </>
    )
}