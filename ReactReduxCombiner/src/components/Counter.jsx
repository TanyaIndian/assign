import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCount } from '../Redx/Counter/action'

export const Counter = () => {
    const dispatch= useDispatch()
const counter =useSelector((store)=>
  store.counter.counter
)
  return (
    <div><h3>Counter :{counter}</h3>
    <button onClick={()=>{
     dispatch(addCount(1))
    }}>ADD 1</button>
    </div>
  )
}
