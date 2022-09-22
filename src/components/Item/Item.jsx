import React from 'react'
import './item.scss'
import CustomButton from '../customButton/CustomButton'
import {CgHeart} from 'react-icons/cg'
const Item = ({item}) => {
  const {imageUrl, name, price} = item
  return (
    <div className='item'>
        <div className='image_container'>
            <img src={imageUrl} alt="item" />
        </div>
        <span className="description">{name}</span>
        <div className='controls'>
            <span className='price'>${price}</span>
            <span className="price"><CgHeart/></span>
        </div>
        <CustomButton>Add to Cart</CustomButton>
    </div>
  )
}

export default Item