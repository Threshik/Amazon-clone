import React from 'react'
import './header.css'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
function header() {
  return (
    <div 
    className="header">
      <img
      className="header-logo"
      src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt="Amazon Logo"/>

      <div
      className="header-search">
        <input
        className='header-searchInput' type='text'/>
        <SearchOutlinedIcon
        className='header-searchIcon'/>
      </div>

    <div className='header-nav'>
        <div className='header-option'>
            <span className='header-option-one'>Hello Guest</span>
            <span className='header-option-two'>Sign in</span>
        </div>
        <div className='header-option'>
             <span className='header-option-one'>Returns</span>
            <span className='header-option-two'>& Orders</span>
        </div>
        <div className='header-option'>
             <span className='header-option-one'>Your</span>
            <span className='header-option-two'>Prime</span>
        </div>

        <div
        className='header-optionbasket'>
            <ShoppingCartOutlinedIcon/>
            <span className=' header-option-two header-optionbasketCount'>0</span>
        </div>
        
    </div>


    </div>
  )
}

export default header
