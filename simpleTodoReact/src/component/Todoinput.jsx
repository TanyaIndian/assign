import { useState } from "react"


import './Todoinput.css';


const Todoinput = ({getdata}) => {
    const [text , setText] = useState("")
  return (
    <div className="inputdiv"> <input className="inp" onChange={(e)=>{
        setText(e.target.value)
    }} type="text" placeholder="write something" />
    <button onClick={()=>{
        getdata(text)
    }}> + </button>
   
     </div>

  )
}

export default Todoinput