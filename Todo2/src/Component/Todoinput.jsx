import { useState } from "react"

import "./Todoinput.css"

function TodoInput({Getdata}){
const [Text, setText] = useState()
// 

return <div className="TodoInput"> 
    <h1 ><i class="bi bi-check2-square"></i> React Todo</h1>
    
    
    <div className="inputdiv">
        

    <div><i class="bi bi-plus-lg"></i></div>
    
   
        <input onChange={(e)=>{
            setText(e.target.value) 
        
        }} type="text" placeholder=" Add item..." onKeyPress = {(event) => {
            if(event.key === 'Enter'){
                Getdata(Text)
            }}
          }/>
        <button  classNmae= "inputbtn"onClick={()=>{
            Getdata(Text)
        }}>Add To List</button>
      
 
 
      </div>
    </div>
   
    
    

}

export {TodoInput}