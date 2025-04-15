

import React, { useContext } from 'react'
import { FaRegHeart } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { wishListContext , cartContext } from './page';

function ProductItem({item}) {
    
    let cart = useContext(cartContext) ;
    let wishList = useContext(wishListContext)

    function wished(item){
        wishList.push(item) ;
        let targetItemDiv = document.getElementById(item.id) ; 
        targetItemDiv.querySelector('.notWishbutton').className = "hidden" ;
        targetItemDiv.querySelector('.Wished').className = "Wished" ;
        
    }

    let quantityCounter = 1 ; 
    
    function IncrementQuant(id){
        
        let targetItemDiv = document.getElementById(id)  ;
        quantityCounter = Math.min((quantityCounter + 1), item.stock); 
        targetItemDiv.querySelector(".quantity").value = quantityCounter ; 


        
    }
    function decrementQuant(id){
        
        quantityCounter = Math.max((quantityCounter - 1) , 0) ; 
        let targetItemDiv = document.getElementById(id)  ;
        targetItemDiv.querySelector(".quantity").value = quantityCounter ; 
    }   
    function addToChart(item) {
        // console.log(item) ;
        // console.log(cart) ;
        cart[(+item.id) - 1 ] = item ; 
        let targetItemDiv = document.getElementById(item.id)  ;
        targetItemDiv.querySelector('.unselected').className = `hidden` ;
        targetItemDiv.querySelector('.Selected').className = 'Selected rounded-2xl border border-solid border-teal-500 mt-2 flex items-center gap-1' ;
    }
    

  return (
    <div id={item.id}>
                <div className="group relative block overflow-hidden border border-solid border-teal-500 m-8 rounded-2xl">
                    <button 
                        className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75"
                        onClick={()=>wished(item)}
                    >
                        <span className="sr-only">Wishlist</span>
                        <span className='notWishbutton'><FaRegHeart /></span>
                        <span className='hidden Wished'><FcLike/></span>

                    </button>

                    <img
                        src={item.images}
                        alt=""
                        className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
                    />

                    <div className="relative border border-t-teal-500 bg-white p-6">
                        <p className="text-gray-700">
                        ${item.price}  <br />
                        <span className="text-gray-400 line-through">${(item.price / (item.discountPercentage? item.discountPercentage * 0.01: 1 )).toFixed(2)}</span>
                        </p>

                        <h3 className="mt-1.5 text-lg font-medium text-emerald-700">{item.title}</h3>

                        <p className="mt-1.5 line-clamp-3 text-gray-700">{item.description}
                        </p>


 
              
                        <div className='addtoCart text-[#102C57]'>
                            <div className="unselected mt-4 flex gap-4 text-[#102C57]">
                                <button
                                    className="block w-full rounded-sm bg-gray-100 px-4 py-3 text-sm font-medium text-gray-900 transition hover:scale-105"
                                    onClick={()=> addToChart(item)}
                                >
                                    Add to Cart
                                </button>

                                <button
                                    type="button"
                                    className=" block w-full rounded-sm bg-gray-900 px-4 py-3 text-sm font-medium text-white transition hover:scale-105"
                                >
                                    Buy Now
                                </button>
                            </div>
                            
                            <div>

                                {/* If selected */}

                            <div className="Selected hidden items-center gap-1">
                                <label htmlFor="Quantity" className="sr-only"> Quantity </label>
                                <button 
                                type="button"
                                onClick={()=> decrementQuant(item.id)}
                                className="size-10 text-4xl text-teal-500 ml-10 mr-7  mb-9 leading-10 text-amber-50 transition hover:opacity-75">
                                _
                                </button>


                                <input
                                    type="number"
                                    id="Quantity"
                                    value="1"
                                    // onChange={(e)=> {e.target.value = quantityCounter}}
                                    className="quantity h-10 w-16 rounded-sm border-gray-200 text-center [-moz-appearance:_textfield] sm:text-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                                    />

                                <button
                                 type="button"
                                onClick={()=>IncrementQuant(item.id)}
                                className="size-10 leading-10 text-4xl ml-5  text-teal-500 transition hover:opacity-75">
                                +
                                </button>
                            </div>
                            </div>
                            
                        </div>
                    </div>
                </div>  

      
    </div>
  )
}

export default ProductItem
