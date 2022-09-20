import React from 'react'
import './custombutton.scss'

const CustomButton = ({children}) => {
  return (
    <button className='custom-button'>
    {children}
    </button>
  )
}

export default CustomButton