import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import './stripe.scss'

export const CheckoutWithStripe = ({price}) => {
    const onToken = (token)=>{
        console.log(token)
        alert('payment successful')
    }
    const stripePrice = price * 100
    const publishableKey = 'pk_test_51LoZCKIW4E0OX8GCJ3Sms3FO44CNOFb4nJC8WP5tiGUfoKIqyPISyBo5WrsN55ETHSG2h4GsVadxi0ZhxtYS84YX00gRqXnmS3'


  return (
    <StripeCheckout
    token={onToken}
    stripeKey={publishableKey}
    bitcoin
    alipay
    billingAddress
    shippingAddress
    label='Pay with Stripe'
    panelLabel='Pay Now'
    name='Slazenger Clothing'
    currency='USD'
    amount={stripePrice}
    description={`Your Total is $${price}`}
    className='stripe'
    />
  )
}
