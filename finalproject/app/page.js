"use client"

import { createContext } from "react";
import Products  from "./Products";


export const cartContext = createContext()
export const wishListContext = createContext()

export default function Home() {


  

  
  return (
    <div>
      <cartContext.Provider value={[]}>
        <wishListContext.Provider value={[]} >

          {/* <h1>لعبة جاتا</h1> */}

          <Products/>




        </wishListContext.Provider >
    </cartContext.Provider>
    </div>
  )
  ;
}


























