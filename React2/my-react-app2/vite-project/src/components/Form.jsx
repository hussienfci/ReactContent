
import { useState } from "react";

import styles from "./form.module.css" ;


export default function Form({todos , setTodos}){
     const [todo, setTodo] = useState("");
    function handleSubmit(e){
            e.preventDefault() ;
            setTodos([...todos , todo]);
            console.log(todos) ; 
            setTodo("") ;
        }

     
        return (
            <>

            <form className={styles.todoForm} onSubmit={(e) => handleSubmit(e)}>
                <div className={styles.inputContainer}>

                    <input 
                    className={styles.inputField}
                    onChange={(e)=> setTodo(e.target.value)}
                    value={todo}
                    placeholder="Add Todo"
                    type="text" 
                    />
                    <button className={styles.buttonSubmit} type="submit">Add</button>
                </div>
            </form>
            
            
            
            </>
        )
}