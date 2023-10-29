import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png';
import logo_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
function Navbar() {
  const [menu,setMenu] = useState("shop");
  const {cartItem} =useContext(ShopContext)
  return (
    <>
        <div className='Navbar'>
            <div className='logo'>
              <Link >
              <img src={logo} alt='logo'/>
                <p>SHOPPER</p>
              </Link>
            </div>
            <div className='nav-menu'>
                <li onClick={()=>setMenu("shop")}><Link to="/">Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
                <li onClick={()=>setMenu("Man")}><Link to='/man'>Man</Link>{menu==="Man"?<hr/>:<></>}</li>
                <li onClick={()=>setMenu("women")}><Link to="/women">Women</Link>{menu==="women"?<hr/>:<></>}</li>
                <li onClick={()=>setMenu("child")}><Link to='/child'>Child</Link>{menu==="child"?<hr/>:<></>}</li>
               </div>
            <div className='nav-login-cart'>
             <Link to="/login"> <button>login</button></Link>
              <Link to='/cart'><img src={logo_icon} alt='logo_icon' /></Link>
              <div className='nav-cart-count'>0</div>
            </div>
        </div>
    </>
    
  )
}

export default Navbar