import './App.css'
import Container from './components/Container'
import FoodDetails from './components/FoodDetails'
import FoodList from './components/FoodList'
import InnerContainer from './components/InnerContainer'
import Nav from './components/Nav'
import Search from './components/Search'
import { useState } from 'react'

function App() {
    const [foodData, setFoodData] = useState([])
    const [foodId , setFoodId] = useState("658615")
    return (
  <>
    <Nav />
    <Search foodData={foodData} setFoodData={setFoodData}/>
    <Container>
      <InnerContainer>
         <FoodList foodData={foodData} setFoodId={setFoodId}/>
      </InnerContainer>
      <InnerContainer>
          <FoodDetails foodId={foodId}/>
      </InnerContainer>
    </Container>
  </>
  )
}

export default App
