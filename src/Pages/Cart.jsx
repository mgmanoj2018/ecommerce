import React from 'react'
import './CSS/Cart.css'
import CartItems from '../Components/CartItem/CartItems'
function Cart() {
  return (
    <div className='cart'>
       <CartItems/>
    </div>
  )
}

export default Cart