import { useState } from "react";
 let Form = ()=>{
    const [first, setFirst]=useState("")

    const formhandler =(event)=>{
      event.preventDefault()
      console.log(first)

    }
    return(
        <>
        <input type ='text' value ={first}onChange={(event)=> 
        setFirst(event.target.value)}/>
        <button onClick={formhandler}>Submit</button>
        </>
    )
 }
 export default Form