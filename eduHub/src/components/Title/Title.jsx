import React from 'react'
import './Title.css'
const Title = ({Title,SubTitle}) => {
  return (
    <div className='title'> 
      <p>{SubTitle}</p>
      <h2>{Title}</h2>
    </div>
  )
}

export default Title
