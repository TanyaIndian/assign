// import React from 'react'
import './category.css'
const Category = ({image,label}) => {
  return (
  
    <div className='dis'>
   <a href={image}>{label}</a>
     
    </div>
  )
}

export default Category