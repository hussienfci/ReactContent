import styles from './todoItem.module.css'
export default function TodoItem({item , lst , iter}){
    const deleteItem = ()=> {
        // console.log(lst) ; 
        const fHalf = lst.slice(0 , iter) ;
        const AfterUnWanted = lst.slice(iter+1 , lst.length) ; 
        const finalList = fHalf.concat(AfterUnWanted) ; 
        lst = finalList ; 
        document.getElementById(iter).remove(); 
        console.log(finalList) ;

            // for(let i = 0 ; i < props.lst.length ; i ++ ){
            //     if(props.key !== i)
            //         props.lst[i] = props.lst[i] ;

            // }   
    }
    return (
        <>
            <div id={iter} className={styles.item}>
                <div className={styles.itemName}>
                    {item}
                    <span>
                        <button className={styles.deleteButton} onClick={deleteItem}>X</button>
                    </span> 
                </div>
                <hr className={styles.line}/>
            </div>
        
        </>
    )
}