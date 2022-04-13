import { useState } from "react"
import Todoinput from "./Todoinput"
import Todoitem from "./Todoitem"
import {nanoid} from "nanoid"
import './Todo.css';
const Todo = () => {
    const [todolist,settodolist] = useState([])
    const getdata = (todo)=>
    {
      const payload = 
      {
        title : todo,
        status: false,
        id: nanoid(5)
        
      }
        settodolist([...todolist,payload])
        // console.log("ayushi")
    }
    const handlestatus = (id)=>
    {
console.log(id)
settodolist([...todolist.map(e=>e.id===id ? {...e, status: !e.status} : e)])
    }
  return (
    <div className="main">
       {
           todolist.map((e) => (
               <Todoitem  handlestatus = {handlestatus} todo={e} />
           ))
        }
        <Todoinput getdata={getdata}/>
       

    </div>
  )
}

export default Todo