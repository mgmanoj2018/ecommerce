import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assets/cart_cross_icon.png'
function CartItems(props) {
  //  const {product} = props
  const {all_product, cartItem,removTocart, getTotalCartAmount }= useContext(ShopContext);
 // console.log(getTotalCartAmount(),"yrewry");
  return ( 
    <div className='cartitem'>
        <div className='cartitems-format-main'>
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr/>
        {all_product.map((e)=>{
            if(cartItem[e.id]>0){
                 return (
                    <div className='cartitems-format cartitems-format-main-product'>
                    <img src={e.image} alt='' className='cartion-product-icon' />
                    <p>{e.name}</p>
                    <p>${e.new_price}</p>
                    <button className='cartitems-quantity'>{cartItem[e.id]}</button>
                    <p>${e.new_price*cartItem[e.id]}</p>
                    <img className='cartitems-remove-icon' src={remove_icon} alt='remove' onClick={()=>removTocart(e.id)} />
                   
                </div>
                 )
                }else{
                    return null
                }
             }
        )}
        <div className='cartitems-down'>
            <div className='cartitems-total'>
                <h1>cart Total</h1>
                <div>
                    <div className='cartitems-total-item'>
                        <p>SubTotal</p>
                        <p>${getTotalCartAmount()}</p>
                    </div>
                    <hr/>
                    <div className='cartitems-total-item'>
                        <p>shiping fee</p>
                        <p>free</p>
                    </div>
                    
                    <div className='cartitems-total'>
                        <h1>Total</h1>
                        <h1>${getTotalCartAmount()}</h1>
                    </div>
                </div>
                <button>Proceed To Check</button>
            </div>
            <div className='cartitems-promocode'>
             <p>If You have a promo code, Enter it here.</p>
             <div className='cartitems-promoBox'>
                <input type='text' placeholder='code promo'/>
                <button >submit</button>
             </div>
            </div>
        </div>
    </div>
  )
}

export default CartItems