import React,{createContext, useState} from 'react'
import all_product from '../Components/Assets/all_product'
export const ShopContext =createContext(null)


    const getDefaultCart = ()=>{
        let cart={}
        for (let index = 0; index < all_product.length; index++) {
             cart[index] =0;

        }
       // console.log(cart)
        return cart
       }
const ShopContextProvider = (props)=>{
   
   const [cartItem , setCartItem] = useState(getDefaultCart());
   const addTocart = (itemId)=>{
   setCartItem((pre)=>({...pre,[itemId]:pre[itemId]+1}));
   console.log(cartItem);
   }
   const removTocart = (itemId)=>{
    setCartItem((pre)=>({...pre,[itemId]:pre[itemId]-1}));
    console.log(cartItem)
    }
    const getTotalCartAmount =()=>{
        let totalAmount = 0;
        for(const it in cartItem) { 
            if(cartItem[it] > 0){
                let itemInfo = all_product.find((e)=>{
                   return e.id===Number(it)
                });
                totalAmount += itemInfo.new_price*cartItem[it]
                
            }
            console.log(totalAmount,cartItem[it],cartItem[it].new_price,"fd")
            return totalAmount;
           

        }
    }
    const contextValue = {all_product, cartItem, addTocart, removTocart, getTotalCartAmount }
   console.log(getTotalCartAmount())
    return (
    <ShopContext.Provider value={contextValue }>
        {props.children}
    </ShopContext.Provider>
    )
}

export default ShopContextProvider