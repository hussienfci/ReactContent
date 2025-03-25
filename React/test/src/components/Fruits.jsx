export default function Fruits(){
    // const fruits = ['apple', 'orange', 'mango', 'banana']
    const fruits = [{name: 'apple',price:8, quantity:10}, {name: 'orange',price:20, quantity:10},
       {name: 'mango',price:5, quantity:10}, {name: 'banana',price:12, quantity:10}]
return(
<>
    {fruits.map((fruit) => (
        <div key={fruit.name}>
          <h1 className="font-semibold">{fruit.name}</h1>
          <p>Price: ${fruit.price}</p>
          <p>Qty: {fruit.quantity}</p>
        </div>
      ))}
      </>
    )
    
}

// npm i tailwind