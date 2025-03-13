import { useState, createContext, useContext } from "react"

// import { Link } from "react-router-dom"
export const UserContext = createContext() ; 
function Login(){
    let flag = false ;  
    // const [count , setCount] = useState(0) 
    const [password, setPassword]  = useState("0000")
    const [userName , setUserName] = useState("husssien")
    const logInBtn = ()=>{
        // <Link to='/ConditionalRendering'>Conditional Rendering</Link>
        // setCount(count + 1 ) 

       flag = true ; 
    }
    const selectorBlock = ()=>{
        document.getElementById('id01').style.display='block' ; 
    }
    const selectorNone = ()=>{
        document.getElementById('id01').style.display='none'
    }
    const addUser = (e)=> {
        setUserName(e.target.value)
    }
    const addPass = (e)=>{
        setPassword(e.target.value) 
    }
    return (
        <div>
            <UserContext.Provider value={flag}>

                <button className="logIn" onClick={selectorBlock}
                >Login</button>
                
                {/* The Modal */}
                <div id="id01" className="modal" > 
                    <span onClick={selectorNone}
                    className="close" title="CLose Modal">&times;</span>
                    
                        
                    <form action="" method="post">
                        <div className="imgcontainer">
                            <img src="https://avatar.iran.liara.run/public/11" alt="Avatar" />

                        </div>
                        <div className="container">
                            {/* Username  */}
                            <label htmlFor="uname"><b>Username</b></label>
                            <input type="text" onChange={addUser}  name="uname" placeholder="Enter Username" required />

                            {/* Password */}
                            <label htmlFor="psw"><b>Password</b></label>
                            <input onChange={addPass} type="password" placeholder="Enter Password" name="psw" required/>

                            {/* Submit button */}
                            <button onClick={logInBtn} >Login</button>
                            <label >
                                <input type="checkbox" name= "remember" />
                                Remember me 
                            </label>
                        </div>

                        <div className="container" style={{backgroundColor: "#f1f1f1"}} >
                            <button type="button" onClick={selectorNone} className="cancelbtn">
                                Cancel</button>
                            <span className="psw">Forget <a href="#">Password</a></span>
                        </div>
                    </form>
                </div>
            </UserContext.Provider>

         </div>
    )
}
// export flag ; 
export default Login ; 
// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'


// createRoot(document.getElementById('loginTab')).render(
//   <StrictMode>
//     <Login />
//   </StrictMode>,
// )
