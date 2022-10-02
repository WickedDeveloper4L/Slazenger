import React from 'react'
import './checkout.scss'
import { createStructuredSelector } from 'reselect'
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors'
import {connect} from 'react-redux'
import CheckoutItem from '../../components/checkout-item/CheckoutItem'
import {PaystackButton} from 'react-paystack'


const Checkout = ({cartItems, total}) => {

  const config = {
    reference: (new Date()).getTime().toString(),
    email: 'userEmail@mail.com',
    amount: total,
    publicKey: 'pk_test_bb3f90aaa8f3507f7d1ee4748ddcb1831cd31e6b',
  }
  const handlePaymentSuccess = (reference) => {
    console.log(reference)
  }
  const handlePaystackDialogueClose = ()=>{
    console.log('closed')
  
  }

  const componentProps ={
    ...config,
    text: 'Pay Now',
    onSuccess: (reference)=> handlePaymentSuccess(reference),
    onClose: handlePaystackDialogueClose,
  }

  return (
    <div className='checkout-page'>
        <h1 className="title">COMPLETE ORDER</h1>
        <div className='checkout-items'>
            {cartItems.length ?  (cartItems.map(cartItem => 
                <CheckoutItem key={cartItem.id} cartItem={cartItem}/>))
             : null}
        </div>
        {cartItems.length ? (<div className='total'>TOTAL: ${total}</div>) : (<span className='option'>It's boring down here!&#128565;</span>)}
        {cartItems.length ? <PaystackButton {...componentProps} className='paystack'/> : null}
    </div>
  )
}
const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(Checkout)