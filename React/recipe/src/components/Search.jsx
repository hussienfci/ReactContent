import { useEffect, useState } from "react"
import styles from './search.module.css'

const URL = "https://api.spoonacular.com/recipes/complexSearch"
const API_KEY = "b0bb362c30b641dc82b23f49e30da1a7"

export default function Search({foodData, setFoodData}){
    const [query, setQuery] = useState("pizza")  
    useEffect(() => {
        async function fetchFood(){
            const response = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`)
            const data = await response.json()
            setFoodData(data.results)
        }
        fetchFood()
    },[query])

    return(<>
        <div className={styles.searchContainer}>
            <input 
                className={styles.input}
                type="text"
                placeholder="Search for food"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
        </div>
    </>)
}