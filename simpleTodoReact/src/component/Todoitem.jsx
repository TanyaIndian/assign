// import React from 'react'
import './Todoitem.css';
const Todoitem = ({ handlestatus, todo}) => {
  return (
<div className='listdiv' >
{todo.title} - {todo.status ? "Done" : "not done"} 
<button className="btn" onClick={()=>handlestatus(todo.id)}></button> </div>
  )
}

export default Todoitem
