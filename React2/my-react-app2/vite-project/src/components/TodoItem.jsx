import styles from './todoItem.module.css'
export default function TodoItem({item , lst,setTodos , iter}){
    // console.log(`iterator: ${iter}`)
    
    const deleteItem = ()=> {
        const sortedTodos = lst.slice().sort((a,b) => Number(a.done) - Number(b.done)) ; 
        setTodos(sortedTodos) ; 
        // console.log(`Iter: ${iter}`)
        let finalList="" ;
        if(+iter=== 0){
            // console.log(sortedTodos) ; 
            // console.log('Iterator equal zero')
            finalList = sortedTodos.slice(1 , lst.length)
            // console.log(finalList) ;
            // console.log('zzzzzzzzzzzzzzzzzzzzzz')
        }
        else{
            const fHalf = sortedTodos.slice(0 , iter) ;
            const AfterUnWanted = sortedTodos.slice(iter+1 , lst.length) ; 
            finalList = fHalf.concat(AfterUnWanted) ; 
        }
        setTodos(finalList)
    }
    function handleDone(itr ){
        const sortedTodos = lst.slice().sort((a,b) => Number(a.done) - Number(b.done)) ; 
        setTodos(sortedTodos) ; 
        setTodos(sortedTodos.map((todo , index) => index === itr? {...todo, done:!todo.done} : todo))
        // const sortedTodos = lst.slice().sort((a,b) => Number(a.done) - Number(b.done)) ; 
        // setTodos(sortedTodos) ; 
        // console.log(lst) ;
    }
    // console.log(item.done) 
    const className = item.done? styles.doneTask: "" ;
    return (
        <>
            <div id={iter} className={styles.item}>
                <div className={styles.itemName}>
                    <span className={className}
                    onClick={()=> handleDone(iter)}>
                        {item.name}
                    </span> 
                    <span>
                        <button className={styles.deleteButton} onClick={deleteItem}>X</button>
                    </span> 
                </div>
                <hr className={styles.line}/>
            </div>
            {/* {console.log(`3333333333333333`)} */}
            {/* {console.log(counter)}
            {counter = counter +2} */}
        </>
    )
}