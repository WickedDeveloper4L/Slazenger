import React from 'react'
import './checkoutItem.scss'
import { addItem, clearCartItem, removeItem } from '../../redux/cart/cart.reducer'
import {connect} from 'react-redux'
import CustomButton from '../customButton/CustomButton'

const CheckoutItem = ({cartItem, clearItem, removeItem, addItem}) => {
    const {imageUrl, name, price, quantity} = cartItem
  return (
    <div className='checkout-item'>
        <div className='image-container'>
            <img src={imageUrl} alt="ItemImage" />
        </div>
        <span className="description">{name}</span>
        <div className='controls'>
            <span className='price'>${price}</span>
            <span className='quantity'>
            <span className='quantity_control' onClick={()=> removeItem(cartItem)}>&#10096;</span>
            <span className='quantity_figure'>{quantity}</span>
            <span className='quantity_control' onClick={()=> addItem(cartItem)}>&#10097;</span>
            </span>
        </div>
        <CustomButton className='button' onClick={() => clearItem(cartItem)}>Remove</CustomButton>
    </div>
  )
}
const mapDispatchToProps = dispatch =>({
    clearItem: item => dispatch(clearCartItem(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
})
export default connect(null, mapDispatchToProps)(CheckoutItem)