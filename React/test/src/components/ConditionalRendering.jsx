// // import Login from "./Login";
// // import Hello  from "./Hello";
import HardWareData  from "./HardWare";
import { hardware } from "./HardWare";
export default function ConditionalRenderer(){

    // let data = hardware ; 
    /// 1- if condition is true 

    // let display = false ; 

    // if(display ){
    //     return <Hello/>
    // }
    // else
    //     return <Login/>


    //2- Empty variable
    // let display = true ; 
    // let message ; 
    // if(display)
    //     message = <Hello/>
    // else
    //     message = <Login/>
    // return message ; 


    // 3- Ternary Operator
    // return display? <Hello/>: <Login/>
    // console.log(hardware)    
    // let data = hardware.filter(item=>item.price<100)

    return <HardWareData hardWare={hardware.filter(item=>item.price<100)}/>;  
    
} 