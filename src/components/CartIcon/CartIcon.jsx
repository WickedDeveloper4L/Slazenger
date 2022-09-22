import './cartIcon.scss'
import React from 'react'
import {CgShoppingBag} from 'react-icons/cg'

const CartIcon = () => {
  return (
    <div className='cartIcon-container'>
        <CgShoppingBag className='cartIcon'/>
        <span className="cart-count">0</span>
    </div>
  )
}

export default CartIcon