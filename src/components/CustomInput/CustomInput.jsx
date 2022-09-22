import React from 'react'
import './custom.input.scss'

const CustomInput = ({handleChange, ...otherProps}) => {
  return (
    <div className='group'>
        <input className='form-input' onChange={handleChange} {...otherProps}/>
    </div>
  )
}

export default CustomInput