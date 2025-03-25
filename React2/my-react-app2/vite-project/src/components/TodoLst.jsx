import TodoItem from "./TodoItem";

import styles from './todoLst.module.css' ; 

export default function TodoList({todos , setTodos}){
    const sortedTodos = todos.slice().sort((a,b) => Number(a.done) - Number(b.done)) ; 

    // setTodos(sortedTodos)
    // const sortedTodos=   
    return(
        <div className={styles.list}>
            {sortedTodos.map((todo, index) => <TodoItem key={index} setTodos={setTodos} iter= {index} item={todo} lst={todos}/>) }
            {console.log(sortedTodos)}
            {/* {console.log(`22222222222222`)} */}
            {/* {console.log(counter)}
            {counter = counter + 2 } */}
        </div>

    )
}

