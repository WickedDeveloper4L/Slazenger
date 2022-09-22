import React from 'react'
import './header.scss'
import { CgHome, CgHeart, CgUser, CgLogOut} from 'react-icons/cg'
import { Link } from 'react-router-dom'
import CartIcon from '../CartIcon/CartIcon'
import { auth } from '../../firebase/firebase.utils'

const Header = ({currentUser}) => {
  return (
  <div className='navigation'>
    <div className='header'>
        <div className="title_container">
            <span className="title">SLAZENGER.</span>
        </div>
        <div className="user_container">
            <Link className="option" to='/'><CgHome className='tab'/></Link>
            <span className="option"><CgHeart className='tab'/></span>
            <span className="option"><CartIcon/></span>
            {currentUser ? (<Link className='option' to='/'><CgLogOut className='tab' onClick={()=> auth.signOut()} /></Link>) : (<Link className="option" to='/Login'><CgUser className='tab'/></Link>)}
        </div>
    </div>
    <div className='page_nav'>
      <Link className="nav_item" to='/hats'>
      HATS
      </Link>
      <Link className="nav_item" to='/jackets'>
      JACKETS
      </Link>
      <Link className="nav_item" to='/sneakers'>
      SNEAKERS
      </Link>
      <Link className="nav_item" to='/women'>
      WOMEN'S
      </Link>
      <Link className="nav_item" to='/men'>
      MEN'S
      </Link>
    </div>
    </div>
    
  )
}

export default Header