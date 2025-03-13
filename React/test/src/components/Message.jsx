export default function Message(){
    function handleClick(){
        console.log("The button Clicked") ; 
    }
    return (
        <>
            <h1>
                This is a message component 
            </h1>
            <button onClick={handleClick}>Click me</button>
       </>
    )
}