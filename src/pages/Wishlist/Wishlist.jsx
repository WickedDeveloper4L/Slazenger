import React from 'react'
import './wishlist.scss'
import WishlistItem from '../../components/wishlist-item/WishlistItem'
import { connect } from 'react-redux'
import { selectWishlistItems } from '../../redux/wishlist/wishlist.selectors'
import { createStructuredSelector } from 'reselect'

const Wishlist = ({wishlistItems, clearWishlist}) => {
  return (
    <div className='wishlist-page'>
        <span className="title">My Wishlist</span>
        <div className="wishlist-items">
            {wishlistItems.length ?  (wishlistItems.map(wishlistItem => <WishlistItem key={wishlistItem.id} item={wishlistItem}/>)) : null}
        </div>

        {wishlistItems.length ? null: <span className='option'>It's boring down here!&#128565;</span>}
    </div>
  )

}

const mapStateToProps = createStructuredSelector({
    wishlistItems: selectWishlistItems
})

export default connect(mapStateToProps)(Wishlist)