import React from 'react'
import './Header.css';
import { Outlet,Link } from 'react-router-dom';
function Header() {
    return (
        <div className="header"> 
         <Link to='/'><img className="header__logo"  src="https://pngimg.com/uploads/bitcoin/bitcoin_PNG39.png" alt='logo'/></Link>
   
        <div className="header__nav">
            <Link to= '/services'>
            <div   className='header__option'>
                <span className='header__optionLineOne'>
                    SERVICES
                </span>
                 
            </div>
            </Link>
            <Link to='/webnars'>
            <div className='header__option'>
                <span className='header__optionLineOne'>
                    WEBINARS
                </span>
            </div>
            </Link>
            <Link to='/profile'>
            <div className='header__option'>
                <span className='header__optionLineOne'>
                     PROFILE EVALUATION
                </span>
            </div>
            </Link>
            <Link to='/about'>
            <div className='header__option'>
                <span className='header__optionLineOne'>
                    ABOUT US
                </span>
            </div>
            </Link>
            <Link to='/contact'>
            <div className='header__option'>
                <span className='header__optionLineOne'>
                    CONTACT US
                </span>
            </div>
            </Link>
        </div>
        <Outlet/>
        </div>
    )
}

export default Header
