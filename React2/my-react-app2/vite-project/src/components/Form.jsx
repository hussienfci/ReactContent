
import { useState } from "react";

import styles from "./form.module.css" ;


export default function Form({todos , setTodos}){
     const [todo, setTodo] = useState({name:"" , done:false});
    function handleSubmit(e){
            e.preventDefault() ;
            setTodos([...todos , todo]);
            console.log(todos) ; 
            setTodo({name:"" , done:false}) ;
        }

     
        return (
            <>

            <form className={styles.todoForm} onSubmit={(e) => handleSubmit(e)}>
                <div className={styles.inputContainer}>

                    <input 
                    className={styles.inputField}
                    onChange={(e)=> setTodo({name: e.target.value , done:false})}
                    value={todo.name}
                    placeholder="Add Todo"
                    type="text" 
                    />
                    <button className={styles.buttonSubmit} type="submit">Add</button>
                </div>
            </form>
            
            
            
            </>
        )
}