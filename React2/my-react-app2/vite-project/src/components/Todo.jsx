import { useState } from "react" ; 

import Form from "./Form";
import TodoList from "./TodoLst";
import Footer from "./Footer";

export default function Todo(){
    const [todos , setTodos] = useState([]);
    const completed = todos.filter((todo => todo.done)).length
 
    return (
        <>
        <Form todos={todos} setTodos= {setTodos} />
        <TodoList todos= {todos} setTodos={setTodos}/>
        <Footer completed={completed} TodoLength={todos.length}/>


        </>
    )
}