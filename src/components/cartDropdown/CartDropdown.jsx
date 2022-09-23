import React from 'react'
import CustomButton from '../customButton/CustomButton'
import './cartdropdown.scss'
import { connect } from 'react-redux/es/exports'
import Cartitem from '../cart-item/CartItem'
import { selectCartItems } from '../../redux/cart/cart.selectors'
import {createStructuredSelector} from 'reselect'

const CartDropdown = ({cartItems}) => {
  return (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {cartItems.map(cartItem => <Cartitem key={cartItem.id} item={cartItem}/>)}
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default connect(mapStateToProps)(CartDropdown)