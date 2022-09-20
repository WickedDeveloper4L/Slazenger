import React from 'react'
import './header.scss'
import {CgShoppingBag} from 'react-icons/cg'

const Header = () => {
  return (
  <div className='navigation'>
    <div className='header'>
        <div className="title_container">
            <span className="title">SLAZENGER.</span>
        </div>
        <div className="user_container">
            <span className="option">wishlist</span>
            <span className="option">user</span>
            <span className="option"><CgShoppingBag/></span>
        </div>
    </div>
    <div className='page_nav'>
      <span className="nav_item">
      HATS
      </span>
      <span className="nav_item">
      JACKETS
      </span>
      <span className="nav_item">
      SNEAKERS
      </span>
      <span className="nav_item">
      WOMEN'S
      </span>
      <span className="nav_item">
      MEN'S
      </span>
    </div>
    </div>
    
  )
}

export default Header