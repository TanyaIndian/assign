import React, { useEffect, useState } from 'react'




const Counter = () => {
    const [minute,setminute] = useState(0)
    const [count,setCount] = useState(0)
    const [hr,sethr] = useState(0)
    const [show,setshow]  = useState(false)
    var timer
    useEffect(()=>{
   if(show)
   {
      timer = setInterval(()=>
     {
         setCount(count+1)
         if(count==59)
         {
             setminute(minute+1)
             setCount(0)
         }
         if(minute==59)
         {
             sethr(hr+1)
             setminute(0)
         }

     },400)
   }
   return ()=>clearInterval(timer)
    })
  return (
    <div>
        <h1>0{hr}:{minute<10 ? "0"+minute: minute}:{count<10 ? "0"+count: count}</h1>
        
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
       setminute(0)
       setCount(0)
       sethr(0)
    }}>reset</button>
        </div>

  )
}

export default Counter


