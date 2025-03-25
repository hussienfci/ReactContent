import styles from './footer.module.css'
export default function Footer({completed}){
    return(
        <div className={styles.footer}>
            <span className={styles.item}>Completed Tasks : {completed}</span>
        </div>
    )
}