import { useEffect, useState } from 'react'
import styles from './FoodDetails.module.css'
export default function FoodDetails({foodId}){
    const [targetFood , setTargetFood] = useState({})
    // console.log(foodId)
    const URL = `https://api.spoonacular.com/recipes/${foodId}/information`
    const API_Key = 'b0bb362c30b641dc82b23f49e30da1a7'

    useEffect(()=>{
        async function fetchFood(){
            const response = await fetch(`${URL}?apiKey=${API_Key}`)
            const data = await response.json()
            console.log(data)
            setTargetFood(data) ; 
        }
        fetchFood()
         
    }, [foodId])

    return(
        <div className={styles.FoodDetails}>
            <h1>Food Details: {targetFood.title}</h1>
            {/* <p>{targetFood.extendedIngredients.name}</p> */}

        </div>
    )
}