import { useState } from "react"

export default function Form(){
    const [name, setName] = useState({firstName: "" , lastName:""})
   
    
    return(

        <>
            <h1>This a form</h1>
            <form>
                <input 
                type="text"
                // onChange = {function event(e){return handleChange(e)} }
                onChange={(e) => setName({...name , firstName: e.target.value})}
                placeholder="Enter Name: "
                value={name.firstName}
                />
                <input 
                type="text"
                // onChange = {function event(e){return handleChange(e)} }
                onChange={(e) => setName({...name, lastName:e.target.value})}
                placeholder="Enter Name: "
                value={name.lastName}
                />



            </form>

        
        
        </>
    )
}