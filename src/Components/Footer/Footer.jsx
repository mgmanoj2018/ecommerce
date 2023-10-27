import React from 'react'
import './Footer.css'
import logo from '../Assets/logo.png'
import instagram_icon from '../Assets/instagram_icon.png'
import printster_icon from '../Assets/pintester_icon.png'
  import whatsapp_icon from '../Assets/whatsapp_icon.png'
function Footer() {
  return (
    <div className='footer'>
      <div className='footer-logo'>
      <img src={logo} alt='logo' />
        <p>SHOPPER</p>
      </div>
        
        <div className='footer-link'>
          <ul>
            <li>Company</li>
            <li>Products</li>
            <li>Offers</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
          <div className='footer-social-icon'>
            <div className='footer-icon-container'>
              <img src={instagram_icon} alt='intagram' />
            </div>
            <div className='footer-icon-container'>
              <img src={printster_icon} alt='printster' />
            </div>
            <div className='footer-icon-container'>
              <img src={whatsapp_icon} alt='whatsapp' />
            </div>
          </div>
        </div>
        <div className='footer-copyright'>
          <hr/>
          <p>copyright @ 2023 - All Right Reserved.</p>
        </div>
    </div>
  )
}

export default Footer