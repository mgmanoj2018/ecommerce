import React,{createContext, useState} from 'react'
import all_product from '../Components/Assets/all_product'
export const ShopContext =createContext(null)


    const getDefaultCart = ()=>{
        let cart={}
        for (let index = 0; index < all_product.length; index++) {
             cart[index] =0;

        }
        console.log(cart)
        return cart
       }
const ShopContextProvider = (props)=>{
   const [cartItem , setCartItem] = useState(getDefaultCart());
   const addTocart = (itemId)=>{
   setCartItem((pre)=>({...pre,[itemId]:pre[itemId]+1}))
   }
   const removTocart = (itemId)=>{
    setCartItem((pre)=>({...pre,[itemId]:pre[itemId]-1}))
    }
   const contextValue = {all_product,cartItem, addTocart, removTocart }
   //console.log(cartItem)
    return (
    <ShopContext.Provider value={contextValue }>
        {props.children}
    </ShopContext.Provider>
    )
}

export default ShopContextProvider