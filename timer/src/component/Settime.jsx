
import React, { useEffect, useState } from 'react'


const Settime = () => {
    const [minute,setminute] = useState(4)
    const [count,setCount] = useState(59)
    // const [hr,sethr] = useState(0)
    const [show,setshow]  = useState(false)
    var timer
    useEffect(()=>{
   if(show)
   {
      timer = setInterval(()=>
     {
         setCount(count-1)
         if(count == 0)
         {
             setminute(minute-1)
             setCount(59)
         }
         if(minute==0)
         {
             setminute(0)
             setCount(0)
             clearInterval(timer)
         }
         console.log(count)

     },100)
   }
   return ()=>clearInterval(timer)
    })
  return (
    <div>
        <h1>{minute<10 ? "0"+minute: minute}:{count<10 ? "0"+count: count}</h1>
        
      <button onClick={()=>
    {
        setshow(true)
    }}>start</button>
    <button onClick={()=>
    {
        setshow(false)
    }}>stop</button>
    <button onClick={()=>
    {
       setminute(4)
       setCount(59)
  
    }}>reset</button>
        </div>

  )
}


export default Settime