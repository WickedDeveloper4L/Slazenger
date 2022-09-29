import React from 'react'
import './wishlistItem.scss'
import CustomButton from '../customButton/CustomButton'
import { connect } from 'react-redux/es/exports'
import { addItem } from '../../redux/cart/cart.reducer'
import { removeItem } from '../../redux/wishlist/wishlist.reducer'

const WishlistItem = ({item, addItem, removeItem}) => {

    const {imageUrl, name, price} = item
  return (
    <div className='wishlist-item'>
        <div className='image_container'>
            <img src={imageUrl} alt="item" />
        </div>
        <span className="description">{name}</span>
        <div className='control'>
            <span className='price'>${price}</span>
        </div>
        <CustomButton onClick={()=> addItem(item)}>Add to Cart</CustomButton>
        <span className='remove' onClick={()=> removeItem(item)}>&#10006;</span>
    </div>
  )
}

const mapDispatchToProps = dispatch =>({
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item))
})
export default connect(null, mapDispatchToProps)(WishlistItem)