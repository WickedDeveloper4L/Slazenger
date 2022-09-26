import React from 'react'
import './item.scss'
import CustomButton from '../customButton/CustomButton'
import {CgHeart} from 'react-icons/cg'
import { connect } from 'react-redux/es/exports'
import { addItem} from '../../redux/cart/cart.reducer'
import { wishItem } from '../../redux/wishlist/wishlist.reducer'

const Item = ({item, addItem, wishItem}) => {
  const {imageUrl, name, price} = item
  return (
    <div className='item'>
        <div className='image_container'>
            <img src={imageUrl} alt="item" />
        </div>
        <span className="description">{name}</span>
        <div className='controls'>
            <span className='price'>${price}</span>
            <span className="price" onClick={()=> wishItem(item)}><CgHeart/></span>
        </div>
        <CustomButton item onClick={() => addItem(item)}>Add to Cart</CustomButton>
    </div>
  )
}
const mapDispatchToProps = dispatch =>({
  addItem: item=>dispatch(addItem(item)),
  wishItem: item => dispatch(wishItem(item))
})
export default connect(null, mapDispatchToProps)(Item)