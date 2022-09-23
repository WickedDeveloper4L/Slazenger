import './cartIcon.scss'
import React from 'react'
import {CgShoppingBag} from 'react-icons/cg'
import { connect } from 'react-redux'
import { toggleCartHidden } from '../../redux/cart/cart.reducer'
import { selectItemCount } from '../../redux/cart/cart.selectors'

const CartIcon = ({toggleCart, itemCount}) => {
  return (
    <div className='cartIcon-container' onClick={toggleCart}>
        <CgShoppingBag className='cartIcon'/>
        <span className="cart-count">{itemCount}</span>
    </div>
  )
}

const mapDispatchToProps = dispatch =>({
  toggleCart: ()=>dispatch(toggleCartHidden())
})

const mapStateToProps = state =>({
  itemCount: selectItemCount(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)