import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Counter } from './Counter'

export const ShowTodo = () => {
    const todos = useSelector(store => store.todos)
    const {id} = useParams()
    console.log(id)
    console.log(todos)
  return (
    <div>ShowTodo
        <Counter></Counter>
        {todos.map((e)=>(
            e.id == id ? (<div>{e.title}</div>) : "niklo"
        ))}
    </div>
  )
}
