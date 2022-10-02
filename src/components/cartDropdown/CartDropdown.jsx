import React from 'react'
import CustomButton from '../customButton/CustomButton'
import './cartdropdown.scss'
import { connect } from 'react-redux/es/exports'
import Cartitem from '../cart-item/CartItem'
import { selectCartItems } from '../../redux/cart/cart.selectors'
import {createStructuredSelector} from 'reselect'
import { withRouter } from 'react-router-dom'
import { toggleCartHidden } from '../../redux/cart/cart.reducer'
import { selectCurrentUser } from '../../redux/user/user.selectors'
import { Link } from 'react-router-dom'

const CartDropdown = ({cartItems, history, dispatch, currentUser}) => {
  return (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {cartItems.map(cartItem => <Cartitem key={cartItem.id} item={cartItem}/>)}
        </div>
        {currentUser ? <CustomButton onClick={() => {history.push('/checkout'); dispatch(toggleCartHidden())}}>GO TO CHECKOUT</CustomButton>
        : <Link to='/Login' className='prompt'>To Checkout, login here</Link>
      }
        <CustomButton onClick={() => dispatch(toggleCartHidden())}>CLOSE</CustomButton>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    currentUser: selectCurrentUser
})

export default withRouter(connect(mapStateToProps)(CartDropdown))