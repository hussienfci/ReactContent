function Hello(){
    return <div>
        <h1> Hello world!  </h1>
        <h2>لعبة جاتا</h2>
        <Car/>    
        <Football/>
        <ArgFunc  name="Hussien" age = {25}/>
        <HardWareData/>

        
    </div>
}
function Car(props){
    return(<>
        
    <li><h2>Hello with Car with type {props.brand} ! </h2></li>
    
    </>
    ) 
        
}
function ArgFunc(props){
    return (
        <div >
            <ul>
                <li>Name: {props.name}</li>
                <li>age: {props.age}</li>
            </ul>
        </div>
    )
}
function Football(){
    const lst = [
        {id: 1, brand: 'Ford'},
        {id: 2, brand: 'BMW'},
        {id: 3, brand: 'Audi'}
      ];
    const shoot = (a, b)=> {
        console.log(`${b.type} and ${a}`) ; 
    }
    return (
        <>
            <button onClick={(event)=>shoot("Goal!" , event)}>Take a shot! </button>
            <ul>
                {lst.map((elem) => <Car key= {elem.id} brand={elem.brand}/>)}
            </ul>
        </>
    )  ; 
}




export let x= 6 ; 
export let name = "Hussien" ; 

export default Hello ; 