import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import { addDelete, addTodo, addtoggle } from '../Redx/action';
import "./Todo.css"

export const Todo = () => {
    const todos = useSelector(store => store.todos)
    const dispatch = useDispatch();
    useEffect(()=>
    {
        getdata()
    },[])

    const [text, setText] = useState("")
    // const [stat, setstat] = useState("false")
    
    const navigate = useNavigate()
    
 
    let i = Math.random(Math.floor(10)*5)
    
    const handleAdd = () => {
      const payload =  {
                title: text,
                status: false,
                id : i,
                dele : "delete"
            }
            axios.post(`http://localhost:8080/todos`,  payload )
        .then(res => {
          console.log(res);
        //   console.log(res.data);

        }).then(()=>setText("")).then(getdata)

        
    }

    const getdata=async()=>{
        //  let res = await fetch("http://localhost:8080/todos")
        //  let data =await res.json()
        //  dispatch(addTodo(data))
        
        
        axios.get(`http://localhost:8080/todos`)
              .then(res => {
                const result = res.data;
                console.log(result)
                dispatch(addTodo(result));
              })
        
        }
        
    const handledel = (id) => {
        const update = todos.filter((e, i) => {
            return e.id !== id 
        })
        console.log(update)
      
        dispatch(addDelete(update))
    }
    const toggle = (id) => {
       var ntodo =  todos.map((e)=>
        {
            if(e.id===id)
            {
                e.status = !e.status
                return e
            }
            return e
            
          
            
    })
        console.log(ntodo)
        dispatch(addtoggle(ntodo))
        
    }
    


    // console.log(todos)
    return (
        <div>
            <input value={text} type="text" onChange={(e) => setText(e.target.value)} />
            <button onClick={handleAdd}>ADD todo</button>
            {

                todos.map((t) => (
                   
                    <div key= {t.title}>   <Link to={`todo/${t.id}`}> <p className={t.status ? "Mark_Done" : null}>{t.title}</p>  </Link> 
                    
                       <button onClick={() => { handledel(t.id) }}>{t.dele}</button>
                       <button onClick={() => { toggle(t.id) }}>{t.status ? "Mark Undone" : "Mark Done"}</button>
                       </div>
                ))
            }


        </div>
    )
}
