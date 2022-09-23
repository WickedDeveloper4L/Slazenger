import './wishlist.scss'
import { CgHeart} from 'react-icons/cg'
import React from 'react'

const WishlistIcon = () => {
  return (
    <div className='wishlistIcon-container'>
        <CgHeart className='wishlistIcon'/>
        <span className="wishlist-count">0</span>
    </div>
  )
}

export default WishlistIcon