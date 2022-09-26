import React from 'react'
import './checkout.scss'
import { createStructuredSelector } from 'reselect'
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors'
import {connect} from 'react-redux'
import CheckoutItem from '../../components/checkout-item/CheckoutItem'

const Checkout = ({cartItems, total}) => {
  return (
    <div className='checkout-page'>
        <h1 className="title">COMPLETE ORDER</h1>
        <div className='checkout-items'>
            {cartItems.length ?  (cartItems.map(cartItem => 
                <CheckoutItem key={cartItem.id} cartItem={cartItem}/>))
             : null}
        </div>
        {cartItems.length ? (<div className='total'>TOTAL: ${total}</div>) : (<span className='option'>It's boring down here!&#128565;</span>)}
    </div>
  )
}
const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(Checkout)