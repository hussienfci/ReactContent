import { useState } from "react"
import styles from './form.module.css'
export default function Form({todos, setTodos}){
    const [todo, setTodo]= useState({name: "", done: false})
    function handelSubmit(e){
        e.preventDefault()
        setTodos([...todos, todo])
        setTodo({name: "", done: false})
    }
    return(
        <>
             <form className={styles.todoForm} onSubmit={(e) => handelSubmit(e)}>
                <div className={styles.inputContainer}>
                    <input
                    className={styles.inputfield}
                    placeholder="Add Todo"
                    onChange={(e) => setTodo({name: e.target.value, done: false})} 
                    type="text" 
                    value={todo.name}/>
                    <button className={styles.buttonSubmit} type="submit">Add</button>
                </div>
            </form>
        </>
    )
}