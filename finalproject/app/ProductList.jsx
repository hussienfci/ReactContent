


import React from 'react'
import ProductItem from './ProductItem'

function ProductList({prod}) {

  // function card(){
  

  // console.log(prod)
// }
      
  return (
    <div className='w-auto '>


        <section>
          <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
            <header>
              <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">Product Collection</h2>

              <p className="mt-4 max-w-md text-gray-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque praesentium cumque iure
                dicta incidunt est ipsam, officia dolor fugit natus?
              </p>
            </header>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
             
              {prod.map((i) => (
                              <ProductItem key={i.id} item={i}/>
                  ))}

             
            </div>
          </div>
        </section>


     
    </div>
  )
}

export default ProductList
