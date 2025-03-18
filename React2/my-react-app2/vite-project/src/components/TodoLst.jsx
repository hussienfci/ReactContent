import TodoItem from "./TodoItem";

import styles from './todoLst.module.css' ; 

export default function TodoList({todos}){
    return(
        <>
        <div className={styles.list}>
            {todos.map((todo, index) => <TodoItem key={index} iter= {index} item={todo} lst={todos}/>) }
        </div>
        
        
        </>
    )
}

