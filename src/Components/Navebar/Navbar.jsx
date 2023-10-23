import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png';
import logo_icon from '../Assets/cart_icon.png'
function Navbar() {
  const [menu,setMenu] = useState("shop")
  return (
    <>
        <div className='Navbar'>
            <div className='logo'>
               <img src={logo} alt='logo'/>
               <p>SHOPPER</p>
            </div>
            <div className='nav-menu'>
                <li onClick={()=>setMenu("shop")}>Shop{menu==="shop"?<hr/>:<></>}</li>
                <li onClick={()=>setMenu("Man")}>Man{menu==="Man"?<hr/>:<></>}</li>
                <li onClick={()=>setMenu("women")}>Women{menu==="women"?<hr/>:<></>}</li>
                <li onClick={()=>setMenu("child")}>Child{menu==="child"?<hr/>:<></>}</li>
               </div>
            <div className='nav-login-cart'>
              <button>login</button>
              <img src={logo_icon} alt='logo_icon' />
              <div className='nav-cart-count'></div>
            </div>
        </div>
    </>
    
  )
}

export default Navbar