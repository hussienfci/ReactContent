import styles from './footer.module.css'
export default function Footer({completed , TodoLength}){
    return(
        <div className={styles.footer} >
            <span className={styles.item}>
                Complete Task(s): {completed}
                <br />
                Pended Task(s): {TodoLength - completed}
            </span>

        
        </div>
    )
}