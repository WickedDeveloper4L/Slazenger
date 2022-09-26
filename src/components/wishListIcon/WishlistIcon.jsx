import './wishlistIcon.scss'
import { CgHeart} from 'react-icons/cg'
import React from 'react'
import { connect } from 'react-redux'
import { selectWishlistItems } from '../../redux/wishlist/wishlist.selectors'
import { createStructuredSelector } from 'reselect'

const WishlistIcon = ({wishlistItems}) => {
  return (
    <div className='wishlistIcon-container'>
        <CgHeart className='wishlistIcon'/>
        {wishlistItems.length ? <span className="wishlist-count">.</span> : null}
    </div>
  )
}
const mapStateToProps = createStructuredSelector({
  wishlistItems: selectWishlistItems
})
export default connect(mapStateToProps)(WishlistIcon)