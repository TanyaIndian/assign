import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

export const PrivateComponent = ({children}) => {
   var st= localStorage.getItem('Name')
   console.log(st)

    if(st)
    {
        return <Navigate to="/login" />
    }
  return children
  
}
