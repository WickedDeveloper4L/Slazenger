import React from 'react'
import './item.scss'
import CustomButton from '../customButton/CustomButton'

const Item = () => {
  return (
    <div className='item'>
        <div className='image_container'>
            <img src="" alt="" />
        </div>
        <span className="description"></span>
        <div className='controls'>
            <span className='price'></span>
            <span className='quantity'></span>
            <span className='quantity_figure'></span>
        </div>
        <CustomButton>Add to Cart</CustomButton>
    </div>
  )
}

export default Item