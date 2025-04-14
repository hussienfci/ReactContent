import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from '../pages/Counter'

import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import Home from '../pages/Home'
import Form from '../pages/Form'
import PageNotFound from '../pages/PageNotFound'
import Product from '../pages/Product'

// import { createContext } from 'react'
import Outline from '../pages/Outline'

export const userContext = createContext("")

function App() {
  const [count, setCount] = useState(0)

  return (

    <>
    <userContext.Provider value={"Hello World from context"}>
    <h1>Hello Ya L3bt GTA</h1>    

    <Outline/>
    </userContext.Provider>
     {/* <BrowserRouter>
            <Routes>
                <Route path='/Home' element={<Home/>} />

                <Route path='/Dashboard' element={<Dashboard/>} />

                <Route path='/counter' element={<Counter/>}>

                  <Route path='Form' element={<Form/>} />

                </Route>

                <Route path='*' element={<PageNotFound/>}/>
                
                <Route path='/product/:id' element={<Product/>} />
            </Routes>
        </BrowserRouter> */}
       
    </>
  )
}

export default App
